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

### Evidence provenance & baseline measurement
Native metric definitions are preserved. Apple and Google Store funnels remain separate at the native layer. Numeric zero is distinct from UNKNOWN, SUPPRESSED, NOT_INSTRUMENTED, NOT_APPLICABLE, and INVALID. Attribution stops where measurement stops. Baselines respect product/store/analytics change boundaries and natural workflow cycles.

### Live Evidence Registry and product checklists
`LIVE_EVIDENCE_REGISTRY_TEMPLATE.md` provides the append-only audit layer. `PRODUCT_BASELINE_CHECKLISTS.md` instantiates it for MintTap and LogMate without invented values; LogMate pre-launch Store states may remain UNKNOWN.

### Community, content and social
`research/025_niche_community_evidence_operations.md` governs permission, qualitative evidence and goodwill. `research/026_content_evidence_lifecycle.md` governs claim-level provenance/freshness. `research/028_selective_social_distribution_specialist_audiences.md` makes recurring social presence role- and evidence-gated rather than mandatory.

### Ad-revenue quality economics
`research/027_ad_revenue_quality_economics.md` replaces impression maximization with quality-adjusted inventory economics. Protect FIRST_VALUE/ONBOARDING and precision TASK_CRITICAL states from interruptive inventory by default; classify workflow state before format; treat suspicious CTR as an implementation-review signal; optimize retained useful use before increasing interruption/frequency.

### Integration gate — PASS
`curriculum/APPLICATION_READINESS_INTEGRATION_GATE.md` tested realistic MintTap/LogMate decisions spanning Store, community, content, social, ads, launch and cross-app labor allocation. All were routable without new general methodology.

One concrete handoff gap was fixed: every material distribution asset must now identify both its upstream provenance and downstream measurement/decision destination using the minimum tuple:

`source evidence/claim IDs → asset/change ID → surface + permission/eligibility state → native measurement ID/definition → linked Decision Record`

Unavailable elements remain UNKNOWN/NOT_INSTRUMENTED; attribution is not reconstructed after the fact.

Apple Store surface semantics were revalidated 2026-09-16: Product Page Optimization (PPO) and Custom Product Pages (CPP) are separate operating objects. PPO is a randomized default-product-page experiment surface (up to three treatments for supported assets); CPP is a separately routed/localized page surface (up to 70 pages) with unique URLs/keywords and page-level analytics. PPO is not available for CPP. A CPP-specific conversion observation is not automatically causal lift versus default because traffic selection can differ.

### Authoritative platform delta — iOS/iPadOS 27 Store discovery surfaces
`research/029_ios27_app_store_discovery_surface_change.md` records an allowed post-freeze delta. Apple's WWDC26 discovery guidance makes Store creative a multi-surface problem: discovery/search-result recognition, product-page persuasion, and routed-message continuity should be treated as distinct creative jobs rather than assuming one screenshot sequence serves all jobs. CPP remains routing/observational evidence; PPO remains the native randomized default-page experiment surface. September 9, 2026 App Store Connect release notes also add screenshot/preview specifications for new device classes, creating a Store-asset maintenance/expiry trigger.

New operating tuple for material Store creative:

`target intent → discovery surface → asset role → default/CPP routing → downstream destination → native measurement → evidence class → device/display coverage → expiry trigger`

Do not create CPPs simply because Apple allows many; sparse specialist traffic makes fragmentation costly.

### Live-readiness repository audit — product instrumentation
`research/030_product_instrumentation_readiness_audit.md` inspects the current default-branch product repositories rather than extending theory. MintTap/yieldmax_tracker currently declares `firebase_core` but not `firebase_analytics` or `google_mobile_ads`; LogMate declares Firebase Auth/Core/Cloud Functions but likewise not `firebase_analytics` or `google_mobile_ads`. Repository searches did not find those analytics/ad SDK APIs. This is **NOT OBSERVED IN CURRENT REPOSITORY**, not proof of production absence.

