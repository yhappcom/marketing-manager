# Research 215 — Impression-Level Ad Revenue and Non-Intrusive Placement Integrity

Last validated: 2026-09-23

## Why this addition matters

MintTap is ad-supported and the company constraint is to maximize sustainable ad revenue without making ads intrusive or restricting core use. Aggregate estimated earnings/eCPM alone cannot establish which product surfaces create sustainable value, and increasing ad frequency can damage specialist utility or create invalid-activity/policy risk.

Google's Mobile Ads SDK supports impression-level ad revenue (ILRD): a paid-event callback can provide value in micros, currency, ad-unit/source information and a precision type. Google documents four precision states: UNKNOWN, ESTIMATED, PUBLISHER_PROVIDED and PRECISE. Therefore an impression-level value is not automatically exact realized revenue. Google recommends registering the paid-event listener before showing the ad and forwarding the event promptly to reduce missing callbacks/discrepancies.

Google also states that interstitials belong at natural transition points, not while a user is focused on a task. Repeated interstitials can create poor UX and accidental clicks; AdMob guidance says no more than one interstitial after every two user actions. Banner placement adjacent to navigation or other interactive content is discouraged because accidental clicks can create invalid-activity/account risk. These are policy/implementation ceilings, not revenue targets.

## EA0–EA5 — Impression-Level Revenue & Placement Integrity Gate

### EA0 — Revenue-event identity
Preserve at minimum: platform/build, timestamp, ad unit, format, app surface/workflow boundary, currency, value micros, precision type, ad source/mediation identity when available, consent/eligibility state, and analytics/session linkage that is lawful and technically valid.

Never silently coerce UNKNOWN/ESTIMATED/PUBLISHER_PROVIDED/PRECISE into one semantic class.

### EA1 — Capture integrity
Verify that the production SDK/version supports the intended paid-event mechanism, ILRD is enabled where required, listeners/callbacks are registered before display, and event delivery is monitored for loss/duplication. Test traffic must remain distinguishable from production traffic.

### EA2 — Placement integrity
Every ad-bearing surface must have an explicit product rationale. Interstitials are eligible only at genuine workflow transitions or pauses, never as arbitrary interruption of portfolio review, data entry, reading, or other focused specialist work. Banner/native placements require sufficient separation from interactive controls and must not masquerade as app content.

A platform maximum or policy allowance is not the product's target frequency.

### EA3 — Utility guardrail
Revenue optimization is valid only if the candidate placement/frequency does not materially degrade the specialist job. Evaluate revenue jointly with task completion, abandonment, latency, repeat specialist value, retention semantics, crash/ANR state, complaints/reviews and accidental-click/invalid-activity signals.

Do not infer user tolerance from CTR. A higher CTR can reflect worse placement integrity.

### EA4 — Revenue reconciliation
ILRD is operational telemetry, not automatically final accounting truth. Preserve precision and currency semantics, aggregate only after appropriate normalization, and reconcile against authoritative AdMob reporting/settled revenue over comparable periods. Investigate gaps before using ILRD-derived LTV or surface economics for product decisions.

### EA5 — Sustainable decision
Scale only when the placement produces evidence-sufficient incremental reconciled revenue without unacceptable specialist-utility, trust, policy or retention cost. If evidence is sparse, retain the less intrusive configuration and continue observation rather than manufacturing exposure.

## Canonical distinctions

- `ad impression ≠ precise realized revenue`
- `ILRD value ≠ settled/reconciled revenue`
- `ESTIMATED precision ≠ PRECISE precision`
- `higher CTR ≠ better monetization`
- `policy-compliant frequency ceiling ≠ recommended product frequency`
- `more impressions/session ≠ higher sustainable LTV`
- `retained installer ≠ ad-bearing active user`
- `eligible ad surface ≠ permission to interrupt core specialist work`

## MintTap operating application

1. Preserve core portfolio/distribution/ROC workflows as the primary value surface; monetization follows utility rather than gating it.
2. Inventory every current production ad unit and map it to an exact screen/workflow boundary before changing frequency.
3. Capture ILRD only after DZ privacy/SDK/declaration integrity is reconciled.
4. For each placement, compare revenue per qualified active user/session with task completion, abandonment, repeat specialist value and complaint/review signals. Do not optimize eCPM in isolation.
5. Use natural transitions for any full-screen format. Do not insert interstitials during portfolio inspection, form/data entry, or reading merely because an action count permits it.
6. Treat accidental-click risk as a negative signal, not monetization success.
7. Reconcile impression telemetry to authoritative AdMob reporting before declaring a winning configuration.

## LogMate operating application

Home remains ad-free under the current product constraint. Future ad surfaces, if introduced, must be secondary to pilot workflow completion and pass EA0–EA5. Flight entry, import validation, safety/reliability-sensitive states, and other focused logging work are not candidates for interruption merely to increase inventory. Pre-launch revenue assumptions must not be manufactured from MintTap eCPM or generic industry averages.

## Reusable niche-app rule

For a specialist ad-supported app, optimize `reconciled revenue per qualified repeated-value user` subject to utility/trust/policy constraints, not raw impression count, CTR or dashboard eCPM. Sparse traffic increases the need for semantic precision; it does not justify more intrusive inventory.

## Production evidence packet

For each app/version/territory and meaningful period capture:

`build → consent/eligibility → ad unit → format → exact surface/workflow boundary → request/load/show/impression state → paid-event value/currency/precision → source/mediation identity → qualified active user/session denominator → specialist task completion/abandonment → repeat value/retention → complaint/review/invalid-activity signals → AdMob aggregate reporting → reconciled revenue`

Unknown fields remain unknown.

## Authoritative sources

- Google for Developers — AdMob Android, Impression-level ad revenue: https://developers.google.com/admob/android/impression-level-ad-revenue
- Google for Developers — AdMob Android, Interstitial ads: https://developers.google.com/admob/android/interstitial
- Google AdMob Help — Disallowed interstitial implementations: https://support.google.com/admob/answer/6201362
- Google AdMob Help — Recommended interstitial implementations: https://support.google.com/admob/answer/6201350
- Google AdMob Help — Discouraged banner implementations: https://support.google.com/admob/answer/6275345
- Google AdMob Help — How you can prevent invalid activity: https://support.google.com/admob/answer/3342099

## Next validation target

Reconstruct MintTap's actual production ad-unit/surface inventory and determine whether impression-level paid-event capture is enabled and complete. Do not alter placement frequency until current utility, privacy, serving and reconciled-revenue evidence exists.