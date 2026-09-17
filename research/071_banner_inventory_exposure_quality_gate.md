# 071 — Banner Inventory Exposure-Quality Gate

Date: 2026-09-17
Status: CANONICAL RESEARCH

## Question
How should a zero-cost, ad-supported specialist app increase banner revenue without converting mere screen time, navigation loops, or workflow friction into low-quality ad inventory?

## First-party platform evidence refreshed 2026-09-17
Google Mobile Ads documentation currently distinguishes banner surfaces by layout context. Anchored adaptive banners remain fixed while the user interacts with the app. Inline adaptive banners are recommended when ads live inside scrollable content. Automatic banner refresh, when configured in AdMob, occurs only while the banner is visible on screen. Large anchored adaptive banners can occupy materially more vertical space and are intended for non-scrolling layouts.

These implementation capabilities do not establish that every visible second or every eligible screen should be monetized.

## Core distinction
`technical visibility ≠ useful exposure ≠ legitimate monetizable exposure`

A banner impression is commercially useful only when the surrounding product state remains useful to the user and the placement does not create, prolong, or exploit friction.

## Exposure-quality ladder

### E0 — synthetic/non-user exposure
Debug, test, automation, screenshots, render/golden work. Never production revenue evidence.

### E1 — workflow-friction exposure
The user is stuck, correcting data, waiting for validation, reconciling conflicts, or recovering from an error. Do not optimize banner revenue here. Time spent is product friction, not valuable dwell.

### E2 — protected-work exposure
The user is entering/editing data or performing a high-attention professional/financial task. A banner may technically be visible, but its presence must not reduce usable workspace, cause layout instability, invite accidental taps, or compete with the task. Default: no new inventory pressure.

### E3 — transition exposure
Navigation/loading/handoff before personal value is confirmed. Do not manufacture duration or refresh opportunities.

### E4 — completed-value reading exposure
The user has reached a complete personal result and is reading/interpreting it. This is the first serious banner candidate, provided the complete value block remains visually dominant and interaction is not obstructed.

### E5 — repeated low-risk browsing exposure
The user voluntarily browses secondary/detail/history content after value is established. This is the strongest candidate for sustainable banner inventory, subject to placement-level evidence.

### E6 — artificial exposure inflation
Extra pagination, forced dwell, unnecessary refresh, repeated navigation, hidden content, or layout choices whose primary purpose is creating more ad opportunities. Prohibited internally even where a narrow implementation might technically be possible.

## Canonical principles

### 1. Visible Time Is Not Revenue-Quality Time
Do not treat session duration or banner-visible seconds as automatically positive. Longer time caused by confusion is a product defect.

### 2. Do Not Monetize Friction
Error correction, reconciliation, validation, setup, first-data entry and save→first-value handoff cannot become attractive inventory merely because users spend time there.

### 3. Value Density Before Ad Density
Optimize the amount of useful specialist value per visit before increasing ad opportunities per visit.

### 4. Stable Inventory Before Refresh Inventory
First prove that a placement is legitimate and useful with a stable banner. Only then evaluate refresh behavior. Refresh is not a substitute for additional user value.

### 5. Refresh Eligibility Requires Continued Useful Context
A visible banner may auto-refresh under platform configuration, but internal eligibility requires that the user is still voluntarily consuming useful content. Do not interpret passive foreground time as evidence of continued value.

### 6. Navigation Loops Are Not Inventory Growth
Repeated detail↔home movement must not be counted as a monetization success until duplicate requests/impressions and user intent are understood.

### 7. Placement Revenue Must Be Joined to Product Outcomes
Evaluate placement-level request, match/fill, impression and aggregate revenue alongside useful-return completion, downstream navigation, rapid exit/background and retained qualified use.

## Banner format decision rule
Use product layout first:
- fixed/non-scrolling surface: anchored adaptive may be technically appropriate;
- scrollable content: inline adaptive is the platform-recommended banner family;
- larger anchored formats require stronger evidence because they consume more scarce specialist-workspace height.

Technical format fit never overrides E0–E6 exposure quality.

## Refresh decision gate
Do not enable/increase automatic refresh merely to raise impression count. Before changing refresh behavior require:
1. placement is E4/E5;
2. banner remains actually visible in a legitimate useful context;
3. no protected task is resumed while the placement persists;
4. no layout movement or interaction interference;
5. placement-level revenue evidence exists;
6. downstream useful-return and rapid-exit guardrails exist;
7. test duration and decision rule are precommitted.

If these conditions are absent, refresh optimization is NOT ELIGIBLE.

## MintTap application
Current highest-priority question remains the Home inline placement. Before changing size, location or refresh:
- identify the exact complete personal-value block before the ad;
- determine whether the current ad is E4 or E5 rather than B1/B2/B3 from research 069;
- instrument request/impression/revenue by placement;
- distinguish first Home arrival, detail-return, and repeated navigation;
- detect rapid exit/background after exposure;
- do not count Import save→Home handoff dwell as banner opportunity.

Until this evidence exists, increased refresh or larger banner formats are NOT ELIGIBLE.

## LogMate application
No production specialist workflow has yet earned a validated first-value boundary under 068. Therefore banner optimization is premature. In particular, future manual flight entry, correction, duplicate resolution, import review, backup/restore and sync-conflict work should begin as protected E1/E2 surfaces, not revenue inventory.

## Reusable placement ledger fields
For each candidate placement record:
- product surface and state;
- E0–E6 classification;
- preceding completed value block;
- user intent at exposure;
- scrollable vs fixed layout;
- banner family/size;
- request count;
- matched/filled count;
- impression count;
- visible duration distribution if privacy-safe;
- refresh enabled/rate;
- aggregate revenue;
- repeated request after navigation return;
- useful-return completion;
- rapid exit/background;
- known accessibility/performance/layout incidents;
- decision: prohibited / observe / eligible / test / retain / remove.

## Decision metric
Do not optimize `impressions per session` in isolation.

Prefer a constrained objective such as:
`qualified retained use × legitimate E4/E5 exposure opportunities × monetization yield`
subject to activation, useful-return, accessibility, performance and trust guardrails.

## Claim ceiling
This framework does not establish that any current MintTap or LogMate banner placement is optimal, nor that banner refresh increases long-run revenue. Those remain empirical questions requiring placement-level product and aggregate monetization evidence.

## Next evidence target
Build the MintTap Home placement ledger from production evidence: exact preceding value block, request/impression lifecycle across Home/detail returns, aggregate revenue linkage, and rapid-exit/useful-return guardrails. Do not change refresh or banner size before that ledger exists.
