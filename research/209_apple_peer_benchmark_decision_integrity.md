# Research 209 — Apple Peer-Benchmark Decision Integrity

Date: 2026-09-23
Status: validated operating guidance

## Finding
App Store Connect peer-group benchmarks provide first-party context for conversion, D1/D7/D28 retention, crash rate and eligible monetization metrics. Apple compares an app with P25/P50/P75 values from groups constructed using App Store category, business model and download-volume tier.

Apple explicitly positions these values as directional context, not exact competitive rankings. Benchmark publication also has privacy constraints: a group needs enough apps, Apple applies differential privacy/noise, and app-usage inputs rely on users who agreed to share analytics.

Store conversion semantics must remain intact: Apple's conversion metric uses downloads relative to unique Store impressions. It is not equivalent to first-time acquisition quality, activation, or retained specialist value.

## DU0–DU5 gate
`metric identity → peer identity → privacy/sparsity integrity → diagnostic triangulation → qualified-value guardrail → intervention threshold`

- DU0: preserve the exact metric and denominator.
- DU1: record category, business model, download tier, week and selected peer group.
- DU2: unavailable benchmark data is unknown, not zero; do not overread noisy weekly changes.
- DU3: benchmark position locates a possible constraint; it does not prescribe a tactic. Weak conversion with healthy retention can justify Store-message investigation. Healthy conversion with weak retention points downstream. If both are healthy, do not manufacture an ASO project simply to raise a percentile.
- DU4: never raise Store conversion by broadening the promise at the expense of activation, repeat specialist value or trust.
- DU5: intervene only when a persistent signal is corroborated by first-party funnel evidence; define the hypothesis, downstream guardrail, observation window and retirement condition.

## Canonical rules
`peer percentile ≠ competitor rank`; `peer median ≠ product target`; `benchmark unavailable ≠ poor performance`; `weekly movement ≠ causal change`; `Store conversion ≠ acquisition quality`; `download-volume tier ≠ market size`; `benchmark improvement ≠ sustainable revenue improvement`.

## MintTap
Use benchmarks as triage before spending scarce zero-cost marketing effort. Capture conversion and D1/D7/D28 retention together with exact peer identity. If Store conversion is relatively weak while retention is healthy, inspect Store promise/message continuity. If retention is weaker, prioritize actual YieldMax workflow value before generating more traffic. Do not broaden claims merely to approach P50/P75.

For an ad-supported niche app, the downstream guardrail remains repeated useful sessions compatible with non-intrusive monetization. More low-intent downloads are not automatically better economics.

## LogMate
Do not set pre-launch targets from generic industry averages. After sufficient production evidence exists, use Apple's peer distribution only as contextual calibration while preserving pilot-workflow completion, trust, reliability and repeat logbook utility as primary evidence.

## Evidence record
For each observation store: `week | app/version | metric | app value | P25/P50/P75 | category | business model | download tier | availability note | downstream guardrail | decision | revisit date`.

## Next production audit
Retrieve MintTap's current App Store Connect Benchmarks for conversion, D1/D7/D28 retention and crash rate, including exact peer identity and latest available week. Compare with source-level acquisition and downstream activation/repeat-value evidence. Do not infer a current percentile until production evidence is retrieved.

## Sources
- Apple Developer, App Analytics: https://developer.apple.com/app-store/peer-group-benchmarks/
- Apple Developer Help, Peer group benchmarks: https://developer.apple.com/help/app-store-connect-analytics/benchmarks/peer-group-benchmarks
