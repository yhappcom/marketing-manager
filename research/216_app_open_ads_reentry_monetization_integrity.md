# Research 216 — App-Open Ads & Re-entry Monetization Integrity

Validated: 2026-09-23

## Why this exists
Research 215 established impression-level revenue and placement integrity. This module narrows one high-risk monetization surface: app-open ads. The objective is not to add another impression opportunity; it is to determine whether re-entry/loading time is legitimately monetizable without corrupting specialist utility, first-use trust, or adjacent ad surfaces.

## Authoritative findings

### 1. App-open ads are a loading/re-entry format, not a generic full-screen interstitial
Google defines app-open ads for app load screens and foreground re-entry. They should appear when a user opens or switches back to the app. Interstitial guidance separately says not to place interstitials on app load/exit and recommends app-open ads for loading/re-entry instead.

Operational implication: format semantics are part of placement integrity. A full-screen ad at launch is not interchangeable with an interstitial simply because both cover the screen.

### 2. First-use trust takes priority
Google's current implementation guidance says not to show an app-open ad on the very first app start; another current guide recommends showing the first app-open ad only after the user has opened the app several times.

Company rule: first launch/onboarding/initial trust formation is not an app-open monetization surface. A future implementation needs an explicit eligibility state rather than `foreground => show`.

### 3. Cold-start timing has a hard UX boundary
On cold start, the ad should be shown strictly from the loading screen while app assets are loading. If loading completes and the user reaches main content before the ad loads, do not show the late ad. App-open ads should not appear after the user has begun interacting with content.

This creates a canonical `late-ad suppression` rule: lost impression opportunity is preferable to interrupting already-started specialist work.

### 4. Warm re-entry is not automatically eligible
Google describes the format for foreground re-entry, but also tells publishers to analyze performance and adjust frequency caps. Its current guidance says apps opened more than once every four hours tend to see the best app-open performance and suggests another format for apps that do not fit that usage pattern.

The four-hour statement is an observed format-fit recommendation, not a company frequency target. Do not convert it into `show every four hours`.

### 5. Adjacent ad stacking is explicitly undesirable
Google says not to display ads immediately before or after an app-open ad and not to put an app-open ad over another ad, including content carrying a banner.

Company rule: re-entry monetization requires an ad-separation state. A successful app-open impression must not trigger an immediate banner/interstitial sequence merely to increase impressions/session.

### 6. Loaded-ad freshness is format-specific
Current Google Mobile Ads SDK guidance states that app-open ads expire four hours after loading. Cached/preloaded state therefore needs load timestamp/validity semantics; availability is not permanent eligibility.

### 7. Close latency is a product cost, not just an ad detail
Current AdMob guidance states that app-open ads may have up to a two-second delay before a close option; high-engagement ads may have up to five seconds. Even policy-compliant inventory can therefore impose a measurable re-entry delay.

For a specialist utility app, this cost belongs in the monetization decision. Revenue must be evaluated against time-to-core-value, abandonment and repeat-use behavior, not impression yield alone.

## EB0–EB5 App-Open Re-entry Monetization Integrity Gate

### EB0 — Format identity
Record platform, SDK/version, ad unit, app-open format, cold/warm entry state, load timestamp and show timestamp. Never relabel generic interstitial launch inventory as app-open evidence.

### EB1 — User-state eligibility
Suppress first launch/onboarding and any trust-critical setup. Define repeat-user eligibility explicitly. Foregrounding alone is insufficient.

### EB2 — Loading-boundary integrity
Cold start: show only while a genuine loading state remains. If main content/core interaction becomes available first, suppress the late ad. Record `eligible-but-late-suppressed` separately from fill failure.

### EB3 — Frequency & adjacency integrity
Maintain explicit frequency cap and prior/next-ad separation. Do not infer a four-hour cap from Google's performance observation. Do not stack app-open with immediate banner/interstitial inventory.

### EB4 — Utility-cost integrity
Measure app-open eligible re-entries against time-to-core-value, pre-core abandonment, task completion, repeat specialist value, complaints/reviews and invalid-activity signals. Close latency is part of the treatment cost.

### EB5 — Sustainable revenue decision
Join EA impression-level revenue semantics and reconciliation to the EB cohort. Scale only if reconciled incremental revenue survives utility/trust guardrails. Optimize revenue per qualified repeated-value user, not app-open impressions per foreground event.

## Required event tuple
`app/build | platform | sdk/version | user lifecycle state | cold/warm | foreground timestamp | loading start/end | content-interactive timestamp | ad request/load timestamp | ad age | eligible reason | suppression reason | show/impression/dismiss/click | ILRD value/currency/precision/source | adjacent-ad state | time-to-core-value | core task completion/abandonment | repeat value | complaint/invalid-activity signal`

Suppression reasons should distinguish at least: `first_use`, `onboarding`, `content_already_interactive`, `frequency_cap`, `adjacent_ad`, `no_valid_loaded_ad`, `consent_or_privacy_ineligible`, `technical_error`.

## MintTap application
Do not add app-open ads merely because MintTap is ad-funded. First use and any setup/import/recovery state remain protected. If production already uses app-open ads, audit actual cold/warm behavior before changing frequency. A returning user opening MintTap to inspect time-sensitive portfolio/distribution information should not receive a late full-screen ad after the portfolio is already usable.

Candidate testing, only after DZ + EA evidence is valid:
- repeat-user loading/re-entry cohort only;
- explicit frequency cap variants versus holdout;
- no adjacent interstitial/banner stacking;
- outcome = reconciled incremental revenue with non-inferior qualified task completion/repeat value and acceptable time-to-core-value/complaint state.

## LogMate application
Home remains ad-free. Do not treat app-open as a loophole around that product decision: an app-open ad immediately before Home still monetizes access to Home. Given pilot/logbook utility and possible time-sensitive operational use, app-open should remain disabled at launch unless later evidence demonstrates a non-critical re-entry context that passes EB0–EB5. Secondary ad-bearing surfaces remain governed by EA.

## Reusable niche-app rule
App-open ads are suitable only when a product has genuine loading/re-entry wait time, repeat users, sufficient open frequency, and a measurable ability to protect first-use and core-task latency. They are not a default monetization layer for every ad-funded app.

## Preserve these distinctions
- `foreground event ≠ ad eligibility`
- `app-open ≠ launch interstitial`
- `loaded ad ≠ valid fresh ad`
- `four-hour performance observation ≠ four-hour frequency target`
- `policy-compliant placement ≠ utility-safe placement`
- `eligible impression ≠ worthwhile impression`
- `late ad suppressed ≠ fill failure`
- `more re-entry impressions ≠ higher sustainable LTV`

## Sources
- Google for Developers, Set up app open ads (Android, current Next-Gen SDK): https://developers.google.com/admob/android/next-gen/app-open
- Google for Developers, Load a single app open ad: https://developers.google.com/admob/android/next-gen/app-open/single-load
- Google AdMob Help, App open ad guidance and best practices: https://support.google.com/admob/answer/9341964
- Google AdMob Help, Disallowed interstitial implementations: https://support.google.com/admob/answer/6201362

## Next evidence target
For MintTap, reconstruct whether app-open inventory exists. If it does: exact ad unit/SDK, cold versus warm show behavior, first-use suppression, loading/content-interactive timing, frequency cap, adjacent ads, loaded-ad age, ILRD/reconciliation, time-to-core-value and downstream specialist-value outcomes. If it does not exist, retain EB as a precondition rather than recommending implementation without product evidence.