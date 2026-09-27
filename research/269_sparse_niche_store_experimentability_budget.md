# Research 269 — Sparse-Niche Store Experimentability Budget

Date: 2026-09-27

## Validated finding
Store experimentation consumes scarce qualified traffic. For niche apps, experimentation is therefore a budget-allocation decision, not a routine optimization ritual.

Apple Product Page Optimization currently allows up to three treatments. Apple explicitly notes that more treatments can increase time to conclusion. Traffic allocated to a test is divided among treatments. Tests run for at most 90 days; results first appear after five first-time downloads associated with the test. Apple provides duration estimates based on existing performance and evaluates conversion lift plus confidence; 90% confidence may produce higher/lower-performing labels, while weak tests may remain inconclusive. PPO does not apply to custom product pages.

Authoritative sources:
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/overview-of-product-page-optimization
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/create-a-test
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/run-a-test
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/product-page-optimization

## FI0–FI7 gate
business hypothesis → material treatment contrast → traffic feasibility → minimal fragmentation → confound control → predefined KEEP/REJECT/INCONCLUSIVE decision → time-box integrity → reusable learning record.

## Operating rules
- Do not test merely because tooling exists.
- Use platform duration/sample estimates before launch.
- With sparse traffic, default to one high-contrast treatment versus control rather than several weak variants.
- Five first-time downloads is a reporting threshold, not proof of a winner.
- Positive point-estimated lift without adequate confidence is not a rollout mandate.
- INCONCLUSIVE does not prove equivalence and should not trigger repeated near-identical tests.
- CPP intent routing and default-page PPO answer different questions and should not be mixed.
- Record every test in a cross-app Experiment Registry so future niche apps reuse the learning.

MintTap should test business-level YieldMax jobs rather than fragmenting experiments ticker by ticker. LogMate should defer Store experimentation until post-launch qualified pilot traffic can support a decision-useful test.

## Next target
Define an evidence-promotion ladder for deciding when community and owned-web evidence is strong enough to justify spending scarce Store experiment traffic.
