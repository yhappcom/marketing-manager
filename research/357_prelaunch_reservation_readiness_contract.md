# Research 357 — Pre-Launch Reservation Is a Readiness Contract, Not a Vanity Counter

Validated: 2026-10-01

## Decision

For sparse-niche apps, App Store pre-order / Google Play pre-registration should be enabled only when launch readiness is already credible. Treat reservation as a **promise-to-deliver contract** that compresses launch demand into a known window; do not use it merely to manufacture a visible signup number.

## Authoritative platform facts

### Apple
- A brand-new app can be offered for pre-order in territories where it has not yet been released.
- For a first release, the release date is 2–180 days after pre-order publication.
- The product page is visible before release. At release, customers are notified and the app automatically downloads to the device used to pre-order; eligible devices with automatic downloads can also receive it.
- Apple explicitly permits promoting the pre-order through owned channels such as a website, mailing list, and social media.
- A pre-order version must pass App Review before the pre-order is published.

Primary sources:
- https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/publish-for-pre-order/
- https://developer.apple.com/app-store/pre-orders/

### Google Play
- Pre-registration exposes the Store listing before production launch; registrants receive a Play notification at launch and eligible devices may auto-install.
- Google strongly recommends testing on a test track before starting pre-registration and says declarations/configuration should be as close as possible to the intended production version.
- A Play pre-registration campaign can last at most 90 days; failure to launch within the limit terminates the campaign across countries and prevents starting new campaigns.
- Google recommends a complete, localized Store listing before starting and explicitly expects the developer to prepare traffic from owned/promotional channels.
- Users already running a test version do not receive the normal pre-registration launch notification. Testing and pre-registration can coexist, but their audience mechanics differ and must be planned deliberately.

Primary source:
- https://support.google.com/googleplay/android-developer/answer/9859047

## New operating principle

Reservation is not acquisition by itself. It is a conversion surface for **existing qualified anticipation**.

A niche app should not open pre-order/pre-registration merely because the platform supports it. The launch window creates a deadline and an expectation. If product readiness, Store promise, first-value path, support, analytics, or launch-day capacity are unresolved, the reservation surface converts uncertainty into a public promise.

## JSN0–JSN9 — Pre-launch reservation gate

0. **Qualified audience evidence** — recurring specialist problem and reachable audience exist.
1. **Product readiness** — core job is stable enough that a committed launch window is credible.
2. **Store-promise integrity** — screenshots/copy describe functionality expected to exist at launch.
3. **Testing readiness** — production-like test evidence exists; platform test/pre-registration audience interactions are understood.
4. **First-value readiness** — a registrant can reach the promised specialist value immediately after install.
5. **Measurement readiness** — Store reservation, launch acquisition, first-value, and repeated-value cohorts can be distinguished where platform/data permits.
6. **Owned/community distribution readiness** — there is a permissioned reason to send qualified prospects to the reservation page; no repetitive seeding.
7. **Launch-window discipline** — owner/date/release fallback exists; Google 90-day and Apple release-window constraints are explicitly tracked.
8. **Post-install readiness** — support, onboarding, reliability, review/support recovery, and non-intrusive monetization are ready.
9. **Decision** — ENABLE / DELAY / TEST-FIRST / NATIVE-INTEREST-ONLY / LAUNCH-DIRECT / UNKNOWN.

## MintTap

MintTap is already an operating product, so this framework is not a retroactive launch tactic. Reuse it for future new-market/new-app launches rather than manufacturing a pre-launch campaign for an existing specialist audience.

## LogMate

LogMate is the immediate high-value application.

Do **not** enable reservation simply to accumulate pilot signups. First prove:
- import/migration fidelity;
- duplicate handling;
- Previous Total continuity;
- fast multi-leg logging;
- offline/PWA/device boundary behavior;
- export/backup integrity;
- Store claims that match the shipping build;
- launch analytics and support path.

For pilot communities, use pre-launch discussion primarily to validate workflow language and unresolved objections. Route to a reservation page only where community rules permit and the page adds a truthful, stable launch commitment.

On Google Play, test-track users and pre-registrants are not interchangeable cohorts. A pilot recruited as a tester can have different notification behavior from a pure pre-registrant. Maintain separate ledgers.

## Reusable launch rule

For future niche apps:

**problem evidence → qualified audience → stable core job → production-like test → truthful Store page → reservation gate → launch → first value → repeated value**

not:

**idea → pre-registration page → signup count → rush product to deadline**.

## Metrics

Do not optimize reservation count alone. Use, where observable:

reservation-page qualified visits → reservation rate → launch install/auto-install → first specialist value → repeated specialist value → support/review defects → sustainable non-intrusive monetization.

A smaller reservation cohort with high first/repeated value is superior to a broad cohort created by generic social promotion.

## Unresolved evidence

- LogMate launch date/window.
- Actual Apple/Google Store readiness.
- Google Play test-track audience and country plan.
- Pilot-community permission map.
- Launch instrumentation linking Store source/reservation cohort to first/repeated specialist value.
