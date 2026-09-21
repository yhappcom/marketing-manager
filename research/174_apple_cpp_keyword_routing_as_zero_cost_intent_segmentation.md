# Research 174 — Apple CPP Keyword Routing as Zero-Cost Intent Segmentation

Date: 2026-09-21
Status: Validated from current Apple first-party documentation

## Why this is new

Earlier CPP work treated Custom Product Pages primarily as destination pages reached through unique URLs/campaign routing. Apple now documents a materially different organic capability: approved Custom Product Pages (CPPs) can be assigned keywords from the latest approved app version so that the CPP, rather than the default product page, can appear for those selected App Store searches.

This changes CPP from only a campaign landing-page mechanism into a zero-cost search-intent routing layer.

## Authoritative findings

Apple currently allows up to 70 Custom Product Pages per iPhone/iPad app. A CPP can vary screenshots, app previews and promotional text, is localizable, has a unique URL, and can optionally use a deep link on iOS/iPadOS 18+.

More importantly, App Store Connect now permits keywords from the latest approved app version to be assigned to a CPP. When an approved CPP is made visible for those keywords, customers searching them can receive that CPP instead of the default product page. Apple recommends a unique keyword set for each CPP so the most relevant page can be selected.

CPP metadata must pass App Review. CPPs can be submitted independently of an app update. Approved CPPs expose page-level impressions, downloads and conversion-rate evidence in App Analytics.

Sources:
- Apple Developer, Custom Product Pages: https://developer.apple.com/app-store/custom-product-pages/
- App Store Connect Help, Configure multiple product page versions: https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- App Store Connect Help, Submit a custom product page: https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-a-custom-product-page

## Strategic consequence for sparse professional apps

Do not make the default Store page explain every specialist job equally. For a narrow app, one generic page can dilute relevance because different searches encode different jobs-to-be-done.

CPP keyword routing permits a controlled architecture:

`approved keyword intent → intent-specific CPP → truthful feature proof → download → matching in-app value`

This is not keyword expansion. The keywords still come from the approved app-version keyword inventory. The new capability is routing selected approved intents to a more relevant approved product-page presentation.

### MintTap

Potential intent families must be evidence-led, not invented. Examples to validate against actual App Store search evidence include YieldMax portfolio tracking, distributions/dividends, ROC/tax-adjustment workflows, and ticker-specific portfolio use. Only create a CPP when MintTap genuinely delivers the promised job and the search vocabulary is supported by live evidence.

A ticker- or feature-specific CPP can be useful when screenshots can demonstrate that exact utility. Do not create pages implying investment recommendations, yield guarantees, tax advice, or unsupported ETF coverage.

### LogMate

Potential future families include pilot logbook, flight-time totals, roster/import workflow, and recency-oriented use only where the shipped product and authoritative aviation requirements support the claims. Avoid CPP wording that implies regulatory compliance certification unless separately proven.

## Sparse-niche operating rule

The 70-page capacity is a ceiling, not a target. Sparse apps should prefer a small number of high-coherence pages because each additional page creates review, localization, analytics and evidence-maintenance cost.

Create a CPP only when all are true:
1. a distinct search intent exists in first-party/live evidence;
2. the app has a materially different truthful proof for that intent;
3. screenshots/promotional text can express that proof without claim inflation;
4. the assigned keyword set does not create ambiguous routing against another CPP;
5. page-level acquisition can be connected to first/restored/repeated useful value.

## CL0–CL5 — CPP Organic Intent-Routing Integrity Gate

CL0 — Intent evidence: establish a real query/job cluster rather than brainstorming keywords.

CL1 — Product truth: verify the app actually satisfies that intent and claims have appropriate provenance.

CL2 — Routing identity: record localization, CPP ID/reference name, assigned approved keywords, visibility state and effective dates.

CL3 — Asset coherence: ensure screenshots/previews/promotional text demonstrate the routed intent and do not masquerade as a broader capability.

CL4 — Store evidence: preserve CPP impressions, downloads and conversion semantics under CJ; missing/sparse observations are not zero.

CL5 — Product-value validation: retain the route only when acquired users reach the promised core value and show acceptable repeated useful use.

## Evidence boundaries

`keyword assigned ≠ ranking gained`

`CPP visible for keyword ≠ guaranteed impression`

`CPP impression ≠ qualified visitor`

`higher CPP conversion ≠ incremental acquisition`

`higher CPP conversion ≠ better retained user`

`70 available CPPs ≠ reason to create 70 pages`

`Apple-reported average CPP lift ≠ expected MintTap/LogMate lift`

Apple publishes an aggregate claim that referrals to CPPs see an average conversion-rate improvement, but this is platform-level promotional evidence and must not be used as a product forecast or experiment result for these apps.

## Operational registry

For every organic-search CPP preserve:
- platform and localization;
- CPP identifier/reference name;
- intent/job hypothesis;
- assigned approved keywords;
- keyword assignment and publish dates;
- review/visibility state;
- asset/version provenance;
- deep-link destination if used;
- App Analytics metric identity under CJ;
- first/repeated useful-value definition;
- retain/revise/disable decision and evidence date.

## Decision

Treat Apple CPP keyword routing as a zero-cost intent-segmentation capability, not as a page-volume or keyword-stuffing tactic. MintTap should first audit whether any live CPP has keyword visibility enabled and then map only validated Korean/English intent clusters to truthful specialist pages. LogMate should define the same registry before launch so its default page does not become a catch-all for unrelated pilot jobs.
