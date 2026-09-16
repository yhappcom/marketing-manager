# Marketing Manager Status

Last updated: 2026-09-16

## Current phase

**Stage 1 — FOUNDATION COMPLETE. Stage 2 — Sparse-Niche Decision Science COMPLETE. Application Readiness V1 — COMPLETE / FROZEN FOR LIVE VALIDATION.**

Stage 1 research 001–019 is synthesized in `playbook/MARKETING_PLAYBOOK_V1.md`. Stage 2 research 020–024 is integrated in `curriculum/STAGE2_GATE_REVIEW.md`. Application Readiness is gate-reviewed in `curriculum/APPLICATION_READINESS_INTEGRATION_GATE.md`.

General theory is frozen by default. New work follows live product evidence, authoritative platform changes, or concrete framework failures.

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

## Stage 2 / Application Readiness state

Stage 2 Gate: **PASS**. Sparse inference, VOI/reversibility, stopping, transfer/decay and constrained multi-app allocation are operationalized.

Application Readiness V1: **COMPLETE / FROZEN**. Evidence provenance, Live Evidence Registry, product checklists, niche community operations, content evidence lifecycle, ad-revenue quality economics, selective social governance and cross-surface handoffs are complete at V1.

Minimum material-asset handoff tuple:

`source evidence/claim IDs → asset/change ID → surface + permission/eligibility state → native measurement ID/definition → linked Decision Record`

Unavailable elements remain UNKNOWN/NOT_INSTRUMENTED. Attribution is not reconstructed after the fact.

Apple Store semantics remain separated: PPO is the randomized default-product-page experiment surface; CPP is separately routed/localized and observational unless another valid causal design exists.

## Post-freeze authoritative/live-readiness deltas

### 029 — iOS/iPadOS 27 Store discovery surfaces
`research/029_ios27_app_store_discovery_surface_change.md`: Store creative now has distinct discovery/search recognition, product-page persuasion and routed-message-continuity jobs; assets carry device/display coverage and expiry triggers.

### 030 — Product instrumentation repository audit
`research/030_product_instrumentation_readiness_audit.md`: default-branch inspection did not observe analytics/ad SDKs. This was recorded as **NOT OBSERVED IN CURRENT REPOSITORY**, not production absence. 032 later established that MintTap's default branch was not representative of the versioned release implementation.

### 031 — Product first-value semantics readiness
`research/031_product_first_value_semantics_readiness.md`: LogMate candidate first value is durable commit of a valid personal FlightRecord to the canonical local ledger with normal-path retrieval/view. State remains **SEMANTIC CANDIDATE DEFINED / INSTRUMENTATION NOT READY**. MintTap's initial source mismatch was superseded by 032.

Reusable rule: first value is the earliest durable, user-recognizable completion of the core job that works on the simplest legitimate path and can be verified without collecting sensitive domain content.

### 032 — MintTap release-branch source recovery
`research/032_minttap_release_branch_source_recovery.md`: version branches through `1.0.29` were found in `yhappcom/yieldmax_tracker`; `1.0.29` contains the full MintTap implementation, declares `1.0.29+29`, Firebase Analytics and Google Mobile Ads, emits `app_start`, initializes Mobile Ads, contains ad privacy/config modules, first-transaction tutorial and normal-flow Home inline ad.

Audit rule: record `repository → exact ref/tag/branch/commit → declared app version → evidence date`; never equate default branch with current/production product without evidence.

### 033 — MintTap release evidence and ad observability
`research/033_minttap_release_evidence_and_ad_observability.md` continued the exact-ref audit on branch `1.0.29`, head `736bbc99a41c14130d82aeaa17ac81f0fc835a65`.

- Repository evidence verifies the release implementation but not current Store availability. Deployment identity is split into `RELEASE_IMPLEMENTATION_VERIFIED`, `STORE_SUBMISSION_VERIFIED`, and `PRODUCTION_AVAILABILITY_VERIFIED`. MintTap `1.0.29` remains **RELEASE_IMPLEMENTATION_VERIFIED / PRODUCTION_AVAILABILITY UNKNOWN**.
- `UserActivityService` provides coarse authenticated-return/recency evidence via `lastActiveAt`; it is not activation, sessions, ad exposure or exact cross-device frequency.
- Verified Firebase Analytics coverage includes `app_start`; semantic activation was not verified in 033.
- Home ad code loads consent-gated adaptive banners but the inspected listener has no verified impression or paid-value telemetry.

Reusable instrumentation-readiness stack:

`deployment identity → semantic product event → monetization event → joinable cohort evidence`

### 034 — MintTap activation and Home ad-refresh boundary
`research/034_minttap_activation_and_ad_refresh_boundary.md` resolved two implementation questions on the same exact ref.

