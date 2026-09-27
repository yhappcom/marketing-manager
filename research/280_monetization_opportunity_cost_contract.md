# Research 280 — Monetization Opportunity-Cost Contract

Validated: 2026-09-28

## Purpose
Maximize sustainable ad-supported business value without treating additional ad impressions as the objective. For sparse professional utilities, the scarce resource is user trust and interruption tolerance, not theoretical ad inventory.

## Core conclusion
An additional ad opportunity is acceptable only when its expected reconciled incremental ad value exceeds its expected product and growth opportunity cost. Gross ad revenue, eCPM, requests, fill, or impressions alone cannot establish that.

Working decision expression:

`net marginal monetization value = reconciled incremental ad value − expected specialist-value loss − expected repeat-use/trust loss − expected organic/store-discovery loss − expected replacement-acquisition/operator cost − policy/measurement risk`

This is a decision model, not an accounting identity. Terms that cannot be estimated credibly remain UNKNOWN; they must not be silently set to zero.

## GD0–GD8 gate
1. **GD0 Protected workflow** — exclude trust-critical/core workflows before considering revenue.
2. **GD1 Semantic opportunity** — an opportunity exists only where the ad format fits a natural pause/wait state.
3. **GD2 Exposure delta** — define the incremental exposure caused by the proposed change, not total impressions.
4. **GD3 Revenue reconciliation** — use impression-level paid value with currency/precision and report reconciliation where available.
5. **GD4 Specialist-value cost** — observe task completion, immediate abandonment and first core value around actual exposure.
6. **GD5 Repeat-value cost** — observe the next natural-use opportunity; do not impose generic D1/D7 assumptions on episodic professional utilities.
7. **GD6 Discovery/replacement cost** — treat quality degradation, poorer ratings/reviews, Store performance and extra operator/acquisition work as possible costs rather than assuming reacquisition is free.
8. **GD7 Uncertainty asymmetry** — expansion requires positive evidence; credible harm can justify reduction sooner. UNKNOWN does not authorize more pressure.
9. **GD8 Decision** — KEEP / EXPAND CAUTIOUSLY / REDUCE / REMOVE / HOLD.

## Authoritative platform constraint
Google's current App Open guidance says the format is intended for load/foreground moments, recommends waiting until users have used the app a few times before the first app-open ad, and recommends showing it when users would otherwise be waiting. On cold start, if loading has completed and the user has reached main content, the ad should not then appear out of context. Loaded app-open ads also expire after four hours.

Operational implication: foreground events are technical triggers, not automatically monetizable opportunities. A lifecycle callback cannot override semantic eligibility or protected-workflow rules.

Source:
- Google for Developers, App open ads (Android/Flutter/iOS), verified 2026-09-28:
  https://developers.google.com/admob/android/app-open
  https://developers.google.com/admob/flutter/app-open
  https://developers.google.com/admob/ios/app-open

## Sparse-niche rules
- Never compensate for low traffic by increasing interruption pressure.
- Never count a protected workflow as forgone inventory.
- Compare treatments on incremental exposure and downstream value, not raw revenue.
- If traffic/composition/consent/ad-supply changes prevent inference, classify HOLD/INCONCLUSIVE.
- Prefer fixing request/load/fill/reconciliation losses before creating new full-screen opportunities.
- A revenue-positive treatment that weakens specialist task completion or repeat value is not automatically a business winner.
- Operator time spent repairing churn, reviews, support or reacquisition belongs in the opportunity-cost ledger.

## MintTap application
Protected by default: portfolio/income interpretation, Tax Adjustment, corrections, transaction/reinvestment accounting and other trust-sensitive financial record work. Candidate inventory should come only from genuine non-critical pauses. A lower-revenue configuration can be superior if it preserves repeated portfolio use and trust.

## LogMate application
Protected by default: onboarding/Previous Total, import/migration, duplicate reconciliation, flight-entry completion, record integrity and export. Pilot workflows are episodic; absence of daily return is not churn. Monetization must be evaluated against the next natural logbook-use opportunity.

## Minimum experiment ledger
`app_version / treatment / eligible_opportunity / actual_exposure / incremental_exposure / format / protected_state / request / load / impression / paid_value / currency / precision / reconciled_revenue / task_completion / post_ad_abandonment / first_core_value / next_natural_use / repeated_core_value / review_support_signal / technical_quality / consent_composition / traffic_composition / operator_minutes / decision / confidence`

## Reusable decision rule
Do not ask “How many more ads can this app show?” Ask “What is the highest-value non-critical opportunity whose incremental revenue remains positive after trust, specialist value, repeat use, discovery and operator costs are considered?”

## Next target
Build a **Monetization Floor & Mediation Change-Control Contract**: determine when floors, bidding/mediation changes or ad-source mix optimization are preferable to adding inventory, while preserving fill, latency, paid-event precision, traffic-quality and retention guardrails.
