// ============================================================
// AUTH MODULE
// Handles email link (magic link) sign-in flow
// ============================================================

const Auth = (() => {

  // Check if arriving via email sign-in link
  function checkEmailLink() {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        // User opened on different device - ask for email
        email = window.prompt('Please enter your email address to confirm sign in:');
      }
      if (email) {
        showLoading('Signing you in...');
        firebase.auth().signInWithEmailLink(email, window.location.href)
          .then((result) => {
            window.localStorage.removeItem('emailForSignIn');
            // Clean up URL
            window.history.replaceState({}, document.title, window.location.pathname);
            // Check if new user needs display name
            if (result.additionalUserInfo && result.additionalUserInfo.isNewUser) {
              showSetDisplayName(result.user);
            } else {
              App.init(result.user);
            }
          })
          .catch((error) => {
            hideLoading();
            showAuthError('Sign-in link is invalid or expired. Please request a new one.');
            console.error('Email link sign-in error:', error);
          });
      }
      return true;
    }
    return false;
  }

  // Send magic link to email
  function sendSignInLink(email) {
    return firebase.auth().sendSignInLinkToEmail(email, ACTION_CODE_SETTINGS)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', email);
        return true;
      });
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
            placeholder="Your name or nickname" maxlength="30" autocomplete="off" />
          <button class="auth-btn" onclick="Auth.saveDisplayName('${user.uid}')">
            Let's go →
          </button>
        </div>
        <div id="auth-error" class="auth-error hidden"></div>
      </div>
    `;
    authScreen.classList.remove('hidden');
    document.getElementById('display-name-input').focus();

    // Allow Enter key
    document.getElementById('display-name-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') Auth.saveDisplayName(user.uid);
    });
  }

  // Save display name to Firestore and continue
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
    if (el) {
      el.textContent = msg;
      el.classList.remove('hidden');
    }
  }

  function showLoading(msg) {
    document.getElementById('loading-screen').classList.remove('hidden');
    document.getElementById('loading-msg').textContent = msg || 'Loading...';
    document.getElementById('auth-screen').classList.add('hidden');
  }

  function hideLoading() {
    document.getElementById('loading-screen').classList.add('hidden');
  }

  return { checkEmailLink, sendSignInLink, signOut, saveDisplayName, showSetDisplayName };
})();
