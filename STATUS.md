# Marketing Manager Status

Last updated: 2026-09-16

## Current phase

**Stage 1 — FOUNDATION COMPLETE. Stage 2 — Sparse-Niche Decision Science COMPLETE. Application Readiness V1 — COMPLETE / FROZEN FOR LIVE VALIDATION.**

General theory remains frozen by default. New work follows live product evidence, authoritative platform changes, concrete framework failures, or operational gaps exposed by MintTap/LogMate.

Canonical growth chain:

`relevant demand → credible promise → qualified acquisition → meaningful activation → repeated core value → sustainable ad-bearing use`

## Locked operating context

Default to little/no direct cash spend. Store, owned/editorial, permission-respecting community surfaces and selective evidence-gated social are the core acquisition system. MintTap and LogMate serve narrow specialist audiences. Advertising is the intended monetization path unless owner policy changes, but intrusive/deceptive/access-limiting ads are unacceptable. Optimize sustainable ad revenue subject to usability, trust, retention, accessibility, performance and policy.

## Canonical applied system

- `playbook/MARKETING_DECISION_QUEUE.md`
- `playbook/DECISION_RECORD_TEMPLATE.md`
- `playbook/EVIDENCE_PROVENANCE_BASELINE_PROTOCOL.md`
- `playbook/LIVE_EVIDENCE_REGISTRY_TEMPLATE.md`
- `playbook/PRODUCT_BASELINE_CHECKLISTS.md`
- `playbook/INTENT_ROUTE_REGISTRY_TEMPLATE.md`
- `playbook/STORE_PROOF_REGISTRY_TEMPLATE.md`
- `playbook/MINTTAP_CODEX_MEASUREMENT_EXTRACTION_V1.md`
- `curriculum/APPLICATION_READINESS_INTEGRATION_GATE.md`

Minimum material-asset handoff tuple:

`source evidence/claim IDs → asset/change ID → surface + permission/eligibility state → native measurement ID/definition → linked Decision Record`

Unavailable elements remain `UNKNOWN/NOT_INSTRUMENTED`. Attribution is not reconstructed after the fact.

## Canonical MintTap release state

**MintTap 1.0.29 is RELEASED.**

First-party owner information supersedes earlier public-crawler uncertainty. Repository branch `1.0.29`, previously audited at head `736bbc99a41c14130d82aeaa17ac81f0fc835a65`, is the current release-version implementation reference for marketing/measurement analysis unless newer first-party release information supersedes it.

Platform-specific exact build numbers, phased rollout, territory availability and exact binary↔commit provenance remain separate facts when a decision requires them.

## Post-freeze live-readiness / operating deltas

### 029 — Store discovery surface change
`research/029_ios27_app_store_discovery_surface_change.md`

Store creative has distinct discovery/search recognition, product-page persuasion and routed-message-continuity jobs. Apple PPO and CPP remain different instruments.

### 030–032 — instrumentation audit and source recovery
Initial default-branch inspection did not represent the live MintTap implementation. Version branches recovered the full product source. Never equate default branch with production without evidence.

### 033–034 — activation/ad lifecycle
`lastActiveAt` is a coarse authenticated-account recency signal only. MintTap first value is a **CODE-VERIFIED EVENT BOUNDARY / NOT YET VERIFIED AS INSTRUMENTED** at the successful normal authenticated Home calculated-state boundary with `summary.positions.isNotEmpty`.

Release-version Home ad mechanism:

`detail return → _homeAdRefreshToken increment → ValueKey change → new HomeInlineAdSlot state → consent gate → BannerAd.load()`

This proves a fresh request opportunity, not an impression or paid event.

### 035–037 — deployment/release correction
Earlier 1.0.29 production uncertainty is superseded. MintTap 1.0.29 is released. 1.0.28 comparison remains historical compatibility evidence only.

### 038 — activation cohort measurement design
Keep the states separate:

`acquisition event ≠ first value ≠ useful return ≠ account recency ≠ monetized impression`

Do not use `app_start` as activation. Preserve `first_portfolio_value_ready_v1` as the one-time first-value specification. If no equivalent runtime event exists, a future repeatable `portfolio_value_viewed_v1` may represent useful-return value exposure with rebuild/session deduplication and no investment-content parameters.

