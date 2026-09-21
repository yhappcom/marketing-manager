# Research 166 — Collapsible Banner Intrusion and Revenue Integrity

Validated: 2026-09-21

## Why this matters
Research 164 established impression-level revenue precision and Research 165 established banner format/lifecycle/visibility integrity. A remaining operational gap is collapsible banners: they can increase banner performance by initially occupying a larger overlay, but this changes interruption cost and cannot be treated as a normal anchored-banner optimization.

## Authoritative findings

### 1. A collapsible banner is an expanded overlay, not merely a larger anchored size
Google Mobile Ads for Flutter defines a collapsible banner as an anchored banner that initially appears as a larger overlay and provides a control to collapse to the requested normal banner size. The `top`/`bottom` placement controls how the expanded region anchors to the regular banner.

Source: https://developers.google.com/admob/flutter/banner/collapsible

Operational consequence: `collapsible=true` changes the user's visual/interruption state. It must therefore be separately identified in placement and revenue evidence rather than grouped with ordinary anchored adaptive inventory.

### 2. A collapsible request does not guarantee a collapsible impression
Google states that non-collapsible banners remain eligible to serve for collapsible requests. Flutter exposes `BannerAd.isCollapsible` so the app can determine whether the last loaded banner was actually collapsible.

Operational consequence: request configuration is not exposure truth. Preserve both `collapsible_requested` and `collapsible_loaded/observed`; do not attribute revenue or product effects to collapsible inventory from request logs alone.

### 3. Auto-refresh deliberately does not repeatedly expand the banner
When automatic banner refresh is configured, subsequent refreshes in a slot after a collapsible request do not request collapsible ads. Google explicitly explains that repeatedly showing the expanded format on refresh could negatively affect user experience. Loading another collapsible banner later requires a manual request containing the collapsible parameter.

Operational consequence: do not defeat this UX safeguard by manually re-requesting collapsible ads on timers, rebuilds, navigation, or every refresh. Any manual second collapsible request is a new intrusive exposure decision and requires its own eligibility rule.

### 4. Mediation changes the inventory semantics
Google states collapsible banners are available only for Google demand; mediated ads display as ordinary non-collapsible banners.

Operational consequence: mediation mix can change the share of actual expanded exposures even when request code is unchanged. Revenue comparisons must therefore preserve actual loaded state and demand/source context where available rather than treating all requests as homogeneous.

### 5. Existing banner integrity rules still apply
The standard Flutter banner guidance requires test inventory during development, disposal when no longer needed, and distinguishes load/impression/click lifecycle events. Automatic refresh occurs only when the banner is visible. Anchored adaptive height remains stable for a given width.

Source: https://developers.google.com/admob/flutter/banner

Collapsible inventory therefore inherits Research 164/165 evidence boundaries; it does not replace them.

## CD0–CD5 — Collapsible Banner Intrusion Gate

`eligible low-risk surface → collapsible request identity → actual expanded exposure → recurrence/refresh integrity → CB revenue + product-value reconciliation → retain/reject decision`

### CD0 — Eligible low-risk surface
Do not use collapsible inventory in core, error-sensitive, financial-entry, flight-entry/import/editing, first-run comprehension, permission, or recovery workflows. Home remains excluded for MintTap under the existing product decision.

### CD1 — Request identity
Record at minimum app/version/platform, placement ID, ad unit, product state, timestamp/session, collapsed size, top/bottom placement, and `collapsible_requested`.

### CD2 — Actual exposure
Use the SDK's actual loaded-state signal where available (`isCollapsible` in Flutter). Preserve `collapsible_requested != collapsible_loaded` as a normal state, not an error.

### CD3 — Recurrence integrity
Auto-refresh behavior must remain platform-controlled. Do not create a pseudo-refresh loop of manual collapsible requests. If a later manual collapsible exposure is ever tested, define an explicit natural-state trigger and per-session recurrence rule before shipping it.

### CD4 — Revenue and value reconciliation
Join actual collapsible exposure to Research 164 CB paid-event/precision evidence and Research 165 CC visibility/lifecycle evidence. Compare matched eligible states against ordinary banner inventory using reconciled revenue plus downstream useful-value/abandonment evidence. Sparse results remain inconclusive.

### CD5 — Retain/reject
Retain collapsible inventory only if incremental reconciled revenue is credible and core-task completion/repeated useful value is not materially degraded. A higher raw eCPM, CTR, request count, or impression count alone is insufficient.

## Evidence boundaries

Preserve:

`collapsible requested ≠ collapsible loaded ≠ expanded exposure ≠ impression ≠ paid callback ≠ precise/reconciled revenue ≠ sustainable incremental value`

and:

`auto-refresh ≠ permission to re-expand`

## MintTap application

Do not enable collapsible banners merely because they may improve banner performance. First complete the production banner inventory audit from Research 165. If a secondary surface is low-risk and already eligible for anchored inventory, collapsible can become a controlled candidate only after instrumentation can distinguish request from actual collapsible load/exposure and join that exposure to CB revenue and post-task value evidence.

Explicit exclusions remain Home and active portfolio/transaction/tax-adjustment entry or editing states. Avoid expanded overlays where they could obscure financial context or controls.

## LogMate application

Do not use collapsible banners in flight entry, import, editing, error/recovery, or other accuracy-sensitive workflows. Before monetized launch, define eligible secondary surfaces and the CB/CC/CD event contract. A collapsible experiment should occur only after ordinary banner lifecycle/revenue observability is stable.

## Reusable company rule

Collapsible banners are an intrusive inventory variant, not a free revenue toggle. Optimize them as a constrained treatment on already-eligible surfaces. Never increase recurrence by exploiting manual requests around the SDK's auto-refresh safeguard.

## Next operational work
1. During MintTap banner inventory audit, detect any `collapsible` extras and actual `isCollapsible` instrumentation.
2. If none exists, do not add it until CC/CB baseline reconciliation is working.
3. If it exists, classify every placement by surface risk and capture requested-vs-loaded state.
4. Establish ordinary anchored baseline before any controlled collapsible comparison.
5. Reconcile actual expanded exposures to ILRD precision and downstream useful-value evidence.
