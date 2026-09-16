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
- `playbook/COMMUNITY_PERMISSION_LEDGER_TEMPLATE.md`
- `playbook/SOURCE_PACKAGE_REGISTRY_TEMPLATE.md`
- `playbook/SPECIALIST_LOCALIZATION_TERM_LEDGER_TEMPLATE.md`
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

Sparse-niche acquisition measurement uses a cross-platform Source Package above Apple/Google native parameters. Rules: **Package Before Parameter**, **Decision Before Granularity**, **Accumulate Before Splitting**, **Missing Is Not Zero**.

### 047 — MintTap activation-barrier cross-functional diagnosis
`research/047_minttap_activation_barrier_cross_functional_diagnosis.md`

Highest-priority live product diagnosis. Cross-functional evidence converges on activation/time-to-first-value as the strongest current bottleneck hypothesis rather than simple promotion shortage. Canonical remediation brief: `playbook/MINTTAP_CROSS_FUNCTIONAL_ACTIVATION_REMEDIATION_BRIEF.md`.

### 048 — specialist localization semantics
`research/048_specialist_localization_semantics.md`

Localization for narrow professional apps is semantic governance, not translation. Rules: **Meaning Before Wording**, **Locale Is Not Market**, **Proof Travels With the Claim**, **Domain Review Before Scale**, **No Compliance by Translation**.

### 049 — community permission operations
`research/049_community_permission_operations.md`

Community marketing now has an action-specific permission model rather than a binary community-level allowed/blocked state:

`community × action × disclosure × destination × account standing × current rule state → permission state`

Permission ladder separates native help, product mention, contextual linking, explicit announcement, research/usability recruitment, direct outreach and automation. `NOT_STATED` is not permission; observed competitor precedent is not permission evidence. Research recruitment is treated as its own permissioned commercial-interest action rather than a loophole around self-promotion rules.

New rules: **Permission Before Distribution**, **Action-Specific Permission**, **Native Value Before Exit**, **Disclosure Before Product Mention**, **Research Is a Permissioned Action**, **Removal Updates the Ledger**, **Trust Before Volume**.

Current Reddit Help (checked 2026-09-16) confirms promotional content is not inherently spam but communities may prohibit it or impose their own limits; repeated/unwanted/unsolicited mass behavior is spam; users should check community-specific rules and contact moderators when uncertain. Reddit also prohibits unauthorized scraping/data collection and unsolicited automated outreach. Operational artifact: `playbook/COMMUNITY_PERMISSION_LEDGER_TEMPLATE.md`.

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

## Three parallel operating tracks

### Track A — live measurement execution

1. Resolve GA4 property discovery/read permission without guessing IDs or modifying production configuration.
2. Continue aggregate Firestore snapshots until `lastActiveAt` coverage is stable enough for cohort interpretation.
3. Once GA4 is readable, retrieve event inventory, version/platform distribution, core lifecycle events, automatic `ad_impression`, and aggregate ad revenue.
4. Add/verify semantic first-value measurement in the remediation release.

### Track B — continuing marketing research/system building

1. Populate community permission rows only for concrete MintTap/LogMate communities actually selected; re-check rules before material activity.
2. Apply semantic localization ledger to actual high-risk terminology only when capability/market evidence exists.
3. Preserve Intent Route, Store Proof and Source Package governance.
4. Develop controlled Store/community growth plans that can restart once activation improves.
5. Continue LogMate pre-launch research without claims ahead of implementation.

### Track C — MintTap activation / retention remediation — HIGHEST LIVE PRODUCT PRIORITY

Tranche 1 remains: defer notification permission; auto-select sole portfolio subject to invariant review; expose Import and Manual as peer first-data paths; preserve Demo protected-action intent into sign-in/setup; implement/verify semantic first-value telemetry; relocate Home inline ad after a complete value block if low risk.

Tranche 2 remains structural onboarding/Home simplification and human validation. Tranche 3 is controlled acquisition restart only after activation credibility improves.

## Acquisition policy while activation is unresolved

Do not stop marketing learning, useful community participation or content research. But do not maximize installs into the current high-friction path. Use scarce niche traffic primarily for demand/intent research, usability recruitment, problem-language validation, community trust and small source-package baselines. Any usability recruitment in third-party communities requires its own permission state; calling an activity “research” does not bypass community promotion/survey rules.

## Immediate next research / operating targets

1. **MintTap concrete community permission pilot:** identify only genuinely relevant target communities, capture current rules/pinned threads, and populate action-specific permission states without assuming promotion/recruitment rights.
2. **Track C execution:** continue bounded engineering/design review of the six Tranche-1 activation-rescue changes.
3. **MintTap localization ledger pilot:** populate only high-risk terms from verified product/tax evidence.
4. **MintTap live Store proof audit:** after first-use remediation direction is fixed, audit current listing against Proof Triad and Import discoverability.
5. **Controlled user validation:** prepare sanitized Import/manual task protocol; recruitment only where explicitly/conditionally permitted.
6. **LogMate community permission pilot:** only for concrete pilot communities selected for workflow/terminology validation.

## Major unresolved questions

### MintTap

GA4 property access; historical install denominator; runtime event inventory; auth/onboarding abandonment; demo→real conversion; Import discovery; manual-vs-import time-to-first-value; AdMob↔Firebase linkage; activation/useful-return telemetry; stable `lastActiveAt` coverage; Store/search/source baseline; exact permission states of target YieldMax communities; live Store Proof quality; whether Korean/English terminology conflates distribution/dividend or ROC/tax treatment; whether Option B improves real task performance.

### LogMate

Production persistence; first-value validation; launch geography/segment/regulatory boundaries; import priorities; analytics; retention cadence; ad model; exact permission states of selected pilot communities; regulatory authority mapping; terminology conventions by target market; launch traffic ceiling.

### Company-wide

Native Firebase/GA4 access path; measured labor capacity; long-run ad revenue per retained user; empirical stop thresholds; populated permission/claim/term ledgers; social qualified-response baselines; reusable launch records; evidence that activation and localization changes improve downstream user quality rather than Store conversion alone.

## Progress interpretation

Do not report progress by file count. The current highest-value problem remains whether a target specialist user can reach personal first value with acceptable effort and understand why to return. Marketing learning continues, but activation remediation has priority over scaling acquisition until evidence changes that conclusion.
