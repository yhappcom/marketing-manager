# Research 271 — Community Evidence Capture Protocol

Validated: 2026-09-27

## Decision

Community activity is not demand evidence by default. For sparse professional apps, the unit of evidence is an **independent problem observation**, not a post, comment, upvote, subreddit mention, ticker mention, pilot-vendor mention, or repost.

The operating objective is to prevent one underlying story from being counted multiple times as market demand while preserving the audience's native problem language for later owned-web and Store use.

## Current authoritative constraints

- Reddit's Spam policy, updated 2026-05-19, prohibits repeated or unsolicited mass engagement and identifies mass-posting repetitive content for exposure or financial gain as potentially violating policy.
- Reddit's moderator guidance says promotional content is not inherently spam, but individual communities may prohibit it or impose their own self-promotion limits. Community-level permission therefore remains a separate gate from sitewide policy.
- Reddit Moderator Code Rule 2 requires communities to set predictable rules and expectations. Evidence capture must therefore record the community context and rule state rather than treating Reddit as one homogeneous channel.
- Rule 4 requires active moderation. Owned communities create an operating obligation and cannot be treated as free evidence-harvesting inventory.

## FP0–FP8 Evidence Capture Gate

1. **FP0 — Atomic observation:** capture the smallest user-authored statement that identifies a specialist problem, job, constraint, workaround, or failure.
2. **FP1 — Provenance:** record source/community/date/thread and whether the observation is first-hand, quoted, linked, or paraphrased.
3. **FP2 — Echo detection:** mark reposts, cross-posts, copied language, quoted stories, screenshots of the same source, and replies that merely agree as the same evidence lineage.
4. **FP3 — Independence:** count a new demand observation only when it originates from a meaningfully independent person/source lineage.
5. **FP4 — Cross-context corroboration:** increase confidence when the same underlying job recurs independently across different communities, time periods, workflows, or audience contexts; do not require identical wording.
6. **FP5 — Native-language stability:** preserve recurring user vocabulary separately from marketer-written labels. Stable native wording is evidence for message design, not proof of demand magnitude by itself.
7. **FP6 — Capability match:** separate a real problem from a problem the product can truthfully solve now. Unsupported demand remains research evidence, not a marketing claim.
8. **FP7 — Outcome evidence:** when a contribution or destination is used, connect it where possible to qualified activation/repeated core value without turning community participation into mass attribution harvesting.
9. **FP8 — Promotion decision:** classify the evidence cluster as HOLD, CORROBORATE, OWNED-CONTENT, STORE-CANDIDATE, PRODUCT-GAP, or REJECT. Store promotion requires the later traffic/experiment gates; community recurrence alone is insufficient.

## Evidence lineage model

Minimum registry fields:

`observation_id | job_id | source_type | community | source_date | captured_date | source_locator | author_lineage_hash_or_nonidentifying_key | first_hand_state | parent_observation_id | echo_type | independent_boolean | native_phrase | normalized_problem | audience_context | product_capability_state | corroborating_independent_count | source_diversity_count | last_corroborated | decision | next_check`

Do not store unnecessary personal identifiers. The lineage key exists only to avoid double-counting the same observable source/person where that can be done safely.

### Echo types

- `ORIGINAL`: independent first observable report.
- `SAME_THREAD_AGREEMENT`: agreement/reaction without materially new experience.
- `QUOTE`: quotation of an existing observation.
- `REPOST/CROSSPOST`: same source redistributed.
- `DERIVED_SUMMARY`: blog/social/community summary based on earlier evidence.
- `INDEPENDENT_CORROBORATION`: separate origin describing the same normalized job.
- `NEW_CONSTRAINT`: same job but materially new constraint/workflow evidence; retain separately even if not a new demand count.

A high-upvote original plus 40 agreement replies is **one origin with salience evidence**, not 41 independent demand observations. Likewise, the same complaint copied from Reddit into a blog and social post remains one lineage.

## Confidence dimensions

Do not collapse evidence into one vanity score. Track at least:

- **recurrence:** number of independent origins;
- **diversity:** distinct relevant source/community/workflow contexts;
- **recency:** whether the problem still occurs under current product/platform conditions;
- **language stability:** whether independent users converge on similar problem framing;
- **severity/job importance:** consequence of failure for the specialist workflow;
- **capability fit:** whether the current app truthfully resolves the job;
- **downstream value:** whether users who arrive for the job reach and repeat core value.

Promotion requires the dimensions relevant to the decision; no universal numeric threshold is invented for sparse traffic.

## MintTap application

Do not count TSLY, CONY, MSTY or other ticker mentions as separate demand when they express the same underlying YieldMax job. Normalize first to jobs such as distribution/ROC interpretation, portfolio continuity after corporate actions, reinvestment/accounting continuity, or after-tax tracking. Multiple independent investors encountering the same job across different tickers can strengthen recurrence/diversity, but ticker count itself is not demand magnitude.

Community replies should remain useful without requiring a MintTap click. App/store links are a later permission-and-continuity decision, not part of evidence capture.

## LogMate application

Do not count airline names, aircraft types, roster vendors, or logbook products as separate demand when they describe the same pilot job. Normalize to jobs such as import/migration, Previous Total continuity, duplicate reconciliation, record/export integrity, or offline/device continuity.

A vendor-specific incompatibility may be a new constraint or product gap even when it does not create a new underlying demand cluster.

## Reusable operating rule

`community signal → provenance → lineage/echo check → independent corroboration → normalized specialist job → native-language registry → capability match → owned/native utility → downstream evidence → Store/launch eligibility`

Never reverse the chain by creating repetitive community posts to manufacture corroboration.

## Stop rules

- STOP counting reactions/upvotes as independent demand.
- STOP counting reposts, cross-posts, quotes, summaries, or owned-channel republication as new origins.
- HOLD when provenance is unclear.
- HOLD Store promotion when recurrence exists but current product capability or destination continuity is weak.
- MOVE to product research when demand is credible but capability is absent.
- MOVE to owned content when the problem is corroborated and a durable explanation/tool can solve it without scarce Store experimentation.
- MOVE to Store-candidate review only after independent evidence, truthful capability, and destination continuity are established.

## Sources

- Reddit Help, “Spam,” updated 2026-05-19: https://support.reddithelp.com/hc/en-us/articles/360043504051-Spam
- Reddit Help, “How do I keep spam out of my community?”, updated 2026-03-28: https://support.reddithelp.com/hc/en-us/articles/28012014962580-How-do-I-keep-spam-out-of-my-community
- Reddit Help, “Moderator Code of Conduct - Rule 2,” updated 2026-01-07: https://support.reddithelp.com/hc/en-us/articles/27031214413588-Moderator-Code-of-Conduct-Rule-2-Set-Appropriate-and-Reasonable-Expectations
- Reddit Help, “Moderator Code of Conduct - Rule 4”: https://support.reddithelp.com/hc/en-us/articles/27031272792084-Moderator-Code-of-Conduct-Rule-4-Be-Active-and-Engaged
