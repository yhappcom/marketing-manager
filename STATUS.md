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
- `playbook/MINTTAP_CROSS_FUNCTIONAL_ACTIVATION_REMEDIATION_BRIEF.md`
- `curriculum/APPLICATION_READINESS_INTEGRATION_GATE.md`

Minimum material-asset handoff tuple:

`source evidence/claim IDs → asset/change ID → source package → surface + permission/eligibility state → native measurement ID/definition → linked Decision Record`

Unavailable elements remain `UNKNOWN/NOT_INSTRUMENTED`. Attribution is not reconstructed after the fact.

## Canonical MintTap release state

**MintTap 1.0.29 is RELEASED.** Repository branch `1.0.29`, audited at head `736bbc99a41c14130d82aeaa17ac81f0fc835a65`, remains the release-version implementation reference unless newer first-party release information supersedes it.

Owner-observed product state: the app has been released for roughly four months and only two accounts are known to show sustained use; one is the owner's separate account. This is treated as a **critical activation warning**, not a numerical retention rate, because the historical install/eligible cohort denominator is not available.

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

Sparse-niche acquisition measurement uses a cross-platform **Source Package** above Apple/Google native parameters:

`asset → source package → intent route → Store proof → first value → useful return → sustainable ad-bearing use`

Required tuple:

`product × route × source-family × audience/market × lifecycle-window`

Rules: **Package Before Parameter**, **Decision Before Granularity**, **Accumulate Before Splitting**, **Missing Is Not Zero**.

### 047 — MintTap activation-barrier cross-functional diagnosis
`research/047_minttap_activation_barrier_cross_functional_diagnosis.md`

This is now the highest-priority live product diagnosis.

Cross-functional evidence converges on **activation / time-to-first-value** as the strongest current bottleneck hypothesis, rather than a simple lack of promotion. Causal proof is still incomplete because historical GA4 funnel data is unavailable.

Exact 1.0.29 + Design Studio findings:

- Welcome provides auth plus Browse Demo, but only limited proof of why setup effort is worthwhile before sign-in.
- Browse Demo is a strong product-comprehension asset, but protected actions mostly end in a read-only message rather than preserving the user's intent into sign-in/setup.
- onboarding is configuration-first: language, country, currency, portfolio name, tax rate and notification configuration all appear before personal portfolio value;
- notification permission is requested immediately on onboarding entry, before holdings/reminder value exists;
- the first empty-Home tutorial sends users only to manual Add Transaction;
- CSV/XLSX Import is already sophisticated but is one level deeper in the Add Transaction AppBar and is not a peer first-data choice;
- onboarding already creates an initial portfolio, yet when Home is on `All Portfolios`, first Add Transaction passes no portfolio ID and the transaction screen leaves even a sole portfolio unselected;
- after first value, Home exposes many important metrics at similar priority and inserts the inline ad between summary and holdings.

Design Studio's existing MintTap audit independently diagnoses **information hierarchy, not information deficit**, and configuration-first onboarding. Its current preliminary Home direction is **Option B — Decision-First Portfolio Summary**, to be treated as a prototype baseline rather than a proven winner.

New operating rule:

`reduce obvious reversible activation friction → instrument first value → observe target users → then scale acquisition`

Canonical collaboration brief:

`playbook/MINTTAP_CROSS_FUNCTIONAL_ACTIVATION_REMEDIATION_BRIEF.md`

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
- user-observed sustained-use evidence: **critical qualitative warning; not convertible to a retention rate without denominator**.

## Measurement access and privacy rule

Preferred access ordering:

`direct first-party in-chat if available → Codex privacy-filtered bridge → manual native export → zero-cost third-party bridge if justified → paid connector only after proven need`

Never commit credentials, UID/email, raw `user_pseudo_id`, per-user investment data, raw device identifiers or stable pseudonymous user rows. Default exported minimum cell size: 5. `missing != inactive`; `observed users != eligible cohort`.

## Three parallel operating tracks

### Track A — live measurement execution

1. Resolve GA4 property discovery/read permission without guessing IDs or modifying production configuration.
2. Continue periodic aggregate Firestore snapshots until `lastActiveAt` coverage is stable enough for cohort interpretation.
3. Once GA4 is readable, retrieve actual event inventory, version/platform distribution, `first_open/session_start/user_engagement/app_start`, automatic `ad_impression`, and aggregate ad revenue.
4. Add/verify semantic first-value measurement in the remediation release; do not reconstruct it historically from weaker proxies.

### Track B — continuing marketing research/system building

1. Continue specialist-app marketing learning independently of remediation implementation.
2. Apply community evidence/permission frameworks to real target communities.
3. Preserve Intent Route, Store Proof and Source Package governance.
4. Continue specialist localization semantics rather than literal translation.
5. Develop controlled Store/community growth plans that can restart once activation improves.
6. Continue LogMate pre-launch research without claims ahead of implementation.

### Track C — MintTap activation / retention remediation — HIGHEST LIVE PRODUCT PRIORITY

#### Tranche 1 — activation rescue / relatively reversible

