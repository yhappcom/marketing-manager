# Research 278 — Ad-Revenue Marginal-Utility Contract

Validated: 2026-09-28

## Decision
For specialist utility apps, maximize sustainable ad revenue by improving the yield of already-eligible opportunities before creating additional interruptions. An SDK-capable ad request is not automatically valid product inventory.

Canonical chain:
`protected workflow → semantically eligible opportunity → privacy/consent eligibility → request → load → impression → paid event → first/repeated core value → reconciled sustainable revenue`

## GA0–GA8
GA0 protected-workflow integrity.
GA1 semantic opportunity eligibility.
GA2 consent/privacy eligibility.
GA3 request/load/impression observability.
GA4 paid-event precision and reconciliation.
GA5 first-core-value protection.
GA6 repeated-value/retention protection.
GA7 marginal sustainable-revenue test.
GA8 KEEP / REDUCE / REMOVE / HOLD.

## Opportunity classes
**Protected:** no monetization interruption inside trust-, data-, or completion-sensitive actions such as authentication/onboarding, import/migration, reconciliation, destructive confirmation, record/export integrity, or equivalent specialist work.

**Passive:** non-blocking placements that preserve the core task. Anchored adaptive banners are a candidate where a stable reserved top/bottom region is acceptable.

**Natural transition:** a bounded break after one task has completed and before the next independent task. Full-screen inventory is eligible only when the product already has a genuine transition.

**Waiting:** app-open inventory is eligible only when the user is already waiting for loading/foreground recovery.

## Marginal-utility rule
Evaluate the change, not gross ad revenue:

`Δ sustainable value = Δ reconciled ad revenue − downstream specialist-value loss − retention/trust loss − policy/traffic-quality risk − operator cost`

This is an operating model, not a claim that every term can be precisely monetized. Unmeasured downstream loss is UNKNOWN, not zero.

KEEP only when the opportunity is semantically eligible, current privacy state permits it, delivery/revenue are observable enough to diagnose, first core value is protected, repeated value shows no material adverse signal, and incremental revenue survives reconciliation.

## Diagnose before density
When revenue is weak, diagnose in order:
1. eligible-opportunity count;
2. consent/request eligibility;
3. requests;
4. load/fill/delivery;
5. impressions;
6. impression-level paid value and precision;
7. reconciliation;
8. traffic-quality/policy state;
9. only then density/additional formats.

Never add full-screen pressure to compensate for consent, supply, delivery, measurement, or traffic-quality problems.

## Exposure budget
Full-screen exposure is a scarce interruption budget, not an inventory target. Track by session/placement: eligible opportunities, requests, loads, impressions, paid events/revenue, first-value completion, repeated-value proxy, post-exposure abandonment, exposure-count distribution, and applicable cap/cooldown state.

## Current AdMob evidence
Google's current app-open guidance says the format is for loading/foreground moments, recommends waiting until users have used the app a few times before the first app-open ad, and recommends showing it while users would otherwise be waiting. On cold starts, an ad should not surprise the user after main content has already loaded.

Google's current Flutter banner guidance says anchored adaptive banners occupy a stable layout position and choose an optimized height from the available width; configured automatic refresh occurs only while the banner is visible. Operationally, reserve stable space rather than causing layout movement or overlays.

## Product application
**MintTap:** portfolio interpretation, tax-adjustment entry, correction, transaction/reinvestment accounting and similar trust-sensitive financial workflows are protected by default. Revenue weakness triggers diagnosis, not higher ad pressure.

**LogMate:** import/migration, Previous Total, duplicate reconciliation, flight-entry completion, record integrity and export are protected by default. If ads are introduced, begin with non-blocking secondary surfaces and instrument downstream value before considering full-screen inventory.

**Future niche apps:** define the protected-workflow map before placement design so monetization cannot silently redefine the core product workflow.

## Authoritative sources
- Google AdMob Android App Open Ads, accessed 2026-09-28: https://developers.google.com/admob/android/app-open
- Google AdMob iOS App Open Ads, accessed 2026-09-28: https://developers.google.com/admob/ios/app-open
- Google AdMob Flutter Banner Ads, accessed 2026-09-28: https://developers.google.com/admob/flutter/banner

## Next target
Ad-inventory experiment contract: test placement/cooldown changes without confusing revenue lift with session mix, consent composition, traffic quality, supply variation, or retention damage.
