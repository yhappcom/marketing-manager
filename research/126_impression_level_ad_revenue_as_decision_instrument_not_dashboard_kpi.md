# 126 — Impression-Level Ad Revenue as a Decision Instrument, Not a Dashboard KPI

Date: 2026-09-19

## Decision
For a sparse professional app, ad monetization cannot be optimized responsibly from eCPM, impressions, or aggregate estimated revenue alone. Placement decisions need impression-level ad revenue (iLAR) joined to the user state and downstream product outcome that made the impression eligible.

Canonical principle: **revenue must be attributed to an eligible user state before it can justify monetization pressure.**

## Validated platform facts
Google Mobile Ads exposes a paid-event callback for supported formats. The callback includes monetary value, currency and a precision type. Google documents four precision classes: UNKNOWN, ESTIMATED, PUBLISHER_PROVIDED and PRECISE. Mediation values may therefore be estimates or publisher-provided rather than exact paid values.

Google recommends registering the paid-event listener before showing the ad and forwarding the event immediately so callbacks are not lost.

AdMob reporting remains the definitive source for finalized revenue because it reflects validated clicks/impressions and reconciliation. Google Analytics can receive ad-revenue data and is useful for joining monetization to user behavior, but real-time and finalized figures can differ; Google states adjustments can occur within 72 hours. A third-party mediation implementation must also avoid duplicate revenue logging when AdMob/Firebase linking is active.

## AR0–AR5 — Revenue Attribution Integrity Gate

### AR0 — Invalid decision basis
Raw CTR, impression count, eCPM, estimated revenue, or a single dashboard total is used to justify a placement without product-state context.

### AR1 — Aggregate monetization only
Revenue by app/ad unit/format exists, but there is no reliable eligible-opportunity denominator or downstream utility linkage.

### AR2 — iLAR captured but semantically weak
Paid callbacks are captured, but precision type, currency, source, placement/user state, duplication risk, or product outcome is missing.

### AR3 — Decision-grade instrumentation
Require all of:
- paid-event callback attached before show;
- value + currency + precision retained;
- ad format/unit and source/mediation context retained where available;
- canonical placement ID and eligibility-state ID;
- eligible opportunity, request, fill/show and paid-event denominators kept distinct;
- no duplicate Firebase/GA revenue path;
- downstream first-value/useful-return/task-continuation guardrails;
- privacy/consent behavior documented;
- owner and reconciliation procedure against AdMob finalized reporting.

### AR4 — Product-compatible economics evidenced
Incremental revenue is observed for an AR3 placement and remains compatible with abandonment, next-core-action completion, useful return, retention/reputation and existing AM/AN/AO/AP/AQ placement gates. Precision mix and reporting reconciliation are understood rather than hidden in one point estimate.

### AR5 — Reusable portfolio operating system
The same event contract, placement registry, precision handling, reconciliation rules and retained-utility economics can be reused across niche apps without assuming that a placement proven in one workflow is eligible in another.

## Required event contract
Minimum decision record:
`placement_id, eligibility_state_id, ad_format, ad_unit_id, opportunity_id, paid_value_micros, currency, precision_type, ad_source, mediation_context, consent_state_class, task_state, next_core_action, useful_return_window`

Do not store unnecessary personal data merely to improve ad attribution. The contract should use product-state identifiers sufficient for aggregate decision analysis.

## Denominator discipline
Do not optimize `revenue / session` alone. Maintain the funnel:
`eligible opportunities → requests → fills → shows → paid events → reconciled revenue → immediate continuation → next core action → useful return`.

This prevents a placement from appearing successful merely because the app manufactures more ad opportunities.

## Precision discipline
PRECISE, ESTIMATED, PUBLISHER_PROVIDED and UNKNOWN are not interchangeable observations. Keep the precision dimension in raw data and report its mix. Small niche apps are particularly vulnerable to false certainty because a small number of high-value impressions can dominate short windows.

## Reconciliation discipline
Use iLAR for behavioral attribution and experiment diagnosis, not as a substitute for payout accounting. Reconcile analysis totals to finalized AdMob reporting after the platform processing window. Investigate material gaps before making placement decisions.

## MintTap implication
Before increasing any banner/interstitial/app-open/rewarded/native pressure, instrument the existing inventory to AR3. Join each paid impression to the natural-user-state registry from AM–AQ. A higher eCPM cannot rescue a placement that is ineligible under those gates.

The first useful comparison is not format-vs-format eCPM. It is **incremental reconciled revenue per eligible opportunity while first value/useful return remains intact**.

## LogMate implication
Do not add advertising merely to generate monetization data. Preserve scarce pilot evidence for the logbook workflow. If advertising is later introduced, use the same AR contract from the first production placement so revenue never becomes detached from flight-entry/import/backup workflow safety.

## Company operating rule
Monetization decisions require two independent truths:
1. **Accounting truth:** finalized AdMob reporting.
2. **Decision truth:** iLAR joined to eligible product state and downstream utility.

Neither replaces the other.

## Authoritative sources
- Google for Developers — Impression-level ad revenue (Android / Mobile Ads SDK), current 2026 documentation.
- Google AdMob Help — Use impression-level ad revenue.
- Google AdMob Help — Understanding AdMob data flow to Google Analytics and Google Ads.
- Google Analytics Help — Analytics dimensions and metrics.

## Next validation
Audit MintTap implementation for paid-event callbacks, precision retention, Firebase/AdMob linking, duplicate `ad_impression` risk, canonical placement IDs and reconciliation. Do not infer any of these from the presence of an ad SDK.