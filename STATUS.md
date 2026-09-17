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
- 064 Currency Semantic Validation Protocol — **Validation Success Is Not Semantic Success**. Currency-bearing financial input is evaluated across syntactic validity, domain validity, semantic comprehension and result comprehension. Parser acceptance cannot support ease/comprehension claims.
- 065 Zero-Cost Store Message Routing — Apple Custom Product Pages and Google Play Custom Store Listings are treated as intent-routing infrastructure, not automatic ASO wins. Sparse traffic imposes a page-fragmentation cost; variants require verified intent, product value, claim ceiling, traffic plausibility and maintenance capacity.
- 066 Sparse Store Experiment Evidence Budget — Store A/B testing consumes scarce learning traffic. Randomization is gated by a decision-worthy hypothesis, platform-estimated practical evidence window, stable activation/value path, confound control and downstream quality guardrails. Rule: **Evidence Budget Before Experiment Count**.

## 064 — currency-semantic activation boundary
`research/064_currency_semantic_validation_protocol.md`
`playbook/MINTTAP_ACTIVATION_OBSERVATION_SHEET_V1.md` updated with K1/K2 evidence fields.

K1/K2 now explicitly capture exchange-rate direction/unit interpretation, date-basis interpretation, USD unit-price versus reporting-currency meaning, validation/review comprehension, post-import result comprehension, and moderator intervention. K1 remains prepared-file evidence only and cannot establish KRW preparation ease.

The exact live MintTap UI/help/error wording audit could not be completed because the current GitHub installation does not expose the MintTap production source repository. This is an evidence-access block, not a reason to infer wording from memory or localized template headers. When source access returns, classify each exchange-rate surface as explicit/inferable/ambiguous/absent for direction, unit, date basis and USD-price-vs-reporting-currency distinction.

## 065 — zero-cost store message routing
`research/065_zero_cost_store_message_routing.md`

Authoritative platform capability was refreshed on 2026-09-17. Apple supports up to 70 Custom Product Pages with distinct screenshots/previews/promotional text/keywords, unique URLs, localization, keyword routing and optional approved deep links; page analytics appear after at least five first-time downloads. Apple Product Page Optimization remains a separate randomized default-page experiment and is not available for CPPs. Google Play supports up to 50 Custom Store Listings with customized name/icon/descriptions/assets and targeting including country, search keyword, lifecycle/buyer segments, custom audience and unique URL. Google CSLs are not automatically translated.

Company rule: **Minimum Viable Message Architecture Before Maximum Page Count.** For sparse-niche apps, create a routed store variant only for materially different intent with a verified product value path, valid claim ceiling, plausible qualified traffic and sustainable maintenance. Unique store URLs enable semantic continuity from community/blog/social source to store promise; they do not by themselves establish causal performance. Conversion is intermediate evidence and must eventually connect to semantic first value and useful return.

Current application decision: do not create MintTap variants yet. Activation and first-value evidence remain the bottleneck. When ready, prefer default listing plus at most one evidence-backed intent-specific page at a time. Defer LogMate variants until implemented capabilities and launch segments stabilize.

## 066 — sparse Store experiment evidence budget
`research/066_sparse_store_experiment_evidence_budget.md`

Authoritative platform behavior was refreshed on 2026-09-17. Apple PPO supports up to three treatments and explicitly warns that more treatments lengthen time to a conclusive result. Google Play Store Listing Experiments estimate required time and acquisition/open/pre-registration volume before launch; variant count, audience share, minimum detectable effect and confidence affect evidence time, and Google recommends changing one asset at a time for causal interpretability. Google experiments can remain `More data needed` and auto-stop after six months.

Company rule: **Evidence Budget Before Experiment Count.** Qualified Store traffic is both acquisition inventory and learning sample. Before randomization, record the decision that will change, eligible traffic, platform-estimated evidence window, traffic-split opportunity cost and downstream activation guardrail. If the platform projects an operationally irrelevant evidence window, use claim audit → specialist comprehension → stable baseline observation instead of fragmenting traffic.

MintTap is currently NOT ELIGIBLE for Store A/B testing: semantic first-value remediation, exact live creative audit, Store/source baseline and qualified-traffic feasibility remain unresolved. LogMate is also premature while implemented capabilities and launch segment are unstable. Clearing Apple's five-first-download CPP reporting threshold is a visibility threshold, not evidence of a causal winner.

