# 100 — Intent Continuity from Distribution to In-App Destination

Validated: 2026-09-18

## Why this is a distinct growth problem

The repository already governs channel permission, attribution, Store-page semantic matching, and activation. A remaining gap is what happens **after a qualified person has expressed a specific intent**. A specialist user can encounter a highly relevant article or Store page, install/open the app, and still be dropped onto a generic home screen. That destroys information scent and forces the user to rediscover the job they already selected.

Canonical principle:

> **Preserve the user's declared job across every handoff; never make a qualified user rediscover why they came.**

This is not a mandate to deep-link every campaign. Deep linking is valid only when the destination exists, is safe to enter directly, and keeps the acquisition promise.

## First-party platform facts

### Apple

Apple Custom Product Pages (CPPs) support an optional app deep link. For users on iOS/iPadOS 18 or later, tapping **Open** on a CPP can route to specific in-app content. Apple says the deep link can be a universal link or custom URL, recommends universal links for a secure integrated experience, advises avoiding URL shorteners/unnecessary redirects, and requires the deep link to be reviewed with the CPP before it functions. CPPs remain measurable in App Analytics, with page metrics appearing after at least five first-time downloads.

Implication: a CPP can now preserve not only **Store-message relevance** but also **post-open destination relevance**. This extends the 093 query→page contract into the product.

Apple also warns that custom URL schemes are not uniquely owned: another app can register the same scheme and target selection can be undefined. Universal links are therefore the preferred default for company-owned web/app routing where feasible.

### Android

Android App Links are verified HTTP/HTTPS deep links between a website domain and an Android app. Verification uses a Digital Asset Links `assetlinks.json` file hosted on the website and the app's package/signing-certificate identity. Verified App Links can open matching app content directly rather than presenting a chooser. Users without the app can remain on the corresponding website URL.

On Android 12+, generic unverified web links normally resolve to the browser rather than the app, so merely declaring a URI intent filter is not equivalent to a reliable marketing route.

Android 15+ adds Dynamic App Links: server-side `assetlinks.json` rules can refine path/query/fragment matching without shipping a new app version, subject to the manifest's declared scope. This is operationally useful, but it also creates a governance obligation: marketing must not change routing semantics independently of product ownership and QA.

## The continuity chain

For a specialist app, evaluate the complete route:

`specialist problem → community/blog/social asset → web/Store route → Store promise → install/open → exact safe in-app destination → first-value action → useful return`

At each transition ask:
1. Does the next surface preserve the same user job?
2. Does it narrow or silently broaden the promise?
3. Can a fresh user understand the destination without hidden prerequisites?
4. Does authentication/setup/import/portfolio creation make direct entry unsafe or confusing?
5. Is there a deterministic fallback if the destination is unavailable?
6. Is route success measured as useful task progress rather than link-open rate?

## I0–I5 Intent-Continuity Gate

### I0 — Broken or deceptive route
- Link resolves to wrong content, dead state, unsafe state, or a destination inconsistent with the acquisition promise.
- Deep link bypasses required consent/setup or implies unsupported professional/tax/regulatory capability.
- **Action:** remove/repair before distribution.

### I1 — Generic reset
- Qualified intent is known externally but install/open always lands on generic home/onboarding with no continuity.
- Not deceptive, but acquisition context is discarded.

### I2 — Technical deep link only
- Route opens the intended screen in test conditions, but fresh-user prerequisites, fallback, analytics semantics, or product-language parity are unverified.
- Link-open success is not activation evidence.

### I3 — Production-safe intent preservation
Minimum deliberate-routing threshold:
- destination corresponds to a real production job;
- Store/content promise and destination semantics match;
- fresh-user prerequisites are handled explicitly;
- required consent/setup is not bypassed;
- verified domain association is used where appropriate;
- deterministic fallback exists;
- route is tested from external source through final destination.

