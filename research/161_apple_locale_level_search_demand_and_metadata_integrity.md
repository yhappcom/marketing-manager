# 161 — Apple locale-level search demand and metadata integrity

Validated: 2026-09-21

## Why this matters
For sparse professional apps, localization is not merely translation. Apple exposes localized product metadata and localized search keywords, while the actual localization shown can depend on storefront, device language, available localizations, and the app's primary language. A niche app can therefore lose qualified organic discovery by treating one English/Korean keyword set as globally canonical.

## Authoritative findings

### 1. Search keywords are localization-scoped
Apple documents Keywords as required, localizable App Store version metadata. Keywords are limited to 100 bytes and should describe the app; app/company names should not be duplicated and competitor/irrelevant/trademark misuse is prohibited. Apple's App Store Connect API also exposes search keywords as a relationship of a specific App Store version localization.

Operational consequence: keyword research and metadata evidence must be stored by locale, not as one global ASO list.

### 2. Localized keywords can create search eligibility beyond one country
Apple states that users can search using localized keywords in countries/regions where that App Store language is supported. The localization actually displayed is selected using factors including storefront language support, device language, localizations supplied by the developer, and primary language. If no localization matches, another relevant localization/primary language can be shown.

Operational consequence: `territory`, `locale`, `displayed localization`, and `keyword localization` are separate dimensions. Do not infer what a Korean/US user saw from territory alone.

### 3. Localization is market adaptation, not literal translation
Apple explicitly recommends localizing description, keywords, previews and screenshots for markets where the app is offered, and says app name/keywords can be tailored to each market. Apple also recommends specific functional keywords and notes the tradeoff between high-volume competitive terms and lower-volume less-competitive terms.

Operational consequence: MintTap should not translate English investor vocabulary mechanically. Candidate Korean and English terms require evidence of actual audience language and must still describe shipping functionality truthfully. LogMate similarly requires pilot vocabulary rather than consumer-travel vocabulary.

### 4. Promotional text is not a search-keyword surface
Apple states promotional text does not affect search ranking. Repeating search terms there to manufacture ASO is therefore not a valid search tactic; promotional text remains a conversion/communication surface.

### 5. Sparse-niche evidence discipline
No Apple documentation found gives a deterministic ranking weight for a keyword or guarantees ranking lift from adding a localization. Metadata eligibility, impressions/search discovery, product-page conversion, qualified acquisition and repeated core value remain distinct evidence states.

## BY0–BY5 Locale Search Integrity Gate

- **BY0 — Live locale identity:** capture primary language, enabled localizations, storefront/territory and current version.
- **BY1 — Audience-language evidence:** establish that the intended professional audience actually uses the candidate term; translation alone is insufficient.
- **BY2 — Functional/claim truth:** keyword/name/subtitle must describe shipped capability and pass financial/aviation claim governance.
- **BY3 — Metadata-field integrity:** preserve field semantics and platform limits; do not misuse promotional text, competitor names or irrelevant terms as keyword stuffing.
- **BY4 — Localization-route integrity:** preserve locale, territory, displayed localization and keyword localization separately when reading acquisition/search evidence.
- **BY5 — Qualified outcome:** evaluate discovery through meaningful/repeated product value, not rank screenshots or raw installs alone.

## MintTap application
Create a locale matrix before editing metadata: `locale × current name × subtitle × keywords × description × screenshot language × supported in-app language × evidence source × claim-proof reference`. Start with live Korean and English metadata. Candidate intent clusters remain distribution, ROC/reverse split, and portfolio/transaction tracking, but each cluster needs locale-native vocabulary evidence before metadata changes. Do not assume English YieldMax jargon should be translated, transliterated, or retained without evidence.

## LogMate application
Because LogMate is currently planned English-only, do not create Store localizations that imply localized in-app support. First validate English pilot vocabulary by target market and authority context. Future localization must align Store promise, in-app language and aviation terminology.

## Reusable operating rule
`professional demand language → locale-specific truthful metadata → correct localization delivery → attributable search/discovery evidence → qualified acquisition → repeated core value`

Localization is a discovery infrastructure layer, not a translation checklist. The smallest useful unit of ASO evidence is therefore `app × platform × version × territory × locale × field × term/creative × observation window`.

## Sources
- Apple Developer, App Store Connect Help — Platform version information: https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information
- Apple Developer, App Store Connect Help — App Store localizations: https://developer.apple.com/help/app-store-connect/reference/app-information/app-store-localizations
- Apple Developer, App Store Connect Help — Localize app information: https://developer.apple.com/help/app-store-connect/manage-app-information/localize-app-information
- Apple Developer — Creating Your Product Page: https://developer.apple.com/app-store/product-page/
- Apple Developer Documentation — App Store Connect API search-keyword localization relationship: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversionlocalizations-_id_-relationships-searchkeywords
