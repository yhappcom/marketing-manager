# 049 — Community Permission Operations for Specialist Apps

Updated: 2026-09-16

## Purpose

Turn community marketing from a generic “be helpful, avoid spam” principle into a repeatable permission system for MintTap, LogMate, and future specialist apps.

## Core finding

A community is not a channel with one permission state. Permission is action-specific and can change by community, moderator interpretation, account history, post type, disclosure, destination link, and time.

Canonical model:

`community × action × disclosure × destination × account standing × current rule state → permission state`

Do not infer permission for one action from permission for another.

## Authoritative Reddit baseline (verified 2026-09-16)

Reddit Help states that promotional content is not inherently spam, but individual communities may prohibit all promotion or use their own self-promotion limits. Reddit defines spam around repeated, unwanted, or unsolicited actions and explicitly warns against repeated mass posting and unsolicited mass messages. Reddit also recommends checking each community’s specific rules and contacting moderators when uncertain. Reddit’s guidance for community growth similarly recommends asking moderators when promotion is uncertain and says repeated linking in every post/comment can be spam.

Operational consequence: sitewide permission is only a floor. Community-specific rules and moderator interpretation are the operative constraint.

## Permission ladder

Maintain separate states for at least these actions:

P0 — read/listen only
P1 — native helpful comment with no product mention
P2 — native helpful post with no product mention
P3 — transparent product/developer mention without link
P4 — contextual external link after native answer
P5 — explicit app announcement/showcase
P6 — research/usability participant recruitment
P7 — direct-message outreach
P8 — recurring/automated monitoring or outreach

P7 defaults to prohibited unless the user explicitly invites contact or the community/moderators clearly permit it. P8 defaults to prohibited unless platform terms and community permission explicitly allow it. Never automate unsolicited outreach.

## Permission states

- `ALLOWED_EXPLICIT` — current written rule/mod statement explicitly permits the exact action.
- `ALLOWED_CONDITIONAL` — permitted only under recorded conditions (flair, weekly thread, disclosure, frequency, no link, moderator approval, etc.).
- `MOD_APPROVAL_REQUIRED` — rules do not establish permission; ask moderators before action.
- `NOT_STATED` — no reliable current evidence. This is not permission.
- `PROHIBITED` — current rule/mod statement disallows the action.
- `STALE` — prior permission exists but rule age/change makes reliance unsafe.

Never convert `NOT_STATED` to `ALLOWED` because competitors or other developers have posted successfully.

## Evidence hierarchy

1. Current community rules/sidebar/wiki/posting requirements.
2. Current pinned moderator posts / recurring promotion or research threads.
3. Direct moderator response for the exact proposed action.
4. Platform-wide policy/help guidance.
5. Observed precedent — weak context only, never sufficient to establish permission.

Record source date and re-check before material campaigns.

## Specialist-app operating rule

### Native Help Before Promotion

For MintTap and LogMate, default participation sequence:

`listen → answer the specialist problem natively → establish relevance/trust → disclose affiliation when product is mentioned → link only if useful and permitted → measure qualified response`

A link is not the unit of value. The native answer must remain useful if the link is removed.

### Research Is Not Automatically Non-promotional

Usability-test or research recruitment can still serve the developer’s commercial interest and may be treated as self-promotion, solicitation, survey content, or off-topic content by a community. Therefore P6 requires its own permission check. Do not relabel acquisition as “research” to bypass promotion rules.

For MintTap’s current activation-remediation phase, research recruitment is preferable to installation promotion only when:

- the study question is real and documented;
- participant burden and data requested are minimized;
- no investment-account credentials, brokerage credentials, or unnecessary personal financial data are requested;
- affiliation and purpose are disclosed;
- the community explicitly allows it or moderators approve it;
- recruitment success is measured as completed qualified sessions, not clicks/install count.

## Permission budget

Community trust is a scarce operating asset. Treat every product mention, external link, recruitment request, or announcement as spending a permission budget.

`permission budget ≠ fixed 10% quota`

Reddit notes that some communities use a 10% self-promotion convention, but community rules control. Do not adopt 10% as a universal safe harbor.

Increase permission budget through useful native participation, accurate specialist answers, transparent affiliation, responsiveness, and low complaint/removal rates. Reduce or freeze promotional actions after removals, moderator warnings, negative community feedback, or rule changes.

## Removal / warning protocol

A removal is evidence, not an invitation to repost around moderation.

1. Stop the affected action in that community.
2. Record removal reason if available.
3. Re-read current rules/pinned threads.
4. Ask moderators only if clarification is genuinely needed; do not argue.
5. Update permission state.
6. Do not repost through alternate wording/account/link routing to evade the restriction.

## Zero-cost community portfolio

Do not depend on one subreddit/community. Build a small portfolio by intent and permission quality:

- specialist problem communities — highest domain relevance, often strictest promotion rules;
- product/category communities — useful for recurring pain discovery;
- owned community (e.g. MintTap subreddit) — controllable education/support surface, but never misrepresent as independent community consensus;
- owned blog/web — durable canonical explanation and proof source;
- Store listing — conversion surface, not discussion surface.

Cross-posting/reuse must respect each destination’s rules; identical mass distribution is not the operating model.

## Decision metrics for sparse niches

Do not optimize community work to raw impressions. Prefer:

- qualified specialist conversations;
- independent recurrence of the same problem;
- moderator-approved research participation;
- completed usability sessions;
- route-qualified Store visits when measurable;
- first-value completion and useful return where attribution is available;
- removals/warnings/negative feedback as trust-cost metrics.

## MintTap immediate application

Current product evidence suggests activation friction is a higher priority than maximizing acquisition. Therefore community operations should currently favor:

1. observing repeated YieldMax portfolio-management pain;
2. native answers that improve community utility;
3. permission-approved recruitment of a very small number of relevant users for first-value usability validation;
4. only later, route-specific installation promotion after activation improvements are validated.

Do not spend scarce YieldMax community trust sending users into an unvalidated high-friction first-run path.

## LogMate application

Before launch, pilot communities should be used primarily for terminology, workflow, import, device-sync, and logbook-practice validation. Avoid claims of regulatory compliance unless independently verified for the relevant jurisdiction. Recruitment permission remains action-specific even when no released product is being sold.

## Reusable company rules

- **Permission Before Distribution** — verify the exact action before publishing.
- **Action-Specific Permission** — comment permission does not imply link/recruitment/announcement permission.
- **Native Value Before Exit** — community content must be useful without leaving the community.
- **Disclosure Before Product Mention** — when affiliation is material, disclose it plainly.
- **Research Is a Permissioned Action** — participant recruitment gets its own rule state.
- **Removal Updates the Ledger** — do not route around moderation.
- **Trust Before Volume** — sparse specialist audiences make community trust more valuable than short-term reach.

## Next validation

Populate the permission ledger only for concrete communities actually selected for MintTap/LogMate. Do not create speculative rows for communities not yet targeted. Re-check material permission evidence before each campaign or recruitment wave.