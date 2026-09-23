# Research 233 — Google Play Accessibility Tags & Claim Integrity

Date: 2026-09-24
Status: Validated from current Google/Android authoritative sources

## Why this research exists
Research 232 established Apple's Accessibility Nutrition Labels as both a product-truth and potential App Store search-relevance surface. Google Play must not be assumed equivalent. This research validates the current Google Play mechanism separately and converts it into an operating rule for MintTap, LogMate, and future niche apps.

## Validated findings

### 1. Google Play uses accessibility tags, not Apple's declaration model
Google Play Console currently allows developers to select accessibility-related tags among an app's maximum five tags. Current examples include:
- Screen reader-friendly
- Visual assistance
- Hearing assistance
- Learning disability
- Motor assistance
- Accessible communication

Google states that categories and tags help users discover the apps most relevant to them. Accessibility tags specifically signal compatibility with assistive technologies.

Source: Google Play Console Help, “Choose a category and tags for your app or game,” reviewed 2026-09-24.
https://support.google.com/googleplay/android-developer/answer/9859673?hl=en-GB

### 2. Tag capacity is scarce metadata
An app can have at most five tags. Therefore an accessibility tag consumes the same finite tag budget used to communicate other highly relevant product characteristics. The correct objective is not to maximize accessibility-tag count. It is to choose the five tags that most truthfully and strongly characterize the shipped app.

Google explicitly instructs developers to choose only tags strongly associated with the app and says that, to a user unfamiliar with the app, the relevance of the tag should be clear from the Store listing or initial app experience.

Implication: accessibility claims must not be selected merely to attract an adjacent audience or create additional discovery inventory.

### 3. Accessibility tags are a discovery surface, but not a ranking guarantee
Google has historically described accessibility tags as a way for Play users with different accessibility needs to find apps they can actually use, including apps in ordinary categories that are accessible. Current Play Console guidance continues to expose these tags and states that tags help users find relevant apps.

Do not infer:
`accessibility tag → general ranking boost`.

Preserve instead:
`verified capability → truthful tag → potential relevant discovery → Store visit → install → accessible specialist value → repeat value`.

### 4. Automated accessibility scanning is insufficient evidence for a marketing claim
Google's Accessibility Scanner can flag content labels, touch-target size, clickable items, and text/image contrast. Google explicitly states that Scanner is not a substitute for manual testing and does not guarantee accessibility.

Source: Android Accessibility Help, “Get started with Accessibility Scanner,” reviewed 2026-09-24.
https://support.google.com/accessibility/android/answer/6376570?hl=en-GB

Operational implication: a clean Scanner result cannot by itself authorize a `Screen reader-friendly`, `Motor assistance`, or other accessibility tag. Evidence must include manual completion of relevant common tasks with the applicable assistive technology and representative devices/configurations.

### 5. Apple and Google accessibility discovery must remain separate registries
Apple Research 232 and Google Play Research 233 are asymmetric:
- Apple: Accessibility Nutrition Labels, device-family declarations, explicit common-task completion criterion, and documented accessibility-feature search relevance.
- Google Play: developer-selected Store tags within a five-tag maximum, including accessibility tags; current authoritative Play guidance says tags aid relevant discovery but does not establish the same Apple common-task declaration contract or a general ranking guarantee.

Therefore never synchronize an Apple accessibility declaration to a Google accessibility tag automatically, or vice versa. Each platform requires its own evidence and metadata decision.

## ES0–ES5 Google Play Accessibility-Tag Integrity Gate

### ES0 — Platform/surface identity
Record platform, Play Console surface, app version, device/form-factor scope, territory/language where relevant, tag set, evidence date, and source version.

### ES1 — Capability identity
Define precisely what the proposed accessibility tag means for this product and which assistive technology/user need it represents. Do not infer support from framework defaults.

### ES2 — Common-task evidence integrity
For the affected audience, manually verify representative specialist workflows end-to-end on representative Android devices/configurations. Scanner output is supporting evidence only.

### ES3 — Tag-truth integrity
A tag must be strongly associated with the actual shipped experience and understandable as relevant to an unfamiliar user. Do not select an accessibility tag merely for discovery.

### ES4 — Tag-budget integrity
Because only five tags are available, compare the accessibility tag with all other truthful candidate tags. Select the five that best characterize the app and intended qualified audience; do not maximize tag count.

### ES5 — Qualified-value decision
Measure beyond Store exposure. A successful accessibility-discovery path reaches accessible first specialist value and repeated specialist value without increasing claim risk or displacing more accurate product identity.

## MintTap application
Before adding any Google Play accessibility tag, build an Android evidence matrix for common specialist tasks such as portfolio/holding inspection, distribution information, ROC/tax-related information where shipped, navigation, and data-entry/edit flows. Verify with the relevant assistive technology and representative Android devices. Do not infer screen-reader friendliness from Flutter semantics or a Scanner pass alone.

Because MintTap serves a narrow YieldMax-investor audience, the five-tag budget is material. An accessibility tag should win a slot only when both the capability is verified and the tag accurately characterizes the shipped experience. Discovery value is secondary to truth.

## LogMate application
Integrate Android accessibility evidence into launch readiness before selecting Play tags. Representative common tasks should include onboarding/previous totals, Add Flight, logbook/totals inspection, import/validation, and export where those workflows ship. Phone/tablet and adaptive layouts should be tested where supported.

Pilot specialization does not reduce accessibility requirements. Conversely, accessibility metadata must not be declared solely to broaden a small launch audience.

## Reusable company rule
Maintain separate Apple and Google accessibility registries. A shared internal capability matrix may supply evidence, but platform declarations/tags are separate decisions with separate semantics.

Preserve:
- `Scanner pass ≠ accessibility guarantee`
- `framework semantics ≠ verified assistive-technology workflow`
- `verified capability ≠ automatic tag selection`
- `tag ≠ ranking guarantee`
- `discovery ≠ install`
- `install ≠ accessible specialist value`
- `five available tags ≠ five tags should always be used`

## Next evidence work
1. Inspect MintTap's actual Google Play tag set and Android accessibility behavior before changing metadata.
2. Build the Android device × common-task × assistive-technology evidence matrix alongside the Apple ER matrix.
3. Compare truthful candidate Play tags against the five-tag budget rather than optimizing accessibility in isolation.
4. For LogMate, incorporate ES into pre-release Android QA and Store metadata review.
5. Re-check Google Play documentation if Google introduces a stronger accessibility declaration contract, explicit search-query relevance rule, or new tag semantics.
