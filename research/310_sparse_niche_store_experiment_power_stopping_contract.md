# Research 310 — Sparse-Niche Store Experiment Power & Stopping Contract

Validated: 2026-09-29

## Decision

For low-traffic specialist apps, Store A/B testing is an evidence-allocation problem, not an experimentation-volume problem. Do not launch a Store experiment unless the available traffic can plausibly distinguish a business-material effect within the platform's usable test horizon. When traffic is sparse, reduce variants, concentrate traffic/localization, test larger semantic changes, or keep the current listing and gather qualitative/problem evidence instead.

## Current platform evidence

### Apple Product Page Optimization (PPO)

Apple currently permits one PPO test at a time with up to three treatments. Traffic assigned to the test is split across treatments; more treatments therefore reduce per-treatment traffic and can lengthen time to a conclusive result. Apple provides an optional duration estimator using existing daily impressions and new downloads, estimating impressions/time needed to reach the chosen conversion improvement at at least 90% confidence. Tests run for at most 90 days. Apple explicitly suggests fewer treatments or greater traffic allocation when the estimate exceeds 90 days. Apple recommends waiting until a treatment is declared better or worse than baseline with at least 90% confidence before applying/stopping on that basis. Results appear only after five first-time downloads are associated with the test.

PPO is not available for custom product pages. This is operationally important: CPP is a routing surface; PPO is the default-page experimentation mechanism.

### Google Play Store Listing Experiments

Google Play supports experiments on default and custom Store Listings. Current experiment setup estimates the acquisitions/opens/pre-registrations and time needed for statistical significance. Developers select a target metric: unique-user install clicks, unique-user open clicks, or pre-registration clicks. Advanced controls include up to two variants, audience percentage, minimum detectable effect (MDE), and confidence level. Google recommends changing one asset at a time for causal interpretability. Experiments may return “More data needed” or “Draw”; they automatically stop after six months.

Google's MDE control makes the sparse-niche constraint explicit: asking the experiment to resolve a very small uplift requires more evidence. A niche app should not spend months trying to distinguish cosmetic effects that are smaller than the business decision requires.

## Sparse-niche failure modes

1. **Variant dilution** — three Apple treatments or two Google variants are used simply because available, starving each arm.
2. **Localization dilution** — low-volume locales are pooled into an experiment without a decision that actually requires them.
3. **Micro-uplift hunting** — the team asks sparse traffic to prove a 1–2% cosmetic effect that cannot materially change the business.
4. **Repeated inconclusive testing** — “More data needed” is treated as a reason to restart essentially the same test rather than evidence that the design is underpowered.
5. **Routing/experiment confusion** — CPP/CSL variants are created to test copy instead of routing materially different intent; or an A/B test is used when the real question is which specialist intent deserves a dedicated route.
6. **conversion-only winner** — a Store treatment is promoted despite poorer first-open, first specialist value, retention, or revenue quality downstream.
7. **post-hoc storytelling** — a noisy direction is declared a winner before the platform's own evidence threshold supports it.

## HL0–HL9 contract

HL0 **Decision statement** — write the business decision the experiment will change.

HL1 **Material effect floor** — define the smallest uplift worth acting on. If a smaller change would not alter product/marketing action, do not optimize for it.

HL2 **Traffic feasibility** — use the platform estimator before launch. If the desired effect is not plausibly resolvable in the usable horizon, redesign or do not run.

HL3 **Arm minimization** — use the fewest variants necessary. Sparse traffic defaults to one challenger, not maximum arms.

HL4 **Semantic-change gate** — prioritize a materially different specialist promise/proof hierarchy over cosmetic micro-variation. Keep causal scope narrow enough to interpret.

HL5 **Metric fit** — choose the closest available Store metric to the decision. On Google, prefer unique-user open clicks over install clicks when the question is whether acquisition converts into initial engagement, while recognizing neither proves specialist value.

HL6 **Platform stopping discipline** — do not call a winner while the platform reports insufficient evidence. Apple: respect the 90-day horizon and confidence result. Google: respect confidence/MDE outcome, Draw, and More-data-needed states.

HL7 **Downstream guardrail** — Store conversion is provisional success. Join treatment/route evidence, where technically available, to first specialist value, repeated specialist value, retention, support/rating quality, and sustainable ad revenue.

HL8 **Censored-result handling** — an experiment that cannot resolve the material effect is INCONCLUSIVE, not “no difference.” Record the detectable boundary and stop spending operator attention unless future traffic or a larger hypothesis changes the power.

HL9 **Decision** — PROMOTE / KEEP CONTROL / REDESIGN / INCONCLUSIVE / RETIRE HYPOTHESIS.

## MintTap application

Do not test ticker-name swaps, small color differences, or minor screenshot copy unless traffic can resolve a material effect. Higher-value hypotheses are semantic: whether a Store page led by distribution/ROC interpretation, split/reinvestment reconstruction, or portfolio total-return/recovery communicates a recurring investor problem more effectively than a generic tracker proposition. Route materially distinct intent with CPP/CSL; test presentation within a route only when enough traffic exists.

## LogMate application

Pre-launch or early-launch traffic is likely to make fine-grained Store testing weak. First establish which pilot workflow creates demand: import/migration, Previous Totals continuity, duplicate/record integrity, or export/certificate integrity. Do not fragment early traffic across airline/aircraft variants without evidence that the workflow differs. When Store traffic becomes sufficient, test one large professional-value hypothesis at a time.

## Reusable operating ledger

experiment_id | platform | route/listing | decision | control | challenger | target metric | material effect floor | estimated sample/time | traffic allocation | locale | start | platform result | first specialist value | repeated value | retention/revenue guardrail | decision | re-entry trigger

## Re-entry triggers

Reopen an inconclusive hypothesis only if at least one changes materially: Store traffic, specialist intent evidence, effect size worth detecting, treatment semantics, route, localization, or platform experimentation capability.

## Sources

- Apple Developer — Product Page Optimization: https://developer.apple.com/app-store/product-page-optimization/
- App Store Connect Help — Create a test / Run a test / Configure treatments.
- Google Play Console Help — Run A/B tests on your store listing.
