# Research 392 — Banner Inventory Is a Layout Contract, Not Free Screen Space

Validated: 2026-10-03

## Why this extends the ad research

Research 389–391 separated interruption budgets, App Open admission, and rewarded value exchange. Banner inventory needs a different contract because it can be persistent without being full-screen. “Non-full-screen” does not mean “zero-cost”: a banner consumes layout, attention, tap safety, and sometimes scroll performance.

## Authoritative findings

Google Mobile Ads currently distinguishes banner roles by layout:
- Anchored adaptive banners are intended for fixed top/bottom placement and choose an optimized height from the available width.
- Inline adaptive banners are recommended for scrollable content.
- Large anchored adaptive banners can reach 20% of screen height (50–150 dp/points), so format availability is not permission to consume that much professional-workflow space.
- Flutter guidance says surrounding content stays in place when anchored adaptive ads refresh; layout should reserve the returned size rather than shift controls/content.
- Google Play Better Ads policy exempts non-full-screen banners only when they do not interfere with normal app use. This is a floor, not a product-quality target.

## New operating principle

**Banner inventory must be admitted by layout role and workflow cost before revenue optimization.**

Do not begin with “where can a banner fit?” Begin with:
1. Is this surface passive/observational or an active specialist job?
2. Is the surface fixed or scrollable?
3. Can the exact ad slot be reserved without covering, shifting, or crowding controls?
4. Is there safe separation from navigation, primary actions, editable fields, tables, charts, or dense professional data?
5. Does the format match the layout role?
6. Does the retained-value evidence justify the permanent attention/layout tax?

## INB0–INB9 — Banner Admission Contract

INB0 specialist-job sensitivity
→ INB1 passive vs active surface
→ INB2 fixed vs scrollable layout
→ INB3 reserved-slot/no-layout-shift proof
→ INB4 interaction/tap-separation proof
→ INB5 format-role match (anchored/inline)
→ INB6 viewport-density cost
→ INB7 device/orientation/accessibility validation
→ INB8 retained specialist value + reconciled revenue
→ INB9 ADMIT / MOVE / SHRINK / REMOVE / HOLD-NO-SAFE-SLOT.

## MintTap

Do not treat every non-editing screen as banner-safe. Portfolio editing, Tax Adjustment, distribution/ROC inspection, reconstruction, dense tables/charts, and primary navigation remain protected until production layout evidence proves a separated slot.

Candidate banner surfaces should be evaluated for passive dwell after specialist value is already available, not inserted before value or between controls. A higher banner size is not automatically better: if the extra height reduces data visibility, increases scrolling, or crowds navigation, compare sustainable revenue per retained specialist user rather than eCPM alone.

## LogMate

Use a stricter default. Flight/multi-leg entry, import/migration, duplicate reconciliation, totals, certificates/export, and operational record inspection are professional workflows. No banner should reduce leg visibility, compete with numeric entry, or sit near primary navigation/actions. If a future passive results/history surface has a genuinely separated slot, test that surface independently.

## Reusable niche-app rule

Format selection follows information architecture:
- fixed passive surface + safe reserved edge → anchored adaptive may be eligible;
- scrollable passive content + safe in-flow separation → inline adaptive may be eligible;
- active specialist workflow or no stable separated slot → no banner inventory.

The existence of an SDK format is never evidence that the product has a safe monetization surface.

## Measurement

For each admitted slot record:
surface/job, passive/active state, layout role, format, reserved dimensions by device/orientation, nearest interactive control, viewport loss, request/load/impression/paid-event, latency/error state, retained-value metrics, and revenue reconciliation.

Decision metric: **incremental reconciled revenue conditional on preserved specialist value**, not raw impressions, fill, eCPM, or maximum occupied area.

## Next operational target

Build the MintTap production ad-surface matrix from actual screens/ad units. Classify every current/proposed banner slot as PASSIVE-SAFE / ACTIVE-PROTECTED / MOVE / REMOVE / UNKNOWN and verify device/orientation layout before any increase in banner size or density.
