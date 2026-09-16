# Marketing Manager Status

Last updated: 2026-09-16

## Current phase

**Stage 1 — FOUNDATION COMPLETE. Stage 2 — Sparse-Niche Decision Science COMPLETE. Application Readiness V1 — COMPLETE / FROZEN FOR LIVE VALIDATION.**

General theory remains frozen by default. New work follows live product evidence, authoritative platform changes, or concrete framework failures.

## Canonical applied system

- `playbook/MARKETING_DECISION_QUEUE.md`
- `playbook/DECISION_RECORD_TEMPLATE.md`
- `playbook/EVIDENCE_PROVENANCE_BASELINE_PROTOCOL.md`
- `playbook/LIVE_EVIDENCE_REGISTRY_TEMPLATE.md`
- `playbook/PRODUCT_BASELINE_CHECKLISTS.md`
- `curriculum/APPLICATION_READINESS_INTEGRATION_GATE.md`

Canonical growth chain:

`relevant demand → credible promise → qualified acquisition → meaningful activation → repeated core value → sustainable ad-bearing use`

## Locked operating context

Default to little/no direct cash spend. Store, owned/editorial, and permission-respecting community surfaces are core growth assets; social is selective/evidence-gated. MintTap and LogMate serve narrow specialist audiences. Advertising is the intended monetization path unless owner policy changes, but intrusive/deceptive/access-limiting ads are unacceptable. Optimize sustainable ad revenue subject to usability, trust, retention, accessibility, performance, and policy. Zero-cash never means zero labor/opportunity cost.

## Application Readiness state

Stage 2 Gate: **PASS**. Application Readiness V1: **COMPLETE / FROZEN**.

Minimum material-asset handoff tuple:

`source evidence/claim IDs → asset/change ID → surface + permission/eligibility state → native measurement ID/definition → linked Decision Record`

Unavailable elements remain `UNKNOWN/NOT_INSTRUMENTED`. Attribution is not reconstructed after the fact.

## Canonical MintTap release state

**MintTap 1.0.29 is RELEASED.**

This is current first-party operational information supplied by the product owner and supersedes prior public-crawler-based uncertainty about whether 1.0.29 had entered production/release.

Repository branch `1.0.29`, previously audited at head `736bbc99a41c14130d82aeaa17ac81f0fc835a65`, is the current release-version implementation reference for marketing/measurement analysis unless newer first-party release information supersedes it.

Platform-specific exact build numbers, phased-rollout percentages, territory availability and exact binary↔commit provenance remain separate facts when a decision specifically requires them.

## Post-freeze authoritative / live-readiness deltas

### 029 — iOS/iPadOS 27 Store discovery surfaces
`research/029_ios27_app_store_discovery_surface_change.md`

Store creative now has distinct discovery/search recognition, product-page persuasion and routed-message-continuity jobs. PPO remains the randomized default-product-page experiment surface; CPP is routed/localized and observational unless another valid causal design exists.

### 030 — Product instrumentation repository audit
`research/030_product_instrumentation_readiness_audit.md`

Default-branch inspection initially did not observe analytics/ad SDKs. 032 later established that MintTap's default branch was not representative of the versioned release implementation.

### 031 — Product first-value semantics readiness
`research/031_product_first_value_semantics_readiness.md`

LogMate candidate first value is durable commit of a valid personal FlightRecord to the canonical local ledger with normal-path retrieval/view. State remains **SEMANTIC CANDIDATE DEFINED / INSTRUMENTATION NOT READY**.

### 032 — MintTap release-branch source recovery
`research/032_minttap_release_branch_source_recovery.md`

Branch `1.0.29` contains the full MintTap implementation, declares `1.0.29+29`, Firebase Analytics and Google Mobile Ads, emits `app_start`, initializes Mobile Ads, contains ad privacy/config modules, first-transaction tutorial and normal-flow Home inline ad.

### 033 — MintTap release evidence and ad observability
`research/033_minttap_release_evidence_and_ad_observability.md`

`UserActivityService.lastActiveAt` is a coarse authenticated-return/recency signal only. Inspected Home ad code loaded consent-gated banners but did not contain verified app-side impression/paid-value handlers.

### 034 — MintTap activation and Home ad-refresh boundary
`research/034_minttap_activation_and_ad_refresh_boundary.md`

MintTap first value is **CODE-VERIFIED EVENT BOUNDARY / NOT YET VERIFIED AS INSTRUMENTED**. Candidate `first_portfolio_value_ready_v1` belongs at the successful normal authenticated Home calculated-state boundary when `summary.positions.isNotEmpty`.

Current release-version Home ad mechanism:

`detail return → _homeAdRefreshToken increment → ValueKey change → new HomeInlineAdSlot state → consent gate → BannerAd.load()`

This proves a fresh request opportunity, not an impression or paid event.

### 035 — Served-version identity and monetization telemetry contract
`research/035_minttap_served_version_and_monetization_telemetry_contract.md`

Former 1.0.29 production uncertainty is **SUPERSEDED BY 037**. Telemetry conclusions remain active: prefer SDK/network-confirmed impression/revenue evidence and a single canonical revenue path; do not optimize CTR.

### 036 — MintTap 1.0.28 → 1.0.29 transfer audit
`research/036_minttap_1_0_28_to_1_0_29_transfer_audit.md`

