# Research 183 — Owned Blog Search as Demand Capture, Not Scaled Content

Date: 2026-09-22

## Why this addition
The current operating system covers Store intent routing and Reddit permission/reachability/governance. The next zero-cost surface is the owned blog/web layer. For sparse professional audiences, the main risk is confusing a large keyword/page inventory with useful demand capture.

## Authoritative findings

### 1. Search visibility does not justify scaled page production
Google Search spam policy defines doorway abuse as creating sites/pages for specific similar queries that funnel users to a final destination, including substantially similar pages closer to search results than a clear browseable hierarchy. It also identifies scraping/republishing without substantial original value as abusive. Spam policy applies across Google Search, including generative AI responses.

Implication: MintTap must not create one thin page per YieldMax ticker, distribution phrase, tax phrase, locale, or query variant merely to occupy search results. LogMate must not create near-duplicate pages for airlines, roster systems, aircraft types, jurisdictions, or pilot-logbook phrases without a distinct user job and distinct evidence/value.

### 2. Structured data is classification/eligibility, not a ranking or display guarantee
Google supports SoftwareApplication structured data. Required eligibility properties include app name and price/offer plus a rating/review; operating system and application category are recommended. Google explicitly states that structured-data use does not guarantee a rich result. Deployment should be validated with Rich Results Test and URL Inspection, and monitored after indexing.

Implication: schema markup is a truthful machine-readable representation of visible product facts, not an SEO growth hack. Never fabricate aggregateRating/review data to satisfy eligibility.

### 3. Search features change; content strategy must not depend on a rich-result loophole
Google's current Search documentation changelog records continuing feature changes/deprecations and clarifications. Therefore durable zero-cost content must remain useful even if a rich-result treatment disappears.

## CU0–CU5 Owned-Web Search Demand-Capture Integrity Gate

**CU0 — Demand identity**
- Identify a real specialist question/job from Search Console, Store vocabulary, community questions, support, or first-party product evidence.
- `keyword tool volume ≠ validated specialist demand`.

**CU1 — Distinct-value test**
- A page exists only if it gives a materially distinct answer, dataset, workflow, explanation, comparison, or product-support function.
- If the useful answer is already covered, improve/consolidate the existing page rather than create a query variant.

**CU2 — Claim/provenance integrity**
- Finance, tax, distribution, return, aviation, regulatory, compatibility and product claims inherit the company's existing claim-evidence contract.
- Product facts must match the shipped/released state and applicable territory/version.

**CU3 — Architecture/indexability integrity**
- Keep a clear browseable hierarchy; avoid doorway-like intermediate pages.
- Important pages must be accessible to crawlers and users; sitemap/URL Inspection are operational aids, not evidence of ranking.

**CU4 — Machine-readable truth**
- Structured data must describe visible, truthful page content.
- `valid schema ≠ rich-result display`, `rich-result eligibility ≠ ranking`, `ranking ≠ qualified acquisition`.
- Never invent ratings/reviews or unsupported app properties for markup completeness.

**CU5 — Downstream-value validation**
- Measure query/page impressions and clicks with their native Search Console semantics, then connect only where evidence permits to Store/app acquisition and first/repeated useful value.
- A high-traffic article with weak specialist relevance is not superior to a low-volume page that repeatedly brings qualified users to core value.

## Sparse-niche content decision rule
Publish only when all are true:
1. there is a specific audience job/question;
2. the page can add distinct first-party or carefully sourced value;
3. the answer can remain useful without a search feature/rich result;
4. claims are maintainable as the product/domain changes;
5. there is a legitimate next step (learn, compare, use a tool, visit the correct Store/product surface), not a doorway funnel.

Otherwise consolidate, update, noindex where appropriate, or do not publish.

## MintTap application
Preferred owned-web subjects are not an automatic ticker-page factory. Candidate pages should arise from recurring YieldMax-investor jobs: understanding what MintTap actually tracks, how its calculations/features work, documented handling of distributions/ROC/splits/tax-adjustment behavior, and carefully sourced educational explanations where the app provides a real workflow advantage. Separate ticker pages require genuinely distinct useful content/data and a maintenance contract; ticker/query templating alone fails CU1.

Financial/tax material must remain educational/product explanatory and preserve source/date/jurisdiction boundaries. Search demand never relaxes claim provenance.

## LogMate application
Do not pre-build airline/system/aircraft/jurisdiction landing-page matrices for launch. Publish a page when LogMate actually supports the stated workflow and the page provides distinct operational help. Compatibility pages require verified compatibility state; regulatory/logging guidance requires authoritative jurisdictional evidence and date/version control.

## Reusable registry
For every owned-web page retain:
- page ID / canonical URL / locale;
- audience job and evidence source;
- primary query cluster without treating variants as separate demand;
- distinct-value statement;
- claim/provenance owner and review date;
- product version/territory dependencies;
- index/canonical/sitemap state;
- structured-data type and validation state;
- Search Console query/page evidence;
- outbound Store/product route;
- downstream acquisition/value evidence where observable;
- refresh/consolidate/remove decision and reason.

## Canonical boundaries
Preserve:
- `page count ≠ search coverage`
- `keyword variants ≠ distinct user jobs`
- `indexed ≠ ranking`
- `ranking ≠ qualified traffic`
- `valid structured data ≠ rich-result display`
- `rich result ≠ product value`
- `search traffic ≠ incremental acquisition`
- `AI-generated copy ≠ original value or validated claim`

## Sources
- Google Search Central, Spam policies for Google web search: https://developers.google.com/search/docs/essentials/spam-policies
- Google Search Central, Software app structured data: https://developers.google.com/search/docs/appearance/structured-data/software-app
- Google Search Central, Search documentation updates: https://developers.google.com/search/updates

## Next evidence step
Audit minttap.app's current indexed/desired page inventory before creating content: canonical URLs, locales, sitemap/index state, structured data, Search Console query/page evidence, outbound Store routes, duplicate/query-variant risk, claim maintenance state, and whether each page has a distinct specialist job. Do not create a content calendar until this evidence exists.