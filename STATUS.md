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
042–063 remain canonical. New work:
- 064 Currency Semantic Validation Protocol — **Validation Success Is Not Semantic Success**.
- 065 Zero-Cost Store Message Routing — **Minimum Viable Message Architecture Before Maximum Page Count**.
- 066 Sparse Store Experiment Evidence Budget — **Evidence Budget Before Experiment Count**.
- 067 Store Experiment Stopping and Interpretation Rules — precommit decision thresholds before seeing lift; reporting visibility is not winner evidence; inconclusive tests are legitimate information; conversion cannot overrule activation.
- 068 LogMate Pre-launch Promise-to-Value Acceptance Map — **Roadmap Is Not Marketing Inventory; Rendered Is Not Functional; Claim State Follows Evidence State**.

## 064 — currency-semantic activation boundary
`research/064_currency_semantic_validation_protocol.md`
`playbook/MINTTAP_ACTIVATION_OBSERVATION_SHEET_V1.md` updated with K1/K2 evidence fields.

K1/K2 explicitly capture exchange-rate direction/unit interpretation, date-basis interpretation, USD unit-price versus reporting-currency meaning, validation/review comprehension, post-import result comprehension, and moderator intervention. K1 remains prepared-file evidence only and cannot establish KRW preparation ease.

The exact live MintTap UI/help/error wording audit remains blocked because the current GitHub installation does not expose the MintTap production source repository. This is an evidence-access block, not a reason to infer wording from memory or localized template headers.

## 065–067 — Store routing and sparse-experiment discipline
`research/065_zero_cost_store_message_routing.md`
`research/066_sparse_store_experiment_evidence_budget.md`
`research/067_store_experiment_stopping_and_interpretation_rules.md`

Apple Custom Product Pages and Google Play Custom Store Listings are intent-routing infrastructure, not automatic ASO wins. Sparse traffic imposes a page-fragmentation cost. Qualified Store traffic is both acquisition inventory and learning sample. Before randomization, record the decision that will change, eligible traffic, platform-estimated evidence window, traffic-split opportunity cost and downstream activation guardrail.

Apple PPO interpretation was refreshed on 2026-09-17. Five first-time downloads only unlock reporting; they are not winner evidence. Future tests require precommitted hypotheses, worthwhile-lift thresholds, downstream guardrails, contamination rules and stop/adopt/retest criteria. MintTap and LogMate remain premature for Store randomization.

## 068 — LogMate pre-launch promise-to-value gate
`research/068_logmate_prelaunch_promise_to_value_acceptance_map.md`

Current LogMate SOT was re-read from `yhappcom/logmate` `AGENTS.md` and `MASTER.md`; latest accessible `main` commit reviewed is `b551ce434ad72b1895033e0f3617c73b026d40ea` (2026-09-13). Current product evidence is explicitly mixed: Opening/Auth UI, Home, Recent/Activity/Totals/Customize detail entry, Settings/date-locale handling and a Customize V1 mock-session projection exist, while Home flight/time/activity/totals remain mock/presentation shell and canonical ledger, persistence repository, Calculation/Aggregation Engine, production importer, backup and server Sync connection are absent.

A seven-rung claim-evidence ladder now separates concept/intent → confirmed contract → implemented shell → implemented functional path → verified functional path → target-user first value → useful return. Public promises must not skip rungs. Current Manual recording, search, totals/statistics, Import, offline reliability, Sync and backup promise families are therefore not launch-capability claims yet. Customize is shell evidence only until durable configuration behavior exists. Multi-platform support is a target, not a parity claim. Regulatory/legal replacement claims remain prohibited by current product definition.

Apple and Google current Store guidance was refreshed on 2026-09-17: Store metadata/graphic assets must accurately represent current functionality and must not use misleading/unverifiable claims. Internal policy is stricter: **Roadmap Is Not Marketing Inventory**, **Rendered Is Not Functional**, **Functional Is Not Valuable**, **Claim State Follows Evidence State**, **Choose the Launch Promise After First Value, Not Before It**.

Candidate manual-first first-value chain is now an explicit future validation hypothesis, not a claim: `open → local/account boundary → create FlightRecord → persist → reopen/view → correct personal derived result → comprehension → reason to return`. The first launch promise will be chosen only after one specialist job reaches target-pilot first-value evidence.

## Parallel tracks
### Track A — measurement
Resolve GA4 discovery/read access without guessing IDs or modifying production configuration. Continue privacy-filtered aggregate Firestore snapshots until recency coverage stabilizes. Hand off 056+057 first-value contract/invariants for engineering review; implementation remains NOT VERIFIED. Verify placement-level aggregate ad evidence and aggregate ad revenue before monetization experiments.

