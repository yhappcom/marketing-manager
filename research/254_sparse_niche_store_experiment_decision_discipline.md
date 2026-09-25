# 254 — Sparse-Niche Store Experiment Decision Discipline

Validated: 2026-09-25

## Why this addition exists
MintTap and LogMate serve narrow professional audiences. In sparse traffic, repeatedly changing Store assets because a short window “looks better” creates false learning. This note converts Apple’s current measurement capabilities into a portfolio rule for low-volume apps.

## Authoritative platform facts
- Apple Product Page Optimization (PPO) can test up to three treatments of icons, screenshots, and previews. Eligible users are randomly assigned, and App Analytics reports estimated conversion-rate lift plus confidence.
- Releasing an app version while a PPO test is running can affect results when the release contains assets or metadata involved in the test.
- PPO does not run on Custom Product Pages (CPPs); CPPs are intent/audience routing surfaces, not randomized creative experiments.
- Apple CPP analytics can evaluate downstream engagement, retention and monetization, but CPP-level data appears only after at least five first-time downloads.
- Apple peer-group benchmarks expose 25th/50th/75th percentile comparisons for metrics including download conversion and retention, with peer groups based on category/business model and optionally download volume.

Sources:
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/overview-of-product-page-optimization
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/custom-product-pages
- https://developer.apple.com/help/app-store-connect-analytics/benchmarks/peer-group-benchmarks
- https://developer.apple.com/app-store/product-page/

## FU0–FU6 Sparse-Niche Store Experiment Gate
FU0 — Question integrity: state one decision the test can resolve.
FU1 — Surface integrity: use randomized PPO for creative causality; use CPP/CSL for intent routing. Do not infer creative causality from routed audiences.
FU2 — Traffic sufficiency: estimate whether the app can plausibly accumulate useful evidence before launching the test. Sparse traffic is a valid reason not to test yet.
FU3 — Contamination control: avoid overlapping releases, major acquisition pushes, localization changes, or other material changes that destroy interpretability.
FU4 — Confidence discipline: do not ship a treatment because of early directional lift alone. Record estimated lift, confidence and exposure duration.
FU5 — Downstream-value check: conversion is not the terminal objective. Where data exists, compare activation/retention/repeated specialist value; CPP acquisition should be evaluated as an audience cohort, not as a randomized treatment.
FU6 — Decision: KEEP / CONTINUE / INCONCLUSIVE / RETIRE. “Inconclusive” is a successful statistical outcome, not permission to cherry-pick the apparent winner.

## Portfolio application
### MintTap
Do not split scarce Store traffic across ticker-by-ticker experiments. Prefer a business-level hypothesis such as whether distribution/ROC clarity or portfolio tracking is the stronger default Store promise. Preserve ticker-specific demand for routing evidence only when the product experience actually differs.

### LogMate
Pre-launch has no live Store conversion evidence, so speculative PPO is impossible. Establish the truthful default page first. After release, wait for enough traffic to support a single high-value hypothesis; pilot-specific wording or import/totals themes should not be rotated rapidly merely to create activity.

## Company operating rule
A niche app does not need continuous A/B testing. It needs continuous decision quality. If traffic is too sparse, use authoritative platform guidance, qualitative specialist evidence, search/community language and peer benchmarks to choose a defensible default, then accumulate evidence. Never manufacture statistical certainty from low counts.

## Ledger
`app → market/localization → surface → hypothesis → control/treatment → start/end → material concurrent changes → exposure/conversion evidence → confidence → downstream value → peer benchmark context → decision`

## Forbidden inferences
- apparent early winner = proven winner
- CPP conversion difference = creative causal effect
- peer benchmark percentile = target that must be gamed
- more simultaneous treatments = faster learning
- inconclusive test = failed test
- low traffic = permission to pool unrelated markets/intents

## Next validation
Apply FU0–FU6 only when actual MintTap App Store Connect/Play Console traffic and experiment inventory are available. For LogMate, retain as launch-readiness doctrine until post-release evidence exists.
