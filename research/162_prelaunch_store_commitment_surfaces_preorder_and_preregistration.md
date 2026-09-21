# 162 — Prelaunch Store Commitment Surfaces: Apple Pre-Order and Google Play Pre-Registration

Validated: 2026-09-21

## Why this matters
For a zero-paid-media niche app, prelaunch Store surfaces can convert scarce community/owned attention into a platform-retained launch commitment. They are not generic awareness campaigns and should not be opened merely because a launch is planned.

## Authoritative findings

### Apple App Store pre-order
Apple App Store Connect permits free and paid apps to be offered for pre-order in a country/region where that app has not yet been released. Users can view the product page and order before download availability. At release, customers are notified and the app automatically downloads to the device used for pre-order; eligible devices with automatic downloads enabled can also receive it.

For a first-ever App Store release, the release date must initially be 2–180 days in the future. If the app is already available in at least one country/region and pre-order is being opened in a new territory, Apple permits a release date 2–365 days ahead. Once the app has been released in a territory, that territory can no longer be converted back to pre-order.

Pre-order therefore has territory/version semantics, not a universal app-level state. It is a launch-commitment surface tied to truthful release readiness.

Source: Apple App Store Connect Help, “Publish for pre-order,” current as checked 2026-09-21.

### Google Play pre-registration
Google Play pre-registration lets users visit the Store listing and pre-register before production launch. When the app launches, pre-registered users receive a Play notification; eligible devices can auto-install.

Google currently limits a pre-registration campaign to 90 days and says the app must then launch to production. A developer can have at most two apps/games in pre-registration at a time. Google strongly recommends testing before opening pre-registration and recommends that declarations/configuration be as close as possible to the intended production state.

Google also explicitly recommends preparing traffic from third-party websites, social media, press and email to the pre-registration listing. This makes pre-registration a destination for existing demand-generation work, not a substitute for demand generation.

Auto-install is conditional rather than guaranteed. Current Play documentation lists device/Play-version, account, app-size/network and other eligibility constraints. Therefore “pre-registration” and “launch-day installed user” must remain separate evidence states.

Testing and pre-registration can coexist, but test users have special semantics: users who already have a test version do not receive the ordinary launch push; switching/testing behavior can also change which notification they receive. Beta/test audiences therefore must not be merged mechanically with the pre-registration cohort.

Source: Google Play Console Help, “Build awareness for your apps with pre-registration,” current as checked 2026-09-21.

## Core operating principle
`prelaunch attention ≠ Store commitment ≠ launch notification/auto-download ≠ first open ≠ qualified activation ≠ repeated value`

Pre-order/pre-registration is useful only when the company can plausibly convert a time-bounded launch commitment into a reliable release and immediate core value. It does not prove product-market fit or create demand by itself.

## BZ0–BZ5 Prelaunch Commitment Integrity Gate

### BZ0 — Surface and territory eligibility
Record platform, app, package/bundle identity, territory, current release state, planned launch date and eligibility. Never assume Apple pre-order remains available in a territory where the app has already shipped. Record Google’s active 90-day deadline.

### BZ1 — Release-readiness evidence
Require a production-near build, truthful declarations, policy readiness, Store metadata and a credible launch date before opening the surface. Pre-registration/pre-order must not be used to pressure an unstable product into release.

### BZ2 — Promise and listing integrity
The prelaunch Store page must describe what will actually ship. MintTap financial claims remain subject to the BE provenance contract. LogMate must not imply unsupported regulatory/compliance capability. Localization must satisfy BY rather than merely translating launch hype.

### BZ3 — Demand-route and permission integrity
Use owned/community/social traffic only where the channel permits promotion and disclosure is correct. Preserve BV/BW source and route identity. A platform pre-registration badge or Apple pre-order state does not grant permission to advertise inside a community.

### BZ4 — Commitment-to-launch measurement boundary
Keep separate: listing exposure, pre-order/pre-registration commitment, notification eligibility, auto-download/install, first open, first useful value, retained/repeated value. Do not call sign-ups “users” or “installs.” Do not interpret auto-install eligibility as actual auto-install.

### BZ5 — Launch conversion and postlaunch value
Judge the surface by qualified downstream value after release, not commitment count. Reconcile release-date reliability, first-open/activation evidence, early defects, retention and eventual ad-bearing use where appropriate. Preserve sparse/inconclusive evidence rather than manufacturing a launch-success narrative.

## App-specific application

### MintTap
MintTap is already released in existing territories, so pre-order is not a reusable relaunch tactic in those same Apple territories. It could only become relevant for a genuinely new App Store territory where the app has never been released, subject to legal/financial availability and truthful localization. Google pre-registration likewise is a pre-production launch mechanism, not a recurring promotion surface for an already-produced market.

Therefore no current MintTap campaign should be created merely to gain another Store CTA. The useful action is to record whether any future territory expansion is actually eligible and to preserve the distinction between new-territory launch and ordinary version marketing.

### LogMate
LogMate is the stronger future candidate because it has not yet launched. However, opening pre-order/pre-registration too early would consume a time-bounded promise before product/release readiness is proven. Google’s 90-day hard operating window makes premature activation particularly costly for a small team.

Default launch sequence: release-qualified build and declarations → Store truth/localization → community permission and attributable routes → decide whether there is enough prelaunch demand and release certainty to justify commitment surface → open surface → launch within platform window → measure first useful/repeated value.

For an English-only product, prelaunch Store localization must not imply localized in-app support.

## Reusable niche-app rule
Prelaunch commitment surfaces are best treated as a finite launch instrument, not an evergreen ASO channel. For a narrow professional audience, a small but attributable cohort of high-intent commitments can be operationally useful, but sparse counts remain descriptive. The company should not delay a ready product merely to inflate pre-registration numbers, nor open registration simply to make a launch look larger.

## Next evidence to collect
1. For LogMate, establish release-confidence criteria before any pre-order/pre-registration decision: production-near build, Store declarations, privacy/policy readiness, crash/stability evidence, support path, first-use path and launch-date confidence.
2. At launch planning, record Apple eligible territories and Google pre-registration deadline/track state rather than assuming global symmetry.
3. Connect any prelaunch Store links to BV/BW attribution and community permission records before publication.
4. Define the postlaunch cohort boundary needed to distinguish commitment, install/auto-install, first open, useful activation and repeated value.

## Sources
- Apple Developer — App Store Connect Help, Publish for pre-order: https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/publish-for-pre-order
- Apple Developer — App Store Connect Help, Manage availability: https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/manage-availability-for-your-app-on-the-app-store
- Google Play Console Help — Build awareness for your apps with pre-registration: https://support.google.com/googleplay/android-developer/answer/9859047?hl=en
