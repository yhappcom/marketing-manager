# 086 — Review Prompt & Service-Recovery Contract

Updated: 2026-09-18

## Why this exists
Ratings/reviews affect Store trust and discovery, but sparse niche apps can easily corrupt this signal by prompting too early, selecting only presumed-happy users, incentivizing ratings, or treating review replies as reputation management rather than service recovery.

## First-party findings

### Apple
- Apple recommends asking at appropriate moments when users are likely to feel satisfaction, such as after completing an action/task, without interrupting activity.
- StoreKit review prompts may be shown at most three times in a 365-day period; users can disable rating prompts.
- Developers can respond to reviews; the reviewer is notified and can update the review. Apple recommends prioritizing low-star/current technical-issue reviews if response capacity is limited.
- Apple review summaries are LLM-generated from user reviews and are refreshed over time in supported storefronts. Therefore recurring issue language can influence not only individual reviews but a synthesized Store trust surface.
- Apple summary ratings are territory-specific and can be reset on a new version, but Apple recommends sparing use; reset does not remove written reviews and is irreversible after release. Resetting all regions to hide accumulated dissatisfaction is not a remediation strategy.

### Google Play
- Google prohibits fraudulent or incentivized ratings/reviews and specifically lists offering an incentive for rating as a violation.
- Google recommends keeping developer replies focused on the issue and not asking the reviewer for a higher rating.
- New ratings/reviews are generally held for around 24 hours before public impact while Google detects suspicious activity.
- Ratings/reviews persist across package versions rather than restarting on each release.
- Play In-App Review does not tell the app whether the dialog was shown or whether the user reviewed; normal app flow must continue regardless. Therefore review completion must never be required for product progression, rewards, unlocks, or telemetry-defined success.

## Canonical principle
**Earn the review moment; never manufacture the sentiment.**

A review prompt is downstream of verified value, not a mechanism for creating evidence that value exists.

## R0–R5 Review Integrity Gate
- **R0 — Manipulated:** incentive, gating, coercion, fake/connected review, or explicit request for a favorable/high rating.
- **R1 — Premature:** launch/onboarding/first-open prompt before specialist value is demonstrated.
- **R2 — Sentiment-selected:** prompt only after asking whether the user is happy or otherwise routing presumed-negative users away from the Store. Even where not explicitly prohibited by a platform API rule, this destroys the usefulness of ratings as product evidence and is not company practice.
- **R3 — Value-earned:** neutral review request at a non-interruptive boundary after a durable first-value/useful-return event; skipping has zero product consequence.
- **R4 — Evidence-governed:** R3 plus version/locale/workflow eligibility, cooldown, exposure telemetry, support escape hatch, and issue-family monitoring. Prompt logic is based on product events, not predicted positivity.
- **R5 — Closed-loop:** review issue families are joined to product fixes/releases and recurrence; developer replies are service recovery; prompt changes are evaluated against first value/useful return and trust incidents, not star uplift alone.

## Prompt eligibility contract
A user may become eligible only after a product event that is independently valuable. Examples to validate against production semantics rather than hard-code from theory:
- MintTap: a portfolio/tracking task successfully completed and later useful return demonstrated.
- LogMate: only after canonical persistence and a real logbook workflow are production-valid; no prompt during prototype/manual-entry validation merely to acquire launch ratings.

Never use `user_is_happy`, NPS polarity, support outcome, ad engagement, subscription/payment state, or predicted star rating as the eligibility predicate.

## Service-recovery ledger
`store → locale → version → review_id → star → issue_family → workflow → reply_state → fix_owner → fixed_version → reviewer_updated? → recurrence_after_fix → first-value/useful-return incident linkage`

Priority is recurring issue elimination, not response-rate vanity metrics.

## Rating-reset rule (Apple)
Reset is a rare release-level governance decision, not a marketing tactic. Consider only when a materially changed version has actually removed the historical failure mode and the team accepts loss of accumulated rating evidence. Written reviews remain, all regions are affected for the selected platform, and the prior overview rating cannot be restored after release.

## Review-summary implication (Apple)
Because Apple now synthesizes review themes in supported storefronts, issue-family recurrence has a second-order Store effect. The correct response is to remove recurrent failure modes and answer affected reviewers, not seed countervailing positive reviews.

## Measurement
Do not optimize `prompt → stars` in isolation. Use:
`verified value event → prompt eligibility → prompt request → Store rating/review observation (aggregate) → issue-family distribution → fix → recurrence → useful return`

Platform APIs may not expose whether an individual user actually reviewed. Do not infer or fabricate that linkage.

## Product implications
### MintTap
Before adding or changing review prompts, inspect the actual current trigger. If it is tied to launch, onboarding completion, a shallow transaction, ad interaction, or presumed-positive sentiment, treat it as below R3. Review wording about exchange rates, ROC/tax, reverse splits, import/manual workflows should be classified as product-evidence families before ASO interpretation.

### LogMate
Do not solicit launch ratings until canonical persistence and a production-valid pilot workflow exist. Testers' private feedback is product validation; it should not be converted into coordinated public Store ratings.

## Sources (first-party, verified 2026-09-18)
- Apple Developer — Ratings, reviews, and responses: https://developer.apple.com/app-store/ratings-and-reviews/
- Apple Developer — Requesting App Store reviews: https://developer.apple.com/documentation/storekit/requesting-app-store-reviews
- Apple Developer — Reset an app overview rating: https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/reset-an-app-overview-rating
- Google Play Console Help — View and analyze your app's ratings and reviews: https://support.google.com/googleplay/android-developer/answer/138230
- Google Play Developer Program Policy — User Ratings, Reviews, and Installs: https://support.google.com/googleplay/android-developer/answer/17517561
- Android Developers — Integrate in-app reviews: https://developer.android.com/guide/playcore/in-app-review/kotlin-java
