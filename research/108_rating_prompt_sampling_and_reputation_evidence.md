# 108 — Rating Prompt Sampling and Reputation Evidence

Validated: 2026-09-19

## Scope
This note closes a gap between 086 (review/service recovery), 102 (useful-return retention), and Store conversion work. It governs **when and how the product may ask for a Store rating/review without converting a reputation signal into a manipulated or analytically misleading metric**.

## Canonical principle

> **A Store rating is a sampled reputation signal, not a product KPI. Ask only at a legitimate post-value boundary, never condition product access or benefits on feedback, and never infer population satisfaction from the prompted sample alone.**

The company objective is not to maximize prompt exposure or star rating. It is to produce genuine specialist value and make it easy for an eligible user to express an honest opinion without interruption, coercion, or reward.

## Authoritative platform facts

### Apple
Apple states that ratings inform the summary rating shown on the product page and in search results, and that the summary rating is territory-specific. Apple recommends requesting a rating at an appropriate point when a user is likely to feel satisfaction, such as after completing an action/task, without interrupting activity. The system review prompt can be requested only up to three times within a 365-day period; display remains system-controlled.

Apple permits resetting the overview/summary rating when releasing a new version, but recommends doing so sparingly. A reset affects all countries/regions simultaneously, cannot be restored after release, and does **not** remove written reviews. Sparse-niche apps therefore face a substantial evidence cost: resetting can remove accumulated rating density while old written reviews remain visible.

Apple also now exposes LLM-generated review summaries in supported storefronts and refreshes them over time. This means recurring review themes — not merely the arithmetic star average — can become a Store-facing reputation surface.

Sources:
- https://developer.apple.com/app-store/ratings-and-reviews/
- https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/reset-an-app-overview-rating
- https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/view-ratings-and-reviews

### Google Play
Google Play policy prohibits manipulating ratings/reviews/install counts, including fraudulent or incentivized ratings/reviews. Google explicitly says not to offer rewards/incentives, use deceptive prompts, or force users to rate; it recommends earning feedback through genuine experience and requesting honest feedback clearly.

Google Play's public rating is weighted toward more recent ratings, while Play Console separately exposes a lifetime average. Ratings do not restart on each app version. New ratings/reviews are generally held back for about 24 hours before public impact while Google detects suspicious activity; suspicious activity can cause a longer pause/investigation.

The Play In-App Review API does not tell the app whether the review dialog was actually shown or whether the user submitted a review. Product flow must continue normally after the API completes. Therefore `review_flow_complete` must never be treated as `rating_submitted` or as a conversion event.

Sources:
- https://support.google.com/googleplay/android-developer/answer/9898684
- https://support.google.com/googleplay/android-developer/answer/138230
- https://developer.android.com/guide/playcore/in-app-review/kotlin-java

## New analytical distinction: reputation vs sampled solicitation

A prompted rating cohort is selected by product logic. If the app asks only after a successful task, its ratings are naturally conditioned on successful use. That can be a legitimate UX choice — platforms themselves recommend appropriate post-satisfaction moments — but it means the resulting sample is **not an unbiased estimate of all-user satisfaction**.

Therefore maintain three separate evidence classes:

1. **Product quality evidence** — task success, failure, support incidents, first value, useful return, retention/cadence.
2. **Reputation evidence** — Store rating distribution, written-review themes, review summaries, response/update behavior.
3. **Solicitation evidence** — which users were eligible for a prompt, why, how often, and at what workflow boundary.

Never use class 3 to manufacture class 2, and never use class 2 as a substitute for class 1.

## R0–R5 Rating Evidence Gate

### R0 — Invalid/manipulated
Any incentive, reward, feature unlock, discount, coercion, forced interruption, deceptive wording, fake review, coordinated rating inflation, or request for a specifically high rating. Remove immediately regardless of rating outcome.

### R1 — Opportunistic prompting
Prompt timing exists primarily because a screen has traffic or because the company wants more ratings. No specialist-value eligibility rule. Star average is treated as the objective.

### R2 — Legitimate but unmeasured
Platform-native prompt at a reasonable noninterruptive point, no incentive/manipulation, but no explicit eligibility cohort, suppression logic, or distinction between prompt attempt and actual rating/review.

