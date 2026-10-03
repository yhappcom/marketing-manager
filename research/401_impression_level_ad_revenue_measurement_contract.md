# Research 401 — Impression-Level Ad Revenue Is a Measurement Contract, Not a Pressure Target

Validated: 2026-10-03

## Decision
For sparse specialist apps, optimize ad monetization from impression-level revenue (ILRD) only after preserving the product's protected workflows. Revenue callbacks are measurement evidence, not permission to create more impressions.

## Authoritative findings
Google Mobile Ads exposes a paid event when an impression earns value. The event can carry monetary value, currency, ad unit, winning ad source/instance, mediation metadata, and a precision class. Google recommends attaching the paid-event listener before display and forwarding the event immediately to avoid dropped callbacks and discrepancies.

The precision field is analytically material:
- PRECISE: precise value paid for the ad.
- ESTIMATED: estimated from aggregated data.
- PUBLISHER_PROVIDED: publisher/manual CPM-derived value.
- UNKNOWN: insufficient/unknown value.

Therefore ILRD values must not be stored as if all observations have identical certainty. Mediation can legitimately produce estimated or publisher-provided values.

Flutter's Google Mobile Ads plugin supports Android and iOS, not web/desktop. Any LogMate PWA/desktop monetization must therefore be treated as a separate implementation and measurement surface rather than assumed to inherit mobile AdMob behavior.

## IK0–IK9 — Revenue integrity contract
IK0 protected-workflow gate
IK1 ad-format/surface identity
IK2 request→load→impression identity
IK3 paid-event capture
IK4 value + currency preservation
IK5 precision-class preservation
IK6 winning-source/mediation metadata where available
IK7 server/analytics delivery-loss audit
IK8 aggregate reconciliation against AdMob reporting
IK9 optimize retained specialist value + reconciled revenue, never impression count alone

Decision states: MEASURE / RECONCILE / HOLD-LOSSY / HOLD-PROTECTED / OPTIMIZE-SAFE-SURFACE / REMOVE.

## Operational implications
1. Never rank placements solely by raw ILRD if precision mix differs materially.
2. Never convert an estimated impression value into a claim of exact user-level profit.
3. Keep paid-event telemetry distinct from click telemetry; revenue does not require a click.
4. Reconcile callback totals with platform reporting before using them for placement decisions.
5. Segment by surface/ad unit and format before network/source optimization.
6. A high-revenue placement that harms first/repeated specialist value fails the business objective.
7. Do not manufacture additional ad opportunities merely because ILRD makes them measurable.

## MintTap
Audit the production ad funnel before increasing pressure: protected portfolio/ROC/tax/reconstruction workflows; ad unit and surface; request/load/impression/paid-event counts; value/currency/precision; source metadata; callback loss; platform reconciliation; and retained specialist value. Prefer improving yield on already-safe inventory over inserting ads into protected work.

## LogMate
Flight entry, multi-leg entry, import/migration, duplicate reconciliation, totals, certificate/export and operational record inspection remain protected. If mobile ads are introduced, instrument ILRD on admitted passive surfaces only. PWA/desktop requires a separate monetization architecture because Google's Flutter Mobile Ads plugin is mobile-only.

## Reusable niche-app rule
Revenue optimization order:
product value integrity → safe inventory admission → reliable impression/paid-event telemetry → precision-aware reconciliation → source/yield optimization → only then cautious inventory expansion.

## Sources
- Google Mobile Ads SDK, Android: Impression-level ad revenue — https://developers.google.com/admob/android/impression-level-ad-revenue
- Google Mobile Ads SDK, iOS: Impression-level ad revenue — https://developers.google.com/admob/ios/impression-level-ad-revenue
- Google Mobile Ads Flutter Plugin: Get started / platform support — https://developers.google.com/admob/flutter/quick-start