Historical compatibility evidence only. Home and Home inline-ad core files were unchanged between refs, while `UserActivityService` was a 1.0.29 addition.

### 037 — MintTap 1.0.29 release-state correction
`research/037_minttap_1_0_29_release_state_correction.md`

First-party operational correction establishes **MintTap 1.0.29 = RELEASED**.

### 038 — MintTap activation-cohort measurement design
`research/038_minttap_activation_cohort_measurement_design.md`

New measurement distinction:

`acquisition event ≠ first value ≠ useful return ≠ account recency ≠ monetized impression`

Do not use `app_start` as MintTap activation or useful-retention evidence. Preserve `first_portfolio_value_ready_v1` as the one-time first-value specification and, if no equivalent existing event is found, use a separate repeatable `portfolio_value_viewed_v1` candidate for successful non-empty normal Home value exposure. The repeatable event must be deduplicated against UI rebuilds and contain no investment-content parameters.

`lastActiveAt` remains a separate account-linked coarse recency signal. Current Google Analytics cohort exploration is device-based and does not use User-ID, so GA retention cohorts and authenticated-account recency must not be treated as identical populations.

Preferred minimal future funnel:

`first_open/acquisition → first_portfolio_value_ready_v1 → portfolio_value_viewed_v1 → automatic ad_impression/revenue`

with `lastActiveAt` retained independently for account-recency questions.

Repository search did not find the literal activation event on the searchable default surface, but GitHub code search does not establish absence on arbitrary release refs. Exact-ref/runtime verification remains required before engineering a duplicate event.

## Current MintTap measurement state

- Release version: **1.0.29 RELEASED**.
- Firebase Analytics initialization / `app_start`: code-verified.
- Mobile Ads initialization: code-verified.
- `first_portfolio_value_ready_v1`: semantic/code boundary verified, **implementation not yet verified**.
- Repeatable useful-return event: **candidate specified in 038; implementation not verified**.
- Home detail-return ad recreation: code-verified release-version mechanism.
- App-side Home banner impression/paid callback: not observed in audited file.
- AdMob↔Firebase automatic `ad_impression`: runtime/console linkage state **UNKNOWN**.
- `lastActiveAt`: 1.0.29 coarse authenticated-return/recency signal; separate from GA retention.
- Actual live activation, useful-return cadence, Home ad impression frequency, paid value and retention/harm effects: **NOT YET BASELINED**.

## Company ordering rule

`released deployment identity → semantic first value → repeatable useful value → SDK/network-confirmed impression → canonical revenue event → retention/harm guardrails → frequency/channel decision`

Every metric must declare its unit: device/user-instance/account/impression. Do not silently join device-level GA cohorts to account-level Firestore state.

## Capability state

**FOUNDATION COMPLETE. STAGE 2 COMPLETE. APPLICATION READINESS V1 COMPLETE/FROZEN.**

## Next learning / operating sequence

1. **Do not extend general theory by default.**
2. Inspect exact MintTap 1.0.29 code/runtime evidence for existing semantic activation/useful-return events under any names before proposing engineering changes.
3. Verify MintTap AdMob↔Firebase/Analytics linkage and actual automatic `ad_impression` parameters before adding custom impression/revenue telemetry.
4. If absent, hand engineering the minimum two semantic events: one-time `first_portfolio_value_ready_v1` and deduplicated repeatable `portfolio_value_viewed_v1`, with no investment-content parameters.
5. Keep `lastActiveAt` separate as coarse account recency; never label it GA retention.
6. Keep detail-return ad recreation unchanged until confirmed impression/revenue evidence can be compared with useful-return and harm guardrails.
7. Once telemetry aligns in a served build, establish acquisition→activation, activation→useful-return and useful-use→ad-revenue baselines by app version and explicitly declared unit of analysis.
8. Only then open channel and ad-frequency Decision Records.
9. For LogMate, validate the FlightRecord first-value candidate when canonical ledger/persistence implementation exists; preserve the same device-vs-account distinction if cross-device sync is introduced.
10. Revalidate volatile platform rules only when they affect a decision.

## Major unresolved live questions

### MintTap

- whether equivalent semantic activation/useful-return events already exist in exact 1.0.29/runtime under other names;
- AdMob↔Firebase/Analytics linkage state and live automatic `ad_impression` parameter/revenue coverage;
- actual activation rate and time-to-first-value;
- useful portfolio-return cadence by activated cohort;
- device-level GA retention vs account-level recency differences;
- Home inline-ad impressions and paid value per useful-return window;
- retention/harm effects;
- Store/search/source baseline, community permissions, content freshness, Search Console baseline and Store experiment resolution.

### LogMate

Production local-ledger/persistence implementation; validation of FlightRecord first value; launch geography/segment/regulatory boundaries; demand/competitor/import priorities; analytics implementation; workflow/retention cadence; ad model; pilot observations; professional-community permissions; regulatory-content authority mapping and launch traffic ceiling.

### Company-wide

Measured labor capacity; maintenance demand; privacy-compliant event/ingestion path; long-run ad revenue per retained user; empirical stop thresholds; populated claim/permission ledgers; social qualified-response baselines; reusable launch records; proof that reusable assets reduce later labor.

## Progress interpretation

Do not report progress by file count. Missing live evidence remains explicitly unknown. Further learning follows real evidence, authoritative platform deltas and concrete execution failures rather than accumulating adjacent theory.
