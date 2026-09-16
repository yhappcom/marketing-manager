# Marketing Manager Status

Last updated: 2026-09-16

## Current phase

**Stage 1 — FOUNDATION COMPLETE. Stage 2 — Sparse-Niche Decision Science COMPLETE. Application Readiness V1 — COMPLETE / FROZEN FOR LIVE VALIDATION.**

Stage 1 research 001–019 is synthesized in `playbook/MARKETING_PLAYBOOK_V1.md`. Stage 2 research 020–024 is integrated in `curriculum/STAGE2_GATE_REVIEW.md`. Application Readiness is gate-reviewed in `curriculum/APPLICATION_READINESS_INTEGRATION_GATE.md`.

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

Stage 2 Gate: **PASS**. Sparse inference, VOI/reversibility, stopping, evidence transfer/decay and constrained multi-app allocation are operationalized.

Application Readiness V1: **COMPLETE / FROZEN**. Evidence provenance, Live Evidence Registry, product checklists, niche community operations, content evidence lifecycle, ad-revenue quality economics, selective social governance and cross-surface handoffs are complete at V1.

Minimum material-asset handoff tuple:

`source evidence/claim IDs → asset/change ID → surface + permission/eligibility state → native measurement ID/definition → linked Decision Record`

Unavailable elements remain `UNKNOWN/NOT_INSTRUMENTED`. Attribution is not reconstructed after the fact.

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

Reusable rule: first value is the earliest durable, user-recognizable completion of the core job that works on the simplest legitimate path and can be verified without collecting sensitive domain content.

### 032 — MintTap release-branch source recovery
`research/032_minttap_release_branch_source_recovery.md`

Version branches through `1.0.29` were found in `yhappcom/yieldmax_tracker`. Branch `1.0.29` contains the full MintTap implementation, declares `1.0.29+29`, Firebase Analytics and Google Mobile Ads, emits `app_start`, initializes Mobile Ads, contains ad privacy/config modules, first-transaction tutorial and normal-flow Home inline ad.

Audit rule: record `repository → exact ref/tag/branch/commit → declared app version → evidence date`; never equate default branch with current/production product without evidence.

### 033 — MintTap release evidence and ad observability
`research/033_minttap_release_evidence_and_ad_observability.md`

Exact-ref audit on branch `1.0.29`, head `736bbc99a41c14130d82aeaa17ac81f0fc835a65`, verified implementation but did not verify Store availability. `UserActivityService.lastActiveAt` is a coarse authenticated-return signal only. Inspected Home ad code loaded consent-gated banners but did not contain verified impression/paid-value handlers.

Reusable readiness stack:

`deployment identity → semantic product event → monetization event → joinable cohort evidence`

### 034 — MintTap activation and Home ad-refresh boundary
`research/034_minttap_activation_and_ad_refresh_boundary.md`

MintTap first value is **CODE-VERIFIED EVENT BOUNDARY / NOT YET INSTRUMENTED**. Candidate `first_portfolio_value_ready_v1` belongs at the successful normal authenticated Home calculated-state boundary when `summary.positions.isNotEmpty`, not on save-button tap or raw transaction persistence.

Detail-return ad recreation is also code-verified on 1.0.29:

`detail return → _homeAdRefreshToken increment → ValueKey change → new HomeInlineAdSlot state → consent gate → BannerAd.load()`

This proves a fresh request opportunity, not an impression or paid event.

Reusable state separations:

`core input persisted → product output calculated → product output exposed → first-value event recorded`

`placement rendered → ad requested → impression confirmed → paid value observed`

### 035 — MintTap served-version identity and monetization telemetry contract
`research/035_minttap_served_version_and_monetization_telemetry_contract.md`

New live-readiness conclusions:

- Public App Store evidence verifies **MintTap 1.0.28** is currently served in multiple queried storefronts. The exact iOS build number is not public evidence here. Repository `1.0.29+29` remains a newer implementation ref, not a proven served iOS cohort.
- A stale Korean crawler snapshot still showed 1.0.27; Store/search snapshots are evidence with observation dates, not globally synchronized deployment records.
- Exact public Google Play package/version evidence was not resolved in this pass; Android served availability/version remains **UNKNOWN**, not absent.
- MintTap `1.0.29` pins `google_mobile_ads` **6.0.0**.
- Current official Flutter banner documentation supports SDK-confirmed `BannerAdListener.onAdImpression`; paid-event support exists in the plugin lineage and current API exposes `onPaidEvent`.
- Firebase currently states that a linked AdMob app automatically emits Analytics `ad_impression` with ad-revenue information. Therefore the preferred minimum contract is to verify AdMob↔Firebase/Analytics linkage and use the automatic event as the canonical impression/revenue path rather than blindly adding a duplicate custom `ad_impression`.
- If automatic revenue measurement is unavailable or insufficient for a documented decision, a privacy-reviewed `onPaidEvent` ingestion path may preserve value micros, currency and precision. Never double-count the same impression across canonical revenue metrics.
- Do not add high-volume custom ad-request events without a specific high-VOI cohort question. AdMob aggregate requests/matched requests/impressions are the first network-diagnostic layer.
- CTR is a UX/policy guardrail, not the monetization optimization target.

