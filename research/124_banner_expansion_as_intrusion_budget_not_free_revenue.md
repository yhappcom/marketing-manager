# 124 — Banner expansion is an intrusion budget, not free revenue

Validated: 2026-09-19

## Decision

A banner format being technically persistent or user-collapsible does not make expansion free of interruption cost. For sparse professional apps, banner monetization must begin with a stable layout reservation and protected-control separation. Expanded/collapsible variants require a separate intrusion justification.

## Authoritative findings

Google Mobile Ads currently distinguishes anchored adaptive, inline adaptive, large anchored adaptive, and collapsible banners. Anchored adaptive banners occupy a persistent top/bottom layout region and calculate an optimized fixed aspect ratio from available width. Their returned height remains stable across refreshes, allowing surrounding content to remain in place. Inline adaptive banners are intended for scrollable content. Large anchored adaptive banners can occupy up to 20% of screen height, bounded at roughly 50–150 dp/points depending on platform documentation.

Collapsible banners initially appear as a larger overlay and expose a control to collapse to the requested anchored size. Google explicitly notes that repeatedly showing the collapsible treatment on auto-refresh could negatively affect user experience; subsequent auto-refreshes therefore do not request another collapsible ad. Collapsible demand is Google-only; mediated demand falls back to a normal banner.

Google AdMob guidance also identifies proximity between banners and navigation/interactive elements as a major source of accidental clicks. Confirmed Click can be applied when click quality suggests accidental clicks. Therefore CTR is not a safe standalone banner objective.

Sources:
- https://developers.google.com/admob/flutter/banner
- https://developers.google.com/admob/flutter/banner/collapsible
- https://support.google.com/admob/answer/6275345
- https://support.google.com/admob/answer/10094971
- https://support.google.com/admob/answer/3342099

## AP0–AP5 Banner Intrusion-Budget Gate

### AP0 — prohibited/misfit
Banner overlaps, crowds, imitates, or creates accidental-click risk around protected controls/content; artificial layout obstruction is created solely to force attention; live ads are used during developer interaction/testing.

### AP1 — inventory chasing
A banner is added because empty pixels exist, or larger/collapsible formats are selected solely because they may earn more, without a natural persistent surface and downstream guardrails.

### AP2 — plausible placement
A persistent region exists and a technically valid adaptive size is used, but protected-control spacing, layout stability, opportunity denominator, accessibility states, or downstream economics remain unverified.

### AP3 — product-fit banner
Require all of:
1. surface exists independently of monetization and can reserve banner geometry without hiding core information;
2. adaptive sizing is appropriate to the surface: anchored for stable non-scrolling reservation; inline only for genuine scroll content;
3. no overlap or dangerous proximity to navigation, edit/delete/save/submit controls, charts requiring touch, warnings, or other high-intent interaction;
4. layout remains stable on load/fail/refresh/orientation/text-size/safe-area changes;
5. test ads/test devices are used for QA;
6. denominator is eligible visible banner time/sessions, not all sessions;
7. U-compatible paid-event revenue and B/E retention/reputation guardrails exist;
8. privacy/age-rating requirements remain satisfied;
9. placement, unit, refresh/config, owner, and retirement trigger are registered.

### AP3-C — additional collapsible requirement
Collapsible is not inherited from AP3 automatically. It additionally requires a real hypothesis that temporary expansion creates incremental retained-user revenue worth the obstruction cost; expansion must not cover protected task state; repeat expansion is bounded; standard-banner fallback remains acceptable; mediation behavior is understood. A collapse control does not erase the initial interruption.

### AP4 — validated economics
Incremental paid-event revenue is observed against an appropriate stable-banner/control state without material degradation in first value, useful return, task completion, accidental-click/Confirmed-Click signals, support/review sentiment, or layout/accessibility quality. Larger format/eCPM/CTR alone cannot establish AP4.

### AP5 — reusable operating system
The company maintains a cross-app banner registry with surface class, format, geometry, protected-control exclusion, eligibility denominator, refresh/expansion policy, ILAR evidence, guardrails, owner, and retirement rule. Expansion budget is portable but product-specific.

## MintTap application

Protected zones include transaction entry/edit/delete, portfolio controls, ticker switching, ROC/tax adjustment, distribution details, calculations/warnings, and touch-sensitive charts. A bottom anchored adaptive banner may be evaluated only where a permanent reserved region does not compete with these tasks. Large anchored or collapsible formats are not upgrades by default. A collapsible banner that initially covers portfolio information or controls fails AP3-C even if the user can collapse it.

## LogMate application

Flight entry, save/edit/delete, totals/search, import/duplicate review, backup/restore, offline/recovery state, and any operational warning are protected. LogMate's scarce pilot evidence should not be spent on expanded-banner experiments before core workflow and natural cadence are validated. Stable anchored inventory, if any, must be subordinate to record integrity and rapid task completion.

## Measurement contract

Track: eligible visible opportunities → requests → fills → visible impressions → paid events/revenue, plus format/placement and expansion state. Pair with task completion, first value, useful return, layout/accessibility regressions, accidental-click/Confirmed-Click signals, support/review sentiment. Do not optimize request count, raw CTR, or eCPM in isolation.

## Operational consequence

The ad hierarchy is now state + geometry aware: core foreground is protected; persistent banner inventory requires B/E/AP; genuine content adjacency requires AO; optional exchange AN; genuine wait AM; post-task transition F/E. Collapsible banner is an AP3-C exception, not a default revenue enhancement.
