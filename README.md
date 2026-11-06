# Google Pro Extractor 🎯

A Chrome Extension that activates **Google AI Pro (2TB / 5TB) free-trial plans** by injecting offer tokens into the Google Play checkout flow.

> Works with Google One — stack up to **24 months** of AI Pro for **$0.00**.

---

## ✨ Features

- ✅ One-click activation of AI Pro free-trial offer tokens (`12 months` + `6 months × 3`)
- ✅ 4 injection layers — **Plan 1 → Plan 3** + **Backup plan**
- ✅ Live status feedback — activation state shown right under the plan selector
- ✅ Checkout price guard — red/green banner inside the Play checkout popup
- ✅ 3 UI languages — **English, Vietnamese, 中文** (switch in one click)
- ✅ Dark / Light mode toggle (remembers your preference)
- ✅ Foldable step-by-step guide (5 steps, opens on demand)
- ✅ THOG-style UI — clean, minimal, no clutter

---

## 🛠️ Installation

> Chrome Web Store not required — install manually in Developer Mode.

1. **Download or clone this repository:**
   ```sh
   git clone https://github.com/thog9/Google-Pro-extractor.git
   ```

2. **Open Chrome Extensions page:**
   ```
   chrome://extensions/
   ```

3. **Enable Developer Mode** (top-right toggle)

4. **Click "Load unpacked"** → select the cloned folder

5. The **Thog · Google AI Pro Injector** icon will appear in your Chrome toolbar ✅

---

## 🚀 How to Use

### Step 1 — Verify your account

Open [one.google.com/plans](https://one.google.com/plans) and check the **top-left email** is the account you want to use.

### Step 2 — Select a plan

Open the extension → pick **Plan 1 · 12 months** → **refresh the plans page**.

The badge at the **bottom-right of the page** shows the activation state.

### Step 3 — Checkout

Make sure Google One shows the **Yearly / Annual** billing option for AI Pro — the injected offer token applies to the yearly term.

Click **Get discount** on the AI Pro card → the Play checkout popup opens → confirm the offer terms and the **final price ($0.00)** → subscribe.

> 💡 After stacking months, the checkout may show a **future renewal date** — that's your stacked term, not a charge today. Always double-check the amount is $0.00.

### Step 4 — Stack the next plan

Return to the extension → switch to **Plan 2** (6 months SS) → refresh → subscribe again. Repeat for **Plan 3** to reach **24 months**.

### Step 5 — Manage billing

When finished, open [play.google.com/store/account/subscriptions](https://play.google.com/store/account/subscriptions) → check your subscription → **turn off auto-renewal**.

> 💡 "Google Play" here is just Google's billing system — the checkout popup happens right on your PC, no phone or Play Store app needed.

> 💡 Full guide is built into the popup — click **HOW TO USE** to expand it step by step.

---

## 📁 File Structure

```
Google-Pro-extractor/
├── manifest.json        # Extension configuration (Manifest V3)
├── popup.html           # Extension UI (THOG design)
├── popup.js             # Popup logic: plans, i18n (EN/VI/ZH), status, accordion
├── style.css            # Styling with dark/light theme support
├── relay.js             # Content script — relays config & language to the page
├── injector.js          # Main-world script — injects offer tokens into checkout requests
├── guard.js             # Price guard banner inside the Play checkout iframe
└── guard-lang.js        # Relays the selected language to guard.js
```

---

## 🔍 How It Works

1. **Plan selection** — the popup stores your chosen plan in `chrome.storage`
2. **Injection** — `injector.js` (main world) hooks Play checkout requests on `one.google.com` and swaps the subscription item with the offer token for the selected plan
3. **Status** — the page badge reports back through `relay.js`, so the popup always shows live activation state
4. **Price guard** — `guard.js` reads the real checkout terms and shows a banner:
   - 🟢 **Green** — free trial confirmed, safe to subscribe (still check $0.00 yourself)
   - 🔴 **Red** — charge detected, do NOT subscribe — switch plan and retry

---

## ⚠️ Notes

- **Do NOT use your main Google account.** The tool tricks the checkout pricing and Google may flag accounts.
- **YouTube Premium add-on is only available in 6 countries** — 🇺🇸 🇨🇦 🇧🇷 🇫🇷 🇩🇪 🇯🇵. If you see *"Can't buy YouTube Premium Individual Add On"*, switch your Google Play payment country to the **US** and retry.
- Always confirm the **final checkout price is $0.00** before subscribing — trust the official terms, not banner colors alone.
- This extension only modifies checkout requests in **your own browser** — offer tokens are bundled locally, nothing is sent anywhere.
- Use responsibly and only for accounts you own.

---

## 📨 Contact

Connect with us for support or updates:

- **Telegram**: [thog099](https://t.me/thog099)
- **Channel**: [CHANNEL](https://t.me/thogairdrops)
- **Group**: [GROUP CHAT](https://t.me/thogchats)
- **X**: [Thog](https://x.com/thog099)

---

## ☕ Support Us

Love these tools? Fuel our work with a coffee!

🔗 BUYMECAFE: [BUY ME CAFE](https://buymecafe.vercel.app/)

🔗 WEBSITE: [BUY SCRIPTS](https://thogtoolhub.com/)
