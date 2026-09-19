# 136 — Apple PPO Bayesian Decision Semantics for Sparse-Niche Apps

Validated: 2026-09-20

## Why this addition exists
Research 135 established Google Play Store Listing Experiment semantics. Apple Product Page Optimization (PPO) must not be normalized into that contract: Apple now exposes a distinct Bayesian decision system with different statuses, thresholds and traffic mechanics.

## Authoritative findings
Sources: Apple Developer / App Store Connect Help, Product Page Optimization documentation, checked 2026-09-20.

1. PPO randomizes eligible users between the original product page and up to three treatments. The developer chooses the percentage of traffic exposed to treatments; treatment traffic is divided across treatments. Excluded localizations are excluded from the test.
2. PPO tests run for up to 90 days unless manually stopped. Once manually stopped they cannot be restarted; an equivalent test must be recreated.
3. Analytics does not show PPO results until at least five first-time downloads are associated with the test. This is a reporting threshold, not evidence that five downloads are statistically sufficient.
4. Apple states that PPO Analytics uses Bayesian statistical analysis designed for App Store product-page data. Current result states include Collecting Data, Performing Better, Performing Worse, and Likely to be Inconclusive.
5. Performing Better / Performing Worse requires at least 90% confidence versus the selected baseline. Apple exposes estimated conversion rate, estimated relative lift and a 90% credible interval.
6. Likely to be Inconclusive means current traffic/results indicate the test is unlikely to gather enough evidence within 90 days to reach 90% confidence. This is an evidence state, not proof of equivalence or failure.
7. Apple's pre-test duration estimate uses historical daily impressions and new downloads plus a developer-selected desired conversion-rate improvement. Apple explicitly says this estimate is informational and does not affect the test.
8. More treatments can extend time to a conclusive result. For sparse niche apps, treatments should therefore exist only for materially useful hypotheses, not because the platform permits three.
9. PPO is not available for Custom Product Pages. CPP remains deterministic intent routing; PPO is randomized creative evidence on the ordinary product-page population.
10. Releasing a new app version during a running test may affect results when that version changes assets or metadata under test. Overlapping tests on overlapping elements also weaken attribution.
11. Applying a treatment while a test is running stops the test. Screenshot/preview treatment assets can be applied to the current page; an icon treatment requires the icon to become the default in a subsequent app version.

## BB0–BB5 Apple PPO Decision Gate

**BB0 — Uncontrolled creative change**
Store assets are changed without a preserved hypothesis or randomized evidence.

**BB1 — PPO exists, contract incomplete**
A test exists but traffic allocation, localization, treatment, baseline, dates or result semantics are not preserved.

**BB2 — Native test captured**
Control/treatments, eligible localizations, treatment traffic percentage, asset deltas, start/stop dates, exact Apple result status and displayed metrics are preserved, but evidence interpretation/downstream utility is incomplete.

**BB3 — Decision-grade PPO**
Requires BB2 plus: one material hypothesis; exact baseline; treatment count; traffic allocation; eligible localization scope; five-first-download reporting-threshold state; estimated conversion rate; estimated relative lift; confidence; 90% credible interval where exposed; result state; 90-day censoring/inconclusive state; version/metadata changes during test; and AY evidence-sufficiency context. `Performing Better`/`Worse` is interpreted according to Apple's current >=90% confidence contract, not translated into Google terminology.

**BB4 — Growth-grade PPO**
BB3 plus evidence that the selected treatment preserves or improves qualified acquisition, first value and useful return. A proximal Store winner is not automatically a business winner.

**BB5 — Reusable experiment memory**
Wins, losses, inconclusive tests and stopped/contaminated tests are retained with hypothesis, asset delta, audience/localization, statistical state, downstream outcome and retirement/retest rationale. Future niche apps can reuse the method without blindly reusing the creative.

## Sparse-niche operating rules
- Do not interpret the five-download display threshold as sample adequacy.
- Do not broaden MintTap beyond genuine YieldMax-investor intent merely to force a conclusive PPO result.
- Prefer one strong treatment hypothesis when traffic is scarce; platform maximum treatment count is not a target.
- Preserve `Likely to be Inconclusive` as a legitimate outcome. Do not call it a loss, draw, or zero lift.
- Do not compare Apple's 90% Bayesian confidence/credible interval directly with Google Play MDE/confidence/result labels as if they were the same statistical contract.
- Record exact Apple terminology and semantic date/version in the experiment registry.
- Avoid simultaneous overlapping creative changes and note app-version releases that can contaminate interpretation.
- A treatment should solve a meaningful specialist-message problem. Cosmetic experimentation without a specialist hypothesis is low priority for MintTap and LogMate.

## MintTap implication
The first PPO audit should recover every historical/current test's baseline, treatment asset delta, treatment traffic %, localization scope, dates, first-download reporting state, exact Apple status, estimated conversion/lift, confidence/credible interval, and any app-version change. The decision record then joins AX/AY evidence and first-value/useful-return data. Do not manufacture PPO volume through generic-investor traffic.

## LogMate implication
Define the BB contract before launch, but do not schedule PPO simply because it is available. Pilot traffic is scarce and professionally specific; a PPO is warranted only after a credible Store-message uncertainty exists and enough naturally qualified traffic can accumulate without broadening the audience.

## Cross-platform rule
Apple PPO and Google Play Store Listing Experiments are both randomized Store experiments, but they are not one interchangeable statistical system. Preserve native platform semantics first; compare business outcomes only after normalization at downstream qualified acquisition / first value / useful return.

## Sources
- Apple Developer, App Store Connect Analytics — Product Page Optimization: https://developer.apple.com/help/app-store-connect-analytics/acquisition/product-page-optimization
- Apple Developer, Overview of Product Page Optimization: https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/overview-of-product-page-optimization
- Apple Developer, Create a test: https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/create-a-test
- Apple Developer, Run a test: https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/run-a-test
- Apple Developer, Apply a test treatment: https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/apply-a-test-treatment-to-your-product-page
