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

Diagnose the limiting factor in that order rather than reflexively adding promotion.

## Locked operating context

Default to little/no direct cash spend. Store, owned/editorial, and permission-respecting community surfaces are core growth assets; social is selective/evidence-gated. MintTap and LogMate serve narrow specialist audiences. Advertising is the intended monetization path unless owner policy changes, but intrusive/deceptive/access-limiting ads are unacceptable. Optimize sustainable ad revenue subject to usability, trust, retention, accessibility, performance, and policy. Zero-cash never means zero labor/opportunity cost.

## Application Readiness state

Stage 2 Gate: **PASS**.

Application Readiness V1: **COMPLETE / FROZEN**.

Minimum material-asset handoff tuple:

`source evidence/claim IDs → asset/change ID → surface + permission/eligibility state → native measurement ID/definition → linked Decision Record`

Unavailable elements remain `UNKNOWN/NOT_INSTRUMENTED`. Attribution is not reconstructed after the fact.

## Canonical MintTap release state

**MintTap 1.0.29 is RELEASED.**

This is current first-party operational information supplied by the product owner and supersedes prior public-crawler-based uncertainty about whether 1.0.29 had entered production/release.

Repository branch `1.0.29`, previously audited at head `736bbc99a41c14130d82aeaa17ac81f0fc835a65`, is the current release-version implementation reference for marketing/measurement analysis unless newer first-party release information supersedes it.

Platform-specific exact build numbers, phased-rollout percentages, territory availability and exact binary↔commit provenance remain separate facts when a decision specifically requires them.

Do not downgrade 1.0.29 release state because a public Store/search snapshot lags.

## Post-freeze authoritative / live-readiness deltas

### 029 — iOS/iPadOS 27 Store discovery surfaces
`research/029_ios27_app_store_discovery_surface_change.md`

Store creative now has distinct discovery/search recognition, product-page persuasion and routed-message-continuity jobs. PPO remains the randomized default-product-page experiment surface; CPP is routed/localized and observational unless another valid causal design exists.

### 030 — Product instrumentation repository audit
`research/030_product_instrumentation_readiness_audit.md`

Default-branch inspection initially did not observe analytics/ad SDKs. This was explicitly recorded as **NOT OBSERVED IN CURRENT REPOSITORY**, not production absence. 032 later established that MintTap's default branch was not representative of the versioned release implementation.

### 031 — Product first-value semantics readiness
`research/031_product_first_value_semantics_readiness.md`

LogMate candidate first value is durable commit of a valid personal FlightRecord to the canonical local ledger with normal-path retrieval/view. State remains **SEMANTIC CANDIDATE DEFINED / INSTRUMENTATION NOT READY**.

### 032 — MintTap release-branch source recovery
`research/032_minttap_release_branch_source_recovery.md`

Branch `1.0.29` contains the full MintTap implementation, declares `1.0.29+29`, Firebase Analytics and Google Mobile Ads, emits `app_start`, initializes Mobile Ads, contains ad privacy/config modules, first-transaction tutorial and normal-flow Home inline ad.

### 033 — MintTap release evidence and ad observability
`research/033_minttap_release_evidence_and_ad_observability.md`

Exact-ref audit on `1.0.29` verified implementation details. `UserActivityService.lastActiveAt` is a coarse authenticated-return/recency signal only; it is not activation, Analytics sessions or exact retention. Inspected Home ad code loaded consent-gated banners but did not contain verified app-side impression/paid-value handlers.

### 034 — MintTap activation and Home ad-refresh boundary
`research/034_minttap_activation_and_ad_refresh_boundary.md`

MintTap first value is **CODE-VERIFIED EVENT BOUNDARY / NOT YET INSTRUMENTED**. Candidate `first_portfolio_value_ready_v1` belongs at the successful normal authenticated Home calculated-state boundary when `summary.positions.isNotEmpty`, not on save-button tap or raw transaction persistence.

Current release-version Home ad mechanism:

`detail return → _homeAdRefreshToken increment → ValueKey change → new HomeInlineAdSlot state → consent gate → BannerAd.load()`

This proves a fresh request opportunity, not an impression or paid event.

### 035 — Served-version identity and monetization telemetry contract
`research/035_minttap_served_version_and_monetization_telemetry_contract.md`

This research captured the public Store evidence available at that time. Its former conclusion that 1.0.29 production availability was unresolved is now **SUPERSEDED BY 037**.

The telemetry conclusions remain active:

- MintTap 1.0.29 pins `google_mobile_ads` 6.0.0.
- Current official Flutter banner APIs support SDK-confirmed impression callbacks.
- Firebase states that linked AdMob apps can automatically emit Analytics `ad_impression` with revenue information.
- Prefer a single canonical impression/revenue path; do not blindly duplicate automatic events with custom revenue-bearing events.
- CTR is a policy/UX guardrail, not the monetization objective.

### 036 — MintTap 1.0.28 → 1.0.29 transfer audit
`research/036_minttap_1_0_28_to_1_0_29_transfer_audit.md`

