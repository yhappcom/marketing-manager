# Research 374 — Monetization Must Consume Waiting Time, Not Specialist Work

Validated: 2026-10-02

## Decision

For utility-style niche apps, ad-revenue optimization should start by classifying user moments, not by maximizing ad-format coverage. Full-screen ads are acceptable only where they consume genuine waiting or a natural transition and do not interrupt the specialist task the user came to complete.

This creates a protected-workflow contract for MintTap, LogMate, and future niche utilities.

## Current authoritative evidence

Google's current AdMob guidance distinguishes formats by user context:

- App-open ads are intended for app loading/foreground transitions. Google recommends not showing the first app-open ad on the very first launch, waiting until users have used the app a few times, and showing them while users would otherwise be waiting for the app to load.
- On cold starts, if the app finishes loading and reaches main content before the app-open ad is ready, Google says not to show the late ad.
- Interstitials should be placed between content/pages at natural breaks, not on app load/exit. Google's policy guidance also warns against repeated interstitials and says they should not appear after every user action.
- Therefore "an ad is technically available" is not an entitlement to insert it into a workflow.

Sources:
- https://developers.google.com/admob/android/app-open
- https://developers.google.com/admob/android/next-gen/app-open
- https://support.google.com/admob/answer/6201362

## Core model: ad-pressure budget

Treat every interruption as consuming a finite trust/attention budget.

The optimization target is not:

> impressions per session

It is:

> sustainable ad revenue per retained specialist user, subject to zero damage to protected workflow completion.

A placement can increase immediate impressions while decreasing the business if it delays first specialist value, causes abandonment, reduces repeat usage, or makes a professional utility feel unreliable.

## Protected-workflow classification

Classify each app state before choosing an ad format.

### P0 — protected critical work

No interruptive ads.

Examples:
- data entry before save/commit
- import/migration reconciliation
- editing tax/distribution adjustments
- flight-log entry, validation, totals, export/backup
- recovery/error resolution
- consent, authentication, or other trust-sensitive flows

### P1 — completion boundary

Potential monetization surface only after the user's action is safely committed and the next action is not time-sensitive.

A full-screen ad still requires frequency/cooldown and abandonment evidence; completion alone does not justify one.

### P2 — genuine waiting/loading

Candidate for app-open/loading monetization where platform guidance and UX conditions are satisfied. Never hold completed content merely to manufacture waiting time.

### P3 — optional secondary exploration

Low-interruption formats may be acceptable if they do not displace core information or create accidental-click risk.

### P4 — explicit value exchange

Rewarded ads require a real optional exchange. Do not gate baseline specialist capability, records, correctness, export, or normal use behind watching an ad merely to create inventory.

## IM0–IM9 operating gate

IM0 specialist job/state
→ IM1 protected-workflow class
→ IM2 user action safely committed
→ IM3 natural transition or genuine waiting exists
→ IM4 format-policy eligibility
→ IM5 consent/request eligibility
→ IM6 cap/cooldown and first-use protection
→ IM7 latency/failure fallback preserves workflow
→ IM8 revenue + first/repeated specialist-value measurement
→ IM9 KEEP / REDUCE / MOVE / REMOVE / HOLD-EVIDENCE.

A failed or slow ad request must degrade to "continue the product immediately," not "make the user wait for monetization."

## MintTap implication

Portfolio inspection, distribution/ROC reconstruction, tax adjustment, split/reinvestment continuity, and editing are protected work. Do not create full-screen inventory inside those workflows.

If app-open ads are ever used, first-use protection and the loading-only rule are mandatory. A late-loaded app-open ad must not cover a portfolio screen the user has already reached.

The current business question is therefore not "where can another ad fit?" but "which existing non-core waiting/transition moments exist without manufacturing friction, and do they add net retained-user revenue?"

## LogMate implication

Professional flight-record entry, multi-leg entry, import/migration, duplicate resolution, totals, export/backup, certificate/document handling, and error recovery are protected.

Because a pilot logbook is a professional recordkeeping utility, reliability and rapid task completion dominate short-run impression yield. Ads may be considered only outside those protected flows and only after launch evidence exists.

## Reusable rule for future niche apps

1. Map specialist jobs.
2. Mark protected work before integrating ads.
3. Monetize natural idle/transition moments, not arbitrary taps.
4. Never delay ready content to manufacture an app-open opportunity.
5. Measure revenue together with completion, abandonment and repeated specialist value.
6. Remove a placement if revenue rises while specialist-value completion or retention materially worsens.

## What this research changes

Previous monetization work focused heavily on request/load/impression/paid-event measurement and policy readiness. This addition supplies the missing upstream placement rule: **inventory itself must pass a workflow-integrity gate before revenue optimization begins.**

## Next validation target

Audit MintTap's production screen/state map and classify every current or proposed ad placement P0–P4. Then join each eligible placement to request → load → impression → paid event, latency/failure, cap/cooldown, consent state, and first/repeated specialist-value evidence.
