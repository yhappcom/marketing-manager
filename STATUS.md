# Marketing Manager Status

Last updated: 2026-09-16

## Current phase

**Stage 1 — FOUNDATION COMPLETE. Stage 2 — Sparse-Niche Decision Science COMPLETE. Application Readiness V1 — COMPLETE / FROZEN FOR LIVE VALIDATION.**

Stage 1 research 001–019 is synthesized in `playbook/MARKETING_PLAYBOOK_V1.md`. Stage 2 research 020–024 is integrated and gate-reviewed in `curriculum/STAGE2_GATE_REVIEW.md`. Application Readiness integration is gate-reviewed in `curriculum/APPLICATION_READINESS_INTEGRATION_GATE.md`.

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

## Stage 2 decision system — COMPLETE

1. VOI/reversibility routes decisions to ACT+MONITOR, OBSERVE/TRIANGULATE, CONTROLLED EXPERIMENT, RESEARCH FIRST, or DEFER.
2. Sparse inference separates validity, effect estimate, uncertainty, and practical significance; INVALID and INCONCLUSIVE are distinct.
3. Stopping uses `HEALTH LOOK ≠ DECISION LOOK`; fixed horizon, genuine sequential inference, and operational staged commitment are distinct.
4. Evidence transfer uses mechanism-first T0–T4 plus trigger-based decay. Policy, regulation, factual truth, and permission are never transported by analogy.
5. Portfolio allocation assigns constrained Marketing/Design/Web/Engineering/qualified-traffic capacity to decision packages at the current bottleneck, including maintenance tail and reuse value.

Stage 2 Gate: **PASS**. Further methodology is added only when a live decision exposes a specific framework failure.

## Application Readiness V1 — COMPLETE

Evidence provenance, Live Evidence Registry, product checklists, niche community operations, content evidence lifecycle, ad-revenue quality economics, selective social governance and cross-surface integration/handoff rules are complete at V1 and frozen pending live validation.

Minimum material-asset handoff tuple:

`source evidence/claim IDs → asset/change ID → surface + permission/eligibility state → native measurement ID/definition → linked Decision Record`

Unavailable elements remain UNKNOWN/NOT_INSTRUMENTED; attribution is not reconstructed after the fact.

Apple Store surface semantics remain separated: PPO is the randomized default-product-page experiment surface; CPP is separately routed/localized and observational unless another valid causal design exists. Do not infer CPP causal lift from raw conversion differences.

## Post-freeze authoritative/live-readiness deltas

### 029 — iOS/iPadOS 27 Store discovery surfaces
`research/029_ios27_app_store_discovery_surface_change.md` treats Store creative as a multi-surface job: discovery/search recognition, product-page persuasion, and routed-message continuity. Store assets now carry device/display coverage and expiry triggers.

### 030 — Product instrumentation repository audit
`research/030_product_instrumentation_readiness_audit.md` inspected default-branch repository state and did not observe `firebase_analytics` or `google_mobile_ads` there. This was intentionally recorded as **NOT OBSERVED IN CURRENT REPOSITORY**, not proof of production absence. Research 032 later resolved that the MintTap default branch was not representative of the versioned release implementation.

### 031 — Product first-value semantics readiness
`research/031_product_first_value_semantics_readiness.md` tested whether activation can be defined from verified product sources rather than guessed.

- **MintTap at that audit point:** default-branch source mismatch blocked a valid activation definition. This blocker is superseded by 032's release-branch recovery; the historical finding remains preserved rather than rewritten.
- **LogMate:** README/MASTER provide a canonical semantic boundary. Manual-first, import-optional and local-first are confirmed. Current Home flight/time/activity/totals are explicitly mock/presentation shell; canonical ledger/persistence/calculation are not yet implemented. Candidate first value is the earliest durable commit of a valid personal FlightRecord to the canonical local ledger with normal-path retrieval/view. This remains **SEMANTIC CANDIDATE DEFINED / INSTRUMENTATION NOT READY**.
- Reusable rule: first value is the earliest durable, user-recognizable completion of the core job that works on the simplest legitimate path and can be verified without collecting sensitive domain content.

### 032 — MintTap release-branch source recovery
`research/032_minttap_release_branch_source_recovery.md` found version branches through `1.0.29` in `yhappcom/yieldmax_tracker` and audited `1.0.29` rather than assuming the default branch represented the product.

Verified on `1.0.29`:

