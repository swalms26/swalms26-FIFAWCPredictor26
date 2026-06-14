// ============================================================
// MAIN APP MODULE
// Renders all views: matches, predictions, leaderboard
// ============================================================

const App = (() => {

  let currentUser = null;
  let currentView = 'matches';
  let livePollingInterval = null;

  // ── Bootstrap ──────────────────────────────────────────────

  async function init(user) {
    currentUser = user;

    // Ensure user doc exists
    const userDoc = await db.collection('users').doc(user.uid).get();
    if (!userDoc.exists) {
      await db.collection('users').doc(user.uid).set({
        displayName: user.displayName || (user.email ? user.email.split('@')[0] : 'Player'),
        email: user.email,
        totalPoints: 0,
        joinedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    }

    // Seed matches if not yet done (first-time setup)
    await seedMatchesIfNeeded();

    // Show main app
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');

    // Render nav
    renderNav();
    showView('matches');

    // Polling disabled - scores entered manually via admin panel
  }

  async function seedMatchesIfNeeded() {
    const snap = await db.collection('matches').limit(1).get();
    if (!snap.empty) return; // already seeded

    console.log('Seeding match data...');
    const batch = db.batch();
    WC2026_MATCHES.forEach(match => {
      const ref = db.collection('matches').doc(match.id);
      batch.set(ref, {
        ...match,
        processed: false,
        liveResult: null,
        result: null
      });
    });
    await batch.commit();
    console.log('Matches seeded.');
  }

  // ── Navigation ─────────────────────────────────────────────

  function renderNav() {
    const nav = document.getElementById('nav');
    nav.innerHTML = `
      <div class="nav-inner">
        <div class="nav-brand">
          <span class="nav-ball">⚽</span>
          <span class="nav-title">WC26 Predictor</span>
        </div>
        <div class="nav-links">
          <button class="nav-btn" data-view="matches" onclick="App.showView('matches')">Matches</button>
          <button class="nav-btn" data-view="leaderboard" onclick="App.showView('leaderboard')">Leaderboard</button>
          <button class="nav-btn nav-btn--user" onclick="App.showView('profile')">
            ${escapeHtml(currentUser.displayName || 'Me')}
          </button>
        </div>
      </div>
    `;
  }

  function showView(view) {
    currentView = view;
    // Update nav active state
    document.querySelectorAll('.nav-btn[data-view]').forEach(btn => {
      btn.classList.toggle('nav-btn--active', btn.dataset.view === view);
    });
    const main = document.getElementById('main');
    main.innerHTML = '<div class="loading-spinner"></div>';

    if (view === 'matches') renderMatches();
    else if (view === 'leaderboard') renderLeaderboard();
    else if (view === 'profile') renderProfile();
  }

  // ── Matches View ───────────────────────────────────────────

  let matchViewMode = 'date'; // 'date' or 'group'
  let cachedMatches = null;
  let cachedPredictions = null;

  let cachedAllPredictions = null; // matchId -> array of predictions (all users)
  let cachedUsers = null; // userId -> { displayName }

  async function renderMatches(forceRefresh) {
    const main = document.getElementById('main');

    if (!cachedMatches || forceRefresh) {
      main.innerHTML = '<div class="loading-spinner"></div>';
      const matchesSnap = await db.collection('matches').get();
      const predictionsSnap = await db.collection('predictions')
        .where('userId', '==', currentUser.uid).get();
      const allPredsSnap = await db.collection('predictions').get();
      const usersSnap = await db.collection('users').get();

      cachedMatches = [];
      matchesSnap.forEach(doc => cachedMatches.push({ id: doc.id, ...doc.data() }));
      cachedMatches.sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff));

      cachedPredictions = {};
      predictionsSnap.forEach(doc => {
        cachedPredictions[doc.data().matchId] = doc.data();
      });

      cachedUsers = {};
      usersSnap.forEach(doc => {
        cachedUsers[doc.id] = doc.data();
      });

      cachedAllPredictions = {};
      allPredsSnap.forEach(doc => {
        const p = doc.data();
        if (!cachedAllPredictions[p.matchId]) cachedAllPredictions[p.matchId] = [];
        cachedAllPredictions[p.matchId].push(p);
      });
    }

    renderMatchesView(main, cachedMatches, cachedPredictions);
  }

  function renderMatchesView(main, matches, myPredictions) {
    let html = '<div class="matches-view">';

    // View toggle
    html += `
      <div class="view-toggle">
        <button class="view-toggle-btn ${matchViewMode === 'date' ? 'view-toggle-btn--active' : ''}"
          onclick="App.setMatchView('date')">By date</button>
        <button class="view-toggle-btn ${matchViewMode === 'group' ? 'view-toggle-btn--active' : ''}"
          onclick="App.setMatchView('group')">By group</button>
      </div>
    `;

    if (matchViewMode === 'date') {
      // Map each match to a broad stage bucket
      function getStageBucket(match) {
        if (match.placeholder) {
          const s = match.stage || '';
          if (s === 'Round of 32')   return 'Round of 32';
          if (s === 'Round of 16')   return 'Round of 16';
          if (s === 'Quarter-final') return 'Quarter-finals';
          if (s === 'Semi-final')    return 'Semi-finals';
          if (s === 'Third Place')   return 'Third Place';
          if (s === 'Final')         return 'Final';
          return 'Knockout Stage';
        }
        const stage = match.stage || '';
        if (stage.startsWith('Group')) return 'Group Stage';
        if (stage === 'Round of 32')   return 'Round of 32';
        if (stage === 'Round of 16')   return 'Round of 16';
        if (stage === 'Quarter-final') return 'Quarter-finals';
        if (stage === 'Semi-final')    return 'Semi-finals';
        if (stage === 'Third Place')   return 'Third Place';
        if (stage === 'Final')         return 'Final';
        return stage;
      }

      const bucketOrder = ['Group Stage','Round of 32','Round of 16','Quarter-finals','Semi-finals','Third Place','Final'];
      const byBucket = {};
      matches.forEach(m => {
        const b = getStageBucket(m);
        if (!byBucket[b]) byBucket[b] = [];
        byBucket[b].push(m);
      });

      // Tabs — only buckets that have matches
      const activeBuckets = bucketOrder.filter(b => byBucket[b]);
      html += `<div class="stage-tabs">`;
      activeBuckets.forEach((bucket, i) => {
        html += `<button class="stage-tab ${i === 0 ? 'stage-tab--active' : ''}"
          onclick="App.filterStage(this, '${escapeHtml(bucket)}')">${escapeHtml(bucket)}</button>`;
      });
      html += `</div>`;

      // Match cards per bucket, sorted by kickoff
      activeBuckets.forEach((bucket, i) => {
        const bucketMatches = byBucket[bucket].sort((a,b) => new Date(a.kickoff) - new Date(b.kickoff));
        html += `<div class="stage-group ${i === 0 ? '' : 'hidden'}" data-stage="${escapeHtml(bucket)}">`;
        html += `<h2 class="stage-heading">${escapeHtml(bucket)}</h2>`;
        bucketMatches.forEach(match => {
          if (match.placeholder) {
            html += renderPlaceholderCard(match);
          } else {
            html += renderMatchCard(match, myPredictions[match.id] || null);
          }
        });
        html += '</div>';
      });

    } else {
      // Group by stage/group
      const byStage = {};
      matches.forEach(m => {
        if (!byStage[m.stage]) byStage[m.stage] = [];
        byStage[m.stage].push(m);
      });

      const stageNames = Object.keys(byStage);
      html += `<div class="stage-tabs">`;
      stageNames.forEach((stage, i) => {
        html += `<button class="stage-tab ${i === 0 ? 'stage-tab--active' : ''}"
          onclick="App.filterStage(this, '${escapeHtml(stage)}')">${escapeHtml(stage)}</button>`;
      });
      html += `</div>`;

      stageNames.forEach((stage, si) => {
        html += `<div class="stage-group ${si === 0 ? '' : 'hidden'}" data-stage="${escapeHtml(stage)}">`;
        html += `<h2 class="stage-heading">${escapeHtml(stage)}</h2>`;
        byStage[stage].forEach(match => {
          if (match.placeholder) {
            html += renderPlaceholderCard(match);
          } else {
            html += renderMatchCard(match, myPredictions[match.id] || null);
          }
        });
        html += '</div>';
      });
    }

    html += '</div>';
    main.innerHTML = html;
  }

  function setMatchView(mode) {
    matchViewMode = mode;
    renderMatchesView(document.getElementById('main'), cachedMatches, cachedPredictions);
  }

  function renderMatchCard(match, prediction) {
    const now = new Date();
    const kickoff = new Date(match.kickoff);
    const lockTime = new Date(kickoff.getTime() + PREDICTION_LOCK_MINUTES * 60 * 1000);
    const isLocked = now >= lockTime;
    const isFinished = match.result && ['FT','AET','PEN'].includes(match.result.status);
    const isLive = match.liveResult && match.liveResult.isLive;

    const kickoffLocal = kickoff.toLocaleDateString('en-GB', {
      weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
    });

    let statusBadge = '';
    if (isFinished) statusBadge = '<span class="badge badge--ft">FT</span>';
    else if (isLive) statusBadge = `<span class="badge badge--live">LIVE ${match.liveResult.elapsed || ''}'</span>`;
    else if (isLocked) statusBadge = '<span class="badge badge--locked">Locked</span>';
    else statusBadge = '<span class="badge badge--open">Open</span>';

    // Score display
    let scoreDisplay = '';
    if (isFinished && match.result) {
      scoreDisplay = `<div class="match-score-real">${match.result.homeScore} – ${match.result.awayScore}</div>`;
    } else if (isLive && match.liveResult) {
      scoreDisplay = `<div class="match-score-live">${match.liveResult.homeScore ?? '?'} – ${match.liveResult.awayScore ?? '?'}</div>`;
    } else {
      scoreDisplay = `<div class="match-score-vs">vs</div>`;
    }

    // Points earned
    let pointsDisplay = '';
    if (prediction && prediction.scored) {
      pointsDisplay = `<div class="prediction-points pts-${prediction.points}">${prediction.points} pt${prediction.points !== 1 ? 's' : ''}</div>`;
    }

    return `
      <div class="match-card ${isLocked ? 'match-card--locked' : ''} ${isLive ? 'match-card--live' : ''}">
        <div class="match-card-header">
          <span class="match-venue">${escapeHtml(match.venue)}</span>
          ${statusBadge}
        </div>
        <div class="match-teams">
          <div class="team team--home">
            <span class="team-flag">${getFlag(match.home)}</span>
            <span class="team-name">${escapeHtml(match.home)}</span>
          </div>
          ${scoreDisplay}
          <div class="team team--away">
            <span class="team-name">${escapeHtml(match.away)}</span>
            <span class="team-flag">${getFlag(match.away)}</span>
          </div>
        </div>
        <div class="match-kickoff">${kickoffLocal}</div>
        ${renderPredictionSection(match, prediction, isLocked, isFinished)}
        ${pointsDisplay}
        ${isLocked ? renderAllPredictions(match) : ''}
      </div>
    `;
  }

  // Show everyone's predictions once a match is locked
  function renderAllPredictions(match) {
    const preds = (cachedAllPredictions && cachedAllPredictions[match.id]) || [];
    if (preds.length === 0) return '';

    // Sort: current user first, then alphabetically
    const sorted = [...preds].sort((a, b) => {
      if (a.userId === currentUser.uid) return -1;
      if (b.userId === currentUser.uid) return 1;
      const nameA = (cachedUsers[a.userId]?.displayName || '').toLowerCase();
      const nameB = (cachedUsers[b.userId]?.displayName || '').toLowerCase();
      return nameA.localeCompare(nameB);
    });

    let html = '<div class="all-predictions"><div class="all-predictions-heading">Everyone\'s predictions</div>';
    sorted.forEach(p => {
      const user = cachedUsers[p.userId] || {};
      const name = escapeHtml(user.displayName || 'Player');
      const isMe = p.userId === currentUser.uid;
      const scorerText = p.firstScorer ? `⚡ ${escapeHtml(p.firstScorer)}` : '';
      let ptsBadge = '';
      if (p.scored) {
        ptsBadge = `<span class="ap-pts pts-${p.points}">${p.points} pt${p.points !== 1 ? 's' : ''}</span>`;
      }
      html += `
        <div class="ap-row ${isMe ? 'ap-row--me' : ''}">
          <span class="ap-name">${name}${isMe ? ' <span class="ap-you">(you)</span>' : ''}</span>
          <span class="ap-score">${p.homeScore}–${p.awayScore}</span>
          <span class="ap-scorer">${scorerText}</span>
          ${ptsBadge}
        </div>
      `;
    });
    html += '</div>';
    return html;
  }

  function renderPredictionSection(match, prediction, isLocked, isFinished) {
    if (isLocked && !prediction) {
      return `<div class="prediction-empty">No prediction entered</div>`;
    }
    if (isLocked && prediction) {
      // Show what was predicted
      const scorerLine = prediction.firstScorer
        ? `<span class="pred-scorer">⚡ ${escapeHtml(prediction.firstScorer)}</span>`
        : '';
      return `
        <div class="prediction-submitted">
          <span class="pred-score">${prediction.homeScore} – ${prediction.awayScore}</span>
          ${scorerLine}
          <span class="pred-label">Your prediction</span>
        </div>
      `;
    }

    // Open for prediction
    const homePlayers = WC2026_SQUADS[match.home] || [];
    const awayPlayers = WC2026_SQUADS[match.away] || [];
    const allPlayers = [
      ...homePlayers.map(p => `${p} (${match.home})`),
      ...awayPlayers.map(p => `${p} (${match.away})`)
    ];

    const existingHome = prediction ? prediction.homeScore : '';
    const existingAway = prediction ? prediction.awayScore : '';
    const existingScorer = prediction ? prediction.firstScorer : '';

    return `
      <div class="prediction-form" data-match-id="${match.id}">
        <div class="score-inputs">
          <label class="score-label">${escapeHtml(match.home)}</label>
          <input type="number" class="score-input" min="0" max="20" 
            id="home-${match.id}" value="${existingHome}" placeholder="0" />
          <span class="score-dash">–</span>
          <input type="number" class="score-input" min="0" max="20"
            id="away-${match.id}" value="${existingAway}" placeholder="0" />
          <label class="score-label">${escapeHtml(match.away)}</label>
        </div>
        <div class="scorer-select">
          <label class="scorer-label">First goalscorer <span class="pts-tag">+2pts</span></label>
          <select id="scorer-${match.id}" class="scorer-dropdown">
            <option value="">— No prediction / 0-0 draw —</option>
            ${allPlayers.map(p => `<option value="${escapeHtml(p)}" ${existingScorer === p ? 'selected' : ''}>${escapeHtml(p)}</option>`).join('')}
          </select>
        </div>
        <button class="predict-btn" onclick="App.savePrediction('${match.id}')">
          ${prediction ? 'Update prediction' : 'Save prediction'}
        </button>
        <div id="pred-msg-${match.id}" class="pred-msg hidden"></div>
      </div>
    `;
  }

  function renderPlaceholderCard(match) {
    const kickoffDate = new Date(match.kickoff).toLocaleDateString('en-GB', {
      weekday: 'short', day: 'numeric', month: 'short'
    });
    return `
      <div class="match-card match-card--placeholder">
        <div class="match-card-header">
          <span class="match-venue">${match.venue !== 'TBD' ? escapeHtml(match.venue) : 'Venue TBD'}</span>
          <span class="badge badge--tbd">TBD</span>
        </div>
        <div class="match-teams">
          <div class="team"><span class="team-name placeholder-name">TBD</span></div>
          <div class="match-score-vs">vs</div>
          <div class="team"><span class="team-name placeholder-name">TBD</span></div>
        </div>
        <div class="match-kickoff">${kickoffDate}</div>
        <div class="placeholder-note">Teams confirmed after group stage</div>
      </div>
    `;
  }

  function filterStage(btn, stage) {
    document.querySelectorAll('.stage-tab').forEach(t => t.classList.remove('stage-tab--active'));
    btn.classList.add('stage-tab--active');
    document.querySelectorAll('.stage-group').forEach(g => {
      g.classList.toggle('hidden', g.dataset.stage !== stage);
    });
  }

  // ── Save Prediction ────────────────────────────────────────

  async function savePrediction(matchId) {
    const homeInput = document.getElementById(`home-${matchId}`);
    const awayInput = document.getElementById(`away-${matchId}`);
    const scorerSelect = document.getElementById(`scorer-${matchId}`);
    const msgEl = document.getElementById(`pred-msg-${matchId}`);

    const homeScore = homeInput.value.trim();
    const awayScore = awayInput.value.trim();
    const firstScorer = scorerSelect.value;

    if (homeScore === '' || awayScore === '') {
      showPredMsg(msgEl, 'Please enter a score for both teams', 'error');
      return;
    }

    // Double check lock
    const matchDoc = await db.collection('matches').doc(matchId).get();
    const match = matchDoc.data();
    const lockTime = new Date(new Date(match.kickoff).getTime() + PREDICTION_LOCK_MINUTES * 60 * 1000);
    if (new Date() >= lockTime) {
      showPredMsg(msgEl, 'This match is now locked', 'error');
      return;
    }

    const btn = document.querySelector(`[data-match-id="${matchId}"] .predict-btn`);
    btn.disabled = true;
    btn.textContent = 'Saving...';

    try {
      await db.collection('predictions').doc(`${currentUser.uid}_${matchId}`).set({
        userId: currentUser.uid,
        matchId,
        homeScore: parseInt(homeScore),
        awayScore: parseInt(awayScore),
        firstScorer: firstScorer || null,
        points: null,
        scored: false,
        submittedAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      showPredMsg(msgEl, '✓ Prediction saved!', 'success');
      btn.textContent = 'Update prediction';
    } catch (err) {
      showPredMsg(msgEl, 'Could not save. Please try again.', 'error');
      console.error(err);
    } finally {
      btn.disabled = false;
    }
  }

  function showPredMsg(el, msg, type) {
    el.textContent = msg;
    el.className = `pred-msg pred-msg--${type}`;
    setTimeout(() => el.classList.add('hidden'), 3000);
  }

  // ── Leaderboard View ───────────────────────────────────────

  async function renderLeaderboard() {
    const main = document.getElementById('main');
    main.innerHTML = '<div class="loading-spinner"></div>';

    const usersSnap = await db.collection('users').orderBy('totalPoints', 'desc').get();
    const predsSnap = await db.collection('predictions').where('scored', '==', true).get();

    // Build per-user breakdown
    const breakdown = {};
    predsSnap.forEach(doc => {
      const p = doc.data();
      if (!breakdown[p.userId]) {
        breakdown[p.userId] = { correctScores: 0, correctResults: 0, correctScorers: 0, played: 0 };
      }
      breakdown[p.userId].played++;
      if (p.breakdown && p.breakdown.score)  breakdown[p.userId].correctScores++;
      if (p.breakdown && p.breakdown.result) breakdown[p.userId].correctResults++;
      if (p.breakdown && p.breakdown.scorer) breakdown[p.userId].correctScorers++;
    });

    let html = '<div class="leaderboard-view">';
    html += '<h2 class="view-heading">Leaderboard</h2>';

    if (usersSnap.empty) {
      html += '<p class="empty-state">No scores yet — predictions are still being collected!</p>';
    } else {
      html += '<div class="leaderboard-table">';
      html += `
        <div class="lb-row lb-row--header">
          <span class="lb-rank">#</span>
          <span class="lb-name">Player</span>
          <span class="lb-stat lb-stat--header" title="Predictions played">P</span>
          <span class="lb-stat lb-stat--header lb-stat--score" title="Correct scores (3pts)">CS</span>
          <span class="lb-stat lb-stat--header lb-stat--result" title="Correct results (1pt)">CR</span>
          <span class="lb-stat lb-stat--header lb-stat--scorer" title="Correct first goalscorer (2pts)">FG</span>
          <span class="lb-pts">Pts</span>
        </div>
      `;

      let rank = 1;
      usersSnap.forEach(doc => {
        const user = doc.data();
        const isMe = doc.id === currentUser.uid;
        const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '';
        const b = breakdown[doc.id] || { correctScores: 0, correctResults: 0, correctScorers: 0, played: 0 };

        html += `
          <div class="lb-row ${isMe ? 'lb-row--me' : ''}">
            <span class="lb-rank">${medal || rank}</span>
            <span class="lb-name">${escapeHtml(user.displayName || 'Anonymous')}${isMe ? '<span class="lb-you"> (you)</span>' : ''}</span>
            <span class="lb-stat">${b.played}</span>
            <span class="lb-stat lb-stat--score">${b.correctScores}</span>
            <span class="lb-stat lb-stat--result">${b.correctResults}</span>
            <span class="lb-stat lb-stat--scorer">${b.correctScorers}</span>
            <span class="lb-pts">${user.totalPoints || 0}</span>
          </div>
        `;
        rank++;
      });

      html += '</div>';
      html += `
        <div class="lb-key-grid">
          <span class="lb-key-item"><strong>P</strong> Predictions made</span>
          <span class="lb-key-item"><strong>CS</strong> Correct score <em>(3pts)</em></span>
          <span class="lb-key-item"><strong>CR</strong> Correct result <em>(1pt)</em></span>
          <span class="lb-key-item"><strong>FG</strong> First goalscorer <em>(2pts)</em></span>
        </div>
      `;
    }

    html += '</div>';
    main.innerHTML = html;
  }

  // ── Profile View ───────────────────────────────────────────

  async function renderProfile() {
    const userDoc = await db.collection('users').doc(currentUser.uid).get();
    const userData = userDoc.data() || {};

    const predictionsSnap = await db.collection('predictions')
      .where('userId', '==', currentUser.uid)
      .where('scored', '==', true)
      .get();

    let correct3 = 0, correct1 = 0, correct2 = 0, total = 0;
    predictionsSnap.forEach(doc => {
      const p = doc.data();
      correct3 += p.breakdown?.score || 0;
      correct1 += p.breakdown?.result || 0;
      correct2 += p.breakdown?.scorer || 0;
      total += p.points || 0;
    });

    const main = document.getElementById('main');
    main.innerHTML = `
      <div class="profile-view">
        <h2 class="view-heading">Your stats</h2>
        <div class="profile-card">
          <div class="profile-name">${escapeHtml(userData.displayName || currentUser.email)}</div>
          <div class="profile-email">${escapeHtml(currentUser.email)}</div>
          <div class="profile-stats">
            <div class="stat-box">
              <div class="stat-val">${userData.totalPoints || 0}</div>
              <div class="stat-key">Total points</div>
            </div>
            <div class="stat-box">
              <div class="stat-val">${Math.round(correct3/3)}</div>
              <div class="stat-key">Exact scores</div>
            </div>
            <div class="stat-box">
              <div class="stat-val">${Math.round(correct1)}</div>
              <div class="stat-key">Correct results</div>
            </div>
            <div class="stat-box">
              <div class="stat-val">${Math.round(correct2/2)}</div>
              <div class="stat-key">First scorers</div>
            </div>
          </div>
        </div>

        <div class="profile-actions">
          <button class="profile-btn" onclick="App.copyInviteLink()">Copy invite link</button>
          <div id="invite-copied" class="hidden invite-copied">Link copied to clipboard!</div>
          <button class="profile-btn profile-btn--danger" onclick="App.confirmSignOut()">Sign out</button>
        </div>
      </div>
    `;
  }

  function copyInviteLink() {
    const link = window.location.origin + window.location.pathname;
    navigator.clipboard.writeText(link).then(() => {
      const el = document.getElementById('invite-copied');
      el.classList.remove('hidden');
      setTimeout(() => el.classList.add('hidden'), 3000);
    });
  }

  function confirmSignOut() {
    if (confirm('Sign out?')) {
      clearInterval(livePollingInterval);
      firebase.auth().signOut().then(() => window.location.reload());
    }
  }

  // ── Utilities ──────────────────────────────────────────────

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getFlag(country) {
    const flags = {
      "Argentina":"🇦🇷","France":"🇫🇷","Brazil":"🇧🇷","England":"󠁧󠁢󠁥󠁮󠁧󠁿",
      "Germany":"🇩🇪","Spain":"🇪🇸","Portugal":"🇵🇹","Netherlands":"🇳🇱",
      "Belgium":"🇧🇪","Italy":"🇮🇹","Uruguay":"🇺🇾","Colombia":"🇨🇴",
      "Mexico":"🇲🇽","USA":"🇺🇸","Japan":"🇯🇵","South Korea":"🇰🇷",
      "Morocco":"🇲🇦","Senegal":"🇸🇳","Croatia":"🇭🇷","Serbia":"🇷🇸",
      "Switzerland":"🇨🇭","Denmark":"🇩🇰","Australia":"🇦🇺","Tunisia":"🇹🇳",
      "Iran":"🇮🇷","Saudi Arabia":"🇸🇦","Poland":"🇵🇱","Wales":"🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      "Ghana":"🇬🇭","Ecuador":"🇪🇨","Qatar":"🇶🇦","Costa Rica":"🇨🇷",
      "Canada":"🇨🇦","Nigeria":"🇳🇬","Cameroon":"🇨🇲","South Africa":"🇿🇦",
      "Ivory Coast":"🇨🇮","Chile":"🇨🇱","Venezuela":"🇻🇪","Hungary":"🇭🇺",
      "New Zealand":"🇳🇿","Egypt":"🇪🇬","DR Congo":"🇨🇩","Paraguay":"🇵🇾",
      "Iraq":"🇮🇶","Albania":"🇦🇱","Austria":"🇦🇹","Turkey":"🇹🇷"
    };
    return flags[country] || '🏳️';
  }

  return { init, showView, filterStage, setMatchView, savePrediction, copyInviteLink, confirmSignOut };
})();
