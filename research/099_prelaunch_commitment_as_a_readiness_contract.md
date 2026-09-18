# 099 — Prelaunch Commitment as a Readiness Contract

Date: 2026-09-18
Status: Canonical

## Principle
**Do not collect launch commitments before the product, promise, and launch path are credible enough to honor them.**

Pre-order / pre-registration is not merely an awareness tactic. It creates a platform-mediated commitment between a prospective specialist user and a future production release. For a sparse niche audience, spending that commitment on an immature launch can waste scarce trust and contaminate launch-quality evidence.

## First-party platform facts

### Apple App Store pre-order
Apple permits free and paid apps to be offered for pre-order in territories where the app has not yet been released. Customers can inspect the product page and pre-order; after release they are notified and the app can automatically download on eligible devices with automatic downloads enabled. For a first-time release, the release date is set 2–180 days ahead. Pre-order requires an app version to pass the release/review flow; the pre-order does not become visible merely by selecting a date. Once an app has been released in a territory, that territory cannot subsequently be converted back to pre-order.

Source: Apple, “Publish for pre-order,” App Store Connect Help, accessed 2026-09-18.
https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/publish-for-pre-order

### Google Play pre-registration
Google describes pre-registration as a way to build awareness before production launch. Users can visit the listing and pre-register; on production launch, registered users receive a Play notification and eligible devices can auto-install. Google strongly recommends testing before pre-registration and says declarations/configuration should be as close as possible to intended production. A campaign can last only 90 days and at most two apps/games can be in pre-registration at once. Google exposes pre-registered-user count and a conversion metric defined as pre-registered users who install within 14 days after availability; that conversion can include installs through early access/pre-launch testing.

Source: Google Play Console Help, “Build awareness for your apps with pre-registration,” accessed 2026-09-18.
https://support.google.com/googleplay/android-developer/answer/9859047

## Why this matters for a specialist-app company
A mass-market app can sometimes replace weak early cohorts with volume. MintTap and LogMate cannot assume that. Their relevant audiences are bounded professional/specialist populations. A pre-registration impression therefore consumes a scarce opportunity to establish a credible first expectation.

A large pre-registration count is not the objective. The useful chain is:

`qualified prelaunch demand → truthful production-near promise → registration/pre-order → successful release/install → first specialist value → useful return`

The registration itself is an intermediate commitment, not activation and not retention.

## H0–H5 Prelaunch Commitment Readiness Gate

### H0 — False-future promise
The listing or promotion implies a production capability, regulatory/tax outcome, reliability property, launch date, or professional workflow that the planned release cannot credibly deliver.

Action: do not open pre-order/pre-registration.

### H1 — Calendar-driven launch collection
A date exists, but production semantics, Store evidence, first-value path, or release confidence remain materially unresolved.

Action: continue testing; do not use waiting-list volume as a substitute for readiness.

### H2 — Product-near but unproven
The core release exists and Store promise is substantially accurate, but the specialist first-value path, reliability, support/trust surfaces, or launch operations have not yet been validated sufficiently.

Action: closed/internal/external testing remains the preferred instrument.

### H3 — Commitment-ready
The planned production release can keep the Store promise; core first-value path is functional; trust/privacy/support surfaces are materially aligned; launch geography and specialist scope are explicit; Store assets represent the release; and the release window is credible.

Action: pre-order/pre-registration may be used where it has a concrete distribution purpose.

### H4 — Measured launch bridge
H3 plus route attribution and post-launch measurement connect registration/pre-order cohorts to install, first value, and useful return. Platform-specific metrics are interpreted within their definitions rather than treated as equivalent.

### H5 — Reusable prelaunch pattern
Multiple launches or materially distinct territories show that prelaunch commitment improves qualified launch delivery without degrading product readiness, specialist trust, or post-install usefulness. Only then may the pattern be generalized to future niche apps.

## Apple / Google are not analytically interchangeable
Apple pre-order and Google pre-registration are parallel commitment surfaces, not identical experiments. Their windows, eligibility, delivery mechanics and reporting differ. Do not combine counts into a single “prelaunch conversion rate” without an explicit common denominator and event definition.

Google’s documented `Conversions` metric is install within 14 days of availability and can include early-access/pre-launch-testing installs. It is therefore not equivalent to retained activation. Apple’s automatic download behavior also means download/install should not be interpreted as deliberate first use. In both stores, product telemetry must supply the downstream specialist-value evidence.

## Zero-cost launch implication
Pre-registration is technically a zero-media-cost Store mechanism, but it creates maintenance and opportunity costs:
- Store assets must be production-near and localized where intentionally launched.
- launch date and release operations must be maintained;
- community/blog/social traffic sent to a prelaunch page consumes audience attention;
- support burden can begin before release;
- an immature first release can convert accumulated anticipation into churn rather than retained inventory.

Therefore prelaunch collection is not automatically preferable to publishing a high-quality app when ready.

## MintTap
MintTap is already released, so first-launch pre-registration is not a current growth tactic in territories where it is already available. Apple can support pre-order in a new territory where the app has not previously released, but this should be considered only if there is a real staged-market reason; localization alone is not sufficient.

Do not create artificial “waitlist” mechanics for ordinary feature updates merely to imitate launch scarcity. Product moments should instead use the already-canonical Store/community/editorial mechanisms appropriate to released apps.

## LogMate
LogMate is the relevant next test case. Do **not** open pre-registration simply because the Store listing can be prepared. Before H3, the following remain prerequisites:
- canonical production FlightRecord persistence;
- functional manual entry and totals/search path;
- credible offline/backup behavior for the advertised scope;
- production-valid first-value workflow;
- launch geography/professional boundary;
- T3 trust-surface parity;
- Store copy/screenshots that describe only the production release;
- a credible release window.

Google explicitly recommends test-track validation before pre-registration. For LogMate this aligns with the company rule: scarce pilot attention should first validate the product, not inflate a waiting counter.

## Launch ledger
For each prelaunch territory/platform record:
`platform → territory → intended specialist job → H-class → production build/test evidence → Store promise/version → launch window → source route → registration/pre-order → launch delivery → install/download definition → first value → useful return → issue/support family`

## Decision rules
1. Never use pre-registration count as evidence that the product solves the job.
2. Never delay essential testing to open a prelaunch campaign earlier.
3. Do not start a Google campaign unless the team can credibly release inside its 90-day window.
4. Do not compare Apple and Google raw commitment counts as though their mechanics are identical.
5. Promotion into specialist communities still requires the existing permission, novelty, disclosure, saturation and attribution gates.
6. H3 is the minimum deliberate prelaunch threshold; H4 is required before claiming the mechanism improved launch quality.

## Unresolved questions
- Exact Apple analytics dimensions currently available specifically for pre-order cohorts and whether they support the downstream cohort joins needed here.
- Whether LogMate’s final native/PWA scope will justify Store pre-registration before the first production launch.
- Minimum fresh-user evidence required internally to promote LogMate from H2 to H3.
- Whether a staged country rollout has a genuine product/operational purpose or would merely fragment an already sparse pilot audience.