- `README.md` describes the full MintTap YieldMax portfolio/dividend/performance application and names `lib/` + `functions/` as runtime source of truth.
- `pubspec.yaml` declares version `1.0.29+29`, `firebase_analytics` and `google_mobile_ads`.
- `lib/main.dart` enables Firebase Analytics, emits `app_start`, and initializes Mobile Ads after first frame on non-web platforms.
- `lib/ads/` contains privacy/config/initialization modules.
- Home uses a first-transaction tutorial and an inline ad slot in normal non-browse flow.

MintTap first-value state is therefore upgraded to **SEMANTIC CANDIDATE DEFINED / LIVE BASELINE NOT YET VERIFIED**. Candidate: first valid transaction is durably persisted and the normal authenticated Home path subsequently exposes a non-empty calculated portfolio state. `app_start` is not activation.

New audit rule: always record `repository → exact ref/tag/branch/commit → declared app version → evidence date`; never equate default branch with current/production product without evidence.

## Capability state

**FOUNDATION COMPLETE:** value/trust, niche distribution, cash-light acquisition, Store, measurement, demand, positioning, activation/retention, SEO, selective social, community, ad monetization, launch.

**STAGE 2 COMPLETE:** sparse inference; VOI/reversibility; monitoring/stopping; transfer/decay; multi-app labor allocation; decision routing; integration gate.

**APPLICATION READINESS V1 COMPLETE/FROZEN:** evidence provenance; native metric preservation; missingness semantics; baseline-change ledger; Live Evidence Registry; product baseline checklists; niche community/content/social/ad operating systems; cross-surface handoffs.

**POST-FREEZE DELTAS:** 029 Store discovery/asset-role change; 030 default-branch instrumentation audit; 031 first-value semantics readiness; 032 MintTap release-branch source recovery and activation candidate.

**LIVE VALIDATION REQUIRED:** actual Store/search/channel/product/ad evidence; activation and natural retention cadence; community permissions; content claim inventory; social account economics; launch cohort quality; workflow cycles/harm thresholds; labor capacity and maintenance demand.

## Next learning / operating sequence

1. **Do not extend general theory by default.** Application Readiness V1 remains frozen.
2. For MintTap, verify whether `1.0.29` is the actual current production release rather than merely the newest visible version branch.
3. Inventory Firebase Analytics events on the actual MintTap release/current ref and inspect the transaction-commit plus Home calculated-state boundaries. Reuse an existing semantic event if adequate; otherwise define the smallest privacy-reviewed activation contract.
4. Inspect MintTap `HomeInlineAdSlot` implementation and callbacks to map request/impression/paid-event/failure/refresh observability and its location relative to the core task. Do not optimize impressions before activation/retention harm is measurable.
5. For LogMate, inspect the canonical local-ledger/persistence implementation when it exists and validate the `durable FlightRecord commit + normal retrieval` first-value candidate against code.
6. Connect event-definition versions to the Live Evidence Registry, then establish activation/retention/ad baselines and open channel-specific Decision Records.
7. Continue authoritative-source revalidation for volatile Store/platform/ad/community rules, reporting only changes that alter an operating rule.
8. Research a new topic only if a live decision cannot be represented/routed, a platform/policy change invalidates a rule, first-party evidence exposes a missing mechanism, or a future app introduces a materially new context.

## Major unresolved live questions

### MintTap
Whether `1.0.29` is the actual current production release; complete analytics-event inventory; validation/implementation of `first_portfolio_value_ready_v1`; Store/search/source baseline; natural retention cadence; actual ad request/impression/paid-event/failure/refresh telemetry and retention effects; YieldMax-community permissions; content claim freshness; Search Console baseline; Store experiment resolution; cross-country/platform transfer evidence; iOS 27 asset coverage.

### LogMate
Production local-ledger/persistence implementation; validation of the FlightRecord first-value candidate; launch geography/segment/regulatory boundaries; demand/competitor/import priorities; analytics implementation outside current repository evidence; workflow/retention cadence; ad SDK/placement policy; pilot observations; professional-community permissions; regulatory content authority mapping; launch traffic ceiling; jurisdiction/platform/workflow transfer evidence.

### Company-wide
Measured labor capacity; maintenance demand; privacy-compliant event/ingestion path; long-run ad revenue per retained user; empirical stop thresholds; populated claim/permission ledgers; social qualified-response baselines; reusable launch record; proof that reusable assets reduce later labor.

## Progress interpretation

Do not report progress by file count. The objective is a trustworthy, reusable operating system for real niche-app growth. Missing live evidence remains explicitly unknown. Further learning follows real evidence, authoritative platform deltas and concrete execution failures rather than accumulating adjacent theory.
