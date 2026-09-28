# Research 298 — Sparse-Niche Measurement Coverage Contract

Validated: 2026-09-29

## Decision
Do not rank acquisition sources from observed downstream metrics until measurement coverage is understood. In sparse professional apps, privacy thresholds, consent/diagnostics sharing, attribution resets, and small cohorts can censor the exact users whose quality we are trying to compare.

## Evidence
- Apple App Store Connect acquisition can connect download source to later sales, usage, and subscription data, but a manual redownload resets the recorded source for subsequent attributed activity.
- Apple usage analytics include only users who agreed to share diagnostics and usage information, and Analytics suppresses data until privacy thresholds are met.
- Apple retention can be filtered by source/campaign, but it therefore remains observed-platform evidence, not a complete causal census.
- Google Play monthly acquisition exports expose Store Listing Visitors, Installers, visitor-to-installer conversion, and retained installers/rates at 1, 7, 15, and 30 days. These are useful platform outcomes, but should still be reconciled with product-side specialist-value events before a channel is scaled.

## GZ0–GZ9
measurement question → source semantics → coverage population → privacy/consent eligibility → suppression threshold → attribution mutation → product-event joinability → uncertainty label → decision threshold → re-measure/retire.

## Operating rules
1. Never substitute missing downstream data with installs or conversion rate.
2. Label platform metrics as observed/platform-attributed unless incrementality is independently established.
3. Keep UNKNOWN when privacy suppression or sample size prevents a defensible comparison.
4. Compare sources only on metrics with materially comparable coverage.
5. For MintTap, prioritize first/repeated specialist-value events around portfolio reconstruction, distribution/ROC interpretation, and validated tax-adjustment workflows.
6. For LogMate, prioritize import/migration completion, Previous Total continuity, duplicate resolution, export integrity, and repeated logbook use.
7. Sparse cohorts should be pooled only when the underlying specialist job and acquisition promise are equivalent; do not pool merely to manufacture significance.
8. A zero-cost source can remain valuable without measurable installs when it yields recurring specialist evidence, product repair, durable reference material, or trust.

## Reusable ledger
source | platform attribution definition | eligible population | privacy/consent coverage | suppression risk | attribution-reset risk | Store conversion | D1/D7/D15/D30 retention where available | first specialist value | repeated specialist value | revenue/ad quality | uncertainty class | decision | re-entry trigger

## Next target
Run a production measurement-coverage audit before attempting MintTap source ranking. Inventory which Store/referrer/campaign metrics exist, which product-side specialist-value events are instrumented, and where privacy/sparsity makes the downstream comparison UNKNOWN.
