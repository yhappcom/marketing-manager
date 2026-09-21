# Research 175 — Google Play Search-Keyword CSL as Zero-Cost Intent Routing

Date: 2026-09-21
Status: Validated from current Google Play Console Help

## Why this is a new addition
Research 174 established Apple CPP keyword routing. Current Google Play documentation now supports a closely related but semantically distinct organic-search mechanism: a Custom Store Listing (CSL) can target Play users who discover an app with selected search keywords. This creates a second zero-cost Store intent-routing layer, but Apple CPP and Google CSL must not be treated as identical systems.

## Authoritative findings
Google Play Console Help currently states that Custom Store Listings can target users by country/region, pre-registration state, search keywords, ads traffic, inactive/churned state and other segments. Up to 50 CSL pages may be created.

For Search keyword targeting, the publisher selects Search keywords as the audience, then selects from keywords known to bring traffic. Play also allows searching for additional keywords. Each keyword can expose a bundle of spelling corrections and translations; the publisher can select or deselect individual variations before saving.

A CSL can customize app name, icon, short/full descriptions and graphic assets. Contact details, privacy policy and category remain shared across listings.

CSLs are not automatically translated. A default language must be selected and translations should be explicitly supplied for relevant target languages.

Google also documents other CSL routes: unique CSL URL, country/region, Google Ads traffic, churned/lapsed users and other user-state segments. These are separate routing identities and must not be conflated with search-keyword routing.

## Strategic interpretation
Search-keyword CSL is a zero-paid-media opportunity for a specialist app:

`observed Play search vocabulary → selected keyword/variation bundle → intent-matched CSL → truthful specialist proof → acquisition → matching in-app value`

It is not permission to fabricate demand. Keyword selection does not prove ranking, impression volume, incremental acquisition or downstream retention. The default listing remains the fallback/general proposition.

### Critical Apple/Google distinction
Apple CPP keyword routing (Research 174) assigns approved app-version keywords to a CPP. Google Play CSL instead lets the publisher select Play Search keywords/variation bundles for a CSL. Preserve each platform's native terminology, eligibility and evidence separately.

Do not build a synthetic cross-platform field called simply `keyword` and assume semantic equivalence. A normalized intent concept may be layered above raw platform records only after preserving the original platform object.

## CM0–CM5 — Play Search-Keyword CSL Integrity Gate

### CM0 — Live-intent evidence
Use current Play search vocabulary or other defensible first-party evidence. A plausible phrase is not evidence of material demand.

### CM1 — Keyword-bundle identity
Record the exact selected search keyword and its included/excluded spelling corrections/translations. Treat the bundle, not merely the visible seed phrase, as the targeting object.

### CM2 — Product-truth match
The CSL promise and screenshots must map to shipped product capability and current claim provenance. Do not use a search term merely because it has traffic if MintTap/LogMate cannot satisfy the implied job.

### CM3 — Localization integrity
Record CSL default language and explicit translations. Do not assume Play automatic translation will localize a CSL; current Google documentation says CSLs are not automatically translated.

### CM4 — Route/evidence identity
Distinguish search-keyword CSL from country, unique-URL, ads-traffic, pre-registration, churn/lapse and other CSL routes. Preserve listing ID/name, target type, keyword bundle, locale, effective dates and Store performance evidence.

### CM5 — Downstream-value validation
Judge a CSL by qualified acquisition and matching first/repeated useful value, not Store CTR/acquisition alone. Sparse evidence remains inconclusive.

## Evidence boundaries
Preserve:

- `selected keyword ≠ ranking gained`
- `selected keyword ≠ guaranteed impression`
- `keyword bundle ≠ literal seed phrase only`
- `CSL view/acquisition lift ≠ incremental acquisition`
- `higher Store conversion ≠ better retained user`
- `50 available CSLs ≠ reason to create 50`
- `search-keyword CSL ≠ country CSL ≠ URL CSL ≠ ads CSL`
- `Google Play CSL keyword object ≠ Apple CPP keyword object`
- `Gemini-generated description suggestion ≠ validated claim or publish-ready copy`

## MintTap application
Before creating a search-keyword CSL, capture the current Play search terms/available keyword candidates and variation bundles. Candidate intent clusters should only survive if they map to shipped specialist utility such as portfolio tracking, distribution/dividend analysis or other verified capabilities. ETF/product-name targeting requires the existing claim/trademark/provenance discipline and must not imply affiliation, recommendation, guaranteed returns or tax advice.

For Korean/English routing, inspect each keyword bundle's translations/corrections rather than assuming an English seed and Korean translation are equivalent intent. Supply explicit CSL translations where justified.

Do not create CSLs merely to occupy the 50-page capacity. Start with the smallest evidence-backed set whose product proof materially differs from the default listing.

## LogMate application
After release evidence exists, Play search vocabulary may support distinct pilot jobs such as pilot logbook, flight-time totals or import workflows. Regulatory/compliance language remains authority-gated; a high-traffic phrase does not justify an unsupported compliance claim.

## Reusable operating record
For every search-keyword CSL preserve at minimum:

`platform | app | CSL identifier/name | target_type=search_keyword | seed keyword | included variations | excluded variations | default language | explicit translations | product job | claim provenance | asset set | effective dates | Store metric semantic ID | downstream value route | decision`

This record can later be normalized with Apple's CL registry at the *intent* layer without destroying platform-native semantics.

## Source
Google Play Console Help, “Create custom store listings to target specific user segments,” current page accessed 2026-09-21: https://support.google.com/googleplay/android-developer/answer/9867158?hl=en

Key current documentation: lines 21–26 (CSL purposes/routes), 96–119 (capacity, target segments, customizable assets), 121–144 (URL/country/ads/localization), and 176–187 (search-keyword selection, spelling/translation variations and Gemini description suggestions).
