# Research 282 — Store-to-Core-Value Minimum Instrumentation Contract

Validated: 2026-09-28

## Decision
Sparse-niche acquisition measurement must connect Store evidence to specialist value without pretending that platform attribution proves incrementality. Instrument only distinctions that change a marketing or product decision.

## GI0–GI8
`GI0 intent hypothesis → GI1 external/Store source identity → GI2 Store acquisition evidence → GI3 destination continuity → GI4 first specialist value → GI5 repeated specialist value → GI6 attribution/censoring state → GI7 composition/confounder audit → GI8 KEEP/CHANGE/HOLD`.

## Minimum evidence model
Keep three layers separate:

1. **Platform acquisition evidence.** Apple App Store Connect Sources distinguishes App Store search, browse/referrers and other source types. Campaign links can connect a campaign token to impressions, product-page views, downloads, usage, sales and subscriptions.
2. **In-app product evidence.** Record a small number of business-semantic events: intended destination reached, first specialist value completed, and repeated specialist value completed. Do not substitute app_open/session for specialist value.
3. **Join/inference state.** A platform-attributed download and an in-app value event may support a cohort-level decision, but attribution is not counterfactual incrementality. Unknown or privacy-censored observations remain UNKNOWN/CENSORED rather than zero.

## Apple sparse-data rule
Apple campaign metrics appear only after the metric reaches a minimum threshold of 5 in the selected range; campaign visibility also requires first-time downloads from at least five individual users, and detailed reports may withhold/combine very small groups. A first-time download is credited when it occurs within 24 hours of campaign-link/token use; if multiple campaign links are used, the most recent receives credit for subsequent sales. Therefore do not create a token for every Reddit post or social variant in a sparse niche. Segment only when the distinction can change a decision.

Custom Product Pages can be evaluated through product-page views, downloads, conversion and downstream sales/subscription metrics, but page data appears after at least five first-time downloads. Route materially different audience intents; do not create ticker/vendor fragmentation merely to manufacture measurement cells.

## In-app minimum schema
Prefer semantic events over channel-specific event names:
- `specialist_destination_reached`
- `first_specialist_value_completed`
- `repeated_specialist_value_completed`

Attach only low-cardinality decision fields that are truly needed, such as `intent_family`, `destination_family`, `app_version`, and coarse acquisition cohort when legitimately available. Do not persist raw platform/privacy identifiers merely to force deterministic joins.

Google Analytics for Firebase supports recommended/custom events and up to 500 distinct event types, but capacity is not a reason to create hundreds of events. The minimum viable schema should stay substantially smaller and expand only when a new field/event separates an actionable decision.

## Attribution-state vocabulary
Use:
- OBSERVED_SOURCE
- PLATFORM_ATTRIBUTED
- ASSISTED_POSSIBLE
- CENSORED
- INCREMENTAL_SUPPORTED
- UNKNOWN

Never relabel PLATFORM_ATTRIBUTED as INCREMENTAL_SUPPORTED without a credible counterfactual design.

## Operational rules
- Preserve message continuity: community/social promise → Store surface → in-app destination → specialist value.
- Diagnose the first broken transition, not the loudest top-line metric.
- If Store conversion improves but first specialist value falls, do not call the treatment a growth win.
- If first value improves but repeated value does not, investigate promise/product fit before scaling distribution.
- For sparse cohorts, widen time windows or aggregate only across semantically equivalent intents; never merge incompatible audiences solely to reach a threshold.
- Do not add attribution SDKs or identifiers unless the decision value exceeds privacy, maintenance and implementation cost.

## Portfolio application
**MintTap:** instrument investor jobs such as portfolio/income interpretation and other stable specialist-value families rather than ticker-by-ticker acquisition events. Keep tax/correction/accounting workflows protected from monetization experiments.

**LogMate:** instrument pilot jobs such as import/migration success, previous-total continuity, duplicate reconciliation, flight-entry completion and export/record integrity. Daily return is not a universal retention definition; repeated value should follow the next natural pilot workflow opportunity.

## Evidence
- Apple, App Store Connect Analytics — Acquisition/Sources and campaign links, checked 2026-09-28.
- Apple, App Store Connect Analytics — Custom Product Pages and metric definitions, checked 2026-09-28.
- Google, Google Analytics for Firebase / Flutter setup, checked 2026-09-28.

## Next target
Build the **Sparse-Niche Store Experiment Stopping & Reallocation Contract**: decide when Store-page/intent experiments have enough evidence to continue, stop, aggregate, or redirect operator time without forcing winners from censored or low-volume data.
