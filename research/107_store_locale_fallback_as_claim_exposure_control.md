# 107 — Store Locale Fallback as Claim-Exposure Control

Validated: 2026-09-19

## Why this is a distinct operating gap

Research 091 established localization as semantic parity rather than translation volume. Research 105 established Store assets as potentially syndicated marketing inventory. This note closes a different failure mode: a publisher can omit a localization yet still expose users to fallback or machine-translated Store material. Therefore `not localized` does not mean `not marketed`.

## Canonical principle

**Treat locale fallback as an active distribution path. A market/language is safe only when the exact Store experience users can receive — authored localization, platform fallback, or automated translation — stays within the production claim ceiling.**

## Authoritative platform behavior

### Apple App Store

Apple states that when multiple metadata localizations exist, the language shown can depend on storefront/location, device language settings, available localizations, and the primary language. If no localization matches, the next most relevant localization is used; otherwise primary-language metadata can appear. Apple also states that localized keywords make the app searchable in countries/regions where that localization is supported.

When a new localization is added, screenshots and some properties default from the primary language, while description and keywords do not simply inherit in the same way. App previews are especially important: unless a separate preview exists for a localization, Apple can display the next-best available language's preview in that storefront. Therefore text parity alone does not establish visual/video parity.

Apple Custom Product Pages are localizable. A routed CPP therefore has two dimensions that must remain aligned: intent/page variant and locale. A correct intent route can still become a claim-parity failure if its locale-specific evidence is absent or stale.

### Google Play

Google allows publisher-supplied Store listing translations and localized graphic assets. For the default Store listing, when the publisher has not supplied a translation, users can be offered an automated translation and can return to the default language.

Google explicitly distinguishes this from Custom Store Listings (CSLs): CSLs are not automatically translated. A CSL has a default language, and unless the publisher adds translations, targeted users can see that default language even when their preferred language differs. Google recommends translations for languages spoken in the targeted countries.

This creates a material cross-platform asymmetry. `missing locale` can mean Apple fallback, Google default-listing automated translation, or Google CSL default-language exposure. These are not equivalent user experiences and must not share one generic localization-complete flag.

## Marketing consequence for specialist apps

Fallback is not merely a UX issue. It changes which claims, terminology, screenshots, disclaimers, currencies and professional meanings reach a user.

For MintTap, machine/fallback rendering around `ROC`, `distribution`, `tax adjustment`, `cost basis`, `return`, USD/KRW values or reverse-split mechanics can create a materially different interpretation from the validated source-language promise. A locale should not be expanded merely because the platform can translate the Store page.

For LogMate, aviation terminology is similarly sensitive. `block time`, `flight time`, `PIC`, `SIC`, `IFR`, `instrument`, `takeoff`, `landing`, `roster/import`, and backup/offline claims must remain semantically aligned with the shipping workflow. Generic translation availability is not evidence that professional terminology is valid for a pilot market.

## Z0–Z5 Store Locale Exposure Gate

- **Z0 — Unsafe exposure:** fallback/automated/localized Store material creates a false, unsupported, stale, sensitive, or materially misleading specialist claim.
- **Z1 — Unknown exposure:** supported storefronts/locales exist, but the team does not know what an unmatched-language user actually sees.
- **Z2 — Mapped fallback:** primary/default language, authored localizations, automated-translation behavior, CPP/CSL routing and inherited assets are mapped, but semantic parity has not been validated.
- **Z3 — Controlled exposure:** every deliberately targeted market has a tested served-experience path; specialist terms and claims remain within production evidence; locale-specific screenshots/video are validated where language materially affects meaning; unsupported fallback paths are accepted only when they cannot overstate the product.
- **Z4 — Measured parity:** Z3 plus acquisition → first value → useful return is evaluated by meaningful locale/market cohort where sample/privacy constraints permit; support/review evidence is monitored for locale-specific misunderstanding.
- **Z5 — Reusable market-entry pattern:** repeated Z4 evidence establishes which terminology, proof assets and fallback rules transfer safely to another specialist app/market.

**Z3 is the minimum threshold for deliberate locale/market expansion.**

## Required locale exposure registry

`app → platform → storefront/country → user_language → page_type(default/CPP/CSL) → authored_locale → served_fallback_rule → auto_translation_possible → text_claim_version → screenshot/video_locale → specialist_term_ledger_version → currency/units → support/privacy parity → production_version → last_verified → stale_trigger → Z-class`

Do not collapse country and language into one field. Google CSL country targeting and language translation are separate controls; Apple storefront and device/system language can both affect display.

## MintTap operating rules

1. Audit U.S. English, Korean and any currently published additional Store localizations before adding languages.
2. Record what Apple serves when a requested language is absent, including screenshot/app-preview fallback.
3. Record Google default-listing translation state separately from each CSL. Never assume CSL automatic translation.
4. Specialist financial terminology must be human-validated against the 048/091 term ledger before deliberate targeting. Platform machine translation is a convenience layer, not claim evidence.
5. A market is not `localized` merely because text appears in the user's language. Currency behavior, screenshots, support/privacy surfaces and shipping product semantics remain separate evidence requirements.

## LogMate operating rules

1. Choose initial launch languages from production/support readiness, not Play/App Store language coverage.
2. Human-validate aviation terms and task semantics before Z3.
3. Build synthetic localized screenshots only after the corresponding app workflow is production-valid.
4. If a future CSL targets a country, explicitly add the needed language translations or accept/document the CSL default-language experience; do not rely on Google automated translation because CSLs do not receive it.
5. Treat language-specific pilot feedback as product evidence, not merely copy feedback, when terminology changes workflow interpretation.

## Decision rule

Do not ask `Can the Store translate this market?` Ask:

`What exact page, language, assets and claims will this user actually receive, and are all of them valid for the shipping specialist workflow?`

If that cannot be answered, the market is Z1/Z2 and should not be deliberately expanded.

## Sources

- Apple Developer, App Store localizations: https://developer.apple.com/help/app-store-connect/reference/app-information/app-store-localizations
- Apple Developer, Localize app information: https://developer.apple.com/help/app-store-connect/manage-app-information/localize-app-information
- Apple Developer, Platform version information: https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information
- Apple Developer, Upload app previews and screenshots: https://developer.apple.com/help/app-store-connect/manage-app-information/upload-app-previews-and-screenshots
- Apple Developer, Configure multiple product page versions: https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- Google Play Console Help, Translate and localize your app: https://support.google.com/googleplay/android-developer/answer/9844778?hl=en
- Google Play Console Help, Create custom store listings: https://support.google.com/googleplay/android-developer/answer/9867158?hl=en

## Next evidence task

Build the first MintTap served-locale matrix from live App Store Connect and Play Console state. The audit must distinguish authored localization from actual served fallback and must inspect screenshots/app previews as well as text. Do not add a new locale until the target path can reach Z3.