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

Detail-return ad recreation is code-verified on 1.0.29:

`detail return → _homeAdRefreshToken increment → ValueKey change → new HomeInlineAdSlot state → consent gate → BannerAd.load()`

This proves a fresh request opportunity, not an impression or paid event.

Reusable state separations:

`core input persisted → product output calculated → product output exposed → first-value event recorded`

`placement rendered → ad requested → impression confirmed → paid value observed`

### 035 — MintTap served-version identity and monetization telemetry contract
`research/035_minttap_served_version_and_monetization_telemetry_contract.md`

- Public App Store evidence verifies **MintTap 1.0.28** is currently served in multiple queried storefronts. Exact iOS build number remains unknown from public Store evidence.
- Repository `1.0.29+29` remains a newer implementation ref, not a proven served iOS cohort.
- Exact Google Play package/version evidence remains unresolved; Android served availability/version is **UNKNOWN**, not absent.
- MintTap 1.0.29 pins `google_mobile_ads` 6.0.0.
- Current official Flutter banner documentation supports SDK-confirmed `BannerAdListener.onAdImpression`; paid-event support exists in the plugin lineage/current API.
- Firebase states that a linked AdMob app automatically emits Analytics `ad_impression` with ad-revenue information. Preferred minimum contract: verify AdMob↔Firebase/Analytics linking and use the automatic event as the canonical impression/revenue path rather than blindly adding duplicate custom revenue events.
- If automatic revenue evidence is unavailable/insufficient, use a privacy-reviewed paid-event path while preserving value micros, currency and precision and preventing double count.
- CTR is a policy/UX guardrail, not the monetization objective.

Company ordering rule:

`served deployment identity → semantic product value → SDK/network-confirmed impression → canonical revenue event → retention/harm guardrails → frequency decision`

### 036 — MintTap 1.0.28 → 1.0.29 transfer audit
`research/036_minttap_1_0_28_to_1_0_29_transfer_audit.md`

GitHub compare shows 1.0.29 is four commits ahead of 1.0.28. The files establishing transaction persistence, Home summary calculation, Home first-value semantics and Home inline-ad lifecycle were not changed between the refs.

Direct blob checks strengthen this:

- `lib/screens/home_screen.dart` is byte-identical on 1.0.28 and 1.0.29 (`c8ae8bfc710f227921057a68f924cafaf53b7a9c`).
- `lib/widgets/home_inline_ad_slot_mobile.dart` is byte-identical on both refs (`383959d4c2e43e89d399dbde93aa4a56ecf70689`).
- 1.0.28 `main.dart` already enables Firebase Analytics, logs `app_start`, and initializes Mobile Ads after the first frame.

Therefore the first-value **code-semantic boundary** and Home-side detail-return→fresh-ad-request mechanism transfer from audited 1.0.29 to repository 1.0.28. The event itself is still not instrumented, and request still does not equal impression/revenue.

Important non-transfer: `UserActivityService`/`lastActiveAt` was added after the 1.0.28 base. Do **not** use that signal as a current public iOS 1.0.28 return/retention guardrail.

Deployment state is now more precise:

- public App Store marketing version: 1.0.28 verified in multiple storefronts;
- repository 1.0.28 code mechanism: version-aligned and directly compared;
- exact public binary ↔ Git commit/build identity: still UNKNOWN.

Reusable transfer rule: compare exact refs, identify mechanism files, prefer identical blob SHA/no-change diff, transfer only unchanged mechanisms, and verify Store build provenance separately.

## Capability state

**FOUNDATION COMPLETE:** value/trust, niche distribution, cash-light acquisition, Store, measurement, demand, positioning, activation/retention, SEO, selective social, community, ad monetization, launch.

**STAGE 2 COMPLETE:** sparse inference; VOI/reversibility; monitoring/stopping; transfer/decay; multi-app labor allocation; decision routing; integration gate.

**APPLICATION READINESS V1 COMPLETE/FROZEN:** evidence provenance; native metric preservation; missingness semantics; baseline-change ledger; Live Evidence Registry; product baseline checklists; niche community/content/social/ad operating systems; cross-surface handoffs.

**POST-FREEZE LIVE EVIDENCE:** 029 Store discovery; 030 default-branch audit; 031 first-value semantics; 032 MintTap release-branch recovery; 033 deployment/ad-observability; 034 activation/ad-refresh boundary; 035 served-version/monetization contract; 036 version-transfer audit.

## Next learning / operating sequence

1. **Do not extend general theory by default.** Application Readiness V1 remains frozen.
2. Seek first-party App Store Connect/release evidence for the exact build behind public marketing version 1.0.28 if accessible. Public marketing version + repository branch name is strong version alignment but not exact binary provenance.
3. Verify MintTap AdMob↔Firebase/Analytics linkage from console/export evidence. Confirm actual automatic `ad_impression` parameters in DebugView/Realtime/BigQuery before adding custom impression/revenue events.
4. Preserve `first_portfolio_value_ready_v1` as the activation specification; instrument it only in an aligned future served build with no investment-content parameters.
5. Treat the 1.0.28 Home-side detail-return ad recreation as a verified repository mechanism. Keep frequency unchanged until confirmed impression/revenue evidence and retention/harm guardrails exist.
6. Do **not** use `lastActiveAt` as a live public-iOS-1.0.28 guardrail; it is a 1.0.29 delta.
7. Keep Android Store availability/version UNKNOWN until exact-package public or first-party evidence resolves it.
8. For LogMate, inspect canonical local-ledger/persistence implementation when it exists and validate the durable FlightRecord first-value candidate against code.
9. Once deployment identity + activation + canonical impression/revenue telemetry align, establish live baselines and open channel/ad Decision Records.
10. Continue authoritative-source revalidation only when volatile Store/platform/ad/community changes affect an operating decision.

## Major unresolved live questions

### MintTap

- exact iOS build number/commit identity behind public 1.0.28;
- whether/when 1.0.29 enters Store submission/review/rollout;
- exact Google Play availability/current served version;
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
