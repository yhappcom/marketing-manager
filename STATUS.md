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
- 057 MintTap First-Value Engineering Invariant Audit — **Tutorial State Is Not Measurement State**, **Attainment State Is Not Observation State**, **Durable Identity Before Deduplication**, **Render Boundary Before Route Boundary**, **Historical Unknown Stays Unknown**.
- 058 MintTap Import Schema → Activation Fixture — **Schema Before Fixture**, **Parse Success Is Not Activation**, **Remove Confounds Before Comparing Routes**, **Currency Is an Activation Variable**.
- 059 Route Discovery vs Route Efficiency Experiment Design — **Separate Discovery From Execution**, **Economic Equivalence Before Route Comparison**, **Prepared Input Is a Boundary, Not Free Work**, **Comprehension Beats Stopwatch**.
- 060 MintTap 1.0.29 Import UI Activation Path Audit — **Route Availability Is Not Route Discoverability**, **Happy Path Before Exception Path**, **Ingestion Is Not Value**, **Teach Both Before Optimizing Either**.

## 060 — verified Import route asymmetry
`research/060_minttap_1_0_29_import_ui_activation_path_audit.md`

Release-code access is restored and the actual 1.0.29 Import UI path is now audited. Import is exposed as a `CSV/XLSX` navigation row inside Settings. Transaction History's zero-data state and first-transaction tutorial instead teach Add Transaction and open the Manual entry screen. Import therefore exists as a technically substantial feature but is not a peer-discoverable first-data route in the audited release.

Once Import is found, the screen loads portfolios/tickers and auto-selects a valid supplied portfolio or otherwise the first available portfolio. It supports localized CSV/XLSX template export, file selection, parse/validation, substantive review/error classification and batch save. For schema-valid input the happy path does **not** include a mandatory column-mapping screen: `_pickFile()` parses with `mapping: null`; template-mismatch handling is an exception path. Canonical funnel language is corrected to `discover Import → optional template preparation → select file → parse/validate → review → save → personalized result → comprehension`.

Import save remains upstream of semantic first value. Study D therefore measures unprompted route discovery from a common post-onboarding state; Study E measures intrinsic execution only after route entry with prepared N1 input. End-to-end Import preparation remains a separate study before ease/speed claims.

## Parallel tracks

### Track A — measurement
Resolve GA4 discovery/read access without guessing IDs or modifying production configuration. Continue privacy-filtered aggregate Firestore snapshots until recency coverage stabilizes. Hand off 056+057 first-value contract/invariants for engineering review; implementation remains NOT VERIFIED. Verify placement-level aggregate ad evidence and aggregate ad revenue before monetization experiments.

### Track B — marketing learning
Continue reusable niche-launch systems from actual product evidence. Community permission work is action-triggered rather than generic. Continue LogMate pre-launch work without claims ahead of implementation. Advertising research proceeds through actual workflow/value-block evidence rather than generic format comparisons.

### Track C — MintTap activation / retention remediation — highest live-product priority
Tranche 1 remains: defer notification permission; auto-select a sole portfolio subject to invariant review; expose Import and Manual as peer first-data paths; preserve Demo protected-action intent through sign-in/setup; implement/verify semantic first-value telemetry; relocate the Home inline ad after a complete value block if low risk.

The peer-route proposal now has direct release-code evidence: Manual is explicitly taught in the zero-data Transaction History path while Import is nested in Settings despite having localized templates, CSV/XLSX parsing, validation and review. This shifts the first Import intervention toward surface-level discoverability parity before redesigning the Import engine. Exact UI treatment remains subject to Product/Design review and fresh-user validation.

Tranche 1 has explicit acceptance architecture plus synthetic Manual/Import validation specifications. Import schema uncertainty is closed for CSV; the USD N1 Import fixture is executable. Direct Manual-vs-Import comparison has an economically equivalent N1 Manual counterpart and explicit Study D/Study E boundaries. Tranche 2 is structural onboarding/Home simplification plus fresh-user retesting. Tranche 3 is controlled acquisition restart only after credible V1–V4 performance and telemetry readiness; release date alone does not open the acquisition gate.

## Immediate next targets
1. Convert 060 into a concrete fresh-user Study D observation sheet and Study E execution sheet, including explicit start/stop boundaries and S0–S3 coding.
2. Audit post-Import-save navigation/reload behavior to determine the actual code path from successful batch save to semantic first value; do not assume save automatically presents Home results.
3. Verify localized Import/review semantics for KRW and at least one non-English path; currency-dependent required fields are a known activation variable.
4. Engineering handoff/review for 056+057: exact durable first-value marker, atomic compare/set, meaningful-result predicate, deletion epoch and Analytics-consent behavior.
5. Audit exact current live Store creative when first-party assets are available.
6. Run a MintTap high-risk localization ledger pilot using verified specialist terminology only.
7. Build LogMate Promise-to-Value and pre-launch acceptance maps only from implemented capabilities.

## Unresolved questions
MintTap: GA4 access; historical install denominator; auth/onboarding abandonment; demo-to-real conversion; fresh-user Import discovery performance; Manual-vs-Import qualitative first-value performance; end-to-end Import preparation burden; CSV-vs-XLSX UX equivalence; localized Import comprehension; post-save path to personalized result; first-value implementation and exact result predicate; atomic persistence/eligibility semantics; account-deletion identity epoch; AdMob↔Analytics linkage; aggregate ad revenue; actual Home ad request/impression frequency after detail returns; useful-return telemetry; stable recency coverage; Store/search/source baseline; current r/YieldMaxETFs action permissions; exact live Store assets; specialist terminology semantics; real task performance after proposed changes; exact invariants for sole-portfolio auto-selection and Demo intent continuation; whether peer Manual/Import exposure creates meaningful choice overload.

LogMate: production persistence; first-value validation; launch geography/segment/regulatory boundaries; import priorities; analytics; retention cadence; ad model; selected community permissions; regulatory mapping; terminology conventions; launch traffic ceiling.

Company-wide: measured labor capacity; long-run ad revenue per retained user; empirical stop thresholds; populated permission/claim/term/ad-value-block ledgers; social qualified-response baselines; reusable launch records; evidence that activation and monetization changes improve sustainable downstream value rather than short-run impressions or Store conversion alone.

## Progress interpretation
Do not report progress by file count. The highest-value question remains whether a target specialist user can reach personal first value with acceptable effort, understand why to return, and then encounter monetization only at contextually legitimate boundaries. Small-N research discovers failure modes; it does not manufacture percentages. Weak activation is not repaired by increasing ad pressure, reducing taps without semantic clarity, or scaling traffic before the acquisition gate is earned.