# 164 — Impression-Level Ad Revenue Precision and User-Value Measurement

Validated: 2026-09-21

## Why this matters
For a sparse-niche, ad-supported app, aggregate AdMob revenue is too coarse to decide whether an ad placement creates sustainable value. Google Mobile Ads exposes impression-level ad revenue (ILRD) through a paid-event callback. This permits revenue to be joined to app state and downstream product outcomes without treating clicks as the optimization target.

## Authoritative findings
Google documents an `OnPaidEventListener`/paid-event callback for supported Mobile Ads formats. `AdValue` supplies value in micros, currency code, and a precision type. Google explicitly distinguishes `UNKNOWN`, `ESTIMATED`, `PUBLISHER_PROVIDED`, and `PRECISE`; therefore an impression revenue value is not automatically an exact realized amount. In mediation, optimized sources may produce estimated values, while non-optimized/insufficient-data sources can return publisher-provided values. Test bidding impressions can return zero with UNKNOWN precision.

Google recommends attaching the paid-event listener immediately when the ad object becomes available and before showing the ad, then forwarding the revenue information immediately when the callback occurs to reduce dropped callbacks/discrepancies.

Interstitials are intended for natural transition/pause points, not arbitrary task interruption. AdMob guidance also prohibits recurring interstitial patterns that overwhelm users or interfere with core navigation; Google Play separately prohibits unexpected full-screen interstitials. These constraints mean revenue optimization must occur inside eligible product states rather than by maximizing raw ad frequency.

Sources:
- https://developers.google.com/admob/android/impression-level-ad-revenue
- https://developers.google.com/admob/android/interstitial
- https://support.google.com/admob/answer/6201362
- https://support.google.com/googleplay/android-developer/answer/9857753

## New operating distinction
Preserve the following states separately:

`ad eligible → request → fill/load → impression → paid-event callback → revenue value + currency + precision → reconciled aggregate revenue → post-ad product behavior`

Do not collapse them. In particular:
- impression ≠ paid callback successfully captured;
- paid callback ≠ PRECISE revenue;
- ILRD sum ≠ automatically identical to console/accounting revenue;
- higher ILRD per session ≠ higher sustainable app value;
- click-through rate is not a valid company optimization objective for non-rewarded ads.

## CB0–CB5 — Impression Revenue & User-Value Integrity Gate

### CB0 — Eligible-state identity
Name the exact product state in which an ad is eligible. The state must already be a natural pause/transition or otherwise policy-compatible placement; never invent friction solely to create inventory.

### CB1 — Impression identity
Record app version, platform, ad unit/format, placement/state ID, session/task context and impression/callback time. Do not require invasive personal identity when pseudonymous/cohort analysis is sufficient.

### CB2 — Revenue-value integrity
Persist value micros, currency and precision type. Never silently convert ESTIMATED/PUBLISHER_PROVIDED/UNKNOWN into PRECISE. Preserve the raw currency/value before normalized reporting.

### CB3 — Callback/completeness integrity
Attach the paid listener before show and monitor callback capture. Missing callbacks are an observability defect, not zero revenue. Test traffic must remain segregated from production evidence.

### CB4 — Reconciliation integrity
Compare ILRD totals/counts against platform-native aggregate evidence over matched app/ad-unit/date/currency boundaries. Treat discrepancy as a measurement problem to diagnose; do not force one dataset to equal another by deleting unexplained records.

### CB5 — Sustainable-value decision
Evaluate revenue jointly with product outcomes: task completion, return/repeated useful value, session abandonment after ad, latency/error effects and support/review signals. Promote a placement only when incremental/reconciled revenue does not materially damage the app's promised value.

## MintTap application
Home remains ad-free. The immediate question is not how to add more ads but whether existing secondary-surface placements can be measured at impression level and joined to natural post-task states. Audit current Mobile Ads SDK/version, ad formats/ad-unit map, whether ILRD is enabled, whether paid callbacks are implemented, which fields are retained, test/production separation, and whether the resulting totals can be reconciled with AdMob.

For a finance utility, do not place an interstitial while a user is entering/editing a transaction, reviewing a tax adjustment, or resolving a financial state merely because those screens have high engagement. Candidate eligibility begins only after a stable task boundary.

## LogMate application
Design the event contract before monetized launch. Flight entry/import/editing and any workflow where interruption risks data loss or logging error are not ad-optimization surfaces. If secondary natural pauses later become eligible, use the same CB contract from first production release so revenue and retention evidence are comparable.

## Reusable company rule
Optimize `reconciled revenue from policy-eligible natural states × preserved useful/repeated value`, not impressions per user, CTR, or raw eCPM in isolation. A placement with higher short-term ad yield but worse core-task completion/repeat use fails the company objective.

## Next evidence required
1. MintTap production ad-unit/placement inventory and Mobile Ads SDK versions.
2. Whether ILRD is enabled in AdMob and implemented on Android/iOS.
3. Exact paid-event schema currently emitted, including precision type and currency.
4. A matched-day ILRD ↔ AdMob reconciliation sample.
5. Stable post-task/product-state identifiers that can be joined without exposing sensitive financial content.