### 039 — measurement access cost architecture
Do not purchase Windsor.ai Basic/Standard for the current MintTap problem. Default order:

`native free analytics → zero-cash bridge/export → first-party BigQuery when raw evidence is needed → paid connector only after repeated operational bottleneck`

### 040–041 — Codex ↔ Firebase bridge and executable extraction contract
Owner confirms Codex can access Firebase while this chat has no native Firebase/Firestore/BigQuery connector. Preferred bridge:

`Firebase / Firestore / GA4 / BigQuery → Codex read-only access → local privacy filtering/aggregation → marketing-manager GitHub snapshot → Marketing Manager chat`

Operational artifacts:

- `playbook/MINTTAP_CODEX_MEASUREMENT_EXTRACTION_V1.md`
- `live_data/minttap/measurement_snapshot_v1.schema.json`
- `live_data/minttap/measurement_snapshot_v1.template.json`
- `live_data/minttap/README.md`

The actual Codex/Firebase sync and first snapshot are a **separate execution track** handled independently. Marketing research continues without waiting for that track.

### 042 — cross-surface intent routing for niche apps
`research/042_cross_surface_intent_routing_for_niche_apps.md`

Current Apple CPP and Google Play CSL capabilities support a stronger zero-cash acquisition architecture than sending every source to one generic Store page.

Sparse niche apps should use:

`many content assets → few source campaigns → very few durable intent routes → one coherent first-value promise`

New company Route Consolidation Rule:

`distinct intent × distinct Store story × measurable traffic × supported product value > maintenance + fragmentation cost`

Only if this is true should a new CPP/CSL route be created. Otherwise reuse an existing route and distinguish source through campaign/UTM metadata.

Operational template:

- `playbook/INTENT_ROUTE_REGISTRY_TEMPLATE.md`

### 043 — specialist Store proof architecture
`research/043_specialist_store_proof_architecture.md`

The Store page is now modeled as an ordered proof system rather than a feature gallery.

Current Apple guidance says up to the first three screenshots may appear in search when no app preview is present; Apple recommends leading with the strongest benefits/features and actual in-use experience. Google Play likewise reuses screenshots across Store/search/home/promotional surfaces and explicitly prioritizes actual UI in the first three screenshots.

New company **Proof Triad** for specialist apps:

1. **Recognition proof** — the qualified user immediately recognizes their exact job/problem.
2. **Outcome proof** — actual UI shows the useful result the product produces.
3. **Specialist proof** — one real domain-specific hard case demonstrates competence beyond a generic tool.

Later assets follow a controlled Store Proof Stack:

`recognition → outcome → specialist competence → workflow → trust/control → breadth → return value`

A screenshot slot is justified by a pre-install uncertainty it resolves, not by the mere existence of a feature.

Evidence classes:

- E1 UI evidence
- E2 computed-result evidence
- E3 workflow evidence
- E4 trust/control evidence
- E5 social/scale evidence

Company default is **E1/E2/E3/E4 before E5**. Real product evidence should dominate the first assets; awards/testimonials/generic CTA should not displace actual UI proof.

Video is optional. For sparse specialist apps, add an App Store/Play preview video only when motion materially explains core value better than stills and the maintenance/localization burden is justified. “No video” is a valid deliberate choice.

New operating rule — **Proof Before Breadth**:

`first prove fit → then prove value → then prove specialist competence → then prove trust/workflow → only then show breadth`

Operational template:

- `playbook/STORE_PROOF_REGISTRY_TEMPLATE.md`

Marketing owns intent, uncertainty, evidence, proof order and measurement. Design Studio owns visual composition, typography, crop/scale, color hierarchy, accessibility and final asset production.

## Current MintTap measurement state

