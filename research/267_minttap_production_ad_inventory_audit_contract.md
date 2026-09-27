# Research 267 — MintTap Production Ad Inventory Audit Contract

Date: 2026-09-27

## Decision
Research 266 defined telemetry. Research 267 defines the production inventory audit that must precede any monetization expansion. A screen transition, foreground event, or ad-unit existence is not inventory by itself. Inventory exists only when a durable UI surface reaches a product-approved, non-protected opportunity state.

Canonical chain:
ad unit alias → surface_id → specialist job → protected state → boundary/wait state → eligible/suppressed opportunity → request → load/failure → impression → paid event → product consequence.

## AN0–AN8 production inventory gate
AN0 Enumerate code truth: list every production ad-unit alias and every call site that can request/show it. Do not infer inventory from AdMob console units alone.
AN1 Stable surface map: map each call site to a durable surface_id independent of ad-unit rotation.
AN2 Specialist-job map: state what the user is doing immediately before, during and after the possible exposure.
AN3 Protection gate: mark core portfolio editing, transaction/tax adjustment, distribution/ROC interpretation, corporate-action reconciliation and calculation confirmation as protected unless product governance explicitly changes that classification.
AN4 Boundary gate: classify the opportunity as genuine wait state, completed non-critical task boundary, persistent passive layout, or invalid interruption. A foreground event alone is not a boundary.
AN5 Suppression truth: enumerate why an otherwise possible exposure is suppressed: first-use, protected workflow, main-content-ready, cooldown/cap, consent/request ineligibility, no genuine boundary, stale app-open ad, ad unavailable, or product experiment exclusion.
AN6 Delivery diagnostics: for eligible requests retain load result, latency bucket and ResponseInfo/adapter diagnostics needed to distinguish product suppression from supply/mediation failure.
AN7 Revenue integrity: join impression to paid event, value micros, currency and precision class. UNKNOWN/ESTIMATED/PUBLISHER_PROVIDED/PRECISE are analytically distinct.
AN8 Product consequence: compare workflow completion, abandonment, next-core-value and repeated-core-value before considering density/format/floor/mediation expansion.

## Required inventory table
One row per production surface × format combination:
- surface_id
- route/screen and trigger
- ad_unit_alias (never expose production IDs in broad analytics exports)
- format
- specialist_job
- protected_state
- boundary_type
- eligibility_rule
- suppression_reasons
- request_owner/call_site
- preload rule
- expiration rule where applicable
- product cooldown/cap
- platform/AdMob cap if configured
- consent/request prerequisite
- ResponseInfo capture status
- paid-event capture status
- downstream product-outcome join status
- current decision: PROTECTED / ELIGIBLE / DIAGNOSE / EXPERIMENT_ONLY / RETIRE

## App-open audit rule
Do not count launches or foregrounds as inventory. Count only a product-approved wait state after exclusions. On first use, suppress. On cold start, if main content becomes available before the ad, suppress the late exposure. Treat an app-open ad older than four hours as stale and ineligible.

## Delivery diagnostic rule
Google ResponseInfo provides loaded-ad and adapter-response information for debugging mediation/bidding; Android also exposes ResponseInfo on failed loads. Capture diagnostic classes and latency buckets, not an indiscriminate dump of credentials or user data.

## Revenue rule
AdValue can be UNKNOWN, ESTIMATED, PUBLISHER_PROVIDED or PRECISE. Revenue analysis must preserve precision_type. Do not compare cohorts as if every impression-level value were equally precise. Attach the paid callback before display and forward paid events promptly.

## Audit outputs
The audit must produce:
1. production ad-unit/call-site census;
2. surface and specialist-job map;
3. protected inventory exclusions;
4. eligible-opportunity definitions and suppression reasons;
5. delivery instrumentation gaps;
6. revenue instrumentation gaps;
7. product-outcome join gaps;
8. a decision per surface.

No new ad placement is authorized by this audit. Its purpose is to establish denominator truth.

## Decision rules
- Ad unit exists but no valid surface/boundary: RETIRE or leave unused.
- Surface is protected: PROTECTED; frequency reduction does not make it eligible.
- Eligible opportunity but request ratio is low: diagnose product/request logic.
- Requests healthy but loads low: diagnose supply, consent, mediation, configuration and adapter evidence.
- Loads healthy but impressions low: diagnose presentation/show failure and stale/late suppression.
- Impressions healthy but paid yield changes: inspect precision mix, source mix and reconciliation before pricing conclusions.
- Revenue improves while workflow/repeated value degrades: reject expansion.
- Sparse evidence cannot distinguish benefit from harm: INCONCLUSIVE; retain lower-pressure baseline.

## Current authoritative platform evidence
Google's current App Open guidance says not to show on the first app start, to show cold-start ads only from a loading screen while users wait, and not to show a late ad after main content is reached. App-open ads expire after four hours.

Google's impression-level revenue API provides value micros, currency and precision type. Precision classes are UNKNOWN, ESTIMATED, PUBLISHER_PROVIDED and PRECISE.

Google ResponseInfo exposes loaded adapter and adapter response metadata for mediation/bidding diagnostics; Android exposes ResponseInfo for failed loads as well.

Sources:
- https://developers.google.com/admob/android/next-gen/app-open
- https://developers.google.com/admob/flutter/app-open
- https://developers.google.com/admob/android/next-gen/impression-level-ad-revenue
- https://developers.google.com/admob/flutter/response-info
- https://developers.google.com/admob/android/response-info

## Next
Apply this contract to MintTap code/production configuration when the relevant app repository and AdMob/analytics evidence are available. Until that mapping is complete, do not infer that revenue can be increased safely by adding inventory. After the inventory audit, move to source-mix/revenue reconciliation only where the ledger identifies a delivery or yield problem.