### Track B — marketing learning
Continue reusable niche-launch systems from actual product evidence. Community permission work is action-triggered rather than generic. Continue LogMate pre-launch work under the 068 claim-evidence ladder. Advertising research proceeds through actual workflow/value-block evidence rather than generic format comparisons. Localization claims use the 063/064 claim ceiling. Store segmentation follows 065; Store randomization follows 066; interpretation/stopping follows 067.

### Track C — MintTap activation / retention remediation — highest live-product priority
Tranche 1 remains: defer notification permission; auto-select a sole portfolio subject to invariant review; expose Import and Manual as peer first-data paths; preserve Demo protected-action intent through sign-in/setup; implement/verify semantic first-value telemetry; relocate the Home inline ad after a complete value block if low risk.

Import has four verified activation concerns: discoverability asymmetry, post-save value-handoff gap, non-USD required-field workload, and currency-semantic risk. Exact UI treatment remains subject to Product/Design review and fresh-user validation.

## Immediate next targets
1. Re-attempt first-party MintTap source access and audit exact exchange-rate field/help/template/error/review wording; do not infer semantic adequacy from parser constraints or localized headers.
2. Engineering handoff/review for 056+057: durable first-value marker, atomic compare/set, meaningful-result predicate, deletion epoch and Analytics-consent behavior.
3. Execute Study D/Study E and K1/K2 when fresh target users are available; record incidents, not small-N population percentages.
4. Obtain exact current live Store creative and Store/source baselines. Classify default-page promise families. Before any randomized Store experiment, record the 066 evidence budget and 067 precommitted decision/stopping rules.
5. Re-check LogMate after the next production-domain implementation milestone. Move a promise family from contract/shell to functional only with current code evidence; when canonical FlightRecord persistence exists, build the manual-first fresh-pilot first-value observation protocol.
6. Do not design LogMate Store/community launch creative around Import/Sync/backup or mock Home values before their evidence rung permits it. Do not optimize ads around shell screens; first establish a complete recurring value block.
7. After activation evidence improves, connect evidence to Store/community claim ceilings.

## Unresolved questions
MintTap: GA4 access; historical install denominator; auth/onboarding abandonment; demo-to-real conversion; fresh-user Import discovery; Manual-vs-Import qualitative first-value performance; end-to-end Import preparation burden; CSV-vs-XLSX UX equivalence; exact live KRW exchange-rate direction/unit/date-basis wording; KRW exchange-rate comprehension; localized validation/review comprehension; empirical post-save navigation; first-value implementation/result predicate; atomic persistence/eligibility semantics; account-deletion identity epoch; AdMob↔Analytics linkage; aggregate ad revenue; Home ad request/impression frequency after detail returns; useful-return telemetry; stable recency coverage; Store/search/source baseline; community permissions; exact live Store assets; specialist terminology semantics; exact invariants for sole-portfolio auto-selection and Demo intent continuation; choice overload from peer Manual/Import exposure; best post-save result handoff pattern; whether live Store creative contains distinct intent families worth routing; sufficient qualified traffic for any CPP/CSL variant; platform-estimated runtime/volume for any future Store randomized experiment.

LogMate: canonical FlightRecord persistence; functional manual-entry path; calculation/aggregation engine; first-value validation; launch geography/segment/regulatory boundaries; production import; analytics; retention cadence; ad model; selected community permissions; regulatory mapping; terminology conventions; launch traffic ceiling; durable Customize configuration; backup/restore; owner Sync and conflict behavior; offline reliability; native/PWA semantic parity; which implemented specialist job first reaches L5 and therefore deserves the initial launch promise; Store experiment feasibility after launch baseline exists.

Company-wide: measured labor capacity; long-run ad revenue per retained user; empirical stop thresholds; populated permission/claim/term/ad-value-block ledgers; social qualified-response baselines; reusable launch records; evidence that activation and monetization changes improve sustainable downstream value; minimum traffic needed before store-page segmentation or randomized experimentation produces decision-useful evidence.

## Progress interpretation
Do not report progress by file count. The highest-value question remains whether a target specialist user can reach personal first value with acceptable effort, understand why to return, and then encounter monetization only at contextually legitimate boundaries. Small-N research discovers failure modes; it does not manufacture percentages. Weak activation is not repaired by increasing ad pressure, translating strings without workload parity, scaling traffic before the acquisition gate is earned, fragmenting sparse traffic across many Store variants, stopping sparse Store experiments on attractive early noise, or marketing a roadmap/UI shell as a finished professional workflow.
