# Research 416 — Mediation Health Before Inventory Expansion

Validated: 2026-10-04

## Decision
For ad-funded niche apps, add demand competition and repair mediation health before adding ad surfaces or frequency. Mediation is an auction/integration layer, not permission to create more inventory.

## Authoritative findings
Google states AdMob Mediation can send requests to multiple ad sources to improve fill and monetization. SDK initialization must complete before loading ads so mediated networks can participate. For mediated partners, privacy/consent configuration must include the relevant partners; omission can prevent partners from serving.

Ad Inspector exposes per-request bidding and waterfall outcomes, including winning source, sources with issues, no-ad/no-bid outcomes, errors and latency. This makes source health diagnosable before pressure changes.

Ad-source optimization can automatically update waterfall eCPMs; Google documents that it can take several days to gather enough data, with a PENDING state in the interim. Country-specific automatic eCPM collection is the strongest waterfall optimization mode where supported.

The market is also moving from legacy waterfall toward bidding for some partners: Google's current Unity Ads next-gen guide states waterfall support ended 2026-01-31 and new/edit waterfall placements are no longer supported. Therefore a mediation audit must record integration mode and deprecation status per source rather than assuming a permanent waterfall configuration.

## JY0–JY9 — Mediation Health Contract
JY0 protected-workflow and eligible-opportunity baseline
JY1 consent/privacy partner eligibility
JY2 SDK + adapter initialization completeness
JY3 ad-unit / mediation-group / geo mapping integrity
JY4 bidding-vs-waterfall mode and deprecation check
JY5 per-source request, no-bid/no-ad, error and latency diagnosis
JY6 source-level impression revenue / precision reconciliation
JY7 fill and revenue-per-eligible-opportunity comparison
JY8 repeat-specialist-value guardrail
JY9 KEEP / REPAIR-INTEGRATION / REPAIR-CONSENT / ADD-DEMAND / MIGRATE-BIDDING / REMOVE-SOURCE / HOLD-SPARSE

## Operational rule
Do not add a network merely to increase network count. Add or retain a source only when it is technically healthy, privacy-eligible, supported for the required format/geo, and creates measurable incremental auction competition or resilience without damaging latency or specialist workflow.

Do not interpret NO BID as automatically broken: it can reflect source decisioning. Separate configuration/adapter/signal failures from legitimate auction non-participation using Ad Inspector and partner diagnostics.

## MintTap
Production audit order:
1. preserve protected financial workflows;
2. inventory current ad units, formats and eligible workflow boundaries;
3. verify consent/ad-partner configuration;
4. verify SDK/adapters and initialization;
5. inspect mediation groups, geo mappings and bidding/waterfall mode;
6. diagnose source errors, latency, no-bid/no-ad;
7. reconcile source-level impression revenue;
8. only then test adding/removing demand sources or changing auction controls;
9. require improvement in revenue per eligible opportunity without harming repeated specialist value.

This is higher priority than increasing placement count or frequency.

## LogMate
No implication that LogMate should add ads. Existing product decision to keep Home ad-free remains intact. If ads are later introduced, mediation work starts only after professional workflow integrity and eligible secondary-surface boundaries are established.

## Reusable niche-app rule
Monetization sequence:
workflow eligibility → consent → instrumentation → mediation health → auction competition → yield controls → only then pressure consideration.

The scarce resource is trustworthy specialist attention, not ad requests.

## Sources
- Google for Developers, Set up AdMob Mediation: https://developers.google.com/admob/android/mediation
- Google for Developers, Ad Inspector / troubleshoot ad units: https://developers.google.com/admob/android/next-gen/ad-inspector/troubleshoot-ad-units
- Google for Developers, Choose ad sources: https://developers.google.com/admob/android/choose-networks
- Google for Developers, Unity Ads next-gen mediation guide: https://developers.google.com/admob/android/next-gen/mediation/unity
