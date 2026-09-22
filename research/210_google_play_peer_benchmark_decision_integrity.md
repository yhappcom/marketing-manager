# Research 210 — Google Play Peer-Benchmark Decision Integrity

Date: 2026-09-23
Status: validated from current Google Play Console Help

## Why this matters

Research 209 established that Apple peer benchmarks are diagnostic context, not growth targets. Google Play has a materially different peer system, so Apple semantics must not be copied onto Android. This note defines the Android-side decision contract for sparse niche apps such as MintTap and future LogMate production.

## Authoritative findings

Google Play Console uses two peer-group classes.

### Curated peer groups

Google generates curated groups for sensitive/business-critical metrics. Google does not disclose exact membership. They are used for metrics including user-acquisition rates, ARPDAU, DAU, MAU and growth rates. Google says these groups use Play's review-team tagging systems, exclude low-performing and abandoned apps, can be filtered (for example by country), contain at least 100 apps, and expose only aggregate median or percentile values. Curated comparisons appear across Store conversion analysis, Compare to peers, Reach and devices, Android vitals, Ratings and reviews, and Strategic guidance.

### Custom peer groups

For non-public but less business-sensitive data, custom aggregated peer groups require 8–12 apps and can be edited at most three times per month. Opting out also removes access. Fully public data such as ratings analysis can expose individual selected peers and does not carry the same group-size/edit restrictions.

### Acquisition comparison semantics

Play's acquisition reporting can compare Store-listing conversion against similar apps when enough matching peers exist. The comparison may account for monetization model and reports relative position/percentile. Absence of a comparison can therefore reflect insufficient eligible peer data rather than weak app performance.

Play also explicitly warns that acquisition numbers differ across Play Console, Google Ads, Analytics and third-party systems because their measurement semantics differ. A click is not necessarily a Store visit, and Play first-time installed-user counts do not equal every install event counted by advertising systems.

### Quality/reach comparison semantics

Reach and devices can show peer medians for install-base distribution, crash rate and ANR rate across device attributes. Country filtering changes comparison context, and peer comparison is unavailable when multiple countries are selected. Quality issue rates can use a selected period up to 90 days, while some user metrics have different time semantics. Therefore values from these surfaces must not be merged without preserving metric, period, geography and peer identity.

## DV0–DV5 Google Play Peer-Benchmark Decision Integrity Gate

`DV0 metric/surface identity → DV1 peer-class identity → DV2 geography/period/monetization integrity → DV3 aggregation/privacy/availability integrity → DV4 downstream diagnostic triangulation → DV5 intervention threshold`

### DV0 — Metric/surface identity
Record the exact Play Console surface and metric definition. Store conversion, acquisition, DAU/MAU/growth, crash/ANR, ratings and device reach are not interchangeable benchmark families.

### DV1 — Peer-class identity
Record whether the comparison is curated or custom. Never infer the members of a curated group. For custom groups, record the selected titles and group version/date where permitted.

### DV2 — Geography/period/monetization integrity
Preserve country, date window, monetization model and relevant filters. Do not compare a country-specific peer median with a global app value or mix quality windows with acquisition windows.

### DV3 — Aggregation/privacy/availability integrity
Treat aggregate percentiles/medians as contextual distributions. `benchmark unavailable != bad performance`; `curated peer != named competitor set`; `median != target`; `percentile != market rank`.

### DV4 — Downstream diagnostic triangulation
A Store-conversion gap is only a diagnostic signal. Triangulate with traffic source, Store promise, activation, specialist-workflow completion, repeat value, retention/reinstallation semantics, reliability and ad-bearing qualified use before assigning a cause.

### DV5 — Intervention threshold
Change marketing or product only when the peer signal agrees with product-specific evidence and the intervention has a plausible mechanism. Do not broaden niche positioning, increase posting, add intrusive ads or manipulate Store creative merely to move a percentile.

## MintTap operating consequences

1. Use Play peer data to identify where to investigate, not what target to hit.
2. Preserve YieldMax specialist relevance even if a generic finance-app message could increase raw Store conversion.
3. A weak conversion percentile with strong specialist activation/repeat value points toward route/message/Store continuity investigation; it does not prove ASO failure.
4. Healthy Store conversion with weak repeat value shifts priority downstream rather than toward more acquisition.
5. Crash/ANR peer gaps can explain acquisition or retention friction only after the affected device/geography cohorts are matched to actual user evidence.
6. Do not infer competitors from curated-group composition; Google intentionally withholds it.
7. For ad revenue, peer business metrics remain context only. Sustainable revenue still requires privacy-eligible, non-intrusive ad-bearing use and reconciled revenue evidence.

## LogMate operating consequences

Do not establish pre-launch Play conversion, retention, DAU or quality targets from peer medians. Once production evidence exists, use peer distributions to calibrate investigation while preserving pilot-workflow correctness and trust. A benchmark must never justify ads on Home or friction that interferes with logging/import/offline utility.

## Cross-platform rule

Apple DU and Google Play DV share one principle—peer data is diagnostic context, not a target—but their peer construction and metric semantics remain platform-native. Never normalize Apple P25/P50/P75 and Google curated/custom peer results into a synthetic company-wide percentile.

## Production evidence packet to capture

For MintTap, capture together: Play Console surface; exact metric; current app value; peer median/percentile where shown; curated/custom status; selected country; date window; monetization model/filter state; acquisition source where relevant; activation/core-workflow completion; repeat specialist value; crash/ANR context; and qualified ad/revenue evidence. Unknown fields remain unknown.

## Sources

- Google Play Console Help, “Peer benchmark groups in Play Console”: https://support.google.com/googleplay/android-developer/answer/10771707?hl=en
- Google Play Console Help, “View and understand your app's quality and reach”: https://support.google.com/googleplay/android-developer/answer/10770882?hl=en
- Google Play Console Help, acquisition/retention analysis documentation: https://support.google.com/googleplay/android-developer/answer/6263332?hl=en
- Google Play Console Help, “View app statistics”: https://support.google.com/googleplay/android-developer/answer/139628?hl=en

## Unresolved production questions

- Which curated peer group(s) does MintTap currently receive on each eligible Play surface?
- Which country/monetization/filter state is currently active for Store conversion comparisons?
- Are any custom peer groups configured, and if so are they analytically defensible rather than convenience-selected?
- Which benchmark gaps survive triangulation with actual MintTap activation, repeat specialist value and technical quality?
