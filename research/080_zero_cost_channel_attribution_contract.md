# 080 — Zero-Cost Channel Attribution Contract

Date: 2026-09-18
Status: CANONICAL

## Decision
Zero-cost community/blog/social distribution must be measurable without turning attribution into a growth claim. The canonical rule is:

**Tag the route before scaling the route; attribution identifies origin, not value.**

A Reddit, blog, social, or owned-community link is useful marketing infrastructure only when its source identity can survive far enough to be joined to Store acquisition and, where technically available, downstream first-value/useful-return evidence. Install count alone remains insufficient.

## Authoritative platform findings

### Apple
App Store Connect supports campaign links. A campaign token identifies an individual campaign and the provider token identifies the developer account. Campaign data may take more than 24 hours to appear, and dashboard metrics appear only after the minimum threshold of five is reached. Detailed campaign reports have stricter privacy protection; very small user groups may be withheld or combined.

Implication for sparse niche apps: absence of a visible campaign row is not proof of zero traffic. Do not fragment every Reddit post/comment into a unique campaign if doing so guarantees privacy-threshold starvation.

### Google Play
Current Play Console store-performance analysis can filter by traffic source, store listing, country, language, UTM source/campaign, and acquisition state. Downloadable reports expose traffic source, search term, UTM source and UTM campaign. Google warns that Play Store organic is the aggregate of organic search and organic browse, so summing the parent row with both children double-counts traffic.

Implication: Android can support a stable source-family taxonomy for zero-cost links, but reporting hierarchy must be respected.

## Sparse-niche attribution architecture

Use three levels, not one token per post:

1. `source_family` — reddit / blog / social / owned_community / direct_partner
2. `intent_family` — the specialist job being promised, e.g. MintTap `roc_tracking`, `distribution_tracking`; LogMate only after earned promises exist
3. `campaign_wave` — a bounded launch/release/education wave, not every individual comment

Post-level identity is optional diagnostic metadata outside Store campaign tokens when sample size permits. This preserves enough aggregation to survive privacy thresholds.

Canonical join:

`source family → intent family → Store route → Store acquisition → first value → useful return → legitimate ad-bearing use`

Do not infer the right-hand side from the left-hand side.

## Community integrity rule

Reddit's current guidance says promotional content is not inherently spam, but individual communities may prohibit it or use their own promotional ratios. Repeated unwanted/unsolicited mass engagement is spam. Reddit also recommends relevant, natural mentions and contacting moderators when uncertain.

Therefore attribution tags must never justify repetitive posting. A measurable link does not grant permission to distribute it.

Canonical rule:

**Permission precedes attribution; attribution precedes scaling.**

## Measurement interpretation

For each source-family × intent-family × wave, retain counts where possible:
- link/store visitors
- Store acquisitions
- first-value completions
- useful returns
- qualified feedback incidents
- legitimate ad-bearing returns/revenue only after existing ad gates

Do not rank sources by clicks, installs, CTR, or campaign visibility alone. In sparse cohorts, report raw counts/window/unknowns before percentages. Treat privacy-suppressed or threshold-hidden cells as `unknown/suppressed`, never zero.

## MintTap application

Reddit/blog/community distribution should converge on a small stable taxonomy rather than unique tags for every post. Candidate intent families may only use promises already earned by product evidence. Current source→first-value/useful-return semantics remain incomplete, so this framework is instrumentation readiness, not permission to scale acquisition.

## LogMate application

Do not establish public campaign intent families from roadmap features. Wait until a pilot job has production first-value evidence under 068. Source taxonomy can be prepared, but public acquisition remains evidence-gated.

## Anti-patterns
- one campaign token per Reddit comment in a tiny audience
- interpreting privacy-threshold absence as zero demand
- combining Play organic parent and search/browse children
- declaring Reddit better than blog from installs alone
- using tracking links in communities where self-promotion is disallowed
- changing campaign taxonomy every release so longitudinal comparison becomes impossible
- recruiting ad views/clicks as a campaign objective

## Operational gate
Before a zero-cost channel is scaled, require:
1. community/platform permission checked;
2. source family assigned;
3. intent promise earned;
4. Store route identified;
5. campaign/UTM convention fixed before distribution;
6. first-value/useful-return join available or explicitly marked unavailable;
7. privacy/threshold suppression handled as unknown;
8. decision rule uses qualified downstream value, not reach alone.

## Sources
- Apple Developer, App Store Connect Analytics — Campaign links: https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links
- Google Play Console Help — Understand and grow your app's user base: https://support.google.com/googleplay/android-developer/answer/9859173
- Google Play Console Help — Download and export monthly reports: https://support.google.com/googleplay/android-developer/answer/6135870
- Reddit Help — Spam: https://support.reddithelp.com/hc/en-us/articles/360043504051/Spam
- Reddit Help — How do I keep spam out of my community?: https://support.reddithelp.com/hc/en-us/articles/28012014962580-How-do-I-keep-spam-out-of-my-community
