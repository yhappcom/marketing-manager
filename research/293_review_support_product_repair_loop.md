# Research 293 — Review → Support → Product-Repair Loop

Validated: 2026-09-29

## Why this exists
Ratings/reviews are not merely reputation or acquisition outputs. For sparse professional apps, a review is a public defect/expectation signal that can expose a product defect, documentation gap, Store-promise mismatch, support gap, or an external platform problem. The operating goal is to convert valid review evidence into repair and re-engagement without manipulating ratings.

## Authoritative platform evidence
Apple states that ratings/reviews help users decide which apps to try and can improve discoverability/downloads. Apple recommends making support contact information easy to find because resolving difficulties can prevent poor reviews. Developers can reply to every App Store review; the reviewer is notified and may update the review. Apple specifically recommends prioritizing low-star or current-version technical reviews when capacity is limited, and after shipping a fix, mentioning it in release notes and replying to relevant older reviews to re-engage dissatisfied users. Responses should be concise, respectful, specific, and free of personal information, marketing language, or spam. Apple also states that ratings are territory-specific and warns that resetting a summary rating can leave too few ratings and discourage downloads; written reviews are not reset. Review summaries are now generated from individual reviews in supported storefronts and refreshed over time.
Source: https://developer.apple.com/app-store/ratings-and-reviews/
Source: https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/respond-to-reviews/
Source: https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/view-ratings-and-reviews/

A 2026 Google Play incident is a useful measurement warning: Google reported that an In-App Review API bug suppressed review-dialog appearance for most Store users from April 21 through May 6, 2026, after which submissions returned to normal. Therefore a sudden ratings/reviews volume change is not automatically product sentiment or prompt-performance evidence.
Source: https://support.google.com/googleplay/android-developer/thread/431605926/

## GT0–GT9 Review Repair Contract
GT0 — Preserve raw evidence: platform, territory, app version, star rating, timestamp, review text, edited state, response state.
GT1 — Triage ownership: PRODUCT_DEFECT / DOCUMENTATION_GAP / STORE_PROMISE_GAP / SUPPORT_GAP / PLATFORM_OR_ACCOUNT_ISSUE / FEATURE_REQUEST / PRAISE / ABUSE_OR_POLICY / UNKNOWN.
GT2 — Separate severity from star count. A five-star review can reveal a critical defect; a one-star review can describe an external billing/download problem.
GT3 — Corroborate before generalizing. Link a theme to support tickets, crash/error telemetry, product events, Store promise, or repeated independent reviews where available.
GT4 — Repair the root surface. Fix product behavior first when defective; otherwise fix documentation, onboarding, Store creative/copy, support routing, or expectation setting.
GT5 — Close the public loop. Reply specifically after the issue is understood or fixed; never demand or bargain for a higher rating.
GT6 — Re-engage only through platform-permitted mechanisms. Apple explicitly supports replying to older affected reviews after a fix and notes that reviewers are notified and can update their review.
GT7 — Propagate the fix. If a review exposes a promise mismatch, update every materially equivalent Store/owned/community claim rather than only answering the reviewer.
GT8 — Measure repair, not vanity. Track time-to-triage, time-to-fix, recurrence by app version, affected workflow completion, support recurrence, and review-theme recurrence. Rating movement is secondary and noisy.
GT9 — Diagnose exogenous shocks. Before attributing a sudden review-volume or rating change to product/marketing, check platform incidents, version mix, territory mix, release timing, and prompt eligibility.

## Sparse-niche priority rule
When operator attention is scarce, prioritize:
1. safety/data-integrity or specialist-workflow defects;
2. current-version technical failures;
3. Store-promise mismatches that can mis-acquire more users;
4. recurring documentation/support gaps;
5. isolated feature requests;
6. generic praise.

This is deliberately not “reply to every review.” Apple itself recommends prioritizing low ratings/current technical issues when universal response is infeasible.

## MintTap application
Highest-priority themes are wrong/missing distribution or ROC state, split/reinvestment reconstruction errors, tax-adjustment behavior, portfolio data integrity, and Store wording that implies stronger tax/return certainty than the product can substantiate. A review that exposes provenance confusion should trigger the same authority/methodology contract used by the owned-reference system, not an improvised support answer.

## LogMate application
Highest-priority themes are import/mapping integrity, duplicate handling, Previous Total continuity, flight-record edits, export integrity, and device/PWA continuity. Because the audience is professional pilots, a record-integrity complaint outranks cosmetic sentiment even when its star rating is not the lowest.

## Marketing consequence
A repaired review theme can produce four zero-cost assets from one evidence unit: a product fix, clearer support/documentation, more truthful Store positioning, and a credible public developer response. The review itself is not permission to republish customer text in marketing; Apple says customer reviews may be used in marketing materials only with reviewer permission.

## Measurement caution
Do not infer incrementality from rating movement alone. Ratings are territory-sensitive on Apple, review display/submission can be affected by platform behavior, and sparse apps have high sampling noise. Preserve version/territory/time context and distinguish observed correlation from causal evidence.

## Next learning target
Build a release-response operating contract: how release notes, review replies, support documentation, Store claims, and owned references should be synchronized after a specialist-workflow defect is fixed, without turning release notes or review responses into promotional spam.
