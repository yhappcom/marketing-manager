# Research 181 — Reddit Reputation and Distribution-Reachability Integrity

Date: 2026-09-22
Status: Validated from current Reddit first-party documentation

## Why this is a distinct problem
Research 180 established that promotion permission is community-specific. Permission, however, does not guarantee distribution. Reddit communities can use reputation- and contributor-quality-based filters that can hold/filter content before it reaches normal community visibility. For zero-cost niche marketing, this creates a separate operational layer: `permitted ≠ reachable`.

## Current platform facts
Reddit's Contributor Quality Score (CQS) classifies every account into five tiers (Highest, High, Moderate, Low, Lowest). Reddit says CQS uses a host of signals including prior account actions, network/location signals and account-security steps such as email verification; scores update regularly and can move up or down with activity/behavior. Moderators can use the `contributor_quality` field in AutoModerator rules, including in combination with subreddit karma thresholds.

Reddit also provides a Reputation Filter. Reddit describes it as an optional community safety setting that can automatically filter content from redditors who may be potential spammers, likely to have content removed, or have unestablished accounts. The filter is informed by CQS and uses karma, verification and other account signals. This means a post can satisfy written topical/promotion rules yet still be filtered by a community's safety configuration.

Reddit's current Spam guidance separately recommends posting genuine content in communities the user is personally interested in, warns accounts whose activity is primarily links to a business they run/own/profit from to consider posting frequency, and directs users to check community-specific rules or contact moderators if uncertain. Repetitive exposure-seeking behavior therefore creates both policy risk and distribution/reputation risk.

## Core distinction
Do not collapse these states:

1. sitewide policy compliant;
2. subreddit rules permit the contribution;
3. account is eligible/trusted enough to avoid automated filtering;
4. content is actually visible/reachable to the intended community;
5. community members engage voluntarily;
6. downstream product value occurs.

A compliant post that is automatically filtered is not a successful distribution event. Conversely, a visible post is not evidence of moderator endorsement, product trust, or qualified acquisition.

## CS0–CS5 Reddit Reputation & Reachability Integrity Gate

### CS0 — Account identity integrity
Use a stable, truthfully affiliated identity. Do not create or rotate accounts to escape filtering, removals, bans, reputation constraints, or community history.

### CS1 — Contribution legitimacy
Build participation through genuinely useful, topic-native contributions rather than karma farming, filler comments, or manufactured activity intended to satisfy thresholds.

### CS2 — Reputation-state awareness
Treat CQS/reputation filtering as a possible hidden distribution constraint. Do not infer the exact CQS from karma alone and do not claim to know a community's private filtering configuration without evidence.

### CS3 — Reachability verification
For each material community contribution, distinguish `submitted`, `visible`, `filtered/held`, `removed`, `locked`, and `unknown`. A submission event is not an impression event.

### CS4 — Recovery integrity
If content is filtered or removed, do not repost repeatedly, switch accounts, mass-message users, or attempt to bypass moderation. Check rules, inspect moderator feedback where available, and use modmail only when clarification is appropriate and non-repetitive.

### CS5 — Downstream-value validation
Only after legitimate reachability should the business evaluate voluntary engagement, permitted referral/acquisition, first useful value and repeated useful value. Karma and raw post count are not terminal growth metrics.

## Canonical evidence rules
- `sitewide compliant ≠ subreddit permitted`
- `subreddit permitted ≠ automatically reachable`
- `submitted ≠ visible`
- `visible ≠ endorsed`
- `karma ≠ CQS`
- `high karma ≠ immunity from reputation filtering`
- `filtered ≠ permission to repost from another account`
- `account age/karma threshold passed ≠ known CQS tier`
- `engagement ≠ qualified acquisition`
- `CQS optimization ≠ a marketing objective`

The objective is durable participation legitimacy, not gaming a trust classifier.

## MintTap operating implication
For third-party YieldMax/investing communities, add reachability state to the Research 180 community registry: account used; affiliation disclosure; rule snapshot/date; submitted timestamp; content type; link/no-link; visible/filtered/removed/unknown state; moderator feedback; voluntary engagement; attributable Store/web route if permitted; first/repeated useful-value evidence.

Do not create alternate accounts to separate promotional history or to work around filtering. Product-owner participation should remain transparent. r/MintTapforYieldMax should likewise be actively moderated and clearly described according to its actual affiliation; ownership does not make it independent market evidence.

## LogMate operating implication
Pilot communities may have strict trust norms even when written promotion rules appear permissive. Establish a stable, transparent participant identity and contribute genuinely useful pilot-domain material before considering product-linked posts. Do not manufacture generic aviation engagement merely to raise karma or apparent reputation. A filtered launch post should trigger a rules/reputation diagnosis, not reposting pressure.

## Reusable company framework
Extend the community registry with a `distribution_reachability` object:

- platform/community
- account identity and affiliation state
- account-security/verification state if intentionally documented
- rule snapshot/date
- contribution purpose
- promotion/link permission
- submission state
- visibility state: visible / filtered-held / removed / locked / unknown
- evidence timestamp
- moderator feedback/reference
- engagement quality
- attributable route where permitted
- first useful value
- repeated useful value

Do not store or infer opaque platform trust scores as if they were observable business metrics.

## Sources
- Reddit Help, “What is the Contributor Quality Score?”, updated 2026-06-23: https://support.reddithelp.com/hc/en-us/articles/19023371170196-What-is-the-Contributor-Quality-Score
- Reddit Help, “Reputation filter”, updated 2026-04-30: https://support.reddithelp.com/hc/en-us/articles/27441485903124-Reputation-filter
- Reddit Help, “Spam”, updated 2026-05-19: https://support.reddithelp.com/hc/en-us/articles/360043504051-Spam
- Reddit Help, “How do I keep spam out of my community?”, updated 2026-03-28: https://support.reddithelp.com/hc/en-us/articles/28012014962580-How-do-I-keep-spam-out-of-my-community

## Next evidence target
Apply CR + CS together to the actual MintTap Reddit footprint. The first useful audit is not another generic Reddit study: identify every community actually used, current written rules, account/affiliation identity, historical submissions, whether each was visible/filtered/removed, moderator feedback, and downstream value. For LogMate, prepare the same registry before promotional participation.