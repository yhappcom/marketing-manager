# 105 — Store Assets as Syndicated Marketing Inventory

Validated: 2026-09-19

## Canonical principle

**A Store asset is not necessarily confined to the Store page. Govern every eligible asset as reusable distribution inventory.**

For a niche professional app, screenshots, feature graphics, preview video and related Store assets are evidence of the product promise. Their risk and value therefore extend beyond the listing where the developer uploaded them.

## First-party findings

### Google Play: preview assets can travel beyond the listing

Google Play Console Help states that the feature graphic, screenshots, short description and videos can be used to highlight and promote an app on Google Play **and other Google promotional channels**. Google also states that publishing on Google Play grants it a license to use app assets for promotional purposes, and that the developer can untick **External marketing** in Store settings to restrict promotion across Google-owned properties.

Operational consequence: uploading an asset is a distribution decision, not merely a Store-page formatting decision.

Google's current preview-asset guidance also warns against rapidly stale time-sensitive content, misleading performance/ranking/price claims, unauthorized third-party marks, device imagery that can become obsolete, and Store badges/icons inside preview assets. Assets should be localized where appropriate, and graphics should include alt text.

### Apple: external marketing has its own controlled asset system

Apple provides official App Store badges, localized badges, short links, QR codes and embeddable marketing tools. Apple requires official badge artwork, prohibits modification, specifies minimum size/clear space, and says the badge should remain subordinate to the app's main message. A pre-order badge must be replaced with the download badge once the app is released.

Apple's marketing guidance also says promotional messaging should focus on the app rather than Apple product features, and provides separate rules for Apple device imagery and trademark use.

Operational consequence: do not export Store screenshots into arbitrary social templates and do not recreate platform badges. Treat external CTA assets as governed platform artifacts.

## W0–W5 Syndicated Asset Integrity Gate

- **W0 — Invalid:** misleading claim, private/real user data, unauthorized mark, obsolete or materially false UI, or platform-brand misuse.
- **W1 — Listing-only thinking:** asset is uploaded without identifying where the platform may reuse it.
- **W2 — Compliant but unmanaged:** asset is accurate today, but there is no owner, expiry trigger, locale mapping or syndication inventory.
- **W3 — Distribution-safe:** current production evidence, no sensitive data, correct platform branding, locale parity, known eligible surfaces, accessibility metadata where supported, and explicit stale/retirement trigger.
- **W4 — Measured:** W3 plus route/surface evidence connected to qualified acquisition and useful return where measurement is available.
- **W5 — Reusable:** repeated W4 evidence supports a durable asset pattern for future specialist apps without weakening product-specific truth.

W3 is the minimum threshold for intentionally reusable Store/external marketing inventory.

## MintTap application

MintTap assets can expose finance-specific semantics even when no personal account data is visible. Screenshots that show ROC, distributions, reverse splits, tax adjustment, portfolio values or exchange-rate behavior must represent shipped behavior and use clearly synthetic/demo data. They must not imply investment advice, guaranteed returns, tax determinations, or functionality beyond production.

Because Google may use eligible preview assets outside the listing, the asset audit must record whether External marketing is enabled and whether every potentially syndicated asset remains acceptable outside the immediate Store-page context.

Ticker-specific assets are not automatically new marketing inventory. A CONY/MSTY/TSLY swap is useful only when it communicates a genuinely different user job or evidence state.

## LogMate application

Pilot-facing screenshots must not contain real crew identities, operationally sensitive records, company-confidential roster data or invented compliance capability. Demo flight records should be synthetic and clearly safe for broad redistribution.

Before launch, W3 matters more than maximizing the number of screenshots or social derivatives. A small set of production-faithful, reusable assets is preferable to a large asset library that drifts from the app.

## Asset registry

For every reusable Store/marketing asset, record:

`asset_id → app → platform → locale → user_job → production_version → source_screen → claim/evidence → synthetic-data status → sensitive-data check → platform reuse eligibility → external-marketing setting → accessibility/alt-text status → owner → created_at → stale trigger → retirement date → W-class`

## Decision rules

1. Store assets are product evidence, not decorative campaign inventory.
2. Never use real user/portfolio/crew/flight data in reusable marketing assets.
3. Never recreate or modify App Store / Google Play badges when official assets exist.
4. A platform's ability to syndicate an asset increases the required review standard.
5. Time-sensitive screenshots require an explicit expiry/refresh trigger before publication.
6. Localization must preserve the same production truth; translated creative does not create new functionality.
7. Do not optimize asset volume. Optimize the smallest truthful evidence set that survives every intended surface.

## Evidence

- Apple, *Marketing Resources and Identity Guidelines — App Store* (current 2026-09-19): official/localized badges, badge use, links/QR, product imagery, messaging and trademark rules. https://developer.apple.com/app-store/marketing/guidelines/
- Apple, *Promoting your apps and games* (current 2026-09-19): App Store Connect marketing assets and marketing tools. https://developer.apple.com/app-store/promote/
- Google Play Console Help, *Add preview assets to showcase your app* (current 2026-09-19): preview assets may be used on Google Play and other Google promotional channels; External marketing control; asset requirements/recommendations. https://support.google.com/googleplay/android-developer/answer/9866151
- Google Play Console Help, *Best practices for your store listing* (current 2026-09-19): misleading claims, false affiliation, ranking/deal language and graphic-asset integrity. https://support.google.com/googleplay/android-developer/answer/13393723

## Next validation

Audit the live MintTap Play Console `External marketing` state and create the first asset registry from production screenshots. Classify each asset W0–W5 before creating additional social derivatives.