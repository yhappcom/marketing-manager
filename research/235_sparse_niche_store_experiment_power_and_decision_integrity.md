# Research 235 — Sparse-Niche Store Experiment Power & Decision Integrity

Date: 2026-09-24
Status: Validated from current Apple and Google primary sources

## Why this matters
MintTap and LogMate serve narrow professional/investor audiences. Their Store traffic may be too small for frequent conventional A/B testing. Repeatedly launching underpowered tests, stopping early, or treating an inconclusive result as proof of equivalence wastes scarce organic traffic and can degrade a truthful listing.

This research converts Apple Product Page Optimization (PPO) and Google Play Store Listing Experiments into a sparse-niche decision protocol.

## Validated Apple state
Apple PPO can test alternate icons, screenshots, and app previews. One test can contain up to three treatments and runs for at most 90 days. Traffic is randomly allocated, and a person continues seeing the same treatment during the test.

Apple now reports PPO through App Store Connect Analytics using statistical analysis designed for product-page data. Results appear only after at least five first-time downloads are attributed to the test. A treatment can be labeled better or worse after reaching at least 90% confidence; a low-traffic test can instead be labeled potentially inconclusive. Apple explicitly notes that smaller lifts take more data/time than large lifts and advises against ending a test before statistical significance.

Apple's test-duration estimator uses existing impressions and first-time-download performance to estimate whether a chosen conversion improvement can reach at least 90% confidence within the 90-day test window. Apple suggests reducing treatment count or increasing allocated traffic when the estimate exceeds 90 days.

Therefore:
- five first-time downloads is a reporting threshold, not evidence that a winner exists;
- 90 days is a maximum test duration, not a requirement to keep an obviously invalid test alive;
- 90% confidence is not the same as business materiality;
- an inconclusive result does not prove treatments are equivalent.

## Validated Google Play state
Google Play Store Listing Experiments can run one default-graphics experiment or up to five localized experiments per app at the same time. A default graphics experiment tests graphics in the default listing language; localized experiments can test text and graphics in up to five languages.

Current target metrics include unique-user install clicks, open clicks, or pre-registration clicks. Play estimates the time and event count required for statistical significance before launch.

Advanced controls include:
- up to two experimental variants;
- experiment audience percentage;
- minimum detectable effect (MDE);
- confidence level.

Google states that increasing confidence reduces false-positive risk but can lengthen the experiment. The MDE is the minimum difference required to call one variant better; a smaller difference is treated as a draw under the configured experiment. Google recommends testing one asset at a time to preserve causal interpretation. A result may explicitly remain “More data needed.”

Therefore:
- target-metric identity must be preserved: install click, open click, and pre-registration click are not interchangeable;
- MDE is a decision design parameter, not the observed uplift;
- “draw” under a chosen MDE is not proof of exact equality;
- “More data needed” is unknown, not failure;
- running more variants divides scarce traffic and can delay a decision.

## Sparse-niche operating principle
For a niche app, the first question is not “What should we A/B test?” It is “Can the available traffic answer a decision-relevant question inside the platform's experiment window?”

Use the sequence:
`material decision → single falsifiable hypothesis → target metric/denominator → baseline traffic → minimum worthwhile effect → platform power/time estimate → experiment or no-experiment decision → fixed execution → statistical result → downstream specialist-value check`.

If the platform estimate says the experiment is unlikely to resolve within the available window, do not manufacture precision. Prefer a stronger creative contrast, fewer variants, more traffic allocation where appropriate, a later higher-traffic period, or a non-experimental evidence route. Never compensate by repeatedly peeking and stopping when a preferred variant temporarily leads.

## EU0–EU5 Sparse-Niche Store Experiment Integrity Gate

### EU0 — Decision identity
Write the product/marketing decision that will change if the experiment resolves. No experiment is authorized merely because a Store tool exists.

### EU1 — Hypothesis and treatment isolation
Define one falsifiable hypothesis and, where practical, change one interpretable asset/value proposition at a time. Avoid overlapping concurrent tests that make attribution ambiguous.

