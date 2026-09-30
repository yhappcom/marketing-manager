# Research 323 — Sparse-Niche Store Experiment Feasibility Contract

Validated: 2026-09-30

## Decision

For a niche app, an A/B test is not automatically the best way to learn. Before spending scarce Store traffic, test **feasibility**: whether the available population can distinguish a business-material effect within the platform's experiment horizon. If not, preserve traffic and use stronger qualitative/observational evidence until traffic or expected effect changes.

This extends the existing sparse-niche decision system. It does not weaken experimentation; it prevents underpowered cosmetic testing from becoming ritual.

## Current platform evidence

### Apple Product Page Optimization

Apple PPO can test up to three treatments. Traffic allocated to the test is divided across treatments, while the remainder stays on the original page. Apple estimates the duration and impressions needed for a selected conversion improvement using existing performance data. Tests run for at most 90 days. Analytics uses Bayesian analysis; results appear after at least five first-time downloads are attributed to the test. At 90% confidence a treatment may be labeled Performing Better or Performing Worse; Apple can also label a test Likely to be Inconclusive.

Operational consequence: more treatments and narrower localization slices consume scarce niche traffic. Five downloads is only the display threshold, not evidence that the test is decision-ready.

Sources:
- https://developer.apple.com/app-store/product-page-optimization/
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/product-page-optimization
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/create-a-test/

### Google Play Store Listing Experiments

Google Play now estimates the time and acquisitions/opens/pre-registrations required for statistical significance before launch. The operator chooses a target metric (unique user install clicks, open clicks, or pre-registration clicks), audience share, minimum detectable effect (MDE), confidence level, and up to two variants. Google explicitly notes that raising confidence can extend the test; an effect smaller than the MDE is treated as a draw. Results can remain More data needed. Experiments auto-complete after six months.

Google recommends changing one asset at a time so causal interpretation is clearer.

Source:
- https://support.google.com/googleplay/android-developer/answer/12053285

## HY0–HY9 — Store Experiment Feasibility Contract

**HY0 — Business decision first.** Define what decision changes if the result is positive, negative, draw, or inconclusive.

**HY1 — Material effect threshold.** Set the smallest conversion/intent-click improvement worth operational effort before configuring the test. Do not lower the threshold merely to obtain a result.

**HY2 — Population forecast.** Estimate eligible impressions/visitors and expected conversions for the exact Store, locale, listing, and route being tested.

**HY3 — Platform feasibility check.** Use Apple duration/impression estimates or Google time/sample estimates before launch. If the material effect is unlikely to be distinguishable inside the platform horizon, classify the test as NOT FEASIBLE.

**HY4 — Variant conservation.** Use the fewest variants needed. Sparse traffic split across extra variants/locales slows learning and can turn a useful hypothesis into an inconclusive experiment.

**HY5 — One causal question.** Prefer one materially different asset/promise variable at a time unless the decision explicitly concerns a bundled concept.

**HY6 — Metric identity.** Apple conversion and Google install/open/pre-registration click metrics are platform-defined outcomes, not first/repeated specialist value. Record the denominator and target metric explicitly.

**HY7 — Inconclusive is information.** Likely to be Inconclusive, More data needed, draw, or horizon expiry is not a losing creative. It means the experiment did not justify a directional business claim at the configured sensitivity.

**HY8 — Downstream quality gate.** A Store winner is not automatically a business winner. After rollout, compare acquisition/open → first specialist value → repeated specialist value and monetization/retention guardrails.

**HY9 — Decision.** RUN / REDESIGN / WAIT-FOR-TRAFFIC / USE-OBSERVATIONAL-EVIDENCE / KEEP-CURRENT / ROLLOUT / REVERT / UNKNOWN.

## MintTap application

MintTap should not spend limited Store traffic on icon-color, minor wording, or ticker-clone tests merely because PPO/SLE exists. Candidate tests should represent a material investor promise difference: for example, generic “YieldMax tracker” positioning versus a clearly evidenced portfolio/distribution/recovery workflow, provided both accurately describe the product.

Before every experiment record:
- exact Store/listing/locale;
- current eligible traffic;
- baseline target metric;
- business-material effect threshold;
- platform-estimated duration/sample;
- number of variants;
- downstream specialist-value event;
- stop/rollout rule.

If Apple predicts that a material effect cannot resolve inside 90 days, or Google predicts an impractical sample/time requirement, do not weaken the hypothesis until it becomes statistically convenient. Wait, aggregate only genuinely equivalent traffic, or use Store query/referrer, review, community, owned-reference, and activation evidence to improve the next hypothesis.

## LogMate application

At launch, LogMate is likely to have even less experiment traffic. Early professional-pilot evidence should therefore prioritize whether the Store promise matches real workflows: import/migration, duplicate reconciliation, Previous Totals, export/certificate integrity, and offline/device continuity. Do not burn launch traffic on cosmetic A/B testing before enough eligible traffic exists.

A later experiment becomes appropriate when one professional intent has enough traffic to test a material promise or asset difference without mixing incompatible pilot segments.

## Reusable preflight ledger

`app | store | listing/locale | hypothesis | business decision | baseline metric | material effect | eligible traffic/day | variants | traffic allocation | platform-estimated sample/time | horizon | feasibility | downstream first value | repeated value | result state | operator minutes | decision`

## Anti-patterns

- Treating the minimum display threshold as adequate sample size.
- Adding variants because the platform permits them.
- Testing several locales together when their intent differs.
- Re-running an inconclusive test unchanged until random noise produces a winner.
- Calling a draw a failure.
- Applying a Store winner without checking downstream user quality.
- Choosing a tiny MDE that is economically irrelevant.
- Optimizing for statistical significance rather than a business-material improvement.

## Next operational target

Audit MintTap's actual App Store and Google Play experiment traffic. For each plausible intent-level hypothesis, fill the feasibility ledger before creating any new experiment. If current traffic cannot distinguish a material effect, freeze Store A/B testing and redirect zero-cost effort to higher-information surfaces until the feasibility gate changes.