- Buy persistence is an awaited Firestore `add()` to `users/{uid}/transactions`; sell persistence uses an awaited Firestore batch commit. Save success then marks user data changed, attempts a Home preload, and returns `Navigator.pop(true)`.
- Home calculation is a separate boundary: canonical input is fetched, `CalculationEngine.calculateHomeSummary()` creates `HomeSummaryDto`, and Home stages/renders the result only after that calculation succeeds.
- MintTap first value is now **CODE-VERIFIED EVENT BOUNDARY / NOT YET INSTRUMENTED**. Candidate `first_portfolio_value_ready_v1` belongs at the successful normal authenticated Home calculated-state boundary when `summary.positions.isNotEmpty`, not on save-button tap or transaction-write completion. It must be one-time per account/event-definition and carry no investment-content parameters.
- `_handleReturnFromDetail()` increments `_homeAdRefreshToken`; the banner is keyed with `ValueKey('home-inline-$homeAdRefreshToken')`. The key change disposes the old stateful mobile ad slot and creates a new one, whose initialization schedules a consent-gated `BannerAd.load()` after 350 ms. Therefore **detail-return → fresh ad-request opportunity is VERIFIED** on ref `1.0.29`.
- A request opportunity is not an impression or paid event. Current inspected listener still lacks verified impression/paid telemetry, so actual exposure frequency and monetization per navigation remain UNKNOWN.
- Current ad-request frequency is partly navigation-driven. Do not optimize the refresh policy until SDK-confirmed impression/paid-value telemetry and retention/harm guardrails exist.

Reusable state separations:

`core input persisted → product output calculated → product output exposed → first-value event recorded`

`placement rendered → ad requested → impression confirmed → paid value observed`

## Capability state

**FOUNDATION COMPLETE:** value/trust, niche distribution, cash-light acquisition, Store, measurement, demand, positioning, activation/retention, SEO, selective social, community, ad monetization, launch.

**STAGE 2 COMPLETE:** sparse inference; VOI/reversibility; monitoring/stopping; transfer/decay; multi-app labor allocation; decision routing; integration gate.

**APPLICATION READINESS V1 COMPLETE/FROZEN:** evidence provenance; native metric preservation; missingness semantics; baseline-change ledger; Live Evidence Registry; product baseline checklists; niche community/content/social/ad operating systems; cross-surface handoffs.

**POST-FREEZE DELTAS:** 029 Store discovery; 030 default-branch instrumentation audit; 031 first-value semantics; 032 MintTap release-branch recovery; 033 MintTap deployment-identity/return-signal/ad-observability audit; 034 MintTap activation/ad-refresh boundary audit.

**LIVE VALIDATION REQUIRED:** Store-served version/build; Store/search/channel/product/ad evidence; activation and natural retention cadence; community permissions; content claim inventory; social account economics; launch cohort quality; workflow cycles/harm thresholds; labor capacity and maintenance demand.

## Next learning / operating sequence

1. **Do not extend general theory by default.** Application Readiness V1 remains frozen.
2. For MintTap, seek authoritative Store-side evidence for the currently served version/build. Until then, keep `1.0.29` production availability UNKNOWN.
3. Complete a broader exact-ref Analytics inventory if repository-wide evidence becomes available; do not assume `app_start` is the only event solely from files already inspected.
4. Preserve `first_portfolio_value_ready_v1` as a code-verified specification, but do not claim live activation measurement until an aligned served build actually instruments it.
5. Treat detail-return ad recreation as the current baseline behavior. Do not alter frequency from request/revenue data alone.
6. Immediately before engineering implementation, verify current official Google Mobile Ads impression/paid-event APIs and value/currency/precision semantics; then define the smallest privacy-reviewed monetization contract.
7. Use `lastActiveAt` only as a separately defined coarse authenticated-return signal; never merge its semantics with Firebase Analytics sessions, activation or Store retention.
8. For LogMate, inspect canonical local-ledger/persistence implementation when it exists and validate the durable FlightRecord first-value candidate against code.
9. Once deployment identity + semantic activation + confirmed impression/paid-value telemetry align, establish live baselines and open channel/ad Decision Records.
10. Continue authoritative-source revalidation only when a volatile Store/platform/ad/community rule changes an operating decision.

## Major unresolved live questions

### MintTap
Current Store-served version/build; complete Analytics event inventory; implementation of `first_portfolio_value_ready_v1`; Store/search/source baseline; natural retention cadence; SDK-confirmed Home ad impression/paid-value telemetry; actual exposure frequency under the verified detail-return recreation policy; retention/harm effects; YieldMax-community permissions; content claim freshness; Search Console baseline; Store experiment resolution; cross-country/platform transfer evidence; iOS 27 asset coverage.

### LogMate
Production local-ledger/persistence implementation; validation of the FlightRecord first-value candidate; launch geography/segment/regulatory boundaries; demand/competitor/import priorities; analytics implementation outside current repository evidence; workflow/retention cadence; ad SDK/placement policy; pilot observations; professional-community permissions; regulatory content authority mapping; launch traffic ceiling; jurisdiction/platform/workflow transfer evidence.

### Company-wide
Measured labor capacity; maintenance demand; privacy-compliant event/ingestion path; long-run ad revenue per retained user; empirical stop thresholds; populated claim/permission ledgers; social qualified-response baselines; reusable launch record; proof that reusable assets reduce later labor.

## Progress interpretation

Do not report progress by file count. The objective is a trustworthy, reusable operating system for real niche-app growth. Missing live evidence remains explicitly unknown. Further learning follows real evidence, authoritative platform deltas and concrete execution failures rather than accumulating adjacent theory.
