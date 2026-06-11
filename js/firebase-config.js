// ============================================================
// FIREBASE CONFIGURATION
// Replace the values below with your own Firebase project config
// Get these from: Firebase Console > Project Settings > Your Apps
// ============================================================

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyANGYLoO-2seNZUKX_hDg4PBiAO_QPh2mQ",
  authDomain: "wc2026-predictions-3efc9.firebaseapp.com",
  projectId: "wc2026-predictions-3efc9",
  storageBucket: "wc2026-predictions-3efc9.firebasestorage.app",
  messagingSenderId: "788557420414",
  appId: "1:788557420414:web:e9553a582199caaffcc52f"
};

const API_FOOTBALL_KEY = "bc99c8a4c29b07eb7661dfa0bd84cbfe";
const API_FOOTBALL_BASE = "https://v3.football.api-sports.io";
const WC2026_LEAGUE_ID = 1;
const WC2026_SEASON = 2026;

const PREDICTION_LOCK_MINUTES = 5;
const INVITE_LINK_BASE = window.location.origin + window.location.pathname;

firebase.initializeApp(FIREBASE_CONFIG);
const auth = firebase.auth();
const db = firebase.firestore();

const ACTION_CODE_SETTINGS = {
  url: INVITE_LINK_BASE,
  handleCodeInApp: true,
};
