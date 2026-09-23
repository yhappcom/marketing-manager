# Research 222 — Ad Exposure Distribution and Revenue-per-User Integrity

Validated: 2026-09-23

## Purpose
Move monetization optimization beyond eCPM/fill and aggregate impressions. For sparse niche apps, determine whether revenue is created by broad, non-intrusive participation among qualified users or by concentrating excessive exposure on a small subset.

## Authoritative findings
Google AdMob's current User Activity reporting distinguishes Active Users (AU), Ad Viewers (AV), Ad viewer rate (`AV / AU`), Ads ARPU (`estimated earnings / AU`), Ads ARPV (`ads earnings / AV`), Imps/AU (`impressions / AU`), Imps/AV (`impressions / AV`) and Imps/Session (`impressions / sessions`). Google explicitly describes Imps/AU as ad density/ad load. These denominators answer materially different questions and must not be substituted for one another.

Ad viewer metrics also have a reporting threshold: AV can appear as zero even when impressions are non-zero. Therefore zero reported AV is not evidence that nobody saw ads, especially in sparse cohorts.

Impression-level revenue remains useful for user-level/LTV analysis, but Google states that discrepancies with AdMob/third-party reports are expected and that zero-value paid events must be retained to avoid underreporting impressions. Therefore user-level revenue analysis still requires reconciliation rather than treating event sums as settled revenue.

## New operating principle
Optimize the distribution of monetization burden, not merely aggregate monetization output.

A revenue increase can arise from materially different states:
1. more qualified active users;
2. a larger legitimate share of qualified users becoming ad viewers;
3. higher value per legitimate viewer/impression;
4. more sessions created by genuine product value;
5. heavier ad density imposed on existing viewers.

Only the first four are potentially healthy by default. The fifth requires explicit utility evidence and must never be inferred as healthy from revenue growth alone.

## EH0–EH5 — Ad Exposure Distribution & Revenue-per-User Integrity Gate

### EH0 — Metric identity
Preserve exact numerator, denominator, aggregation window, app/platform, geography, format, ad unit and consent/eligibility state for AU, AV, sessions, impressions and revenue.

### EH1 — Viewer participation integrity
Separate ad viewer rate from ad density. A higher AV/AU may reflect broader monetization eligibility or changed placement reach; it does not establish more aggressive exposure. Conversely stable AV/AU can hide rising Imps/AV.

### EH2 — Exposure-density integrity
Track Imps/AU, Imps/AV and Imps/Session together. Do not use aggregate impressions or Imps/AU alone to infer individual burden. Where production telemetry permits, inspect exposure distribution/tails by qualified cohort and workflow, not just means.

### EH3 — Revenue-denominator integrity
Read Ads ARPU and Ads ARPV together with viewer rate and exposure density. Higher ARPV can be caused by better auction value or by more impressions per viewer. Higher ARPU can be caused by wider legitimate viewer participation, higher value, or concentrated exposure. Decompose before acting.

### EH4 — Sparse/reporting integrity
Treat suppressed/thresholded AV observations as unknown, not zero. Preserve zero-value ILRD events and reconcile event-level revenue/impressions against AdMob and mediation reports before cohort conclusions.

### EH5 — Sustainable specialist-value decision
Approve monetization changes only when revenue-per-user/viewer gains do not depend on degrading specialist task completion, readability, re-entry, retention, complaints, accidental interaction, or protected workflows. Prefer gains from qualified audience growth, legitimate viewer coverage and auction quality over additional exposure density.

## Canonical distinctions
- `Ads ARPU ≠ Ads ARPV`.
- `Ad viewer rate ≠ ad density`.
- `Imps/AU ≠ Imps/AV ≠ Imps/Session`.
- `more impressions ≠ broader monetization participation`.
- `higher ARPV ≠ better auction yield` unless exposure density is controlled.
- `zero reported AV ≠ zero real ad viewers` when reporting thresholds apply.
- `average ad density ≠ exposure-tail safety`.
- `revenue growth ≠ sustainable monetization growth`.

## MintTap application
For each platform × geography × qualified acquisition cohort × ad format/unit × specialist workflow, recover AU, AV, viewer rate, sessions, impressions, Imps/AU, Imps/AV, Imps/Session, Ads ARPU, Ads ARPV, reconciled revenue and ILRD precision. Join these to task completion/abandonment, repeat specialist value, retention, complaint and invalid-activity evidence.

Do not increase ad density merely because eCPM/fill has been optimized or because aggregate revenue remains low. First determine whether the limiting factor is qualified audience scale, legitimate viewer participation, auction value, or exposure density.

A particularly important diagnostic is `ARPV up + Imps/AV up`: this does not establish better monetization efficiency. It may simply mean the same viewers are carrying more ads. Likewise `ARPU up + viewer rate up + stable Imps/AV` is materially different and may represent broader, less concentrated monetization.

## LogMate application
Home remains ad-free and critical flight-entry/logbook/import-validation/export/sync-recovery/totals workflows remain protected. If future secondary surfaces monetize, EH requires that revenue not be concentrated through repeated exposure on a small group of high-frequency professional users. Pilot frequency of use must not become a justification for heavier ad burden.

## Reusable niche-app framework
For future niche apps, monetize in this diagnostic order:
`qualified active-user scale → legitimate viewer participation → auction/value quality → non-intrusive placement efficiency → exposure density only if utility evidence remains clean`.

Small professional audiences make averages fragile. Maintain denominator semantics and, where privacy-safe telemetry allows, inspect distribution rather than assuming the mean user represents the monetized user.

## Sources
- Google AdMob Help, “Using your User Activity report”: AU, AV, viewer rate, Ads ARPU, Ads ARPV, Imps/AU, Imps/AV, Imps/Session and reporting-threshold semantics.
- Google AdMob Help, “Reports glossary”: metric definitions and denominator semantics.
- Google AdMob Help, “Use impression-level ad revenue”: user/LTV use, zero-value event handling and expected reconciliation discrepancies.

## Next evidence target
Apply EH together with EA–EG to MintTap production. The minimum packet is: `qualified cohort → AU → AV → viewer rate → sessions → impressions → Imps/AU → Imps/AV → Imps/Session → Ads ARPU/ARPV → ILRD/reconciled revenue → format/unit/workflow → task/retention/complaint/invalid-activity guardrails`. Unknown or threshold-suppressed values remain unknown.