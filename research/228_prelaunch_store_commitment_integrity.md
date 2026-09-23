# Research 228 — Prelaunch Store Commitment Integrity

Validated: 2026-09-24

## Purpose

Define when Apple App Store pre-order and Google Play pre-registration are useful for a zero-cost niche-app launch, without mistaking Store commitment for demand creation, installs, activation, or retention.

## Authoritative platform facts

### Apple App Store pre-order

Apple currently permits pre-order in a country or region where the app has not yet been released. For a first release, the release date is set 2–180 days in the future. If an app is already available in at least one country/region, a pre-order for a new country/region may use a 2–365 day window. Once an app has been released in a location, that location cannot later be returned to pre-order. On release, customers are notified and the app can automatically download to eligible devices when applicable.

Operational consequence: the long maximum window is capacity, not a recommendation to expose an unfinished product early. The product page and promise become public launch assets and should be stable enough to survive the commitment period.

Source: Apple, App Store Connect Help, “Publish for pre-order” (validated 2026-09-24).

### Google Play pre-registration

Google currently limits a pre-registration campaign to 90 days before production launch. Google strongly recommends testing on a test track first and recommends that declarations/configuration be close to intended production state. Up to two apps/games may be in pre-registration at once. Uploaded AAB manifests determine supported devices for pre-registration. Country eligibility uses the country/region in which the user is registered on Google Play, not physical location. A country added after campaign start receives its own 90-day window beginning when pre-registration is first enabled there.

Google reports sign-ups, supported devices, countries/regions and per-country status. If an app is not launched within 90 days in a country, Google states that the pre-registration campaign is terminated in all countries and a new pre-registration campaign cannot be started. After production launch, pre-registered users receive a Play Store notification and eligible devices can auto-install the app.

Operational consequence: Google pre-registration is a release-clock commitment, not a generic waitlist. It should begin only when product, policy declarations, device compatibility and release operations can credibly meet that clock.

Source: Google Play Console Help, “Build awareness for your apps with pre-registration” (validated 2026-09-24).

## Core distinction

`pre-order / pre-registration ≠ demand creation`

The Store feature converts some already-existing awareness or intent into a platform-native launch commitment. It does not prove that the user will install successfully, reach first specialist value, or repeat that value.

Preserve the funnel:

`qualified prelaunch awareness → Store-page exposure → pre-order/pre-registration → release eligibility/device compatibility → notification/auto-install opportunity → successful install/open → first specialist value → repeated specialist value`

Do not collapse the stages.

## EN0–EN5 — Prelaunch Store Commitment Integrity Gate

### EN0 — Platform and release-state identity
Record platform, territory, current release state, first-release versus territory expansion, campaign start, deadline, review state and applicable Store constraints.

### EN1 — Demand-source identity
Identify where qualified prelaunch demand came from: community contribution, owned web, direct professional referral, Store discovery, social content, testing cohort, or other evidenced source. Registration count without source/context is not a demand-quality measure.

### EN2 — Launch-readiness integrity
Before activation, require a credible release candidate/test state, truthful Store claims/assets, support/privacy surfaces, declarations, supported-device evidence and an operationally believable launch date. Maximum campaign duration is not a reason to start early.

### EN3 — Commitment-funnel integrity
Measure commitment separately from install/open, first specialist value and repeat value. Pre-registration/pre-order conversion is an intermediate event, not activation or retention.

### EN4 — Territory/deadline integrity
Version territory eligibility and deadline semantics. For Google, preserve each territory’s activation date and 90-day clock plus device-support denominator. For Apple, distinguish first-release 180-day constraints from new-territory 365-day constraints. Never interpret aggregate registrations without territory/release-state context.

### EN5 — Qualified-launch decision
Use the feature only when it improves launch coordination for an already evidenced niche audience without forcing premature public commitments. Judge success by qualified downstream specialist value, not the registration headline.

## MintTap

MintTap is already released in its existing territories, so pre-order/pre-registration is not a reactivation tactic there. Do not substitute these mechanisms for current priorities: Store search-intent evidence, truthful custom-page routing, YieldMax community utility, qualified acquisition, first value and repeated portfolio/distribution/ROC/tax value.

If MintTap later expands into a previously unreleased Apple territory, Apple pre-order can be evaluated as a territory-launch mechanism, but only with evidenced local demand and localization/readiness. Treat it as a new-territory launch operation, not a general growth campaign.

## LogMate

LogMate is the stronger future candidate, but only near launch. Pilot audience specificity makes a small, qualified commitment cohort potentially useful, while also making vanity registration counts especially misleading.

Do not activate Google pre-registration until the release candidate/test track, supported-device range, Store claims/assets, privacy/support surfaces, declarations and launch date are sufficiently stable to sustain the 90-day clock. Do not use Apple’s longer 180-day first-release window as permission to publish an immature promise.

Recommended evidence packet before activation:

`platform/territory → release/test state → audience evidence → Store-page readiness → declarations/privacy/support readiness → supported-device evidence → campaign start/deadline → registrations → install/open → first pilot-logbook value → repeated specialist value`

## Reusable company rule

For future niche apps, use Store-native prelaunch commitment only as a **commitment compressor for evidenced demand**. Do not use it as a substitute for audience discovery, positioning validation, product readiness or retention evidence.

A campaign is justified when:

1. qualified niche demand already exists;
2. the Store promise is truthful and stable;
3. release operations can satisfy the platform clock;
4. device/territory eligibility is understood;
5. downstream activation and repeat-value measurement is ready.

Otherwise use reversible prelaunch mechanisms—testing cohorts, owned-web information, permitted community participation and direct professional feedback—until readiness is sufficient.

## Unresolved evidence

- LogMate target launch territories and launch-confidence threshold.
- LogMate supported-device envelope at release candidate stage.
- Actual pilot prelaunch demand sources and qualified cohort size.
- Whether a Store-native commitment stage improves downstream first/repeat specialist value versus a smaller testing/owned cohort.
- Any future MintTap territory expansion where Apple pre-order becomes relevant.
