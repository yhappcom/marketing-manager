# Research 335 — Sparse-Niche Store Experiment Allocation Contract

Validated: 2026-09-30

## Decision
For small specialist apps, Store experimentation is an evidence-allocation problem, not an activity target. Do not split scarce traffic across cosmetic variants unless the decision could materially change acquisition and the platform can plausibly resolve it.

## Authoritative Apple constraints
- App Store Product Page Optimization (PPO) can test up to three treatments of icon, screenshots, and previews.
- Traffic assigned to testing is divided across treatments; adding treatments therefore dilutes observations per treatment.
- Apple estimates required duration/impressions from existing daily impressions/downloads and the requested conversion improvement.
- A test runs at most 90 days unless manually stopped.
- Analytics appears after at least five first-time downloads attributed to the test; this is a reporting threshold, not evidence that the test is decision-ready.
- Current App Store Connect Analytics uses Bayesian analysis. A treatment can be labelled Performing Better/Worse at 90% confidence; Apple can also flag Likely to be Inconclusive.
- Releasing a new app version while a test is running can affect results if the release changes assets/metadata under test.
- PPO is not available for custom product pages; intent-specific routing and randomized default-page experimentation are therefore different tools.

Primary sources:
- Apple, Overview/Create/Run Product Page Optimization tests, App Store Connect Help (verified 2026-09-30).
- Apple, Product Page Optimization analytics, App Store Connect Analytics Help (verified 2026-09-30).

## IK0–IK9
IK0 Decision: name the business decision before the variant.
IK1 Materiality: specify the minimum lift worth implementing.
IK2 Traffic sufficiency: use platform duration/impression estimates; if the useful effect is unlikely to resolve inside the available horizon, HOLD.
IK3 Variant economy: use the fewest treatments needed. Sparse traffic normally favors one strong challenger, not three weak variants.
IK4 Single hypothesis: change assets that represent one coherent value proposition; avoid bundles whose result cannot teach what caused the effect.
IK5 Audience integrity: do not mix materially different specialist intents merely to manufacture sample size.
IK6 Stability: avoid overlapping releases or other material Store changes that contaminate interpretation.
IK7 Platform evidence: respect Collecting Data / Performing Better / Performing Worse / Likely Inconclusive; five downloads is visibility, not proof.
IK8 Downstream value: conversion lift is provisional until the acquired cohort reaches first and repeated specialist value without trust/retention degradation.
IK9 Decision: SCALE / KEEP-CONTROL / HOLD / REDESIGN-HYPOTHESIS / INCONCLUSIVE / RETIRE.

## MintTap
Do not run ticker-color/icon micro-tests merely because PPO is free. A useful challenger must represent a materially different specialist promise, e.g. portfolio/recovery understanding versus distribution/ROC reconstruction, and must remain truthful under the Claim Registry. If Store traffic cannot distinguish the minimum useful lift in the platform horizon, preserve traffic and learn from Search terms, reviews, community problem evidence, and owned-reference routing first.

## LogMate
Pre-launch PPO is impossible because the app must be live/Ready for Distribution. After launch, do not immediately fragment low pilot traffic. First establish a stable default page and enough acquisition evidence. Candidate hypotheses should correspond to professional workflows such as fast flight logging versus import/migration continuity, not generic visual preference.

## Reusable rule
A free experiment still spends scarce impressions, operator attention, and decision time. In sparse niches, "no test" is often the higher-information choice until a strong hypothesis and resolvable materiality threshold exist.

## Next evidence target
Audit actual MintTap App Store traffic and current/default creative inventory. Record daily unique impressions, first-time downloads, localization mix, referral/search mix, and the smallest conversion lift that would change a creative decision. If those data cannot support a material PPO result, mark PPO HOLD and redirect learning to intent routing/community/owned-reference evidence.
