# Research 173 — Peer Benchmarks as Context, Not Growth Targets

Validated: 2026-09-21

## Why this matters
Sparse professional apps can overreact to generic ASO benchmark claims because their audiences are small, high-intent, and structurally different from mass-market apps. Platform-native peer benchmarks are useful, but only when their construction and metric semantics are preserved.

## Authoritative findings

### Apple peer groups are conditional cohorts, not a universal app-store average
Apple App Store Connect peer benchmarks group comparable apps using App Store category, business model, and download-volume tier. Available benchmark widgets expose 25th, 50th, and 75th percentile values. The default view uses the primary category/business model and the latest available week; trends can be viewed over time and download volume can further refine comparison.

Operational consequence: a statement such as “our conversion is below average” is incomplete unless the peer-group identity and percentile are recorded. Changing category, business model, or download-volume tier changes the comparison population.

### Benchmark conversion has its own semantic contract
Apple's peer benchmark Conversion Rate is total downloads plus pre-orders divided by unique-device impressions. A pre-order counts when placed and is not counted again when the resulting download occurs.

This is not interchangeable with a first-download-only acquisition rate, a product-page-view-to-download rate, or Google Play's current Store-listing CTR. Research 172/CJ remains the governing semantic boundary.

### Peer benchmarks are privacy-preserving directional evidence
Apple states that benchmark values are distributions intended for directional insight rather than exact ranking. Peer groups must reach a minimum size before release, and Apple applies differential privacy/noise. Apple-owned apps may be included when the customer journey is directly comparable. Usage-based benchmark data uses app-usage information from users who agreed to share analytics with developers.

Operational consequence: small movements around a percentile line are not evidence of a causal marketing improvement. Do not optimize creative to “beat P50” from one weekly observation.

### Missing benchmark data is not poor performance
If an assigned peer group is too small, Apple may not display the benchmark. A broader category can be selected instead, but that creates a different comparison population. For free apps, proceeds-per-paying-user benchmark is unavailable.

Therefore `benchmark unavailable ≠ below benchmark ≠ zero`.

## CK0–CK5 Peer-Benchmark Decision-Integrity Gate

1. **CK0 — Metric identity**: preserve the exact platform metric definition before comparison.
2. **CK1 — Peer identity**: record category/subcategory, business model, download-volume tier, platform and benchmark week.
3. **CK2 — Distribution identity**: preserve the compared percentile (P25/P50/P75); never relabel a percentile as an industry average.
4. **CK3 — Privacy/availability integrity**: distinguish unavailable/suppressed/noisy benchmark evidence from zero or failure.
5. **CK4 — Diagnostic use**: use benchmark gaps to generate hypotheses about Store promise, product quality, retention or monetization; do not infer cause from the gap itself.
6. **CK5 — Product-value decision**: prioritize first/restored/repeated useful value and qualified niche acquisition over benchmark chasing. Adopt a change only when product-specific evidence supports it.

## Evidence rules
- `peer benchmark ≠ market size`
- `peer percentile ≠ exact competitor ranking`
- `below P50 ≠ proof of bad creative`
- `above P75 ≠ proof of product-market fit`
- `benchmark movement ≠ causal lift`
- `benchmark unavailable ≠ zero`
- `Apple benchmark Conversion Rate ≠ Google Play Store-listing CTR`

## MintTap operating rule
Use App Store Connect Benchmarks as a diagnostic context layer after CJ metric reconciliation. Capture the exact category, business model, download-volume tier, week and percentile. For a niche YieldMax audience, do not weaken specialist language merely to resemble broader finance-app conversion norms. If conversion is weak but repeated useful value is strong, investigate Store promise/traffic qualification before changing product positioning. If conversion is strong but repeated useful value is weak, do not celebrate the Store benchmark; investigate expectation mismatch and retention.

## LogMate operating rule
At launch, establish the peer-group identity before using benchmark language in release reviews. Pilot-only positioning should not be broadened solely to chase generic category conversion. Retention and useful-value evidence should be interpreted alongside Store conversion because a high conversion rate among poorly qualified traffic is not the launch objective.

## Reusable sparse-niche decision matrix
- **Store metric weak + downstream value strong** → investigate listing clarity, qualified discovery and source mix.
- **Store metric strong + downstream value weak** → investigate promise mismatch/onboarding/product value.
- **Both weak** → do not assume creative is the cause; inspect audience qualification, release quality and core utility.
- **Both strong** → preserve the specialist proposition; test only changes with a clear hypothesis.

## Sources
- Apple Developer, “Peer group benchmarks”: https://developer.apple.com/help/app-store-connect-analytics/benchmarks/peer-group-benchmarks
- Apple Developer, “App Analytics”: https://developer.apple.com/app-store-connect/analytics/
- Apple Developer, “Analytics dashboard”: https://developer.apple.com/help/app-store-connect-analytics/overview/analytics-dashboard

## Next evidence target
Capture MintTap's live App Store Connect benchmark peer identity and current P25/P50/P75 context alongside CJ-normalized acquisition and first/repeated useful-value evidence. Do not create a company-wide numeric target from generic third-party ASO benchmark tables.