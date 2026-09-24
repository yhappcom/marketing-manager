# Research 246 — Full-Screen Ad Frequency & App-Open Experience Integrity

Date: 2026-09-24
Status: Validated operating guidance

## Why this extends rather than repeats FA–FE
FA–FE establish authorization, impression economics, delivery diagnosis, traffic quality, and consent. A remaining operational gap is exposure control: an authorized, measurable ad can still damage a niche product if full-screen inventory interrupts a high-value return session or appears too often.

## Authoritative findings

### 1. App-open ads have a narrow semantic job
Google describes app-open ads as inventory for app loading/foregrounding. Current Android/iOS guidance says the first app-open ad should not be shown on the first app start / should wait until users have used the app a few times. On cold starts, show only from a loading screen while assets are loading; if the user reaches main content before the ad is ready, do not show it afterward. Loaded app-open ads expire after four hours.

Sources:
- https://developers.google.com/admob/android/next-gen/app-open
- https://developers.google.com/admob/ios/app-open
- https://developers.google.com/admob/flutter/app-open

### 2. Interstitial and app-open are not interchangeable
AdMob's interstitial guidance prohibits interstitials on app load or exit and recommends app-open inventory for loading/return-to-app situations. Repeated interstitials are also restricted; Google's statement that there should be no more than one interstitial after every two user actions is a compliance ceiling, not a recommended optimization target.

Source:
- https://support.google.com/admob/answer/6201362

### 3. Frequency caps are a guardrail, not a revenue target
AdMob supports app-level and ad-unit-level frequency caps for interstitial, rewarded, and app-open inventory. The effective exposure is constrained by whichever applicable cap is reached first. Changes may take up to 24 hours to propagate and slight server delay can occasionally exceed a configured cap.

Source:
- https://support.google.com/admob/answer/6244508

Therefore a cap cannot be interpreted as an exact client-side experience contract. Product code should still define semantic eligibility and protected moments.

## FF0–FF5 Full-Screen Exposure Integrity Gate

**FF0 — Session/value identity**
Classify first launch, cold start, warm foreground, task continuation, task completion, error/recovery and ordinary navigation before deciding whether full-screen inventory is eligible.

**FF1 — Format-semantic integrity**
App-open inventory belongs to genuine loading/foreground waiting time. Interstitial inventory belongs only at legitimate content transitions. Never substitute one format merely because another is unavailable.

**FF2 — Protected-moment integrity**
No full-screen ad may interrupt onboarding, authentication, data entry, import/export, sync/recovery, compliance interpretation, financial interpretation, or another core specialist task.

**FF3 — Frequency integrity**
Use server-side/app-level and ad-unit caps as hard backstops, but maintain stricter product-side eligibility where specialist trust requires it. Do not optimize toward a policy maximum.

**FF4 — Experience/economics integrity**
Evaluate incremental full-screen revenue together with repeated core-value completion, session continuation/abandonment, retention, review/support signals and accidental-click indicators. Impression revenue alone cannot approve more exposure.

**FF5 — Change-control integrity**
Change one meaningful exposure dimension at a time when traffic permits. Preserve before/after configuration, release, consent composition, acquisition changes and paid-event evidence. Sparse evidence remains inconclusive rather than justification for more pressure.

## Canonical prohibited inferences
- `frequency cap configured ≠ good user experience`
- `policy maximum ≠ recommended frequency`
- `foreground event ≠ app-open eligibility`
- `ad loaded ≠ ad should be shown`
- `cold start ≠ permission to delay main content for an ad`
- `higher full-screen revenue ≠ sustainable monetization`
- `low traffic ≠ permission to increase per-user pressure`
- `interstitial unavailable ≠ substitute app-open ad`, and vice versa

## MintTap application
MintTap should treat portfolio setup/editing, tax/ROC interpretation and other financially consequential workflows as protected. If app-open ads exist, first launch is ineligible and a cold-start ad must never be surfaced after the user has already reached usable content. A foreground event during a brief app switch is not automatically a monetizable event. Actual production exposure should be reconstructed per user/session before changing caps or adding full-screen inventory.

## LogMate application
For LogMate, Home, onboarding/authentication, flight logging, import/export, sync, totals, validation/recovery and recency/compliance interpretation remain protected. Because pilots can foreground the app repeatedly while performing a real-world task, foreground count is especially unsuitable as a direct app-open trigger. If app-open monetization is ever considered, require a genuine waiting/loading state plus product-side cooldown/eligibility; AdMob frequency capping is only a secondary backstop.

## Reusable niche-app operating model
`session state → specialist value state → protected-moment check → format semantic eligibility → product-side exposure rule → platform frequency cap → impression/revenue evidence → retention/trust evidence → sustainable exposure decision`

This prevents monetization from converting frequent professional utility into frequent interruption.

## Next validation target
Audit MintTap's production full-screen inventory: app-open/interstitial units, first-launch behavior, cold/warm-start triggers, foreground trigger semantics, product-side cooldown, AdMob app/ad-unit caps, protected workflows, and per-session exposure distribution. Do not increase full-screen frequency until this evidence exists.