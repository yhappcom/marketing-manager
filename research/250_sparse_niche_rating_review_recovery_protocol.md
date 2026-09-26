# Research 250 — Sparse-Niche Rating/Review Recovery Protocol

Date: 2026-09-26
Status: Validated operating framework

## Decision

For specialist apps with sparse cohorts, ratings/reviews are a lagging trust surface, not a growth lever to be optimized independently. Recovery after a bad release must follow product recovery, not precede it.

## GT0–GT8 Rating/Review Recovery Gate

GT0 incident containment: stop review prompting while a known material defect, data-integrity issue, crash/ANR regression, broken onboarding/import, or misleading Store promise remains unresolved.

GT1 fix verification: verify the corrected version in production and its core specialist workflow before asking for ratings again.

GT2 natural-value moment: prompt only after the user has experienced enough value to give useful feedback, at a non-interruptive completion point. Never pre-screen users with “Do you like the app?” or equivalent sentiment gating.

GT3 sparse-cohort discipline: separate rating volume, current published rating, written-review themes, version/territory/device context, and qualified-product outcomes. A handful of new 5-star ratings is not evidence that the underlying issue is repaired.

GT4 response integrity: prioritize current-version technical complaints and low-star reviews. Reply concisely to the issue, state a verified fix when one exists, and avoid marketing copy or requests to increase the star rating.

GT5 re-engagement: after shipping a verified fix, update release notes and reply to affected historical reviews where supported. Treat an edited review as user evidence, not as a KPI target.

GT6 platform asymmetry: Apple can reset the overview rating with a new version, but written reviews remain and the reset cannot be restored after release; use sparingly. Google Play ratings do not reset with a new version and the displayed Play rating emphasizes recent ratings.

GT7 anti-manipulation: no incentives, fabricated reviews, forced rating flows, or selective routing intended to suppress negative feedback. Google explicitly prohibits ratings/review manipulation; Google In-App Review also prohibits asking sentiment questions before/while showing the review card.

GT8 recovery decision: RESUME prompts only when the affected core workflow is verified, reliability is stable, Store promise matches reality, support paths work, and there is a legitimate post-value prompt moment. Otherwise HOLD.

## Measurement contract

Maintain: platform, territory, app version, device/OS when available, review date, star rating, review theme, affected specialist job, incident/fix linkage, developer response, reviewer edit, current-version status, prompt eligibility, and qualified first/repeat-value evidence.

Do not collapse these into one average. On Google Play, distinguish average rating, cumulative average rating, and the published Google Play rating; the latter is based on recent ratings. New Google submissions are generally held about 24 hours before public impact, and suspicious activity can extend the hold.

For automation, note that Google's Reply to Reviews API exposes production reviews with comments, not silent star-only ratings. Daily CSV reports from Play Console remain a separate evidence source.

## Portfolio application

MintTap: suppress prompts during unresolved portfolio-calculation, distribution/ROC, reverse-split, reinvestment, tax-adjustment, sync, or material data-integrity defects. A suitable prompt moment is after a verified portfolio-management job completes, not after app launch or a market/distribution event merely creates traffic.

LogMate: suppress prompts during unresolved flight-entry, import/mapping, Previous Total, duplicate reconciliation, export, sync/offline, or record-integrity defects. Prompt only after a completed logging/import job with verified persistence.

## Apple-specific rule

Apple allows up to three standardized rating prompts per 365-day period, but this is a ceiling, not a target. Apple recommends prompting after a satisfying completed action without interrupting activity. Resetting the overview rating is an exceptional recovery mechanism only when a materially improved release makes historical summary ratings misleading; sparse apps should be especially cautious because few ratings can itself discourage downloads and written reviews remain visible.

## Google-specific rule

Google In-App Review has a time-bound quota whose exact value is intentionally unspecified and may change. Do not build a dedicated CTA around whether the native dialog will appear. Use product-side eligibility logic to choose a genuine value moment. Google Play prohibits incentivized/fraudulent/manipulative rating behavior and recommends review replies stay focused on the user's issue without asking for a higher rating.

## Preserve

rating recovery ≠ rating engineering
fix shipped ≠ fix verified
prompt API call ≠ prompt shown
review response ≠ marketing channel
few positive ratings ≠ recovered product quality
Apple rating reset ≠ review deletion
new Google version ≠ rating reset
rating improvement ≠ qualified specialist retention

## Next learning target

Move beyond review theory. Next highest-value work is a release-to-marketing readiness gate connecting production reliability, Store promise, support readiness, rating-prompt eligibility, community announcement eligibility, and zero-cost distribution expansion so a release cannot trigger promotion before specialist-value verification.
