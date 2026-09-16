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
- 061 Sparse-Niche Activation Observation Protocol — **Participant Evidence Before Percentages**, **Goal Language Before UI Language**, **Boundary Discipline Before Timing**, **Comprehension Is an Outcome**, **Intervention Is Data**.
- 062 MintTap post-Import-save → first-value handoff — **Save Confirmation Is Not Value Confirmation**, **Background Readiness Is Not User Attainment**, **Completion Signals Must Point Toward Value**, **Measure Through the Handoff**.

## 062 — post-Import value handoff verified
`research/062_minttap_post_import_save_to_first_value_handoff.md`
`playbook/MINTTAP_ACTIVATION_OBSERVATION_SHEET_V1.md` updated with post-save handoff fields.

Release code verifies that a successful Import saves the batch, calls `markUserDataChanged`, clears the selected-file state, displays the saved-import panel/success snackbar, and remains on `TransactionImportReviewScreen`. It does not automatically navigate to Home or present the personalized result. Meanwhile `UserDataChangeNotifier` clears caches/notifies listeners/prewarms derived data, and mounted Home listens for the matching revision and force-refreshes its summary. Therefore the data can be ready in the background while semantic first value remains unattained by the user.

Canonical Import activation path is now:
`discover → prepare/select → validate/review → save → post-save value handoff → personalized result presentation → comprehension`.

A successful save/snackbar is ingestion evidence only. `first_portfolio_value` must remain attached to the personalized Home result presentation boundary. Study E must continue after save and explicitly record whether the user independently reaches Home/result or mistakes save confirmation for completion.

## Parallel tracks

### Track A — measurement
Resolve GA4 discovery/read access without guessing IDs or modifying production configuration. Continue privacy-filtered aggregate Firestore snapshots until recency coverage stabilizes. Hand off 056+057 first-value contract/invariants for engineering review; implementation remains NOT VERIFIED. Verify placement-level aggregate ad evidence and aggregate ad revenue before monetization experiments.

### Track B — marketing learning
Continue reusable niche-launch systems from actual product evidence. Community permission work is action-triggered rather than generic. Continue LogMate pre-launch work without claims ahead of implementation. Advertising research proceeds through actual workflow/value-block evidence rather than generic format comparisons.

### Track C — MintTap activation / retention remediation — highest live-product priority
Tranche 1 remains: defer notification permission; auto-select a sole portfolio subject to invariant review; expose Import and Manual as peer first-data paths; preserve Demo protected-action intent through sign-in/setup; implement/verify semantic first-value telemetry; relocate the Home inline ad after a complete value block if low risk.

The peer-route proposal has direct release-code evidence: Manual is explicitly taught in the zero-data Transaction History path while Import is nested in Settings despite having localized templates, CSV/XLSX parsing, validation and review. Discoverability parity is necessary but no longer sufficient: Import now also has a verified post-save value-handoff gap. Exact UI treatment remains subject to Product/Design review and fresh-user validation; an explicit “View portfolio results” action is a low-risk hypothesis, not a prescribed solution.

Tranche 1 now has explicit acceptance architecture, economically equivalent synthetic Manual/Import data, an executable qualitative observation sheet, and a verified Import post-save handoff boundary. Tranche 2 is structural onboarding/Home simplification plus fresh-user retesting. Tranche 3 is controlled acquisition restart only after credible V1–V4 performance and telemetry readiness; release date alone does not open the acquisition gate.

## Immediate next targets
1. Verify localized Import/review semantics for KRW and at least one non-English path; currency-dependent required fields are a known activation variable.
2. Engineering handoff/review for 056+057: exact durable first-value marker, atomic compare/set, meaningful-result predicate, deletion epoch and Analytics-consent behavior.
3. Execute Study D/Study E when fresh target users are available; record incidents, including the newly verified post-save handoff, not small-N population percentages.
4. Audit exact current live Store creative when first-party assets are available.
5. Run a MintTap high-risk localization ledger pilot using verified specialist terminology only.
6. Build LogMate Promise-to-Value and pre-launch acceptance maps only from implemented capabilities.
7. After activation evidence improves, connect post-save handoff evidence to Store/community claim ceilings; do not claim end-to-end Import ease from parser/save evidence alone.

## Unresolved questions
MintTap: GA4 access; historical install denominator; auth/onboarding abandonment; demo-to-real conversion; fresh-user Import discovery performance; Manual-vs-Import qualitative first-value performance; end-to-end Import preparation burden; CSV-vs-XLSX UX equivalence; localized Import comprehension; empirical post-save navigation behavior; first-value implementation and exact result predicate; atomic persistence/eligibility semantics; account-deletion identity epoch; AdMob↔Analytics linkage; aggregate ad revenue; actual Home ad request/impression frequency after detail returns; useful-return telemetry; stable recency coverage; Store/search/source baseline; current r/YieldMaxETFs action permissions; exact live Store assets; specialist terminology semantics; real task performance after proposed changes; exact invariants for sole-portfolio auto-selection and Demo intent continuation; whether peer Manual/Import exposure creates meaningful choice overload; whether an explicit result CTA, automatic transition, or another pattern best closes the verified Import value-handoff gap without harming review/undo confidence.

LogMate: production persistence; first-value validation; launch geography/segment/regulatory boundaries; import priorities; analytics; retention cadence; ad model; selected community permissions; regulatory mapping; terminology conventions; launch traffic ceiling.

Company-wide: measured labor capacity; long-run ad revenue per retained user; empirical stop thresholds; populated permission/claim/term/ad-value-block ledgers; social qualified-response baselines; reusable launch records; evidence that activation and monetization changes improve sustainable downstream value rather than short-run impressions or Store conversion alone.

## Progress interpretation
Do not report progress by file count. The highest-value question remains whether a target specialist user can reach personal first value with acceptable effort, understand why to return, and then encounter monetization only at contextually legitimate boundaries. Small-N research discovers failure modes; it does not manufacture percentages. Weak activation is not repaired by increasing ad pressure, reducing taps without semantic clarity, or scaling traffic before the acquisition gate is earned.