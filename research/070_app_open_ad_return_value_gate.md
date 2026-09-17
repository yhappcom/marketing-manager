# 070 — App-Open Ad Return-Value Gate

Date: 2026-09-17
Status: CANONICAL V1

## Question
When can a zero-cost, ad-funded specialist app use app-open advertising without converting routine return behavior into a monetization toll?

## Authoritative platform evidence
Google's current Mobile Ads guidance treats app-open ads as a loading-screen format for foreground/app-return moments. Current guidance says not to show an app-open ad on the very first app start / to wait until users have used the app a few times, and to show it when users would otherwise be waiting for loading. On cold start, if the user reaches main content before the ad loads, the ad should not be shown. Loaded app-open ads expire after four hours. Google AdMob separately disallows ordinary interstitials on app load/exit and points publishers to app-open ads for load/return contexts.

Apple's current App Review Guidelines require interruptive ads to be clearly identified as ads, avoid manipulative tapping, provide accessible close/skip controls, and provide a way to report inappropriate or age-inappropriate ads.

These are platform floors, not evidence that every eligible foreground transition is a good product placement.

## New distinction: return event != monetizable return
A foreground event is technical inventory. It is not automatically legitimate economic inventory.

For specialist utilities, users may foreground the app to:
- finish an interrupted required task;
- verify a just-entered professional/financial record;
- resolve an error or reconciliation issue;
- quickly retrieve a time-sensitive fact;
- begin a normal passive review session.

Only the last class is an obvious app-open candidate. The others may still be inside the user's unresolved value block.

## Return-state gate
Classify every foreground into R0–R5 before considering app-open inventory.

- R0 — first-ever launch / activation not established. No app-open ad.
- R1 — resumed unfinished core work. No app-open ad.
- R2 — resumed verification, correction, reconciliation or recovery. No app-open ad.
- R3 — returning user but first value/useful-return evidence is not yet established. Default no app-open ad.
- R4 — established returning user entering a passive/general session and the app is genuinely loading. Candidate only.
- R5 — established user foregrounds into already-ready content with no natural wait. Do not manufacture a loading delay to create inventory.

This extends 069 B0–B6 across app lifecycle transitions.

## Canonical rules
### First Launch Is Not Inventory
Do not monetize the first-ever app opening. Platform guidance and activation economics align here.

### Foreground Is Not a Value Boundary
Lifecycle callbacks cannot determine placement legitimacy by themselves. Product state must determine whether the previous value block is complete.

### Do Not Manufacture Wait
App-open ads belong in genuine loading time. Never add, prolong or visually simulate loading solely to obtain an impression.

### Resume Intent Has Priority
If the app can restore an unfinished input/review/reconciliation context, that intent outranks monetization.

### Established Return Before App-Open Eligibility
A user should have reached semantic first value and demonstrated at least one later useful return before app-open advertising becomes a product candidate. This is an internal standard stricter than the platform minimum.

### Frequency Is a Product Variable
Even for R4, do not show on every foreground. Measure session-level and user-level exposure together with return completion, abandonment, rapid backgrounding and retained use. Optimize sustainable revenue, not foreground fill.

## MintTap application
Do not use app-open advertising for:
- first launch/onboarding;
- Demo→real setup continuation;
- Import preparation/review/save→first-value handoff;
- returning directly to unresolved transaction/edit/import work;
- a foreground used to verify a just-changed portfolio result.

A future candidate is an established user's ordinary return to Home when Home is genuinely loading and no protected intent is pending. Eligibility remains unverified until semantic first-value/useful-return telemetry and foreground-intent state exist.

## LogMate application
Current status: NOT ELIGIBLE.

No specialist workflow has yet reached validated target-pilot first value under 068. A pilot foregrounding LogMate may eventually be resuming entry, correction, review, import reconciliation or rapid lookup; these professional intents must be distinguishable before app-open inventory is considered.

## Measurement contract before testing
At minimum record privacy-appropriate aggregate events/properties sufficient to distinguish:
- established-value eligibility;
- foreground reason/state class R0–R5;
- ad eligible/requested/loaded/shown/dismissed;
- content-ready timestamp versus ad-ready timestamp;
- protected pending intent;
- post-ad intended destination reached;
- rapid background/exit after ad;
- useful-return completion after foreground.

Revenue joins must remain aggregate. Do not create unnecessary user-level financial profiling.

## Decision metric
Do not rank app-open placement by eCPM alone.

Evaluate approximately:
`incremental ad revenue from eligible returns`
against
`change in useful-return completion + abandonment/rapid-exit + retained qualified use`.

A placement that increases impressions but damages return completion is not a monetization win.

## Relationship to 069
069 determines whether a point in a value workflow is ad-safe. 070 adds lifecycle semantics: leaving and re-entering the app does not reset the value workflow. A B1/B2/B3 task remains protected after foregrounding.

## Immediate operational consequence
Do not add app-open ads to MintTap or LogMate merely because the SDK supports foreground callbacks. First implement/verify first-value and useful-return state, protected-intent continuation, and genuine loading boundaries. Only then create a narrowly eligible R4 test.

## Sources
- Google for Developers, App open ads / Android next-gen, accessed 2026-09-17.
- Google for Developers, App open ads / iOS, accessed 2026-09-17.
- Google AdMob Help, Disallowed interstitial implementations, accessed 2026-09-17.
- Apple Developer, App Review Guidelines §2.5.18, accessed 2026-09-17.
