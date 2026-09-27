# Research 275 — Cross-Store Experiment vs Intent-Routing Contract

Validated: 2026-09-27

## Decision
Apple PPO / Google Play Store Listing Experiments are randomized learning mechanisms. Apple Custom Product Pages / Google Play Custom Store Listings are deterministic or audience/context routing mechanisms. They are not interchangeable and platform feature counts are capacity ceilings, not segmentation targets.

## FV0–FV8
1. FV0 specialist job: normalize the user job before choosing a Store mechanism.
2. FV1 capability truth: the promoted promise must exist in the shipping product.
3. FV2 destination continuity: acquisition promise must resolve to matching in-app value.
4. FV3 uncertainty class: classify uncertainty as creative-expression uncertainty vs already-corroborated intent/audience difference.
5. FV4 mechanism: expression uncertainty → randomized experiment; validated distinct intent/audience → routing surface; unresolved demand → HOLD upstream.
6. FV5 sparse-traffic protection: prefer control + one materially different treatment when traffic is scarce; do not fragment traffic merely because more variants are allowed.
7. FV6 inference integrity: predefine the decision, material contrast and KEEP/REJECT/INCONCLUSIVE rule; do not equate a reporting threshold with adequate evidence.
8. FV7 downstream value: Store conversion is intermediate. Preserve first core value, repeated core value and revenue/retention evidence where measurable.
9. FV8 reallocation: merge/remove low-value routing surfaces and stop inconclusive experiments rather than continuously consuming scarce traffic.

## Apple-specific constraints
- PPO supports up to three treatments. More treatments can lengthen time to a conclusive result because treatment traffic is divided.
- Apple provides a duration estimate using existing impressions/new-download performance; tests run at most 90 days.
- PPO Analytics appears after five first-time downloads attributed to the test; five is a reporting threshold, not a universal sufficiency threshold.
- Apple Analytics currently uses confidence labels; 90% confidence can produce Performing Better/Worse, while weak tests can be Likely to be Inconclusive.
- PPO is not available for Custom Product Pages.
- CPP supports up to 70 pages, unique URLs and distinct screenshots/previews/promotional text/keywords; optional deep links can route iOS/iPadOS 18+ users to matching in-app content. CPP metrics appear after at least five first-time downloads.

## Cross-store operating contract
Never infer symmetry from similar product names. Maintain a capability matrix with current authoritative verification dates. The common abstraction is:
- randomized Store experiment = learn which materially different expression works better for substantially the same intent;
- routed Store surface = present a truthful, matching page to an already-corroborated distinct intent/audience/context;
- upstream evidence work = use when the intent itself is not yet validated.

## Portfolio application
MintTap: ticker names are not automatically distinct Store intents. Normalize to jobs such as distribution/ROC interpretation, corporate-action continuity and portfolio/reinvestment accounting. Split only when independent evidence shows materially distinct intent plus matching product destination.

LogMate: airline, aircraft and roster-vendor names are not automatically distinct Store intents. Normalize to pilot jobs such as import/migration, Previous Total, duplicate reconciliation, record/export integrity and offline/device continuity. Split only with independent evidence and destination continuity.

## Anti-patterns
- one Store page per ticker/vendor because capacity exists;
- multiple treatments that differ only cosmetically without a decision-relevant hypothesis;
- treating five downloads as proof of a winner;
- copying an Apple mechanism design to Google without checking current Play capability;
- optimizing Store conversion while first/repeated specialist value degrades;
- repeating inconclusive sparse-traffic experiments without new evidence.

## Authoritative sources checked
Apple App Store Connect Help, Product Page Optimization overview/create/run/results and Custom Product Pages, checked 2026-09-27.
