# Research 232 — Apple Accessibility Labels, Search Discovery & Claim Integrity

Date: 2026-09-24
Status: validated from current Apple Developer / App Store Connect documentation

## Why this is a marketing-system issue

Apple's Accessibility Nutrition Labels are not merely compliance metadata. On iOS/iPadOS/macOS/tvOS/visionOS/watchOS 26+, they appear on App Store product pages, and Apple states that accessibility features included in a user's search query can make apps declaring support for those features more relevant in search results. This creates a zero-cost discovery surface, but only for support that is actually verified.

Primary sources:
- https://developer.apple.com/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels
- https://developer.apple.com/help/app-store-connect/manage-app-accessibility/manage-accessibility-nutrition-labels
- https://developer.apple.com/app-store/submitting/

## Validated platform facts

Apple currently exposes labels for VoiceOver, Voice Control, Larger Text, Dark Interface, Differentiate Without Color Alone, Sufficient Contrast, Reduced Motion, Captions, and Audio Descriptions, subject to device applicability.

Labels are device-specific. If support information is not supplied for a supported device, the Accessibility section can still appear and indicate that support has not yet been declared. Developers can also publish an app-specific accessibility URL on the product page.

Most importantly for ASO, Apple explicitly says users can include Accessibility Nutrition Label features in search queries (for example, apps with VoiceOver or Larger Text), and apps that have indicated the corresponding support will be considered more relevant for those searches.

This is not permission to treat accessibility metadata as keywords. Apple requires the app's common tasks to be completable using the claimed accessibility feature before support is declared. Accessibility-affecting bugs serious enough to invalidate that standard mean the feature should not be claimed. Answers must remain accurate and current.

Apple says reporting is voluntary initially but will become required over time for submission of new apps and updates; the current documentation reviewed here does not provide a specific future enforcement date. Do not invent one.

Published accessibility answers/updates take effect immediately in App Store Connect but may take up to 24 hours to become visible to all users.

## ER0–ER5 Accessibility-Claim & Search-Discovery Integrity Gate

ER0 — Surface identity
- Record platform/device family, OS generation, Store territory and current App Store Connect accessibility state.

ER1 — Common-task identity
- Define the app's actual common/core tasks before evaluating a label. Marketing cannot redefine a peripheral task as the common task merely to obtain a label.

ER2 — Feature verification integrity
- Test every common task against the exact Apple evaluation criterion for each claimed feature and supported device family.
- A partially accessible flow is not a supported label if a common task cannot be completed under Apple's criterion.

ER3 — Metadata/claim integrity
- Publish only verified labels; keep evidence/version/build/device records.
- Re-audit after UI/navigation/component changes or accessibility-affecting defects.
- Unknown/not-yet-tested must remain unknown, not be converted into a marketing claim.

ER4 — Discovery interpretation integrity
- Treat accessibility-aware search relevance as a downstream benefit of genuine accessibility, not an ASO hack.
- `label support ≠ ranking guarantee`; `search relevance ≠ install`; `install ≠ specialist value`.
- Do not manufacture accessibility copy or labels from presumed keyword demand.

ER5 — Qualified-value decision
- Evaluate whether accessible discovery leads the relevant user to first and repeated specialist value without degraded task completion.
- Accessibility work is product quality first; zero-cost discoverability is a legitimate secondary benefit.

## MintTap application

Create a device-by-common-task matrix for portfolio setup/import where applicable, viewing holdings/distributions, interpreting ROC/tax-related information, navigation/settings and other genuinely common tasks. Audit VoiceOver, Larger Text, sufficient contrast, differentiation without color alone, dark interface and other applicable criteria against the actual production build before declaring support.

Financial charts, gain/loss states, distribution/tax indicators and other information must not be assumed accessible because the surrounding UI is. In particular, a color-coded state cannot support a 'Differentiate Without Color Alone' claim unless the actual common-task experience meets Apple's criterion.

Do not add phrases such as 'VoiceOver-friendly YieldMax tracker' to acquisition copy until the production audit supports the claim. If validated, the label itself becomes a truthful zero-cost App Store discovery signal for users explicitly seeking that accessibility capability.

## LogMate application

Accessibility validation should be incorporated before launch rather than retrofitted as ASO. Candidate common tasks include onboarding/previous total, adding/editing a flight, reviewing totals/logbook, import/validation, export and settings where those are in the release scope. Test separately for iPhone and iPad where supported because Apple labels are device-specific.

Pilot-professional density is not justification for small text, color-only state, inaccessible custom controls or incomplete VoiceOver traversal. Conversely, do not claim a label simply because standard Flutter/iOS components appear to support it; verify end-to-end common-task completion on the shipping build.

## Reusable company rule

Accessibility metadata joins the Store evidence registry as a versioned product claim:

`build/device → common-task inventory → Apple criterion → test evidence → declared label → Store/search exposure → qualified install → accessible first specialist value → repeated specialist value`

Never optimize the declaration before optimizing and validating the underlying experience.

## Next evidence work

1. Inspect MintTap's actual App Store Connect Accessibility state and production build; build the first common-task × device × feature matrix.
2. Add the same matrix to LogMate launch-readiness evidence before App Store submission.
3. Record accessibility URL state and ensure any future URL is app-specific, current, and candid about unsupported areas.
4. Revisit Apple documentation for a concrete mandatory-submission date only when Apple publishes one; current official material says the requirement will become mandatory over time but does not establish the date reviewed here.
