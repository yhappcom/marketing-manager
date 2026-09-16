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

MintTap first-value state: **SEMANTIC CANDIDATE DEFINED / LIVE BASELINE NOT YET VERIFIED**. Candidate is first valid transaction durably persisted followed by a normal authenticated Home load exposing a non-empty calculated portfolio state. `app_start` is not activation.

Audit rule: record `repository → exact ref/tag/branch/commit → declared app version → evidence date`; never equate default branch with current/production product without evidence.

### 033 — MintTap release evidence and ad observability
`research/033_minttap_release_evidence_and_ad_observability.md` continued the exact-ref audit on branch `1.0.29`, head `736bbc99a41c14130d82aeaa17ac81f0fc835a65`.

New findings:

- GitHub exposes no Releases for this repository. The branch-head release notes contain an earlier `1.0.29` release-candidate statement saying Store deployment had not yet been performed at that point. Repository evidence therefore verifies the release implementation but **does not verify current Store production availability**.
- Deployment identity is now split into `RELEASE_IMPLEMENTATION_VERIFIED`, `STORE_SUBMISSION_VERIFIED`, and `PRODUCTION_AVAILABILITY_VERIFIED`. MintTap `1.0.29` is currently **RELEASE_IMPLEMENTATION_VERIFIED / PRODUCTION_AVAILABILITY UNKNOWN**.
- `UserActivityService` writes `users/{uid}.lastActiveAt` using a Firestore server timestamp, normally once per local calendar day per UID/device, on authenticated start/resume/Home-entry paths. This is useful coarse authenticated-return/recency evidence but is not activation, a session counter, ad exposure, or exact cross-device frequency.
- Verified Firebase Analytics coverage includes `app_start`; no semantic activation event was verified in this audit.
- `HomeInlineAdSlot` performs consent-gated adaptive banner loading and handles load success/failure, but the inspected listener has no verified impression callback, paid-event/revenue callback, or structured semantic ad telemetry. Current code therefore cannot internally join retained useful use → confirmed impression → paid value.
- Home increments `_homeAdRefreshToken` after returning from detail. Exact token-to-widget recreation behavior still requires tracing before any ad-frequency conclusion.

Reusable instrumentation-readiness stack:

`deployment identity → semantic product event → monetization event → joinable cohort evidence`

An analytics SDK or ad SDK alone does not satisfy the later layers.

## Capability state

**FOUNDATION COMPLETE:** value/trust, niche distribution, cash-light acquisition, Store, measurement, demand, positioning, activation/retention, SEO, selective social, community, ad monetization, launch.

**STAGE 2 COMPLETE:** sparse inference; VOI/reversibility; monitoring/stopping; transfer/decay; multi-app labor allocation; decision routing; integration gate.

**APPLICATION READINESS V1 COMPLETE/FROZEN:** evidence provenance; native metric preservation; missingness semantics; baseline-change ledger; Live Evidence Registry; product baseline checklists; niche community/content/social/ad operating systems; cross-surface handoffs.

**POST-FREEZE DELTAS:** 029 Store discovery; 030 default-branch instrumentation audit; 031 first-value semantics; 032 MintTap release-branch recovery; 033 MintTap deployment-identity/return-signal/ad-observability audit.

**LIVE VALIDATION REQUIRED:** Store-served version/build; Store/search/channel/product/ad evidence; activation and natural retention cadence; community permissions; content claim inventory; social account economics; launch cohort quality; workflow cycles/harm thresholds; labor capacity and maintenance demand.

## Next learning / operating sequence

1. **Do not extend general theory by default.** Application Readiness V1 remains frozen.
2. For MintTap, seek authoritative Store-side evidence for the currently served version/build. Until then, keep `1.0.29` production availability UNKNOWN.
3. Complete ref-specific Analytics inventory beyond `main.dart`; do not assume `app_start` is the only event until relevant files are inspected.
4. Verify the transaction persistence success boundary and the exact Home calculated-state predicate needed for one-time `first_portfolio_value_ready_v1` without investment-content parameters.
5. Trace `_homeAdRefreshToken` to the rendered `HomeInlineAdSlot` key/recreation boundary; determine whether detail-return causes a fresh ad request.
6. Define the smallest privacy-reviewed monetization contract around SDK-confirmed impression and paid value before changing ad frequency. Structured load-failure telemetry is optional and should exist only if diagnostically useful.
7. Use `lastActiveAt` as a separately defined coarse authenticated-return signal; never merge its semantics with Firebase Analytics sessions, activation or Store retention.
8. For LogMate, inspect canonical local-ledger/persistence implementation when it exists and validate the durable FlightRecord first-value candidate against code.
9. Connect event-definition versions to the Live Evidence Registry, establish activation/return/ad baselines, then open channel-specific Decision Records.
10. Continue authoritative-source revalidation only when a volatile Store/platform/ad/community rule changes an operating decision.

## Major unresolved live questions

### MintTap
Current Store-served version/build; complete Analytics event inventory; transaction commit boundary; exact calculated-Home activation predicate; implementation of `first_portfolio_value_ready_v1`; Store/search/source baseline; natural retention cadence; exact Home ad recreation/frequency behavior; confirmed impression/paid-value telemetry; retention/harm effects; YieldMax-community permissions; content claim freshness; Search Console baseline; Store experiment resolution; cross-country/platform transfer evidence; iOS 27 asset coverage.

### LogMate
Production local-ledger/persistence implementation; validation of the FlightRecord first-value candidate; launch geography/segment/regulatory boundaries; demand/competitor/import priorities; analytics implementation outside current repository evidence; workflow/retention cadence; ad SDK/placement policy; pilot observations; professional-community permissions; regulatory content authority mapping; launch traffic ceiling; jurisdiction/platform/workflow transfer evidence.

### Company-wide
Measured labor capacity; maintenance demand; privacy-compliant event/ingestion path; long-run ad revenue per retained user; empirical stop thresholds; populated claim/permission ledgers; social qualified-response baselines; reusable launch record; proof that reusable assets reduce later labor.

## Progress interpretation

Do not report progress by file count. The objective is a trustworthy, reusable operating system for real niche-app growth. Missing live evidence remains explicitly unknown. Further learning follows real evidence, authoritative platform deltas and concrete execution failures rather than accumulating adjacent theory.
