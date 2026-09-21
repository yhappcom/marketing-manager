# Research 165 — Banner Inventory Refresh, Visibility, and Layout Integrity

Date: 2026-09-21
Status: validated operating addition

## Why this matters
Research 164 established impression-level revenue precision and sustainable-value measurement. This addition closes a narrower implementation gap: banner inventory can create extra requests/impressions without creating durable user value, and layout/refresh mechanics can silently degrade both UX and revenue interpretation.

## Authoritative findings

### 1. Adaptive banner type must match the product surface
Google Mobile Ads documents anchored adaptive banners as fixed-position inventory that remains on screen while the user interacts, normally anchored to the top or bottom. Inline adaptive banners are larger/variable-height inventory intended for scrollable content; Google recommends inline adaptive over anchored adaptive when the ad itself belongs inside scrolling content.

Operational implication: choose format from the actual layout state, not from whichever format yields more visible area. A fixed navigation/task surface and a scrolling results/content surface are different inventory classes.

Sources:
- https://developers.google.com/admob/flutter/banner
- https://developers.google.com/admob/android/banner

### 2. Automatic refresh is visibility-conditioned
Google states that an AdMob banner configured for automatic refresh refreshes only while the banner is visible on screen. The SDK respects the refresh setting configured in the AdMob UI. Therefore app code should not manufacture additional hidden/background refreshes to increase request volume.

This creates an important evidence distinction:
`screen alive != banner visible != refresh eligible != new impression != paid-event revenue`.

Source:
- https://developers.google.com/admob/flutter/banner

### 3. Banner lifetime is part of the implementation contract
For Flutter, Google instructs publishers to dispose of a BannerAd when it is no longer needed, ideally after its AdWidget is removed or after load failure. This makes lifecycle ownership auditable: route transitions, rebuilds and remounts should not create orphaned inventory or unexplained duplicate requests.

Source:
- https://developers.google.com/admob/flutter/banner

### 4. Adaptive sizing protects layout stability
Anchored adaptive banners calculate an optimal height from the available width; Google notes that the resulting height remains constant across ad requests, allowing surrounding content to stay in place when ads refresh. This is commercially relevant because revenue optimization that causes layout shift, accidental taps or task disruption is not acceptable sustainable monetization.

Source:
- https://developers.google.com/admob/flutter/banner

### 5. Test traffic must remain segregated
Google explicitly requires test ads during development/testing and warns that using live production ads for testing can lead to account suspension. Production revenue analysis must therefore exclude development/test inventory and retain an auditable environment/ad-unit distinction.

Sources:
- https://developers.google.com/admob/flutter/banner
- https://developers.google.com/admob/android/banner

## CC0–CC5 Banner Inventory Integrity Gate

**CC0 — Surface eligibility**
- Banner appears only on a previously approved non-core/non-sensitive state.
- Home exclusion and interruption-sensitive workflow exclusions remain authoritative.

**CC1 — Format/layout fit**
- Fixed surface -> evaluate anchored adaptive.
- Scroll-content inventory -> evaluate inline adaptive.
- Do not select format merely to increase ad area.

**CC2 — Lifecycle ownership**
Record `route/surface_id`, `ad_unit_id`, format, load timestamp, widget mount/visible/unmount timestamps, dispose timestamp, orientation/width changes and failure/retry state.
- One logical placement must not accidentally become multiple concurrent ad objects.
- Navigation/rebuild/remount must be distinguishable from a legitimate refresh.

**CC3 — Refresh/visibility integrity**
- Preserve whether automatic refresh is configured in AdMob.
- Do not manually create extra requests simply because the route rebuilt.
- Record visibility/exposure state separately from screen/session duration.
- Hidden/background inventory is not monetizable exposure evidence.

**CC4 — Revenue/reconciliation integrity**
Join CC lifecycle evidence to CB impression-level revenue evidence. Preserve:
`request -> load -> visible exposure -> impression -> paid callback -> precision -> reconciled account revenue`.
Missing stages remain missing; never impute revenue zero or an impression from a request alone.

**CC5 — Sustainable-value decision**
A banner configuration can graduate only if reconciled revenue improves without material degradation in task completion, repeated useful value, layout stability, accidental-interaction risk, or policy integrity.

## MintTap application
Home remains ad-free. Audit secondary banner placements for:
- anchored vs inline adaptive choice;
- ad object ownership across Flutter route/widget rebuilds;
- automatic-refresh configuration;
- visible vs mounted time;
- duplicate requests after navigation/remount;
- disposal behavior;
- test vs production ad-unit separation;
- CC lifecycle events joinable to CB ILRD/reconciliation.

Do not increase refresh/request frequency before this inventory is understood. A rise in requests or impressions is not itself monetization improvement.

## LogMate application
Before monetized launch, define banner-eligible surfaces from the product workflow. Flight entry, editing, import/reconciliation, or other interruption/error-sensitive states remain excluded. If banners are used in a scrollable secondary surface, evaluate inline adaptive there; if a stable fixed secondary surface is eligible, evaluate anchored adaptive. Instrument lifecycle/visibility before optimizing yield.

## Reusable company rule
Optimize banner monetization as:

`eligible surface -> correct layout format -> controlled lifecycle -> genuine visible exposure -> valid impression -> precision-preserved revenue -> reconciled revenue -> preserved repeated product value`

Never optimize:
`more rebuilds/requests/refreshes -> more nominal impressions`.

## Open evidence needed
- MintTap current banner ad units and surfaces.
- Flutter Mobile Ads plugin/SDK versions.
- AdMob automatic-refresh settings per banner unit.
- Widget/ad-object lifecycle implementation.
- Whether route changes/remounts create new requests.
- Visibility/exposure instrumentation.
- Anchored vs inline adaptive usage.
- Test/production segregation.
- Joinability with Research 164 ILRD records.
