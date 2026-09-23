# Research 227 — Community Promotion Integrity & Owned-Knowledge Flywheel

Date: 2026-09-24
Status: validated against current Reddit Help and Google Search Central documentation

## Why this matters

For a zero-paid-marketing company serving narrow professional audiences, community participation is attractive because the audience is already concentrated. But community reach is borrowed distribution: subreddit rules and platform anti-spam systems control whether promotional participation is tolerated. The durable asset is not repeated app linking; it is a body of useful specialist knowledge that earns discussion inside communities and can also be preserved on an owned, searchable web property.

This research separates three jobs that must not be collapsed into one tactic:
1. participate legitimately in third-party or owned communities;
2. disclose/promote the product only where the community permits it;
3. preserve genuinely useful first-hand/expert material on an owned site where search engines can understand the publisher/creator and content.

## Current authoritative facts

### Reddit: promotion is not automatically spam, but community permission controls

Reddit's current moderator guidance says promotional content is not inherently spam. However, individual communities may prohibit all promotion, while others may use a 10% self-promotion convention. Reddit explicitly says the choice belongs to each community/team. Therefore the often-repeated "Reddit 10% rule" is not a universal safe harbor or platform entitlement.

Reddit's sitewide spam policy prohibits repeated or unsolicited mass engagement. Examples include mass-posting repetitive content for exposure/financial gain, mass-tagging or unsolicited messages, repeatedly recycling old content for karma, and using bots or generative-AI tools in ways that facilitate spam proliferation. Reddit's guidance to avoid spam classification includes posting genuine content in communities one is personally interested in, considering frequency when most links point to a business one benefits from, and checking community-specific rules or contacting moderators when uncertain.

Sources:
- Reddit Help, Spam (updated May 19, 2026): https://support.reddithelp.com/hc/en-us/articles/360043504051-Spam
- Reddit Help, How do I keep spam out of my community? (updated March 28, 2026): https://support.reddithelp.com/hc/en-us/articles/28012014962580-How-do-I-keep-spam-out-of-my-community

### Reddit: account/reputation state can affect distribution before any marketing hypothesis is tested

Reddit's reputation filter can automatically filter content from accounts that may be potential spammers, likely to have content removed, or are unestablished. It uses Reddit-wide account signals including Contributor Quality Score inputs. Therefore a post that receives little visible distribution is not automatically evidence that its topic or product has weak demand; moderation/filtering state is a separate causal layer.

Source:
- Reddit Help, Reputation filter (updated April 30, 2026): https://support.reddithelp.com/hc/en-us/articles/27441485903124-Reputation-filter

### Google Search: creator/community semantics can support owned knowledge, but markup is not a ranking hack

Google currently supports `ProfilePage` structured data for pages where a person or organization affiliated with a site shares first-hand perspectives. Google says this can help Search understand creators and can be used by discussion/forum experiences. `DiscussionForumPosting` is intended for forum-style pages where people collectively share first-hand perspectives. Google recommends using the structured-data type that actually matches the page rather than stacking unrelated types.

Eligibility requires content/general/technical structured-data guidelines, and Google explicitly does not guarantee that eligible markup will produce a rich result. Structured data therefore describes a truthful page; it does not manufacture authority, rankings, or demand.

Google's current implementation workflow is also operationally useful: validate markup, deploy on a small set of pages, inspect URLs, allow recrawl/reindexing, monitor Search Console, and submit/maintain sitemaps. This supports a low-cost owned-content measurement loop without paid acquisition.

Sources:
- Google Search Central, ProfilePage structured data: https://developers.google.com/search/docs/appearance/structured-data/profile-page
- Google Search Central, Discussion forum/Profile page announcement and usage distinction: https://developers.google.com/search/blog/2023/11/discussion-and-profile-markup

## New operating model — EM0–EM5 Community Promotion & Owned-Knowledge Integrity Gate

**EM0 — Venue/permission identity**
Record the exact community/account, ownership relationship, current community rules, promotional/link/disclosure requirements, moderator guidance if any, and account/reputation constraints. Never substitute a generic "10% rule" for actual community permission.

**EM1 — Contribution identity**
Classify the proposed contribution before publishing: direct product promotion, product-support answer, independent specialist explanation, first-hand case/data, community administration, or owned-web article. The user benefit must remain intelligible even when the product link is removed.

