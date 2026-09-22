# Research 186 — Ad Format Fit and Interruption Budget for Specialist Utility Apps

Date: 2026-09-22
Status: Canonical extension after Research 185

## Question
How should an ad-funded niche professional utility maximize sustainable ad revenue without making advertising a usage restriction or damaging the specialist task that creates retention?

## Authoritative findings

### 1. Format capability is not placement permission
Google Mobile Ads defines interstitials as full-screen ads intended for natural transition points or pauses in an app flow. Google Play separately prohibits unexpected full-screen interstitials when the user has chosen to do something else. A technically supported format therefore does not establish that a particular product state is appropriate or policy-safe.

### 2. App-open inventory is loading-state inventory, not generic foreground inventory
Google describes app-open ads as monetization for app loading screens. Current guidance says not to show an app-open ad on the first app start; first exposure should occur only after users have used the app several times. On cold start, an app-open ad should be shown strictly from a loading screen while assets load; if main content is reached before the ad loads, the ad should not be shown. Loaded app-open ads expire after four hours.

Operational implication: a foreground event is not itself an ad opportunity. A valid opportunity requires an authentic wait/loading state plus lifecycle eligibility. Never delay useful content merely to manufacture app-open inventory.

### 3. Interstitial opportunity requires a completed task boundary
Google's interstitial guidance centers on natural transition points and completion/pause states. Google Play prohibits unexpected full-screen interstitials and full-screen video interstitials before the loading/splash experience. Therefore specialist utilities should define product-semantic completion boundaries rather than page-view counters.

For MintTap, opening a portfolio, checking a distribution, editing a holding, viewing tax/ROC information, or returning to Home is not automatically a natural break. For LogMate, entering/editing a flight, importing/validating records, reviewing totals, or performing safety/compliance-adjacent work should not be interrupted merely because a navigation threshold was reached. Candidate full-screen opportunities require an actually completed non-critical task and must still pass frequency, consent, policy and value-protection gates.

### 4. Persistent banners consume spatial/attention budget even when policy-safe
Anchored adaptive banners occupy part of the layout and can remain on screen; Google notes automatic refresh occurs only while the banner is visible. This creates an exposure-duration dimension that impression counts alone do not describe.

For professional utilities, banner eligibility therefore depends on whether the screen has genuinely non-critical persistent space. Core data density, entry controls, validation/error states and primary actions outrank ad inventory. A banner that causes scrolling, compresses a critical table, shifts controls, obscures state, or competes with error/decision information fails product fit even if it can technically render.

### 5. Revenue optimization needs an interruption budget, not an impression target
Research 185 established that impression-level revenue is estimated/provenance-sensitive and distinct from finalized publisher earnings. This research adds the product-side denominator: ad revenue must be evaluated against interruption and occupied-attention cost.

Define an `interruption budget` as the maximum advertising burden allowed without degrading the specialist job. It is a guardrail, not a quota to fill.

Minimum observable dimensions:
- full-screen ads per active user/session/day;
- app-open ads per eligible foreground/loading event and per active user;
- banner-visible seconds / eligible screen time;
- ad-viewer rate and impressions/ad viewer;
- dismiss-to-next-core-action latency;
- task abandonment after ad exposure;
- first useful value and repeated useful value by exposure band;
- return behavior by exposure band;
- impression-level revenue and precision mix by format/placement;
- policy/complaint/error incidents.

Do not infer causality from observational exposure bands; heavier users can naturally create both more value events and more ad opportunities. Controlled tests are permitted only when traffic/power and UX risk justify them under CP.

## CX0–CX5 Ad Format Fit & Interruption-Budget Integrity Gate

**CX0 — Specialist-job identity**  
Name the exact user job/state and whether it is entry, active work, completion, wait/loading, error/recovery, or passive review.

**CX1 — Format-semantic fit**  
Use a format only where its platform semantics match the real product state. Do not manufacture waits, transitions, or completion states to create inventory.

**CX2 — Critical-value protection**  
No ad may gate, obscure, delay, compress, or interrupt required setup, data entry, validation/recovery, primary specialist information, or first useful value. Ads are not a usage restriction.

**CX3 — Interruption/exposure budget**  
Set format/placement-specific guardrails before optimizing yield. Frequency capability is not a target. Banner occupied time and full-screen interruption are separate burdens.

**CX4 — Revenue/value evidence join**  
Join CW revenue evidence to exposure intensity, task completion/abandonment, first/repeated useful value and return behavior. Preserve consent eligibility and traffic-quality/test segregation.

**CX5 — Sustainable decision**  
Retain/increase inventory only when incremental monetization is compatible with policy, product utility and repeated specialist value. If evidence is sparse, default to the less intrusive placement rather than filling theoretical inventory.

## Canonical rules
- `ad format supported ≠ placement appropriate`
- `foreground event ≠ app-open opportunity`
- `navigation event ≠ natural interstitial transition`
- `available screen space ≠ non-critical ad space`
- `banner impression count ≠ occupied-attention cost`
- `frequency-cap capability ≠ target frequency`
- `more eligible impressions ≠ better monetization`
- `higher short-term ad revenue ≠ sustainable revenue`
- never delay app readiness or insert synthetic transitions to create ad inventory
- first useful value is protected from full-screen monetization by default

## MintTap application
1. Inventory every production placement by screen, lifecycle state, format and trigger—not just ad-unit ID.
2. Mark portfolio/ticker/distribution/ROC/tax/edit/recovery surfaces as critical or non-critical before considering banner/full-screen inventory.
3. Verify whether any app-open logic fires on first use, after main content is ready, or on foreground events without a genuine loading state; these are high-priority review points.
4. Replace navigation-count interstitial logic, if present, with product-semantic completion eligibility plus conservative exposure guardrails.
5. Join CW impression-level value to format/placement and exposure bands before considering inventory expansion.

## LogMate application
Establish the contract before monetized launch. Home should remain ad-free under the current product decision. Flight entry/edit, import, duplicate resolution, Previous Total setup, validation/recovery and safety/compliance-adjacent states are protected. Any future secondary-surface banner or full-screen placement must independently pass CX0–CX5; an ad-free core flow is a design constraint, not unmonetized inventory waiting to be filled.

## Reusable operating registry
For every placement record: app/version/platform, screen/state/job, format, ad unit, trigger, genuine transition/wait rationale, first-value protection, consent eligibility, frequency/exposure guardrail, visible/occupied duration where relevant, paid-event coverage, revenue precision/source, task outcome, return-value evidence, policy incidents, decision and review date.

## Sources
- Google for Developers, App open ads / GMA Next-Gen Android, accessed 2026-09-22: https://developers.google.com/admob/android/next-gen/app-open
- Google for Developers, App open ads / iOS, accessed 2026-09-22: https://developers.google.com/admob/ios/app-open
- Google for Developers, Interstitial ads / Android, accessed 2026-09-22: https://developers.google.com/admob/android/interstitial
- Google for Developers, Interstitial ads / iOS, accessed 2026-09-22: https://developers.google.com/admob/ios/interstitial
- Google for Developers, Banner ads / iOS, accessed 2026-09-22: https://developers.google.com/admob/ios/banner
- Google Play Developer Policy, Ads / Better ad experiences, accessed 2026-09-22: https://support.google.com/googleplay/android-developer/answer/9857753

## Next evidence work
Apply CX jointly with CB–CI and CW to MintTap production. Recover actual trigger code/configuration, not intended placement descriptions. Measure placement-level exposure and revenue before proposing changes. For LogMate, encode protected states and allowed candidate surfaces before any ad SDK placement work.