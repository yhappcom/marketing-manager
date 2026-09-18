# 103 — Impression Revenue Precision & Utility-Normalized Monetization

Validated: 2026-09-18

## Why this is a separate problem

090 established that monetization should be judged at retained utility rather than by raw impression volume. 102 established that generic retention/reopen metrics do not prove specialist useful return. The remaining measurement defect is that impression-level revenue itself is not semantically uniform: Google Mobile Ads exposes a monetary value plus a precision type, and those values can be PRECISE, ESTIMATED, PUBLISHER_PROVIDED, or UNKNOWN.

Canonical principle:

> **Preserve revenue precision, then normalize monetization by useful production value; never optimize a specialist workflow from a blended revenue number whose evidence quality is unknown.**

## First-party platform facts

Google Mobile Ads impression-level ad revenue (ILAR) supplies an `onAdPaid`/paid-event callback when an impression occurs. `AdValue` contains `valueMicros`, `currencyCode`, and `precisionType`. Google documents four precision classes:

- `PRECISE`: precise value paid for the ad.
- `ESTIMATED`: value estimated from aggregated data.
- `PUBLISHER_PROVIDED`: publisher-provided value, including manual CPM situations.
- `UNKNOWN`: value quality is unknown / insufficient information.

Google recommends attaching the listener before the ad is shown and forwarding the event immediately to reduce missed callbacks and discrepancies. The SDK also exposes winning ad-source/response information that can accompany the event.

Source: Google for Developers, Impression-level ad revenue (Android / GMA Next-Gen), validated 2026-09-18.

Apple's App Review Guidelines independently constrain the UX side of monetization: ads must not trick users into taps; interruptive/interstitial ads must be clearly identified, provide an obvious close/skip control, and apps with ads must provide a way to report inappropriate ads. This reinforces the existing company rule that revenue measurement never legitimizes an invalid placement.

Source: Apple App Review Guidelines §2.5.18, validated 2026-09-18.

## Measurement contract

Minimum event semantics for each paid impression:

`paid_impression_id / timestamp / app / app_version / platform / ad_unit / format / placement / value_micros / currency / precision_type / ad_source(if available) / response_id(if available) / session_or_pseudonymous_analytics_key / current_job_id / useful_return_eligibility / foreground_intent_state`

Privacy/data-minimization rules still apply. Do not add identity fields merely to improve ad analytics.

### Never collapse precision at ingestion

Store the precision class with every revenue event. A dashboard may show a total for bookkeeping, but experimentation must retain the composition:

`revenue = precise + estimated + publisher_provided + unknown`

A change in total revenue can otherwise be caused partly by a change in estimation/source mix rather than a genuine user-level monetization effect.

## U0–U5 Monetization Evidence Quality Gate

### U0 — Invalid inventory
Placement blocks, tricks, ransoms, interrupts protected intent, violates platform rules, or manufactures opens/usage. Revenue is irrelevant; remove/fix the placement.

### U1 — Gross revenue only
Only dashboard revenue/eCPM/impressions are known. No placement-level paid-event semantics or precision composition. Diagnostic only.

### U2 — Impression revenue instrumented
Paid events are captured by placement/format with currency and precision type. Still no trustworthy specialist-value denominator. Do not optimize frequency from revenue alone.

### U3 — Utility-normalized baseline
Revenue is joined, at an aggregate/privacy-safe level, to a stable K3 useful-return denominator and valid ad-bearing boundary. Report at least:

- revenue per eligible useful-return user,
- revenue per completed useful-return cycle,
- impressions per useful-return cycle,
- precision composition,
- first-value/useful-return guardrails,
- placement/format mix.

U3 is the minimum threshold for deliberate monetization optimization.

### U4 — Repeated causal/decision evidence
A controlled or otherwise decision-grade change improves cumulative utility-normalized revenue without material degradation in activation, useful return, task completion, error/support burden, or trust signals. Revenue precision mix remains interpretable.

### U5 — Reusable niche-app pattern
The mechanism reproduces across releases/cohorts or another relevant niche product with the same placement boundary and user-job logic. Transfer the mechanism, not the observed eCPM.

