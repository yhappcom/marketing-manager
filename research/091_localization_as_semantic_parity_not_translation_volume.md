# 091 — Localization as Semantic Parity, Not Translation Volume

Last validated: 2026-09-18

## Canonical rule
**Localize the specialist promise only where the product can keep it.**

Localization is not a coverage KPI. A translated Store page creates an expectation that the product, terminology, support, units/currency/date conventions, evidence boundaries, and first-value workflow are intelligible in that locale. For niche professional apps, expanding metadata faster than product semantics creates acquisition without qualified activation.

## Authoritative platform facts

### Apple
- App Store metadata can be localized across supported languages/locales. The language actually shown can depend on storefront/location, device language, provided localizations, and the primary language.
- Localized keywords are searchable in storefronts supporting that language.
- Adding a localization can inherit screenshots/properties from the primary language, while description and keywords require localized entries; inherited creative therefore must not be assumed to be market-valid.
- Apple explicitly recommends tailoring screenshots and marketing materials to each market and evaluating performance by region.
- Store metadata localization is distinct from binary/app localization.

Sources: Apple Developer, `Localize app information`, `App Store localizations`, and `Localization` guidance, validated 2026-09-18.

### Google Play
- Play Console supports localized store text and localized graphic assets.
- When a user's language preference matches a supplied translation, the translated listing is shown.
- If the developer does not provide a translation, Google Play may offer an automated translation to users; this is not equivalent to developer-validated localization.
- Play Console offers free machine translation for specified languages but explicitly states those translations are not human reviewed or approved.
- Google distinguishes language localization from country/region differentiation via Custom Store Listings.

Source: Google Play Console Help, `Translate and localize your app`, validated 2026-09-18.

## Why this matters for specialist apps
A generic consumer app can sometimes tolerate literal translation. MintTap and LogMate cannot assume that.

MintTap terminology can change meaning or user expectation across locales: ROC, distribution, tax treatment, exchange-rate basis, cost basis, reverse split, after-tax figures, and currency conventions. A fluent translation that silently implies local tax treatment is a semantic failure.

LogMate is even more sensitive: PIC/SIC, block/flight time, instrument/IFR, authority terminology, date/time conventions, and record expectations may be understood differently across operator or regulatory contexts. Translating the Store page does not establish regulatory suitability.

## L0–L5 Localization Readiness Gate

### L0 — Unsupported promise
Localized acquisition copy exists while the product/workflow is not usable or understood in that locale. Do not publish intentionally.

### L1 — Literal translation
Text is translated but specialist terminology, screenshots, units/conventions, support and product semantics are unverified. Not scale-ready.

### L2 — Linguistic QA only
Language reads naturally, but product truth and specialist meaning have not been validated. Useful drafting stage, not a qualified growth market.

### L3 — Semantic parity
Store promise maps truthfully to the same supported product capability; specialist terminology, units/currency/date conventions, screenshots, first-value path and disclaimers/boundaries are checked. Minimum intentional launch state.

### L4 — Market-operational localization
L3 plus locale-specific search vocabulary, creative, support/error/help surfaces and measurable Store→first-value→useful-return telemetry. Regional performance is evaluated separately rather than pooled into global averages.

### L5 — Repeatable localized growth
Multiple observations show qualified acquisition and useful return without recurring terminology/trust/support failures. Maintenance ownership and revalidation on product/claim changes are defined.

## Machine translation contract
Machine translation is a drafting accelerator, not evidence of L3. It may be used to generate candidates, but specialist claims and terminology require product-domain review before intentional amplification. Google Play's automatic fallback translation must be distinguished analytically from developer-authored localization whenever the available telemetry permits.

## Zero-cost prioritization rule
Do not maximize language count. Rank a locale only when there is evidence of relevant specialist demand and the cost of maintaining semantic parity is supportable.

Suggested decision record:
`locale → specialist demand evidence → product semantic readiness → terminology owner → Store assets → first-value path → support readiness → L-class → qualified acquisition → useful return → issue family`

A locale with high impressions but L1/L2 readiness is a repair candidate, not a growth opportunity.

## MintTap application
1. Keep investment-tracking claims distinct from jurisdiction-specific tax advice.
2. Validate ROC/distribution/reverse-split/cost-basis vocabulary before localized keyword expansion.
3. Do not inherit English screenshots by default when labels, currency or examples make the local promise ambiguous.
4. Compare locale cohorts on first value/useful return, not Store conversion alone.

## LogMate application
1. Do not imply authority/operator compliance from translated metadata.
2. Maintain a terminology map for PIC/SIC/block/flight/instrument/IFR and other professional fields before L3.
3. Localized launch follows production-valid persistence/manual-entry semantics and a validated first-value workflow.
4. Regulatory content requires primary-source boundaries separate from marketing localization.

## Company template
Localization expansion sequence:
`demand evidence → semantic terminology map → product parity check → localized Store copy/creative → native/domain QA → limited release/measurement → first value/useful return → maintain or stop`

### Stop conditions
- material specialist term has no agreed meaning;
- screenshots imply unsupported local behavior;
- support cannot interpret locale-specific failures;
- conversion rises while first value/useful return deteriorates;
- localization requires jurisdiction-specific claims that are not evidence-qualified.

## New unresolved questions
- Which MintTap locales currently receive meaningful impressions/downloads and which are developer-authored versus fallback/automatic translation?
- Does MintTap UI/help/error text preserve the same ROC, tax, currency and exchange-rate semantics in every published locale?
- Which LogMate launch locales can reach L3 without implying regulatory compliance?
- What minimum qualified-user evidence should justify the maintenance burden of an additional niche locale?
