# 117 — Apple Custom Product Page keyword routing for sparse-niche intent

Validated: 2026-09-19

## Why this is a distinct operating change
Apple now documents that Custom Product Pages (CPPs) can be assigned keywords so that a CPP can appear in App Store search results for those selected keywords instead of the default product page. Apple explicitly requires selected keywords to match the intent of the CPP and each keyword combination to be unique to a single product page. This changes CPP from only a campaign-link destination into a potentially organic search-intent routing surface.

This does **not** establish that CPP keywords increase ranking. The supported claim is narrower: they can determine which approved product-page variant is eligible to appear for selected search intent. Ranking and routing must remain separate concepts.

## Canonical principle
**Use CPP keywords to route materially different specialist intents to truthful, intent-matched evidence; never manufacture near-duplicate pages merely to occupy more keywords.**

For sparse professional apps, relevance is more valuable than raw query coverage. A CPP is justified only when the query family implies a different user job and the app has production-valid evidence for that job.

## Authoritative Apple facts
- Apple permits up to 70 CPPs per app.
- CPPs can contain different screenshots, app previews, promotional text and keywords, and are localizable.
- CPPs have unique URLs and can also be surfaced in App Store search when keywords are assigned.
- Apple states that CPP keywords should match the page's intent and that each keyword combination must be unique to one CPP.
- CPP metadata is reviewed and can be submitted independently of an app update.
- App Analytics exposes impressions, downloads and conversion rate by CPP.
- A CPP can have a deep link so, on supported OS versions, acquisition intent can continue into a relevant in-app destination.
- Default-page Apple keywords remain constrained: Apple advises not to duplicate words already in app name, subtitle or category, and prohibits irrelevant/protected/competitor terms. Promotional text does not affect search ranking.

Sources:
- Apple, Custom Product Pages: https://developer.apple.com/app-store/custom-product-pages/
- Apple, Configure multiple product page versions: https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- Apple, App Store search: https://developer.apple.com/app-store/search/
- Apple, Creating Your Product Page: https://developer.apple.com/app-store/product-page/

## AI0–AI5 CPP Intent-Routing Gate
### AI0 — Manipulative
Irrelevant/protected/competitor keywords, unverifiable claims, keyword stuffing, or pages created to imply functionality that is not shipping.

### AI1 — Coverage chasing
Many near-duplicate CPPs are created because 70 are available. Keyword ownership is organized by volume rather than specialist jobs. No evidence that a different page is needed.

### AI2 — Plausible segmentation
Query families and pages are mapped, but production parity, unique intent, locale, measurement or destination continuity is incomplete.

### AI3 — Production-valid routing
A CPP may be deliberately exposed to search only when all are true:
1. query family represents a materially distinct specialist job;
2. keyword/page intent match is explicit;
3. keyword combination is uniquely owned by that CPP;
4. screenshots/previews/promotional copy show shipping functionality relevant to that job;
5. locale/fallback is Z3+;
6. claims pass current trust/release gates;
7. destination/deep link, if used, preserves intent and passes I-class requirements;
8. CPP metrics are measured as routing evidence, not proof of ranking causality;
9. an owner and stale/retirement trigger exist.

### AI4 — Observed useful routing
Enough qualified traffic exists to compare page-level impressions/downloads/conversion and downstream first value/useful return without over-reading sparse samples. Poor downstream utility blocks expansion even if Store conversion rises.

### AI5 — Reusable portfolio system
A maintained intent registry governs default page vs CPP ownership, localization, keyword uniqueness, deep links, evidence, stale triggers and downstream utility across apps.

## MintTap application
Do not create one CPP per YieldMax ticker merely because ticker searches exist. Ticker substitution alone is not a distinct job. Candidate CPP families should correspond to different production-valid problems, for example:
- YieldMax portfolio/distribution tracking;
- ROC/tax-adjustment accounting;
- reverse-split quantity/cost-basis continuity.

These are only candidates. A CPP is not authorized until live feature evidence and actual query demand justify the split. Search copy must not imply investment advice, tax advice, brokerage affiliation, guaranteed returns, or unsupported tax treatment.

A strong MintTap architecture is therefore `query family → specialist job → one owning Store surface → matching evidence → matching in-app destination → first value`, not `keyword → new page`.

## LogMate application
Likewise, do not create airline-, aircraft-, or authority-specific pages without production-valid differentiation. Candidate future families might be manual pilot logbook entry, import/migration, or offline/backup/recovery only after those jobs are stable and genuinely distinct in observed pilot demand. Regulatory/certification implications require separate evidence and must never be inferred from a keyword opportunity.

## Measurement discipline
CPP conversion is not sufficient. Track:
`query/route hypothesis → CPP impressions → product-page views where available → downloads → first value → useful return`.

Sparse samples remain unknown rather than winners/losers. CPP keyword exposure must not be described internally as a ranking boost unless Apple supplies evidence of ranking impact; current documentation supports routing/discoverability, not a guaranteed rank lift.

## Operational registry
For each CPP maintain:
`app | locale | specialist job | query family | keyword combination | unique owner | screenshots/previews | promotional text | production evidence/version | deep link | Z/I/AG/W gates | created/reviewed date | impressions | downloads | conversion | downstream first value | useful return | stale trigger | retirement owner`.

## Decision for the current business
Do not build a large CPP library now. First audit whether MintTap already has CPPs and whether current production evidence supports even one materially distinct search-intent page. If yes, test one AI3 page against one validated query family. If not, retain the default page and collect demand evidence. For LogMate, defer CPP search routing until production scope and pilot first-value evidence stabilize.
