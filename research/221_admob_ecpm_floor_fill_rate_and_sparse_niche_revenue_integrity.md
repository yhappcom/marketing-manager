# Research 221 — AdMob eCPM Floor, Fill-Rate & Sparse-Niche Revenue Integrity

Date: 2026-09-23
Status: Validated from current Google AdMob documentation

## Why this matters
MintTap and future niche professional apps can have small, geographically uneven traffic. In such apps, a higher observed eCPM can look like monetization improvement while total eligible impressions, match/fill and ultimately reconciled revenue fall. Floor optimization therefore cannot be judged by eCPM alone.

## Validated platform facts
Google AdMob defines an eCPM floor as the minimum eCPM at which eligible demand is allowed to serve. The auction operates per impression. For CPM demand, bids below the floor are excluded; for CPC demand, AdMob predicts expected CPM using estimated click likelihood and excludes demand below the floor on a best-effort basis.

AdMob currently exposes Google-optimized floor modes: High floor (prioritize higher-paying ads), Medium floor (balance higher-paying ads and fill rate), and All prices (maximize fill across price points), plus manual floor and disabled options. Google states that Google-optimized floors use geography, ad-unit traffic and historical data and can help maximize total revenue.

A higher floor can reduce ad serving/match rate. Google explicitly recommends reviewing floor placements regularly with other ad networks because floors can materially affect overall monetization.

Scope is important: current AdMob floor documentation says floors apply to AdMob Network and bidding ad sources on a best-effort basis, but not to third-party waterfall sources. Product-specific help pages also warn not to assume the floor controls third-party networks/custom events in mediation.

Country-specific manual floors can override the global manual floor for requests from the selected country. This makes geography part of the decision state rather than a reporting afterthought.

New ad units and recently changed floors/traffic/placements can require more than a week before floor behavior is accurate/stable. A short post-change window is therefore not sufficient evidence for a durable revenue conclusion.

## Core distinctions
Preserve:

- `higher eCPM ≠ higher total revenue`
- `higher floor ≠ better auction outcome`
- `lower match/fill ≠ automatically harmful if reconciled revenue and utility improve`
- `higher match/fill ≠ automatically optimal if low-value inventory adds UX cost`
- `floor setting ≠ universal mediation floor`
- `global floor ≠ country-specific effective floor`
- `short post-change observation ≠ stable treatment effect`
- `dashboard eCPM ≠ reconciled sustainable revenue`

For sparse niche traffic, apparent eCPM gains are especially vulnerable to denominator changes and sampling noise. Always retain requests, matched requests, impressions, eligible sessions/users, geography, source mix and time window with the eCPM observation.

## EG0–EG5 — Floor / Fill / Revenue Integrity Gate

### EG0 — Configuration identity
Capture app, platform, ad unit, format, placement, mediation group, floor mode/value, country override, demand-source scope, effective date and prior state.

### EG1 — Auction-denominator integrity
Preserve requests, matched requests, impressions, match/fill-related metrics, eCPM and revenue together. Never optimize on eCPM in isolation.

### EG2 — Geography/source integrity
Separate materially different countries and demand-source classes. Verify which sources the floor actually constrains; do not infer third-party waterfall behavior from the AdMob floor.

### EG3 — Stabilization and sparse-evidence integrity
Record configuration/placement/traffic changes and allow an adequate stabilization window. Treat sparse cells and early post-change observations as inconclusive rather than wins/losses.

### EG4 — Specialist-utility integrity
Connect floor changes to actual ad exposure, latency/blank-slot behavior where relevant, qualified specialist task completion, abandonment, repeat value, complaints and traffic-quality signals. A monetization setting may not manufacture product friction to improve auction statistics.

### EG5 — Sustainable-revenue decision
Judge changes on reconciled total revenue and revenue per qualified repeated-value user/session, with EA–EF guardrails intact. Do not promote a floor merely because eCPM increased.

## MintTap operating rule
Do not raise manual floors simply to increase dashboard eCPM. First reconstruct each production ad unit's current floor mode/value, country overrides, mediation source topology and change history. Compare requests → matches → impressions → ILRD/reconciled revenue across stable windows and meaningful geographies, then connect those observations to specialist utility and repeat use.

Because MintTap serves a narrow YieldMax audience, low-volume country/ad-unit cells must not be treated as reliable floor experiments. Aggregate only where the audience, placement, demand configuration and metric semantics remain comparable.

## LogMate operating rule
No monetization-floor experiment overrides the existing product constraint that Home and critical flight/logbook workflows remain protected. If future secondary ad-bearing surfaces exist, floor optimization begins only after the surface itself passes EA–EF. Higher eCPM cannot justify new intrusive inventory.

## Reusable niche-app framework
For future specialist apps, start with truthful baseline monetization, collect sufficient stable evidence, and treat price floors as auction controls rather than growth levers. The correct optimization object is sustainable reconciled revenue conditional on preserved product utility—not eCPM rank.

## Production evidence packet
`app/platform → ad unit/format/surface → floor mode/value → country override → effective/change date → mediation group/source scope → requests → matches → impressions → eCPM → ILRD precision → reconciled revenue → qualified users/sessions → specialist task completion/abandonment → repeat value → complaint/invalid-activity signals`

## Sources
- Google AdMob Help, “About AdMob eCPM floors” (current documentation accessed 2026-09-23): https://support.google.com/admob/answer/3418058?hl=en
- Google AdMob Help, “AdMob mediation FAQs” (current documentation accessed 2026-09-23): https://support.google.com/admob/answer/9686161
- Google AdMob Help, ad-unit creation documentation for app-open/interstitial/rewarded formats (current documentation accessed 2026-09-23).

## Next evidence target
Apply EA–EG to actual MintTap production inventory. Specifically recover floor modes/values, country overrides, mediation source topology and floor-change history before recommending any floor or fill-rate intervention.