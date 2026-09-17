# 067 — Store Experiment Stopping and Interpretation Rules

Date: 2026-09-17
Status: CANONICAL

## Why this exists
Research 066 established that sparse-niche apps must budget evidence before launching randomized Store tests. This note closes the next operational gap: once a test is running, when is it legitimate to act, stop, repeat, or declare it inconclusive?

## Authoritative platform facts refreshed 2026-09-17

### Apple Product Page Optimization
Apple App Store Connect Analytics now describes PPO analysis as Bayesian analysis designed for App Store product-page data. Results appear after at least five first-time downloads are attributed to the test, but this is only a reporting threshold. Apple assigns performance labels when sufficient evidence accumulates: `Performing Better` / `Performing Worse` require at least 90% confidence. Apple can label a treatment `Likely to be Inconclusive` when current traffic/results make reaching 90% confidence within the test window unlikely. Apple explicitly says not to end tests early; time to evidence depends on traffic and effect magnitude. Apple’s test-creation UI estimates duration and required impressions from historical daily impressions/downloads and the selected conversion-improvement target. Tests normally run up to 90 days.

Apple also warns that releasing a new app version containing assets or metadata involved in the test can affect results. Overlapping creative changes therefore create interpretation risk.

Primary sources:
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/product-page-optimization
- https://developer.apple.com/kr/help/app-store-connect/create-product-page-optimization-tests/create-a-test/
- https://developer.apple.com/kr/help/app-store-connect/create-product-page-optimization-tests/overview-of-product-page-optimization

## Company interpretation rules

### 1. Reporting threshold is not decision threshold
`data visible` ≠ `winner established`.

Five first-time downloads merely make Apple PPO analytics visible. Never use this threshold to call a winner, publish a conversion claim, or standardize an asset.

### 2. Do not stop on an attractive early lift
Early conversion lift is descriptive evidence while the platform still reports `Collecting Data`. A large-looking early delta is not a company decision rule. The platform confidence/status must mature, and downstream quality must remain acceptable.

Rule: **Status Before Story.**

### 3. Inconclusive is a valid result
If Apple reports `Likely to be Inconclusive`, do not repeatedly reframe the same weak treatment until a favorable sample appears. Diagnose whether the cause is insufficient traffic, an effect too small to matter, an unstable baseline, or a weak hypothesis.

Rule: **Inconclusive Is Information, Not Failure.**

### 4. Practical significance must accompany platform confidence
A treatment can become statistically credible yet be operationally unimportant. Before launch, record the minimum conversion improvement that would justify creative production, localization, review, and maintenance. After the test, compare the estimated lift with that precommitted threshold.

Decision matrix:
- platform evidence mature + material lift + activation guardrail intact → candidate to adopt;
- platform evidence mature + trivial lift → do not operationalize merely because confidence is high;
- evidence immature → continue only while the original evidence window remains operationally reasonable;
- likely inconclusive → stop treating randomization as the default learning method and return to stronger hypotheses/qualitative evidence.

### 5. Conversion cannot overrule downstream value
Store conversion is an intermediate metric. A treatment that increases downloads but attracts users who fail semantic first value, misunderstand the product, or do not return is not a marketing win.

For MintTap and future niche apps, adoption requires a downstream guardrail appropriate to available telemetry. If activation telemetry is not trustworthy, Store experimentation remains gated rather than substituting conversion for value.

Rule: **Conversion Cannot Veto Activation.**

### 6. Preserve test interpretability
Do not intentionally introduce overlapping Store creative changes, major promise changes, or product/onboarding changes during a test when they would make the result uninterpretable. If a necessary product release materially changes the tested promise/value path, mark the test contaminated and do not treat its result as clean causal evidence.

Rule: **Contaminated Tests Do Not Graduate Claims.**

### 7. Sparse traffic changes the default learning method
For MintTap/LogMate-scale niches, randomized Store tests are an escalation step, not the default. Before enough qualified traffic exists, use:
1. claim/evidence audit;
2. specialist comprehension sessions;
3. source-to-store semantic consistency checks;
4. stable baseline observation;
5. platform estimator;
6. only then randomized testing.

## Required pre-test record
Every future Store experiment record must contain:
- decision that will change if treatment wins;
- one material hypothesis;
- exact asset(s) changed;
- eligible localization/traffic;
- platform-estimated duration and evidence volume;
- precommitted minimum worthwhile lift;
- downstream activation/value guardrail;
- contamination conditions;
- stop/adopt/retest rules.

## MintTap decision
MintTap remains NOT ELIGIBLE for PPO/Store Listing Experiment execution. 067 does not open the gate. Semantic first-value remediation, trustworthy downstream measurement, exact live Store creative audit, and qualified-traffic feasibility remain prerequisites.

## Reusable principle
**Precommit the decision rule before seeing the lift.** Sparse traffic makes opportunistic interpretation especially dangerous because every impression is expensive learning inventory.