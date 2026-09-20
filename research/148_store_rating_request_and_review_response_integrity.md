# 148 — Store Rating Request and Review Response Integrity

Validated: 2026-09-20
Scope: company-wide; MintTap and LogMate first applications
Status: canonical operating extension

## Why this matters

For sparse professional apps, Store ratings are high-visibility trust evidence but a small user base makes them unusually easy to distort accidentally. A campaign that asks a selected happy cohort for ratings can change the visible Store signal without changing product quality. The correct objective is therefore not `maximize rating` or `maximize review count`; it is to create legitimate opportunities for experienced users to leave authentic feedback while keeping review operations separate from support recovery, incentives, insider advocacy and acquisition claims.

## Authoritative platform findings

### Apple

Apple says developers may request ratings at appropriate moments, particularly after a user completes an action, level or task and is likely to feel satisfaction, while avoiding interruption. Apple's standard review prompt is system-controlled and may be prompted up to three times in a 365-day period. Apple also recommends making support contact information easy to find so users experiencing difficulty have a direct support path.

Apple's Developer Code of Conduct prohibits manipulating reviews/search/rankings. Apple specifically identifies tampering with reviews, paid or incentivized feedback, selective review display, fake feedback and third-party manipulation services as conduct that can trigger enforcement.

Apple review responses should address the actual feedback, remain concise and respectful, avoid personal information, marketing language and spam, and can be used to re-engage a reviewer when a later release fixes the issue they reported. Reviewers are notified of responses and may update their reviews. Apple explicitly says not to treat a review reply as marketing copy.

### Google Play

Google Play prohibits manipulation of ratings, reviews and install counts, including fraudulent or incentivized ratings/reviews. Its current policy explicitly recommends earning positive ratings through a genuine user experience, prompting clearly and non-deceptively, and encouraging honest feedback. It also says developer responses should focus on the issue raised and should not ask the reviewer for a higher rating.

Google Play generally holds new ratings/reviews for around 24 hours before they affect the public surface while suspicious activity is checked. Consequently, a short-term absence of new public reviews is not evidence that a request flow failed. Play also weights the user-facing rating toward more recent ratings, while retaining a lifetime average separately.

Google's Reply to Reviews API only exposes reviews with written comments, not rating-only feedback. Therefore a developer-response dataset is a selected subset of Store sentiment and must not be treated as the complete rating population.

## New operating principle: earned review opportunity, not sentiment selection

The company should request a rating only after a legitimate completed-value event. The event must be defined independently of whether the user appears happy, whether they contacted support, whether they are likely to give five stars, or whether the business needs a rating boost.

Valid candidate states are product-specific and require implementation validation. Examples to investigate, not automatically deploy:

- MintTap: after a user has successfully completed and later revisited a portfolio workflow that demonstrates actual retained utility.
- LogMate: after a user has successfully completed a non-critical workflow and has enough usage history to evaluate the app meaningfully.

A single successful tap or first-session onboarding completion is weak evidence of informed experience and should not automatically become a review-request trigger.

## Prohibited or frozen patterns

1. No reward, discount, feature, ad removal, currency, giveaway entry or other benefit for rating/reviewing.
2. No `Are you enjoying the app?` sentiment gate that sends positive respondents to the Store while diverting negative respondents to private support.
3. No founder/employee/family/contractor review program; BK connected-advocacy controls still apply.
4. No asking reviewers to increase their star rating in developer replies.
5. No treating support resolution as a quid-pro-quo for a better review.
6. No bulk request burst solely because launch metrics, ranking or rating need improvement.
7. No copying Store reviews into marketing/testimonials without the applicable permission and provenance requirements; Apple explicitly requires reviewer permission for use of customer reviews in marketing materials.
8. No interpreting review-response data as representative of all users or even all raters.

## BL0–BL5 Store Rating & Review Integrity Gate

### BL0 — Platform legality
Record platform, current policy source/date, allowed native mechanism and prohibited manipulation patterns.

### BL1 — Experienced-user eligibility
Define an objective product-value event and minimum experience context before a request can become eligible. Eligibility cannot depend on predicted sentiment/star rating.

