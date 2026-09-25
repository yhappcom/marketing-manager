# Research 262 — Sparse-Niche Store Experiment Registry and Evidence Contract

Validated: 2026-09-26

## Decision

For a sparse professional app, Store experimentation is a scarce evidence budget. Do not run a test merely because the platform exposes an A/B tool. Register the decision question first, estimate whether the traffic can answer it, and preserve downstream product-value evidence separately from the Store result.

Apple Product Page Optimization (PPO) currently allows up to three treatments. Apple explicitly warns that more treatments can lengthen time to conclusion, estimates duration from existing daily impressions and new downloads, runs a test for up to 90 days unless stopped, begins showing results after five first-time downloads are attributed to the test, and labels a treatment Performing Better/Worse at at least 90% confidence. Apple can also mark a test Likely to be Inconclusive when current traffic is unlikely to produce enough evidence within 90 days.

This makes traffic feasibility a precondition, not an afterthought.

## GI0–GI8 Experiment Registry Gate

GI0 — Decision value
- State the business decision that would change if the test wins.
- Reject cosmetic curiosity with no downstream decision.

GI1 — One causal hypothesis
- One primary proposition per experiment.
- Avoid overlapping simultaneous changes that make attribution ambiguous.

GI2 — Baseline contract
Record:
- platform;
- storefront/localization;
- asset/metadata version;
- baseline conversion metric and its exact platform definition;
- observation window;
- acquisition mix;
- app version and material release state.

GI3 — MDE / practical significance
- Define the smallest lift worth acting on before launch.
- A statistically detectable but commercially irrelevant lift is not a useful win.
- Sparse apps should prefer materially different propositions over tiny cosmetic deltas.

GI4 — Traffic feasibility
Before launch record:
- expected eligible impressions/visitors;
- treatment allocation;
- platform duration estimate where available;
- expected test horizon;
- whether the platform itself signals likely inconclusiveness.
If the available traffic cannot plausibly answer the question, use a strong baseline and defer the experiment.

GI5 — Treatment economy
- Default to one treatment versus baseline in sparse traffic.
- Add treatments only when the incremental information value justifies traffic fragmentation.
- Apple permits up to three, but platform capacity is not a recommendation to use all three.

GI6 — Confounder ledger
Record material changes during the test:
- app release;
- Store metadata/assets outside the treatment;
- localization;
- major market/news event;
- seasonality;
- community/social campaign;
- featuring;
- acquisition-source mix;
- measurement-definition/regime change.
Do not explain a Store lift as creative causality when traffic composition changed materially.

GI7 — Platform result
Record:
- status;
- absolute conversion estimate;
- relative lift estimate;
- uncertainty/confidence;
- start/end date;
- stop reason;
- treatment applied or rejected.
Do not early-stop simply because an interim number looks favorable.

GI8 — Business-value validation
A Store winner is not automatically a company winner.
Where measurement permits, compare:
Store exposure → acquisition → qualified activation → repeated specialist value.
If downstream evidence is immature, preserve the Store result as a Store-level finding rather than claiming business growth.

## Minimal canonical record

```
experiment_id:
app:
platform:
storefront_localization:
decision_question:
primary_hypothesis:
baseline_version:
treatment_version:
primary_store_metric:
metric_definition_version:
baseline_rate_window:
mde:
traffic_allocation:
platform_duration_estimate:
planned_horizon:
feasibility: RUN | DEFER | NO-TEST
confounders_expected:
start_date:
end_date:
platform_result:
absolute_rate:
relative_lift:
confidence_or_uncertainty:
stop_reason:
downstream_activation_result:
downstream_repeat_value_result:
decision: KEEP | REJECT | INCONCLUSIVE | DEFER
evidence_links:
notes:
```

## MintTap operating rule

Do not fragment scarce traffic into ticker-by-ticker experiments merely because TSLY, MSTY, CONY or other YieldMax communities differ. First test only propositions capable of changing the business-level Store promise, such as whether distribution/ROC-specialist positioning materially outperforms generic portfolio-tracker framing. Distribution dates, fund-specific news and market volatility belong in the confounder ledger because they can change traffic composition.

## LogMate operating rule

At launch, spend scarce pilot traffic on strong positioning questions, not typography/color micro-tests. Examples of high-information questions are whether the first Store story should lead with rapid flight logging or import/logbook continuity. A polished pilot-native baseline can be preferable to an underpowered A/B test.

## Cross-platform rule

Do not merge Apple and Google test statistics into a synthetic universal conversion metric. Preserve each platform's native metric contract and compare platforms downstream only at identically defined qualified activation/repeated-value events.

## Evidence hierarchy

1. Current platform documentation for test mechanics and metric definitions.
2. App-specific Store console evidence for traffic, estimates and results.
3. Internal downstream product analytics for activation/repeated value.
4. Community/social observations only as hypothesis-generation evidence, not Store-test proof.

## Sources validated

- Apple Developer — Create a Product Page Optimization test: up to three treatments; additional treatments can extend time to conclusion; traffic allocation; localization selection; duration estimate based on existing daily impressions/new downloads; 90-day maximum.
- Apple Developer — Run a test: results begin after five attributed first-time downloads; test runs up to 90 days unless manually stopped.
- Apple Developer — Product Page Optimization analytics: Bayesian analysis; 90% confidence for Performing Better/Worse; Likely to be Inconclusive when current traffic is unlikely to resolve within 90 days; avoid overlapping simultaneous tests.

## Next learning target

Stop expanding experiment theory. Apply this registry to the first real MintTap or LogMate Store hypothesis only when current Store-console traffic/baseline evidence is available. In parallel, return to zero-cost distribution: build a reusable community-to-owned-web-to-Store evidence ledger that distinguishes useful community contribution from promotional posting and links channel activity to qualified specialist value.
