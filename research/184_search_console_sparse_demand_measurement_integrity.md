# Research 184 — Search Console Sparse-Demand Measurement Integrity

Date: 2026-09-22
Status: validated operating contract

## Why this matters
For MintTap, LogMate, and future specialist apps, owned-web search demand is sparse and long-tail. Search Console is therefore evidence, but its visible query rows are not a census of user vocabulary. Marketing decisions must preserve privacy filtering, aggregation semantics, canonical URL assignment, row limits, and metric identity.

## Authoritative findings

### 1. Query tables are incomplete by design
Google suppresses the text of rare/anonymized queries for privacy. In the Search Console Performance interface/API, anonymized query text is omitted; overall totals can therefore exceed the sum of visible query rows. Query filters can further remove anonymized-query contribution from totals. Absence of a visible query row is not evidence of zero demand.

### 2. API/UI extraction is not automatically exhaustive
The Search Analytics API returns top rows and does not guarantee every row. Google documents row limits and pagination behavior. Therefore a keyword inventory reconstructed only from exported query rows must carry a coverage qualifier.

### 3. Bulk export changes the observability model
Search Console bulk export to BigQuery provides daily property- and URL-aggregated tables without the normal daily row limit. Current table documentation includes `is_anonymized_query`; rare queries retain aggregate metrics while query text is blank/zero-length. This can quantify how much demand is hidden without attempting to recover the protected vocabulary.

### 4. Property and page aggregation are not interchangeable
When multiple URLs from one property appear in a result set, property aggregation and page aggregation count impressions/position differently. A property-level CTR or average position must not be compared mechanically with a URL-level value as though they share the same denominator/position semantics.

### 5. Search performance is assigned primarily to Google's canonical URL
Search Console generally assigns clicks, impressions, and position to the canonical URL Google selects for variants. Marketing URL inventories therefore need to reconcile `desired URL`, `declared canonical`, `Google-selected canonical`, and `Search Console reporting URL` before concluding that a page has no demand.

### 6. Search evidence and product evidence remain different layers
Search Console clicks/impressions establish Google Search exposure and response. They do not establish an App Store visit, install, first useful value, retention, or ad-bearing use. Search Console and product analytics may be joined for analysis, but native metric semantics must remain intact.

## CV0–CV5 Search Demand Measurement Integrity Gate

**CV0 — property/time identity**
Record Search Console property, search type, country/locale where relevant, device where relevant, complete vs preliminary date state, and extraction date.

**CV1 — aggregation identity**
Declare whether evidence is property-, URL-, query-, query×URL-, country-, device-, or search-appearance-level. Never compare unlike aggregation levels without an explicit transformation.

**CV2 — privacy/coverage identity**
Record visible-query metrics separately from total metrics. Treat their residual as hidden/anonymized/otherwise non-itemized demand, not zero. Never infer the protected query text.

**CV3 — canonical/index identity**
For page-level analysis reconcile desired URL, redirect state, declared canonical, Google-selected canonical/index state, and reporting URL before diagnosing demand failure.

**CV4 — decision sufficiency**
Use sparse evidence for directional demand discovery only when sample size and coverage support it. Do not create a page merely because one query row exists; do not delete/merge a useful specialist page merely because its query row is absent.

**CV5 — downstream-value validation**
Where routing is observable, continue from organic landing to permitted Store/product route, acquisition/re-entry, first/restored useful value, repeated value, and sustainable ad-bearing use. Keep unattributed stages unknown rather than fabricating continuity.

## Canonical invariants
- `no visible query row ≠ zero demand`
- `sum(visible queries) ≠ necessarily total Search demand`
- `query-filtered total ≠ unfiltered total semantics`
- `API export ≠ guaranteed exhaustive vocabulary census`
- `property aggregation ≠ page aggregation`
- `reported URL ≠ necessarily the URL originally requested by the user`
- `impression ≠ visit`
- `click ≠ qualified visitor`
- `organic landing ≠ Store visit`
- `Search traffic ≠ install or retained value`
- `anonymized demand ≠ permission to reconstruct private queries`

## MintTap operating method
1. Establish the exact Search Console property and extraction window.
2. Capture unfiltered totals first by date/search type.
3. Capture page-level metrics and reconcile reporting URLs against the canonical/index inventory from CU.
4. Capture query and query×page evidence, explicitly labeling visible-query coverage.
5. If bulk export is already available and operationally justified, quantify anonymized-query share using the documented anonymization field; do not introduce paid infrastructure merely to satisfy curiosity on a tiny property.
6. Cluster only observable queries into specialist jobs (e.g. portfolio tracking, distribution history, ROC/tax workflow) and keep an `unknown long-tail` bucket.
7. Require CU distinct-value evidence before creating a new indexable page.
8. Connect a page to Store/product outcomes only where route instrumentation supports the connection.

## LogMate transfer
Use the same contract after launch. Pilot vocabulary is likely to fragment by logbook task, import source, recency/compliance question, device, and jurisdiction. Do not treat missing visible queries as proof that a professional job does not exist. Product/support/community evidence can establish a job even when Search Console cannot expose its query text.

## Zero-cost constraint
Search Console UI/API should be the default for small properties. BigQuery bulk export is an optional observability layer, not a required marketing dependency. If used, control query/storage cost and preserve the native schema. The zero-cost program should not create cloud spend merely to obtain marginally finer reporting.

## Sources
- Google Search Central, Performance report data semantics: https://support.google.com/webmasters/answer/17011364
- Google Search Central, impressions/clicks/canonical URL assignment: https://support.google.com/webmasters/answer/7042828
- Google Search Central, Search Analytics API: https://developers.google.com/webmaster-tools/v1/searchanalytics/query
- Google Search Central, performance data filtering and limits: https://developers.google.com/search/blog/2022/10/performance-data-deep-dive
- Google Search Console Help, bulk export overview: https://support.google.com/webmasters/answer/12918484
- Google Search Console Help, bulk export table schema: https://support.google.com/webmasters/answer/12917991
- Google Search Central, Search Console + Analytics guidance: https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console

## Next validation
Apply CU+CV to minttap.app: URL/canonical/index inventory, Search Console property identity, visible-query vs total metrics, page/query evidence, Korean/English demand clusters, hidden-demand share if available, and downstream route observability. Do not build an SEO content calendar until this evidence exists.
