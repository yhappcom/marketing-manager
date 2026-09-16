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
- `playbook/SOURCE_PACKAGE_REGISTRY_TEMPLATE.md`
- `playbook/MINTTAP_CODEX_MEASUREMENT_EXTRACTION_V1.md`
- `curriculum/APPLICATION_READINESS_INTEGRATION_GATE.md`

Minimum material-asset handoff tuple:

`source evidence/claim IDs → asset/change ID → source package → surface + permission/eligibility state → native measurement ID/definition → linked Decision Record`

Unavailable elements remain `UNKNOWN/NOT_INSTRUMENTED`. Attribution is not reconstructed after the fact.

## Canonical MintTap release state

**MintTap 1.0.29 is RELEASED.** Repository branch `1.0.29`, previously audited at head `736bbc99a41c14130d82aeaa17ac81f0fc835a65`, remains the release-version implementation reference unless newer first-party release information supersedes it.

## Post-freeze live-readiness / operating deltas

### 042 — cross-surface intent routing
`research/042_cross_surface_intent_routing_for_niche_apps.md`

`many content assets → few source campaigns → very few durable intent routes → one coherent first-value promise`

### 043 — specialist Store proof architecture
`research/043_specialist_store_proof_architecture.md`

Store proof order: `recognition → outcome → specialist competence → workflow → trust/control → breadth → return value`. Rule: **Proof Before Breadth**.

### 044 — community → intent-route evidence mining
`research/044_community_intent_evidence_mining.md`

Evidence ladder: `C1 isolated expression → C2 independent recurrence → C3 cross-surface corroboration → C4 behavioral validation → C5 durable economic validation`. Rules: **Evidence Before Route** and **Native Help Before Promotion**.

### 045 — first live measurement snapshot interpretation
`research/045_first_live_measurement_snapshot_interpretation.md`

Codex/Firebase→GitHub→Marketing Manager bridge is **PROVEN OPERATIONAL** for privacy-filtered aggregate first-party evidence. First snapshot: 129 readable profiles; 7 with `lastActiveAt`; 122 missing. The observed subset is not a valid complete retention cohort. Rule: **Telemetry Coverage Before Retention**.

### 046 — source-package measurement taxonomy
`research/046_source_package_measurement_taxonomy.md`

Sparse-niche acquisition measurement now uses a cross-platform **Source Package** above Apple/Google native parameters:

`asset → source package → intent route → Store proof → first value → useful return → sustainable ad-bearing use`

Required package tuple:

`product × route × source-family × audience/market × lifecycle-window`

New rules:

- **Package Before Parameter** — define the decision package before Apple/Google tags.
- **Decision Before Granularity** — a new measurement dimension requires a distinct decision, not merely a new post/asset.
- **Accumulate Before Splitting** — sparse specialist traffic remains consolidated until evidence and volume justify segmentation.
- **Missing Is Not Zero** — privacy thresholds, Other, unavailable fields and uninstrumented paths remain unknown/aggregated.

Apple campaign dashboard metrics are thresholded at 5 in the selected date range, making per-post campaign-token fragmentation particularly harmful for sparse traffic. Google UTM values are case-sensitive and inconsistent naming fragments reporting; Google Play also suppresses/groups low-volume acquisition data. Operational artifact: `playbook/SOURCE_PACKAGE_REGISTRY_TEMPLATE.md`.

## Current MintTap measurement state

- Release: **1.0.29 RELEASED**.
- Firebase Analytics initialization / custom `app_start`: code-verified.
- Mobile Ads initialization: code-verified.
- semantic first-value boundary: code-verified; runtime event implementation not yet verified.
- useful-return telemetry: not baselined.
- automatic `ad_impression` / aggregate ad revenue: UNKNOWN because GA4 property access remains blocked and AdMob↔Firebase linkage is not verified.
- Firestore `lastActiveAt`: runtime-observed with partial coverage.
- readable profile population: 129; 7 have recorded recency, 122 missing.
- account-recency retention baseline: **NOT YET VALID**.
- Codex extraction bridge: **PROVEN OPERATIONAL**.

## Measurement access and privacy rule

Preferred access ordering:

`direct first-party in-chat if available → Codex privacy-filtered bridge → manual native export → zero-cost third-party bridge if justified → paid connector only after proven need`

Never commit credentials, UID/email, raw `user_pseudo_id`, per-user investment data, raw device identifiers or stable pseudonymous user rows. Default exported minimum cell size: 5. `missing != inactive`; `observed users != eligible cohort`.

## Two parallel operating tracks

### Track A — live measurement execution

1. Resolve GA4 property discovery/read permission without guessing IDs or modifying production configuration.
2. Continue periodic aggregate Firestore snapshots until `lastActiveAt` coverage is stable enough for cohort interpretation.
3. Once GA4 is readable, retrieve actual event inventory, version/platform distribution, `first_open/session_start/user_engagement/app_start`, automatic `ad_impression`, and aggregate ad revenue.
4. Keep app redeploy unnecessary until existing telemetry is exhausted.

### Track B — continuing marketing research/system building

1. Apply evidence ladder and permission registry to future community/search observations.
2. Use content as a lower-cost validation layer before multiplying Store routes.
3. Preserve Proof Triad/Store Proof Stack for route-specific Store creative.
4. Apply Source Package taxonomy before creating Apple campaign tokens or Google UTM campaigns.
5. Develop specialist localization semantics rather than literal translation.
6. Populate MintTap route/package inventory only from sufficient independent evidence.
7. Continue LogMate pre-launch research without claims ahead of implementation.
8. Coordinate visuals with Design Studio and owned-web execution with Web Manager.

## Immediate next research targets

1. **Specialist localization semantics** — professional/tax/regulatory terminology and claims by market rather than literal translation.
2. **Community permission operations** — turn actual target-community rules into a maintained permission ledger when concrete target communities are selected.
3. **MintTap route + Source Package inventory** — only after sufficient real community/search/content evidence exists.
4. **MintTap Store proof audit** — audit live listing creative against verified route/proof evidence; visual remediation belongs to Design Studio.
5. **LogMate launch-route/proof inventory** — only after implemented capabilities are sufficiently established.
6. **Source-package live validation** — once native acquisition data is available, test whether current package granularity reaches observable thresholds before enabling asset-level dimensions.

## Major unresolved questions

### MintTap
GA4 property access; runtime event inventory; AdMob↔Firebase linkage; activation/useful-return telemetry; ad revenue/harm; stable `lastActiveAt` coverage; valid account-recency cohort definition; Store/search/source baseline; actual independent community/search intent distribution; target-community promotion permissions; live Store Proof Triad quality; Search Console baseline; first real Source Package volume.

### LogMate
Production local-ledger/persistence; first-value validation; launch geography/segment/regulatory boundaries; demand/competitor/import priorities; analytics; retention cadence; ad model; pilot observations; professional-community permissions; regulatory authority mapping; launch traffic ceiling.

### Company-wide
Native Firebase/GA4 access path; measured labor capacity; maintenance demand; long-run ad revenue per retained user; empirical stop thresholds; populated permission/claim ledgers; social qualified-response baselines; reusable launch records; evidence that routes/packages improve downstream user quality rather than Store conversion alone.

## Progress interpretation

Do not report progress by file count. The objective is a trustworthy reusable operating system for specialist-app growth. Missing live evidence remains explicitly unknown. Research moves to the next material operating gap rather than repeating established theory.
