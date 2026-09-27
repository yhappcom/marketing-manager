# Research 272 — Community Evidence-to-Action Ledger

Validated: 2026-09-27

## Purpose
Convert community observations into bounded actions without confusing attention, repetition, or promotional reach with independent demand.

## Core rule
An observation does not create permission to market, and permission does not create evidence of product value. Keep three states separate:
1. **evidence state** — independent problem recurrence and provenance;
2. **permission state** — current community rules, affiliation/link constraints, and moderation outcome;
3. **value state** — whether the action produced qualified specialist value or durable learning.

## FR0–FR8 decision gate
**FR0 Atomic evidence.** Start from one normalized specialist job, not ticker, airline, vendor, post, comment, upvote, or follower count.

**FR1 Independence.** Collapse reposts, quotes, cross-posts, summaries, and same-thread agreement into one lineage. They may raise salience but not independent-origin count.

**FR2 Corroboration.** Prefer recurrence across independent people, contexts, and communities. Do not manufacture corroboration by distributing the same prompt or promotion across communities.

**FR3 Capability fit.** The app must already solve the claimed job truthfully. Otherwise classify PRODUCT_GAP; do not turn unmet demand into acquisition copy.

**FR4 Permission.** Before any product-linked contribution, verify the exact community's current rules. Promotional content is not inherently spam on Reddit, but communities can prohibit it or impose self-promotion limits. Unknown permission = HOLD.

**FR5 Native utility.** The contribution should remain materially useful if the app name and link are removed. A link is optional completion, not the substance of the answer.

**FR6 Minimal distribution.** Choose the smallest surface that can answer the verified problem. Reddit explicitly treats repeated same/similar comments across threads/communities and mass repetitive posting for exposure or financial gain as spam-risk behavior. Do not syndicate identical answers to create reach.

**FR7 Outcome capture.** Record moderation result, qualified visit if observable, first-core-value evidence if observable, repeated-value evidence if observable, new independent evidence, durable reusable asset, and operator/moderation minutes. Do not infer installs when attribution is absent.

**FR8 Reallocate.** KEEP only when the action yields at least one of: new independent evidence, qualified/repeated specialist value, or a durable reusable asset at acceptable maintenance/policy cost. REDUCE/STOP when activity repeatedly yields only impressions, karma, likes, followers, or clicks.

## Action states
- **HOLD** — evidence or permission insufficient.
- **ANSWER_NO_LINK** — useful native answer; product reference unnecessary.
- **ANSWER_DISCLOSED** — product/developer relationship is relevant and permitted; disclose affiliation.
- **OWNED_ARTIFACT** — recurring question merits a durable owned article/FAQ/tool.
- **STORE_ROUTE_CANDIDATE** — independently corroborated intent, truthful capability, matching destination, and enough traffic/evidence justify Store routing.
- **PRODUCT_GAP** — demand is real but current product does not satisfy it.
- **REDUCE** — useful but marginal return is declining.
- **STOP** — policy risk, repeated removal, excessive maintenance, or no decision-useful/value output.
- **REVERIFY** — rules or moderation behavior changed.

## Ledger schema
`job_id | evidence_lineage_id | independent_origin_count | context_diversity | native_wording | capability_state | community | rules_source | rules_verified_at | permission_state | affiliation_required | link_state | proposed_action | native_utility_without_link | destination | moderation_outcome | qualified_visit_evidence | first_core_value_evidence | repeated_value_evidence | new_evidence_created | durable_asset_created | operator_minutes | moderation_minutes | decision | reverify_at`

Do not compress these dimensions into one score. Sparse-niche decisions need inspectable reasons, not pseudo-precision.

## Owned-web escalation
Escalate a community answer into an owned artifact when the same specialist job recurs independently and the answer benefits from stable explanation, screenshots, calculations, references, or versioned maintenance. The owned artifact is a durable answer and evidence surface; it is not justification to drop the same link into multiple communities.

## Store escalation
Community recurrence alone does not justify a Store variant. Store routing requires:
- stable intent language;
- truthful capability;
- a matching in-app destination;
- enough evidence/traffic to justify fragmentation;
- a mechanism appropriate to the decision.

For Apple, Custom Product Pages can target distinct audiences/intents with unique URLs, keywords and, on iOS/iPadOS 18+, deep links. Apple analytics can compare acquisition and downstream engagement/value, but page data appears only after at least five first-time downloads. Therefore CPP capacity is not a target count; use it only after upstream evidence has earned a distinct route.

## MintTap application
Normalize ticker-specific mentions into business-level jobs before counting evidence. Examples: distribution/ROC interpretation, corporate-action continuity, portfolio accounting/reinvestment continuity. TSLY, CONY and MSTY mentions are not three demand categories if the underlying job is the same. Prefer one high-utility answer or durable artifact over ticker-by-ticker promotional repetition.

## LogMate application
Normalize airline, aircraft and roster-system mentions into pilot workflow jobs: import/migration, Previous Total continuity, duplicate reconciliation, record/export integrity, offline/device continuity. A generic aviation audience is not sufficient; evidence and action must map to a concrete logbook workflow.

## Evidence and policy basis
- Reddit Help, “How do I keep spam out of my community?”, updated 2026-04-02: promotional content is not inherently spam, but individual communities may prohibit it or apply self-promotion limits; repeated same/similar comments across threads or communities are spam-risk examples.
- Reddit Help, “Spam”, updated 2026-05-19: mass repetitive content for exposure or financial gain is prohibited.
- Apple Developer, “Custom Product Pages” and App Store Connect Analytics: up to 70 CPPs, unique URLs/keywords, optional deep links on iOS/iPadOS 18+, and acquisition/downstream measurement; analytics for a CPP appears after five first-time downloads.

## Reusable operating principle
`independent problem evidence → current permission → native useful action → truthful destination → qualified/repeated value or durable learning → keep/reallocate`

Never substitute:
`mentions → posting volume → clicks → assumed demand`.

## Next learning target
Build the first **Community Saturation & Marginal-Value Stop Rule**: determine when additional answers/content on the same validated job stop producing independent evidence or qualified value and should be converted into maintenance of a durable owned asset rather than continued posting.
