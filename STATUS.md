# Marketing Manager Status

Last updated: 2026-09-16

## Current phase

**Stage 1 — FOUNDATION COMPLETE. Stage 2 — Sparse-Niche Decision Science COMPLETE. Application & Live-Validation Readiness — IN PROGRESS.**

Stage 1 research 001–019 is synthesized in `playbook/MARKETING_PLAYBOOK_V1.md`. Stage 2 research 020–024 is integrated and gate-reviewed in `curriculum/STAGE2_GATE_REVIEW.md`.

## Canonical applied system

- `playbook/MARKETING_DECISION_QUEUE.md`
- `playbook/DECISION_RECORD_TEMPLATE.md`
- `playbook/EVIDENCE_PROVENANCE_BASELINE_PROTOCOL.md`
- `playbook/LIVE_EVIDENCE_REGISTRY_TEMPLATE.md`
- `playbook/PRODUCT_BASELINE_CHECKLISTS.md`

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

## Application-readiness progress

### Evidence provenance & baseline measurement — COMPLETE V1

Native metric definitions are preserved. Apple and Google Store funnels remain separate at the native layer. Numeric zero is distinct from UNKNOWN, SUPPRESSED, NOT_INSTRUMENTED, NOT_APPLICABLE, and INVALID. Attribution stops where measurement stops. Baselines respect product/store/analytics change boundaries and natural workflow cycles.

### Live Evidence Registry — COMPLETE V1

`LIVE_EVIDENCE_REGISTRY_TEMPLATE.md` now operationalizes the evidence protocol as an append-only audit layer. It defines:

- observation-level evidence IDs;
- native metric-definition versioning;
- explicit missingness states;
- comparability groups;
- baseline-change events;
- T0–T4 transfer and decay triggers;
- Decision Record linkage;
- sparse-niche safeguards against over-segmentation and false zeroes.

A key new operating rule is **do not overwrite history when a definition changes**. Historical observations retain the metric-definition version that applied when captured; a platform reporting change creates a new definition/baseline boundary.

### Product baseline checklists — COMPLETE V1

`PRODUCT_BASELINE_CHECKLISTS.md` instantiates the registry for MintTap and LogMate without invented values. MintTap covers Store, activation/retention, Search Console/content, YieldMax community permissions, ads, and decision readiness. LogMate explicitly permits pre-launch UNKNOWN states and separates proposition/pilot evidence from Store baselines that do not yet exist.

### Campaign/source semantics — COMPLETE V1

Current Apple campaign-link documentation was revalidated on 2026-09-16. Apple campaign links use campaign (`ct`) and provider (`pt`) tokens; `pt` identifies the developer account and must not be reinterpreted as an ad-network/source field. Apple currently attributes a first-time download when it occurs within 24 hours after campaign-link/token use. Campaign dashboard visibility is thresholded, and detailed reporting applies privacy protections.

Current Google Play documentation was also revalidated: 2026 Store Listing Performance reporting shifted toward click/intent-based measurement. Historical acquisition-rate series and newer visitors/clicks/CTR series therefore require metric-definition versioning and a series break rather than silent splicing.

For owned/community naming, identifiers should describe origin/surface/objective/period/real variant only. They must not encode unobserved claims such as `high-intent` or `converted`.

## Capability state

**FOUNDATION COMPLETE:** value/trust, niche distribution, cash-light acquisition, Store, measurement, demand, positioning, activation/retention, SEO, selective social, community, ad monetization, launch.

**STAGE 2 COMPLETE:** sparse inference; VOI/reversibility; monitoring/stopping; transfer/decay; multi-app labor allocation; decision routing; integration gate.

**APPLICATION READINESS COMPLETE V1:** evidence provenance; native metric preservation; missingness semantics; metric-definition registry; baseline-change ledger; Live Evidence Registry; MintTap/LogMate baseline checklists; conservative campaign/source semantics.

**LIVE VALIDATION REQUIRED:** actual MintTap/LogMate Store/search/channel/product/ad evidence; activation and natural retention cadence; community permissions; launch cohort quality; product-specific workflow cycles/harm thresholds; actual labor capacity and maintenance demand.

## Next learning sequence

1. Deepen **niche community evidence operations**: permission-ledger design, research-vs-promotion boundaries, disclosure, moderator interaction, and how to extract useful qualitative demand evidence without turning communities into acquisition funnels.
2. Build a reusable **content evidence lifecycle** connecting problem-cluster research → authoritative source validation → article/store/community asset → Search Console/native evidence → refresh/decay trigger, with special attention to MintTap financial-information freshness and LogMate professional/regulatory content.
3. Deepen **ad-revenue quality economics** beyond eCPM: eligible-use inventory, session/task-state exposure, impression opportunity, latency/abandonment/retention guardrails, and when additional inventory destroys long-run value.
4. Populate actual evidence only when first-party/native data is available. Do not substitute generic estimates.

## Major unresolved live questions

### MintTap
Current Store/search/source baseline; canonical activation/retention; analytics schema; actual ad task states/frequency/latency and retention effects; YieldMax-community permissions; content/Search Console baseline; Store experiment resolution time; U.S./Korean and iOS/Android transfer evidence.

### LogMate
Launch geography/segment/regulatory boundaries; actual demand/competitor/import priorities; activation/workflow cadence; ad placement policy; pilot observations/interviews; professional-community permissions; launch traffic ceiling; jurisdiction/platform/workflow transfer evidence.

### Company-wide
Measured labor capacity; maintenance demand by asset/channel; privacy-compliant ingestion path; long-run ad revenue per retained user; empirical MPME/stop thresholds; content inventory; permission ledger; reusable launch record; proof that reusable assets reduce later labor.

## Progress interpretation

Do not report progress by file count. The current objective is a trustworthy, reusable operating system for real niche-app growth. Missing live evidence remains explicitly unknown. Research now moves only into areas that materially improve execution quality rather than repeating completed foundation theory.
