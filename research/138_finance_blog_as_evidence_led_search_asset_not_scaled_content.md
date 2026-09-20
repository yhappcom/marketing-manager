# 138 — Finance blog as an evidence-led search asset, not scaled content

Validated: 2026-09-20

## Why this matters

MintTap has a natural zero-cost content opportunity around specialist YieldMax workflows, but finance/tax-adjacent publishing has a higher trust burden than ordinary app-content SEO. The correct operating model is not a ticker-keyword publishing factory. It is a small evidence-led knowledge surface whose pages are worth reading even if they never produce an install.

## Authoritative findings

### 1. Finance is a high-trust search domain
Google's people-first content guidance says its systems give greater weight to strong E-E-A-T-aligned signals for topics that can significantly affect people's financial stability, health or safety (YMYL). Google also states that Trust is the most important aspect of E-E-A-T and that E-E-A-T itself is not a single ranking factor.

Operational implication: MintTap articles that discuss distributions, ROC, taxes, return calculations or portfolio accounting must be held to a higher evidence/provenance standard than ordinary product marketing copy. A disclaimer cannot substitute for factual sourcing.

Source: https://developers.google.com/search/docs/fundamentals/creating-helpful-content

### 2. AI assistance is not the problem; low-value scale is
Google's current spam policy defines scaled content abuse as generating many pages primarily to manipulate rankings rather than help users. Explicit examples include generative-AI page generation without added value, scraped/transformed feeds, stitched pages without added value, and many keyword-bearing pages with little reader value. The policy is creation-method neutral.

Operational implication: do not create near-identical `TSLY ROC`, `CONY ROC`, `MSTY ROC`, etc. pages merely because ticker substitution creates search inventory. A ticker-specific page is justified only when its evidence, calculation, history, edge case or user decision materially differs.

Source: https://developers.google.com/search/docs/essentials/spam-policies

### 3. Doorway-page risk reinforces the same constraint
Google defines doorway abuse to include substantially similar pages created to rank for similar queries and funnel users toward the actual destination.

Operational implication: a MintTap blog page cannot exist mainly as a search-result intermediary to an App Store link. The article must satisfy the specialist query on the web page itself. App links are optional downstream paths, not the page's reason to exist.

Source: https://developers.google.com/search/docs/essentials/spam-policies

### 4. Generative-search optimization does not require a separate 'GEO' content factory
In May 2026 Google published new guidance for generative AI features in Search. Its summary emphasizes valuable, unique, non-commodity content and says ordinary SEO best practices remain foundational; it also explicitly addresses common AEO/GEO misconceptions.

Operational implication: do not create parallel 'AI Overview optimized' copies of MintTap articles or purchase speculative GEO tooling. One canonical, crawlable, evidence-rich specialist resource should serve humans and Search. Search Console remains the first-party measurement source.

Source: https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing

### 5. Structured data is an eligibility aid, not a growth claim
Google currently supports `SoftwareApplication` structured data, including `FinanceApplication`, and states that valid markup can make a page eligible for a rich result but does not guarantee display. Google has also continued retiring low-use rich-result types; FAQ rich results were removed from Google Search in 2026.

Operational implication: implement truthful app structured data where technically appropriate, but never build a content strategy around rich-result markup or resurrect obsolete FAQ-schema tactics. Structured data describes a useful page; it does not rescue a weak page.

Sources:
- https://developers.google.com/search/docs/appearance/structured-data/software-app
- https://developers.google.com/search/updates

## BD0–BD5 Evidence-Led Specialist Publishing Gate

**BD0 — no publishing contract**
Content ideas are generated from keywords, competitor pages or AI prompts without a defined specialist job, evidence source or editorial owner.

**BD1 — topic relevance**
The topic is relevant to the app audience, but the page's distinct user job and evidence burden are not yet specified.

**BD2 — evidence plan**
Before drafting, record: specialist question; why a separate page is warranted; primary/authoritative sources; calculation/data provenance where applicable; author/editor responsibility; freshness trigger; relationship to product; and whether the page enters financial/tax-sensitive territory.

**BD3 — publishable specialist utility**
The page must be self-contained and useful without an install. Claims that can affect financial interpretation are sourceable and dated where freshness matters. Product affiliation is explicit. The page contributes original explanation, calculation method, worked example, app-specific workflow evidence, or another non-commodity benefit. Near-duplicate ticker/location/keyword variants fail this gate. App/Store links are optional and must preserve AS/AX attribution and intent continuity where used.

**BD4 — observed qualified discovery**
Evaluate Search Console query/page evidence under the existing AW/AS measurement discipline. Do not judge success by page count, indexed-page count or impressions alone. Track whether the page attracts the intended specialist query class and whether downstream users reach relevant product value. Missing/censored downstream evidence remains unknown, not zero.

**BD5 — maintained knowledge asset**
Retain pages that continue to solve a specialist job. Update when source facts, product behavior, tax/accounting assumptions or platform mechanics change. Consolidate overlapping pages rather than protecting obsolete SEO inventory. Preserve meaningful losses and retired hypotheses.

## Required article evidence record

For every finance/tax/distribution-adjacent MintTap article, store at minimum:

- `specialist_job`
- `why_separate_page`
- `primary_sources[]`
- `source_as_of_dates[]`
- `calculation_or_data_provenance`
- `author_or_editor_responsibility`
- `product_affiliation_disclosed`
- `financial_or_tax_sensitivity`
- `claims_requiring_refresh[]`
- `refresh_trigger`
- `canonical_url`
- `related_pages`
- `store_destination_if_any`
- `AS_attribution_if_any`
- `Search_Console_query_cluster`
- `qualified_downstream_state`

## MintTap application

Prioritize a small set of durable problem pages, subject to evidence validation, such as how MintTap preserves distribution/portfolio history through reverse splits, how the app represents ROC/tax adjustments, and how its return/accounting fields are calculated. These are product-linked specialist explanations, not generic investment recommendations.

Do not automatically publish one article per YieldMax ticker. A ticker page requires ticker-specific evidence or workflow differences. Do not publish predictions, buy/sell recommendations, yield-chasing copy, or tax conclusions merely to capture search demand. Where tax/accounting mechanics are explained, distinguish app behavior from professional tax advice and cite the underlying authoritative basis.

## LogMate application

The same framework transfers cleanly but the trust domain differs. Candidate pages should solve real pilot-logbook jobs: import formats, duplicate handling, previous totals, offline continuity, export semantics. Regulatory claims require authoritative aviation sources and jurisdiction/version dates. Do not manufacture one page per airline/system unless the workflow or supported evidence materially differs.

## Reusable operating rule

`validated specialist question → evidence plan → original self-contained answer → explicit responsibility/provenance → crawlable canonical page → AW/AS discovery evidence → optional AX Store path → first value/useful return`

The blog is a knowledge product first and a distribution channel second. Publishing velocity is not a KPI.

## Unresolved implementation evidence

- Current minttap.app blog/content inventory and whether near-duplicate ticker pages already exist.
- Search Console query/page data for owned web content.
- Current authorship/editorial disclosure and update-date conventions.
- Exact authoritative source set to use for YieldMax distribution, ROC and tax-sensitive claims.
- Whether `SoftwareApplication` markup is already present and valid on the MintTap app landing page.
