# 127 — Zero-Cost Campaign Links as Sparse-Niche Channel Measurement

Date: 2026-09-19

## Decision
For a niche app with little or no paid acquisition, every controllable outbound Store link should be treated as a measurement instrument, not merely navigation. Reddit, owned blog, social profile, release note, support article and cross-promotion links need stable channel/campaign identity so the company can distinguish *qualified acquisition* from raw clicks or downloads.

Canonical principle: **zero-cost distribution is not unmeasurable distribution. Preserve channel identity through the Store boundary whenever the platform permits it, then judge the channel by downstream utility rather than install count.**

## Newly validated platform facts
Apple App Store Connect Analytics can generate campaign links using URL campaign parameters. A campaign token can be tied to impressions, product-page views, downloads, usage, sales and subscriptions. Results can also be filtered by dimensions such as territory, device and page type. Apple states campaign data appears only after the campaign has run for at least 24 hours and dashboard metrics must reach a minimum threshold of 5. Detailed exports apply stricter privacy protections and may suppress or combine very small cohorts.

Apple attributes a first-time download when it occurs within 24 hours after use of the campaign link/token. If a user clicks multiple campaign links in the relevant period, the most recent link receives credit for subsequent sales. A manual redownload can reset the recorded acquisition source, so source attribution is not an immutable lifetime identity.

Google Play's Install Referrer API can securely expose the referrer URL plus click/install timestamps and first-installed app version to the installed app. This makes first-party source/campaign continuity technically possible without buying an attribution vendor, provided the link/referrer taxonomy and app instrumentation are implemented correctly.

These systems are not equivalent. Apple campaign analytics is Store-side privacy-thresholded campaign reporting. Google Install Referrer is device/app-side referral retrieval. Do not force one platform's attribution semantics onto the other.

## AS0–AS5 — Sparse-Niche Channel Attribution Gate

### AS0 — Unmeasured distribution
All Reddit/blog/social/community links use the same naked Store URL. Channel performance is inferred from posting dates, impressions or anecdotes.

### AS1 — Click vanity
Links are tagged in a website/social analytics layer, but Store acquisition and downstream app utility cannot be connected. Clicks are treated as acquisition.

### AS2 — Campaign identity exists but taxonomy is unstable
Some Apple campaign tokens or Play referrers exist, but names are ad hoc, reused across materially different surfaces, missing from posts, or not joined to first value/useful return.

### AS3 — Decision-grade zero-cost attribution
Require all of:
- stable canonical channel and campaign taxonomy;
- one campaign identity for each materially distinct distribution hypothesis, not every individual post by default;
- Apple campaign links for controllable iOS destinations when available;
- Play referrer continuity for controllable Android Store links where implemented;
- raw click/view metrics kept separate from Store views/downloads;
- first value and useful-return outcomes measured separately from acquisition;
- privacy thresholds/missing cohorts treated as censored evidence, not zero performance;
- link registry with owner, destination, creation date and retirement state;
- no unnecessary personal identifiers in campaign names or referrer payloads.

### AS4 — Qualified-channel economics evidenced
Repeated observations show a channel/campaign family produces meaningful first value and useful return relative to the scarce attention/operating cost required to maintain it. A higher-download channel does not outrank a lower-volume channel with materially stronger qualified utility merely because its top-of-funnel count is larger.

### AS5 — Reusable niche launch system
The same taxonomy, link registry, privacy handling, Store-boundary attribution and downstream-quality model can be reused for future niche apps while preserving app-specific specialist intent and cadence.

## Taxonomy rule
Prefer a small durable vocabulary over per-post token explosion.

Minimum logical fields:
`app, platform, channel_family, surface_or_community, intent_family, campaign_epoch, destination_owner`

Examples of channel families: `reddit`, `owned_blog`, `social_profile`, `social_post`, `support`, `cross_promo`, `direct_partner`.

Do not encode usernames, user IDs, email addresses or other personal data in campaign tokens/referrers.

## Sparse-data rule
Apple's threshold of 5 and detailed-report privacy suppression are especially material for MintTap and LogMate. A missing campaign row or metric is not evidence of zero response. Preserve the campaign identity, widen the observation window when analytically legitimate, and report the cohort as threshold-censored when it remains hidden.

Do not merge unrelated specialist intents merely to cross a privacy threshold. Statistical visibility is not permission to destroy semantic validity.

## Channel-quality funnel
Use:
`eligible audience exposure → outbound click → Store page view → download/install → first value → useful return → sustainable ad-bearing use`

The first two stages may come from community/blog/social analytics; Store and app stages use platform/app evidence. Do not fabricate deterministic person-level joins where privacy/platform constraints only support aggregate inference.

## MintTap implication
Use distinct campaign families for materially different owned/community hypotheses, for example a Reddit answer addressing YieldMax distribution tracking versus an owned article explaining ROC/tax-adjustment workflow. Do not create ticker-by-ticker campaign fragmentation unless the intent and destination evidence are actually different.

The r/MintTapforYieldMax community should be measured as a specialist trust/distribution surface, not optimized for raw outbound clicks. A post that produces fewer downloads but more completed portfolio setup and useful return can be the superior channel artifact.

## LogMate implication
Before launch, define the taxonomy and link registry, but do not manufacture acquisition traffic before manual entry, persistence, totals/search and offline/backup evidence is ready. Pilot communities are scarce trust surfaces; attribution should help identify qualified pilot acquisition without turning participation into link spam.

## Company operating rule
Every controllable zero-cost Store link should answer four questions:
1. What specialist intent is this distribution artifact serving?
2. Which Store destination owns that intent?
3. Can the platform preserve enough campaign/referrer identity to evaluate it?
4. Did acquired users reach first value and useful return?

If question 4 is unknown, the company knows distribution volume, not channel quality.

## Authoritative sources
- Apple Developer — App Store Connect Analytics: Campaign links (current 2026 help).
- Apple Developer — App Store Connect Analytics: Acquisition (current 2026 help).
- Android Developers — Google Play Install Referrer API (official guide; updated 2025-07-27).

## Next validation
Audit MintTap's current public/owned Store links and build a link registry from observed evidence: Reddit, website/blog, social profiles/posts, support/release surfaces and any cross-promotion. Check whether Apple campaign tokens or Play referrers are already used. Classify AS0–AS4 only from actual links and downstream instrumentation.