# Marketing Manager Status

Last updated: 2026-09-15

## Current phase

**Stage 1 — Marketing Foundations + mandatory yhappcom applied foundation supplement**

Repository governance is initialized, Design Studio alignment is complete, company-specific marketing/monetization constraints are incorporated, and Stage 1 has now advanced through five integrated research blocks plus the first applied MintTap/LogMate niche-mapping exercise.

No live app-marketing assignment currently overrides the curriculum.

## Company operating context locked into Foundation

Canonical context:

- `context/COMPANY_MARKETING_CONSTRAINTS.md`
- `curriculum/STAGE1_YHAPPCOM_APPLIED_FOUNDATIONS.md`

Current business constraints and owner preferences:

- marketing should default to little or no direct cash spend;
- App Store / Google Play pages are core marketing surfaces;
- Reddit/community/blog/editorial operation is a primary growth capability;
- social media should be used selectively based on real audience-channel fit;
- current products serve narrow specialist audiences rather than broad consumer markets;
- MintTap currently targets YieldMax-oriented investors;
- LogMate currently targets airline/professional pilots;
- current monetization assumption is advertising revenue as the primary/only intended revenue path unless the owner changes that policy;
- cluttered, intrusive, or access-limiting advertising is contrary to owner preference;
- Marketing Manager must maximize sustainable ad revenue subject to usability, trust, retention, accessibility, and performance constraints.

“Zero-cost marketing” means minimizing cash acquisition spend, not assuming owner time, content, moderation, design, engineering, measurement, or opportunity cost is zero.

## Completed substantive research

### `research/001_marketing_foundations.md`

Foundation evidence covering marketing as a value/exchange system, marketing-mix history/limits, market orientation, and the distinction between marketing, advertising, promotion, sales, product marketing, and growth.

### `research/002_choice_value_uncertainty_trust.md`

Integrated economic/behavioral foundation completed around:

- perceived value versus objective product capability/quality;
- monetary and non-monetary user sacrifice;
- utility/opportunity-cost discipline;
- why a free app still has adoption and usage costs;
- bounded rationality;
- heuristics and framing under uncertainty;
- information search cost;
- information asymmetry;
- brand credibility as a signal under uncertainty;
- switching costs and status-quo competition;
- implications for niche-app adoption and restrained advertising.

Key retained mechanism:

`objective capability → perceived relevance/benefit → search cost/uncertainty/trust → comparison with status quo → switching/setup cost → trial → realized value → usage friction/ad burden → retention/referral → long-run monetizable usage`.

Important conclusion: **zero-dollar price does not mean zero user cost.**

### `research/003_niche_distribution_community_economics.md`

Integrated niche/community foundation completed around:

- why specialist markets should optimize relevant-user penetration rather than gross reach;
- finite-market ceilings and penetration thinking;
- consumer knowledge and specialist information needs;
- community as a social system rather than free ad inventory;
- virtual-community participation and norms;
- network structure and diffusion across clusters;
- positive and negative word of mouth;
- why virality is not the default company objective;
- cash cost versus labor/opportunity cost;
- demand capture versus demand creation;
- community overfitting risk;
- mechanism-based organic channel selection.

A preliminary zero/low-cash channel matrix exists at mechanism level.

### `research/004_cash_light_acquisition_economics.md`

Integrated cash-light acquisition economics completed around:

- zero media spend does **not** imply zero acquisition cost;
- cash acquisition spend and fully loaded acquisition cost must be reported separately;
- owner/manager time is a scarce marketing resource;
- acquisition and retention are joint economic decisions;
- retention duration alone is not profitability and must not be romanticized;
- use a metric ladder from qualified reach → store visit → install → activation → retained relevant user → monetizable retained activity;
- durable organic assets and transient feed posts have different economics;
- evaluate the **marginal return of the next unit of effort**, not only historical average performance;
- “free” channels require explicit reduction/exit rules;
- cash-light marketing is fundamentally a time-allocation and attention-allocation problem when paid media is near zero.

Primary anchors include Blattberg & Deighton (1996), Rust/Lemon/Zeithaml (2004), and Reinartz & Kumar (2000).

### `research/005_ad_supported_unit_economics_and_ux_guardrails.md`

Integrated ad-supported monetization foundation completed around:

- ad revenue decomposes through active users → sessions → eligible opportunities → requests → match → show → impressions → revenue per impression;
- current Google AdMob definitions for requests, match rate, show rate, impressions, eCPM, and Ads ARPU were verified on 2026-09-15;
- eCPM is a price-like diagnostic metric, not the business objective;
- same-day impressions/revenue can increase while long-run value falls if ad load damages retention;
- current AdMob major format set includes banner, interstitial, native, rewarded, rewarded interstitial, and app-open, but availability does not imply suitability;
- ad placement must follow real task boundaries rather than inventing interruptions for monetization;
- invalid/accidental clicks are both UX and policy risk;
- ad experiments require serving metrics + core-task behavior + retention/trust + long-run economic metrics;
- limited niche replacement supply makes retained-user trust strategically important.

`CHANGE WATCH`: AdMob policy/format/privacy/consent/mediation behavior requires current-source verification before production advice.

## First applied Foundation exercise completed

### `exercises/001_niche_maps_minttap_logmate.md`

A first evidence-bounded niche map was completed for both products using product repositories plus current market/community evidence.

### MintTap — verified product context

Product source checked: `yhappcom/yieldmax_tracker`, branch `1.0.29`.

Verified product areas include:
- YieldMax-style ETF positions;
- dividends/distributions;
- total performance;
- cost basis and realized/unrealized P&L;
- tax-aware views;
- ROC-related information;
- split/reverse-split history;
- ex/pay/distribution timing;
- notifications;
- Google Mobile Ads in the stack.

