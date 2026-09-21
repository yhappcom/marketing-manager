# Research 169 — App-Open and Full-Screen Transition Integrity

Last validated: 2026-09-21

## Why this is a separate problem

App-open and ordinary interstitial ads are both full-screen inventory, but they do not have interchangeable eligibility semantics. App-open ads are designed for app loading/foregrounding states; interstitials belong at natural pauses or completed transitions. Treating every route change, resume, or launch as monetizable creates policy risk and can degrade the first/restored useful-value path of a sparse professional app.

## Authoritative findings

### 1. App-open inventory is a loading/foreground surface, not a generic launch toll
Google documents app-open ads as inventory for app load screens and foregrounding. On cold start, an ad may not be ready; if the app finishes loading and the user has reached main content before the ad loads, the ad should not then be shown. The Android guidance also says not to show an app-open ad on the very first app start; iOS/Flutter guidance recommends waiting until users have used the app a few times.

Operational rule: `foreground event ≠ eligible exposure`. Eligibility requires a genuine waiting/loading state and no displacement of already-available core content.

### 2. Loaded app-open ads have a four-hour validity boundary
Google states that app-open ads expire four hours after loading. A cached reference older than that must not be treated as valid inventory.

Operational rule: preserve `load timestamp`, `foreground timestamp`, `show attempt`, `show success/failure`, and expiry decision. `cached object ≠ showable ad`.

### 3. Interstitials belong at natural pauses, not between a user's command and its expected result
Google's Mobile Ads SDK guidance places interstitials at natural transition points, such as after a completed task. Google Play's Better Ads Experiences policy prohibits unexpected full-screen interstitials when the user has chosen to do something else; its examples include an ad appearing after a user presses a button but before the intended action takes effect.

Operational rule: do not convert navigation latency into ad inventory. A tap whose semantic contract is “open/edit/save/show this” should complete before any separate eligible monetization state is considered.

### 4. Policy eligibility is weaker than product appropriateness
Even a technically permissible full-screen placement can be wrong for MintTap or LogMate if it delays restoration of a professional task, obscures state, or interrupts data-integrity work. First launch, recovery from interruption, unsaved edits, import/error recovery, financial transaction/tax-adjustment editing, and flight-entry/correction states are excluded by product policy regardless of ad fill opportunity.

## CG0–CG5 Full-Screen Transition Integrity Gate

`CG0 state identity → CG1 task/transition completion → CG2 format eligibility → CG3 freshness/readiness → CG4 exposure/revenue observability → CG5 preserved repeated value`

### CG0 — State identity
Classify cold start, first-ever start, warm foreground, resumed unfinished task, post-task completion, ordinary navigation, error recovery, and passive waiting separately.

### CG1 — Task/transition completion
The user's requested action must have reached its expected product result before an ordinary interstitial can be considered. Do not insert full-screen inventory between command and result.

### CG2 — Format eligibility
Use app-open only for genuine load/foreground waiting states. Use interstitial only at natural completed pauses. No format is mandatory; absence of an eligible state means no full-screen ad.

### CG3 — Freshness/readiness
For app-open, record load age and reject references at/over the documented four-hour boundary. Do not hold a loading screen solely to wait for ad fill, and do not present a late-arriving cold-start ad after main content is already available.

### CG4 — Exposure/revenue observability
Record format, ad unit, state class, request/load/show timestamps, app-open load age, show/fail/dismiss callbacks, ILRD value/precision/currency, and matched AdMob aggregate boundary. A foreground or show attempt is not an impression or revenue event.

### CG5 — Preserved repeated value
Retain only if qualified revenue is incremental without material degradation in first/restored useful value, task completion, abandonment, or repeated useful use. Short-term full-screen yield does not override product-value damage.

## Evidence separations

Preserve these distinctions:

- `app foreground ≠ loading/waiting state`
- `cold start ≠ permission to show app-open`
- `loaded app-open object ≠ unexpired/showable inventory`
- `user navigation tap ≠ natural transition`
- `show attempt ≠ impression`
- `impression ≠ precise/reconciled revenue`
- `policy-eligible ≠ product-appropriate`
- `incremental ad revenue ≠ sustainable incremental value`

## MintTap application

Do not add app-open or interstitial inventory merely to increase impressions. First audit whether either format exists in production. If absent, record `not implemented`.

If app-open exists, audit first-start suppression, cold/warm-state classification, whether content is already available before presentation, four-hour expiry enforcement, foreground recurrence, and ILRD/reconciliation. Home remains ad-free under the current product decision; an app-open ad must not become a workaround that effectively places a full-screen ad in front of Home.

Exclude resumed financial editing, portfolio/transaction entry, tax-adjustment entry/edit, error recovery, and any state where immediate restoration of user context matters.

If ordinary interstitial exists, identify the exact completed task boundary. A route/button tap before its expected result is not an eligible boundary.

## LogMate application

Before monetized launch, define cold start, warm foreground, unfinished-flight restoration, import processing, correction/error recovery, completed secondary task, and passive waiting as separate states. Flight entry/import/correction and recovery remain excluded.

Do not use first launch/onboarding as app-open inventory. For a professional pilot tool, restoration of an unfinished or safety/compliance-relevant workflow outranks a foreground monetization opportunity.

## Reusable company rule

Full-screen inventory is admitted by semantic state, not by technical event frequency. `onResume`, route changes, button taps, and launch events are instrumentation signals; they are not monetization permissions.

The company optimization target remains:

`reconciled incremental revenue from genuinely eligible states × preserved first/restored/repeated useful value`

## Sources

- Google for Developers — App open ads, Android (validated 2026-09-21): https://developers.google.com/admob/android/next-gen/app-open
- Google for Developers — App open ads, iOS (validated 2026-09-21): https://developers.google.com/admob/ios/app-open
- Google for Developers — App open ads, Flutter (validated 2026-09-21): https://developers.google.com/admob/flutter/app-open
- Google for Developers — Interstitial ads, Android (validated 2026-09-21): https://developers.google.com/admob/android/interstitial
- Google Play Developer Policy — Ads / Better Ads Experiences (validated 2026-09-21): https://support.google.com/googleplay/android-developer/answer/9857753

## Next evidence target

Audit MintTap production code/configuration for `AppOpenAd` and `InterstitialAd`; if present, map every show trigger to semantic product state, first-start behavior, foreground recurrence, app-open load age, callback/ILRD chain and matched AdMob revenue. If absent, record `not implemented` and do not introduce either format until a genuinely eligible state and measurement contract exist.