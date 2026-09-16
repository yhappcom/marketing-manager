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
042–062 remain canonical. New work:
- 063 Localization × Currency Activation Claim Ceiling — **Translation Is Not Activation Parity**, **Required-Field Asymmetry Is Product Friction**, **Prepared Fixtures Cannot Prove Preparation Ease**, **Claim Ceiling Follows the Weakest Unverified Boundary**.

## 063 — localization/currency activation boundary
`research/063_localization_currency_activation_claim_ceiling.md`
`playbook/fixtures/minttap_k1_krw.csv`

058 already verified that non-USD Import requires exchange rate while USD may omit it. 063 converts that implementation asymmetry into an activation and marketing rule: localized UI/template availability is not evidence of equivalent workload or end-to-end value attainment. Localization parity is evaluated across discovery, schema, semantics, workload and value comprehension.

KRW validation is split into K1 prepared-file execution and K2 end-to-end preparation. K1 intentionally supplies synthetic exchange rates and therefore cannot prove that users understand or can obtain/prepare the required rate. Claims must stop at the strongest verified boundary; technical localized Import support must not be promoted as effortless localized Import without preparation + first-value evidence.

Apple's current first-party localization guidance remains consistent with this distinction: localized Store metadata is separately managed from binary localization, localized screenshots/metadata can be tailored by market, and localized apps should be tested with users in the target market. Store localization is therefore an acquisition surface, not product-journey proof.

## Parallel tracks
### Track A — measurement
Resolve GA4 discovery/read access without guessing IDs or modifying production configuration. Continue privacy-filtered aggregate Firestore snapshots until recency coverage stabilizes. Hand off 056+057 first-value contract/invariants for engineering review; implementation remains NOT VERIFIED. Verify placement-level aggregate ad evidence and aggregate ad revenue before monetization experiments.

### Track B — marketing learning
Continue reusable niche-launch systems from actual product evidence. Community permission work is action-triggered rather than generic. Continue LogMate pre-launch work without claims ahead of implementation. Advertising research proceeds through actual workflow/value-block evidence rather than generic format comparisons. Localization claims now use the 063 claim ceiling.

### Track C — MintTap activation / retention remediation — highest live-product priority
Tranche 1 remains: defer notification permission; auto-select a sole portfolio subject to invariant review; expose Import and Manual as peer first-data paths; preserve Demo protected-action intent through sign-in/setup; implement/verify semantic first-value telemetry; relocate the Home inline ad after a complete value block if low risk.

Import now has three verified activation concerns: discoverability asymmetry, post-save value-handoff gap, and non-USD required-field workload. Exact UI treatment remains subject to Product/Design review and fresh-user validation.

## Immediate next targets
1. Verify first-party UI/help wording for exchange-rate direction/unit and review/error semantics; do not infer semantic adequacy from localized headers alone.
2. Extend the activation observation sheet with K1/K2 boundary and currency-semantic incidents.
3. Engineering handoff/review for 056+057: durable first-value marker, atomic compare/set, meaningful-result predicate, deletion epoch and Analytics-consent behavior.
4. Execute Study D/Study E and K1/K2 when fresh target users are available; record incidents, not small-N population percentages.
5. Audit exact current live Store creative when first-party assets are available.
6. Build LogMate Promise-to-Value and pre-launch acceptance maps only from implemented capabilities.
7. After activation evidence improves, connect evidence to Store/community claim ceilings; release date or parser capability alone does not open the acquisition gate.

## Unresolved questions
MintTap: GA4 access; historical install denominator; auth/onboarding abandonment; demo-to-real conversion; fresh-user Import discovery; Manual-vs-Import qualitative first-value performance; end-to-end Import preparation burden; CSV-vs-XLSX UX equivalence; KRW exchange-rate direction/unit comprehension; localized validation/review comprehension; empirical post-save navigation; first-value implementation/result predicate; atomic persistence/eligibility semantics; account-deletion identity epoch; AdMob↔Analytics linkage; aggregate ad revenue; Home ad request/impression frequency after detail returns; useful-return telemetry; stable recency coverage; Store/search/source baseline; community permissions; exact live Store assets; specialist terminology semantics; exact invariants for sole-portfolio auto-selection and Demo intent continuation; choice overload from peer Manual/Import exposure; best post-save result handoff pattern.

LogMate: production persistence; first-value validation; launch geography/segment/regulatory boundaries; import priorities; analytics; retention cadence; ad model; selected community permissions; regulatory mapping; terminology conventions; launch traffic ceiling.

Company-wide: measured labor capacity; long-run ad revenue per retained user; empirical stop thresholds; populated permission/claim/term/ad-value-block ledgers; social qualified-response baselines; reusable launch records; evidence that activation and monetization changes improve sustainable downstream value.

## Progress interpretation
Do not report progress by file count. The highest-value question remains whether a target specialist user can reach personal first value with acceptable effort, understand why to return, and then encounter monetization only at contextually legitimate boundaries. Small-N research discovers failure modes; it does not manufacture percentages. Weak activation is not repaired by increasing ad pressure, reducing taps without semantic clarity, translating strings without workload parity, or scaling traffic before the acquisition gate is earned.