### EU2 — Metric and denominator identity
Record platform, experiment type, target metric, denominator, locale/territory, traffic allocation, baseline period, and eligibility. Preserve Apple PPO conversion semantics separately from Google install/open/pre-registration click metrics.

### EU3 — Power/materiality integrity
Before launch, record baseline traffic, platform-estimated duration/event requirement, treatment count, traffic allocation, confidence setting, and the smallest uplift that would actually justify changing the listing. For Google, preserve configured MDE explicitly. If the test is structurally underpowered for the business decision, do not run it merely to obtain a dashboard result.

### EU4 — Execution/stopping integrity
Precommit the stopping rule. Do not stop because a preferred treatment temporarily leads. Treat Apple “potentially inconclusive,” Google “More data needed,” threshold-suppressed data, and unfinished confidence states as unresolved rather than winners/losers. Record releases, metadata changes, seasonality, featuring, and acquisition-mix changes that can contaminate interpretation.

### EU5 — Qualified-value decision
A statistically better Store target metric authorizes a listing decision only at that funnel stage. It does not prove better first specialist value, retention, trust, or sustainable ad revenue. Where feasible, compare downstream product quality/value evidence before standardizing a more aggressive promise.

## MintTap application
MintTap should not maintain an always-on Store experimentation calendar. YieldMax-specialist traffic is inherently narrower than mass-market utility traffic, so scarce visitors should only be split when the experiment can answer a material question.

Priority candidates are substantial promise/creative questions such as whether a truthful YieldMax-specific value proposition materially improves qualified Store action. Minor icon shades, tiny wording changes, or many simultaneous variants are poor default uses of sparse traffic.

Before the next Apple PPO or Google experiment, create an experiment card containing:
`decision × hypothesis × platform/surface × locale × baseline traffic × target metric × denominator × minimum worthwhile lift/MDE × variants × traffic allocation × estimated duration/events × stopping rule × downstream-value check`.

If Apple predicts >90 days for a useful lift, reduce variants/adjust traffic or defer. If Google predicts insufficient events or returns More data needed, preserve the result as unresolved; do not call the control or variant a winner from point estimates alone.

## LogMate application
Because LogMate is prelaunch, do not consume launch traffic on low-value cosmetic experiments. First establish truthful pilot-native positioning and enough Store traffic to support inference. Early launch cohorts are more valuable for validating onboarding, import/logging value, reliability, and professional trust than for micro-optimizing creative.

Once traffic exists, use localized experiments only where there is a genuine locale-specific hypothesis. Do not fragment a small pilot audience across multiple locales and variants merely because Google permits concurrent localized tests.

## Reusable company rule
For every future niche app, Store experimentation is optional. Evidence quality outranks experiment count. The default for sparse traffic is a pre-test power/materiality check; the acceptable result set is `winner / loser / draw-under-defined-MDE / unresolved`, not merely `winner / loser`.

Never convert:
- reporting threshold → sufficient evidence;
- confidence → business importance;
- draw → exact equivalence;
- inconclusive/More data needed → no effect;
- Store click/download uplift → retained specialist value;
- platform permission to run many variants → reason to split scarce traffic.

## Sources
- Apple Developer, Product Page Optimization: https://developer.apple.com/app-store/product-page-optimization/ (accessed 2026-09-24).
- Apple Developer, App Store Connect Analytics — Product Page Optimization: https://developer.apple.com/help/app-store-connect-analytics/acquisition/product-page-optimization (accessed 2026-09-24).
- Apple Developer, App Store Connect — Overview of Product Page Optimization: https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/overview-of-product-page-optimization (accessed 2026-09-24).
- Google Play Console Help, Run A/B tests on your store listing: https://support.google.com/googleplay/android-developer/answer/12053285 (accessed 2026-09-24).

## Next evidence
1. MintTap: inspect historical/current Apple PPO and Google Store Listing Experiment traffic/results and reconstruct experiment cards before authorizing another test.
2. Determine whether actual MintTap traffic can resolve a materially useful lift within Apple/Google limits; if not, freeze micro-tests and use stronger hypotheses or observational evidence.
3. LogMate: keep Store experiments out of launch-critical path until traffic and a decision-relevant hypothesis justify them.
