# 129 — Owned Subreddit as Trust Infrastructure, Not a Promotional Feed

Validated: 2026-09-20

## Decision
An app-owned subreddit is not exempt from community-trust constraints merely because the company controls moderation. Treat it as **owned community infrastructure with explicit affiliation, predictable rules, independent user participation, and separation from cross-community promotion**.

This extends AT (permissioned participation) for communities we operate ourselves. It does not weaken AT requirements in third-party communities.

## Authoritative findings

### 1. Official affiliation should be explicit
Reddit's Moderator Code of Conduct requires communities about a company/brand to be clearly denoted as official when they are officially affiliated, and unofficial when they are not. Reddit's impersonation policy also prohibits misleading representation of identity or affiliation.

Operational consequence: an app/company-operated subreddit should clearly state the actual relationship in its community description/rules rather than relying on usernames, post history, or user inference.

Sources:
- https://redditinc.com/policies/moderator-code-of-conduct
- https://support.reddithelp.com/hc/en-us/articles/360043075032-Impersonation

### 2. Commercial-intent disclosure is contribution-level, not only profile-level
Reddit provides a Brand Affiliate tag for posts/comments with commercial intent or an incentivized brand relationship. Reddit states that contributors remain responsible for legally required disclosure.

Operational consequence: a profile bio or subreddit description does not automatically make every product-related contribution sufficiently transparent. Where a post/comment has commercial intent, use the platform's available disclosure mechanism where applicable and make the relationship understandable in context.

Source:
- https://support.reddithelp.com/hc/en-us/articles/23972085214484-What-s-a-brand-affiliate-tag

### 3. Ownership does not justify directing interference into other communities
Moderator Code Rule 3 prohibits using a community to direct, coordinate, encourage, or enable interference in other communities. Owned communities therefore cannot become launch pads for brigading, vote coordination, mass replies, or campaigns against moderators/users elsewhere.

Operational consequence: never publish calls such as “go reply/upvote/downvote this thread,” never reward members for cross-subreddit intervention, and do not use the owned subreddit to contest moderation decisions elsewhere.

Sources:
- https://redditinc.com/policies/moderator-code-of-conduct
- https://support.reddithelp.com/hc/en-us/articles/27031145215252-Moderator-Code-of-Conduct-Rule-3-Respect-Your-Neighbors

### 4. Predictable community expectations are a product asset
Moderator Code Rule 2 requires appropriate/reasonable expectations; Reddit's rules tooling exists so members can understand what is expected and what can be reported. Rule 4 expects active moderation rather than merely occupying a community.

Operational consequence: the owned subreddit needs stable rules, moderation of reports/modmail, and clear boundaries between support, product announcements, investment/pilot discussion, feedback, and user-to-user conversation. It should not silently change from community/support surface into a promotional broadcast channel.

Sources:
- https://support.reddithelp.com/hc/en-us/articles/27031214413588-Moderator-Code-of-Conduct-Rule-2-Set-Appropriate-and-Reasonable-Expectations
- https://support.reddithelp.com/hc/en-us/articles/15484500104212-Rules
- https://support.reddithelp.com/hc/en-us/articles/27031272792084-Moderator-Code-of-Conduct-Rule-4-Be-Active-and-Engaged

## AU0–AU5 Owned-Community Trust Gate

**AU0 — Promotional shell**  
Community mainly exists to push app links/announcements; affiliation/rules are unclear.

**AU1 — Disclosed shell**  
Affiliation is visible, but content is still predominantly one-way promotion and moderation expectations are weak.

**AU2 — Governed community**  
Official relationship and rules are clear; support/feedback/announcement boundaries exist; moderation is active. No evidence yet that the community produces durable user value.

**AU3 — Trust infrastructure**  
Requires all of the following:
- explicit official/company relationship;
- stable, understandable rules and report reasons;
- clear commercial-intent disclosure where applicable;
- user questions/support/feedback can exist without requiring app promotion;
- no cross-community vote/reply/moderation coordination;
- no mass unsolicited outreach or promotional automation;
- product announcements are identifiable as such rather than disguised as organic user content;
- moderator operations cover queue/modmail/report handling;
- criticism and legitimate negative feedback are not removed merely because they are commercially inconvenient;
- Store links are used when useful, not as the default endpoint of every thread.

**AU4 — Demonstrated trust-compatible utility**  
Repeated evidence shows the community resolves specialist/support needs, produces useful product feedback, and retains genuine member participation without needing promotional pressure. Commercial posts remain a bounded subset of community activity.

**AU5 — Reusable governance system**  
The same governance contract is documented and successfully transferred to another niche-app community without collapsing into promotional broadcasting.

## MintTap application
`r/MintTapforYieldMax` should be treated as the first AU implementation. It should serve at least four separable jobs: product support, release/change communication, YieldMax-specific workflow education where appropriate, and structured user feedback. It must not be used to mobilize users into other YieldMax/investing subreddits.

A useful owned-community post can end entirely on Reddit. A Store link is optional, not proof that the post succeeded.

### Audit fields
- official affiliation wording;
- community description and rules;
- moderator roster/activity;
- support vs announcement vs educational vs feedback post mix;
- Brand Affiliate/commercial disclosure practice;
- removal/report/modmail process;
- handling of criticism/bugs;
- outbound Store-link frequency and campaign taxonomy;
- any cross-subreddit calls to action;
- member-originated vs company-originated contribution share;
- recurring questions that should become FAQ/help/product fixes.

Do **not** set universal numeric quotas for content mix before observing the community. The goal is not an arbitrary promotional percentage; it is predictable trust-compatible utility.

## LogMate application
Do not create a pilot subreddit merely to reserve a channel or manufacture launch reach. Create/operate one only when there is a real support/community job and enough operational capacity to moderate it. If created as an official product community, apply AU from day one and preserve pilot criticism and operationally relevant feedback.

## Company-wide operating rule
For third-party communities: **AT permission precedes AS attribution.**  
For company-operated communities: **AU governance precedes AS attribution.**

Owned reach is not permission to simulate independent advocacy, suppress inconvenient feedback, or coordinate activity elsewhere.

## Next evidence target
Audit `r/MintTapforYieldMax` against AU0–AU4 using observable subreddit configuration/content/moderation evidence. Only then decide whether the community needs rule/description/disclosure/content-architecture changes.