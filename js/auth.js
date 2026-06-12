// ============================================================
// AUTH MODULE
// Google Sign-In - no email quotas, works instantly on mobile
// ============================================================

const Auth = (() => {

  function checkEmailLink() {
    return false; // No longer using email links
  }

  // Sign in with Google popup
  async function signInWithGoogle() {
    const btn = document.querySelector('.auth-btn');
    if (btn) { btn.disabled = true; btn.textContent = 'Signing in...'; }

    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;

      // Check if new user needs display name setup
      const userDoc = await db.collection('users').doc(user.uid).get();
      if (!userDoc.exists) {
        showSetDisplayName(user);
      } else {
        App.init(user);
      }
    } catch (err) {
      if (btn) { btn.disabled = false; btn.textContent = 'Sign in with Google'; }
      if (err.code !== 'auth/popup-closed-by-user') {
        showAuthError('Could not sign in. Please try again.');
        console.error(err);
      }
    }
  }

  // Sign out
  function signOut() {
    return firebase.auth().signOut();
  }

  // Show display name setup for new users
  function showSetDisplayName(user) {
    const authScreen = document.getElementById('auth-screen');
    authScreen.innerHTML = `
      <div class="auth-box">
        <div class="auth-logo">⚽</div>
        <h1 class="auth-title">One last thing</h1>
        <p class="auth-subtitle">What should we call you on the leaderboard?</p>
        <div class="auth-form">
          <input type="text" id="display-name-input" class="auth-input"
            placeholder="Your name or nickname" maxlength="30" autocomplete="off"
            value="${user.displayName || ''}" />
          <button class="auth-btn" onclick="Auth.saveDisplayName('${user.uid}')">
            Let's go →
          </button>
        </div>
        <div id="auth-error" class="auth-error hidden"></div>
      </div>
    `;
    authScreen.classList.remove('hidden');
    document.getElementById('display-name-input').focus();
    document.getElementById('display-name-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') Auth.saveDisplayName(user.uid);
    });
  }

  async function saveDisplayName(uid) {
    const input = document.getElementById('display-name-input');
    const name = input.value.trim();
    if (!name || name.length < 2) {
      showAuthError('Please enter a name (at least 2 characters)');
      return;
    }
    try {
      showLoading('Setting up your account...');
      const user = firebase.auth().currentUser;
      await user.updateProfile({ displayName: name });
      await db.collection('users').doc(uid).set({
        displayName: name,
        email: user.email,
        totalPoints: 0,
        joinedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      App.init(user);
    } catch (err) {
      hideLoading();
      showAuthError('Could not save your name. Please try again.');
      console.error(err);
    }
  }

  function showAuthError(msg) {
    const el = document.getElementById('auth-error');
    if (el) { el.textContent = msg; el.classList.remove('hidden'); }
  }

  function showLoading(msg) {
    document.getElementById('loading-screen').classList.remove('hidden');
    document.getElementById('loading-msg').textContent = msg || 'Loading...';
    document.getElementById('auth-screen').classList.add('hidden');
  }

  function hideLoading() {
    document.getElementById('loading-screen').classList.add('hidden');
  }

  return { checkEmailLink, signInWithGoogle, signOut, saveDisplayName };
})();