## Parallel tracks
### Track A — measurement
Resolve GA4 discovery/read access without guessing IDs or modifying production configuration. Continue privacy-filtered aggregate Firestore snapshots until recency coverage stabilizes. Hand off 056+057 first-value contract/invariants for engineering review; implementation remains NOT VERIFIED. Verify placement-level aggregate ad evidence and aggregate ad revenue before monetization experiments.

### Track B — marketing learning
Continue reusable niche-launch systems from actual product evidence. Community permission work is action-triggered rather than generic. Continue LogMate pre-launch work without claims ahead of implementation. Advertising research proceeds through actual workflow/value-block evidence rather than generic format comparisons. Localization claims use the 063/064 claim ceiling. Store segmentation follows 065: intent routing before page multiplication. Store randomization follows 066: evidence-budget feasibility before experiment creation.

### Track C — MintTap activation / retention remediation — highest live-product priority
Tranche 1 remains: defer notification permission; auto-select a sole portfolio subject to invariant review; expose Import and Manual as peer first-data paths; preserve Demo protected-action intent through sign-in/setup; implement/verify semantic first-value telemetry; relocate the Home inline ad after a complete value block if low risk.

Import now has four verified activation concerns: discoverability asymmetry, post-save value-handoff gap, non-USD required-field workload, and currency-semantic risk. Exact UI treatment remains subject to Product/Design review and fresh-user validation.

## Immediate next targets
1. Re-attempt first-party MintTap source access and audit exact exchange-rate field/help/template/error/review wording; do not infer semantic adequacy from parser constraints or localized headers.
2. Engineering handoff/review for 056+057: durable first-value marker, atomic compare/set, meaningful-result predicate, deletion epoch and Analytics-consent behavior.
3. Execute Study D/Study E and K1/K2 when fresh target users are available; record incidents, not small-N population percentages.
4. Obtain exact current live Store creative and Store/source baselines. Classify default-page promise families; before any PPO/Store Listing Experiment, use the platform's own estimate to determine whether qualified traffic can produce decision-useful evidence in a practical window.
5. Build LogMate Promise-to-Value and pre-launch acceptance maps only from implemented capabilities.
6. After activation evidence improves, connect evidence to Store/community claim ceilings; release date, parser capability, CPP/CSL availability, or an A/B-test button alone does not open the acquisition gate.

## Unresolved questions
MintTap: GA4 access; historical install denominator; auth/onboarding abandonment; demo-to-real conversion; fresh-user Import discovery; Manual-vs-Import qualitative first-value performance; end-to-end Import preparation burden; CSV-vs-XLSX UX equivalence; exact live KRW exchange-rate direction/unit/date-basis wording; KRW exchange-rate comprehension; localized validation/review comprehension; empirical post-save navigation; first-value implementation/result predicate; atomic persistence/eligibility semantics; account-deletion identity epoch; AdMob↔Analytics linkage; aggregate ad revenue; Home ad request/impression frequency after detail returns; useful-return telemetry; stable recency coverage; Store/search/source baseline; community permissions; exact live Store assets; specialist terminology semantics; exact invariants for sole-portfolio auto-selection and Demo intent continuation; choice overload from peer Manual/Import exposure; best post-save result handoff pattern; whether live Store creative contains distinct intent families worth routing; sufficient qualified traffic for any CPP/CSL variant; platform-estimated runtime/volume for any future Store randomized experiment.

LogMate: production persistence; first-value validation; launch geography/segment/regulatory boundaries; import priorities; analytics; retention cadence; ad model; selected community permissions; regulatory mapping; terminology conventions; launch traffic ceiling; whether future implemented capabilities create distinct store-intent families; Store experiment feasibility after launch baseline exists.

Company-wide: measured labor capacity; long-run ad revenue per retained user; empirical stop thresholds; populated permission/claim/term/ad-value-block ledgers; social qualified-response baselines; reusable launch records; evidence that activation and monetization changes improve sustainable downstream value; minimum traffic needed before store-page segmentation or randomized experimentation produces decision-useful evidence.

## Progress interpretation
Do not report progress by file count. The highest-value question remains whether a target specialist user can reach personal first value with acceptable effort, understand why to return, and then encounter monetization only at contextually legitimate boundaries. Small-N research discovers failure modes; it does not manufacture percentages. Weak activation is not repaired by increasing ad pressure, reducing taps without semantic clarity, translating strings without workload parity, accepting parser-valid but semantically misunderstood financial inputs, scaling traffic before the acquisition gate is earned, fragmenting sparse traffic across many store variants, or running statistically decorative Store experiments without enough evidence budget.