// ============================================================
// SCORING ENGINE
// Calculates points and syncs with API-Football data
// ============================================================

const Scoring = (() => {

  // Calculate points for a single prediction
  function calculatePoints(prediction, result) {
    if (!result || result.status !== 'FT') return null; // not finished

    const predHome = parseInt(prediction.homeScore);
    const predAway = parseInt(prediction.awayScore);
    const realHome = parseInt(result.homeScore);
    const realAway = parseInt(result.awayScore);

    let points = 0;
    let breakdown = { score: 0, result: 0, scorer: 0 };

    // Exact score: 3 points
    if (predHome === realHome && predAway === realAway) {
      points += 3;
      breakdown.score = 3;
    }
    // Correct result (win/draw/loss): 1 point
    else {
      const predResult = getResult(predHome, predAway);
      const realResult = getResult(realHome, realAway);
      if (predResult === realResult) {
        points += 1;
        breakdown.result = 1;
      }
    }

    // First goalscorer: 2 points
    if (prediction.firstScorer && result.firstScorer) {
      if (normalisePlayerName(prediction.firstScorer) === normalisePlayerName(result.firstScorer)) {
        points += 2;
        breakdown.scorer = 2;
      }
    }

    return { points, breakdown };
  }

  function getResult(home, away) {
    if (home > away) return 'H';
    if (away > home) return 'A';
    return 'D';
  }

  // Normalise names for comparison (handles accent differences etc.)
  function normalisePlayerName(name) {
    return name.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z\s]/g, '')
      .trim();
  }

  // ============================================================
  // API-FOOTBALL INTEGRATION
  // ============================================================

  // Fetch live/finished fixture from API-Football by match date & teams
  async function fetchMatchResult(match) {
    try {
      const date = match.kickoff.split('T')[0];
      const url = `${API_FOOTBALL_BASE}/fixtures?league=${WC2026_LEAGUE_ID}&season=${WC2026_SEASON}&date=${date}`;
      const res = await fetch(url, {
        headers: {
          'x-apisports-key': API_FOOTBALL_KEY
        }
      });
      const data = await res.json();
      if (!data.response) return null;

      // Find the specific fixture by home/away team name
      const fixture = data.response.find(f => {
        const home = f.teams.home.name.toLowerCase();
        const away = f.teams.away.name.toLowerCase();
        return home.includes(match.home.toLowerCase()) || match.home.toLowerCase().includes(home) ||
               away.includes(match.away.toLowerCase()) || match.away.toLowerCase().includes(away);
      });

      if (!fixture) return null;

      const status = fixture.fixture.status.short; // NS, 1H, HT, 2H, FT, AET, PEN etc.
      const homeScore = fixture.goals.home;
      const awayScore = fixture.goals.away;

      // Get first goalscorer from events
      let firstScorer = null;
      if (fixture.events && fixture.events.length > 0) {
        const goals = fixture.events
          .filter(e => e.type === 'Goal' && e.detail !== 'Missed Penalty')
          .sort((a, b) => a.time.elapsed - b.time.elapsed);
        if (goals.length > 0) {
          firstScorer = goals[0].player.name;
        }
      }

      return {
        fixtureId: fixture.fixture.id,
        status,
        homeScore: homeScore !== null ? homeScore : null,
        awayScore: awayScore !== null ? awayScore : null,
        firstScorer,
        elapsed: fixture.fixture.status.elapsed,
        isLive: ['1H','HT','2H','ET','BT','P','INT'].includes(status),
        isFinished: ['FT','AET','PEN'].includes(status)
      };
    } catch (err) {
      console.error('API-Football fetch error:', err);
      return null;
    }
  }

  // Fetch squad players for a team from API-Football
  async function fetchSquad(teamName) {
    // First check local data
    if (WC2026_SQUADS[teamName]) {
      return WC2026_SQUADS[teamName];
    }
    // Fallback: try to find team ID and fetch from API
    try {
      const res = await fetch(`${API_FOOTBALL_BASE}/teams?name=${encodeURIComponent(teamName)}&league=${WC2026_LEAGUE_ID}&season=${WC2026_SEASON}`, {
        headers: { 'x-apisports-key': API_FOOTBALL_KEY }
      });
      const data = await res.json();
      if (!data.response || data.response.length === 0) return [];
      const teamId = data.response[0].team.id;

      const squadRes = await fetch(`${API_FOOTBALL_BASE}/players/squads?team=${teamId}`, {
        headers: { 'x-apisports-key': API_FOOTBALL_KEY }
      });
      const squadData = await squadRes.json();
      if (!squadData.response || squadData.response.length === 0) return [];

      return squadData.response[0].players
        .filter(p => ['Attacker','Midfielder','Forward'].includes(p.position))
        .map(p => p.name);
    } catch (err) {
      console.error('Squad fetch error:', err);
      return WC2026_SQUADS[teamName] || [];
    }
  }

  // Process all predictions for a finished match and update Firestore
  async function processMatchResults(matchId, result) {
    const predictionsSnap = await db.collection('predictions')
      .where('matchId', '==', matchId).get();

    const batch = db.batch();
    const userPointsMap = {};

    predictionsSnap.forEach(doc => {
      const prediction = doc.data();
      if (prediction.scored) return; // already processed

      const calc = calculatePoints(prediction, result);
      if (calc === null) return;

      batch.update(doc.ref, {
        points: calc.points,
        breakdown: calc.breakdown,
        scored: true,
        scoredAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      if (!userPointsMap[prediction.userId]) userPointsMap[prediction.userId] = 0;
      userPointsMap[prediction.userId] += calc.points;
    });

    // Update match with final result
    batch.update(db.collection('matches').doc(matchId), {
      result: {
        homeScore: result.homeScore,
        awayScore: result.awayScore,
        firstScorer: result.firstScorer,
        status: result.status
      },
      processed: true
    });

    await batch.commit();

    // Update user totals (separate from batch to use increment)
    for (const [userId, pts] of Object.entries(userPointsMap)) {
      await db.collection('users').doc(userId).update({
        totalPoints: firebase.firestore.FieldValue.increment(pts)
      });
    }
  }

  // Poll for live results - called on a timer for matches in progress
  async function pollLiveMatches() {
    const now = new Date();
    const windowStart = new Date(now.getTime() - 2 * 60 * 60 * 1000); // 2hrs ago
    const windowEnd = new Date(now.getTime() + 30 * 60 * 1000); // 30 min ahead

    // Find matches that might be live or recently finished
    const matchesSnap = await db.collection('matches')
      .where('processed', '==', false)
      .get();

    for (const doc of matchesSnap.docs) {
      const match = doc.data();
      const kickoff = new Date(match.kickoff);
      if (kickoff < windowStart || kickoff > windowEnd) continue;
      if (match.home === 'TBD' || match.away === 'TBD') continue;

      const result = await fetchMatchResult(match);
      if (!result) continue;

      // Update live score in Firestore for UI
      await doc.ref.update({
        liveResult: result
      });

      // Process final result
      if (result.isFinished && !match.processed) {
        await processMatchResults(doc.id, result);
      }
    }
  }

  return { calculatePoints, fetchMatchResult, fetchSquad, processMatchResults, pollLiveMatches };
})();
