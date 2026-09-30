# Research 340 — Localization Fallback Integrity Contract

Validated: 2026-10-01

## Decision

Localization is not a translation-completeness task. For a specialist app, every Store locale is a promise/evidence surface. A missing localized preview can silently fall back to another available language, so "we did not localize this asset" does not necessarily mean "the user will not see it."

## Authoritative platform findings

1. Apple allows 1–10 screenshots and up to three app previews per supported device size/language. App previews always precede screenshots on iPhone/iPad/Mac/Apple TV.
2. Apple states that an app preview is displayed in every storefront where the app is available unless a separate preview is supplied for that localization. If no preview exists for the storefront localization, the next-best available language preview is shown.
3. Apple says previews autoplay on product pages and in search results. Therefore a fallback preview can become the first evidence a searcher consumes, not a buried asset.
4. Apple recommends real-UI footage and strongest features early. A fallback asset that is linguistically or product-contextually mismatched can therefore damage the first-evidence contract even when all textual metadata is correctly localized.
5. PPO treatments may localize assets, but PPO is not available for custom product pages. Localization integrity must therefore be audited separately for default pages, PPO treatments, and CPP destinations.

Sources:
- https://developer.apple.com/help/app-store-connect/manage-app-information/upload-app-previews-and-screenshots/
- https://developer.apple.com/app-store/app-previews/
- https://developer.apple.com/app-store/asset-best-practices/
- https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/configure-test-treatments

## IP0–IP9

IP0 storefront/locale inventory
→ IP1 actual asset-language inventory
→ IP2 fallback-path audit
→ IP3 first-visible evidence audit
→ IP4 claim/evidence parity
→ IP5 terminology/professional-language integrity
→ IP6 default/CPP/PPO separation
→ IP7 sparse-demand justification
→ IP8 downstream specialist-value check
→ IP9 KEEP / LOCALIZE / REMOVE-PREVIEW / CONSOLIDATE / HOLD / UNKNOWN

## Operating rules

### 1. Do not localize because a locale exists
Create a localized creative family only when there is credible demand plus enough product/terminology evidence to maintain it. Sparse niche apps should prefer fewer trustworthy locales over many weak ones.

### 2. Audit fallback, not only uploaded assets
For each storefront record:
- textual metadata language;
- screenshot language;
- preview language;
- actual fallback preview likely to display;
- CPP/default destination;
- claim-registry dependencies;
- invalidation trigger.

A blank preview slot is not evidence of no video exposure.

### 3. Preview omission is an active decision
Because previews precede screenshots and may autoplay, an unlocalized fallback can be worse than having no preview if it creates language friction or mismatched specialist terminology. Use REMOVE-PREVIEW/HOLD when a trustworthy localized first-evidence asset cannot be maintained.

### 4. Specialist terminology outranks literal translation
Do not machine-translate finance or aviation terminology into Store creative and treat grammatical correctness as validation. Translation must preserve the product's actual workflow, qualification and professional vocabulary.

### 5. Measure by specialist value, not locale count
A locale is useful only if it produces qualified acquisition and first/repeated specialist value without raising support/trust cost. Suppressed/censored sparse data remains UNKNOWN, not zero.

## MintTap application

Do not create ticker-by-ticker or language-by-language creative families by default. Localize only validated recurring problem narratives such as ROC provenance/state, split/reinvestment reconstruction, or recovery/total-return understanding. Finance claims and tax-related wording require the same Claim Registry qualification after translation as in the source language.

## LogMate application

Pilot terminology is especially sensitive to literal localization. Keep the product's English-only decision as the baseline unless evidence justifies a locale expansion. If Store distribution spans non-English storefronts, audit what Apple actually shows there—especially preview fallback—rather than assuming English-only metadata means a controlled English-only experience.

## Reusable niche-app rule

Locale expansion is a maintenance liability until evidence proves it is a growth asset.

The correct sequence is:
demand evidence → terminology authority → localized claim/proof → fallback audit → Store routing → first specialist value → repeated specialist value → maintain/retire.

## Next learning target

Audit actual MintTap App Store storefront/localization and preview inventory, including fallback exposure, before creating additional localized assets. Then compare Google Play's current localization/fallback behavior only where it changes an operational decision.
