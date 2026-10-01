# Research 354 — Review Prompt as Post-Value Trust Instrument

Validated: 2026-10-01

## Decision

For sparse specialist apps, rating/review acquisition is not a generic engagement campaign. A review prompt is eligible only after the user has completed a real specialist-value event, while the workflow is no longer active, and without sentiment pre-screening, incentive, coercion, or dependence on prompt display.

The optimization target is not prompt count or rating volume. It is authentic review coverage from users who have enough product experience to make the Store reputation more representative of delivered specialist value.

## Authoritative platform evidence

### Apple

Apple states that ratings inform the summary rating shown on the product page and in search results, and recommends asking at appropriate moments when users are likely to feel satisfaction after completing an action, level, or task without interrupting activity.

StoreKit controls whether the standardized review prompt actually appears. Apps therefore must not make continuation, confirmation, or any product behavior depend on display of the prompt. Apple also allows a persistent write-review link as an optional user-initiated route.

Apple permits resetting the overview rating with a new version, but recommends doing so sparingly. A reset does not remove written reviews and low rating volume can discourage downloads. Treat reset as an exceptional reputation-repair action after a material product change, never as routine reputation management.

### Google Play

Google's In-App Review guidance says to request a review only after the user has experienced enough of the app to provide useful feedback, not to prompt excessively, and not to ask sentiment/predictive questions before or while presenting the rating card.

Google Play policy prohibits manipulation of ratings/reviews, including incentivized ratings and deceptive/forced prompting. Review replies should address the issue raised and should not ask for a higher rating.

Play Console review analysis can expose recurring positive/critical themes and topic benchmarks when sufficient review volume exists. This makes reviews a product-evidence source, not merely an acquisition asset.

## Framework — JP0–JP9

JP0 specialist-value event: identify a completed event that demonstrates actual value rather than mere app activity.

JP1 experience sufficiency: require enough successful use/history that the user can evaluate the product meaningfully.

JP2 protected-workflow exclusion: never interrupt data entry, reconciliation, import, calculation verification, save/commit, recovery, export, or another high-attention task.

JP3 neutral eligibility: do not ask “Do you like the app?”, predict a five-star response, or route only positive users to the Store.

JP4 no consideration: no feature, credit, discount, access, reward, ad relief, or other benefit may depend on rating/review submission or score.

JP5 platform-native request: use the platform review mechanism as intended; treat prompt presentation as nondeterministic.

JP6 cooldown and lifecycle: use a conservative app-owned eligibility cooldown in addition to platform quotas; do not repeatedly convert ordinary specialist work into rating solicitation.

JP7 support escape: keep support discoverable so unresolved failures can be repaired directly, without suppressing those users from legitimate Store feedback.

JP8 review-intelligence loop: cluster reviews by problem, version, locale/device where available, map material themes to product/support/Store claims, and revalidate after fixes.

JP9 decision: ENABLE / DELAY / SUPPRESS-CONTEXT / REPAIR-PRODUCT / REPAIR-SUPPORT / RESPOND / HOLD / UNKNOWN.

## MintTap application

Potential eligibility events are successful completion of a meaningful portfolio reconstruction or validated specialist workflow—not app open, screen view, ad impression, or generic session duration. Candidate events include a completed distribution/reinvestment/split reconstruction or another verified workflow where the result has been saved and the user has exited the active editing state.

Tax/ROC work requires extra restraint because uncertainty or provenance disputes can remain after calculation. Completion alone is not proof of satisfaction. Prompt eligibility should require a clean completion state, not infer sentiment.

Do not place a review request immediately after an error, missing-data state, unresolved estimate/final discrepancy, failed import/sync, or support escalation.

## LogMate application

Pre-launch: no review optimization target exists yet. Define future eligibility around verified professional outcomes such as successful import/migration reconciliation, completed multi-leg logging with saved records, or successful export/backup—not around launch count.

Because pilot workflows are professional records, any prompt must occur after the record-critical sequence is complete. Never insert rating solicitation into Add Flight, duplicate reconciliation, Previous Total, import, export, backup, sync, or recovery.

## Measurement contract

Do not optimize on review-prompt attempts alone. Maintain:
eligible value events → prompt requests → observable Store rating/review changes (aggregate, privacy-safe) → rating/review themes → product/support repair → subsequent first/repeated specialist value.

Do not infer that every rating change was caused by the in-app prompt; Store submission and display are platform-controlled and other review routes exist.

For sparse apps, low review volume is censored evidence. Do not manufacture volume. Use qualitative themes only when grounded in actual reviews and keep sample size visible.

## Reusable niche-app rule

A review prompt is earned by completed value, not by elapsed time. Reputation growth follows:
truthful acquisition promise → successful specialist job → non-interruptive neutral prompt eligibility → authentic Store feedback → repair loop → stronger product evidence.

## Sources

- Apple Developer, Ratings, reviews, and responses: https://developer.apple.com/app-store/ratings-and-reviews/
- Apple Developer, StoreKit requestReview: https://developer.apple.com/documentation/storekit/skstorereviewcontroller/requestreview%28in%3A%29
- Apple Developer, Reset an app overview rating: https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/reset-an-app-overview-rating
- Android Developers, Google Play In-App Reviews API: https://developer.android.com/guide/playcore/in-app-review
- Google Play Console Help, User Ratings, Reviews, and Installs: https://support.google.com/googleplay/android-developer/answer/9898684
- Google Play Console Help, View and analyze your app's ratings and reviews: https://support.google.com/googleplay/android-developer/answer/138230

## Next evidence target

Audit MintTap's actual rating/review inventory and current prompt implementation, if any: platform, version, trigger, eligibility logic, cooldown, support route, review themes, and whether each trigger occurs after a verified specialist-value event. Do not add or increase prompting until this evidence exists.
