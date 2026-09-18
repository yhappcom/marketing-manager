# 092 — Store Trust-Surface Parity Contract

Validated: 2026-09-18

## Canonical principle

**Trust claims are product claims. Keep every public trust surface synchronized with the shipped app.**

For specialist utilities, Store conversion is not only icon/title/screenshots. A prospective user can inspect privacy, developer identity/contact, accessibility, and support information before or after install. These surfaces therefore belong to acquisition quality and retention, not merely compliance.

## First-party findings

### Apple
- App Store privacy details are required for submission/update and must include practices of third-party partners whose code is integrated. The resulting privacy information appears on the product page.
- Apple requires a privacy-policy URL for all apps. App privacy answers must remain accurate and current; the developer is responsible for updating them when practices change.
- Apple now exposes Accessibility Nutrition Labels on supported OS versions. If the developer does not provide accessibility information for a device, the product-page section can state that support has not been indicated. An app-specific accessibility URL can provide additional details and limitations.
- The App Store Support URL is required and must lead to actual contact information so users can reach the developer about issues, feedback, and feature requests. Marketing URL is a separate surface.

### Google Play
- Every published app must maintain a clear and accurate Data safety section; this includes data handled by third-party SDKs. The developer is responsible for accuracy and freshness, and the declaration should be consistent with the privacy policy.
- Google explicitly treats SDK behavior as the developer's responsibility under User Data policy.
- Store-listing contact details are public. A support email is required to publish/update an app; website and phone can also be supplied. Developer-account identity/contact information has separate verification requirements.

## New operational distinction: persuasion vs trust evidence

Do not optimize trust surfaces as promotional copy.

A screenshot can select and frame a truthful benefit. A privacy declaration, accessibility declaration, support contact, developer identity, or data-safety statement must instead describe reality. Their job is **decision-risk reduction**, not conversion inflation.

This creates two separate Store layers:

1. **Persuasion layer** — title/subtitle/short description/screenshots/video/intent-routed pages.
2. **Trust-evidence layer** — privacy/data safety, developer identity/contact, support, accessibility, and any linked explanatory pages.

A high-converting persuasion layer cannot compensate for an inaccurate trust-evidence layer.

## T0–T5 Trust-Surface Parity Gate

### T0 — False or materially misleading
A public trust statement conflicts with the shipped app, current SDK behavior, support reality, or known accessibility behavior.

**Action:** release/growth blocker. Correct reality/declaration before amplification.

### T1 — Compliance artifact only
Required fields exist, but links are stale/generic, support is not operationally owned, or declarations have not been reconciled with the current build/SDK set.

**Action:** not growth-ready.

### T2 — Point-in-time accurate
Store declarations appear accurate for the current release, but there is no durable owner/change trigger/revalidation mechanism.

**Action:** acceptable baseline, not reusable operations.

### T3 — Cross-surface parity
Current shipped behavior, SDK inventory, privacy policy, Apple privacy answers, Google Data safety, support/contact surfaces, and claimed accessibility support agree materially.

**Action:** minimum intentional acquisition state.

### T4 — Release-coupled trust operations
Changes to SDKs, analytics/ads, permissions, account/data flows, support routes, or accessibility behavior trigger a trust-surface review before release. Locale-specific trust/support pages are checked where intentionally marketed.

**Action:** scalable specialist acquisition state.

### T5 — Measured trust reliability
Parity survives repeated releases; trust/support incidents are classified, corrected, and recurrence declines. Trust surfaces remain accurate without depending on memory or emergency policy cleanup.

**Action:** reusable company pattern.

## Release delta contract

Before each public release, ask whether the build changed any of these:

- analytics/ad/attribution/crash SDKs;
- data collection, sharing, retention, deletion, or account behavior;
- permissions or sensitive-data access;
- ad personalization/consent path;
- external service/API integration;
- support email/site/contact path;
- accessibility behavior or limitations;
- localization that changes how privacy/support/accessibility claims are understood.

If yes, require reconciliation against both Store declarations and linked first-party pages. Do not assume an unchanged privacy-policy file means unchanged data practice.

## MintTap application

MintTap handles financially consequential portfolio information and uses advertising, so trust-surface drift has disproportionate cost even when the app does not provide investment advice.

Audit sequence:
`production build/SDK inventory → actual data flows → Apple privacy → Google Data safety → privacy policy → support/contact → accessibility claims → locale parity → T-class`

Specific risks to verify rather than infer:
- whether ad/analytics SDK behavior is fully represented;
- whether any portfolio/transaction data leaves the device/backend boundary described to users;
- whether deletion/retention wording matches actual implementation;
- whether support routes on Store and minttap.app are live and owned;
- whether accessibility claims are evidence-backed rather than aspirational.

Do not advertise "privacy-first", "secure", "accessible", or equivalent claims unless separately substantiated. Required Store declarations are not evidence for broader superlative marketing claims.

## LogMate application

Before launch, LogMate should reach T3 alongside its production persistence/backup model. Pilot logbook data is professionally important; ambiguity over local storage, backup, sync, import, deletion, or device transfer can damage trust before retention is measurable.

PWA/native differences must not be collapsed into one privacy/support promise if their actual data flows differ. Accessibility claims should reflect the shipped surface and device, not planned design intent.

## Zero-cost growth implication

Trust-surface maintenance is zero-media-cost acquisition infrastructure. It does not create demand, but it prevents qualified niche demand from encountering contradictory evidence at the highest-intent point.

Do not report a conversion lift from this framework without controlled evidence. The validated claim is narrower: platform-required trust surfaces are user-visible and must be accurate; therefore parity is a prerequisite for credible acquisition, not a proven ranking tactic.

## Measurement ledger

`app version → SDK/data-flow delta → Store trust declarations → linked policy/support/accessibility pages → locale → parity incident → support/review issue family → correction release/date → recurrence → T-class`

Avoid collecting unnecessary user-level personal data merely to measure trust. Most parity controls are release/configuration-level.

## Stop rules

Stop acquisition amplification and correct before proceeding when:
- Store privacy/Data safety materially conflicts with current behavior;
- a required support/privacy URL is dead or does not correspond to the app/developer;
- a third-party SDK introduces undeclared collection/sharing;
- accessibility support is claimed without current evidence;
- localization creates a materially different privacy/support meaning.

## Sources — authoritative, checked 2026-09-18

- Apple Developer — Submitting to the App Store: https://developer.apple.com/app-store/submitting/
- Apple App Store Connect Help — Manage app privacy: https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy
- Apple App Store Connect Help — Platform version information (Support URL / Marketing URL): https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information
- Apple App Store Connect Help — Accessibility Nutrition Labels: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels
- Google Play Console Help — User data: https://support.google.com/googleplay/android-developer/answer/10144311
- Google Play Console Help — SDK requirements: https://support.google.com/googleplay/android-developer/answer/13323374
- Google Play Console Help — View/manage developer account information: https://support.google.com/googleplay/android-developer/answer/13634081

## Next validation

1. Audit MintTap's live production SDK/data-flow inventory against both Store declarations.
2. Verify support/privacy URLs and ownership from Store through minttap.app.
3. Determine whether Apple accessibility declarations have been populated and evidence-test any claimed features.
4. Add a release-delta checklist to engineering handoff only after actual release workflow is inspected; do not invent ownership.