## Core metrics

Do not use `eCPM` as the company objective. Keep it as an auction/placement diagnostic.

Primary monetization outcome candidate:

`Cumulative Utility Revenue (CUR) = Σ valid paid-impression value over users/cycles that continue to complete the intended specialist job`

Operational normalizers:

`Revenue per Useful-Return Cycle = valid paid revenue / completed useful-return cycles`

`Impressions per Useful-Return Cycle = valid impressions / completed useful-return cycles`

`Revenue per Eligible Useful User = valid paid revenue / users eligible for the defined useful-return job`

These metrics must be segmented by placement and precision class. Currency conversion policy must use a documented reporting basis; do not silently mix currencies.

## Why eCPM can mislead a niche app

A placement can increase eCPM while reducing the number of useful-return cycles, damaging cumulative revenue and specialist trust. Conversely, a lower-eCPM reserved banner can be superior if it leaves the core workflow intact and monetizes more retained useful cycles over time.

Therefore:

`higher eCPM ≠ better placement`

`higher impressions/session ≠ better monetization`

`higher short-term ARPU ≠ sustainable niche economics`

The governing chain is:

`qualified acquisition → first value → natural useful return → legitimate ad-bearing boundary → precision-aware paid impression → continued useful return → cumulative revenue`

## MintTap application

MintTap should not optimize Home/banner/app-open frequency until K3 useful-return semantics exist. Once they do:

1. preserve `precision_type` on each paid event;
2. map revenue to the placement that produced it;
3. classify whether the impression occurred at a legitimate boundary under 087–090;
4. compare revenue per useful-return cycle, not revenue per open;
5. keep distribution/ROC/reverse-split/portfolio work free from manufactured interruption;
6. stop a monetization test if specialist task completion or useful return materially deteriorates even when revenue rises.

A ticker or high-value portfolio cohort must not receive more intrusive ads merely because it appears more monetizable.

## LogMate application

Before launch, pilot workflow evidence is more valuable than ad optimization. Do not define ad frequency from generic sessions. First identify natural boundaries around completed logging/search/summary work. In-flight, time-critical, data-entry, or safety-relevant interaction states should not be converted into monetization opportunities merely because an ad can technically load.

Once production use exists, use the same U3 minimum: paid-event precision + legitimate boundary + K3 useful-return denominator.

## Future niche-app reusable rule

For every new ad-supported niche app, establish in this order:

1. core specialist job;
2. first-value event;
3. natural useful-return cadence;
4. protected intent states;
5. legitimate ad-bearing boundaries;
6. paid-event instrumentation with precision semantics;
7. utility-normalized baseline;
8. only then format/frequency/revenue experiments.

This ordering prevents the ad SDK from defining the product's interaction model.

## Stop rules

Stop or reject an experiment when any of the following occurs:

- placement becomes U0 regardless of revenue;
- paid-event precision/source composition changes enough that the revenue delta is not interpretable;
- useful-return denominator is unstable or undefined;
- revenue increases only through manufactured opens, extra screens, delays, or blocked utility;
- task completion, useful return, support burden, accidental-click risk, or trust materially worsens;
- sparse data cannot support the intended decision.

## Unresolved / evidence needed

- MintTap's actual GMA SDK version and whether impression-level paid events are currently captured.
- Exact current ad units, formats and placement IDs.
- Current proportion of PRECISE / ESTIMATED / PUBLISHER_PROVIDED / UNKNOWN values.
- Currency normalization/reporting basis.
- Stable K3 first-value/useful-return events needed to reach U3.
- Whether existing analytics can join aggregate revenue and useful-return cohorts without adding unnecessary personal data.
- Empirical stop thresholds for task-completion/useful-return degradation.

## Relationship to prior canon

- 087 protects foreground intent.
- 088 governs rewarded ads.
- 089 governs reserved banner layout.
- 090 moves economics from impression volume to retained utility.
- 102 defines useful return and prevents generic retention semantics from contaminating the denominator.
- **103 adds revenue-evidence semantics: precision class must survive ingestion and monetization optimization begins only at U3.**
