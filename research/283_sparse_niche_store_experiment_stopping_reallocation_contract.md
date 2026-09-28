# Research 283 — Sparse-Niche Store Experiment Stopping & Reallocation Contract

Validated: 2026-09-28

## Decision problem
For small professional apps, Store experiments can consume scarce operator time while traffic is too sparse to resolve small conversion differences. The correct question is not “can we A/B test?” but “is this hypothesis likely to become decision-useful before the platform window or operator budget expires?”

## Current authoritative constraints
Apple Product Page Optimization (PPO) allows up to three treatments. More treatments divide traffic and can lengthen time to a conclusive result. Apple estimates duration from existing daily impressions/new downloads and explicitly warns the desired improvement may not be reachable within the 90-day maximum. Results appear after at least five first-time downloads associated with the test. Apple recommends waiting to apply/stop until a treatment is declared better or worse with at least 90% confidence. A new app version containing assets/metadata under test may affect results.

Sources:
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/create-a-test
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/run-a-test/
- https://developer.apple.com/app-store/product-page-optimization/
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/overview-of-product-page-optimization

## GJ0–GJ8 contract
GJ0 Hypothesis: one material audience/promise/creative question and the decision it could change.
GJ1 Feasibility: use current Store traffic and platform duration estimate before launch. If the minimum useful effect is unlikely to resolve within the available window, do not launch a fragmented test.
GJ2 Minimum fragmentation: default to one treatment versus control for sparse traffic. Add treatments/localizations only when each represents a materially different decision worth the dilution.
GJ3 Stability: avoid overlapping releases, major acquisition-mix shifts, or other changes likely to confound the tested assets.
GJ4 Evidence state: classify as WIN / LOSS / INCONCLUSIVE / CENSORED-OR-IMMATURE; never convert “not significant” into “same.”
GJ5 Downstream guardrail: Store conversion is not the terminal objective. Check first specialist value and, when cohort maturity permits, repeated specialist value before scaling the winning promise.
GJ6 Stop rule: stop for a reliable loss, platform limit, material confounder, obsolete hypothesis, or when remaining information value is lower than operator opportunity cost. Do not stop merely because an early noisy point estimate looks attractive.
GJ7 Reallocation: if Store experimentation is structurally underpowered, redirect operator time to higher-information zero-cost work: community problem evidence, owned reference assets, Store promise accuracy, product onboarding/core-value friction, or acquisition routing.
GJ8 Re-entry: resume Store experiments when traffic, a materially larger expected effect, a new creative hypothesis, or a product/market change improves expected information value.

## Sparse-niche operating rules
1. Never manufacture extra treatments to “use” platform capacity.
2. Prefer materially different hypotheses over micro-copy/color variants.
3. Treat Apple's five-download display threshold as a reporting floor, not sufficient evidence of a winner.
4. Treat 90 days as a platform ceiling, not a requirement to run every weak experiment for 90 days.
5. A platform-attributed conversion lift is not proof of incremental business value.
6. A treatment that raises Store conversion but reduces first/repeated specialist value is not a growth winner.
7. If traffic cannot resolve the minimum effect worth acting on, record the experiment as infeasible or inconclusive and reallocate; do not repeatedly rerun near-identical tests.
8. Preserve hypothesis, traffic allocation, localization, start/end, releases/acquisition changes, platform result/confidence, first-value guardrail, decision, and re-entry trigger in the experiment ledger.

## MintTap
Prioritize large semantic questions such as whether the Store promise should foreground YieldMax-specific distribution/ROC interpretation versus generic portfolio tracking. Do not split scarce traffic by ticker or test cosmetic variants without a plausible business-level effect. If Store traffic is underpowered, community evidence from YieldMax investor jobs and owned explanatory assets can provide higher information value.

## LogMate
At launch, test only a high-value pilot promise when traffic can support it—for example import/migration continuity versus generic digital logbook positioning. Do not fragment by airline, aircraft type, or roster vendor absent demonstrated intent and sufficient traffic. Protect the truthful specialist promise: Store conversion must lead to successful first logbook value.

## Reusable decision
For future niche apps: experiment capacity is not an obligation. The scarce resource is decision-grade traffic plus operator time. Use randomized Store tests when they can plausibly resolve a material decision; otherwise invest in higher-information learning until the experiment becomes feasible.