Operational consequence: Store-native metrics may answer Store questions, but current repository evidence does not establish the first-party event path needed to connect qualified acquisition to meaningful first value, repeated core value, safe ad opportunities, and durable ad revenue. Do not infer activation/retention from Store installs or spend scarce niche traffic merely to create unmeasurable volume.

## Capability state

**FOUNDATION COMPLETE:** value/trust, niche distribution, cash-light acquisition, Store, measurement, demand, positioning, activation/retention, SEO, selective social, community, ad monetization, launch.

**STAGE 2 COMPLETE:** sparse inference; VOI/reversibility; monitoring/stopping; transfer/decay; multi-app labor allocation; decision routing; integration gate.

**APPLICATION READINESS V1 COMPLETE/FROZEN:** evidence provenance; native metric preservation; missingness semantics; metric-definition registry; baseline-change ledger; Live Evidence Registry; MintTap/LogMate baseline checklists; conservative campaign/source semantics; niche community operations; content evidence lifecycle; ad-revenue quality economics; selective social governance; cross-surface integration/handoff rules.

**POST-FREEZE AUTHORITATIVE/LIVE-READINESS DELTAS:** 029 iOS/iPadOS 27 App Store discovery-surface/asset-role change; 030 product instrumentation repository audit.

**LIVE VALIDATION REQUIRED:** actual MintTap/LogMate Store/search/channel/product/ad evidence; activation and natural retention cadence; actual community rules/permissions; actual content inventory/claim ledger; social audience-fit/account economics; launch cohort quality; product-specific workflow cycles/harm thresholds; actual labor capacity and maintenance demand.

## Next learning / operating sequence

1. **Do not extend general theory by default.** Application Readiness V1 remains frozen.
2. Define MintTap and LogMate product-specific `first_value_reached` / core-task semantics from verified product workflow; do not invent activation definitions.
3. Confirm whether production analytics/ad measurement exists outside the inspected repository state. Repository non-observation is not production proof.
4. If product-event measurement is absent, specify/implement a minimal, privacy-reviewed semantic event contract before broad promotion or fine-grained experiments consume scarce specialist traffic.
5. Connect event-definition versions to the Live Evidence Registry, then establish activation/retention/ad baselines and open channel-specific Decision Records.
6. Continue periodic authoritative-source revalidation for volatile Store/platform/ad/community rules, but report only changes that alter an operating rule.
7. Research a new topic only if a live decision cannot be represented/routed, an authoritative platform/policy change invalidates a rule, first-party evidence exposes a missing mechanism, or a future app introduces a materially new context.

## Major unresolved live questions

### MintTap
Current Store/search/source baseline; canonical first-value/activation definition; analytics implementation outside current repository evidence; natural retention cadence; actual ad SDK/task states/frequency/latency and retention effects; YieldMax-community rule snapshots/permissions; content inventory and claim freshness; social audience concentration and account economics; Search Console baseline; Store experiment resolution time; U.S./Korean and iOS/Android transfer evidence; iOS 27 discovery-asset/device coverage.

### LogMate
Launch geography/segment/regulatory boundaries; actual demand/competitor/import priorities; canonical first-value/activation definition; analytics implementation outside current repository evidence; workflow/retention cadence; actual ad SDK and placement policy; pilot observations/interviews; professional-community rule snapshots/permissions; regulatory content inventory/authority mapping; social audience concentration and professional-credibility value; launch traffic ceiling; jurisdiction/platform/workflow transfer evidence; pre-launch iOS 27 discovery-asset plan.

### Company-wide
Measured labor capacity; maintenance demand by asset/channel; privacy-compliant event/ingestion path; long-run ad revenue per retained user; empirical MPME/stop thresholds; populated content claim ledger; populated permission ledger; social account maintenance/qualified-response baselines; reusable launch record; proof that reusable assets reduce later labor.

## Progress interpretation

Do not report progress by file count. The current objective is a trustworthy, reusable operating system for real niche-app growth. Missing live evidence remains explicitly unknown. Further learning now follows real evidence, authoritative platform deltas, and concrete execution failures rather than accumulating adjacent theory.
