# Research 185 — Impression-Level Ad Revenue Measurement & Reconciliation Integrity

Date: 2026-09-22
Status: validated operating contract

## Why this matters
MintTap and LogMate are ad-funded specialist apps, but the business requirement is not simply to maximize impressions. Revenue must be measured closely enough to distinguish valuable, non-intrusive ad-bearing use from exposure inflation, while preserving the fact that impression-level values and AdMob performance reports are not finalized cash receipts.

## Authoritative findings

### 1. Impression-level revenue is available at the paid-event boundary
Google Mobile Ads SDK exposes impression-level ad revenue through the paid-event callback (`onAdPaid` / platform equivalent). The event carries monetary value, currency and a precision type. Google recommends attaching the listener as soon as the ad object is available and before display, then sending the event downstream immediately to avoid missed callbacks and discrepancies.

### 2. Revenue precision is part of the metric, not optional metadata
Google documents four precision classes: `UNKNOWN`, `ESTIMATED`, `PUBLISHER_PROVIDED`, and `PRECISE`. `ESTIMATED` may derive from aggregated data; `PUBLISHER_PROVIDED` may represent manual CPM information; `PRECISE` is the precise value paid for the ad. Therefore impression-level values must never be normalized into one undifferentiated exact-revenue field.

### 3. Mediation/source identity should travel with the paid event
Current SDK documentation exposes winning ad-source and source-instance information and, where applicable, mediation group/A-B-test metadata. This makes it possible to analyze revenue by actual inventory/source while retaining native provenance instead of inferring it later from aggregate eCPM.

### 4. Impression-level value is still not finalized publisher cash
AdMob performance reports are estimated until month-end finalization. Google can adjust earnings for invalid clicks/impressions, delayed processing, rounding and other protections; finalized earnings are posted in Payments/transaction history. Google also states that detailed invalid-activity deductions are intentionally not disclosed at per-day/per-app granularity. Therefore local paid-event sums cannot be treated as an accounting ledger or forced to reconcile exactly to finalized payout.

### 5. Frequency control and revenue measurement are separate controls
AdMob supports app-level frequency capping across interstitial, rewarded and app-open ads over a publisher-selected period. A revenue event does not establish that the exposure was appropriate. Product-level exposure policy must remain independent and can be stricter than network capability.

## CW0–CW5 Impression-Level Revenue Integrity Gate

**CW0 — event identity**
Record app/platform, ad unit, format, app version, event timestamp and test/production state. Never mix test impressions into production revenue analysis.

**CW1 — value/precision identity**
Store value in native micro-units/decimal representation, currency and Google precision type. Never silently promote `UNKNOWN`, `ESTIMATED`, or `PUBLISHER_PROVIDED` to `PRECISE`.

**CW2 — source/mediation identity**
Where available, retain winning ad-source/source-instance and mediation experiment/group identifiers. Preserve unknown values rather than reconstructing source from aggregate reports.

**CW3 — exposure/value join integrity**
Join revenue to product exposure context: placement, eligible consent state, session/value state, impression sequence and applicable frequency-cap state. Revenue optimization is invalid if the join cannot distinguish incremental monetization from additional user burden.

**CW4 — report/reconciliation integrity**
Reconcile local impression-level sums directionally against AdMob estimated reports, then separately against finalized monthly earnings. Record timing/time-zone/currency/invalid-traffic boundaries. Do not fabricate per-user or per-impression finalized revenue after Google performs aggregate adjustments.

**CW5 — sustainable-value decision**
Evaluate revenue together with first/repeated core value, retention/return behavior, ad-viewer rate and exposure intensity. Increase ad exposure only when incremental revenue is demonstrated without unacceptable degradation of specialist utility or trust.

## Canonical invariants
- `paid event ≠ finalized cash receipt`
- `estimated impression value ≠ precise impression value`
- `sum(local ILRD) ≠ guaranteed finalized AdMob payout`
- `eCPM ≠ user-level realized revenue`
- `higher impressions/user ≠ better monetization`
- `higher ad revenue/user ≠ acceptable product experience`
- `frequency-cap capability ≠ optimal frequency`
- `unknown precision/source ≠ zero value`
- `invalid-traffic adjustment ≠ permission to reverse-engineer protected detection logic`

## MintTap operating method
1. Inventory every production ad format/unit and verify paid-event instrumentation before changing exposure.
2. Persist value, currency, precision and available source/mediation provenance with test/production segregation.
3. Join paid events to the existing consent/exposure/value-state contract rather than maintaining a revenue-only stream.
4. Establish baseline distributions for impressions per active user/ad viewer, ad-viewer rate, estimated ad revenue per active user/ad viewer, repeated core value and return behavior.
5. Reconcile event sums with AdMob estimated reporting using explicit date/time-zone/currency boundaries; reconcile finalized earnings only at monthly accounting level.
6. Treat unexplained residuals as reconciliation residuals, not invented per-impression corrections.
7. Any monetization change must report incremental revenue and product-value/exposure effects together.

## LogMate transfer
Implement the same event contract before monetized launch. Because pilots use a professional utility, do not make revenue instrumentation a justification for interrupting logging, import verification, totals setup or other high-attention workflows. Establish value-safe placements first, then measure incremental revenue inside those states.

## Zero-cost constraint
Use first-party SDK callbacks and existing analytics/reconciliation infrastructure before purchasing third-party LTV tooling. Additional tooling is justified only if it resolves a concrete decision that cannot be answered from the canonical event/report contract.

## Sources
- Google for Developers, Impression-level ad revenue (Android, current GMA SDK): https://developers.google.com/admob/android/impression-level-ad-revenue
- Google for Developers, Impression-level ad revenue (iOS): https://developers.google.com/admob/ios/impression-level-ad-revenue
- Google AdMob Help, Estimated vs finalized earnings: https://support.google.com/admob/answer/6147072
- Google AdMob Help, Invalid activity deductions: https://support.google.com/admob/answer/6053295
- Google AdMob Help, Frequency capping for apps/ad units: https://support.google.com/admob/answer/6244508

## Next validation
Apply CW together with the existing CB–CI ad/consent/exposure contracts to MintTap production: inventory ad units/formats, verify paid-event callback coverage and precision/source capture, segregate test traffic, establish exposure/value baselines, and quantify the reconciliation boundary between local impression-level values, AdMob estimated reports and finalized monthly earnings before changing ad density.
