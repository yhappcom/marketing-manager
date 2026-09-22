# Research 205 — Owned-Web → App Link Continuity Integrity

Validated: 2026-09-23

## Why this matters

For a zero-cost niche-app business, owned web, blog, Reddit and social links are useful only if the transition from external intent to web/app destination preserves the promise. Deep linking is therefore not merely an engineering convenience; it is part of acquisition, reactivation and trust integrity.

This research does **not** treat link opening as attribution truth. Apple Campaigns, Google Play UTM/source reporting and downstream product analytics retain their own native semantics and sparse-data limitations.

## Authoritative findings

### Apple Universal Links

Apple Universal Links use ordinary HTTP/HTTPS URLs. When the app is installed and the app↔website association is valid, a supported URL can open the corresponding app context; without the app, the same URL opens on the web. Apple requires a two-way association between the app and website. This makes a canonical owned-web URL capable of serving both installed and uninstalled states without inventing a parallel custom-scheme URL system.

Apple also preserves user/browser intent in some contexts: when a user is already browsing a site in Safari and taps a universal link to the same domain, Safari may keep the navigation in Safari. Therefore `universal link configured ≠ every tap opens app`.

Apple Campaign Links remain a separate measurement layer. Apple explicitly supports adding campaign/provider tokens to Smart App Banner implementation. A Smart App Banner can therefore be a measured App Store acquisition surface, but campaign credit retains Apple's campaign attribution semantics; it is not proof of causal discovery.

Sources:
- https://developer.apple.com/documentation/Xcode/allowing-apps-and-websites-to-link-to-your-content
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links

### Android App Links and Dynamic App Links

Verified Android App Links associate owned HTTPS URLs with an Android app through `assetlinks.json`, package identity and signing-certificate fingerprint. On supported devices a verified link can open corresponding app content directly; when the app is absent, the same URL remains usable as web content.

Android 15+ with Google services adds Dynamic App Links. Server-side rules in `assetlinks.json` can refine paths, fragments, query parameters and exclusions without an app release, and devices periodically refresh those rules. Dynamic rules cannot expand beyond the static scope allowed by the app manifest.

Backward compatibility is a material marketing constraint: Android 14 and lower do not apply the Android-15 dynamic path/exclusion rules. An implementation designed only around Android-15 server rules can therefore route older devices differently than expected. Route QA must be version-aware.

Verification is also operational, not theoretical. Google documents failure modes including an inaccessible/invalid `assetlinks.json`, wrong signing fingerprint, missing `autoVerify`, and server redirects. A published marketing URL is not considered a valid app route until the production association is verified.

Sources:
- https://developer.android.com/training/app-links/about
- https://developer.android.com/training/app-links/configure-assetlinks
- https://developer.android.com/training/app-links/faq
- https://developer.android.com/training/app-links/troubleshoot

## DQ0–DQ5 Owned-Web → App Link Continuity Integrity Gate

### DQ0 — Route necessity
Create a deep/app route only for a durable user job or content destination. Do not create vanity paths merely because the platform permits them.

### DQ1 — Domain/association integrity
Verify the production domain, HTTPS route, Apple association state and Android Digital Asset Links state. For Android, use the production Play signing fingerprint where Play App Signing applies.

### DQ2 — Promise/destination integrity
The destination must fulfill the claim made in the web/community/social entry point. A specialist article about one workflow must not silently land on an unrelated generic app screen merely to maximize app opens.

### DQ3 — Installed/uninstalled/version fallback integrity
Test installed and uninstalled states, iOS browser context, supported/unsupported OS versions, Android 15+ dynamic behavior and Android ≤14 fallback behavior. Web fallback must remain useful; `app unavailable` must not become a dead end.

### DQ4 — Measurement-semantic integrity
Keep route handling separate from attribution. Campaign token, UTM/source credit, web referrer, app open and downstream specialist-value completion are different observations. Preserve privacy/sparse thresholds from DL/DM rather than inferring missing rows as zero.

### DQ5 — Lifecycle decision
Keep a route only while its destination, claim, association files and supported product state remain valid. Retire or redirect obsolete routes deliberately and re-test association after domain, signing, manifest, hosting or destination changes.

## Canonical semantic rules

- `owned URL exists ≠ app association verified`
- `universal/app link configured ≠ every tap opens the app`
- `app opened ≠ promised value reached`
- `deep link route ≠ attribution truth`
- `campaign/UTM credit ≠ causal discovery`
- `Android 15 dynamic behavior ≠ Android ≤14 behavior`
- `server-side dynamic rule ≠ permission to exceed manifest scope`
- `installed-user continuity ≠ uninstalled-user continuity`
- `web fallback ≠ failure`; for an uninstalled user it can be the correct destination
- `more deep links ≠ more organic growth`

## MintTap application

Use `minttap.app` as the durable owned-web namespace only where the page and shipped app can preserve the same investor job. Candidate routes should be job-level rather than ticker/post-level. Examples can eventually include a durable distribution/ROC or portfolio-analysis job, but only after production destination evidence exists.

A Reddit/blog/social link should normally resolve to useful owned-web content for an uninstalled visitor and, where appropriate, the corresponding installed-app context for an existing user. Do not force every educational web visit into the app. Preserve DL/DM attribution semantics separately from route behavior.

Before rollout, audit the production Apple association file, Android `assetlinks.json`, Play signing fingerprint, redirects, route matrix and downstream value events. Current production state is unknown until inspected.

## LogMate application

Design the route namespace before launch around durable pilot jobs, not marketing campaigns. Import, starting a logbook, documentation/support or another specialist destination should receive a route only when the shipped destination and web fallback exist.

Because offline/PWA behavior is central to LogMate, route QA must include network-unavailable and partial-connectivity states where relevant. Do not let a marketing deep link bypass required onboarding, previous-total setup, validation or protected workflow states. Home remains ad-free and route handling must not introduce promotional interruption into protected logging workflows.

## Reusable operating registry

For every owned route record:

`route_id | canonical_https_url | audience_job | external_claim | web_destination | ios_destination | android_destination | installed_state | uninstalled_state | minimum_os | Apple association state | Android association state | Android legacy fallback | attribution token policy | downstream value event | owner | last_verified | expiry/revalidation trigger`

Revalidation triggers include domain/hosting migration, signing-key or package change, manifest change, association-file change, app destination change, onboarding change and material OS behavior change.

## Decision

Owned-web deep linking is now treated as **continuity infrastructure**, not a growth hack. The zero-cost advantage comes from reusing one durable HTTPS route across search, blog, community and social while preserving a useful web fallback and a verified installed-app destination. Scale route count only after production evidence demonstrates distinct durable jobs.