### I4 — Value-linked continuity
- Route cohort can be connected, at privacy-safe aggregate level, to the intended first-value event and useful return;
- failures are classified (verification, install state, OS/version, prerequisite, destination, semantic mismatch);
- continuity improves qualified task completion without harming trust or retention.

### I5 — Reusable specialist routing pattern
- I4 result repeats across independent routes/releases;
- maintenance ownership, regression testing, fallback, naming, and measurement are standardized;
- pattern is transferable to a future niche app only when its job structure is genuinely analogous.

## MintTap application

Do **not** deep-link merely to maximize taps. Candidate routes should correspond to stable, production-valid jobs, for example:
- a reverse-split educational asset → a relevant split/history/explanation destination if the production app has one;
- a Final ROC explanation → the exact ROC workflow only if its scope and tax boundary remain explicit;
- a distribution-history asset → the relevant ticker/history context if that context can be opened safely.

Ticker-specific links are justified only when the destination actually preserves ticker context. A `CONY` article that opens a generic dashboard and forces ticker rediscovery remains I1 even if attribution works.

Sensitive portfolio/transaction state must not be encoded into public URLs merely for marketing continuity. Prefer non-sensitive route identifiers and reconstruct private state after normal app authorization/setup.

## LogMate application

Potential future routes should map to production-valid pilot jobs such as manual entry, totals/search, backup/offline help, or validated import. Do not route directly into a regulatory-looking form or workflow unless the app actually supports that scope and the user's prerequisites are satisfied.

For launch, deep linking is downstream of canonical persistence/manual-entry reliability and truthful Store evidence. It cannot compensate for an immature first-value workflow.

## Zero-cost distribution implications

Deep linking is a **conversion-friction reducer**, not a demand generator. It should therefore be implemented after:
- the route is permitted (080/083/098),
- the promise is valid (082/092/093),
- the first-value event is defined,
- the destination is stable enough to survive release changes.

A deep link that increases opens but reduces task success is a regression.

## Measurement

Minimum route record:

`route_id | source/community | specialist_job | Store_page | OS | deep_link_destination | fallback | prerequisite_state | destination_success | first_value | useful_return | I_class`

Diagnostic metrics:
- verified-route success rate;
- destination-resolution failure rate;
- prerequisite interruption rate;
- intended first-value completion;
- useful return by route cohort.

Do not optimize on deep-link click/open rate alone.

## Governance / release contract

Any intentional route requires named ownership across Marketing + Web + App Engineering. Regression testing must cover at least:
- app installed / not installed;
- fresh user / configured user where relevant;
- supported OS versions;
- website fallback;
- invalid/expired destination;
- authentication/setup prerequisites;
- analytics route identity;
- semantic match to the current Store/content promise.

Dynamic routing rules must be version-controlled or otherwise auditable. Marketing must not silently repoint a stable public URL to a different specialist job.

## Validated first-party sources

- Apple, **Configure multiple product page versions**: CPPs can include reviewed deep links; iOS/iPadOS 18+ users can be routed from Open to specific app content; universal links are recommended; unnecessary redirects should be avoided. https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions
- Apple, **Defining a custom URL scheme for your app**: custom schemes are not uniquely owned; Apple recommends universal links for links uniquely associated with a website. https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app
- Android Developers, **About App Links**: verified website/app association, direct content routing, website fallback, Android 15 Dynamic App Links. https://developer.android.com/training/app-links/about
- Android Developers, **Configure website associations and dynamic rules**: `assetlinks.json`, package/signing-certificate association, Android 15 dynamic rules. https://developer.android.com/training/app-links/configure-assetlinks
- Android Developers, **Verify App Links**: host verification behavior and testing. https://developer.android.com/training/app-links/verify-applinks

## Decision

Add I0–I5 to the canonical growth system. The minimum threshold for deliberate job-specific deep routing is I3. Deep linking is not a launch prerequisite by itself and should not outrank product readiness, trust parity, or first-value reliability.