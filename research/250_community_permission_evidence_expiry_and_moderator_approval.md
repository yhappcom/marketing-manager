# Research 250 — Community Permission Evidence Expiry & Moderator-Approval Protocol

Validated: 2026-09-26

## Decision
Community permission is time-bounded evidence, not a permanent channel property. A product mention, external link, launch post, or recurring promotional thread may be used only when the specific permission evidence is still current at publication time.

Reddit's current official guidance says promotional content is not inherently spam, but individual communities may prohibit promotion or impose their own limits. Reddit's sitewide spam policy separately prohibits repeated or unsolicited mass engagement and mass-posting repetitive content for exposure or financial gain. Reddit also advises checking community-specific rules and contacting moderators when uncertain. Therefore historical post survival, a prior moderator answer, or a previously available promo thread cannot be treated as perpetual authorization.

## GE0–GE7 Permission Freshness Gate
GE0 audience fit → GE1 current sitewide policy → GE2 current community rules → GE3 evidence type/age → GE4 commercial-status fit → GE5 moderator/thread scope → GE6 publication-time recheck → GE7 PUBLISH / NATIVE_ONLY / ASK_MODS / HOLD / STOP.

## Evidence hierarchy
Strongest to weakest:
1. Current explicit moderator guidance addressing the product/use case.
2. Current community rule text explicitly permitting/prohibiting the activity.
3. Current recurring-thread text defining eligible promotion.
4. Current moderator-enforced examples consistent with the rules.
5. Historical surviving posts.
6. Absence of removals or absence of a written prohibition.

Levels 5–6 are context only and never independently authorize promotion.

## Freshness policy
No universal Reddit expiry interval exists, so TTLs below are company risk controls, not platform rules.

- Publication-time check: always re-open current community rules and the current recurring thread immediately before posting.
- Recurring promo thread: valid only for that thread/window; never carries forward automatically.
- Explicit moderator approval: retain the exact scope and date; re-confirm if product commercial model, link destination, post format, frequency, or community rules materially change.
- Community-rule evidence: mark stale on any detected rule/mod-team/thread change. For planned promotion, refresh regardless of stored age.
- Historical post survival: never upgraded to permission by age or repeated survival.
- Ambiguous commercial status: ASK_MODS, not optimistic interpretation.

## Moderator-approval request discipline
Ask only when current rules do not resolve the intended action. The request must identify: developer affiliation; app/product; commercial model including ads/future monetization; intended post type; whether an external Store/site link is included; proposed frequency; and the specific rule ambiguity. Preserve the moderator answer verbatim with date and scope. Silence is not approval.

Do not repeatedly message moderators after a refusal or non-response. Do not reframe substantially the same promotional post to evade a restriction.

## Permission invalidators
Immediately downgrade the record when any of these occurs: rule change; promo-thread wording change; moderator removal/warning; moderator answer conflicts with stored state; commercial model changes; destination/link changes materially; repeated-post plan expands beyond approved frequency; account/product affiliation changes; or sitewide policy changes.

Decision transitions:
- explicit prohibition/removal → STOP or PROHIBITED;
- unclear/stale permission → HOLD or ASK_MODS;
- product mention allowed but links unclear → NATIVE_ONLY;
- scoped current permission → PUBLISH only inside that scope.

## Portfolio application
MintTap: r/YieldMaxETFs remains NATIVE_ONLY_PENDING_VERIFY. The May 2026 surviving native post is historical evidence only. Before another MintTap product mention, recheck current rules; before any external link or repeated product posting, require explicit current permission or moderator clarification if rules remain ambiguous.

LogMate: r/flying remains prohibited for commercial promotion under the current evidence in Research 249 unless current rules/moderator guidance changes. r/GeneralAviation's app-promotion surface is thread-scoped: use only a currently active eligible thread after rechecking its text and community rules; do not infer standalone-post permission.

## Ledger
community_id; product; intended_action; affiliation; commercial_model; sitewide_policy_checked_at; rules_checked_at; rule_snapshot/reference; moderator_guidance; moderator_guidance_at; guidance_scope; recurring_thread_url; thread_window; product_mentions_allowed; links_allowed; frequency_allowed; disclosure_required; invalidators; last_moderation_outcome; publication_recheck_at; state; decision; next_recheck_trigger.

## Reusable company rule
Community distribution has two independent gates: relevance and permission. High audience fit never overrides missing permission. Permission is scoped to action + format + destination + commercial status + time; it is not inherited by another app, another community, another thread, or a later campaign.

## Next target
Move from permission theory to zero-cost Store-routing execution: define a Community-to-Store Intent Handoff protocol that decides when a native answer should remain linkless, route to owned documentation, or route directly to an Apple CPP / Google Play CSL without adding unnecessary funnel steps.
