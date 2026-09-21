# Research 179 — Pre-order / Pre-registration Commitment and Launch-Readiness Integrity

Date: 2026-09-22
Status: Canonical
Scope: Apple App Store pre-orders, Google Play pre-registration, zero-cost launch planning for sparse professional niche apps

## Why this addition matters

Store pre-launch mechanisms are not generic waitlists. They create platform-managed commitments, launch-day delivery/notification behavior, time limits, measurement semantics, and in some cases technical obligations. For a sparse niche app, opening pre-order/pre-registration too early can consume a finite launch window before the product, Store promise, localization, community surfaces, and first-use path are ready.

Canonical principle:

`pre-launch Store availability ≠ launch readiness`

Use a platform pre-launch commitment only when the release can plausibly occur inside the platform window and the first-use experience is already close enough to production that acquired intent will not be wasted.

## Authoritative platform facts

### Apple App Store pre-order

Apple permits free and paid apps to be offered for pre-order in a country/region where the app has not yet been released. For a first release, the download release date is set 2–180 days in the future. If the app is already available in at least one territory and pre-order is being used for a new territory, the corresponding window can extend to 365 days.

On release, pre-order customers receive a notification and the app automatically downloads to the device used to pre-order; eligible other devices may also receive it when automatic downloads are enabled.

Apple App Analytics now exposes net pre-orders (placed minus canceled), pre-order conversion rate, and downloads resulting from pre-orders. Pre-order metrics appear only after at least five individual users have pre-ordered. After launch, fulfilled pre-orders flow into download reporting.

Implications:
- gross pre-orders are not net committed demand;
- `no visible pre-order metric` can mean threshold suppression, not zero;
- fulfilled pre-orders later entering download reporting means pre-order and download counts must not be naively summed as independent acquisitions;
- pre-order volume is a commitment-stage metric, not proof of first useful value.

### Google Play pre-registration

Google Play pre-registration campaigns can run for at most 90 days; the app must then launch to production. Pausing the campaign does not stop that 90-day clock. Google recommends testing first and having declarations/configuration close to intended production before starting.

At launch, pre-registered users receive a Play notification; eligible devices may auto-install. Users who already have a test version installed do not receive the normal launch notification. Test/pre-registration overlap has additional notification and eligibility semantics, so tester populations must not be treated as ordinary pre-registrants.

Google's pre-registration metrics include:
- `Pre-registered users`: users who pre-registered;
- `Conversions`: pre-registered users who installed within 14 days after the app became available to them. This includes users who installed via early access or other pre-launch testing methods.

Therefore Google's pre-registration `Conversions` are not equivalent to Apple's pre-order conversion semantics and are not a pure production-launch install metric.

Google permits at most two apps/games to be in pre-registration simultaneously. It recommends a complete localized Store listing and preparation of owned/promotional channels before activation.

Pre-registration rewards add a materially different obligation: Google requires a dedicated active one-time product and technical reward-consumption handling; failure to deliver promised rewards can lead to suspension. For the current ad-funded, non-IAP-focused niche-app business, rewards are not a default growth tactic.

## CQ0–CQ5 Pre-launch Commitment Integrity Gate

### CQ0 — Release-state identity
Record platform, territory, app/version, current test/review state, intended production date, and whether this is first launch or territory expansion.

### CQ1 — Promise readiness
The Store page, screenshots, description, localization, privacy/support surfaces, and claims must describe the build that will actually reach users. Do not use pre-launch pages to advertise speculative roadmap items as launch functionality.

### CQ2 — Window viability
Verify the platform clock before activation:
- Apple first-release pre-order: 2–180 days;
- Apple new-territory pre-order after an existing release: up to 365 days under current rules;
- Google Play pre-registration: maximum 90 days, with pause not stopping the clock.

If release confidence is too low for the relevant window, do not activate merely to accumulate sign-ups.

### CQ3 — Delivery/test integrity
Preserve the distinction among pre-order/pre-registration, test-track participation, launch notification, auto-download/auto-install eligibility, and actual first open. A platform delivery mechanism is not proof the user experienced the product.

