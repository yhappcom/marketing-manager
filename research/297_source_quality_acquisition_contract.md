# Research 297 — Source-Quality Acquisition Contract

Validated: 2026-09-29

## Purpose

For sparse niche apps, optimize acquisition sources for repeated specialist value, not raw installs. Store search, browse, web referrals, app referrals, community links, and owned campaigns are different intent channels and should not be pooled into one conversion KPI.

## Authoritative platform facts

Apple App Store Connect Analytics currently attributes downloads/redownloads to source types including App Store search, browse, app referrer, web referrer, and custom campaigns. Sales, usage, and subscription data can then be viewed against the recorded download source. A manual App Store redownload resets the recorded source, so source attribution is useful but is not immutable lifetime-origin truth.

Apple's acquisition funnel includes unique impressions, unique product-page views, downloads, and conversion rate, and source results can be segmented by territory/device. Source data can be exported through App Store Connect API analytics reports.

## GY0–GY9

1. **Intent class** — define the specialist job represented by the source.
2. **Source identity** — Store search/browse, app referrer, web referrer, campaign, community, owned reference, etc.
3. **Attribution semantics** — document what the platform actually attributes and where attribution can reset or be unavailable.
4. **Store promise** — identify the exact claim/creative/route encountered.
5. **Destination parity** — confirm the install opens into a path capable of delivering that promised job.
6. **First specialist value** — measure completion of the first meaningful specialist task, not only install/open.
7. **Repeated specialist value** — measure return to the same or adjacent specialist job.
8. **Revenue quality** — where ads are used, compare privacy-eligible sustainable revenue without increasing pressure on protected workflows.
9. **Evidence class** — separate platform-attributed observation from causal incrementality.
10. **KEEP / REPAIR / ROUTE / HOLD / RETIRE** — allocate operator attention based on downstream value and evidence quality.

## Sparse-niche operating rules

- Do not rank acquisition channels by installs alone.
- Do not infer incrementality from source attribution.
- Do not interpret App Store Search as pure organic keyword traffic: Apple's definition includes views/downloads from ads appearing in search results.
- Do not treat a manual redownload's recorded source as the user's immutable original acquisition source.
- Community contribution can be valuable without measurable installs if it produces recurring problem evidence, trusted language, support deflection, or durable owned-reference material.
- Campaign links should be used where they materially improve source observability; tagging is not a reason to manufacture promotion.
- A source with lower install conversion can be superior if it produces materially higher first/repeated specialist value.
- For low-volume apps, aggregate by specialist intent and evidence quality before slicing into tiny source cohorts.

## MintTap application

Prioritize source-quality comparisons around materially different jobs: distribution/ROC interpretation, total-return interpretation, and validated reconstruction workflows. Ticker-level segmentation is not justified unless the underlying job, promise, destination, or repeated-value behavior is materially distinct.

A YieldMax community referral that yields few installs but repeatedly reveals a high-value unresolved ROC/provenance problem may be more useful than a larger generic traffic source. Conversely, Store Search traffic should not be assumed to represent organic keyword demand without accounting for Apple's source definition.

## LogMate application

At launch, distinguish pilot intent such as migration/import continuity, Previous Total continuity, duplicate/reconciliation integrity, and export/record integrity. Airline, aircraft type, or roster vendor are not acquisition segments by themselves unless they correspond to distinct product jobs and destinations.

## Reusable ledger

`source | intent class | platform attribution definition | territory/device | Store route/claim | destination | first specialist value | repeated specialist value | revenue quality | evidence class | confounders | decision | re-entry trigger`

## Decision consequence

The next production acquisition audit should start from actual source data and specialist-value events. If downstream events are unavailable, mark them UNKNOWN rather than substituting conversion rate or installs as quality proxies.
