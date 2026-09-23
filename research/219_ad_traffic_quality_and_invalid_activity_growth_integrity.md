# Research 219 — Ad Traffic Quality & Invalid-Activity Growth Integrity

Date: 2026-09-23
Status: Canonical extension

## Why this matters
For a zero-cost, ad-funded niche app, traffic quality is part of monetization infrastructure. More installs, sessions, impressions or CTR are not automatically beneficial if acquisition or placement behavior increases invalid-activity risk, accidental interaction, advertiser distrust, or ad-serving restrictions. Growth and monetization therefore cannot be optimized independently.

## Validated platform facts
Google states that ad-serving limits can be applied while traffic quality is assessed or when invalid-traffic concerns are identified. The publisher remains responsible for valid traffic and compliant implementation. Google implementation guidance also requires avoiding placements that draw unnatural attention, mislead users, encourage clicks, or create accidental-click conditions. Development/testing must use test ads rather than production inventory.

Native implementation is publisher-rendered: the app receives assets and is responsible for presenting them. This makes visual/interaction integrity an application responsibility rather than something guaranteed merely by choosing the native format. Google provides lifecycle callbacks and dedicated test ad units; loaded native ads should also be destroyed when no longer needed.

## EE0–EE5 Ad-Traffic-Quality Integrity Gate

### EE0 — Traffic-source identity
For each meaningful ad-bearing cohort retain acquisition source/route, campaign/community/store/web route where known, geography, release, device/OS, new/returning state and observation window. Unknown attribution remains unknown.

### EE1 — Interaction integrity
Map ad controls against navigation, scrolling, primary actions and repeated gestures. A click-rate increase is not positive evidence until accidental-click and placement-confusion explanations are excluded.

### EE2 — Test/production separation
Development, QA, screenshot capture and automated testing must use test configuration/test ads. Production ad interactions by owners/developers/testers are not a monetization experiment.

### EE3 — Anomaly integrity
Track abrupt changes in impressions, clicks, CTR, requests, matched/show rate, geography/source mix and user/session composition. An anomaly is a diagnostic trigger, not proof of fraud and not proof of healthy growth.

### EE4 — Serving-state integrity
Preserve Policy Center/ad-serving state and dates alongside revenue evidence. Revenue decline during limited serving must not be diagnosed as weak user value or solved by adding placements/frequency before the serving/traffic-quality state is understood.

### EE5 — Sustainable-growth decision
Scale a zero-cost channel or ad placement only when qualified specialist value, interaction integrity and reconciled revenue move without unacceptable complaint, accidental-click, invalid-activity or serving-risk signals.

## Canonical distinctions
- organic/free traffic ≠ automatically valid traffic
- click ≠ user intent
- CTR increase ≠ monetization improvement
- traffic anomaly ≠ invalid traffic proof
- ad-serving limit ≠ product-demand failure
- policy compliance ≠ placement quality
- test impression/click ≠ production revenue evidence
- native format ≠ SDK-guaranteed visual integrity
- more impressions ≠ more sustainable revenue

## MintTap application
Do not judge Reddit, blog, social, Store or owned-web acquisition solely by downstream ad CTR/eCPM. Connect each observable route to specialist activation/repeat value and traffic-quality signals. If a placement sits near portfolio controls, ticker navigation, distribution/ROC interaction, tax-adjustment controls or repeated scroll/tap zones, investigate accidental interaction before treating elevated CTR as value. Preserve Policy Center/serving-state evidence with AdMob revenue reconciliation. Do not react to serving limits by increasing inventory or pushing low-quality traffic.

## LogMate application
Home remains ad-free. Critical flight-entry/logbook/import-validation/export/sync-recovery/totals workflows remain protected. Any future secondary ad-bearing surface must pass EA–EE. Pilot workflow gestures and dense operational controls make accidental-interaction separation especially important; monetization must not borrow trust from professional controls.

## Reusable operating packet
For every ad-bearing surface retain:
`app/build → ad unit → requested/delivered format → screen/workflow/geometry → acquisition route/source if known → user/session state → requests/matches/shows/impressions/clicks → CTR → ILRD precision → reconciled revenue → task completion/abandonment → repeat specialist value → complaint/review signal → invalid-activity/anomaly signal → Policy Center/serving state → decision`.

## Decision rule
Never maximize CTR. Maximize reconciled sustainable revenue conditional on qualified specialist value and clean interaction/traffic-quality evidence.

## Sources
- Google AdMob Help: Ad serving limits — https://support.google.com/admob/answer/9493252
- Google AdMob Help: invalid traffic / implementation guidance — https://support.google.com/admob/answer/3342099
- Google for Developers: Native ads, Android — https://developers.google.com/admob/android/native
- Google for Developers: advanced native features — https://developers.google.com/admob/ios/native/options