New company-wide ordering rule:

`served deployment identity → semantic product value → SDK/network-confirmed impression → canonical revenue event → retention/harm guardrails → frequency decision`

## Capability state

**FOUNDATION COMPLETE:** value/trust, niche distribution, cash-light acquisition, Store, measurement, demand, positioning, activation/retention, SEO, selective social, community, ad monetization, launch.

**STAGE 2 COMPLETE:** sparse inference; VOI/reversibility; monitoring/stopping; transfer/decay; multi-app labor allocation; decision routing; integration gate.

**APPLICATION READINESS V1 COMPLETE/FROZEN:** evidence provenance; native metric preservation; missingness semantics; baseline-change ledger; Live Evidence Registry; product baseline checklists; niche community/content/social/ad operating systems; cross-surface handoffs.

**POST-FREEZE LIVE EVIDENCE:** 029 Store discovery; 030 default-branch audit; 031 first-value semantics; 032 MintTap release-branch recovery; 033 deployment/ad-observability; 034 activation/ad-refresh boundary; 035 served-version/monetization telemetry contract.

## Next learning / operating sequence

1. **Do not extend general theory by default.** Application Readiness V1 remains frozen.
2. Diff MintTap `1.0.28` vs `1.0.29` specifically for transaction persistence, Home calculation/first-value boundary, Analytics initialization/events, and Home inline-ad behavior. This determines which 1.0.29 implementation conclusions safely transfer to the publicly observed iOS 1.0.28 cohort.
3. Verify MintTap AdMob↔Firebase/Analytics linkage from console/export evidence when accessible. Confirm actual automatic `ad_impression` parameters in DebugView/Realtime/BigQuery evidence before adding any custom impression/revenue event.
4. Preserve `first_portfolio_value_ready_v1` as the semantic activation specification and instrument it only in an aligned served build with no investment-content parameters.
5. Keep current detail-return ad recreation as the baseline. Do not alter frequency until confirmed impression/revenue evidence and retention/harm guardrails exist.
6. Keep Android Store availability/version UNKNOWN until exact-package public or first-party evidence resolves it.
7. Use `lastActiveAt` only as a separately defined coarse authenticated-return signal; never merge it with Analytics sessions, activation or Store retention.
8. For LogMate, inspect canonical local-ledger/persistence implementation when it exists and validate the durable FlightRecord first-value candidate against code.
9. Once deployment identity + activation + canonical impression/revenue telemetry align, establish live baselines and open channel/ad Decision Records.
10. Continue authoritative-source revalidation only when a volatile Store/platform/ad/community rule changes an operating decision.

## Major unresolved live questions

### MintTap

- exact iOS build number serving public 1.0.28;
- whether/when 1.0.29 enters Store submission/review/rollout;
- exact Google Play availability/current served version;
- 1.0.28 vs 1.0.29 equivalence for Home/transaction/Analytics/ad behavior;
- AdMob↔Firebase/Analytics linkage state;
- live automatic `ad_impression` parameter/revenue coverage;
- implementation of `first_portfolio_value_ready_v1` in a served build;
- Store/search/source baseline and natural retention cadence;
- actual Home inline-ad impression frequency and paid value under detail-return recreation;
- retention/harm effects, community permissions, content freshness, Search Console baseline and Store experiment resolution.

### LogMate

Production local-ledger/persistence implementation; validation of FlightRecord first value; launch geography/segment/regulatory boundaries; demand/competitor/import priorities; analytics implementation; workflow/retention cadence; ad model; pilot observations; professional-community permissions; regulatory-content authority mapping and launch traffic ceiling.

### Company-wide

Measured labor capacity; maintenance demand; privacy-compliant event/ingestion path; long-run ad revenue per retained user; empirical stop thresholds; populated claim/permission ledgers; social qualified-response baselines; reusable launch records; proof that reusable assets reduce later labor.

## Progress interpretation

Do not report progress by file count. The objective is a trustworthy, reusable operating system for real niche-app growth. Missing live evidence remains explicitly unknown. Further learning follows real evidence, authoritative platform deltas and concrete execution failures rather than accumulating adjacent theory.
