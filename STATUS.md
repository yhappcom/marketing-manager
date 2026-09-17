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
- 069 Ad-Safe Value Boundary Framework — **Monetize After Value, Not Between Work and Value; Whitespace Is Not Ad Inventory**.

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

Candidate manual-first first-value chain is now an explicit future validation hypothesis, not a claim: `open → local/account boundary → create FlightRecord → persist → reopen/view → correct personal derived result → comprehension → reason to return`. The first launch promise will be chosen only after one specialist job reaches target-pilot first-value evidence.

## 069 — ad-safe value boundary
`research/069_ad_safe_value_boundary_framework.md`

Ad monetization is now evaluated by `value block → candidate boundary → format → downstream effect`, not by ad format/eCPM in isolation. Candidate surfaces are classified B0–B6: before intent, required input, interpretation/reconciliation, core job complete but value not confirmed, complete value confirmed, passive repeated review, and explicit optional exchange.

Internal standard is stricter than platform-policy ceilings. B1/B2/B3 are not eligible for interruptive monetization. B4 is the first candidate boundary; B5 is the strongest candidate for non-interruptive inventory; B6 is allowed only when declining the ad leaves normal product use intact. Rewarded ads must never become a toll on core professional use.

Google first-party ad guidance was refreshed on 2026-09-17. AdMob disallows unexpected task-interrupting interstitials and repeated interstitial pressure; Google Play likewise disallows unexpected full-screen interruptions. Rewarded implementations must preserve genuine user choice, and rewarded-interstitial opt-out cannot interfere with normal use. Adaptive banner guidance distinguishes anchored persistent inventory from inline inventory suited to scrollable content. These are policy floors, not placement recommendations for MintTap/LogMate.

MintTap's Import preparation/review/save→first-value handoff remains ad-ineligible. The existing Home inline-ad concern should be assessed by whether a complete personal value block precedes it, not by screen position alone. LogMate currently has no validated ad-bearing boundary because no specialist workflow has reached target-pilot first-value evidence under 068.

## Parallel tracks
### Track A — measurement
Resolve GA4 discovery/read access without guessing IDs or modifying production configuration. Continue privacy-filtered aggregate Firestore snapshots until recency coverage stabilizes. Hand off 056+057 first-value contract/invariants for engineering review; implementation remains NOT VERIFIED. Verify placement-level aggregate ad evidence and aggregate ad revenue before monetization experiments.

### Track B — marketing learning
Continue reusable niche-launch systems from actual product evidence. Community permission work is action-triggered rather than generic. Continue LogMate pre-launch work under the 068 claim-evidence ladder. Advertising now follows the 069 value-boundary framework rather than generic format comparisons. Localization claims use the 063/064 claim ceiling. Store segmentation follows 065; Store randomization follows 066; interpretation/stopping follows 067.

### Track C — MintTap activation / retention remediation — highest live-product priority
Tranche 1 remains: defer notification permission; auto-select a sole portfolio subject to invariant review; expose Import and Manual as peer first-data paths; preserve Demo protected-action intent through sign-in/setup; implement/verify semantic first-value telemetry; relocate the Home inline ad after a complete value block if low risk.

Import has four verified activation concerns: discoverability asymmetry, post-save value-handoff gap, non-USD required-field workload, and currency-semantic risk. Exact UI treatment remains subject to Product/Design review and fresh-user validation. Import's save→first-value handoff is explicitly B3 and therefore ad-ineligible under 069.

## Immediate next targets
1. Re-attempt first-party MintTap source access and audit exact exchange-rate field/help/template/error/review wording; do not infer semantic adequacy from parser constraints or localized headers.
2. Engineering handoff/review for 056+057: durable first-value marker, atomic compare/set, meaningful-result predicate, deletion epoch and Analytics-consent behavior.
3. Execute Study D/Study E and K1/K2 when fresh target users are available; record incidents, not small-N population percentages.
4. Obtain exact current live Store creative and Store/source baselines. Classify default-page promise families. Before any randomized Store experiment, record the 066 evidence budget and 067 precommitted decision/stopping rules.
5. Re-check LogMate after the next production-domain implementation milestone. Move a promise family from contract/shell to functional only with current code evidence; when canonical FlightRecord persistence exists, build the manual-first fresh-pilot first-value observation protocol.
6. Build the first ad-placement ledger from actual product surfaces using 069. For MintTap, verify the complete Home value block before the current inline ad and obtain placement-level aggregate request/impression/revenue evidence. For LogMate, wait for a functional recurring value block.
7. Do not design LogMate Store/community launch creative around Import/Sync/backup or mock Home values before their evidence rung permits it. Do not optimize ads around shell screens.
8. After activation evidence improves, connect evidence to Store/community claim ceilings.

## Unresolved questions
MintTap: GA4 access; historical install denominator; auth/onboarding abandonment; demo-to-real conversion; fresh-user Import discovery; Manual-vs-Import qualitative first-value performance; end-to-end Import preparation burden; CSV-vs-XLSX UX equivalence; exact live KRW exchange-rate direction/unit/date-basis wording; KRW exchange-rate comprehension; localized validation/review comprehension; empirical post-save navigation; first-value implementation/result predicate; atomic persistence/eligibility semantics; account-deletion identity epoch; AdMob↔Analytics linkage; aggregate ad revenue; Home ad request/impression frequency after detail returns; exact complete value block preceding the Home inline ad; useful-return telemetry; stable recency coverage; Store/search/source baseline; community permissions; exact live Store assets; specialist terminology semantics; exact invariants for sole-portfolio auto-selection and Demo intent continuation; choice overload from peer Manual/Import exposure; best post-save result handoff pattern; whether live Store creative contains distinct intent families worth routing; sufficient qualified traffic for any CPP/CSL variant; platform-estimated runtime/volume for any future Store randomized experiment.

LogMate: canonical FlightRecord persistence; functional manual-entry path; calculation/aggregation engine; first-value validation; launch geography/segment/regulatory boundaries; production import; analytics; retention cadence; ad model; first validated B4/B5 ad-bearing boundary; selected community permissions; regulatory mapping; terminology conventions; launch traffic ceiling; durable Customize configuration; backup/restore; owner Sync and conflict behavior; offline reliability; native/PWA semantic parity; which implemented specialist job first reaches L5 and therefore deserves the initial launch promise; Store experiment feasibility after launch baseline exists.

Company-wide: measured labor capacity; long-run ad revenue per retained user; empirical stop thresholds; populated permission/claim/term/ad-value-block ledgers; social qualified-response baselines; reusable launch records; evidence that activation and monetization changes improve sustainable downstream value; minimum traffic needed before store-page segmentation or randomized experimentation produces decision-useful evidence.

## Progress interpretation
Do not report progress by file count. The highest-value question remains whether a target specialist user can reach personal first value with acceptable effort, understand why to return, and then encounter monetization only at contextually legitimate boundaries. Small-N research discovers failure modes; it does not manufacture percentages. Weak activation is not repaired by increasing ad pressure, translating strings without workload parity, scaling traffic before the acquisition gate is earned, fragmenting sparse traffic across many Store variants, stopping sparse Store experiments on attractive early noise, marketing a roadmap/UI shell as a finished professional workflow, or treating policy-compliant whitespace as automatic ad inventory.
