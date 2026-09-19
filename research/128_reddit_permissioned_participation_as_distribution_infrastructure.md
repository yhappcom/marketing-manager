# 128 — Reddit Permissioned Participation as Distribution Infrastructure

Last validated: 2026-09-19

## Decision
For niche professional apps, Reddit is not a broadcast channel with a self-promotion quota. It is a set of independently governed communities. Distribution is earned by answering the community's actual question under that community's current rules; an app link is optional and subordinate to the answer.

Canonical principle: **community permission precedes attribution. A measurable link does not create permission to place it.**

## Authoritative findings
Reddit's current sitewide Spam policy prohibits repeated or unsolicited mass engagement, including repetitive mass posting for exposure/financial gain and large-scale unsolicited tagging/messages. Reddit explicitly advises authentic participation in communities of genuine interest and says that if contributions mainly link to a business the contributor benefits from, frequency must be treated carefully. Community moderators ultimately adjudicate what is unwanted/spam within their communities.

Reddit's moderator guidance makes an important distinction: promotional content is not inherently spam, but individual communities may prohibit it entirely. Some communities use a 10% self-promotion convention, but Reddit states that the actual rule is community-specific. Therefore **10% is not a universal safe harbor** and must never be used as an automatic posting allowance.

Reddit also identifies repeated similar comments across a thread or multiple communities, repeated irrelevant/link-farmed content, and large unsolicited chats/community invitations as spam patterns. Current site rules additionally prohibit unauthorized scraping/collection and automation for unsolicited outreach; marketing research must not convert into bot-driven prospecting or mass DM.

## AT0–AT5 — Permissioned Community Participation Gate

### AT0 — Broadcast/spam pattern
- repeated promotional posts/comments across communities;
- unsolicited mass DM/chat/tagging;
- copied answer templates with product links;
- automation used for promotional outreach;
- rule evasion or link masking.

Do not operate.

### AT1 — Nominal relevance, no permission model
The audience is relevant but the operator has not recorded current subreddit rules, disclosure expectations, link policy, or moderator norms. No promotional distribution should be scheduled.

### AT2 — Rule-aware but promotion-first
Community rules are known, but the contribution is designed primarily to create an app impression/click. A nominal self-promotion allowance or a 10% convention does not upgrade this state.

### AT3 — Permissioned useful participation
Require all of:
1. Current community rules checked before publishing.
2. The post/comment answers a real specialist question without requiring the reader to leave Reddit.
3. Any material relationship to the app is disclosed when relevant to trust or required by community rules.
4. Product/store link is included only when permitted and materially useful; otherwise omit it.
5. No repeated cross-community copy, mass tagging, unsolicited outreach, or automated promotional participation.
6. Source/claim quality is appropriate to the specialist domain.
7. A community registry records rules, allowed surfaces, disclosure/link constraints, last verification date, and owner.
8. If an attributable Store path is allowed, use the AS framework; if links are not allowed, preserve community trust rather than sacrificing permission for measurement.

### AT4 — Repeated trust-compatible evidence
Multiple contributions remain available and useful, moderator/community response is acceptable, and attributable or censored downstream evidence indicates qualified specialist acquisition without degrading participation quality. Deletions/removals and negative moderator feedback are treated as safety signals, not merely lost impressions.

### AT5 — Reusable community operating system
The company maintains a current rule registry, specialist evidence library, contribution/reuse controls, disclosure standard, removal/feedback log, AS attribution linkage where permitted, and explicit stop rules. The system can be reused for future niche apps without mass-posting behavior.

## Operating framework

### Community registry
For each target community record:
- community;
- audience/job fit;
- current rules URL/reference;
- self-promotion status: prohibited / conditional / permitted / unclear;
- external-link constraints;
- disclosure expectation;
- allowed post types/flairs;
- moderator-contact requirement if any;
- last verified date;
- recent removal/feedback signals;
- owner.

Rules must be rechecked before a campaign or materially promotional contribution. A stale registry is context, not permission.

### Contribution sequence
`real specialist question → verify community permission → produce self-contained useful answer → disclose relationship where relevant → optional permitted link → AS attribution if permitted → first value → useful return → community feedback/removal review`

The link is deliberately late in the sequence.

### Content reuse rule
Research and factual evidence may be reused; Reddit prose should not be mechanically syndicated across communities. Adapt to the question, terminology, rules, and expected depth of the specific community. Similarity at scale is a spam risk even when the underlying facts are legitimate.

### Measurement
Do not optimize Reddit on posts/day, links/day, karma, raw clicks, or installs alone. Track:
- eligible real questions answered;
- rule-compliant contribution survival/removal;
- substantive replies/questions;
- moderator feedback;
- attributable Store path only where links are permitted;
- first value and useful return;
- operating time per qualified retained user;
- trust incidents/removals.

A no-link answer can be a successful community action even when direct attribution is impossible. AS privacy/attribution uncertainty must not be solved by violating community norms.

## MintTap application
MintTap's relevant communities contain financially sensitive discussions. Contributions should lead with verifiable mechanics—e.g. distribution history interpretation, ROC accounting concepts, reverse-split continuity, or portfolio-record problems—not ticker hype or app promotion. `r/MintTapforYieldMax` can serve owned support/community purposes, but ownership of that subreddit does not confer promotional permission in independent investing communities.

Do not mass-reply to ticker discussions with the same MintTap link. A real question may justify a self-contained answer; a link is added only if that community permits it and the destination materially helps the stated job.

## LogMate application
Pilot communities are professional trust environments. Before launch, build the registry and evidence library; do not seed repetitive product teasers. Useful pre-launch participation should center on verified logbook workflow/recordkeeping problems and only mention LogMate when product evidence and community rules justify it. Scarce pilot trust is more valuable than early click volume.

## Company-wide consequence
Zero-cost community marketing is constrained by **permission × usefulness × specialist credibility**, not by media spend. The reusable asset is not a posting calendar; it is the community registry plus an evidence-backed answer system and downstream measurement contract.

## Sources validated 2026-09-19
- Reddit Help, “Spam,” updated 2026-05-19: https://support.reddithelp.com/hc/en-us/articles/360043504051-Spam
- Reddit Help, “How do I keep spam out of my community?”, updated 2026-03-28: https://support.reddithelp.com/hc/en-us/articles/28012014962580-How-do-I-keep-spam-out-of-my-community
- Reddit Help, “Don’t break the site,” updated 2026-05-28: https://support.reddithelp.com/hc/en-us/articles/360043512931-Don-t-break-the-site

## Next evidence target
Audit actual MintTap Reddit surfaces and target communities: current rules, self-promotion/link/disclosure constraints, existing MintTap posts/comments, removals/mod feedback, and Store-link usage. Classify communities/contributions AT0–AT4 from observed evidence, then connect permitted outbound links to AS0–AS4.