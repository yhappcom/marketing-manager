# 090 — Impression Revenue → Retained-Utility Economics

Validated: 2026-09-18

## Canonical principle

**Measure the money at the impression; judge the monetization at retained utility.**

This contract closes a measurement gap left by the placement-integrity work in 087–089. A placement can be policy-compliant, geometrically clean, and produce attractive eCPM while still be economically inferior if it reduces useful task completion or future specialist use.

## First-party facts validated

Google Mobile Ads exposes impression-level ad revenue (ILRD) through a paid-event callback. The event includes monetary value in micros, currency, and a precision type. Google documents four precision states: UNKNOWN, ESTIMATED (derived from aggregated data), PUBLISHER_PROVIDED (for example manual CPM), and PRECISE (the precise amount paid for the ad). Google recommends registering the paid listener before showing the ad and sending the value downstream immediately so callbacks are not lost.

Ad Inspector is a test-device diagnostic surface for real-time ad requests. It can inspect request logs, mediation waterfall/bidding behavior, adapter initialization and privacy signals. It is therefore an implementation/debugging instrument, not evidence that a production placement preserves user value.

Sources:
- Google Mobile Ads, Impression-level ad revenue: https://developers.google.com/ad-manager/mobile-ads-sdk/android/next-gen/impression-level-ad-revenue
- Google Mobile Ads Flutter, Ad Inspector: https://developers.google.com/admob/flutter/ad-inspector

## Economic consequence for niche utilities

Do not optimize MintTap or LogMate against eCPM, impressions/session, CTR, fill, or raw ad ARPU in isolation. Those are monetization-layer measurements. The company objective is long-run revenue produced by users who continue to obtain specialist value.

Required causal chain:

`eligible placement → request → match → impression → paid event(value, currency, precision) → task completion → useful return → future eligible impressions → cumulative retained-user revenue`

A higher-value impression can be a losing trade if it increases rapid exits, suppresses task completion, or reduces future useful sessions. Conversely, a modest passive banner can be economically superior if it survives across many genuinely useful returns.

## E0–E5 Retained-Utility Economics Gate

### E0 — Revenue blind
Revenue is inferred from dashboard aggregates and cannot be connected to placement/session/user-value outcomes.

### E1 — Impression counted, value semantics unknown
Impressions/revenue exist, but precision type, currency normalization, placement identity, or paid-event completeness is not preserved.

### E2 — Monetization-only optimization
ILRD is captured, but decisions optimize eCPM, CTR, fill, impressions/session or ad ARPU without downstream task/useful-return evidence. Not sufficient for company scaling.

### E3 — Utility-linked economics
Each candidate placement has stable placement/context identity; ILRD value + currency + precision are retained; normal task completion, rapid exit and useful-return outcomes are joinable at an appropriately privacy-safe analytical level.

### E4 — Incremental evidence
A placement/configuration change is evaluated against a credible baseline. Revenue lift is interpreted together with task completion and useful return. Precision mix and callback/data loss are monitored. Small niche samples are reported as observations/intervals rather than false certainty.

### E5 — Sustainable retained-user economics
Repeated evidence shows higher cumulative ad revenue per retained useful user without material degradation in specialist task success, useful return, trust/policy quality, or support burden. Only here may the pattern become a reusable company monetization template.

## Required ledger

Minimum fields/semantics:

`app | version | platform | placement_id | screen/context | eligibility_gate(F/A/B/etc.) | format | request | match | impression | paid_value_micros | currency | precision_type | ad_source/mediation context when available | task_completed | rapid_exit | useful_return_window | subsequent_eligible_impressions | cumulative_revenue`

Do not collapse ESTIMATED, PUBLISHER_PROVIDED and PRECISE values into a falsely exact per-user profitability claim. Aggregate revenue can still be useful, but its measurement precision must travel with the observation.

## Decision metrics

Primary company metric:

`cumulative ad revenue / retained useful user`

Supporting diagnostics:
- revenue per useful session;
- impressions per useful session;
- eligible-boundary utilization;
- task-completion delta after monetization change;
- useful-return delta;
- rapid-exit delta;
- paid-event capture completeness;
- ILRD precision-type mix.

CTR is never a success metric for passive utility-app ads. eCPM is a market/yield diagnostic, not the product objective.

## MintTap application

Before changing Home banner size, refresh behavior, mediation, App Open, or another format, establish an E3 baseline. Join 089 B-class evidence to ILRD and useful-return evidence. If a higher-yield configuration raises immediate revenue but worsens portfolio/ROC/distribution task completion or useful return, reject it.

This also prevents a common false conclusion: `higher eCPM = better monetization`. In a small specialist audience, preserving the future sequence of useful sessions can be worth more than extracting more from one impression.

## LogMate application

Do not design ad economics before production-valid specialist workflows and return semantics exist. Once they exist, ads must be evaluated against flight-entry/search/totals/backup task success and subsequent useful return, not generic mobile-app ad benchmarks.

## Reusable company rule

For every future niche app:
1. define first value and useful return;
2. establish legitimate ad boundaries;
3. instrument impression-level value with precision semantics;
4. join monetization to downstream utility;
5. scale only on retained-utility economics.

No ad format becomes a company template solely because it has high eCPM, fill, CTR, or short-term ARPU.

## Unresolved empirical questions

- MintTap paid-event capture completeness and current precision-type mix.
- Whether ad revenue can currently be joined to placement/context without collecting unnecessary personal data.
- Revenue distribution across retained-useful vs one-session users.
- Incremental revenue and useful-return effect of the current Home banner.
- Appropriate useful-return windows by MintTap workflow.
- Minimum evidence budget required before mediation/refresh/format experiments are decision-worthy.