### CQ4 — Metric identity
Store raw platform semantics. At minimum:
`platform | territory | commitment state | placed/sign-up | cancellation/net status | metric threshold/suppression | launch notification eligibility | auto-delivery eligibility | install/download window | test-track overlap | source | date`

Never normalize Apple's net pre-orders/pre-order conversion and Google's 14-day pre-registration conversions into one raw `prelaunch CVR` field.

### CQ5 — Launch-value validation
The terminal launch question is not how many people committed before release. Follow the chain:

`qualified pre-launch intent → net/eligible commitment → launch delivery/notification → install/download → first useful value → repeated useful value`

If the commitment cohort cannot be connected to useful product value without inventing attribution, preserve the observability gap.

## Evidence boundaries

Preserve these distinctions:

- `pre-order/pre-registration ≠ install`
- `install/automatic delivery ≠ first open`
- `first open ≠ first useful value`
- `gross Apple pre-orders ≠ net pre-orders`
- `Apple pre-order conversion ≠ Google pre-registration conversion`
- `Google pre-registration conversion ≠ pure production-launch install`
- `campaign paused ≠ Google 90-day clock paused`
- `tester ≠ ordinary pre-registrant`
- `five Apple pre-order users ≠ sufficient launch-demand evidence`
- `pre-launch commitment volume ≠ product-market fit`
- `platform permits activation ≠ release is ready`

## Zero-cost operating framework

A pre-launch Store commitment should be the end of launch preparation, not the beginning of it.

Before activation, require:
1. credible release date/window;
2. production-near build and test path;
3. truthful localized Store surface;
4. support/privacy/domain readiness;
5. community/owned surfaces prepared to route qualified people rather than generic traffic;
6. first-use path and first useful value defined;
7. measurement contract for commitment → launch → value;
8. rollback/communication plan if the release date changes.

For sparse professional audiences, delaying activation until these are ready is generally more information-efficient than maximizing the number of days the Store button is visible.

## MintTap application

MintTap is already a live product, so first-launch pre-order/pre-registration is not the immediate growth lever in existing territories. Treat these mechanisms as relevant only to a genuinely new territory/platform state where the platform allows them. Do not reinterpret historical installs as pre-launch commitments.

Any future territory expansion should preserve territory-specific demand, localization, claim, Store, and downstream-value evidence rather than using global pre-order counts as proof of demand.

## LogMate application

LogMate is the stronger use case. Do not start Apple pre-order or Google Play pre-registration simply because Store assets become available.

Recommended readiness order:
`release-confidence threshold → production-near test build → Store/support/privacy truth → pilot-native launch surfaces → first-use/value instrumentation → CQ gate → activate commitment window`

Google's 90-day clock makes premature activation particularly costly. If LogMate's import/onboarding/Previous Total/core logbook path is still materially changing, pre-registration should remain off. Apple provides a longer first-release window, but that is not a reason to use it as an indefinite waitlist.

Pre-registration rewards should not be introduced merely to raise sign-up volume. They add product/IAP implementation and delivery obligations and are poorly aligned with the current ad-funded, non-intrusive business model unless a future product-specific case independently justifies them.

## Reusable registry

Create one record per platform × territory launch commitment:

`app | platform | territory | commitment type | activation date | deadline/release date | first launch/expansion | Store version | localization | test-track overlap | placed/sign-ups | cancellations/net | threshold/suppression | source | launch notification rule | auto-delivery eligibility | install/download definition/window | first useful value definition | repeated-value observation | date changes | anomalies`

Do not overwrite prior dates or outcomes; preserve changes as launch evidence.

## Decision

Pre-order and pre-registration are **commitment-delivery systems**, not vanity waitlists. Their value is highest when a release-ready niche product can convert concentrated specialist intent into a reliable launch-day handoff and then into first/repeated useful value. Activation before release confidence wastes a finite platform window and makes the resulting commitment count harder, not easier, to interpret.

## Sources

- Apple Developer, “Publish for pre-order,” App Store Connect Help, accessed 2026-09-22.
- Apple Developer, “Pre-Orders,” App Store Connect Analytics Help, accessed 2026-09-22.
- Apple Developer, “Promoting your apps,” accessed 2026-09-22.
- Google Play Console Help, “Build awareness for your apps with pre-registration,” accessed 2026-09-22.
