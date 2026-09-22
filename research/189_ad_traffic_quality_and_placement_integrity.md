# Research 189 — Ad Traffic Quality & Placement Integrity

Updated: 2026-09-22

## Decision
For an ad-supported specialist utility, click volume and CTR are not monotonic success metrics. Accidental clicks are traffic-quality risk, can trigger Confirmed Click or ad-serving limitations, and can make estimated monetization evidence diverge from sustainable/finalized revenue. Placement quality therefore requires a traffic-quality feedback loop in addition to format fit, interruption budget and impression-level revenue measurement.

## Validated findings
1. Google AdMob defines invalid traffic to include accidental clicks. High invalid traffic can lead to limited/disabled ad serving and differences between estimated and finalized earnings. Source: https://support.google.com/admob/answer/3342054
2. Google identifies close proximity between banners and navigation/interactive elements as a major cause of accidental clicks. Sources: https://support.google.com/admob/answer/6275345 and https://support.google.com/admob/answer/6293636
3. Interstitial timing matters: an ad intended for a transition can arrive after the destination page has loaded, creating an unexpected launch. Google recommends preloading to avoid this timing inversion. Source: https://support.google.com/admob/answer/6201362
4. Google may automatically apply Confirmed Click at app or ad-unit level when placements show signs of accidental clicks; remediation is sustained improvement in click quality. Source: https://support.google.com/admob/answer/10094971
5. Development and QA should use sample ad units or configured test devices rather than interacting with live ads. Source: https://support.google.com/admob/answer/3342099
6. Google Play separately prohibits unexpected full-screen interstitial experiences. Source: https://support.google.com/googleplay/android-developer/answer/9857753

## DA0–DA5 Ad Traffic Quality & Placement Integrity Gate
DA0 — Interaction-map identity: record exact screen/state, ad geometry, neighboring controls, expected tap zones, scroll behavior and task state.
DA1 — Temporal-placement integrity: for full-screen inventory preserve trigger, ad-ready time, transition timing, destination-ready time and actual display time.
DA2 — Traffic-quality evidence: monitor click/CTR changes by app, ad unit, format, country and release alongside Confirmed Click, policy and ad-serving signals. Do not optimize toward CTR alone.
DA3 — Test/live segregation: use test ads or test devices for development and QA and distinguish test interaction from production evidence.
DA4 — Revenue-quality reconciliation: join placement/release changes to impression-level revenue, estimated reporting, Confirmed Click/policy state and finalized-earnings residuals. A CTR/revenue spike with accidental-click signals is not validated yield improvement.
DA5 — Specialist-value decision: retain a placement only if it remains separate from specialist controls, avoids timing/tap interception risk, preserves task completion/return behavior, and contributes sustainable reconciled revenue.

## Canonical distinctions
`click ≠ genuine user interest`; `higher CTR ≠ better placement`; `logical trigger ≠ safe actual display timing`; `intended transition ≠ transition-time display`; `estimated click/revenue lift ≠ sustainable monetization lift`; `Confirmed Click ≠ acceptable steady-state UX`; `test interaction ≠ production evidence`; `AdMob compliance ≠ complete Google Play ad-experience compliance`.

## MintTap application
Add an interaction/timing map for every production ad unit. Pay particular attention to portfolio/ticker navigation, distribution rows, tax-adjustment/edit controls, scrolling lists and bottom navigation near banners. For interstitial/app-open flows, capture when content becomes actionable relative to actual ad display. Investigate any post-release CTR jump against layout/timing changes before treating it as monetization improvement.

## LogMate application
Existing protected core states remain protected. Secondary-surface advertising must demonstrate spatial and temporal separation from flight/logbook/search controls. Do not use CTR as the principal success metric for candidate secondary placements.

## Reusable registry
`app/version → unit/format → screen/state/job → geometry → adjacent controls → trigger → ad-ready time → destination-ready time → display time → impressions → clicks/CTR → paid-event value/precision → Confirmed Click/policy/serving state → estimated report → finalized residual → task outcome → return behavior → decision`.

## Next evidence target
Apply CB–CI + CW–CZ + DA to real MintTap production inventory. Further ad learning should follow an observed implementation gap or authoritative platform change rather than another abstract format chapter.
