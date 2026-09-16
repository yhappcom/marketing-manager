# Marketing Manager Status

Last updated: 2026-09-17

## Phase
Foundation, Sparse-Niche Decision Science, and Application Readiness V1 are complete. General theory is frozen by default; new work follows live product evidence, authoritative platform changes, framework failures, or operational gaps.

Canonical growth chain:
`relevant demand → credible promise → qualified acquisition → meaningful activation → repeated core value → sustainable ad-bearing use`

## Operating context
MintTap and LogMate serve narrow specialist audiences. Default to little/no direct cash spend. Store, owned/editorial, permission-respecting communities and selective evidence-gated social are the core acquisition system. Advertising is the intended monetization path, subject to usability, trust, retention, accessibility, performance and policy.

## MintTap live state
MintTap 1.0.29 is released. Release implementation reference remains `736bbc99a41c14130d82aeaa17ac81f0fc835a65` unless newer first-party evidence supersedes it.

Owner-observed sustained use remains a critical activation warning, not a numerical retention rate because the historical eligible denominator is unavailable. Measurement remains partial: first aggregate snapshot contained 129 readable profiles, 7 with `lastActiveAt`, 122 missing. GA4 property access and aggregate ad-revenue evidence remain unresolved. Rule: **Telemetry Coverage Before Retention**.

## Canonical post-freeze work
- 042 Cross-surface intent routing.
- 043 Specialist Store proof architecture — **Proof Before Breadth**.
- 044 Community intent evidence mining — **Evidence Before Route**, **Native Help Before Promotion**.
- 045 First live measurement snapshot interpretation — **Telemetry Coverage Before Retention**.
- 046 Source-package measurement taxonomy — **Package Before Parameter**, **Decision Before Granularity**, **Accumulate Before Splitting**, **Missing Is Not Zero**.
- 047 MintTap activation-barrier cross-functional diagnosis.
- 048 Specialist localization semantics — **Meaning Before Wording**, **Locale Is Not Market**, **Proof Travels With the Claim**, **Domain Review Before Scale**, **No Compliance by Translation**.
- 049 Community permission operations.
- 050 MintTap concrete community permission pilot — **Fit Does Not Grant Permission**.
- 051 Store Proof × Activation Handoff — **Activation Before Conversion Optimization**, **Expectation Cost Is Product Cost**, **Mature-State Screens Require Path Evidence**.
- 052 Sparse-Niche Controlled Activation Validation — **Discovery Before Estimation**, **First Value Not Form Completion**, **Fresh Eyes for Discoverability**, **Fix Blockers Before Scaling Traffic**, **Triangulate Sparse Evidence**.
- 053 Post-First-Value Ad Monetization Guardrails — **First Value Before Monetization**, **Value Block Integrity**, **Transition Not Interruption**, **Revenue Per Retained User Not Impressions Per Session**.
- 054 MintTap 1.0.29 Home Ad Value-Block Mapping — **Monetization Boundary Must Follow Comprehension Boundary**.
- 055 Activation Remediation Acceptance Architecture — **Semantic Friction Before Mechanical Friction**, **Acceptance Before Implementation**, **Invariant Before Convenience**, **Acquisition Restart Is a Gate**.
- 056 Semantic First-Value Measurement Contract — **Semantic Boundary Before Funnel Metric**.

## 056 — semantic first-value contract + controlled fixtures
`research/056_semantic_first_value_measurement_contract.md`
`playbook/MINTTAP_FIRST_VALUE_VALIDATION_FIXTURES_V1.md`

MintTap first value is now specified as a product-domain boundary rather than a convenient UI completion event:
`eligible real portfolio context + accepted real data + successful derived personal result render`.

Candidate aggregate event: `first_portfolio_value`. It must not fire from sign-in, onboarding completion, transaction submit, file parse/import completion or Home open alone. Demo/sample contexts are excluded. Parameters default to none; if route evidence is decision-critical, only bounded enums such as `manual|import` are eligible. Ticker, holdings, quantities, prices, tax/distribution values, portfolio names, file names, email/UID and other financial/identifying data are excluded.

