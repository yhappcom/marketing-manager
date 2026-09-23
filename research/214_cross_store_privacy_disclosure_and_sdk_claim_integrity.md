# Research 214 — Cross-Store Privacy Disclosure & SDK Claim Integrity

Validated: 2026-09-23

## Why this matters
For an ad-supported niche app, privacy disclosure is not merely legal/policy paperwork. It is part of the Store trust surface and release reliability. A marketing team must not optimize acquisition into a Store page whose privacy claims, shipped SDK behavior, privacy policy, consent surfaces, and platform declarations disagree.

This research does not attempt to harmonize Apple and Google terminology. Their disclosure systems have different schemas and semantics. The operating requirement is evidence-backed parity with the same shipped product behavior, not identical labels.

## Authoritative findings

### Apple
- A Privacy Policy URL is required for all apps.
- App Store Connect privacy answers inform the public App Store product page.
- The developer is responsible for keeping answers accurate and current when data practices change.
- Declarations must include relevant practices of third-party partners whose code is integrated into the app.
- Apple says app-level answers should comprehensively represent supported platforms; if collection differs by platform, the declaration must still accurately cover the practices.
- Privacy-policy information can be localized. Changes to privacy-policy URLs release with the next app version.

Sources:
- https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy
- https://developer.apple.com/help/app-store-connect/reference/app-information/app-privacy
- https://developer.apple.com/app-store/submitting/

### Google Play
- Google Play's User Data policy requires transparency about access, collection, use, handling, and sharing of user data.
- Third-party SDK/code does not outsource the developer's responsibility: the developer must ensure third-party code and its data practices comply with Play policy.
- Therefore an advertising, analytics, crash, attribution, authentication, or other SDK change can be a disclosure change even when the app's own first-party feature code did not change.

Source:
- https://support.google.com/googleplay/android-developer/answer/17517561

## Core operating principle
`same binary behavior ≠ same platform wording`, but:

`shipped behavior → SDK/data-flow evidence → platform-specific declaration → privacy policy → consent/disclosure surface → Store claim`

must remain internally consistent.

Never infer Apple disclosure fields mechanically from Google Data safety fields, or vice versa. Map both independently from the shipped data-flow inventory.

## DZ0–DZ5 Cross-Store Privacy Disclosure & SDK Claim Integrity Gate

### DZ0 — Shipped-state identity
Record app version/build, platform, territory/relevant configuration, SDK inventory/version, consent configuration, and effective date. Do not audit an abstract 'current app'.

### DZ1 — Data-flow evidence integrity
For each first- and third-party component, maintain an evidence-backed tuple:
`data category | source | destination | purpose | first/third party | persistence | user linkage | consent/choice dependency | platform/version`.
Unknown behavior remains unknown; SDK documentation alone is not proof of runtime behavior.

### DZ2 — Platform-declaration integrity
Map the data-flow inventory independently to Apple App Privacy and Google Play's applicable declarations/policies. Preserve each platform's own definitions. Do not force apparent cross-store symmetry.

### DZ3 — Policy/consent continuity
Check Store declarations against the public privacy policy, in-app disclosure/consent/choice surfaces, account/data-deletion mechanisms where applicable, and actual shipped behavior. A correct Store form with a stale policy is not integrity.

### DZ4 — Marketing-change guardrail
Before scaling Store optimization, Reddit/blog/social distribution, or ad monetization, check whether a release or remote configuration changed SDK/data behavior. If disclosure integrity is unresolved, freeze claims/scaling that depend on the affected behavior; do not hide the mismatch behind acquisition growth.

### DZ5 — Release/monetization decision
Only treat privacy state as verified when versioned evidence closes the chain from shipped behavior through declarations and user-facing policy/choice surfaces. Re-open the gate after SDK additions/upgrades, ad/analytics changes, authentication changes, new data-backed features, consent changes, or platform-policy/schema changes.

## MintTap application
MintTap's ad-supported model makes SDK governance a marketing dependency. Before ad-revenue optimization, reconstruct the production iOS/Android SDK and data-flow inventory, including advertising, analytics/crash tooling, Firebase services, authentication/user storage, and any external data/service calls actually present in the shipped builds. Then compare independently against Apple App Privacy, Google Play declarations, minttap.app privacy policy, and in-app consent/choice behavior.

Do not claim that an SDK collects a particular field merely because the vendor SDK can collect it; verify actual configuration/runtime evidence. Conversely, do not omit a flow because MintTap itself does not directly read the data if embedded third-party code handles it.

A privacy-label mismatch is not solved by softer Store copy. It is a release/trust integrity issue.

## LogMate application
LogMate should establish the versioned data-flow inventory before launch rather than reverse-engineering it after Store submission. Offline/local-first behavior must be described from actual implementation evidence; 'offline-first' must not be translated into 'no data collected' if crash, analytics, ads, sync, import, backup, or other services transmit data.

Do not introduce monetization SDKs merely to prepare revenue before the product has a justified ad surface. Any later monetization integration reopens DZ1–DZ5.

## Reusable release artifact
Maintain one privacy evidence packet per production release:

`release/build | SDK inventory+versions | data-flow tuples | Apple declaration snapshot/date | Google declaration snapshot/date | privacy-policy version/date | consent/choice version | deletion path if applicable | unresolved unknowns | reviewer | decision`.

This packet is a release input, not a marketing retrospective.

## Canonical rules added
- `privacy disclosure ≠ legal-only task`
- `SDK integration ≠ outsourced disclosure responsibility`
- `same behavior ≠ same Apple/Google label semantics`
- `platform-form parity ≠ truthful behavior parity`
- `SDK capability ≠ configured runtime collection`
- `no first-party collection ≠ no third-party collection`
- `offline-first ≠ no transmitted data`
- `Store trust claim ≠ verified until shipped behavior, declarations, policy and consent surfaces reconcile`

## Next production evidence
For MintTap, capture the current production iOS and Android build identifiers; full SDK/version inventory; runtime/configuration evidence for data flows; Apple App Privacy declaration; Google Play declaration state; current privacy-policy version/localizations; in-app consent/privacy-choice behavior; and any account/data-deletion path that applies. Reconcile before treating privacy eligibility as satisfied for ad optimization.
