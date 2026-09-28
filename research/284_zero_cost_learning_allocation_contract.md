# Research 284 — Zero-Cost Learning Allocation Contract

Validated: 2026-09-28
Scope: sparse-niche app marketing; MintTap, LogMate, future specialist apps.

## Decision
The scarce resource is operator attention, not channel count. Allocate the next work block to the action that can change a material decision with the least cost and fragmentation.

## GK0–GK8
1. **GK0 Business decision** — name the decision that would change (ship/hold/rewrite/reroute/remove).
2. **GK1 Uncertainty** — identify the missing evidence preventing that decision.
3. **GK2 Decision sensitivity** — ask whether plausible evidence could actually reverse the decision. If not, stop researching it.
4. **GK3 Cheapest discriminating evidence** — prefer existing Store analytics, community language, owned-site evidence, support/review evidence and product telemetry before creating new campaigns or experiments.
5. **GK4 Feasibility / censoring** — reject tests whose traffic is unlikely to distinguish a materially useful effect.
6. **GK5 Fragmentation charge** — every new treatment, campaign token, landing page, social account or micro-cohort must justify the evidence fragmentation and maintenance it creates.
7. **GK6 Specialist-value guardrail** — acquisition evidence is subordinate to first and repeated specialist value.
8. **GK7 Stop / reallocate** — classify the work as RESOLVE, HOLD, INCONCLUSIVE, or STOP; move operator time when further observation has low decision value.
9. **GK8 Re-entry trigger** — record what new traffic, platform change, product release, community signal or failure would justify reopening the question.

## Store-experiment implication
Apple PPO supports up to three treatments, but Apple explicitly warns that more treatments can lengthen time to a conclusive result. Traffic is split among treatments. Apple estimates duration from existing impressions/downloads; a test normally runs for up to 90 days, and the desired conversion improvement may not be detectable in that window.

Apple Analytics begins showing PPO results after five attributed first-time downloads, but that is a reporting threshold, not sufficient evidence of a winner. Current App Store Connect Analytics uses Bayesian analysis; a treatment can be labeled better/worse at 90% confidence and can be labeled likely inconclusive when current traffic is unlikely to reach that confidence. Therefore low-volume apps should not spend repeated operator cycles on cosmetic Store tests merely because the tool exists.

Operational rule: default to baseline + one materially different treatment. If the platform predicts or observed traffic demonstrates that a business-material effect is not distinguishable, reallocate to higher-information work rather than serial micro-tests.

## Zero-cost evidence ladder
Prefer, in order when applicable:
- already-observed product/Store/community evidence;
- authoritative platform eligibility/policy check;
- qualitative specialist-language/problem validation in communities;
- owned asset or Store-promise correction that is useful even without attribution;
- one reversible, materially different distribution/Store test;
- additional instrumentation only when it changes a decision.

This is not a universal channel ranking. It is a marginal learning rule: choose the cheapest next evidence capable of changing the current decision.

## MintTap
Do not fragment research by ticker when the underlying investor job is the same. Before another Store treatment, ask whether uncertainty is actually about Store creative, or about YieldMax-specific promise, first-value completion, Reddit/community demand, owned reference usefulness, or monetization delivery. Prefer evidence that resolves the business-level investor job.

## LogMate
Before sufficient launch traffic exists, pilot workflow evidence and truthful Store positioning usually have greater decision value than micro-optimizing screenshots. Preserve professional workflow integrity; do not manufacture Store events or channel activity to create measurable inventory.

## Reusable portfolio rule
For every proposed marketing task record:
`decision | uncertainty | evidence sought | cheapest source | expected decision change | fragmentation cost | specialist-value guardrail | stop condition | re-entry trigger`.

No task is justified by “more data,” “more content,” “more channels,” or “keep testing.” It must buy decision-relevant information or durable specialist value.

## Sources
- Apple, Create a PPO test: https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/create-a-test
- Apple, Run a PPO test: https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/run-a-test/
- Apple, PPO Analytics: https://developer.apple.com/help/app-store-connect-analytics/acquisition/product-page-optimization
