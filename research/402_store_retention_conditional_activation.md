# Research 402 — Store Retention Is Conditional on Activation, Not a Substitute for It

Date: 2026-10-03
Status: VALIDATED

## Decision
For sparse niche apps, platform retention must not be used as a proxy for install-to-first-value activation. Apple App Store Connect retention excludes installers who have never opened the app from both numerator and denominator until they first open. Therefore a cohort can show acceptable D1/D7/D28 retention among activated/opened devices while still losing a material share of acquired users before first launch or first specialist value.

## Authoritative evidence
Apple's current App Store Connect Analytics documentation defines app retention as the share of active devices that open the app on a given day after installation. Critically, users who install but never open are excluded from both numerator and denominator. If a user installs on January 1 but first opens on January 10, that device enters the January 1 cohort denominator only on January 10. Apple also notes that retention is usage-data based, depends on user consent, and may be blank for low-volume cohorts because of privacy thresholds.

Apple Acquisition analytics separately exposes impressions, product-page views, downloads, source dimensions, and usage metrics. Acquisition source is recorded at download/redownload and can be used to compare downstream behavior by source where data is available.

Google Play's current Store listing performance separates listing visitors/clicks/CTR from broader acquisition reporting, reinforcing that Store persuasion and downstream use are different measurement stages.

Sources:
- https://developer.apple.com/help/app-store-connect-analytics/engagement/app-retention
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/acquisition
- https://support.google.com/googleplay/android-developer/answer/9859173

## New measurement consequence
A retention percentage is conditional on the platform metric's eligible population. It does not answer:
1. How many Store-acquired users completed installation?
2. How many installers launched at least once?
3. How many launched users reached the first specialist job?
4. How many first-value users repeated that job at the natural professional cadence?

Do not interpret strong retention as evidence that onboarding/activation is healthy unless the preceding denominators are measured independently.

## JL0–JL9 — Activation-to-retention contract
JL0 specialist intent/source
→ JL1 Store visitor
→ JL2 click/download/acquisition
→ JL3 first launch eligibility
→ JL4 first specialist-value event
→ JL5 activation latency
→ JL6 platform-retention denominator semantics
→ JL7 repeat specialist-value event at natural cadence
→ JL8 censoring/consent/completeness state
→ JL9 KEEP / REPAIR-STORE / REPAIR-ACTIVATION / REPAIR-REPEAT / HOLD-SPARSE.

## Operating rules
- Never back-calculate activation from App Store retention.
- Preserve raw denominators at every stage; do not silently substitute platform-defined populations.
- Record metric population beside every KPI: e.g. acquired users, ever-opened active devices, first-value users.
- A Store creative win requires downstream validation; CTR/download lift can coexist with worse activation.
- A retention improvement can be survivor-selection if first-launch or first-value completion deteriorates.
- For sparse cohorts, classify blank cells as BELOW-THRESHOLD / PRIVACY-SUPPRESSED / INCOMPLETE / UNKNOWN rather than zero.
- Evaluate repeat behavior at the product's natural specialist cadence; generic daily retention is contextual evidence, not automatically the business KPI.

## MintTap application
MintTap should instrument a first-value ladder such as portfolio setup/import → first meaningful holding/distribution/ROC inspection → repeated portfolio/distribution reconciliation. Exact production events must be verified before naming canonical analytics events. YieldMax usage can be event-driven, so D1/D7/D28 retention should be paired with distribution/ROC/reconciliation cadence rather than optimized in isolation.

A source or Store page that generates more downloads but fewer first-value completions should not be promoted merely because Store conversion improved.

## LogMate application
For LogMate, first-value measurement should follow the actual pilot workflow: launch → import/migration or first valid log entry → successful continuity/reconciliation → later logging/export reuse. Exact production event names remain an implementation audit item. Generic daily retention can understate healthy roster/flight-driven use and cannot reveal installers who never launched.

## Reusable niche-app rule
Use a denominator ledger:
metric | numerator | denominator | eligibility trigger | exclusions | consent/privacy dependency | reporting delay | source attribution | business interpretation.

Every platform KPI must pass this ledger before it can trigger a growth decision.

## Next learning target
Build the MintTap production activation denominator ledger and map Apple/Google acquisition populations to first-party first-value/repeat events. Only after that should Store routing, community channels, or ad yield be ranked by user quality.
