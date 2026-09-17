# 081 — Store Peer Benchmarks: Diagnostic, Not Target

Last validated: 2026-09-18

## Decision

Store peer benchmarks are contextual diagnostics, not growth targets, launch gates, or substitutes for specialist first-value evidence.

Canonical rule:

> **Benchmark the funnel to locate a problem; do not optimize the product to imitate the benchmark.**

For sparse professional apps, a category percentile can answer “is this Store/funnel metric unusual among the platform-defined peer set?” It cannot answer “does a YieldMax investor or airline pilot receive the intended value?”

## First-party evidence

Apple App Store Connect currently provides peer-group benchmarks for eligible metrics including download conversion, Day 1/7/28 retention, crash rate, and certain monetization metrics. Peer values are aggregated and privacy-protected; Apple describes them as relative context rather than precise competitive rankings. Peer groups can reflect primary category, business model, and download-volume refinement, with 25th/50th/75th percentile comparisons.

Apple also explicitly states that Product Page Optimization uses the app's own existing performance data to estimate test duration. PPO can run up to 90 days, and analytics only begin displaying a test after at least five first-time downloads associated with that test. Therefore a peer percentile cannot repair the evidence-budget problem identified in 066–067.

## Why this matters for niche apps

MintTap and LogMate can sit inside broad Store categories whose median user job differs materially from their specialist job. A category benchmark therefore mixes two distinct questions:

1. **Platform-relative health** — is conversion, retention, or crash behavior unusual compared with the available peer group?
2. **Specialist product truth** — did the intended specialist reach first value, understand the result, and have a reason to return?

Only the first is answered by Store peer benchmarks.

A high Store conversion percentile with weak first value can mean the promise is stronger than the product experience. A low conversion percentile with strong specialist activation can mean the Store message is weak or the broad peer set is poorly comparable. A high retention percentile does not establish that retained sessions are useful, nor that ad-bearing sessions are legitimate inventory.

## Benchmark interpretation matrix

| Store benchmark | Specialist first value | Interpretation | Action |
|---|---|---|---|
| weak | weak/unknown | acquisition and product truth both unresolved | fix/measure first value before creative optimization |
| weak | strong | probable Store-message/routing opportunity | inspect intent-message fit; route before randomizing if evidence supports it |
| strong | weak | promise-to-product mismatch risk | do not celebrate conversion; repair activation |
| strong | strong | healthy candidate funnel | inspect useful return and sustainable monetization next |

The matrix is diagnostic, not causal. It does not prove why a metric is high or low.

## Anti-target rule

Do not set “reach category median/75th percentile” as a standalone objective. Doing so can incentivize broad, generic creative that attracts less-qualified users, aggressive rating prompting, or product changes that improve a platform metric while degrading the specialist workflow.

Permitted use:
- anomaly detection;
- prioritization;
- sanity checking a local baseline;
- identifying whether Store conversion or retention deserves deeper investigation.

Not permitted as proof of:
- product-market fit;
- specialist usefulness;
- causal ASO lift;
- community-channel quality;
- ad inventory quality;
- regulatory/semantic correctness.

## Sparse-data rule

If Apple does not display a benchmark because the peer group/data threshold is not met, record **benchmark unavailable**, not zero/poor performance. Do not broaden to an irrelevant category solely to obtain a percentile and then treat it as a target. A broader comparison may be recorded as weak contextual evidence only.

Likewise, privacy/noise and aggregation mean small percentile movements should not trigger tactical changes without corroborating first-party product evidence.

## MintTap application

When App Store Connect data becomes available, capture conversion and Day 1/7/28 retention peer context alongside:

`impression → product-page view → download → real-data first value → useful return → legitimate ad-bearing use`

A strong finance-category conversion benchmark must not override unresolved KRW/exchange-rate semantics, Import burden, or first-value ambiguity. Conversely, strong specialist activation plus weak Store conversion is evidence to inspect screenshots/message routing, not evidence to broaden the audience beyond YieldMax users.

## LogMate application

Do not use broad productivity/business/aviation-adjacent peer retention as a launch-readiness proxy. LogMate first needs a functional pilot workflow and durable first-value evidence. Only afterward can peer Store metrics help locate acquisition or retention anomalies.

## Reusable company protocol

For each app/version/locale, record:

`date window | platform peer definition | metric | app value | P25/P50/P75 if exposed | availability/suppression | specialist first-value status | useful-return status | interpretation | next evidence needed`

Never copy a benchmark number across apps, locales, business models, download-volume tiers, or materially different time windows.

## Relationship to prior research

- 066–067: benchmark context does not create an experiment evidence budget.
- 068: LogMate launch promises still require product evidence.
- 074: qualified acquisition outranks maximum reach.
- 076–077: intent routing remains preferable to randomization when sparse and earned.
- 080: source attribution identifies origin; benchmark context identifies relative funnel health. Neither proves user value.

## Sources

- Apple Developer, App Store Connect Analytics — Peer group benchmarks, accessed 2026-09-18.
- Apple Developer, Create a product page optimization test, accessed 2026-09-18.
- Apple Developer, Product page optimization analytics/results, accessed 2026-09-18.
