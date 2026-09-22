# Research 195 — Apple App Tag & Metadata Discovery Integrity

Date: 2026-09-22
Status: Validated operating contract

## Why this matters

Apple App Store discovery now includes App Tags: glanceable, clickable terms that can appear in search results, the Search landing page and product pages. For a sparse professional app, this creates a new zero-cost discovery surface, but also a new metadata-governance problem. Tags are not ordinary developer-entered keywords. Apple derives them from App Store Connect metadata using AI plus human curation, while developers can review and deselect Apple-created tags.

The operating objective is therefore not to maximize tag count. It is to ensure that metadata truthfully represents the specialist jobs the product performs, audit the tags Apple actually assigns, remove materially misleading associations, and measure tag-driven discovery separately from ordinary keyword/search-page routing.

## Authoritative findings

### Tag generation and placement

Apple states that App Tags are based on App Store metadata supplied in App Store Connect, artificial intelligence, and human curation. Tags can appear in search results and as clickable entities on the Search landing page and product page. Tapping a tag can lead users to other apps related to that tag.

As of 2026-09-22, Apple says App Tags are supported and displayed to users only in the United States. Default tag assignment is based on App Store Connect metadata for en_US.

### Developer control is primarily review/opt-out

Developers can review the tags Apple assigned and deselect tags that are not representative. Apple warns that deselecting all tags may affect discoverability. The App Store Connect API likewise exposes resources to read Apple-created app tags and opt out of tags. This is materially different from the ordinary keyword field: a marketing operator should not model App Tags as a free-form list of terms that can simply be inserted for ranking.

### Search semantics remain multi-signal

Apple separately states that App Store search uses factors including text relevance across title, subtitle, keywords and primary category, plus user behavior such as downloads, ratings and reviews. App Tags can appear in results and improve exploration, but Apple does not state that a tag guarantees ranking or a specific query position.

### Tags and Custom Product Page keywords are different systems

Custom Product Pages (CPPs) can be assigned approved-version keywords so that a relevant CPP appears instead of the default product page for those selected search keywords. App Tags, by contrast, are Apple-created categorical/discovery labels derived from metadata and curation. They must not be merged into one keyword registry or interpreted as equivalent ranking controls.

## DG0–DG5 App Tag & Metadata Discovery Integrity Gate

### DG0 — Territory and feature identity
Record storefront/territory, observation date, app version, localization, and whether App Tags are actually supported in that storefront. Do not extrapolate US tag behavior to Korea or other territories without evidence.

### DG1 — Metadata truth integrity
Audit title, subtitle, keyword field, primary category, description and other relevant App Store Connect metadata for accurate specialist-job representation. Do not distort metadata merely to provoke a desirable tag.

### DG2 — Assigned-tag identity
Record the exact Apple-created tags currently associated with the app and whether each is selected or deselected. Preserve source as Apple-assigned rather than developer-authored.

### DG3 — Relevance and misclassification control
Classify each tag as strongly representative, contextually representative, ambiguous, or materially misleading. Deselect materially misleading tags when the false audience/expectation cost outweighs plausible discovery value. Do not retain a misleading tag solely because it appears to broaden reach.

### DG4 — Discovery-route separation
Keep App Tags separate from default metadata keywords, CPP keyword routing, paid Apple Ads terms, owned-web search queries and community vocabulary. A term appearing in several systems does not mean those systems share the same matching or ranking semantics.

### DG5 — Qualified-growth decision
Judge tag usefulness by qualified Store discovery and downstream specialist value, not tag presence or raw impressions alone. Join any available search/acquisition evidence to conversion, first meaningful value and repeat value. Unknown tag-attributed traffic remains unknown rather than being inferred from overall search growth.

## Sparse-niche operating rules

1. `Apple-created tag ≠ developer keyword`.
2. `tag presence ≠ search rank guarantee`.
3. `tag relevance ≠ query-level attribution`.
4. `more tags ≠ better qualified discovery`.
5. `US tag behavior ≠ global Store behavior`.
6. `metadata written to provoke AI classification ≠ trustworthy ASO`.
7. `CPP keyword routing ≠ App Tag routing`.
8. Remove materially misleading tags even when they appear to increase broad exposure; sparse professional apps cannot afford expectation mismatch.
9. Treat tag changes as a versioned Store-discovery event and preserve before/after evidence rather than silently editing the set.
10. Re-audit assigned tags after material metadata/category/product-positioning changes because the upstream representation has changed.

## MintTap application

MintTap should inspect the US App Store's assigned tags rather than guessing which tags Apple ought to generate. Relevant metadata should accurately express the actual YieldMax/ETF portfolio-tracking jobs supported by the product. A broad finance/investing association may be contextually valid, but any tag implying brokerage, trading execution, investment advice, tax filing, or capabilities the app does not provide should be treated as a potential expectation/trust defect.

Do not rewrite metadata with generic high-volume finance language merely to induce broader AI-generated tags. MintTap's advantage is specialist relevance; qualified YieldMax investors reaching the correct promise is more valuable than generic investing traffic that fails to reach core value.

## LogMate application

LogMate should treat pilot/logbook/aviation-related tag assignment as a discoverability audit after Store metadata is production-ready. Tags implying flight planning, navigation, dispatch, live operational guidance, regulatory certification or other unsupported functions would be materially risky because professional pilots can interpret such labels as capability claims.

The current English-only product direction means the initial metadata/tag audit should preserve exact en_US wording and US storefront state rather than infer localization behavior elsewhere.

## Company-wide registry fields

`app | storefront | locale | observed_at | app_version | title | subtitle | primary_category | keyword_set_version | apple_tag_id | apple_tag_label | selected_state | relevance_class | misleading_risk | action | action_date | metadata_change_context | cpp_keyword_overlap | owned_search_overlap | acquisition_context | qualified_conversion_context | first_value_context | repeat_value_context`

Unknown tag-level attribution remains unknown.

## Canonical rules added

`Apple-created tag ≠ developer keyword`

`tag presence ≠ search rank guarantee`

`tag relevance ≠ query-level attribution`

`more tags ≠ better qualified discovery`

`US tag behavior ≠ global Store behavior`

`metadata written to provoke AI classification ≠ trustworthy ASO`

`CPP keyword routing ≠ App Tag routing`

## Sources

- Apple Developer — Manage app tags: https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-tags
- Apple Developer — App Store search: https://developer.apple.com/app-store/search/
- Apple Developer — App tags, App Store Connect API: https://developer.apple.com/documentation/appstoreconnectapi/app-tags
- Apple Developer — Modify App Tags: https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-apptags-_id_
- Apple Developer — WWDC25: What's new in App Store Connect: https://developer.apple.com/videos/play/wwdc2025/328/
- Apple Developer — Custom Product Pages: https://developer.apple.com/app-store/custom-product-pages/
