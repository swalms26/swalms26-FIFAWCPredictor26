// ============================================================
// SCORING ENGINE
// Manual scoring via admin panel - no external API needed
// ============================================================

const Scoring = (() => {

  // Calculate points for a single prediction against a result
  function calculatePoints(prediction, result) {
    if (!result || result.status !== 'FT') return null;

    const predHome = parseInt(prediction.homeScore);
    const predAway = parseInt(prediction.awayScore);
    const realHome = parseInt(result.homeScore);
    const realAway = parseInt(result.awayScore);

    let points = 0;
    let breakdown = { score: 0, result: 0, scorer: 0, qualifier: 0 };

    // Exact score (after 90 mins): 3 points
    if (predHome === realHome && predAway === realAway) {
      points += 3;
      breakdown.score = 3;
    }
    // Correct result after 90 mins (win/draw/loss): 1 point
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

    // Correct team to qualify (knockout only): 1 point
    // Only scored when the result records a qualifier (i.e. a knockout match).
    if (result.qualifier && prediction.qualifier) {
      if (prediction.qualifier === result.qualifier) {
        points += 1;
        breakdown.qualifier = 1;
      }
    }

    return { points, breakdown };
  }

  function getResult(home, away) {
    if (home > away) return 'H';
    if (away > home) return 'A';
    return 'D';
  }

  function normalisePlayerName(name) {
    return name.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z\s]/g, '')
      .trim();
  }

  // Process all predictions for a match once admin enters the result
  async function processMatchResults(matchId, result) {
    const predictionsSnap = await db.collection('predictions')
      .where('matchId', '==', matchId).get();

    if (predictionsSnap.empty) {
      console.log('No predictions found for match', matchId);
      return 0;
    }

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

    // Save result to match document
    batch.update(db.collection('matches').doc(matchId), {
      result: {
        homeScore: result.homeScore,
        awayScore: result.awayScore,
        firstScorer: result.firstScorer || null,
        qualifier: result.qualifier || null,
        status: 'FT'
      },
      processed: true,
      liveResult: null
    });

    await batch.commit();

    // Update user point totals (skip missing users)
    for (const [userId, pts] of Object.entries(userPointsMap)) {
      try {
        const userDoc = await db.collection('users').doc(userId).get();
        if (userDoc.exists) {
          await db.collection('users').doc(userId).update({
            totalPoints: firebase.firestore.FieldValue.increment(pts)
          });
        }
      } catch(e) {
        console.warn('Could not update points for user', userId, e);
      }
    }

    return Object.keys(userPointsMap).length;
  }

  // Undo a previously processed result (in case of admin error)
  async function unprocessMatch(matchId) {
    const predictionsSnap = await db.collection('predictions')
      .where('matchId', '==', matchId)
      .where('scored', '==', true)
      .get();

    const batch = db.batch();
    const userPointsMap = {};

    predictionsSnap.forEach(doc => {
      const p = doc.data();
      if (!userPointsMap[p.userId]) userPointsMap[p.userId] = 0;
      userPointsMap[p.userId] -= (p.points || 0);

      batch.update(doc.ref, {
        points: null,
        breakdown: null,
        scored: false,
        scoredAt: null
      });
    });

    batch.update(db.collection('matches').doc(matchId), {
      result: null,
      processed: false
    });

    await batch.commit();

    // Update user totals, skip deleted users
    for (const [userId, pts] of Object.entries(userPointsMap)) {
      if (pts !== 0) {
        try {
          const userDoc = await db.collection('users').doc(userId).get();
          if (userDoc.exists) {
            await db.collection('users').doc(userId).update({
              totalPoints: firebase.firestore.FieldValue.increment(pts)
            });
          }
        } catch(e) {
          console.warn('Could not update points for user', userId, e);
        }
      }
    }
  }

  // No-op poll function (kept so app.js doesn't break)
  async function pollLiveMatches() {}

  return { calculatePoints, processMatchResults, unprocessMatch, pollLiveMatches };
})();
