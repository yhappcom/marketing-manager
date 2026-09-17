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
- 070 App-Open Ad Return-Value Gate — **Foreground Is Not a Value Boundary; Do Not Manufacture Wait; Resume Intent Has Priority**.
- 071 Banner Inventory Exposure-Quality Gate — **Visible Time Is Not Revenue-Quality Time; Do Not Monetize Friction; Value Density Before Ad Density**.

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

Current LogMate product evidence remains mixed: implemented UI/shell work exists while canonical ledger/persistence/calculation/import/backup/sync evidence is incomplete. Public promises must follow the seven-rung claim-evidence ladder. The first launch promise is chosen only after a specialist job reaches target-user first-value evidence.

## 069 — ad-safe value boundary
`research/069_ad_safe_value_boundary_framework.md`

Ad monetization is evaluated by `value block → candidate boundary → format → downstream effect`, not format/eCPM alone. B1/B2/B3 are protected from interruptive monetization; B4 is the first candidate boundary; B5 is the strongest candidate for non-interruptive inventory; B6 requires genuine optionality.

MintTap's Import preparation/review/save→first-value handoff remains ad-ineligible. LogMate currently has no validated ad-bearing boundary because no specialist workflow has reached target-pilot first-value evidence under 068.

## 070 — app-open return-value gate
`research/070_app_open_ad_return_value_gate.md`

Current Google first-party guidance was refreshed on 2026-09-17: app-open ads are a loading/foreground format, should not be shown on the first-ever app start / should wait until users have used the app a few times, and should be shown during genuine loading. On cold start, if main content is ready before the ad, do not show it. Ordinary interstitials remain disallowed on app load/exit. Apple interruptive-ad requirements remain a policy floor.

A foreground event is now explicitly separated from a monetizable return. R0–R5 classify first launch, unfinished-work resume, verification/reconciliation resume, unestablished return, established passive return with genuine loading, and established return to already-ready content. Internal standard: no app-open candidate until semantic first value plus a later useful return are established; protected B1/B2/B3 intent remains protected across background/foreground transitions. Never add or prolong loading to manufacture inventory.

MintTap app-open eligibility remains UNVERIFIED until first-value/useful-return telemetry, protected-intent continuation and genuine loading boundaries exist. LogMate remains NOT ELIGIBLE. Future app-open tests must measure useful-return completion and rapid abandonment alongside aggregate incremental revenue; eCPM/impressions alone cannot graduate a placement.

## 071 — banner inventory exposure-quality gate
`research/071_banner_inventory_exposure_quality_gate.md`

Google first-party banner guidance was refreshed on 2026-09-17. Anchored adaptive banners are fixed layout inventory; inline adaptive banners are recommended for scrollable content; configured automatic refresh occurs only while the banner is visible. These technical capabilities do not make all visible time monetizable.

E0–E6 now separates synthetic exposure, friction exposure, protected work, transition, completed-value reading, repeated low-risk browsing, and artificial exposure inflation. Internal rules: **Visible Time Is Not Revenue-Quality Time; Do Not Monetize Friction; Value Density Before Ad Density; Stable Inventory Before Refresh Inventory; Navigation Loops Are Not Inventory Growth.**

MintTap banner refresh/size optimization is NOT ELIGIBLE until the current Home inline placement has an evidence ledger covering the exact preceding complete value block, request/impression lifecycle across Home/detail returns, placement-level aggregate revenue, useful-return completion and rapid exit/background. LogMate banner optimization remains premature under 068/069.

## Parallel tracks
### Track A — measurement
Resolve GA4 discovery/read access without guessing IDs or modifying production configuration. Continue privacy-filtered aggregate Firestore snapshots until recency coverage stabilizes. Hand off 056+057 first-value contract/invariants for engineering review; implementation remains NOT VERIFIED. Verify placement-level aggregate ad evidence and aggregate ad revenue before monetization experiments.

### Track B — marketing learning
Continue reusable niche-launch systems from actual product evidence. Community permission work is action-triggered rather than generic. Continue LogMate pre-launch work under the 068 claim-evidence ladder. Advertising follows 069 plus 070 lifecycle/return and 071 exposure-quality gates. Localization claims use 063/064. Store segmentation follows 065; Store randomization follows 066; interpretation/stopping follows 067.

### Track C — MintTap activation / retention remediation — highest live-product priority
Tranche 1 remains: defer notification permission; auto-select a sole portfolio subject to invariant review; expose Import and Manual as peer first-data paths; preserve Demo protected-action intent through sign-in/setup; implement/verify semantic first-value telemetry; relocate the Home inline ad after a complete value block if low risk.

