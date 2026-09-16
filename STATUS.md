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

Store discovery changes, release-source recovery, activation/ad lifecycle, 1.0.29 release correction, activation cohort design, zero-cash measurement access architecture and Codex↔Firebase extraction contract remain canonical. The actual Firebase/Codex extraction is a separate execution track and does not block research.

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

Community marketing is now modeled as a **permission-constrained demand-sensing system**, not a link-distribution tactic.

Current Reddit guidance confirms promotional content is not inherently spam, but individual communities can prohibit it or impose self-promotion rules. Repeated/unwanted mass posting is prohibited. Reddit also prohibits unauthorized scraping, so demand mining must use permitted browsing/participation, authorized interfaces and aggregate/manual evidence rather than a bulk scraper.

New evidence ladder:

`C1 isolated expression → C2 independent recurrence → C3 cross-surface corroboration → C4 behavioral validation → C5 durable economic validation`

A single post/question can justify a useful answer or vocabulary note, not a dedicated Store route. Route creation normally requires at least C2 plus a genuinely distinct product/Store story; C3 is preferred.

New rules:

**Evidence Before Route**

`community/search expression → independent recurrence → corroborated intent → truthful product proof → route`

**Native Help Before Promotion**

External participation should solve the user's problem natively, disclose relevant affiliation and link only where community rules/context permit. Optimize qualified conversations, reusable problem evidence and trust before outbound clicks.

Evidence must be normalized by job, not keyword alone:

`audience + trigger/context + desired outcome + specialist constraint`

Independence and durability are explicit. Multiple comments in one viral thread do not equal multiple independent demand observations. Event-driven finance/aviation bursts are separated from evergreen/periodic demand.

Owned communities such as r/MintTapforYieldMax are marked separately so company-seeded discussion is not recycled as independent market demand.

Operational artifact: `playbook/COMMUNITY_INTENT_EVIDENCE_REGISTRY_TEMPLATE.md`.

## Current MintTap measurement state

- Release version: **1.0.29 RELEASED**.
- Firebase Analytics initialization / custom `app_start`: code-verified.
- Mobile Ads initialization: code-verified.
- semantic first-value boundary: code-verified; runtime event implementation not yet verified.
- useful-return telemetry, automatic `ad_impression`, aggregate paid value and retention/harm: not yet baselined.
- Firestore `lastActiveAt`: coarse account-recency signal only.
- Codex extraction specification/schema: ready; execution handled separately.

## Measurement access and privacy rule

Preferred access ordering:

`direct first-party in-chat if available → Codex privacy-filtered bridge → manual native export → zero-cost third-party bridge if justified → paid connector only after proven need`

Never commit credentials, UID/email, raw `user_pseudo_id`, per-user investment data, raw device identifiers or stable pseudonymous user rows to the marketing repository. Default exported minimum cell size: 5. Missing data is never silently converted to zero.

## Two parallel operating tracks

### Track A — live measurement execution

Handled independently through Codex/Firebase. Marketing Manager consumes a validated aggregate snapshot when available.

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

Runtime event inventory; AdMob↔Firebase linkage; activation/useful-return telemetry; ad revenue/harm; Store/search/source baseline; actual independent community/search intent distribution; target-community promotion permissions; live Store Proof Triad quality; content freshness/claim inventory; Search Console baseline.

### LogMate

Production local-ledger/persistence; first-value validation; launch geography/segment/regulatory boundaries; demand/competitor/import priorities; analytics; retention cadence; ad model; pilot observations; professional-community permissions; regulatory authority mapping; launch traffic ceiling.

### Company-wide

Native Firebase/GA4 access path for this chat; measured labor capacity; maintenance demand; long-run ad revenue per retained user; empirical stop thresholds; populated permission/claim ledgers; social qualified-response baselines; reusable launch records; evidence that routes improve downstream user quality rather than Store conversion alone.

## Progress interpretation

Do not report progress by file count. The objective is a trustworthy reusable operating system for specialist-app growth. Missing live evidence remains explicitly unknown. Research moves to the next material operating gap rather than repeating established theory.