### R3 — Minimum deliberate solicitation threshold
All must hold:
- a production-valid specialist task has just reached a natural completion boundary;
- prompting does not interrupt a protected workflow;
- no reward, gating, rating threshold, or sentiment screening controls Store access;
- prompt eligibility is defined independently of whether the user is expected to give 5 stars;
- frequency/suppression respects platform behavior and internal fatigue limits;
- support/error states have a direct help path and are not converted into rating prompts;
- analytics records **eligibility/prompt attempt only** unless the platform provides a valid downstream signal;
- Store rating/review metrics remain reputation diagnostics, not product-success KPIs.

### R4 — Calibrated reputation operation
R3 plus release/territory/version/device/review-theme analysis is tied back to real product failures and useful-return evidence. Review responses and fixes are tracked; improvement is evaluated through product evidence as well as Store reputation. Prompting is reduced or disabled when it no longer adds decision value.

### R5 — Reusable sparse-niche pattern
Repeated across releases/apps without manipulation, interruption, reputation gaming, or loss of specialist trust. Eligibility logic and reputation interpretation remain portable while job-specific completion boundaries are app-specific.

## MintTap application
Good candidate boundaries are not `app opened`, `portfolio value is positive`, `distribution was high`, or `user saw a profitable ticker`. These would either be arbitrary traffic points or risk sentiment/outcome selection.

A potential R3 candidate is a **neutral, successfully completed tracking job** after the user has had enough exposure to judge the app: for example, completing a legitimate portfolio/tracking workflow and later demonstrating useful return. The exact trigger must be verified against the shipping event schema before implementation.

Do not condition eligibility on investment outcome, unrealized P/L, distribution size, refund amount, or whether a user expresses positive sentiment. Financial outcome is not product quality.

Negative/technical experience must expose support and recovery paths. Do not use an internal `Are you happy?` gate that routes happy users to the Store and unhappy users only to support; this creates a selected reputation sample and is contrary to the authenticity objective even when not technically detectable as manipulation.

Apple rating reset should default to **do not reset** for MintTap. A reset becomes a candidate only after a major production correction makes accumulated ratings materially nonrepresentative and the evidence cost of losing rating density is explicitly accepted. Written reviews remain regardless.

## LogMate application
Do not prompt after app install, onboarding, first blank logbook, or merely importing a file. The pilot needs enough real use to judge reliability.

Potential R3 boundaries should follow a production-valid professional job such as repeated successful flight logging, reliable totals/search, or a verified backup/restore workflow. Do not prompt during flight-entry completion if it adds friction to the logging workflow; the next safe boundary may be preferable.

Pilot trust is more valuable than rating velocity. Reliability complaints in reviews should feed the product evidence system rather than trigger aggressive review-recovery campaigns.

## Sparse-niche reputation dashboard
Track without collapsing semantics:

`platform → territory → app_version → rating_count → displayed_rating → lifetime_rating(if available) → review_count → review_theme → technical_issue_theme → response_status → fixed_version → prompt_eligible_users → prompt_attempts → prompt_boundary → suppression_reason → R-class`

Do **not** create `prompt conversion = rating count / prompt attempts` unless the platform actually provides a valid causal/submission signal. Google Play's in-app review completion callback explicitly does not.

## Decision rules
- **Rating count is inventory, not activation.**
- **Star average is reputation, not retention.**
- **Prompt attempt is not rating submission.**
- **A high rating does not validate a broken first-value workflow.**
- **A low rating is a diagnostic input, not a reason to screen users before Store access.**
- **Review text/themes can be more actionable than the aggregate score.**
- **For a sparse niche, preserving accumulated authentic evidence usually dominates cosmetic rating resets.**

## Next operational audit
For MintTap, inspect the shipping review-prompt implementation and analytics:

`platform → trigger → preceding user job → success criterion → minimum experience → error/support suppression → frequency suppression → sentiment/outcome filter? → analytics event semantics → Store destination/API → R-class`

Then compare Store review themes by version/territory against actual product/support defects. Do not change prompt timing until this audit establishes the current R-class.