Import has four verified activation concerns: discoverability asymmetry, post-save value-handoff gap, non-USD required-field workload, and currency-semantic risk. Import's save→first-value handoff is B3 and ad-ineligible. Background/foreground transitions do not reset that protection under 070. Friction/transition time cannot be reclassified as banner inventory under 071.

## Immediate next targets
1. Re-attempt first-party MintTap source access and audit exact exchange-rate field/help/template/error/review wording; do not infer semantic adequacy from parser constraints or localized headers.
2. Engineering handoff/review for 056+057: durable first-value marker, atomic compare/set, meaningful-result predicate, deletion epoch and Analytics-consent behavior. Add useful-return and protected foreground-intent semantics required by 070 before app-open testing.
3. Execute Study D/Study E and K1/K2 when fresh target users are available; record incidents, not small-N population percentages.
4. Obtain exact current live Store creative and Store/source baselines. Classify default-page promise families. Before randomized Store experiments, record 066 evidence budget and 067 stopping rules.
5. Re-check LogMate after the next production-domain implementation milestone; build the manual-first fresh-pilot first-value protocol when canonical FlightRecord persistence exists.
6. Build the MintTap Home ad-placement ledger from actual product evidence using 069+071: exact preceding complete value block, E-class, layout type, request/match/impression/revenue, detail-return duplicate exposure, useful-return completion and rapid exit/background. Do not change refresh or size first.
7. Before considering app-open ads, instrument/verify R0–R5 eligibility, protected pending intent, content-ready versus ad-ready timing, useful-return completion and rapid background/exit. Do not treat foreground count as inventory count.
8. Do not design LogMate Store/community launch creative around Import/Sync/backup or mock Home values before their evidence rung permits it. Do not optimize ads around shell screens.

## Unresolved questions
MintTap: GA4 access; historical install denominator; auth/onboarding abandonment; demo-to-real conversion; fresh-user Import discovery; Manual-vs-Import qualitative first-value performance; end-to-end Import preparation burden; CSV-vs-XLSX UX equivalence; exact live KRW exchange-rate direction/unit/date-basis wording; KRW exchange-rate comprehension; localized validation/review comprehension; empirical post-save navigation; first-value implementation/result predicate; atomic persistence/eligibility semantics; account-deletion identity epoch; AdMob↔Analytics linkage; aggregate ad revenue; Home ad request/impression frequency after detail returns; exact complete value block preceding Home inline ad; Home ad E-class; current banner family/size/refresh configuration; placement-level request/match/impression/revenue; useful-return telemetry; foreground-intent classification; genuine loading duration on eligible returns; rapid-exit after ad; Store/search/source baseline; community permissions; exact live Store assets; specialist terminology semantics; sole-portfolio auto-selection invariants; Demo intent continuation; choice overload from peer Manual/Import exposure; best post-save result handoff pattern; sufficient qualified traffic for Store segmentation/testing.

LogMate: canonical FlightRecord persistence; functional manual-entry path; calculation/aggregation engine; first-value validation; launch geography/segment/regulatory boundaries; production import; analytics; retention cadence; ad model; first validated B4/B5 and E4/E5 boundary; first validated R4 return boundary; selected community permissions; regulatory mapping; terminology conventions; launch traffic ceiling; durable Customize configuration; backup/restore; owner Sync/conflict behavior; offline reliability; native/PWA semantic parity; first implemented specialist job reaching L5.

Company-wide: measured labor capacity; long-run ad revenue per retained user; empirical stop thresholds; populated permission/claim/term/ad-value-block ledgers; social qualified-response baselines; reusable launch records; evidence that activation and monetization changes improve sustainable downstream value; minimum traffic needed before store segmentation/randomization; aggregate evidence for whether lifecycle/banner inventory adds revenue without degrading useful return; empirical relationship between legitimate E4/E5 exposure and retained qualified use.

## Progress interpretation
Do not report progress by file count. The highest-value question remains whether a target specialist user can reach personal first value with acceptable effort, understand why to return, and then encounter monetization only at contextually legitimate boundaries. Small-N research discovers failure modes; it does not manufacture percentages. Weak activation is not repaired by increasing ad pressure, translating strings without workload parity, scaling traffic before the acquisition gate is earned, fragmenting sparse traffic across many Store variants, stopping sparse Store experiments on attractive early noise, marketing a roadmap/UI shell as a finished professional workflow, treating policy-compliant whitespace as automatic ad inventory, treating every foreground callback as monetizable inventory, or treating friction-driven visible time as high-quality banner inventory.
