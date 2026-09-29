# Research 321 — Search-Routable Store Intent Architecture

Validated: 2026-09-30

## Decision
For sparse niche apps, use Store surfaces to route materially different specialist intents before using traffic on cosmetic experiments. Routing and experimentation are separate jobs.

## Current Apple capability
Apple currently allows up to 70 Custom Product Pages (CPPs) per app. A CPP can use distinct screenshots, previews, promotional text, and keywords. Approved CPPs can be made visible in App Store search by assigning keywords; Apple recommends unique keyword sets so the most relevant CPP appears. CPPs can also have unique shareable URLs and, on iOS/iPadOS 18+, an approved app deep link into matching in-app content.

CPP analytics become available after at least five first-time downloads for that page. Sparse cohorts below this threshold are UNKNOWN, not zero.

Product Page Optimization (PPO) serves a different purpose: randomized testing of the default product page, with up to three treatments. PPO is not available for CPPs. Adding more PPO treatments can lengthen time to a conclusive result; tests run up to 90 days and results begin after five first-time downloads associated with the test.

## Operating implication
Do not use PPO to answer an intent-routing question. If two audiences have materially different problems/promises, first route them to truthful matching pages. Use PPO only when the decision is which creative execution works better for the same underlying intent.

Do not create CPPs merely because Apple permits 70. Every page consumes claim-validation, localization, creative, analytics, and maintenance capacity. Create a page only when the intent is materially distinct and the product can truthfully deliver a matching first-value path.

## HW0–HW9
1. **Intent evidence** — establish a recurring specialist problem from search/community/product evidence.
2. **Material difference** — separate only intents with meaningfully different problem, promise, evidence, or workflow.
3. **Claim gate** — every routed promise must pass the Claim Registry.
4. **Destination match** — screenshots/copy must represent the actual product experience.
5. **Search/link routing** — use unique CPP keyword sets and/or stable page URLs only where justified.
6. **Deep-link continuity** — when supported and useful, route from CPP into the matching in-app value path; never deep-link into a misleading or incomplete state.
7. **Sparse-data discipline** — below reporting thresholds or without sufficient traffic, classify performance UNKNOWN.
8. **Experiment separation** — use PPO for same-intent creative uncertainty, not for audience segmentation.
9. **Downstream quality** — judge a routed page by acquisition plus first/repeated specialist value, not conversion alone.
10. **Portfolio control** — KEEP / MERGE / REPAIR / EXPERIMENT / HOLD / RETIRE pages based on evidence and maintenance cost.

## MintTap application
Candidate intents are problem-based, not ticker-based: distribution/ROC interpretation and provenance; split/reinvestment reconstruction; portfolio total-return/recovery. Do not create TSLY/CONY/MSTY clones unless evidence shows a genuinely different intent or workflow. A CPP is justified only when MintTap can show and deliver the promised workflow truthfully.

## LogMate application
Candidate intents are professional workflow-based: migration/import continuity; duplicate reconciliation; Previous Totals; export/certificate integrity; offline/PWA/device continuity. A pilot arriving for import/migration should see evidence of that workflow rather than generic logbook imagery. If deep linking is eventually used, it should continue into the matching safe onboarding/workflow state.

## Reusable niche-app rule
Store architecture should be:
specialist intent evidence → truthful routed page → matching product value path → downstream value measurement → same-intent creative experiment only when traffic supports it.

This prevents two common errors: forcing distinct audiences through one generic page, and fragmenting sparse traffic across many cosmetic pages/tests.

## Sources
- Apple Developer, “Configure multiple product page versions,” current 2026 documentation.
- Apple Developer, “Overview of product page optimization,” current 2026 documentation.
- Apple Developer, “Create a test” / “Run a test,” current 2026 documentation.
