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
          <button class="nav-btn" data-view="bonus" onclick="App.showView('bonus')">🏆 Bonus</button>
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
    else if (view === 'bonus') renderBonus();
    else if (view === 'profile') renderProfile();
  }

  // ── Matches View ───────────────────────────────────────────

  let matchViewMode = 'upcoming'; // 'upcoming', 'finished', or 'group'
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

    // Split matches into upcoming and finished
    const upcoming = matches.filter(m => !m.placeholder && !(m.result && ['FT','AET','PEN'].includes(m.result.status)));
    const finished = matches.filter(m => !m.placeholder && m.result && ['FT','AET','PEN'].includes(m.result.status));
    const placeholder = matches.filter(m => m.placeholder);

    // Top filter tabs: Upcoming | Previous | By Group
    html += `
      <div class="view-toggle">
        <button class="view-toggle-btn ${matchViewMode === 'upcoming' ? 'view-toggle-btn--active' : ''}"
          onclick="App.setMatchView('upcoming')">Upcoming</button>
        <button class="view-toggle-btn ${matchViewMode === 'finished' ? 'view-toggle-btn--active' : ''}"
          onclick="App.setMatchView('finished')">Previous</button>
        <button class="view-toggle-btn ${matchViewMode === 'group' ? 'view-toggle-btn--active' : ''}"
          onclick="App.setMatchView('group')">By group</button>
      </div>
    `;

    if (matchViewMode === 'upcoming') {
      // Upcoming: sorted by date, includes locked-but-not-finished and placeholders
      const toShow = [...upcoming, ...placeholder].sort((a,b) => new Date(a.kickoff) - new Date(b.kickoff));
      if (toShow.length === 0) {
        html += '<p class="empty-state">No upcoming matches — check the Previous tab!</p>';
      } else {
        toShow.forEach(match => {
          if (match.placeholder) {
            html += renderPlaceholderCard(match);
          } else {
            html += renderMatchCard(match, myPredictions[match.id] || null);
          }
        });
      }

    } else if (matchViewMode === 'finished') {
      // Previous: most recent first
      const toShow = [...finished].sort((a,b) => new Date(b.kickoff) - new Date(a.kickoff));
      if (toShow.length === 0) {
        html += '<p class="empty-state">No completed matches yet!</p>';
      } else {
        toShow.forEach(match => {
          html += renderMatchCard(match, myPredictions[match.id] || null);
        });
      }

    } else {
      // By group
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

  function toggleMatchCard(matchId) {
    const body = document.getElementById(`body-${matchId}`);
    const chevron = document.getElementById(`chevron-${matchId}`);
    const card = document.getElementById(`card-${matchId}`);
    if (body.classList.contains('hidden')) {
      body.classList.remove('hidden');
      chevron.textContent = '▾';
      card.classList.remove('match-card--collapsed');
    } else {
      body.classList.add('hidden');
      chevron.textContent = '▸';
      card.classList.add('match-card--collapsed');
    }
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

    // Finished matches are collapsible
    if (isFinished) {
      const myPts = (prediction && prediction.scored) ? prediction.points : null;
      const ptsBadge = myPts !== null
        ? `<span class="collapse-pts pts-${myPts}">${myPts}pt${myPts !== 1 ? 's' : ''}</span>`
        : '';
      return `
        <div class="match-card match-card--finished match-card--collapsed" id="card-${match.id}">
          <div class="match-card-collapsed-row" onclick="App.toggleMatchCard('${match.id}')">
            <div class="collapse-teams">
              <span class="collapse-flag">${getFlag(match.home)}</span>
              <span class="collapse-name">${escapeHtml(match.home)}</span>
              <span class="collapse-score">${match.result.homeScore}–${match.result.awayScore}</span>
              <span class="collapse-name">${escapeHtml(match.away)}</span>
              <span class="collapse-flag">${getFlag(match.away)}</span>
            </div>
            <div class="collapse-right">
              ${ptsBadge}
              <span class="collapse-chevron" id="chevron-${match.id}">▸</span>
            </div>
          </div>
          <div class="match-card-body hidden" id="body-${match.id}">
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
            ${renderAllPredictions(match)}
          </div>
        </div>
      `;
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
      const qualifierText = p.qualifier ? `✅ ${escapeHtml(p.qualifier)}` : '';
      let ptsBadge = '';
      if (p.scored) {
        ptsBadge = `<span class="ap-pts pts-${p.points}">${p.points} pt${p.points !== 1 ? 's' : ''}</span>`;
      }
      html += `
        <div class="ap-row ${isMe ? 'ap-row--me' : ''}">
          <span class="ap-name">${name}${isMe ? ' <span class="ap-you">(you)</span>' : ''}</span>
          <span class="ap-score">${p.homeScore}–${p.awayScore}</span>
          <span class="ap-scorer">${scorerText}${qualifierText ? ` ${qualifierText}` : ''}</span>
          ${ptsBadge}
        </div>
      `;
    });
    html += '</div>';
    return html;
  }

  function isKnockoutMatch(match) {
    const s = match.stage || '';
    if (s.startsWith('Group')) return false;
    // Knockout stages; only real (non-placeholder) matches with two named teams
    // can take a qualifier pick.
    return !match.placeholder;
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
      const qualifierLine = prediction.qualifier
        ? `<span class="pred-qualifier">✅ ${escapeHtml(prediction.qualifier)} to qualify</span>`
        : '';
      return `
        <div class="prediction-submitted">
          <span class="pred-score">${prediction.homeScore} – ${prediction.awayScore}</span>
          ${scorerLine}
          ${qualifierLine}
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
    const existingQualifier = prediction ? prediction.qualifier : '';
    const knockout = isKnockoutMatch(match);

    // Whether the current/existing predicted score is a draw. The qualifier
    // dropdown is only relevant (and only shown) when the score is level.
    const startsAsDraw = existingHome !== '' && existingAway !== ''
      && parseInt(existingHome) === parseInt(existingAway);

    const qualifierBlock = knockout ? `
        <div class="qualifier-select ${startsAsDraw ? '' : 'hidden'}" id="qualifier-block-${match.id}">
          <label class="scorer-label">Team to qualify <span class="pts-tag">+1pt</span></label>
          <select id="qualifier-${match.id}" class="scorer-dropdown">
            <option value="">— Select team to go through —</option>
            <option value="${escapeHtml(match.home)}" ${existingQualifier === match.home ? 'selected' : ''}>${escapeHtml(match.home)}</option>
            <option value="${escapeHtml(match.away)}" ${existingQualifier === match.away ? 'selected' : ''}>${escapeHtml(match.away)}</option>
          </select>
          <span class="qualifier-hint">It's a draw after 90 mins — pick who goes through in extra time or penalties.</span>
        </div>
    ` : '';

    // On a knockout match, react to score changes: hide the dropdown and derive
    // the qualifier from the winner on a non-draw; show it on a draw.
    const autoSetAttr = knockout
      ? `oninput="App.autoSetQualifier('${match.id}', '${escapeHtml(match.home)}', '${escapeHtml(match.away)}')"`
      : '';

    return `
      <div class="prediction-form" data-match-id="${match.id}">
        <div class="score-inputs">
          <label class="score-label">${escapeHtml(match.home)}</label>
          <input type="number" class="score-input" min="0" max="20" ${autoSetAttr}
            id="home-${match.id}" value="${existingHome}" placeholder="0" />
          <span class="score-dash">–</span>
          <input type="number" class="score-input" min="0" max="20" ${autoSetAttr}
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
        ${qualifierBlock}
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

  // React to score input on a knockout match. On a non-draw the qualifier is
  // fixed to the winning team, so the dropdown is hidden. On a draw the dropdown
  // is shown so the user can pick who advances on extra time / penalties.
  function autoSetQualifier(matchId, home, away) {
    const homeInput = document.getElementById(`home-${matchId}`);
    const awayInput = document.getElementById(`away-${matchId}`);
    const qualifierBlock = document.getElementById(`qualifier-block-${matchId}`);
    const qualifierSelect = document.getElementById(`qualifier-${matchId}`);
    if (!homeInput || !awayInput || !qualifierBlock || !qualifierSelect) return;

    const h = homeInput.value.trim();
    const a = awayInput.value.trim();

    // Incomplete score: hide the dropdown, nothing to derive yet.
    if (h === '' || a === '') {
      qualifierBlock.classList.add('hidden');
      return;
    }

    const hn = parseInt(h);
    const an = parseInt(a);
    if (Number.isNaN(hn) || Number.isNaN(an)) {
      qualifierBlock.classList.add('hidden');
      return;
    }

    if (hn === an) {
      // Draw: show the dropdown for an explicit pick.
      qualifierBlock.classList.remove('hidden');
    } else {
      // Non-draw: qualifier is the winner; hide the dropdown.
      qualifierBlock.classList.add('hidden');
    }
  }

  // Returns the qualifier implied by a score, or null if it's a draw (in which
  // case the dropdown selection is the source of truth).
  function qualifierFromScore(homeScore, awayScore, home, away) {
    const hn = parseInt(homeScore);
    const an = parseInt(awayScore);
    if (Number.isNaN(hn) || Number.isNaN(an)) return null;
    if (hn > an) return home;
    if (an > hn) return away;
    return null; // draw
  }

  async function savePrediction(matchId) {
    const homeInput = document.getElementById(`home-${matchId}`);
    const awayInput = document.getElementById(`away-${matchId}`);
    const scorerSelect = document.getElementById(`scorer-${matchId}`);
    const qualifierSelect = document.getElementById(`qualifier-${matchId}`);
    const msgEl = document.getElementById(`pred-msg-${matchId}`);

    const homeScore = homeInput.value.trim();
    const awayScore = awayInput.value.trim();
    const firstScorer = scorerSelect.value;

    if (homeScore === '' || awayScore === '') {
      showPredMsg(msgEl, 'Please enter a score for both teams', 'error');
      return;
    }

    // Resolve the qualifier for knockout matches. The score is the source of
    // truth: a winner qualifies automatically; only a draw uses the dropdown.
    let qualifier = null;
    if (qualifierSelect) {
      const match = (cachedMatches || []).find(m => m.id === matchId);
      const home = match ? match.home : '';
      const away = match ? match.away : '';
      const fromScore = qualifierFromScore(homeScore, awayScore, home, away);
      if (fromScore) {
        qualifier = fromScore;
      } else {
        // Draw: must pick explicitly.
        qualifier = qualifierSelect.value || null;
        if (!qualifier) {
          showPredMsg(msgEl, 'Pick who qualifies', 'error');
          return;
        }
      }
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
        qualifier: qualifier || null,
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

  // ── Bonus View ─────────────────────────────────────────────

  const BONUS_LOCK_DATE = new Date('2026-06-22T03:59:59Z'); // midnight ET Sunday June 21
  const BONUS_POINTS = 20;

  async function renderBonus() {
    const main = document.getElementById('main');
    const now = new Date();
    const isLocked = now >= BONUS_LOCK_DATE;

    // Fetch bonus config from Firestore
    const bonusDoc = await db.collection('meta').doc('bonus').get();
    const bonusData = bonusDoc.exists ? bonusDoc.data() : {};
    const winner = bonusData.winner || null; // set by admin after final

    // Fetch user's bonus prediction
    const myBonusDoc = await db.collection('bonusPredictions').doc(currentUser.uid).get();
    const myBonus = myBonusDoc.exists ? myBonusDoc.data() : null;

    // All teams list (from squads)
    const allTeams = Object.keys(WC2026_SQUADS).sort();

    let html = '<div class="bonus-view">';
    html += '<h2 class="view-heading">🏆 Tournament Winner</h2>';

    // Deadline banner
    const lockStr = BONUS_LOCK_DATE.toLocaleDateString('en-GB', {
      weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
    });

    if (!isLocked) {
      html += `
        <div class="bonus-banner bonus-banner--open">
          <div class="bonus-banner-pts">+${BONUS_POINTS} pts</div>
          <div class="bonus-banner-text">
            <strong>Pick the World Cup winner</strong>
            <span>Locks ${lockStr}</span>
          </div>
        </div>
      `;
    } else if (winner) {
      html += `
        <div class="bonus-banner bonus-banner--winner">
          <div class="bonus-banner-pts">🏆</div>
          <div class="bonus-banner-text">
            <strong>Winner: ${escapeHtml(winner)} ${getFlag(winner)}</strong>
            <span>Tournament complete!</span>
          </div>
        </div>
      `;
    } else {
      html += `
        <div class="bonus-banner bonus-banner--locked">
          <div class="bonus-banner-pts">🔒</div>
          <div class="bonus-banner-text">
            <strong>Predictions locked</strong>
            <span>Winner will be confirmed after the Final on July 19</span>
          </div>
        </div>
      `;
    }

    // My prediction card
    html += '<div class="bonus-card">';
    html += '<div class="bonus-card-title">Your pick</div>';

    if (myBonus) {
      const correct = winner && myBonus.team === winner;
      const wrong = winner && myBonus.team !== winner;
      html += `
        <div class="bonus-pick ${correct ? 'bonus-pick--correct' : wrong ? 'bonus-pick--wrong' : ''}">
          <span class="bonus-pick-flag">${getFlag(myBonus.team)}</span>
          <span class="bonus-pick-team">${escapeHtml(myBonus.team)}</span>
          ${correct ? `<span class="bonus-pick-result">✓ +${BONUS_POINTS}pts!</span>` : ''}
          ${wrong ? `<span class="bonus-pick-result bonus-pick-result--wrong">✗</span>` : ''}
        </div>
      `;
      if (!isLocked) {
        html += `<button class="predict-btn" style="margin-top:12px;" onclick="App.changeBonus()">Change pick</button>`;
      }
    } else if (!isLocked) {
      html += `
        <div class="bonus-select-form" id="bonus-form">
          <select id="bonus-team-select" class="scorer-dropdown">
            <option value="">— Select a team —</option>
            ${allTeams.map(t => `<option value="${escapeHtml(t)}">${getFlag(t)} ${escapeHtml(t)}</option>`).join('')}
          </select>
          <button class="predict-btn" onclick="App.saveBonus()">Save pick</button>
          <div id="bonus-msg" class="hidden"></div>
        </div>
      `;
    } else {
      html += `<div class="prediction-empty">No pick entered before the deadline</div>`;
    }

    html += '</div>';

    // Everyone's picks (once locked)
    if (isLocked) {
      const allBonusSnap = await db.collection('bonusPredictions').get();
      const allUsers = cachedUsers || {};

      html += '<div class="bonus-card">';
      html += '<div class="bonus-card-title">Everyone\'s picks</div>';

      if (allBonusSnap.empty) {
        html += '<p class="empty-state" style="padding:20px 0;">No picks submitted.</p>';
      } else {
        allBonusSnap.forEach(doc => {
          const b = doc.data();
          const user = allUsers[doc.id] || {};
          const isMe = doc.id === currentUser.uid;
          const correct = winner && b.team === winner;
          const wrong = winner && b.team !== winner;
          html += `
            <div class="ap-row ${isMe ? 'ap-row--me' : ''}" style="padding:10px 4px;">
              <span class="ap-name">${escapeHtml(user.displayName || 'Player')}${isMe ? ' <span class="ap-you">(you)</span>' : ''}</span>
              <span class="ap-score" style="font-size:14px;">${getFlag(b.team)} ${escapeHtml(b.team)}</span>
              <span class="ap-scorer"></span>
              ${correct ? `<span class="ap-pts pts-3" style="font-size:14px;">+${BONUS_POINTS}pts ✓</span>` : ''}
              ${wrong ? `<span class="ap-pts pts-0">✗</span>` : ''}
            </div>
          `;
        });
      }
      html += '</div>';
    }

    html += '</div>';
    main.innerHTML = html;
  }

  async function saveBonus() {
    const select = document.getElementById('bonus-team-select');
    const team = select.value;
    const msgEl = document.getElementById('bonus-msg');
    if (!team) {
      msgEl.textContent = 'Please select a team!';
      msgEl.className = 'pred-msg pred-msg--error';
      msgEl.classList.remove('hidden');
      return;
    }

    const now = new Date();
    if (now >= BONUS_LOCK_DATE) {
      msgEl.textContent = 'Bonus predictions are now locked!';
      msgEl.className = 'pred-msg pred-msg--error';
      msgEl.classList.remove('hidden');
      return;
    }

    try {
      await db.collection('bonusPredictions').doc(currentUser.uid).set({
        team,
        userId: currentUser.uid,
        submittedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      renderBonus();
    } catch(err) {
      msgEl.textContent = 'Could not save. Please try again.';
      msgEl.className = 'pred-msg pred-msg--error';
      msgEl.classList.remove('hidden');
      console.error(err);
    }
  }

  function changeBonus() {
    // Re-render with form visible
    const main = document.getElementById('main');
    const allTeams = Object.keys(WC2026_SQUADS).sort();
    const form = `
      <div class="bonus-select-form" id="bonus-form" style="margin-top:12px;">
        <select id="bonus-team-select" class="scorer-dropdown">
          <option value="">— Select a team —</option>
          ${allTeams.map(t => `<option value="${escapeHtml(t)}">${getFlag(t)} ${escapeHtml(t)}</option>`).join('')}
        </select>
        <button class="predict-btn" onclick="App.saveBonus()">Save new pick</button>
        <div id="bonus-msg" class="hidden"></div>
      </div>
    `;
    const pickEl = main.querySelector('.bonus-pick');
    if (pickEl) pickEl.insertAdjacentHTML('afterend', form);
    const changeBtns = main.querySelectorAll('.predict-btn');
    changeBtns.forEach(b => { if (b.textContent === 'Change pick') b.remove(); });
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
      // Correct knockout qualifier (1pt) counts alongside correct results
      if (p.breakdown && p.breakdown.qualifier) breakdown[p.userId].correctResults++;
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
          <span class="lb-stat lb-stat--header lb-stat--result" title="Correct result after 90 mins / team to qualify (1pt)">CR</span>
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
          <span class="lb-key-item"><strong>CR</strong> Correct result / qualifier <em>(1pt)</em></span>
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

  return { init, showView, filterStage, setMatchView, toggleMatchCard, savePrediction, autoSetQualifier, saveBonus, changeBonus, copyInviteLink, confirmSignOut };
})();
