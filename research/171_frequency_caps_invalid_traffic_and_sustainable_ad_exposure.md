# Research 171 — Frequency Caps, Invalid Traffic, and Sustainable Ad Exposure

Validated: 2026-09-21

## Why this addition exists
Research 164–170 established impression revenue, format/lifecycle, full-screen transition, and consent integrity. A remaining operational gap is exposure pressure: a policy-eligible placement can still be over-served, create accidental/repeated interactions, degrade useful use, and contaminate monetization evidence.

## Authoritative findings
Google AdMob supports frequency capping at both app and ad-unit level for interstitial, rewarded, and app-open ads. The cap is expressed as impressions per user over a chosen period. This means format eligibility and frequency permission are separate controls; a valid natural transition does not imply unlimited repeated exposure.

Google defines invalid traffic to include impressions or clicks that artificially inflate advertiser cost or publisher earnings, including publisher self-interaction, repeated clicks/impressions by users, encouraged clicks, accidental-click-prone implementations, automated activity, and deceptive traffic. Google may limit or disable ad serving when traffic quality cannot be verified. Development must use test ads/test devices rather than live-ad interaction.

Therefore short-term request/impression growth is not automatically monetization improvement. Exposure pressure can simultaneously reduce product value and increase traffic-quality risk.

## CI0–CI5 Exposure-Pressure & Traffic-Quality Integrity Gate
CI0 — Surface eligibility: placement has already passed the relevant CB–CH format, consent and transition gates.

CI1 — Frequency identity: record app-level and ad-unit-level cap configuration, format, user/session boundary and effective observation period. Absence of a cap is an explicit state, not an assumed default.

CI2 — Exposure integrity: distinguish eligible opportunities, show attempts, actual impressions and repeated impressions per user/session/time window. Do not optimize on requests alone.

CI3 — Traffic-quality integrity: segregate test traffic; prohibit publisher/self live-ad interaction, encouraged clicks, deceptive attention, accidental-click-prone layout and artificial traffic sources. Investigate anomalous repeated exposure/click patterns before scaling.

CI4 — Revenue/value reconciliation: join exposure pressure to CB impression revenue/precision and to task completion, abandonment, restored/repeated useful value. Compare cohorts/windows only where consent, placement and traffic-quality state are interpretable.

CI5 — Sustainable decision: increase exposure only when reconciled incremental revenue improves without material deterioration in useful/repeated product value or traffic-quality signals. Prefer the lowest exposure pressure that captures economically meaningful inventory.

## Evidence boundaries
- `eligible state ≠ unlimited exposure permission`
- `ad request ≠ impression`
- `more impressions/user ≠ more sustainable revenue/user`
- `high CTR ≠ healthy monetization`
- `frequency cap configured ≠ product-appropriate frequency`
- `policy compliance ≠ immunity from invalid-traffic review`
- `estimated revenue ≠ finalized revenue`

## MintTap operating consequence
Do not add full-screen exposure simply because a natural transition exists. First inventory app/ad-unit caps for app-open, interstitial and rewarded formats, then measure actual impressions per user/session/day alongside CB revenue and useful/repeated-value outcomes. Keep Home and core portfolio/transaction/tax-adjustment work outside the monetization-pressure experiment. Development/QA devices must be test devices or use sample ad units.

If traffic-quality or ad-serving-limit warnings exist, treat them as a monetization-integrity incident: freeze exposure scaling, preserve placement/country/ad-unit evidence, verify test segregation and traffic sources, and do not compensate by making surviving placements more aggressive.

## LogMate operating consequence
Professional-work interruption cost is high. Even a policy-eligible post-task transition is not automatically a repeated-ad opportunity. Define conservative full-screen caps before monetized launch and preserve flight entry/import/correction/error-recovery as excluded states. QA must never exercise live ads.

## Reusable niche-app rule
For sparse professional audiences, maximizing impressions per small cohort is especially dangerous because a few users can dominate exposure/click metrics and distort inference. Optimize `reconciled revenue from low-risk eligible exposure × preserved repeated useful value`, not ad pressure.

## Sources
- Google AdMob Help, “Set frequency capping for apps or ad units”: https://support.google.com/admob/answer/6244508
- Google AdMob Help, “Invalid traffic”: https://support.google.com/admob/answer/3342054
- Google AdMob Help, “How you can prevent invalid activity”: https://support.google.com/admob/answer/3342099