Current external evidence confirms:
- active dedicated `r/YieldMaxETFs` discussion;
- YieldMax discussion also exists in broader dividend communities;
- official YieldMax data creates recurring information objects around distributions, schedules, ROC estimates, and later final classification.

First-pass candidate channels:
- store pages;
- dedicated YieldMax communities;
- owned searchable educational content;
- cautiously selected adjacent dividend/income communities.

Generic mass social remains low priority until evidence supports it.

### LogMate — verified product context

Product source checked: `yhappcom/logmate` README.

Verified framing includes:
- Pilot Logbook;
- manual-entry complete usage path;
- optional import;
- local/on-device core;
- cloud-minimal auth/sync layer;
- native iOS/Android + tablet/EFB PWA as first-class targets;
- optional import/export/backup/sync layers.

Current pilot-community evidence shows recurring comparison criteria around:
- price/free access;
- cross-platform operation;
- backup/export;
- migration/import;
- airline interview/acceptance concerns;
- support responsiveness;
- roster integration;
- avoiding lock-in.

Current first-party competitor evidence confirms CSV/PDF export and broad import/roster-integration capabilities are real category features in ForeFlight/CrewLounge.

First-pass candidate channels:
- store pages;
- pilot/professional communities;
- searchable workflow/migration/backup content;
- later validation of professional/flight-school/referral partnerships.

Generic mass social remains low default priority until actual pilot discovery behavior supports it.

## Current retained judgment

- Marketing is broader than promotion and advertising.
- Broad reach is not automatically valuable for current yhappcom products; relevant niche penetration, credibility, retention, and referral matter more.
- A free app still imposes non-monetary costs on users.
- Search cost makes clear, durable, relevant information economically valuable.
- Information asymmetry makes trust and credible proof central to adoption.
- A better product does not automatically win when switching, setup, learning, or trust costs are high.
- Community is not free advertising inventory; promotion can destroy the trust on which the channel depends.
- Organic marketing has real labor and opportunity cost.
- Owner/marketing time must be budgeted like a scarce resource.
- A channel that produces many low-quality installs can be worse than a smaller channel that produces retained relevant users.
- App Store / Google Play pages are core discovery, trust, and conversion surfaces.
- Social-media presence is not itself a goal.
- eCPM and impressions do not define successful monetization by themselves.
- Advertising revenue cannot be optimized independently from task completion, trust, retention, accessibility, performance, and ratings.
- MintTap and LogMate require separate audience, network, store, content, social, and monetization judgments.
- Product-specific wins must not become universal company doctrine without transfer evidence.

## Mandatory Stage 1 applied exercises — progress

1. **MintTap niche map** — FIRST PASS COMPLETE; market-size/search/source/retention validation open.
2. **LogMate niche map** — FIRST PASS COMPLETE; geography/regulatory/segment/interview validation open.
3. **product-specific zero/low-cash channel matrix** — mechanism-level matrix exists; product-specific scoring still OPEN.
4. **store-page diagnostic model** — OPEN.
5. **community anti-spam failure/revision analysis** — OPEN.
6. **ad-revenue tree** — FOUNDATION COMPLETE in `research/005`; product-data application OPEN.
7. **ad-UX trade-off matrix** — framework established in `research/005`; product-specific placement scoring OPEN.
8. **MintTap vs LogMate strategy comparison** — FIRST PASS COMPLETE in exercise 001.

Reading alone does not satisfy the remaining gates.

## Next integrated learning sequence

1. Build the **store-page diagnostic model** from first principles, then verify current App Store / Google Play rules and experimentation surfaces from first-party sources.
2. Build the **community anti-spam failure→revision model**, then verify current Reddit/community rules for target surfaces.
3. Complete a **product-specific zero/low-cash channel matrix** for MintTap and LogMate using evidence rather than intuition.
4. Inspect MintTap's current ad implementation/telemetry availability before making placement recommendations.
5. Establish the **measurement architecture** needed to connect source → activation → retention → ad revenue.
6. Continue Stage 1 brand/demand-creation-vs-capture/funnel-model foundations where still unresolved.

## Major OPEN / VALIDATION

### MintTap
- current store listings and organic search visibility;
- current acquisition-source mix;
- activation definition and D7/D30 retention;
- current ad format/location/frequency;
- request/match/show/eCPM/Ads-ARPU metrics;
- user search-query data;
- competitor tracker map;
- community assisted-attribution behavior.

### LogMate
- priority launch geography;
- regulatory/airline-positioning boundaries;
- professional-airline vs student/GA audience split;
- current competitor price/feature matrix;
- actual search demand;
- import-source priorities;
- ad model at launch;
- pilot interviews / observed workflows.

### Company-wide
- internal labor-time accounting convention;
- channel-level source tagging;
- activation/retention event definitions;
- privacy-compliant marketing/ad measurement architecture;
- long-run ad revenue per retained user.

## Planned later infrastructure

- marketing source/reference index when research volume justifies it;
- platform/policy change-watch ledger before operational store/social/community/ad-network work;
- quantitative marketing/ad-revenue model templates;
- product-specific marketing case studies when live assignments begin;
- reusable Design Studio/Web Manager handoff templates after real collaboration produces evidence about necessary inputs.

## Progress interpretation

Do not report percentage completion from file count. Curriculum progress is judged by demonstrated capability, evidence quality, applied exercises, and ability to advise real products.

Current status: **Stage 1 active; five integrated Foundation research blocks complete; first MintTap/LogMate niche maps complete; cash-light acquisition and ad-supported unit-economics foundations established; store-page/community operational foundations next.**
