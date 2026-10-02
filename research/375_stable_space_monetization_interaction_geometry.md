# Research 375 — Stable-Space Monetization: Protect Interaction Geometry Before Optimizing Banner Yield

Validated: 2026-10-02

## Why this extends Research 374
Research 374 established that monetization should consume waiting/transition time rather than specialist work. This extension addresses a different failure mode: a non-full-screen ad can still damage a professional workflow if its load changes screen geometry, sits beside high-frequency controls, or creates accidental-click risk.

## Authoritative findings
Google AdMob's current banner guidance recommends:
- separation/buffer between banners and clickable or navigational elements;
- reserving a fixed ad space before the ad loads so delayed loading does not shift app content into/out of the ad position;
- adaptive banners for more consistent sizing across devices/orientations.
AdMob separately identifies banners adjacent to interactive elements, sandwiched between content/navigation, or overlapping content as accidental-click/invalid-activity risks.

Google Play's Ads policy prohibits disruptive ads that appear unexpectedly, cause inadvertent clicks, or impair normal use. Unexpected full-screen interstitials are prohibited; rewarded ads are treated differently when explicitly opted into by the user.

Sources:
- https://support.google.com/admob/answer/6275335
- https://support.google.com/admob/answer/6275345
- https://support.google.com/admob/answer/10094971
- https://support.google.com/googleplay/android-developer/answer/9857753
- https://support.google.com/admob/answer/6201362

## New operating principle
**No layout reflow for monetization.** An ad placement is not workflow-safe merely because it is a banner. If an asynchronous ad load moves a Save, Add, Edit, Next, Back, search result, portfolio row, flight field, or navigation target, the monetization surface has consumed interaction geometry rather than idle space.

This creates a stronger hierarchy:
1. protect task completion;
2. protect tap-target geometry and navigation predictability;
3. protect content legibility;
4. only then optimize eligible ad yield.

## IN0–IN9: Stable-space monetization gate
IN0 specialist job/state
→ IN1 interaction-density classification
→ IN2 protected controls/navigation map
→ IN3 preallocated stable ad geometry
→ IN4 separation/buffer and no-overlap check
→ IN5 device/orientation/adaptive-size check
→ IN6 late-load/no-fill fallback with zero reflow
→ IN7 accidental-click/invalid-traffic monitoring
→ IN8 workflow + revenue measurement
→ IN9 KEEP / RESIZE / MOVE / SUPPRESS / REMOVE.

### Required telemetry
For each eligible surface record at minimum:
- surface/state and workflow class;
- viewport/device/orientation;
- reserved-slot dimensions;
- ad request/load/impression/paid-event;
- layout-shift or geometry-change event;
- distance to nearest protected interactive control;
- navigation or primary-action error/abandonment;
- invalid-traffic/confirmed-click warning state if observable;
- revenue per retained specialist user, not impression volume alone.

## MintTap application
Protected/high-interaction states include portfolio editing, distribution/ROC reconstruction, Tax Adjustment entry/editing, split/reinvestment continuity, and any dense row/action surface. Do not place a banner where late loading can move portfolio rows or primary controls. A bottom banner is not automatically safe if it is adjacent to bottom navigation or action controls. Eligible read-mostly surfaces should reserve the slot from first layout; no-fill should leave the workflow stable rather than collapse/re-expand during active use.

## LogMate application
Flight/multi-leg entry, import/migration, duplicate reconciliation, totals, export/backup and recovery remain protected. In cockpit/professional logging workflows, predictable field and button position is part of usability. A banner that shifts fields or sits next to Next/Save/navigation is disallowed by the internal gate even if an ad network technically accepts it. Read-mostly/search-result surfaces may be evaluated only after stable-space and separation checks.

## Rewarded ads
Google Play exempts explicitly opt-in rewarded ads from the unexpected-interstitial rule, but policy eligibility is not product suitability. Do not gate core MintTap portfolio/accounting functions or LogMate recordkeeping/export/recovery behind rewarded ads. For specialist utilities, optional value exchange requires a genuinely optional, non-core benefit and must not become a usage restriction.

## Decision rule
Do not optimize eCPM, fill, refresh, or placement count on a surface until:
- the ad slot is geometrically stable before load;
- protected controls remain predictably positioned;
- no-fill and late-load cause no task reflow;
- the placement is clearly separated from interactive elements;
- specialist completion/repeated value shows no material deterioration.

Revenue gained by increasing accidental-click exposure or interaction friction is not sustainable revenue.

## Reusable niche-app lesson
For professional utilities, **screen geometry is part of the product contract**. Monetization inventory should be carved from stable, non-interactive space; it should never be created dynamically by displacing the user's work.

## Next learning target
Audit actual MintTap production screens/ad units against P0–P4 plus IN0–IN9. Record every placement's reserved geometry, neighboring controls, load/no-fill behavior, caps/cooldowns, and paid-event telemetry before changing ad pressure.
