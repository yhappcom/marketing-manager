# 120 — Peer benchmarks as diagnostic context, not a growth target

Validated: 2026-09-19

## Why this matters

Sparse professional apps are unusually vulnerable to benchmark misuse. A niche YieldMax tracker or pilot logbook can have a different acquisition mix, natural return cadence, geography, maturity and specialist job from the median app in a broad Store peer group. Platform benchmarks are valuable context, but optimizing directly to a percentile can pull the product away from its real users.

## Authoritative platform facts

### Apple App Store Connect
Apple peer group benchmarks compare an app with aggregated similar apps. Apple currently exposes benchmarks including conversion rate, Day 1/7/28 retention, crash rate and—where applicable—monetization measures. Peer groups use App Store category, business model and weekly download-volume tier; benchmark widgets expose 25th, 50th and 75th percentiles. Apple explicitly describes benchmarks as directional insight rather than an exact ranking.

Apple uses differential privacy, requires enough apps before a benchmark is released, and adds noise to benchmark data. App-usage benchmark data also depends on users who agreed to share app analytics with developers. Therefore a percentile is contextual evidence, not an exact competitor measurement.

Sources: Apple Developer, App Store Connect Analytics — Peer group benchmarks and Measuring app performance, accessed 2026-09-19.
https://developer.apple.com/help/app-store-connect-analytics/benchmarks/peer-group-benchmarks
https://developer.apple.com/app-store-connect/analytics/

### Google Play Console
Google Play provides peer comparisons across multiple Console surfaces, including Store conversion analysis, Compare to peers, Reach and devices, Android vitals, ratings/reviews and strategic guidance. Curated peer groups use at least 100 apps and expose aggregate median/percentile data rather than individual private metrics. Google states curated groups exclude low-performing and abandoned apps and can be filtered, for example, by country.

Google's Store listing conversion analysis can compare click-through/conversion performance with peer median and 25th/75th percentiles. The analysis can be segmented by dimensions such as traffic source, store listing, country, language, UTM source/campaign and acquisition state where available. Google notes that peer comparisons require enough matching apps.

Sources: Google Play Console Help, Peer benchmark groups; Understand and grow your app's user base; Measure acquisition and retention, accessed 2026-09-19.
https://support.google.com/googleplay/android-developer/answer/10771707
https://support.google.com/googleplay/android-developer/answer/9859173
https://support.google.com/googleplay/android-developer/answer/6263332

## Canonical principle

**A peer benchmark is a diagnostic prior, not a company objective.**

Use a benchmark to decide where to investigate. Do not make “reach median” or “reach 75th percentile” the product goal unless the metric also represents the specialist user's real value and the comparison population is decision-relevant.

The correct sequence is:

`observed app metric → comparable peer context → possible gap → specialist-job diagnosis → intervention hypothesis → first-value/useful-return check → decision`

Not:

`below median → change product/creative until median is reached`.

## AL0–AL5 — Benchmark Interpretation Gate

### AL0 — benchmark gaming
Change product, acquisition mix, prompt behavior or user experience primarily to improve a percentile while harming truthfulness, first value, useful return, quality or legitimate monetization.

### AL1 — percentile target
Treat the peer median/75th percentile as a universal KPI without recording peer definition, metric definition, geography, traffic/source mix, maturity or specialist cadence.

### AL2 — contextual comparison
Record the benchmark and correct platform definition, but use it only as a descriptive comparison. Root cause and specialist relevance remain unresolved.

### AL3 — decision-grade diagnostic
Required:
- exact platform metric and denominator;
- peer-group definition available from the platform;
- percentile/median and observation period;
- relevant country/locale/source/store-listing segmentation where available;
- app maturity/release context;
- explicit statement that benchmark is directional, not an exact competitor ranking;
- specialist-job hypothesis explaining why a gap may or may not matter;
- first-value/useful-return evidence takes precedence over percentile chasing;
- intervention is chosen for the diagnosed problem, not merely to move the benchmark.

### AL4 — validated diagnostic loop
A benchmark-identified gap led to a specific intervention and subsequent evidence shows improvement in the intended app metric while specialist first value/useful return did not materially deteriorate. Causality is claimed only if the design supports it.

### AL5 — reusable portfolio benchmark registry
Across apps, maintain metric definition, platform, peer-group basis, percentile, segment, period, hypothesis, intervention, downstream check and review/retirement trigger. Never pool Apple and Google percentiles as if they share populations or definitions.

## Why this is especially important for niche apps

A specialist app can rationally differ from a broad peer median:
- MintTap return cadence may be driven by distributions, portfolio checks, ROC/tax events or market behavior rather than generic daily use.
- LogMate use may cluster around flight duty, roster cycles, import/backup tasks or reporting periods rather than consumer-app daily engagement.
- Acquisition from a trusted specialist community may produce lower volume but higher useful-return quality than broad Store browse traffic.

Therefore a lower Day-1 retention or Store conversion percentile is a signal to investigate, not proof that the product is failing. Conversely, a high conversion percentile does not prove the app creates retained specialist value.

## MintTap application

Create a benchmark snapshot only after the first-value and useful-return definitions are known. For each Store, record conversion and retention benchmark context alongside source/locale where available. If conversion is weak but useful-return quality is strong, investigate Store comprehension and intent mismatch before changing the product. If conversion is strong but useful return is weak, do not celebrate the percentile; investigate promise-to-product continuity.

Do not infer that a generic Finance-category median is the correct behavioral target for YieldMax investors. Category/business-model/download-volume matching improves comparability but does not guarantee job-level equivalence.

## LogMate application

Do not use consumer-app daily-retention norms to force pilots into artificial engagement. The app should support the natural operational cadence of logging, checking, importing, backing up and producing records. Until production pilot cadence is observed, Store peer retention is secondary context.

A benchmark can later help identify unusually poor Store comprehension, crash behavior or retention, but it must not create engagement mechanics that make logbook use more intrusive.

## Relationship to existing frameworks

- AK0–AK5 governs whether a Store experiment's target metric aligns with business utility.
- K0–K5 governs cadence-appropriate useful return.
- AB0–AB5 governs product quality.
- AL0–AL5 governs how external platform-relative numbers are interpreted before they influence any of those decisions.

A benchmark does not override AK, K or AB.

## Benchmark record schema

`benchmark_id | app | platform | metric | metric_definition | period | peer_basis | percentile_or_median | country_locale_source | app_value | gap | specialist_job_hypothesis | intervention | first_value_check | useful_return_check | decision | review_date`

## Operational rule

For a sparse niche app, benchmark review should be periodic and hypothesis-driven, not a daily dashboard ritual. Escalate only when the gap is persistent, the comparison is sufficiently relevant, and fixing the underlying issue would plausibly improve specialist value.

## Unresolved evidence

- MintTap's actual Apple and Google peer benchmark values have not yet been audited.
- MintTap's production first-value/useful-return definitions remain unresolved, so no benchmark gap can yet qualify as AL4.
- LogMate lacks production cadence and Store data; benchmark targeting is premature.
