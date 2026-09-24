# Research 236 — Sparse-Niche Rating/Review Solicitation & Measurement Integrity

Date: 2026-09-24
Status: Canonical

## Why this research exists
MintTap and LogMate serve narrow professional/specialist audiences. In a sparse niche, ratings and reviews are valuable trust evidence, but aggressive solicitation can distort the sample, interrupt core work, consume platform prompt opportunities, and create false causal conclusions from small counts. The operating goal is not maximum review volume; it is truthful, representative reputation evidence obtained without degrading specialist value.

## Authoritative findings

### Apple
Apple states that ratings help users decide which apps to try and can improve discoverability/download confidence. The summary rating is territory-specific. Apple recommends requesting a rating at an appropriate satisfaction point after an action/task and not interrupting activity. SKStoreReviewController can prompt a user up to three times within a 365-day period.

Apple allows an overview-rating reset when a new version is released. The reset applies across all countries/regions simultaneously for that platform, cannot be restored after release, and does not remove written reviews. Apple explicitly recommends using reset sparingly because few ratings can discourage downloads. A reset therefore is not reputation cleanup; it is an irreversible evidence discontinuity that may temporarily weaken social proof.

Apple review responses are public. A response can be edited/deleted, and the reviewer can be notified and may update the review. Support contact information should remain easy to find so product problems can be resolved directly rather than forcing review surfaces to function as support intake.

### Google Play
Google's In-App Review guidance says to request a review only after the user has experienced enough of the app to provide useful feedback, avoid excessive prompting, and not ask opinion/predictive questions before or during the review card (for example, asking whether the user likes the app or would give five stars). The platform flow may be quota-limited.

Critically, completion of the Android review-flow API does not reveal whether the dialog was shown or whether the user submitted a review. Therefore app telemetry must never label API completion as `review_shown`, `rating_submitted`, or `review_submitted`.

Google Play Console distinguishes average rating, ratings volume, cumulative average rating, and the current Google Play rating. The current Play rating shown to users is calculated from recent ratings, while cumulative average covers all submitted ratings through the prior day with only each user's latest rating counted. Ratings can be analyzed by country/region, language, app version, Android version, device type/model, and carrier. These metrics are not interchangeable.

A 2026 platform incident is useful measurement evidence: Google reported that a Play Store bug prevented the In-App Review dialog from appearing for most users from April 21 through May 6, 2026, lowering rating/review volume across apps. The issue was resolved May 6. Therefore a sudden review-volume drop cannot automatically be attributed to product sentiment or prompt logic; platform incidents must be checked before causal diagnosis.

## Canonical gate — EV0–EV5
`eligible satisfaction moment → non-coercive request integrity → platform-display uncertainty → rating/review metric identity → product/platform-cause integrity → durable specialist-trust decision`

### EV0 — Eligible satisfaction moment
Prompt only after a genuine specialist-value completion, never merely after elapsed time, app launch, or an arbitrary session count.

MintTap candidate moments require real completed value such as successful portfolio setup/import or completion of a meaningful analysis workflow. A dividend/payment date, market move, profit, or positive return must not be used as an emotional rating trigger.

LogMate candidate moments require a successfully completed low-stress workflow such as validated import/export or saved logbook work. Never interrupt flight-entry, error recovery, import conflict resolution, recency/compliance attention, or other operationally sensitive work.

### EV1 — Non-coercive request integrity
No review gating, rewards, feature access, emotional pressure, five-star wording, or pre-screen that routes happy users to the Store while suppressing unhappy users. Product support and problem reporting remain available independently of the rating request.

### EV2 — Platform-display uncertainty
A request attempt is not proof of impression. On Google, review-flow completion explicitly does not prove the card appeared or that a review was submitted. Apple controls prompt presentation/frequency. Internal event names must preserve uncertainty: `review_request_eligible`, `review_api_requested`, and where technically knowable `review_flow_completed`; never infer submission from these events.

### EV3 — Metric identity
Maintain separate fields for rating volume, written-review volume, displayed/current Store rating, cumulative/average rating where available, territory, app version, device/OS dimensions, and response state. Do not compare unlike metrics across Apple and Google or across territories.

