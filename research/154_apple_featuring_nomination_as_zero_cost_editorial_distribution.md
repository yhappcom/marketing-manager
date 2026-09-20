# 154 — Apple Featuring Nomination as Zero-Cost Editorial Distribution

Validated: 2026-09-21

## Why this matters
Apple now exposes Featuring Nominations directly in App Store Connect. This creates a zero-media-cost editorial-distribution opportunity distinct from ASO, CPP intent routing, PPO experimentation, ratings/reviews, and paid acquisition. It should be treated as an earned/editorial opportunity, not an entitlement or forecastable acquisition channel.

## Authoritative findings
Apple's current App Store Connect Help says developers can nominate an app for featuring for a new launch or an exciting update. Nominations are considered by Apple's editorial team; submission does not guarantee featuring.

A nomination can identify related apps (up to 10 from the same developer account), platforms, relevant countries/regions, localizations, and approved/published In-App Events. It can include up to five supplemental URLs, including documents/files/art assets and TestFlight public links. Helpful details can describe accessibility, inclusivity, priority, and unique aspects of the app/team.

Apple's nomination reference says plans should be finalized at least three weeks in advance. Bulk CSV import supports up to 50 nominations at a time. This timing makes nomination a release-planning activity rather than a post-release publicity reaction.

Nomination types exposed in Apple's localized help include app launch, app enhancement/major update, and new content/event/offer. The description should explain concrete changes and the purpose of new features.

Sources:
- Apple App Store Connect Help, “Nominate your app for featuring”: https://developer.apple.com/help/app-store-connect/manage-featuring-nominations/nominate-your-app-for-featuring
- Apple App Store Connect Help, “Nominations template”: https://developer.apple.com/help/app-store-connect/reference/nominations/nominations-template

## Strategic interpretation
### Featuring is earned distribution, not a KPI promise
A submitted nomination is evidence only that a pitch was submitted. It is not evidence of editorial interest, featuring, impressions, acquisition, product-market fit, or downstream value. Maintain these states separately:

`eligible moment → truthful nomination → submitted → editorial response/selection unknown or observed → actual featuring surface/reach → qualified acquisition → core value`

Never report “Apple featuring campaign” when only a nomination exists.

### The scarce resource is a credible editorial moment
Submission has no media spend, but weak/repetitive nominations consume organizational credibility and release-planning attention. Do not nominate routine bug fixes, metadata refreshes, cosmetic changes, or marketing-only repackaging as major moments.

### Evidence package beats promotional copy
The nomination should be assembled from already-validated product evidence:
- exact implemented release delta;
- why the change materially improves a specialist workflow;
- screenshots/demo/TestFlight evidence where appropriate;
- relevant accessibility/localization evidence;
- target regions only where the experience is genuinely ready;
- no unsupported finance, tax, investment, aviation-compliance, privacy, or performance claim.

Supplemental URLs are proof surfaces, not an excuse to create unsupported press-style claims.

## MintTap application
Potential future nomination moments are limited to substantial implemented changes that materially improve the YieldMax-investor workflow. Examples may include a genuinely major distribution/ROC/reverse-split workflow advance, significant trustworthy data capability, or a major release—not ordinary ticker additions or routine maintenance.

Any distribution, ROC, tax, split, portfolio-performance, or data-accuracy statement inherits the BE financial-claim provenance gate. Editorial selection must never be presented as Apple validation of financial accuracy or investment usefulness.

Before nominating, verify:
1. the release is implemented/reachable;
2. the change is substantial enough to justify editorial attention;
3. claims pass BE;
4. localizations and target regions are production-ready;
5. supplemental evidence exists;
6. the plan is submitted at least three weeks ahead where practicable;
7. downstream acquisition/core-value measurement is prepared before any featuring occurs.

## LogMate application
LogMate may have stronger editorial moments around a meaningful launch or substantial import/offline/sync/workflow enhancement, but featuring is never aviation-regulatory validation. Claims about logging compliance, recency, legal limits, or authority requirements must be independently substantiated before appearing in nomination material.

## BR0–BR5 Featuring Nomination Gate
**BR0 — Moment identity**
Record release/version, launch/update/content-event type, planned publish window, target platforms and responsible owner.

**BR1 — Editorial-worthiness**
Require a material user-facing launch/change with specialist relevance. Routine maintenance and marketing-only changes fail.

**BR2 — Truth/proof integrity**
Every consequential statement must map to implemented product evidence and applicable claim-provenance gates. Supplemental materials must support, not expand beyond, the evidence.

**BR3 — Readiness/localization**
Confirm target countries, localizations, accessibility claims, TestFlight/release readiness and attached In-App Event state where used.

**BR4 — Submission semantics**
Capture draft/submitted date, nomination type, target release date/window, supplemental URLs and any Apple response. Submission is not selection; selection is not guaranteed reach.

**BR5 — Outcome integrity**
If featured, separately capture actual surface/date/territory, attributable Store exposure where available, qualified acquisition, first value and useful return. Do not credit a nomination for organic movement without defensible attribution.

## Anti-patterns
- Nominate every release because submission is free.
- Call submission “featuring.”
- Inflate routine maintenance into a major update.
- Use Apple editorial selection as proof of financial/aviation correctness.
- Add unsupported claims solely to make the story more newsworthy.
- Target regions whose localization/product experience is not ready.
- Wait until after release to begin a nomination that should have been planned three weeks earlier.
- Optimize for editorial attention while downstream first-value instrumentation is absent.

## Reusable operating record
`app | version/release_ref | nomination_type | material_change | specialist_problem | evidence_refs | claim_gate_refs | platform | territories | localizations | planned_publish_window | submitted_at | supplemental_urls | Apple_response | featured_surface/date/territory | acquisition_evidence | first_value | useful_return | status`

## Decision
Add Apple Featuring Nominations to the company zero-cost launch/growth toolkit, but only as a gated earned-editorial mechanism for genuinely material releases. It is not a routine ASO tactic and not a forecastable acquisition source.