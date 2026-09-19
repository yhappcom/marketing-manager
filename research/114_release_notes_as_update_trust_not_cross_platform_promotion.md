# 114 — Release Notes as Update Trust, Not Cross-Platform Promotion

Validated: 2026-09-19

## Canonical principle

**Release notes are version-specific trust metadata. Their marketing latitude is platform-specific: Apple explicitly permits excitement/CTA language in What’s New, while Google Play explicitly says release notes must not be promotional or solicit user actions. Never syndicate one release-note template across both stores.**

This is a zero-cost lifecycle surface, but it is not free advertising inventory. Its first job is to tell an installed or evaluating user what materially changed in the version they can receive.

## Authoritative findings

### Apple App Store
Apple’s current product-page guidance states that What’s New communicates changes when an app is updated and appears on the product page and Updates tab. Apple recommends telling users when a feature or bug fix resulted from feedback, ordering new features/content/functionality by importance, and adding call-to-action messaging that gets users excited about the update.

Source: Apple Developer, “Creating Your Product Page” — https://developer.apple.com/app-store/product-page/

Operational consequence: Apple What’s New can legitimately combine factual version changes with restrained re-engagement language, provided the claim is true for that shipping version.

### Google Play
Google Play’s current release guidance requires localized release notes and defines their purpose as informing users about recent updates. It explicitly says: **do not use release notes for promotional purposes or to solicit user actions.** Release notes support up to 500 Unicode characters per language.

Google also exposes release-level details including installs, updates, performance issues and ratings compared with previous releases. This makes the release an analyzable product cohort, but does not establish that release-note wording itself caused those outcomes.

Source: Google Play Console Help, “Prepare and roll out a release” — https://support.google.com/googleplay/android-developer/answer/9859348

A second operational detail: Google’s managed-publishing documentation lists updates to the release-notes section among exceptions to changes held by managed publishing. Treat release-note editing as its own publishing surface rather than assuming it behaves like Store-listing creative changes.

Source: Google Play Console Help, “Control when app changes are reviewed and published” — https://support.google.com/googleplay/android-developer/answer/9859654

## Critical platform asymmetry

A shared iOS/Android changelog can remain the internal source of truth, but public rendering must fork:

- **Apple:** factual delta + user consequence + optional restrained CTA/excitement permitted by Apple guidance.
- **Google Play:** factual delta + user consequence only; no promotional copy and no solicitation.

Therefore a phrase acceptable for Apple such as “Try the new ROC adjustment workflow” should not automatically be copied into Google Play release notes. Google’s rule is stricter.

## AF0–AF5 Release-Note Evidence Gate

### AF0 — deceptive / policy-incompatible
- claims a feature or fix that is not in the served build;
- evergreen promotion masquerading as a changelog;
- Google Play release notes contain promotional language or solicit actions;
- security/privacy/data-impacting changes are materially misrepresented.

### AF1 — generic noise
Examples: “Bug fixes and improvements”, “Performance improvements” for every release, or copied text that gives a specialist no meaningful version information.

### AF2 — factual but unmanaged
The notes roughly match the release, but there is no mapping from shipped change to affected specialist job, locale, evidence owner, or Store-specific rendering rule.

### AF3 — minimum deliberate lifecycle readiness
Require all of:
1. notes map to the actual shipping version;
2. material user-visible changes are ordered by specialist consequence, not engineering effort;
3. fixed specialist failures identify the user-visible outcome without exposing sensitive implementation/security detail;
4. Apple and Google renderings follow their different policy/guidance boundaries;
5. supported release-note locales are intentionally maintained;
6. notes do not overstate unresolved or partial behavior;
7. each material statement has an internal release/change owner.

### AF4 — closed-loop release communication
AF3 plus observed release-level product evidence: affected-job failure/support themes, update adoption where observable, performance/regression evidence, and useful-return impact. Do not attribute a change in these metrics to wording without a valid experiment.

### AF5 — reusable niche-app system
A common internal changelog schema reliably produces policy-correct Apple/Google renderings, localized terminology, support mappings and post-release evidence for multiple professional apps.

## Internal changelog schema

For every material release item record:

`version → platform/build → shipped date → specialist job → change type {feature|fix|behavior|compatibility|privacy/data|monetization} → prior user problem → observable new behavior → limitations → source issue/commit → owner → support family → locales → Apple wording → Google wording → AF-class`

The internal record may be technical. Store output should be concise and user-facing.

## MintTap application

Prioritize release-note items by investor tracking consequence, for example:
- corrected reverse-split quantity/cost-basis handling;
- ROC/tax-adjustment behavior changes;
- distribution calculation corrections;
- portfolio persistence or exchange-rate fixes;
- material ad-placement changes that affect workflow.

Do not turn routine YieldMax market events into app release notes unless the app itself changed. “CONY distribution announced” is not a MintTap software release delta.

For financial-calculation fixes, avoid vague “improved accuracy” if the actual corrected behavior can be stated safely. Conversely, do not publish implementation details that create security/privacy risk. Link recurring user-visible failures into AE support taxonomy and AB quality evidence.

## LogMate application

High-value release-note hierarchy should follow professional record integrity:
1. record loss/corruption or persistence fixes;
2. totals/calculation corrections;
3. backup/restore/offline/sync behavior;
4. import/duplicate-resolution behavior;
5. manual-entry workflow improvements;
6. cosmetic changes.

A pilot should be able to determine whether an update addresses a previously relevant workflow without reading a generic engineering changelog.

## Measurement rules

Do not use release-note impressions/copy as a proxy for product improvement. The causal chain is:

`shipping delta → accurate version communication → update/return opportunity → affected specialist job → useful return`

Google release-level metrics can help compare cohorts, but they do not isolate release-note-copy effects. Apple What’s New visibility similarly does not prove reactivation causality.

## Zero-cost operating method

1. Generate one evidence-backed internal changelog from the release candidate.
2. Rank items by user consequence.
3. Remove non-user-visible engineering noise unless it changes compatibility, privacy, safety, performance, or trust.
4. Render Apple and Google variants separately.
5. Localize specialist terminology, not merely generic prose.
6. Publish only claims valid for the served build.
7. Feed recurring fixed failures back into support, product-quality, review-theme and useful-return evidence.

## What this does not claim

- No evidence was established that richer release notes mechanically improve Store search ranking.
- No evidence was established that Apple CTA wording necessarily increases updates or retention.
- No evidence was established that Google release-level outcome changes are caused by release-note wording.
- Release notes do not replace a support page, full changelog, privacy disclosure, in-app migration notice, or safety-critical communication.

## Next validation

Audit the last several MintTap production releases on both stores. For each version compare actual shipped changes with Apple What’s New and Google Play release notes, identify generic/copy-pasted notes and cross-platform policy mismatches, then assign AF-class. Do not infer Console text that has not been observed.