### EV4 — Product/platform-cause integrity
Before attributing a reputation change to a release, prompt timing, or product quality, check Store/platform incidents, denominator/volume, territory/version/device mix, release timing, and support/review-response changes. Sparse counts remain descriptive unless evidence is sufficient.

### EV5 — Durable specialist-trust decision
Optimize for representative specialist trust and resolved product problems, not rating count. A request strategy is successful only if it leaves core workflow quality intact and ratings/reviews remain credible downstream evidence for qualified prospects.

## Rating-reset policy
Apple overview-rating reset is prohibited by default for MintTap and future niche apps. Consider it only when a materially changed version has fixed a clearly evidenced historical problem and the owner accepts: global territory impact for that platform, irreversibility after release, persistence of written reviews, and the temporary loss of rating density/social proof. Record pre-reset rating/count/territory evidence and the decision rationale before release.

Do not reset merely to hide weak reputation, manufacture a fresh score, or respond to a small number of negative ratings.

## Measurement registry
For each platform maintain:
`date/window × platform × territory × app version × rating metric semantic × displayed/current rating × rating volume × written-review volume × prompt-eligible users × request attempts × API/flow completion if observable × known platform incident × product release/support event × interpretation confidence`

Prompt telemetry must not attempt to reconstruct individual user rating behavior where the platform intentionally withholds it.

## Sparse-niche stopping rule
Do not continuously move prompt timing based on a handful of ratings. Change solicitation logic only when there is a product/UX reason or enough evidence to support a decision. Reputation optimization is subordinate to product reliability, specialist usefulness, and non-interruption.

## Reusable operating rules
- `request attempt ≠ prompt impression`
- `flow completion ≠ rating/review submission`
- `rating volume change ≠ sentiment change`
- `current/displayed rating ≠ cumulative historical average`
- `rating reset ≠ review reset`
- `rating reset ≠ reputation repair`
- `small rating sample ≠ representative specialist sentiment`
- `high rating ≠ retained specialist value`
- `review response ≠ substitute for product/support fix`
- `platform incident ≠ product failure`

## Application
### MintTap
Protect financial-emotion neutrality. Never time review prompts around gains, distributions, favorable tax/ROC outcomes, or other moments likely to select users by financial sentiment. Candidate prompts follow completed neutral utility. Reconstruct rating/review evidence by territory/version before changing prompt logic.

### LogMate
Keep review solicitation outside launch-critical and operationally sensitive workflows. Candidate prompts follow completed, verified value—not flight logging in progress, compliance/recency attention, import conflicts, sync/recovery, or error states. With a small pilot cohort, qualitative issue resolution is more valuable than maximizing prompt frequency.

## Next evidence work
1. Reconstruct MintTap Apple/Google rating and written-review history by territory/version and current prompt implementation.
2. Check whether any MintTap telemetry incorrectly treats request/flow completion as review submission.
3. Inspect current review-response/support workflow and unresolved themes before altering solicitation.
4. For LogMate, define eligible post-value moments but do not enable prompting until postlaunch product stability and cohort evidence exist.

## Sources
- Apple Developer — Ratings, reviews, and responses: https://developer.apple.com/app-store/ratings-and-reviews/
- Apple Developer — Reset an app overview rating: https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/reset-an-app-overview-rating
- Apple Developer — Respond to reviews: https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/respond-to-reviews
- Android Developers — Google Play In-App Reviews: https://developer.android.com/guide/playcore/in-app-review
- Android Developers — Integrate in-app reviews: https://developer.android.com/guide/playcore/in-app-review/kotlin-java
- Google Play Console Help — View app statistics: https://support.google.com/googleplay/android-developer/answer/139628
- Google Play Console Help — View and analyze ratings and reviews: https://support.google.com/googleplay/android-developer/answer/138230
- Google Play Developer Community — resolved In-App Review API incident, Apr 21–May 6 2026: https://support.google.com/googleplay/android-developer/thread/431605926/
