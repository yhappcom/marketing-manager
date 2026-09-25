# Research 261 — Sparse-Niche Store Experiments Need a Minimum-Detectable-Lift Budget

Validated: 2026-09-26

## Decision
For low-volume professional apps, Store experimentation is a scarce traffic-allocation decision, not a continuous optimization ritual. Before starting an Apple Product Page Optimization (PPO) test, estimate whether the available traffic can resolve a business-relevant lift within the platform window. If not, do not split traffic merely to create an experiment; strengthen the hypothesis, make a larger truthful creative change, aggregate the eligible audience, or wait for sufficient traffic.

## GH0–GH6 Sparse Experiment Feasibility Gate
1. **One causal question** — define one user-belief hypothesis and the asset change intended to test it.
2. **Business-relevant MDE** — state the smallest relative/absolute conversion lift worth shipping before launch.
3. **Traffic sufficiency** — use the platform's duration/impression estimate; do not assume a test will become conclusive.
4. **Variant restraint** — use the fewest treatments needed. More treatments divide traffic and lengthen time to a decision.
5. **Localization integrity** — only combine localizations when the same promise and creative hypothesis are semantically valid across them.
6. **Regime stability** — avoid interpreting a test across major app-version, metadata, seasonality, or acquisition-mix changes without documenting the confounder.
7. **Decision discipline** — ship only a supported winner; record INCONCLUSIVE when evidence is insufficient rather than choosing the visually preferred treatment.

## Current Apple constraints that matter
Apple currently permits up to three PPO treatments. The developer chooses the traffic proportion; that treatment traffic is split across treatments. Apple explicitly notes that adding treatments can increase the time required to reach a conclusion. The duration estimator uses existing daily impressions and new-download performance and shows estimated time/impressions for a chosen conversion improvement. Tests run for up to 90 days.

Analytics results appear after at least five first-time downloads are attributed to the test. Apple labels a treatment Performing Better/Worse at at least 90% confidence and can label a test Likely to be Inconclusive when the available evidence is unlikely to resolve within 90 days. This is a platform signal to stop treating "run an A/B test" as automatically superior to a disciplined no-test decision.

A new app version can affect an active test when it changes assets/metadata under test. Applying a treatment stops the test; screenshot/preview treatment assets can be applied directly, while an icon change must become the default icon in a subsequent app version.

## MintTap operating rule
Do not fragment already sparse YieldMax traffic into ticker-specific PPO tests unless traffic evidence supports the MDE. Prefer a business-level hypothesis such as whether the first screenshots communicate portfolio/distribution/ROC utility more clearly than a generic tracker promise. Market/distribution-event traffic shifts must be logged as possible acquisition-mix confounders.

## LogMate operating rule
At launch, prioritize a single strong pilot-native product-page promise and collect baseline traffic before testing cosmetic alternatives. A test is justified when it asks a consequential comprehension question—for example whether import/logbook continuity or flight-entry utility is the stronger first-screen promise—and the expected traffic can resolve a useful lift. Do not consume launch traffic on typography/color micro-tests.

## Reusable operating record
For every Store experiment retain:
`hypothesis | audience/localization | baseline definition | MDE | treatments | traffic allocation | expected duration/impressions | start/end | app-version/metadata changes | acquisition-mix anomalies | result/confidence | downstream activation check | decision`.

Store conversion is an upstream diagnostic. A creative winner is not a business winner if qualified activation or repeated specialist value deteriorates.

## Sources
- Apple Developer, “Create a test — Product Page Optimization,” checked 2026-09-26.
- Apple Developer, “Product Page Optimization — Analytics,” checked 2026-09-26.
- Apple Developer, “Overview of product page optimization,” checked 2026-09-26.
- Apple Developer, “Apply a test treatment to your product page,” checked 2026-09-26.
