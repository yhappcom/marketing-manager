# Live Evidence Registry Template

Validated: 2026-09-16
Phase: Application & Live-Validation Readiness

## Purpose
Operationalize the Evidence Provenance & Baseline Measurement Protocol as an append-only evidence registry for MintTap, LogMate, and future niche apps. This is the auditable evidence layer behind dashboards and Decision Records.

## Core rule
One record represents one observation under one stable metric definition, population, window, and context. Never overwrite an old observation when a definition or baseline boundary changes. Append a new record and link the change event.

## Evidence record

```yaml
evidence_id: EV-YYYYMMDD-0001
product: <product>
platform: <iOS|Android|Web|Community|Other>
market: <territory>
app_version: <version-or-UNKNOWN>
store_listing_version: <change-id-or-UNKNOWN>
evidence_class: <A|B|C|D|E|F>
source_system: <native source>
source_surface: <report/surface>
collection_method: <UI|EXPORT|API|MANUAL_VERIFIED>
metric_native_name: <name>
metric_native_definition: <definition>
metric_definition_version: <version>
unit: <unit>
aggregation: <aggregation>
window_start: YYYY-MM-DD
window_end: YYYY-MM-DD
value: <number-or-null>
status: <OBSERVED|UNKNOWN|SUPPRESSED|NOT_INSTRUMENTED|NOT_APPLICABLE|INVALID>
dimensions_filters: <filters>
population_eligibility: <scope>
privacy_threshold_limitation: <none-or-description>
derived: false
formula: null
input_evidence_ids: []
validity_notes: <notes>
comparability_group: <group-id>
change_event_id: <BL-id-or-null>
transfer_class: <T0|T1|T2|T3|T4>
decay_trigger: <trigger>
decision_record_ids: []
notes: <free text>
```

## Missingness semantics
- OBSERVED: genuinely observed under the stated definition.
- UNKNOWN: relevant but unavailable; no zero is implied.
- SUPPRESSED: source collects/reports the metric but privacy or threshold rules prevent observation.
- NOT_INSTRUMENTED: no defensible collection mechanism exists yet.
- NOT_APPLICABLE: metric does not apply.
- INVALID: an observation exists but must not support a decision because collection, definition, or quality failed.

Only OBSERVED should carry a decision-grade numeric value by default. Estimates belong to Evidence Class F with formula and input IDs.

## Metric-definition registry

```yaml
definition_id: MD-<system>-<metric>-<version>
source_system: <system>
metric_name: <native name>
effective_from: YYYY-MM-DD
effective_to: null
definition: <native semantic definition>
authoritative_reference: <source reference>
notes: <thresholds and limitations>
```

Historical observations retain the definition version applicable when captured. Do not retroactively relabel old series to the newest definition.

## Baseline-change ledger

```yaml
change_event_id: BL-YYYYMMDD-0001
product: <product>
date: YYYY-MM-DD
type: <STORE_ASSET|APP_VERSION|ONBOARDING|EVENT_DEFINITION|PLATFORM_METRIC|CAMPAIGN_NAMING|MARKET|CHANNEL_MIX|AD_IMPLEMENTATION|CONSENT_PRIVACY|COMMUNITY_PERMISSION|OTHER>
description: <change>
affected_metrics: []
pre_change_evidence_ids: []
post_change_baseline_required: <true|false>
comparability_effect: <NONE|TAG_ONLY|SEGMENT|BREAK_SERIES|INVALIDATE>
owner: <Marketing|Product|Engineering|Web|Design>
```

## Campaign/source registry rules
Preserve native attribution semantics rather than forcing one universal scheme. Apple campaign identifiers remain Apple-native identifiers. Google Play and owned-web source dimensions remain native to those systems. Record the exact campaign/source identifier with its observation context. Do not infer an app download from an owned-channel click unless a defensible attribution mechanism connects them.

For company-owned naming where a platform allows free naming, use stable semantic fields: product, origin, surface type, objective, period, and asset variant only when a variant distinction is decision-relevant. Do not encode unobserved claims such as high-intent or converted into identifiers.

## Sparse-niche safeguards
1. Avoid excessive campaign variants that fragment already-small cohorts.
2. Prefer one identifier per decision-relevant question rather than per individual post when post-level attribution has little VOI.
3. If a platform withholds small-cohort metrics, record SUPPRESSED or UNKNOWN rather than zero.
4. Do not pool iOS/Android, US/KR, or materially different professional segments merely to obtain a larger number.
5. Qualitative evidence may still be useful, but its evidence class and causal limits remain explicit.

## MintTap initialization
Create only decision-relevant baseline cells: native iOS/Android Store discovery and engagement; acquisition; validated activation event; natural retention cadence; Search Console problem clusters; YieldMax community permission; ad eligibility/impressions/revenue plus UX guardrails; material listing/app/ad changes. Unknown values remain UNKNOWN.

## LogMate initialization
Before launch, do not fabricate Store baselines. Initialize product, market, platform, target-pilot context, proposition evidence, pilot research, professional-community permissions, telemetry readiness, and ad-workflow guardrails. Native Store observations begin only when a real listing produces data.

## Decision handoff
Decision Records cite evidence IDs rather than copying untraceable dashboard values. When new evidence changes a decision, preserve the old record and link the new evidence/change event. The audit chain is observation -> interpretation -> action -> outcome.

## Validation notes
Apple App Store Connect campaign-link documentation was rechecked on 2026-09-16: campaign links use campaign and provider tokens; campaign reporting can cover impressions, product-page views, downloads, usage, sales, and subscriptions; dashboard visibility is thresholded; first-time-download attribution uses a 24-hour window after campaign-link/token use; detailed reports apply privacy protections.

Google Play Console documentation was rechecked on 2026-09-16: 2026 Store Listing Performance reporting changed toward click/intent-based measurement. Definition versions must therefore be preserved rather than splicing historical acquisition-rate and newer click/CTR series.

## Next operational step
Instantiate product-specific baseline checklists without fabricated values. Populate only from actual first-party/native evidence, then connect the first trustworthy observations to the highest-VOI Decision Queue items rather than building a comprehensive dashboard first.