The code-equivalence findings remain useful as historical compatibility evidence: Home and Home inline-ad core files were unchanged between the two refs, while `UserActivityService` was a 1.0.29 addition.

Because 1.0.29 is now confirmed released, 036 is no longer the primary bridge for current live interpretation.

### 037 — MintTap 1.0.29 release-state correction
`research/037_minttap_1_0_29_release_state_correction.md`

First-party operational correction establishes **MintTap 1.0.29 = RELEASED** and supersedes the older production-availability uncertainty.

Current live-readiness chain:

`released 1.0.29 identity → verify live analytics/ad telemetry → instrument semantic first value → establish activation/return/ad-revenue baselines → evaluate frequency/channel decisions`

The release-identity question is no longer the primary blocker.

## Current MintTap measurement state

- Release version: **1.0.29 RELEASED**.
- Release implementation reference: branch `1.0.29`, audited head `736bbc99a41c14130d82aeaa17ac81f0fc835a65`, unless later release commits are identified.
- Firebase Analytics initialization / `app_start`: code-verified.
- Mobile Ads initialization: code-verified.
- `first_portfolio_value_ready_v1`: semantic/code boundary verified, **not yet verified as instrumented**.
- Home detail-return ad recreation: code-verified release-version mechanism.
- App-side Home banner impression/paid callback: not observed in audited file.
- AdMob↔Firebase automatic `ad_impression`: runtime/console linkage state **UNKNOWN**.
- `lastActiveAt`: part of 1.0.29 implementation; usable only as a separately defined coarse authenticated-return/recency signal.
- Actual live impression frequency, paid value, activation rate, natural return cadence and retention/harm effects: **NOT YET BASELINED**.

## Company ordering rule

`served/released deployment identity → semantic product value → SDK/network-confirmed impression → canonical revenue event → retention/harm guardrails → frequency decision`

## Capability state

**FOUNDATION COMPLETE:** value/trust, niche distribution, cash-light acquisition, Store, measurement, demand, positioning, activation/retention, SEO, selective social, community, ad monetization, launch.

**STAGE 2 COMPLETE:** sparse inference; VOI/reversibility; monitoring/stopping; transfer/decay; multi-app labor allocation; decision routing; integration gate.

**APPLICATION READINESS V1 COMPLETE/FROZEN:** evidence provenance; native metric preservation; missingness semantics; baseline-change ledger; Live Evidence Registry; product baseline checklists; niche community/content/social/ad operating systems; cross-surface handoffs.

## Next learning / operating sequence

1. **Do not extend general theory by default.** Application Readiness V1 remains frozen.
2. Treat MintTap 1.0.29 as the current released version.
3. Verify whether the released binary corresponds to the previously audited 1.0.29 head or contains later release commits only when exact implementation provenance affects a decision.
4. Verify MintTap AdMob↔Firebase/Analytics linkage from console/export/runtime evidence and inspect actual automatic `ad_impression` parameters before adding any custom impression/revenue event.
5. Preserve `first_portfolio_value_ready_v1` as the activation specification; determine whether it is currently implemented. If not, hand it to engineering for a future release with no investment-content parameters.
6. Use `lastActiveAt` only as a coarse authenticated-return/recency signal and keep its semantics separate from Analytics sessions/retention.
7. Keep current detail-return ad recreation as the baseline until confirmed impression/revenue evidence and retention/harm guardrails exist.
8. Establish first live baselines for activation, return cadence, Home ad impressions, paid value and workflow harm once telemetry is aligned.
9. For LogMate, inspect canonical local-ledger/persistence implementation when it exists and validate the durable FlightRecord first-value candidate against code.
10. Continue authoritative-source revalidation only when volatile Store/platform/ad/community changes affect an operating decision.

## Major unresolved live questions

### MintTap

- exact released binary/build ↔ audited Git commit identity if needed;
- AdMob↔Firebase/Analytics linkage state;
- live automatic `ad_impression` parameter/revenue coverage;
- current implementation state of `first_portfolio_value_ready_v1`;
- Store/search/source baseline and natural return/retention cadence;
- actual Home inline-ad impression frequency and paid value under detail-return recreation;
- retention/harm effects, community permissions, content freshness, Search Console baseline and Store experiment resolution.

### LogMate

Production local-ledger/persistence implementation; validation of FlightRecord first value; launch geography/segment/regulatory boundaries; demand/competitor/import priorities; analytics implementation; workflow/retention cadence; ad model; pilot observations; professional-community permissions; regulatory-content authority mapping and launch traffic ceiling.

### Company-wide

Measured labor capacity; maintenance demand; privacy-compliant event/ingestion path; long-run ad revenue per retained user; empirical stop thresholds; populated claim/permission ledgers; social qualified-response baselines; reusable launch records; proof that reusable assets reduce later labor.

## Progress interpretation

Do not report progress by file count. The objective is a trustworthy, reusable operating system for real niche-app growth. Missing live evidence remains explicitly unknown. Further learning follows real evidence, authoritative platform deltas and concrete execution failures rather than accumulating adjacent theory.
