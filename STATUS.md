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
- `playbook/COMMUNITY_INTENT_EVIDENCE_REGISTRY_TEMPLATE.md`
- `playbook/MINTTAP_CODEX_MEASUREMENT_EXTRACTION_V1.md`
- `curriculum/APPLICATION_READINESS_INTEGRATION_GATE.md`

Minimum material-asset handoff tuple:

`source evidence/claim IDs → asset/change ID → surface + permission/eligibility state → native measurement ID/definition → linked Decision Record`

Unavailable elements remain `UNKNOWN/NOT_INSTRUMENTED`. Attribution is not reconstructed after the fact.

## Canonical MintTap release state

**MintTap 1.0.29 is RELEASED.**

First-party owner information supersedes earlier public-crawler uncertainty. Repository branch `1.0.29`, previously audited at head `736bbc99a41c14130d82aeaa17ac81f0fc835a65`, is the current release-version implementation reference for marketing/measurement analysis unless newer first-party release information supersedes it.

## Post-freeze live-readiness / operating deltas

### 029–041 — release, instrumentation, measurement access

Store discovery changes, release-source recovery, activation/ad lifecycle, 1.0.29 release correction, activation cohort design, zero-cash measurement access architecture and Codex↔Firebase extraction contract remain canonical.

### 042 — cross-surface intent routing
`research/042_cross_surface_intent_routing_for_niche_apps.md`

Sparse niche apps should use:

`many content assets → few source campaigns → very few durable intent routes → one coherent first-value promise`

Route Consolidation Rule:

`distinct intent × distinct Store story × measurable traffic × supported product value > maintenance + fragmentation cost`

Operational artifact: `playbook/INTENT_ROUTE_REGISTRY_TEMPLATE.md`.

### 043 — specialist Store proof architecture
`research/043_specialist_store_proof_architecture.md`

The Store page is an ordered proof system, not a feature gallery.

Proof Triad:

1. Recognition proof — exact specialist job/problem.
2. Outcome proof — visible useful product result.
3. Specialist proof — real hard-case/domain competence.

Store Proof Stack:

`recognition → outcome → specialist competence → workflow → trust/control → breadth → return value`

Rule: **Proof Before Breadth**. Operational artifact: `playbook/STORE_PROOF_REGISTRY_TEMPLATE.md`.

### 044 — community → intent-route evidence mining
`research/044_community_intent_evidence_mining.md`

Community marketing is modeled as a permission-constrained demand-sensing system, not a link-distribution tactic.

Evidence ladder:

`C1 isolated expression → C2 independent recurrence → C3 cross-surface corroboration → C4 behavioral validation → C5 durable economic validation`

Rules: **Evidence Before Route** and **Native Help Before Promotion**. Operational artifact: `playbook/COMMUNITY_INTENT_EVIDENCE_REGISTRY_TEMPLATE.md`.

### 045 — first live measurement snapshot interpretation
`research/045_first_live_measurement_snapshot_interpretation.md`

The first validated `live_data/minttap/measurement_snapshot_v1.json` is now present. The Codex/Firebase→GitHub→Marketing Manager bridge is therefore **PROVEN OPERATIONAL** for privacy-filtered aggregate first-party evidence.

Observed source state:

- Firestore: AVAILABLE.
- GA4 Data API: `BLOCKED_GA_PROPERTY_ID` because the active Google principal could not discover the linked property through Firebase Management (`analyticsDetails` returned HTTP 403).
- BigQuery: no accessible dataset/export observed; recorded as `NOT_LINKED` in the snapshot.
- AdMob↔Firebase/Analytics linkage and runtime revenue evidence: NOT VERIFIED.

First live account-recency aggregate:

- 129 readable profiles;
- 7 profiles with `lastActiveAt`;
- 122 profiles missing `lastActiveAt`;
- 6 of the recorded subset within 7 days;
- all 7 recorded profiles within 30 days;
- no invalid/future timestamp in the aggregate;
- small cells suppressed under minimum cell size 5.

Critical interpretation: `lastActiveAt` is now **RUNTIME-OBSERVED / PARTIAL-COVERAGE**, but the current 7-account subset is not a valid complete retention cohort. Missing `lastActiveAt` is not inactive, and observed users are not automatically the eligible denominator.

New company rule: **Telemetry Coverage Before Retention**.

`eligible population → observed telemetry coverage → stable coverage window → cohort return metric`

No channel, Store-route, ad-frequency or retention decision should change from this first recency snapshot alone.

## Current MintTap measurement state