**EM2 — Repetition/distribution integrity**
Prevent copy-paste cross-posting, repeated promotional comments, unsolicited DM/tagging, karma farming, automated promotional bots, or generative-AI mass distribution. Reuse the underlying verified knowledge, not identical promotional payloads.

**EM3 — Disclosure and destination integrity**
Where product affiliation matters, do not masquerade as an independent user. Any link must lead to the promised useful destination, not a redirect/link-farm path. Community-specific disclosure/link rules override the company's preferred CTA.

**EM4 — Owned-knowledge durability**
When a community question reveals a durable specialist information need, consider producing a first-class owned resource only if the company can add real verified value. Preserve author/organization identity and, where page semantics genuinely qualify, use appropriate Article/ProfilePage/forum markup. Markup follows content; content is never created merely to obtain markup.

**EM5 — Qualified-value decision**
Evaluate `permitted contribution → useful engagement → qualified referral/search discovery → truthful destination → first specialist value → repeat specialist value`. Do not optimize for post count, link count, karma, raw clicks, or indexed-page count. Moderation/filtering/removal state must be separated from demand conclusions.

## MintTap application

`r/MintTapforYieldMax` is an owned community surface, but ownership does not justify turning it into an app-link feed. Its strategic role should be a specialist YieldMax knowledge/community asset whose posts remain useful without a CTA. Product announcements and support can coexist with distribution/ROC/tax-methodology education, data explanations, change logs, and transparent limitations.

For third-party investing/YieldMax communities, maintain a venue registry before participation:
`community → rule snapshot/date → promotion allowed? → links allowed? → disclosure expectation → moderator contact/permission if needed → account state → contribution history → removals/filtering → qualified referrals → decision`.

A durable question repeatedly arising on Reddit can become a minttap.app knowledge article when MintTap can contribute verified analysis. The owned article should answer the question directly; Reddit should not receive a teaser whose sole purpose is to force an outbound click.

Do not infer weak YieldMax demand from a removed/filtered post. First classify whether distribution was suppressed by rules, reputation/filtering, account state, or spam-like repetition.

## LogMate application

Pilot communities are professionally sensitive and often have established norms. Before launch, build the same permission registry for any candidate pilot/aviation community. Educational material on logbook concepts, import semantics, record portability, or regulatory-source interpretation can support authority only when technically verified; do not convert safety/regulatory questions into promotional bait.

Because LogMate is not yet launched, the objective is not to seed repetitive launch links. The objective is to establish which communities permit developer participation, what information pilots repeatedly need, and which of those needs can be answered truthfully by the shipped product or durable owned documentation.

## Reusable company framework

Maintain two linked registries.

### Community permission ledger
`platform → community → ownership → rule URL/snapshot/date → promo policy → link policy → disclosure rule → moderator permission → account/reputation state → contribution type → removal/filter state → reason → qualified outcome`

### Knowledge-demand ledger
`observed question/problem → venue/date → recurrence evidence → specialist importance → verified source set → owned-resource candidate → creator/author identity → schema eligibility → Search Console state → qualified organic discovery → product relevance → first/repeat value`

This turns zero-cost community marketing into an evidence system: communities reveal language and unresolved jobs; owned content preserves only durable, verified knowledge; Store/product surfaces receive users only when the promise matches actual utility.

## Canonical corrections

- `Reddit promotion ≠ automatically spam`
- `10% convention ≠ universal Reddit permission`
- `community permission ≠ permission for repetitive mass promotion`
- `post removal/filtering ≠ weak market demand`
- `high karma/upvotes ≠ qualified acquisition`
- `community ownership ≠ license to make every post promotional`
- `AI-assisted drafting ≠ permission to automate distribution`
- `structured data eligibility ≠ ranking guarantee`
- `schema markup ≠ expertise or authority`
- `Reddit answer → owned article ≠ copy/repost`; the owned resource must add durable verified value
- `indexed pages ≠ growth`; qualified specialist value remains the downstream objective

## Next evidence target

Apply EM to the actual `r/MintTapforYieldMax` rules, moderation history, contribution mix and referral evidence, then inspect minttap.app's current knowledge/content architecture and Search Console evidence. Determine whether repeated community questions justify a small number of durable owned resources. For LogMate, defer promotional posting and build the community-permission ledger before launch.