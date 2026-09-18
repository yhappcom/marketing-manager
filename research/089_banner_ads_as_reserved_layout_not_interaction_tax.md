# 089 — Banner Ads as Reserved Layout, Not Interaction Tax

Validated: 2026-09-18

## Decision
**Reserve space for ads; never make normal interaction pay for that space.**

Banner revenue is legitimate only when the ad occupies a stable, clearly separate region that does not overlap, displace at the moment of interaction, imitate, or sit dangerously close to the specialist task surface. CTR is not a primary optimization target because higher CTR can be produced by worse interaction geometry and accidental clicks.

## First-party evidence
Google AdMob's Flutter banner guide states that anchored adaptive banners occupy a top/bottom layout position, remain visible during interaction, and return an optimized height for a supplied width. That height remains constant across refreshes, allowing surrounding content to remain in place. Inline adaptive banners are recommended for scrollable content. Automatic refresh occurs only while the banner is visible. Google also requires test ads during development.

Google's implementation guidance identifies proximity to navigation and other interactive content as a major source of accidental clicks. Ads must not mimic or unexpectedly overlap app content. Google's Confirmed Click system can be applied at app or ad-unit level when accidental-click signals are detected and is lifted only after sustained click-quality improvement.

Collapsible banners initially render as a larger overlay and can improve anchored-banner performance, but Google explicitly avoids requesting a collapsible ad on each automatic refresh because repeated expansion can harm UX. This means 'collapsible' is not merely a higher-yield banner size; it changes interaction semantics and requires a stronger eligibility gate.

Sources:
- https://developers.google.com/admob/flutter/banner
- https://support.google.com/admob/answer/6275345
- https://support.google.com/admob/answer/6293636
- https://support.google.com/admob/answer/10094971
- https://developers.google.com/admob/flutter/banner/collapsible

## B0–B5 Banner Placement Integrity Gate

### B0 — deceptive / overlapping
Ad mimics content, covers content, or can be mistaken for a product control. Reject.

### B1 — interaction adjacency
Banner is directly adjacent to navigation, save/import controls, tables/charts with frequent taps, text-entry controls, or other high-interaction surfaces. Reject until geometry is redesigned.

### B2 — unstable layout
Ad load/refresh causes layout shift, changes the tap target under a user's finger, or inserts/removes space during an active task. Not production-qualified.

### B3 — reserved passive region
Space is structurally reserved; content does not jump when the ad loads/refreshes; ad is visually distinct; no critical control is immediately adjacent; failure-to-fill leaves a predictable layout; accessibility and safe-area behavior are verified. Minimum production candidate.

### B4 — measured interaction-safe inventory
B3 plus per-placement evidence for request/match/impression/revenue, accidental-click/Confirmed-Click signals, task completion, rapid exit, useful return, device/orientation geometry, and accessibility. Banner type is selected by context: anchored for stable top/bottom layout; inline only when scroll semantics justify it. Collapsible requires a separate overlay-risk review.

### B5 — sustainable banner inventory
B4 remains stable across releases and device classes, with retained-useful-user economics improving without worsening task success, rapid exit, support complaints, accidental-click indicators, accessibility, or trust. Revenue growth caused mainly by increasing interaction proximity fails B5.

## Company rules
1. Never optimize banner placement primarily for CTR.
2. Reserve banner geometry before load when feasible; avoid post-load layout shifts.
3. Keep specialist controls and frequent-tap regions away from banner boundaries.
4. Treat Confirmed Click as a placement-quality incident, not merely an ad-tech inconvenience.
5. A no-fill state must not create a later tap-target shift when an ad appears.
6. Anchored, inline, large adaptive, and collapsible banners are different interaction contracts, not interchangeable revenue sizes.
7. Do not deploy collapsible banners by default. Their temporary overlay behavior requires explicit evidence that first value, core task continuity, and trust are unaffected.
8. Use test ad units during development/testing; never create production evidence by clicking live ads.

## MintTap application
Home/portfolio/distribution/ROC/tax/exchange-rate screens are specialist utility surfaces. The existing bottom-banner preference is compatible only if the banner occupies a reserved safe-area-aware region and does not crowd bottom navigation, transaction actions, filters, charts, tables, or other repeated tap targets. The audit must record geometry, not merely ad-unit revenue.

Candidate ledger:
`screen → task state → banner type → reserved geometry → nearest interactive target/distance → load/no-fill/refresh behavior → request → match → impression → revenue → accidental-click/Confirmed-Click signal → task completion → rapid exit → useful return`

Do not infer a universal pixel/dp separation threshold from policy; Google warns against close proximity but the reviewed guidance does not establish one universal safe distance. Validate actual device geometry and interaction patterns instead.

## LogMate application
Log entry, edit, search, totals, import/restore and other data-integrity workflows should not acquire banner inventory merely because a persistent bottom slot is technically available. A banner becomes a candidate only after production-valid task geometry exists and B3 can be demonstrated without reducing operational continuity.

## Reusable launch/growth implication
For future niche apps, define the **free-use interaction contract before the ad map**. Banner inventory is the subset of screen area that remains legitimately passive after the core workflow is designed—not screen area reclaimed from controls or content to raise ad exposure.

## Next validation
Audit actual MintTap Home banner implementation: reserved height before load, safe-area handling, nearest tap targets, no-fill transition, refresh behavior, orientation/device variants, accessibility, and any Confirmed Click history. Join placement revenue to useful-return and rapid-exit evidence before considering larger/collapsible formats.