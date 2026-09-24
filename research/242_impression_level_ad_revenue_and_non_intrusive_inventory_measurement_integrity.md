# Research 242 — Impression-Level Ad Revenue and Non-Intrusive Inventory Measurement Integrity

Last validated: 2026-09-24

## Decision problem
For an ad-funded specialist app, maximizing revenue by adding more ads is a weak operating rule. The useful unit is the revenue and user-value effect of an eligible ad impression at a specific surface, while protecting core workflows and avoiding accidental-click incentives.

## Validated platform facts

### 1. Impression-level revenue exists and has precision semantics
Google Mobile Ads exposes a paid-event callback when an impression occurs. The event carries monetary value, currency and a precision type. Precision can be unknown, estimated, publisher-provided or precise. Therefore an impression-level value is not automatically an exact cash-reconciliation record; the precision field must travel with the value.

Google recommends registering the paid-event handler as soon as the ad object is available and before display, and forwarding the event immediately so callbacks are not lost.

### 2. Revenue telemetry enables surface-level decisions
The paid event can be joined to an internal, privacy-eligible ad-surface taxonomy such as `screen_class`, `placement_id`, `format`, `session_stage` and app/version context. This makes it possible to compare revenue contribution without using CTR as the optimization objective.

Do not treat estimated impression revenue as settled revenue. Reconcile aggregate telemetry to the authoritative AdMob reporting/accounting view and preserve currency/precision.

### 3. Banner format must match layout, not revenue ambition
Google describes anchored adaptive banners as persistent top/bottom layout ads whose size adapts to available width. For scrollable content, inline adaptive banners are the recommended banner family. The surrounding layout must tolerate returned height and safe areas.

This means format selection follows the host layout. It is not valid to replace a quiet anchored slot with a larger/overlay format merely because the latter can produce more revenue per impression.

### 4. Accidental-click risk is a hard constraint
Google explicitly discourages banner placement immediately adjacent to navigation or other interactive content because proximity is a major cause of accidental clicks. Interstitials must not unexpectedly interrupt a user who is focused on a task, must not block core navigation/content, and repeated interstitials can create poor UX and accidental clicks.

Google's interstitial implementation guidance says no more than one interstitial after every two user actions. This is a compliance ceiling, not a recommended monetization target for specialist productivity apps.

## FB0–FB5 gate
`surface/value identity → format/layout integrity → paid-event measurement integrity → precision/reconciliation integrity → UX/policy guardrail integrity → sustainable revenue decision`

### FB0 — Surface/value identity
Name the exact surface and user state. Core task, error/recovery, form entry, safety/compliance interpretation, onboarding and high-attention specialist workflows are protected by default.

### FB1 — Format/layout integrity
Choose a format because it structurally fits the surface. Anchored adaptive for persistent fixed edges; inline adaptive for appropriate scrollable content. Full-screen formats require a genuine natural break and separate authorization.

### FB2 — Paid-event measurement integrity
Capture impression-level paid events where technically supported. Minimum useful schema: app/version, platform, placement/ad-unit, format, surface class, timestamp, value, currency, precision. Add user/session identifiers only when privacy/consent policy permits and they are actually needed.

### FB3 — Precision/reconciliation integrity
Never sum mixed currencies without conversion policy. Never erase precision. `ESTIMATED` is not `PRECISE`; impression telemetry is an analytical signal, not automatically booked revenue. Reconcile aggregate totals against AdMob reports before using discrepancies as product conclusions.

### FB4 — UX/policy guardrail integrity
CTR is not the success metric. Accidental-click proximity, task interruption, navigation obstruction and repeated interstitial exposure are disqualifiers even if short-term revenue rises. Compliance ceilings must never be converted into product targets.

### FB5 — Sustainable revenue decision
A placement earns expansion only when incremental revenue is material and there is no meaningful deterioration in core-value completion, repeat use, retention/recovery signals, support/review quality or policy health. Sparse niche traffic means uncertainty must be preserved rather than compensated for with more exposure.

## Canonical forbidden inferences
- `higher CTR = better placement`
- `higher eCPM = higher sustainable revenue`
- `more impressions = better monetization`
- `paid event value = settled cash`
- `estimated precision = precise revenue`
- `policy permits frequency = product should use that frequency`
- `banner fits technically = banner belongs on the surface`
- `low niche traffic = increase ad density`

## MintTap application
MintTap should instrument eligible secondary ad inventory before increasing density. Compare revenue by stable placement/surface while protecting portfolio setup/editing, tax/ROC interpretation and other high-attention financial workflows. A higher-revenue placement is not promoted if it damages repeated specialist value or creates interaction proximity risk. Do not optimize clicks.

## LogMate application
Keep Home and critical logging/import/export/sync/totals workflows protected. If advertising is introduced later, begin with explicitly eligible secondary surfaces and impression-level revenue telemetry. Flight-entry, validation, recovery and compliance/recency interpretation are not candidates for interruption merely because an interstitial would monetize better.

## Reusable operating registry
`app × version × platform × placement × surface class × format × eligibility reason × paid-event enabled × currency × precision mix × impressions × reconciled revenue × core-value completion × repeat-use/retention signal × support/review signal × policy state × decision`

## Next evidence target
Audit MintTap's production ad units and map each to a real UI surface. Verify whether paid-event/impression-level revenue capture exists, whether precision/currency are retained, and whether totals reconcile sufficiently with AdMob. Only after this evidence exists should placement density, format, mediation or exposure be optimized.

## Authoritative references
- Google for Developers — AdMob impression-level ad revenue (Android/iOS), validated 2026-09-24.
- Google for Developers — AdMob Flutter banner/adaptive banner guidance, validated 2026-09-24.
- Google AdMob Help — discouraged banner implementations and disallowed interstitial implementations, validated 2026-09-24.
