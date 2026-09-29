# Research 309 — Google Play Custom Store Listing Sparse-Niche Routing Contract

Validated: 2026-09-29

## Why this addition exists
Research 308 established specialist-intent routing for Store variants. This addition closes the Google Play side with current Play Console behavior and a sparse-traffic operating rule.

## Authoritative findings
Google Play currently allows up to 50 custom store listings (CSLs). A default listing remains the fallback for users not targeted by a CSL. CSLs can target audience/user-state segments such as churned, lapsed, non-buyers, one-time buyers, and repeat buyers; country/region and Google Ads traffic routing are also supported in the documented workflow. A CSL can have its own app name, short/full description, and graphics. Custom listings do not automatically inherit translated text: if translations are absent, targeted users can see the CSL's default language.

Google Play Store Listing Experiments support one default-graphics experiment or up to five localized experiments concurrently. Localized experiments can test text and graphics. Therefore “create another CSL” and “run an experiment” solve different problems: routing is for materially different audiences/intents; experiments test a material hypothesis within an eligible listing.

Google Play's Asset Library centralizes assets across main listings, CSLs, experiments, and events. Reuse is an operational efficiency, not evidence that variants should exist.

Current operational caveat: Google Play's Publishing API does not expose CSL management in the same way as the main listing. A Google Play Developer Community report dated 2026-08-26 documents Play support confirming that CSLs live in a different Console structure and cannot currently be read/managed programmatically. Treat this as an operational limitation to revalidate, not a permanent product guarantee.

## HK0–HK9
HK0 recurring specialist intent → HK1 default-listing sufficiency → HK2 material-distinction gate → HK3 targeting mechanism fit → HK4 claim/evidence parity → HK5 language/localization integrity → HK6 traffic/measurement sufficiency → HK7 experiment-vs-routing decision → HK8 downstream specialist-value comparison → HK9 KEEP/MERGE/REPAIR/RETIRE/UNKNOWN.

## Sparse-niche rules
1. Default listing first. A CSL is justified only when the audience's promise, proof, workflow, or qualification materially differs.
2. Do not clone by ticker, aircraft type, or superficial keyword. A renamed screenshot set is not a new intent.
3. Separate routing from experimentation. If the promise is the same and only creative execution is uncertain, test the creative rather than multiplying listings.
4. Do not fragment traffic below decision usefulness. Platform capacity (50 CSLs) is not a target.
5. Every CSL claim must map to the same Claim Registry used by default Store, owned references, and community answers.
6. Treat localization as product communication, not machine-generated decoration. Verify CSL default language and explicit translations before launch.
7. Measure beyond acquisition where instrumentation permits: routed intent → listing visitor/acquisition → first specialist value → repeated specialist value → retention/revenue quality.
8. If downstream joining is unavailable, record UNKNOWN rather than infer incrementality from conversion rate.
9. Maintain a manual CSL inventory while API visibility remains incomplete; do not let automated default-listing updates silently imply CSL coverage.
10. Retire or merge variants whose distinction no longer changes a specialist decision or whose traffic cannot support maintenance/learning.

## MintTap application
Candidate CSLs should correspond to distinct specialist jobs such as distribution/ROC interpretation, split/reinvestment reconstruction, or portfolio total-return/recovery only when evidence and traffic justify separate routing. TSLY/CONY/MSTY/NVDY clones fail HK2 unless the workflow, evidence, or qualification genuinely differs. Tax Adjustment requires especially strict claim/scope qualification.

## LogMate application
Potential future variants are workflow-based: import/migration continuity, Previous Totals continuity, duplicate/record integrity, and export/certificate integrity. Pilot role, aircraft type, or airline-name variants should not be created merely for keyword coverage. Pre-launch traffic scarcity makes the default listing the presumptive winner until a materially different intent and measurable audience exist.

## Reusable launch rule
For future niche apps, maintain a Store Routing Ledger:
intent | audience evidence | default sufficient? | route mechanism | atomic promise | claim evidence | locale | traffic threshold | experiment hypothesis | first value | repeated value | decision | revalidation trigger.

## Sources checked 2026-09-29
- Google Play Console Help, “Create custom store listings to target specific user segments”: https://support.google.com/googleplay/android-developer/answer/9867158
- Google Play Console Help, “Run A/B tests on your store listing”: https://support.google.com/googleplay/android-developer/answer/12053285
- Google Play Console Help, Asset Library: https://support.google.com/googleplay/android-developer/answer/16386748
- Google Play Developer Community, 2026-08-26 API visibility report/support confirmation: https://support.google.com/googleplay/games-on-pc-developer/thread/462608398/
