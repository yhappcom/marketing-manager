# Research 239 — Apple Custom Product Page Zero-Cost Intent Routing Integrity

Date: 2026-09-24

## Decision
Apple Custom Product Pages (CPPs) are not merely paid-ad landing pages. They can be shared through unique URLs in owned/community/social communications, can receive selected keywords from the latest approved app version so the CPP appears for those searches instead of the default page, and can carry an approved deep link into matching in-app content on iOS/iPadOS 18+. This makes CPP a potentially useful zero-cost intent-routing surface for a niche app — but only when the audience intent is materially distinct and the destination truthfully matches it.

## Authoritative findings
- Apple currently permits up to 70 CPPs per app. A CPP may vary screenshots, app previews and promotional text, and is localizable/shareable by unique URL.
- Selected keywords from the latest approved app version can be assigned to a CPP. Apple recommends unique keyword sets and intent alignment; a matching search can show the CPP instead of the default product page.
- CPP metadata must pass App Review. A CPP can be submitted independently of an app update once the app is already approved.
- An optional app deep link can route users who tap Open to specific in-app content on iOS/iPadOS 18+. Apple recommends universal links, warns against unnecessary redirect/shortener layers, and requires the deep link to be reviewed.
- App Analytics reports CPP impressions, downloads/redownloads and conversion, with engagement/retention and proceeds comparisons available. CPP metrics become available only after at least five first-time downloads, so missing CPP reporting is not evidence of zero demand.
- Apple publishes an aggregate benchmark that referrals to CPPs average a 2.5 percentage-point conversion increase versus a stated 1.6% default-page average. This is platform-wide promotional evidence, not a forecast for MintTap or LogMate and must not be used as an expected uplift.

## EY0–EY5 — Custom Product Page Intent-Routing Integrity Gate
EY0 Intent identity — define the specialist audience/job before creating a page.
EY1 Material-difference integrity — authorize a CPP only when screenshots/copy/destination can materially differ from the default page; do not create pages merely to consume available slots.
EY2 Keyword/link truth — assigned keywords and external-link context must match what the CPP actually demonstrates.
EY3 Destination continuity — when deep linking is used, Store promise → installed/opened destination → first specialist task must remain semantically continuous; test the approved route.
EY4 Sparse-measurement integrity — preserve impressions/downloads/conversion/retention as distinct denominators; treat sub-threshold or absent CPP reporting as unknown, not zero.
EY5 Durable-value decision — keep a CPP only when it improves a meaningful acquisition/activation decision, not because it produces more page variants or vanity conversion movement.

## MintTap application
Potential future CPPs require evidence of materially different YieldMax intents (for example portfolio tracking versus distribution/ROC analysis). Do not manufacture ticker-by-ticker or Reddit-post-by-post pages without enough distinct product truth and traffic. Financial claims remain conservative and evidence-bound. Community links should route to a CPP only where venue rules permit promotion and the page directly resolves the post's audience intent.

## LogMate application
Do not put CPP proliferation on the launch-critical path. After launch evidence exists, materially different pilot jobs such as import/migration versus day-to-day flight logging may justify separate Store narratives if product capability, screenshots and downstream destination are genuinely distinct. Device/workflow reliability outranks landing-page segmentation.

## Company operating rule
Use one intent registry: `audience/job → evidence of recurring demand → platform/locale → default vs CPP decision → keyword set/external source → Store promise → optional deep link → first-value destination → measurement threshold/status → retention/repeat-value evidence → keep/merge/retire`.

Preserve: `CPP count ≠ segmentation quality`; `unique URL ≠ causal proof`; `keyword assignment ≠ ranking guarantee`; `platform benchmark ≠ app forecast`; `CPP conversion lift ≠ retained specialist value`; `missing analytics below threshold ≠ zero`; `deep link ≠ valid destination until reviewed and tested`.

## Sources
- Apple Developer, Custom Product Pages: https://developer.apple.com/app-store/custom-product-pages/
- App Store Connect Help, Configure multiple product page versions: https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- App Store Connect Help, Submit a custom product page: https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-a-custom-product-page

## Next evidence target
Audit whether MintTap currently has any CPPs, assigned keywords, CPP analytics or approved deep links. Cross-reference only materially distinct recurring demand already evidenced in community/owned-search data. Do not create CPPs merely because the capability exists.