- Release version: **1.0.29 RELEASED**.
- Firebase Analytics initialization / custom `app_start`: code-verified.
- Mobile Ads initialization: code-verified.
- `first_portfolio_value_ready_v1`: semantic/code boundary verified; runtime implementation **not yet verified**.
- Repeatable useful-return event: candidate specified; runtime implementation not verified.
- Home detail-return ad recreation: code-verified release-version mechanism.
- App-side Home banner impression/paid callback: not observed in audited file.
- AdMob↔Firebase automatic `ad_impression`: runtime/console linkage **UNKNOWN**.
- `lastActiveAt`: release-version coarse account-recency signal.
- Actual activation, useful-return cadence, ad impression frequency, paid value and retention/harm: **NOT YET BASELINED**.
- Codex extraction specification/schema: **READY FOR FIRST LIVE RUN**, execution handled separately.

## Measurement access and privacy rule

Preferred access ordering:

`direct first-party in-chat if available → Codex privacy-filtered bridge → manual native export → zero-cost third-party bridge if justified → paid connector only after proven need`

Never commit Firebase credentials, UID/email, raw `user_pseudo_id`, per-user investment data, raw device identifiers or stable pseudonymous user rows to the marketing repository.

Default exported minimum cell size: **5**. Missing/unavailable data must never be silently converted to zero.

## Two parallel operating tracks

### Track A — live measurement execution

Handled independently through Codex/Firebase. When a validated `live_data/minttap/measurement_snapshot_v1.json` appears, Marketing Manager will consume it and open evidence-based measurement/monetization decisions.

Marketing research does **not** pause while waiting for Track A.

### Track B — continuing marketing research and system building

1. Build evidence-based Intent Route candidates from recurring community/search/content problems rather than channel labels.
2. Use the Proof Triad/Store Proof Stack to evaluate Store creative and avoid generic feature dumping.
3. Audit MintTap's actual current App Store/Google Play asset sequence against the proof framework before recommending redesign.
4. Deepen community question-mining methodology so Reddit/blog activity feeds route discovery rather than repetitive promotion.
5. Define source-package taxonomy for Apple campaign links and Google UTM tracking without over-fragmenting sparse traffic.
6. Continue selective social research only where a target-qualified audience and routing role can be demonstrated.
7. Coordinate visual Store assets with Design Studio and owned-web execution with Web Manager; Marketing owns audience/problem/promise/evidence requirements.
8. Continue LogMate pre-launch research without making claims ahead of product implementation.

## Immediate next research targets

Priority order unless new evidence changes the queue:

1. **Community → intent-route evidence mining** — rigorous method to turn repeated Reddit/blog/search questions into route candidates and content decisions while respecting promotion rules.
2. **Source-package measurement taxonomy** — stable Apple campaign / Google UTM naming and consolidation rules for sparse traffic.
3. **Specialist localization semantics** — adapt professional terminology/claims by market rather than literal translation.
4. **MintTap Store proof audit** — audit actual live listing creative only after collecting current Store assets/evidence; hand visual remediation to Design Studio.
5. **MintTap route inventory** — only after enough community/search/content evidence exists to avoid speculative segmentation.
6. **LogMate launch-route/proof inventory** — only after implemented capabilities are sufficiently established.

## Major unresolved questions

### MintTap

Actual runtime event inventory; AdMob↔Firebase linkage; activation/useful-return telemetry; Home ad revenue/harm; Store/search/source baseline; recurring community/search intent distribution; actual current Store Proof Triad quality; content freshness and claim inventory; Search Console baseline; Store experiment resolution.

### LogMate

Production local-ledger/persistence; validation of FlightRecord first value; launch geography/segment/regulatory boundaries; demand/competitor/import priorities; analytics implementation; workflow/retention cadence; ad model; pilot observations; professional-community permissions; regulatory authority mapping; launch traffic ceiling.

### Company-wide

Native Firebase/GA4 access path for this chat; measured labor capacity; maintenance demand; long-run ad revenue per retained user; empirical stop thresholds; populated claim/permission ledgers; social qualified-response baselines; reusable launch records; proof that reusable assets reduce later labor; evidence that routed Store experiences improve downstream user quality rather than Store conversion alone.

## Progress interpretation

Do not report progress by file count. The objective is a trustworthy reusable operating system for specialist-app growth. Missing live evidence remains explicitly unknown. Research should move to the next material operating gap rather than repeat established theory.
