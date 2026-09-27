# Research 281 — Monetization Floor & Mediation Change-Control Contract

Validated: 2026-09-28

## Purpose
Optimize ad yield without turning additional placements or interruptions into the default response to weak revenue. This contract governs eCPM-floor, bidding, waterfall and ad-source changes for sparse niche utilities.

## Authoritative findings
1. AdMob Mediation can serve from multiple sources to improve fill and monetization. Google requires Mobile Ads SDK initialization to complete before loading ads so all mediated networks can participate on the first request.
2. AdMob Network eCPM floors are rejection thresholds: if an impression does not meet the floor, AdMob Network does not fill that request and mediation continues. A higher floor can therefore change fill/source mix; it is not a free CPM uplift.
3. Waterfall ordering depends on CPM/eCPM. Ad source optimization can automatically update/order supported waterfall sources; Google documents country-specific optimization for some sources and manual eCPM for unsupported sources.
4. Optimization has a learning delay. Partner setup guides state that optimization can take a few days to gather enough data; during PENDING state a manual eCPM is used.
5. Bidding and waterfall are different mechanisms and may coexist in a mediation group. A bidding winner can be placed into the waterfall according to its eCPM value.
6. Mediation adds operational dependencies: adapter initialization, mappings, privacy-partner configuration and source-specific SDK behavior. Ad Inspector exposes per-request bidding/waterfall outcomes, errors and latency.
7. For mediated banner inventory, third-party refresh should be disabled when AdMob refresh is active to prevent double refresh.

## GE0–GE8 change-control gate
GE0 Protected workflow: no floor/mediation experiment creates a new interruption or enters a protected specialist workflow.
GE1 Baseline integrity: preserve app/ad-unit/format/geo, eligible opportunities, requests, loads, impressions, paid events, value/precision, latency, source mix, consent state and first/repeated specialist value.
GE2 Loss localization: identify whether the binding loss is opportunity, request eligibility, initialization/mapping, no-fill, latency, impression conversion, paid-value/reconciliation or traffic quality before changing configuration.
GE3 Mechanism choice: prefer supply-side configuration only when evidence identifies a supply/yield problem. Do not use a floor or new network to solve product traffic scarcity.
GE4 Single material change: change one material variable family at a time — floor, source addition/removal, bidding enablement, waterfall eCPM/order or optimization state.
GE5 Learning-state protection: mark new/optimized sources PENDING/LEARNING; do not compare them as mature demand until the documented/observed learning state stabilizes.
GE6 Composition audit: evaluate revenue together with fill, source/geo/consent mix, latency, precision and first/repeated value. eCPM alone cannot select a winner.
GE7 Sparse-evidence asymmetry: require evidence before making complexity permanent. Clear technical, privacy, policy, latency or specialist-value harm can trigger rollback earlier than revenue significance.
GE8 Decision: KEEP / ROLLBACK / HOLD / RETEST. Never EXPAND solely because reported eCPM rose.

## Operating rules
- Higher floor does not imply higher total revenue.
- Higher eCPM is not better monetization if impressions/fill fall enough to reduce reconciled value.
- More networks do not automatically mean more revenue; every source adds adapter, privacy, mapping, latency and maintenance surface.
- Optimization pending is not optimized.
- No bid/no ad returned is not proven low demand; setup, signal collection or source decisioning may be responsible.
- Low traffic is not permission for more ad pressure.
- Keep protected-workflow and interruption-budget rules from Research 278–280 unchanged.

## Minimum experiment ledger
app_version; ad_unit; format; geo; treatment_start/end; floor; bidding_sources; waterfall_sources; optimization_state; adapter_versions/status; consent_state; eligible_opportunities; requests; loads; impressions; fill/no-fill; source_mix; response_latency; paid_events; value; currency; precision; reconciled_revenue; first_core_value; repeated_core_value; post_ad_abandonment; policy_or_technical_events; decision; confidence_note.

## Portfolio application
MintTap: first diagnose existing eligible inventory and supply/reconciliation. Do not add advertising to portfolio interpretation, Tax Adjustment, correction or transaction/reinvestment accounting to compensate for low fill or revenue. If demand-side changes are tested, keep UI exposure constant.

LogMate: if monetization is introduced, establish a non-critical eligible inventory baseline first. Import/migration, Previous Total, duplicate reconciliation, flight-entry completion, record integrity and export remain outside floor/mediation experiments.

## Sources
- Google for Developers, Set up AdMob Mediation (updated 2026-09-24): https://developers.google.com/admob/android/mediation
- Google for Developers, Choose ad sources: https://developers.google.com/admob/android/choose-networks
- Google for Developers, Ad Inspector: https://developers.google.com/admob/cpp/ad-inspector
- Google AdMob Help, Mediation FAQ / eCPM floor behavior: https://support.google.com/admob/answer/9686161
- Google for Developers partner mediation setup guides (current 2026-09): examples document bidding, waterfall optimization and PENDING learning behavior.

## Next learning target
Cross-network SDK/privacy/latency complexity budget: determine when a marginal ad source is not worth integrating even when it adds nominal demand, using maintenance cost, binary size/startup impact, consent/vendor surface, adapter health and incremental reconciled revenue.