- Release version: **1.0.29 RELEASED**.
- Firebase Analytics initialization / custom `app_start`: code-verified.
- Mobile Ads initialization: code-verified.
- semantic first-value boundary: code-verified; runtime event implementation not yet verified.
- useful-return telemetry: not baselined.
- Home detail-return ad recreation: code-verified.
- automatic `ad_impression` / aggregate ad revenue: UNKNOWN because GA4 property access remains blocked and AdMob↔Firebase linkage is not verified.
- Firestore `lastActiveAt`: **runtime-observed with partial coverage**.
- readable profile population in first snapshot: 129; 7 have recorded recency, 122 missing.
- account-recency retention baseline: **NOT YET VALID**.
- Codex extraction bridge: **PROVEN OPERATIONAL**.
- first live aggregate snapshot: **AVAILABLE / VALIDATED**.

## Measurement access and privacy rule

Preferred access ordering:

`direct first-party in-chat if available → Codex privacy-filtered bridge → manual native export → zero-cost third-party bridge if justified → paid connector only after proven need`

Never commit credentials, UID/email, raw `user_pseudo_id`, per-user investment data, raw device identifiers or stable pseudonymous user rows to the marketing repository. Default exported minimum cell size: 5. Missing data is never silently converted to zero.

For newly introduced telemetry in an existing population:

`missing != inactive`

and

`observed users != eligible cohort`.

## Two parallel operating tracks

### Track A — live measurement execution

First snapshot completed successfully.

Next measurement priorities:

1. Resolve GA4 property discovery/read permission without guessing the property ID or modifying production configuration.
2. Continue periodic aggregate Firestore snapshots to observe `lastActiveAt` coverage growth before treating it as retention evidence.
3. Once GA4 is readable, retrieve actual event inventory, version/platform distribution, `first_open/session_start/user_engagement/app_start`, automatic `ad_impression`, and aggregate ad revenue.
4. Keep app redeploy unnecessary until existing telemetry is exhausted.
5. Do not create per-user exports or stable pseudonymous GitHub rows.

### Track B — continuing marketing research/system building

1. Apply evidence ladder and permission registry to future community/search observations.
2. Use content as a lower-cost validation layer before multiplying Store routes.
3. Preserve Proof Triad/Store Proof Stack for route-specific Store creative.
4. Develop stable source-package taxonomy for Apple campaign links and Google UTM tracking without sparse-data fragmentation.
5. Develop specialist localization semantics rather than literal translation.
6. Populate MintTap route inventory only from sufficient independent evidence.
7. Continue LogMate pre-launch research without claims ahead of implementation.
8. Coordinate visuals with Design Studio and owned-web execution with Web Manager.

## Immediate next research targets

1. **Source-package measurement taxonomy** — stable Apple campaign / Google UTM naming, consolidation and expiry rules for sparse traffic.
2. **Specialist localization semantics** — professional/tax/regulatory terminology and claims by market rather than literal translation.
3. **Community permission operations** — if needed, turn actual target-community rules into a maintained permission ledger rather than generic Reddit assumptions.
4. **MintTap route inventory** — only after enough real community/search/content evidence exists.
5. **MintTap Store proof audit** — audit actual live listing creative against verified route/proof evidence; visual remediation belongs to Design Studio.
6. **LogMate launch-route/proof inventory** — only after implemented capabilities are sufficiently established.

## Major unresolved questions

### MintTap

GA4 property access; runtime event inventory; AdMob↔Firebase linkage; activation/useful-return telemetry; ad revenue/harm; stable `lastActiveAt` coverage; valid account-recency cohort definition; Store/search/source baseline; actual independent community/search intent distribution; target-community promotion permissions; live Store Proof Triad quality; content freshness/claim inventory; Search Console baseline.

### LogMate

Production local-ledger/persistence; first-value validation; launch geography/segment/regulatory boundaries; demand/competitor/import priorities; analytics; retention cadence; ad model; pilot observations; professional-community permissions; regulatory authority mapping; launch traffic ceiling.

### Company-wide

Native Firebase/GA4 access path for this chat; measured labor capacity; maintenance demand; long-run ad revenue per retained user; empirical stop thresholds; populated permission/claim ledgers; social qualified-response baselines; reusable launch records; evidence that routes improve downstream user quality rather than Store conversion alone.

## Progress interpretation

Do not report progress by file count. The objective is a trustworthy reusable operating system for specialist-app growth. Missing live evidence remains explicitly unknown. Research moves to the next material operating gap rather than repeating established theory.