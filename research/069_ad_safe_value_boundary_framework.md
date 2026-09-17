# 069 — Ad-Safe Value Boundary Framework

Date: 2026-09-17
Status: CANONICAL

## Purpose
Define when an ad impression is economically useful without violating the company's product constraint: advertising must not make a specialist workflow feel obstructed, coercive, or usage-limited.

This extends the canonical chain:
`relevant demand → credible promise → qualified acquisition → meaningful activation → repeated core value → sustainable ad-bearing use`.

The central question is not `Which format has the highest eCPM?` It is `At which completed value boundary can an impression occur without degrading the specialist job that creates retention?`

## Current first-party platform evidence
Google AdMob currently distinguishes placements by interaction context:
- interstitials must not unexpectedly interrupt a focused task such as form filling or reading;
- repeated interstitials are disallowed, and Google states no more than one interstitial after every two user actions;
- Google Play likewise disallows unexpected full-screen interstitials while a user has chosen to do something else;
- rewarded ads must remain optional; rewarded-interstitial implementations require an intro screen with a functional opt-out, and declining/skipping must not impede normal app use;
- anchored adaptive banners remain visible while the user interacts; inline adaptive banners are recommended for scrollable content.

These are policy ceilings, not product-quality targets. A placement may be policy-compliant and still be unacceptable for MintTap or LogMate.

## New model: Value Boundary Ladder
Classify every candidate ad surface by the user's workflow state.

### B0 — Before intent is established
Examples: launch, splash, initial onboarding.
Default: NO monetization experiment.
Reason: user has not yet received evidence that the app deserves attention.

### B1 — During required input
Examples: MintTap transaction entry/import preparation; LogMate flight-entry form.
Default: NO full-screen ads; avoid persistent placements that compress or distract critical input.
Reason: interruption directly taxes completion and error control.

### B2 — During interpretation/reconciliation
Examples: import review, duplicate resolution, financial-result interpretation, logbook correction/reconciliation.
Default: NO interruptive ads.
Reason: these are trust-sensitive cognitive tasks. An impression can increase mistakes or make the professional tool feel unreliable.

### B3 — Core job completed, value not yet confirmed
Examples: import saved but portfolio result not yet seen; flight saved but persisted/derived result not yet confirmed.
Default: NO interruptive ad.
Reason: save confirmation is not semantic first value. Advertising here can sever the handoff to value.

### B4 — Complete value block confirmed
Examples: personal portfolio result is visible and understood; completed logbook record/summary is visible after persistence.
Default: first candidate boundary for monetization testing.
This is a candidate, not automatic permission.

### B5 — Passive browse / repeated review
Examples: scrolling historical summaries, non-critical browsing after the primary task has completed.
Default: strongest candidate for non-interruptive ad inventory, subject to layout/accessibility/performance validation.

### B6 — Explicit optional exchange
A user voluntarily chooses an ad in return for a non-essential benefit.
Default: possible only when the normal product remains fully usable without accepting the ad. Never manufacture deprivation solely to force reward uptake.

## Ad-Safe Boundary acceptance gate
A candidate placement is NOT eligible until all are true:
1. The specialist value block immediately before it is defined.
2. The user can complete that value block without the ad interrupting input, review, correction, reconciliation, or interpretation.
3. The placement does not sit between save-success and first-value confirmation.
4. Declining/ignoring the ad does not restrict normal use.
5. The surrounding UI can accommodate the format without obscuring controls/content or inducing accidental clicks.
6. Measurement can separate ad request, impression, value completion, abandonment, return behavior, and—where available—aggregate revenue.
7. There is a precommitted rollback condition if activation, task completion, trust incidents, or useful return worsens.

## Economic interpretation
Do not optimize `impressions/session` in isolation.

A useful operating model is:
`Sustainable ad value ≈ retained qualified users × legitimate ad-bearing opportunities per useful return × fill × revenue per impression`.

Increasing ad-bearing opportunities can reduce retained qualified users or useful returns. Therefore a local increase in impressions or eCPM can reduce long-run revenue.

No causal coefficient is assumed here; this is a decision model requiring product-specific evidence.

## Format hierarchy for this company
This is not a universal ranking.

1. **Non-interruptive inventory after a complete value block** — preferred starting class.
2. **Passive-browse inventory** — eligible when it does not crowd specialist information.
3. **Interstitial at a genuine completed transition** — exceptional; requires stronger evidence and conservative frequency.
4. **Rewarded/rewarded-interstitial** — only for genuinely optional, non-essential value; never as a toll on core professional use.
5. **Task-interrupting full-screen inventory** — prohibited by internal product standard even where a particular implementation might otherwise satisfy platform policy.

## MintTap application
Existing activation evidence makes these boundaries ineligible:
- onboarding/permission flow;
- Manual transaction entry;
- Import discovery/preparation;
- Import validation/review;
- save-success → Home/personal result handoff;
- first interpretation of financial results.

The current Home inline-ad concern should therefore be evaluated by whether a complete personal value block appears before the ad, not merely by screen position or scroll depth. Relocation after a complete value block remains the lowest-risk hypothesis; implementation and effect are NOT VERIFIED.

## LogMate application
No production specialist value block has yet reached target-pilot first-value evidence under 068. Therefore LogMate has no validated ad-bearing boundary today. Do not use mock/shell screen whitespace as monetization inventory.

When Manual recording becomes functional, first validate:
`entry → persist → reopen/view → correct derived result → comprehension`.
Only after that chain is reliable should B4/B5 placement candidates be tested.

## Required telemetry contract for future ad tests
Minimum event families:
- `value_block_started`
- `value_block_completed`
- `first_value_confirmed` where applicable
- `ad_request`
- `ad_impression`
- `ad_dismiss/close` where format supports it
- `post_ad_abandonment_or_navigation`
- `useful_return`

Events must carry privacy-safe surface/value-block identifiers. Revenue analysis remains aggregate unless a lawful, privacy-safe architecture is explicitly validated.

## Decision rules
- **Policy Compliance Is the Floor, Not the Placement Strategy.**
- **Monetize After Value, Not Between Work and Value.**
- **Whitespace Is Not Ad Inventory.**
- **Impressions Are Not Revenue Quality.**
- **No Retention Evidence, No Ad-Pressure Optimization.**
- **Professional Trust Tasks Receive a Higher Interruption Bar.**

## What this changes
Advertising research no longer proceeds primarily by format comparison. The unit of analysis is now the `value block → candidate boundary → format → downstream effect` chain.

This gives MintTap and LogMate a reusable monetization gate and prevents an eCPM-led optimization from outrunning activation/retention evidence.

## Next evidence targets
1. MintTap: identify the exact Home value block before the current inline ad and measure request/impression frequency plus post-detail-return behavior when aggregate telemetry is accessible.
2. MintTap: do not place an interruptive ad in the Import post-save handoff.
3. LogMate: wait for a functional/persistent Manual workflow, then mark B0–B5 boundaries from actual code and target-pilot observation.
4. Company-wide: build a placement ledger containing product, surface, preceding value block, boundary class, format, eligibility, policy check, activation/return guardrails, and aggregate revenue evidence.

## Sources refreshed 2026-09-17
- Google AdMob Help — Disallowed interstitial implementations: https://support.google.com/admob/answer/6201362
- Google Play — Ads policy / Better ad experiences: https://support.google.com/googleplay/android-developer/answer/9857753
- Google AdMob Help — Policies for ad units that offer rewards: https://support.google.com/admob/answer/7313578
- Google for Developers — Flutter banner ads / adaptive banner guidance: https://developers.google.com/admob/flutter/banner