1. Defer onboarding notification permission until the user has holdings and the reminder benefit is understandable.
2. Auto-select the sole valid portfolio when only one exists, subject to exact invariant review.
3. Make `Import my transactions` and `Add my first holding` peer first-data paths for an empty account.
4. Turn Browse Demo protected-action attempts into a context-preserving `track my portfolio` sign-in/setup bridge rather than a dead-end read-only message.
5. Implement/verify `first_portfolio_value_ready_v1` without investment-content parameters.
6. Relocate the Home inline ad after a complete semantic value block when implementation review confirms low risk.

#### Tranche 2 — structural UX

1. Recompose onboarding around minimum-required setup and progressive disclosure while preserving calculation/data invariants.
2. Prototype and validate Design Studio Option B Home hierarchy.
3. Simplify normal Buy presentation while preserving market-price/FX automation and expert options.
4. Introduce contextual notification invitation after first value.

#### Tranche 3 — controlled growth restart

1. Refresh Store Proof Triad after activation flow is credible.
2. Evaluate CSV/XLSX Import as first-class Store/web proof because it directly reduces bootstrap cost for existing investors.
3. Align `minttap.app` setup/import/support content with the actual repaired flow.
4. Restart controlled Reddit/blog/source-package acquisition and evaluate source → Store → semantic first value, not installs alone.

## Cross-functional ownership

### Marketing Manager
Own activation economics, first-value semantics, first-data segmentation, target-user research, Store/source promise, measurement gates and acquisition restart/stop decisions.

### Design Studio
Own activation-flow interaction/layout, empty-state chooser, demo→real handoff, onboarding recomposition, Option B Home prototype, ad relocation/layout stability and accessibility/human task validation. Content Design may perform bounded terminology work but is still early in its curriculum.

### Web Manager
Its curriculum is mature, but actual `minttap.app` production state remains OPEN until verified. Once the app bootstrap flow is settled, own setup/import guidance, support/FAQ, cross-surface expectation continuity and web operational acceptance.

### Software Engineering Studio / product Codex
Software Engineering Studio remains Foundation-stage; use it for bounded contract/invariant review, not as final architectural authority. Exact 1.0.29 product code/Codex evidence controls implementation truth: onboarding prerequisites, currency invariants, sole-portfolio selection, direct Import routing, demo intent resume, notification lifecycle and once-per-account activation recording.

## Human validation requirement

Passive analytics alone is insufficient at the current user volume. Recruit approximately **5–8 target YieldMax investors if feasible** through permission-respecting zero-cash channels, using sanitized/test data so real financial disclosure is unnecessary.

Validate tasks rather than preferences:

- understand MintTap's specialist job;
- explore demo;
- decide to track own portfolio;
- complete minimum setup;
- naturally choose Import vs Manual;
- reach first personal portfolio result;
- explain portfolio outcome/distributions/payback;
- identify a real reason to return.

Capture time-to-first-value, hesitation, import discovery, wrong turns/backtracking, terminology confusion and Home comprehension. Do not claim improved UX until task evidence exists.

## Acquisition policy while activation is unresolved

Do not stop marketing learning, useful community participation or content research. But **do not maximize installs into the current high-friction path**.

Use acquisition primarily for:

- demand/intent research;
- usability participant recruitment;
- problem-language validation;
- community trust;
- small source-package baselines.

The scarce niche audience should not be consumed as unmeasured top-of-funnel traffic while first-value friction remains unresolved.

## Immediate next research / operating targets

1. **Track C execution:** bounded engineering/design review of the six Tranche-1 activation-rescue changes.
2. **Specialist localization semantics:** continue the next pure research block in parallel.
3. **Community permission operations:** identify target YieldMax communities suitable for research/usability recruitment and maintain their actual rules.
4. **MintTap live Store proof audit:** after first-use remediation direction is fixed, audit current listing against actual Proof Triad and Import discoverability.
5. **Web activation-support audit:** verify actual `minttap.app` state before assigning setup/import content work.
6. **Controlled user validation:** prepare sanitized Import/manual test data and task script for 5–8 target users.
7. **LogMate research:** continue independently without importing MintTap-specific solutions uncritically.

## Major unresolved questions

### MintTap

GA4 property access; historical install denominator; runtime event inventory; auth-provider abandonment; onboarding abandonment; demo→real conversion; Import discovery; manual-vs-import time-to-first-value; AdMob↔Firebase linkage; activation/useful-return telemetry; ad revenue/harm; stable `lastActiveAt` coverage; valid account-recency cohort definition; Store/search/source baseline; target-community permissions; live Store Proof quality; Search Console baseline; whether Option B improves real task performance.

### LogMate

Production local-ledger/persistence; first-value validation; launch geography/segment/regulatory boundaries; demand/competitor/import priorities; analytics; retention cadence; ad model; pilot observations; professional-community permissions; regulatory authority mapping; launch traffic ceiling.

### Company-wide

Native Firebase/GA4 access path; measured labor capacity; maintenance demand; long-run ad revenue per retained user; empirical stop thresholds; populated permission/claim ledgers; social qualified-response baselines; reusable launch records; evidence that cross-functional activation remediation improves downstream user quality rather than cosmetic Store conversion alone.

## Progress interpretation

Do not report progress by file count. The current highest-value problem is whether a target specialist user can reach personal first value with acceptable effort and understand why to return. Marketing learning continues, but product activation remediation has priority over scaling acquisition until evidence changes that conclusion.