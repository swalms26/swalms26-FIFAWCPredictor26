# WC26 Predictor — Setup Guide

Everything you need to get the app live. Should take about 30 minutes from scratch.

---

## What you need first

- A Google account (for Firebase)
- A GitHub account (for hosting)
- An API-Football account (for live scores)

---

## Step 1 — Get your API-Football key (5 min)

1. Go to **https://www.api-football.com/**
2. Click **Sign Up** — the free plan gives you 100 requests/day (plenty for this)
3. Once signed in, go to your **Dashboard**
4. Copy your **API Key** from the dashboard

---

## Step 2 — Create a Firebase project (10 min)

1. Go to **https://console.firebase.google.com/**
2. Click **Add project** → name it `wc26-predictor` → Continue
3. Disable Google Analytics (not needed) → **Create project**

### Enable Authentication
1. In the left sidebar: **Build → Authentication**
2. Click **Get started**
3. Go to the **Sign-in method** tab
4. Click **Email/Password** → Enable the toggle → Also enable **Email link (passwordless sign-in)** → **Save**
5. Go to the **Settings** tab → **Authorized domains**
6. Add your GitHub Pages domain: `YOUR-USERNAME.github.io`

### Create Firestore Database
1. In the left sidebar: **Build → Firestore Database**
2. Click **Create database**
3. Choose **Start in production mode** → Next
4. Pick a location close to your users (e.g. `us-central`) → **Enable**
5. Once created, go to the **Rules** tab
6. Paste the contents of `firestore.rules` from this project → **Publish**

### Get your Firebase config
1. Go to **Project Settings** (gear icon, top left)
2. Scroll down to **Your apps** → Click the web icon `</>`
3. Register the app with nickname `wc26-predictor`
4. **Don't** enable Firebase Hosting (we're using GitHub Pages)
5. Copy the `firebaseConfig` object — you'll need it in the next step

---

## Step 3 — Add your keys to the app (5 min)

Open `js/firebase-config.js` and replace the placeholder values:

```js
const FIREBASE_CONFIG = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const API_FOOTBALL_KEY = "PASTE_YOUR_API_FOOTBALL_KEY_HERE";
```

---

## Step 4 — Deploy to GitHub Pages (10 min)

1. Create a new repository on **https://github.com/new**
   - Name it `wc26-predictor` (or anything you like)
   - Set it to **Public**
   - Don't initialise with README

2. Upload your project files. The easiest way:
   - Click **uploading an existing file** on the empty repo page
   - Drag and drop all the project files/folders:
     - `index.html`
     - `css/` folder
     - `js/` folder
     - `data/` folder
   - Click **Commit changes**

3. Enable GitHub Pages:
   - Go to your repo → **Settings** → **Pages**
   - Under **Branch**, select `main` → `/ (root)` → **Save**
   - Your app will be live at: `https://YOUR-USERNAME.github.io/wc26-predictor/`

4. Go back to Firebase → Authentication → Authorized domains → add `YOUR-USERNAME.github.io`

---

## Step 5 — Share the invite link

Your app URL is the invite link. Anyone who visits it can sign up with their email.
Share it with your group and they can sign up immediately.

The link looks like: `https://YOUR-USERNAME.github.io/wc26-predictor/`

---

## How scoring works

| Prediction | Points |
|---|---|
| Correct scoreline (e.g. 2-1 ✓) | 3 pts |
| Correct result only (e.g. predicted 1-0, actual 2-0) | 1 pt |
| Correct first goalscorer | 2 pts |
| Wrong result | 0 pts |

Predictions lock **5 minutes after kickoff**. Scores are checked automatically via API-Football every 60 seconds during live matches and points are awarded when the match reaches full time.

---

## Notes

**API-Football free tier:** 100 requests/day. The app only polls during active match windows (2 hours around kickoff times), so usage stays well within the free limit even across multiple simultaneous matches.

**Knockout stage matches:** Teams are shown as "TBD" until confirmed after the group stage. Predictions for these matches open once the teams are known (the match data in Firestore can be updated manually or you can add an admin panel later).

**First goalscorer squads:** The app ships with squad data pre-loaded for all 48 teams from the `data/matches.js` file. If rosters change before the tournament you can update that file.

---

## Troubleshooting

**"Firebase: Error (auth/unauthorized-domain)"**
→ Add your GitHub Pages domain to Firebase Auth → Authorized domains

**Sign-in email not arriving**
→ Check spam. Also verify the email domain is not blocked in Firebase Auth settings.

**API scores not updating**
→ Check your API-Football key is correct in `firebase-config.js`. Free tier is 100 req/day — check your usage on the API-Football dashboard.

**Matches not appearing**
→ The match data seeds on first load by the first user to sign in. Check the browser console for any Firestore permission errors.
