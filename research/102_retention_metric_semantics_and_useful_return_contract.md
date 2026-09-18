# 102 — Retention Metric Semantics & Useful-Return Contract

Validated: 2026-09-18

## Canonical principle

**A platform retention metric is evidence of reopening or installation persistence under that platform's definition; it is not evidence that the specialist returned for useful value.**

The growth chain remains:
`qualified acquisition → first value → useful return → sustainable ad-bearing use`.
Store/platform retention is a diagnostic proxy inside this chain, not the terminal success metric.

## Why this matters for sparse niche apps

MintTap and LogMate serve specialist audiences where traffic is scarce. A small metric-definition mistake can therefore produce a large strategic mistake. “D7 retention” is not a universal object: Apple and Google expose different retention/engagement measures, denominators and eligibility rules. Cross-platform percentages must not be merged or directly ranked unless the underlying event semantics are first normalized.

## First-party findings

### Apple App Store Connect

Apple App Retention measures the percentage of active devices that installed on a selected day and opened the app on a later day. Critically, devices that install but never open are excluded from both numerator and denominator. Apple also states that the denominator for an install-day cohort can increase later when a previously never-opened installer finally opens the app. Usage data is limited to users who agreed to share diagnostics/usage data and cells may be blank below privacy thresholds.

Apple Acquisition can attribute usage metrics to acquisition source/campaign, and App Retention can be filtered by source/campaign when available. This is useful for diagnosing acquisition quality, but opt-in/privacy boundaries remain.

### Google Play Console

Google's current Statistics definitions include user/device retention based on opening the app on a specified day after the first open. Google also exposes MAU/DAU and first opens. Separately, legacy/exported acquisition data contains “retained installers,” which means installers who kept the app installed for the specified period; Google explicitly notes that this does **not** mean the app was opened during that period.

Therefore “retained installer,” “D7 user retention,” “MAU,” and “installed audience” are different constructs and must never be used interchangeably.

## K0–K5 Retention Evidence Gate

- **K0 — Semantic error:** incompatible metrics/denominators are merged, or install persistence is reported as product use/useful return.
- **K1 — Vanity return:** reopen/MAU/retained-install metric is reported as success without identifying the user job completed.
- **K2 — Platform-valid proxy:** metric definition, denominator, cohort and privacy boundary are recorded correctly, but no specialist-value event is linked.
- **K3 — Useful-return evidence:** a production-valid return event is tied to a real specialist job, with platform retention used only as corroborating context.
- **K4 — Sustainable-return evidence:** useful-return cohorts persist across multiple periods/releases and monetization is measured without degrading the core workflow.
- **K5 — Reusable pattern:** the return mechanism and measurement semantics replicate across comparable specialist apps without assuming identical cadence.

Minimum threshold for deliberate retention optimization: **K3**.

## Define return by job cadence, not generic D7

A niche utility may be valuable without daily or weekly use. The correct return window follows the natural recurrence of the specialist job.

MintTap examples:
- portfolio/distribution monitoring may have event- or distribution-cycle recurrence;
- ROC/tax reconciliation may be episodic/annual;
- reverse-split handling is event-driven.

LogMate examples:
- flight logging may follow roster/flight cadence;
- monthly/quarterly totals are periodic;
- certificate/history lookup can be episodic.

Therefore a low generic D7 rate cannot by itself prove weak product value, and a high D7 reopen rate cannot prove useful return.

## Useful-return event specification

For each core job, define:
1. `job_id`
2. `eligible_population`
3. `first_value_event`
4. `return_trigger` — what real-world need plausibly causes return
5. `useful_return_event` — completed value, not screen open
6. `expected_cadence/window`
7. `platform_proxy` — Apple/Google metric used only as diagnostic context
8. `privacy/minimum-cohort boundary`
9. `ad_exposure boundary`
10. `stop condition` if monetization or messaging degrades useful return

Do not create telemetry merely to make a dashboard fuller. Instrument only events needed for a real decision and consistent with the trust/data-safety contract in 092.

## MintTap operating rule

Do not optimize toward D1/D7 reopen frequency simply to manufacture more ad impressions. The monetization objective is cumulative revenue from retained useful users. A user who returns at the natural distribution/portfolio cadence and completes a meaningful tracking job can be more valuable than a frequently reopened but low-value session.

Marketing route quality should therefore be judged as:
`route → qualified acquisition → first value → cadence-appropriate useful return → cumulative non-intrusive ad revenue`.

## LogMate operating rule

Do not set a generic consumer-app retention target before real pilot workflow cadence is observed. During launch validation, distinguish first open, first completed flight/logbook value, subsequent completed logging/lookup/summary job, and passive install persistence. Pilot scarcity makes direct workflow evidence more valuable than cosmetic retention benchmarking.

## Cross-platform reporting rule

Never publish a single blended “iOS + Android D7 retention” unless both sides have been transformed to the same explicitly defined product event and cohort denominator. Native platform retention percentages remain platform-specific diagnostics.

## Decision consequences

1. 097 attribution should terminate at a product-defined useful-return event, not merely platform retention.
2. 101 Store experiments should not be promoted to J4 merely because a treatment has higher platform D7 retention; downstream specialist useful return must be checked.
3. 090 ad economics should use cadence-appropriate retained useful users as the denominator.
4. 092 privacy parity constrains any new telemetry added for useful-return measurement.
5. Sparse/blank Apple retention cells are an evidence limitation, not zero retention.

## Sources — first party

- Apple, App Store Connect Analytics — App retention: https://developer.apple.com/help/app-store-connect-analytics/engagement/app-retention
- Apple, App Store Connect Analytics — Acquisition: https://developer.apple.com/help/app-store-connect-analytics/acquisition/acquisition
- Apple, App Store Connect Analytics overview: https://developer.apple.com/app-store-connect/analytics/
- Google Play Console Help — View app statistics: https://support.google.com/googleplay/android-developer/answer/139628
- Google Play Console Help — Download/export monthly reports: https://support.google.com/googleplay/android-developer/answer/6135870

## Next validation

Audit MintTap's current analytics schema/dashboard and identify whether first value and cadence-appropriate useful return are already represented. If not, define the minimum event set before adding telemetry. For LogMate, defer numerical retention targets until core production workflows and observed pilot cadence exist.
