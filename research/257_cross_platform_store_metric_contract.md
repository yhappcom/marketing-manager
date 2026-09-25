# Research 257 — Cross-platform store metric contract for sparse niche apps

Date: 2026-09-25
Status: validated

## Decision
Apple App Store and Google Play store-page metrics must not be placed in a dashboard under a shared label such as "conversion rate" unless their numerator, denominator, eligible surfaces, and effective metric regime are identical.

## Current authoritative definitions
### Apple
- Impressions (Unique Devices): unique devices viewing the app on Today, Games, Apps, and Search; includes unique product-page views.
- Conversion Rate: total downloads and pre-orders / unique-device impressions.
- Total Downloads includes first-time downloads and redownloads.
- Product Page Views are a distinct narrower stage.
- Usage metrics are downstream and usage data is limited to users who agreed to share analytics.
- PPO uses its own controlled-test analysis; Apple reports estimated conversion, lift and confidence and may mark sparse tests likely inconclusive.

### Google Play
- Store Listing Performance now uses unique-user button clicks.
- CTR = store-listing visitors who click Install, Open, or Pre-register / store-listing visitors.
- This CTR replaced the legacy Conversion Rate metric and is an intent-stage measure, not a completed-acquisition metric.

## Cross-platform contract
Do not create a synthetic Apple-vs-Google "store conversion rate".

Maintain platform-native stages:
Apple: unique impression -> unique product-page view (when applicable) -> first-time/total download -> activation -> repeated core value.
Google Play: listing visitor -> unique Install/Open/Pre-register click -> acquisition -> activation -> repeated core value.

For executive comparison, compare only harmonized downstream business events measured with the same app-side definition, e.g. first qualified activation and repeated specialist value. Store-native rates remain diagnostic metrics.

## Sparse-niche minimum dashboard
Per platform and acquisition source, retain:
1. eligible discovery/exposure metric,
2. page/listing visit metric,
3. platform-native intent/download metric with exact definition,
4. first qualified activation,
5. repeated core-job event,
6. retention window,
7. ad revenue per active/retained user where applicable,
8. metric-definition/effective-date field,
9. evidence state: observed / threshold-suppressed / insufficient / unavailable.

Missing or privacy-thresholded data is not zero.

## Product application
MintTap: qualified activation should reflect real portfolio-tracking setup/use rather than a store click or transient YieldMax news interest. Distribution/ticker events are recorded as confounders.
LogMate: launch funnel should progress from acquisition to onboarding/import or first flight entry, then repeated logging. Pre-launch store metrics cannot substitute for post-launch activation evidence.

## Operating rule
Any platform metric-definition change creates a regime boundary. Never splice pre-change and post-change rates without an explicit bridge analysis.

## Sources
- Apple App Store Connect Analytics metric definitions: https://developer.apple.com/help/app-store-connect-analytics/reference/metrics-definitions
- Apple acquisition funnel: https://developer.apple.com/help/app-store-connect-analytics/acquisition/acquisition
- Apple Product Page Optimization analytics: https://developer.apple.com/help/app-store-connect-analytics/acquisition/product-page-optimization
- Google Play Store Listing Performance: https://support.google.com/googleplay/android-developer/answer/9859173
