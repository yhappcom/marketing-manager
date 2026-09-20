# 141 — Ad Revenue Precision and Reconciliation Contract

Last validated: 2026-09-20

## Decision
For a sparse professional utility, impression-level ad revenue (ILAR) is an attribution input, not ground truth. Every paid-event value must preserve its native precision type and be reconciled against platform reporting before it can support placement or product decisions.

## Newly validated platform facts

Google Mobile Ads' impression-level paid callback supplies value, currency and a precision type. Current Google documentation distinguishes UNKNOWN, ESTIMATED, PUBLISHER_PROVIDED and PRECISE. ESTIMATED can be derived from aggregated data; PUBLISHER_PROVIDED can reflect manual CPMs; PRECISE is the precise value paid for the impression. Therefore two numerically identical paid callbacks do not necessarily have equal evidentiary quality.

Google recommends registering the paid-event listener before showing the ad and forwarding the paid-event data immediately when the callback occurs to reduce dropped callbacks and discrepancies. Response information can also identify the winning ad source/source instance and mediation experiment metadata.

When AdMob is linked to Firebase/Google Analytics, Firebase automatically logs `ad_impression` events. Google also recommends validating via DebugView/Realtime and sampling exported `ad_impression` events in BigQuery for zero/not-set or malformed values. `currency` and `value` are required for downstream Google Ads processing and should be as accurate as possible.

## Why this matters
A placement can appear to have higher revenue because its traffic mix contains more estimated or publisher-provided values, because paid callbacks were dropped, because currencies were mishandled, or because analytics and AdMob use different event/reporting semantics. BF's incremental-revenue decision therefore needs a measurement-quality layer before optimization.

## BG0–BG5 — Ad Revenue Evidence Integrity Gate

### BG0 — No decision contract
Raw AdMob dashboard revenue, GA ad revenue, or SDK paid callbacks are viewed independently. No placement-level reconciliation exists.

### BG1 — Event inventory
Document SDK/version, ad format, ad unit, placement identifier, paid callback implementation, Analytics/Firebase linkage, mediation state and reporting surfaces.

### BG2 — Precision-preserving event contract
For every paid callback preserve at minimum:
- event timestamp
- app/platform/version
- placement and ad-unit identity
- ad format
- value in native units and normalized units
- ISO currency
- native precision type
- loaded ad source/source instance when available
- mediation group / A-B test metadata when available
- request/impression correlation key where technically available without creating prohibited personal tracking

Never coerce UNKNOWN, ESTIMATED, PUBLISHER_PROVIDED and PRECISE into an undifferentiated `revenue` fact.

### BG3 — Pipeline validation
Verify listener registration occurs before display; paid callbacks are forwarded immediately; Firebase/Analytics `ad_impression` events contain valid value/currency; and exported samples contain no unexplained zero/not-set clusters. Test traffic is excluded from production economics.

### BG4 — Reconciliation
For a fixed reporting window reconcile SDK/analytics revenue to the authoritative monetization reporting surface at the finest defensible common grain (app/platform/ad unit/format/date; source where semantics match). Record absolute and relative variance, missing-event rate where measurable, currency conversion method, timezone/reporting cutoff and precision composition.

Do not invent a universal acceptable variance threshold. Establish a baseline from stable production periods and investigate material breaks relative to that baseline and known platform/reporting latency.

### BG5 — Decision-grade revenue
Only reconciled revenue with known precision composition may enter BF incremental-revenue tests. Placement winners must remain winners under a sensitivity view that separates PRECISE from ESTIMATED/PUBLISHER_PROVIDED/UNKNOWN contributions where volume permits. Revenue evidence that cannot be reconciled remains diagnostic, not optimization-grade.

## Operating schema
Recommended registry fields:
`placement_id, platform, app_version, ad_unit_id, format, sdk_version, mediation_state, paid_callback_present, listener_registration_point, event_transport, currency, value_native, value_normalized, precision_type, source_id, source_instance_id, mediation_experiment, analytics_ad_impression_present, reconciliation_surface, reporting_timezone, reporting_window, sdk_or_analytics_revenue, platform_reported_revenue, absolute_variance, relative_variance, precision_mix, known_latency, status, notes`.

## MintTap application
The next ad audit should not start by asking which placement has the highest eCPM. First establish whether every actual placement has a paid-event path and whether its precision/currency/source identity survives into analytics. Home remains outside the ad candidate set under the existing product decision. Secondary/static surfaces and natural completed-task transitions can only be compared after BG3–BG4 measurement integrity is demonstrated.

## LogMate application
Do not design ILAR instrumentation as permission to add ads before pilot workflow evidence exists. Define the BG event contract alongside eventual eligible-state contracts, but activate monetization experiments only after genuine core-value/useful-return behavior identifies non-disruptive states.

## Reusable company rule
`natural eligible state → valid impression → precision-preserved paid event → analytics transport → platform reconciliation → BF incremental revenue + core-value guardrails → decision`

A revenue number without precision provenance and reconciliation is not decision-grade monetization evidence.

## Sources
- Google for Developers, Mobile Ads / Ad Manager, Impression-level ad revenue (Android Next-Gen), accessed 2026-09-20.
- Firebase, Measure ad revenue, accessed 2026-09-20.