Required fields:
- app/version/platform
- candidate value event
- minimum prior experience
- exclusion states
- rationale

### BL2 — Non-interruption and request governance
The request must occur at a natural post-task boundary, not during data entry, recovery, onboarding, tax/accounting interpretation, flight logging/import reconciliation, or another critical workflow. Preserve platform-native quota behavior and add company-level suppression/cooldown as needed; platform maximums are not company targets.

### BL3 — Authenticity and support separation
Support must remain available regardless of rating behavior. Do not condition support, features or benefits on feedback. Do not route only presumed-positive users to the Store. Connected actors remain subject to BK.

### BL4 — Review-response service loop
Classify written reviews into product bug, workflow friction, expectation/Store promise mismatch, trust/privacy, consequential domain claim, support/account issue, feature request and unknown. Respond to the issue, not the star count. Route validated findings into product/content/Store evidence systems. When a release resolves an old issue, a factual follow-up response may be used for re-engagement without asking for a higher rating.

### BL5 — Evidence interpretation
Measure the request system without making rating inflation the success criterion. Preserve:
- eligible value events
- request opportunities actually invoked
- platform/version/territory where available
- review/rating trends with platform semantics
- issue categories from written reviews
- fixed/re-engaged issues
- first/useful-return guardrails

Do not claim causal lift in rating or acquisition without an identifiable design. Public-rating latency/filtering and rating-only invisibility in reply APIs are censoring/measurement constraints, not zeros.

## MintTap implications

MintTap should not request a rating while the user is entering/editing transactions, interpreting ROC/tax adjustments, resolving account/data problems, or during first-value onboarding. A later stable portfolio-value moment may be a candidate only after the product team defines `first value` and `useful return` precisely enough to distinguish meaningful experience from mere task completion.

Because MintTap concerns financial records and consequential calculations, low-star or critical reviews mentioning ROC, tax, distributions, splits or data correctness should route into BE financial-claim/data provenance review rather than receive a generic marketing response.

A rating request must never be tied to ad removal or another monetized benefit.

## LogMate implications

LogMate's future review request must avoid flight-entry, import, duplicate resolution, totals correction, sync/backup recovery and any operationally sensitive task. Candidate eligibility should require enough completed use to make the reviewer an informed user. Pilot criticism involving regulatory/logbook correctness must route to the aviation authority hierarchy once that registry exists; it is not merely sentiment.

## Reusable company registry row

`app | platform | version | eligibility event | prior-experience requirement | exclusions | natural boundary | request mechanism | company cooldown | platform quota semantics | written-review category | response status | routed owner/system | release fix | re-engagement response | evidence limitations`

## Decision rule

Store reviews are a trust and product-learning surface, not a growth lever to be manufactured. The preferred chain is:

`real repeated/meaningful value → objectively eligible post-task state → native honest rating opportunity → authentic Store signal → issue-specific response/routing → product/store correction → restored/repeated value`

A higher rating is useful only when it reflects a better genuine experience. Review operations must not manufacture the appearance of one.

## Sources

- Apple Developer, Ratings, reviews, and responses, accessed 2026-09-20: https://developer.apple.com/app-store/ratings-and-reviews/
- Apple Developer, App Review Guidelines / Developer Code of Conduct, current page accessed 2026-09-20 (page indicates update 2026-06-08): https://developer.apple.com/app-store/review/guidelines/
- Apple Developer, Respond to reviews, accessed 2026-09-20: https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/respond-to-reviews
- Google Play Console Help, Developer Program Policy — User Ratings, Reviews, and Installs, accessed 2026-09-20: https://support.google.com/googleplay/android-developer/answer/17517561
- Google Play Console Help, User ratings, reviews and installs, accessed 2026-09-20: https://support.google.com/googleplay/android-developer/answer/9898684
- Google Play Console Help, View and analyze your app's ratings and reviews, accessed 2026-09-20: https://support.google.com/googleplay/android-developer/answer/138230
- Android Developers, Google Play Developer APIs — Reply to Reviews API, accessed 2026-09-20: https://developer.android.com/google/play/developer-api