Deduplication is a business-semantic requirement independent of Analytics delivery. Engineering must explicitly define reinstall, logout/account change, deletion, multi-device and consent-transition eligibility before implementation; Marketing does not invent these semantics. Existing users are not retrospectively backfilled from holdings or `lastActiveAt`.

Controlled validation fixtures M1 and I1 now provide synthetic Manual and Import tasks without exposing participant brokerage records. Small-N observations remain failure-mode discovery, not population estimation.

## Parallel tracks

### Track A — measurement
Resolve GA4 discovery/read access without guessing IDs or modifying production configuration. Continue privacy-filtered aggregate Firestore snapshots until recency coverage stabilizes. Engineering review/implementation of the 056 first-value contract is now a prerequisite for interpreting activation. Verify placement-level aggregate ad evidence and aggregate ad revenue before monetization experiments.

### Track B — marketing learning
Continue reusable niche-launch systems from actual product evidence. Community permission work is action-triggered rather than generic. Continue LogMate pre-launch work without claims ahead of implementation. Advertising research proceeds through actual workflow/value-block evidence rather than generic format comparisons.

### Track C — MintTap activation / retention remediation — highest live-product priority
Tranche 1 remains: defer notification permission; auto-select a sole portfolio subject to invariant review; expose Import and Manual as peer first-data paths; preserve Demo protected-action intent through sign-in/setup; implement/verify semantic first-value telemetry; relocate the Home inline ad after a complete value block if low risk.

Tranche 1 has explicit acceptance architecture plus synthetic Manual/Import validation fixtures. Tranche 2 is structural onboarding/Home simplification plus fresh-user retesting. Tranche 3 is controlled acquisition restart only after credible V1–V4 performance and telemetry readiness; release date alone does not open the acquisition gate.

## Immediate next targets
1. Perform an engineering-facing invariant audit for the 056 event: exact trigger location, persistence/deduplication semantics, reinstall/logout/account-switch/deletion/multi-device/consent behavior.
2. Convert M1/I1 fixture specification into implementation-ready CSV/XLSX artifacts only when the actual Import schema is verified; do not guess column requirements.
3. Audit remaining 1.0.29 first-session interruptions/defaults only where code evidence materially changes Tranche-1 acceptance conditions.
4. Audit exact current live Store creative when first-party assets are available.
5. Run a MintTap high-risk localization ledger pilot using verified specialist terminology only.
6. Build LogMate Promise-to-Value and pre-launch acceptance maps only from implemented capabilities.

## Unresolved questions
MintTap: GA4 access; historical install denominator; auth/onboarding abandonment; demo-to-real conversion; Import discovery and canonical file schema; manual-vs-import qualitative first-value performance; first-value event persistence/eligibility semantics; AdMob↔Analytics linkage; aggregate ad revenue; actual Home ad request/impression frequency after detail returns; useful-return telemetry; stable recency coverage; Store/search/source baseline; current r/YieldMaxETFs action permissions; exact live Store assets; specialist terminology semantics; real task performance after proposed changes; exact invariants for sole-portfolio auto-selection and Demo intent continuation.

LogMate: production persistence; first-value validation; launch geography/segment/regulatory boundaries; import priorities; analytics; retention cadence; ad model; selected community permissions; regulatory mapping; terminology conventions; launch traffic ceiling.

Company-wide: measured labor capacity; long-run ad revenue per retained user; empirical stop thresholds; populated permission/claim/term/ad-value-block ledgers; social qualified-response baselines; reusable launch records; evidence that activation and monetization changes improve sustainable downstream value rather than short-run impressions or Store conversion alone.

## Progress interpretation
Do not report progress by file count. The highest-value question remains whether a target specialist user can reach personal first value with acceptable effort, understand why to return, and then encounter monetization only at contextually legitimate boundaries. Small-N research discovers failure modes; it does not manufacture percentages. Weak activation is not repaired by increasing ad pressure, reducing taps without semantic clarity, or scaling traffic before the acquisition gate is earned.