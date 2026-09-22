# Research 190 — App-Ads.txt Store-Domain & Supply-Chain Integrity

Date: 2026-09-22
Status: validated operating contract
Scope: MintTap, LogMate, future ad-supported niche apps

## Why this is a separate marketing problem

The previous ad research established consent, placement, format, impression-level revenue, reconciliation and traffic-quality contracts. A remaining gap sits upstream of all of them: buyers must be able to associate the store-listed app with a developer-controlled web domain and determine which programmatic sellers are authorized to sell that app inventory.

This is not merely a website-file task. It is a cross-surface identity chain:

`store app identity → store-listed developer website → crawler-derived hostname → reachable app-ads.txt → authorized seller/account record → buyer/seller validation → legitimate monetizable inventory`

A failure anywhere in this chain can make an otherwise correct ad integration commercially weaker or unverifiable.

## Authoritative findings

### 1. App-ads.txt is an anti-fraud / supply-chain authorization standard

IAB Tech Lab defines app-ads.txt as the app extension of ads.txt: publishers publicly declare the companies authorized to sell their digital inventory. Its purpose is supply-chain transparency and reducing counterfeit/misrepresented inventory. It does not certify app quality, ad UX, consent compliance, or revenue performance.

Source: IAB Tech Lab, Ads.txt/App-Ads.txt, current page (accessed 2026-09-22): https://iabtechlab.com/ads-txt/

### 2. Store metadata is part of the monetization trust chain

AdMob requires the app to be registered in Google Play or Apple's App Store and requires the store listing to contain the developer website. AdMob uses that store-listed developer website to determine where to look for app-ads.txt. For Google Play, the developer website is added to Store listing contact details; for Apple's App Store, AdMob documents the developer website/marketing URL route.

Therefore the developer website field is not just a user-support or SEO field. For ad-supported apps it is monetization infrastructure and must be release-managed accordingly.

Source: Google AdMob Help, “Set up an app-ads.txt file for your app”: https://support.google.com/admob/answer/9363762?hl=en

### 3. The crawler derives the file location; a browser-visible marketing page is insufficient

AdMob derives the hostname from the developer website in the store listing and checks app-ads.txt according to the specification's hostname/subdomain rules. A path such as `https://example.com/game` does not mean the file belongs under `/game/`; the crawler checks the relevant hostname for `/app-ads.txt`.

Google's troubleshooting guidance identifies common failures including a missing developer website, invalid developer URL, unsupported subdomain, malformed file and robots.txt blocking. Google recommends HTTP 200 availability and crawlability and notes that propagation is not necessarily immediate.

Sources:
- https://support.google.com/admob/answer/9363762?hl=en
- https://support.google.com/admob/answer/9776740?hl=en-GB
- https://support.google.com/admob/answer/9679128?hl=en

### 4. Verification is asynchronous; deployment success is not verification success

Google states that store-listing changes can take time to detect and that app-ads.txt changes can take additional time to appear in AdMob. Therefore a successful website deployment or a browser HTTP 200 is evidence of publication, not evidence that AdMob has associated and verified the file for the app.

Operational state must distinguish at least:

`declared → deployed → externally reachable → crawler-discoverable → platform detected → verified`

Do not collapse these into a single `app_ads_txt=true` flag.

### 5. Authorized-seller correctness matters more than file existence

The file is a declaration of authorized sellers and publisher accounts. A reachable but wrong publisher ID/domain relationship is not a valid implementation. IAB's model is specifically about buyers distinguishing authorized from unauthorized inventory paths; Google troubleshooting also calls out missing/wrong publisher IDs and wrong domains as formatting/content errors.

This means mediation changes can create a supply-chain maintenance obligation. Adding/removing a monetization partner must trigger an app-ads.txt authorization review rather than assuming the existing file remains correct.

### 6. App-ads.txt is not a revenue guarantee

The standard enables buyers to validate authorized supply. It does not imply a particular fill rate, eCPM or revenue uplift. Likewise, a verified file does not prove consent, placement, traffic quality or final earnings correctness. Those remain governed by the existing CB–CI and CW–DA contracts.

Preserve the semantic boundary:

`authorized inventory ≠ demanded inventory ≠ filled inventory ≠ valid click ≠ finalized revenue`

## DB0–DB5 — App-Ads.txt Store-Domain & Supply-Chain Integrity Gate

### DB0 — App identity
Record platform, package/bundle ID, store listing URL, publisher/ad-account identity and production/test status. Never infer one platform's identity from the other.

### DB1 — Store-domain identity
Record the exact developer website currently exposed by each production store listing, the effective hostname that the crawler should derive, and whether that domain is controlled by the publisher.

### DB2 — Discovery and crawlability
Verify the expected app-ads.txt route, HTTP response, redirects, robots behavior, TLS/domain health and content type/format sufficiently for crawler access. Browser visibility is useful evidence but is not platform verification.

### DB3 — Seller authorization integrity
Reconcile every production seller/mediation relationship that requires declaration with the file's seller domain, publisher/account ID, DIRECT/RESELLER relationship and certification authority ID where applicable. Stale authorization is a maintenance defect.

### DB4 — Platform verification state
Preserve publication timestamp, store metadata change timestamp, crawler/platform detection state, AdMob verification state, last checked timestamp and any diagnostic message. Treat propagation delay as a state, not as proof of failure.

### DB5 — Revenue/supply-chain decision
Join verification/seller state to serving and revenue only directionally. Do not attribute fill/eCPM/revenue movement to app-ads.txt without an interpretable before/after or platform evidence. Continue to reconcile revenue through CW and traffic quality through DA.

## Canonical invariants

- `developer website field ≠ cosmetic Store metadata`
- `file deployed ≠ crawler discovered`
- `HTTP 200 ≠ AdMob verified`
- `app-ads.txt present ≠ seller records correct`
- `verified seller authorization ≠ consent compliance`
- `verified seller authorization ≠ safe placement`
- `verified seller authorization ≠ revenue guarantee`
- `mediation change ≠ app-ads.txt remains automatically current`
- `Store-domain mismatch ≠ website-only defect`; it can break monetization identity

## MintTap application

Audit both production stores independently. For each MintTap listing capture the exact developer website currently shown, crawler-derived hostname, live `/app-ads.txt`, redirects/robots/TLS, AdMob verification state and personalized AdMob seller record. Then reconcile the file against every production mediation/seller relationship actually enabled.

Because `minttap.app` is also an owned-web/search asset, do not casually change its Store-linked developer URL for SEO, campaign routing or redesign purposes. A Store developer-domain change is a cross-system change affecting CU/CV owned-web identity and DB app-ad supply-chain discovery. Marketing landing paths should remain separable from the stable developer-domain identity.

## LogMate application

Before an ad-supported launch, select a stable developer-domain identity and establish the Store → domain → app-ads.txt chain before relying on programmatic revenue. If LogMate launches without ads, record app-ads.txt as not applicable for that release rather than publishing speculative seller records. When monetization is activated, seller authorization becomes part of the launch checklist.

## Reusable release registry

For every ad-supported app maintain:

`app | platform | package/bundle ID | store URL | store developer website | derived hostname | expected app-ads.txt URL | HTTP/crawl state | publisher ID | seller domain | DIRECT/RESELLER | mediation partner | declared timestamp | store-change timestamp | AdMob/platform verification state | last verified | owner | evidence`

Trigger revalidation on:

- new app/store listing;
- developer website/domain change;
- redirect/DNS/TLS/hosting migration;
- publisher/account change;
- mediation/seller addition or removal;
- unexplained verification loss;
- major serving/revenue anomaly where supply authorization is a plausible contributor.

## Decision

App-ads.txt is now treated as **Store-linked monetization identity infrastructure**, not a one-time text-file setup. DB0–DB5 becomes a required production evidence gate for every ad-supported app. No optimization decision should use “app-ads.txt exists” as a proxy for verified authorization, and no revenue change should be attributed to app-ads.txt from correlation alone.

## Next evidence target

Apply DB0–DB5 to MintTap production: inspect the actual Google Play and App Store developer website fields, `minttap.app/app-ads.txt`, crawl/redirect/robots/TLS behavior, AdMob verification state and production seller/mediation declarations. Preserve absent evidence as unknown rather than guessing.
