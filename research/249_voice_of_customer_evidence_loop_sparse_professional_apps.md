# Research 249 — Voice-of-Customer Evidence Loop for Sparse Professional Apps

Validated: 2026-09-26

## Decision

For sparse professional apps, community posts, Store reviews, support contacts, search queries, social replies, and product telemetry must not become separate marketing backlogs. Normalize them to one **specialist problem registry**. The unit of evidence is the underlying job/problem, while each channel observation remains separately attributable.

This prevents two opposite errors:
1. **double counting** one incident propagated across channels as multiple independent demand signals;
2. **discarding corroboration** when unrelated users independently describe the same professional problem in different language.

## GV0–GV8 Voice-of-Customer Evidence Gate

1. **GV0 Provenance** — preserve source, date, locale, app version, surface, and original wording where permitted.
2. **GV1 Problem identity** — map the observation to a stable `problem_cluster_id`; do not use channel as the problem identity.
3. **GV2 Job/outcome** — state the specialist job the user was trying to complete and the failed/desired outcome.
4. **GV3 Independence** — mark whether this is an independent observation, a reply/repost, campaign-induced response, or the same incident repeated elsewhere.
5. **GV4 Severity** — separate trust/data-integrity/reliability blockers from friction, feature demand, comprehension, and preference.
6. **GV5 Product/marketing diagnosis** — classify whether the gap is product capability, reliability, onboarding/comprehension, Store-promise mismatch, documentation, discoverability, or unsupported expectation. Marketing must not compensate for a product defect with stronger copy.
7. **GV6 Evidence confidence** — distinguish observed evidence from inference; sparse absence is UNKNOWN/INSUFFICIENT, not zero.
8. **GV7 Action routing** — route to FIX, EXPLAIN, STORE-COPY, COMMUNITY-ANSWER, CONTENT, MEASURE, or NO-ACTION with an owner/evidence requirement.
9. **GV8 Closure** — close only after the underlying problem is verified resolved or the communication promise is corrected; channel response alone is not closure.

## Platform-grounded operating rules

### App Store reviews are product evidence, not just reputation inventory
Apple permits public developer responses, editing/deleting responses, and exposes reviews by app version, rating, response/edit status, platform and country/region in App Store Connect. Apple also states that a reviewer is notified when the developer responds and may update the review. Therefore a review can support a repair/re-engagement loop, but an updated rating is not proof that the underlying defect was fixed.

Apple recommends concise responses that directly address feedback and excludes marketing language, spam and personal information. Support contact information should be easy to find so users can resolve problems directly rather than forcing Store reviews to function as support tickets.

### Preserve version and locale
A complaint tied to a specific release or locale must not be merged into a timeless global conclusion. Version/region segmentation is especially important for sparse cohorts where one regression can dominate visible feedback.

### Cross-channel corroboration is qualitative before quantitative
A Reddit post, Store review and support message that trace to one user/incident are one incident with three observations. Three unrelated users independently encountering the same import failure are stronger corroboration even if total public engagement is lower.

## Registry schema

`observation_id / problem_cluster_id / app / specialist_job / source_channel / source_asset_or_thread / observed_at / locale / app_version / original_problem_language / normalized_problem / desired_outcome / severity / independence / upstream_incident_or_campaign / product_vs_marketing_class / evidence_confidence / action_route / owner / verification_requirement / status / closure_evidence`

Do not store unnecessary personal information.

## MintTap application

Prefer business-level clusters such as portfolio continuity after reverse split, distribution/ROC interpretation, reinvestment, tax adjustment, calculation/data integrity, and portfolio comparison. A YieldMax issuer event can cause simultaneous Reddit/search/support activity; mark the event as a common upstream confounder rather than counting every channel spike as independent demand.

Trust/data-integrity reports override acquisition work. If users cannot trust portfolio calculations or distribution treatment, the correct route is FIX/VERIFY before stronger Store/community promotion.

## LogMate application

Use pilot-job clusters such as previous totals, flight entry, import/source mapping, duplicate reconciliation, export, offline/PWA continuity and record integrity. Generic aviation discussion is not LogMate demand. A pilot describing the same import defect in support and a community post is one incident unless independent evidence establishes otherwise.

For professional logbooks, record-integrity and migration failures are high-severity even when the number of reports is small; sparse volume must not downgrade consequence.

## Decision matrix

- **High severity + credible evidence:** FIX/VERIFY; suspend affected marketing promise if necessary.
- **Repeated independent problem + working capability poorly understood:** EXPLAIN/STORE-COPY/CONTENT candidate.
- **Repeated independent unmet job + strategic fit:** product discovery input, not a marketing promise.
- **Single propagated complaint:** investigate; do not inflate demand.
- **High engagement but weak specialist-job fit:** NO-ACTION for product marketing.
- **No observations in a sparse channel:** UNKNOWN/INSUFFICIENT, never “no demand.”

## Metrics

Do not optimize “number of mentions.” Track:
- independent corroborations per problem cluster;
- high-severity unresolved clusters;
- median time from credible observation to routed owner;
- promise-mismatch incidents;
- resolved clusters with production verification;
- post-fix recurrence;
- qualified acquisition/repeat value only after the promise is true.

## Sources

- Apple Developer, “Ratings, reviews, and responses — App Store”: appropriate review-request timing, support discoverability, reviewer notification after responses, response-quality guidance.
- Apple Developer, “View ratings and reviews”: filtering by version/rating/review state and country/region.
- Apple Developer, “Respond to reviews”: public response/edit/delete mechanics and up-to-24-hour response publication latency.

## Reusable rule

`many channels ≠ many problems`

Canonical loop:
`raw observation → provenance → specialist problem ID → independence/severity → product-vs-marketing diagnosis → routed action → production/promise verification → channel-appropriate response → recurrence/repeated-value evidence`

A marketing team earns the right to amplify only after the promise represented by the relevant problem cluster is true.
