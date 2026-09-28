# Research 290 — Protected-Workflow Ad Monetization Contract

Validated: 2026-09-28

## Decision

For specialist niche apps, ad-revenue optimization starts by protecting the workflow that creates specialist value. Optimize revenue per retained specialist-value session, not ad impressions per session.

## Evidence boundary

Current Google guidance prohibits overwhelming users with recurring interstitials and specifically identifies an interstitial after every user action as non-compliant; Google says no more than one interstitial after every two user actions. Interstitials belong between content/pages rather than app exit, and app-open ads are the format recommended for loading/resume contexts.

Google Mobile Ads also exposes impression-level revenue through paid-event callbacks. Revenue values include currency and a precision state (UNKNOWN, ESTIMATED, PUBLISHER_PROVIDED, PRECISE). Google recommends attaching the paid listener before display and forwarding paid events immediately to reduce dropped callbacks/discrepancies.

These are ceilings/instrumentation capabilities, not a recommendation to maximize exposure.

## GQ0–GQ9

1. **Specialist-value map** — identify the job whose completion makes the app worth keeping.
2. **Protected workflow** — mark steps where an interruption can corrupt trust, concentration, data entry, interpretation, import/export, or completion.
3. **Natural-break inventory** — identify genuine post-completion or between-task boundaries.
4. **Format eligibility** — choose only formats compatible with that boundary; platform support alone is not eligibility.
5. **Pressure budget** — cap exposure by session/user/surface and preserve ad-free protected paths.
6. **Instrumentation** — request → load → impression → paid event, with source, placement, latency/error and revenue precision.
7. **Value guardrail** — pair revenue with first/repeated specialist-value completion, abandonment, session continuation and retention proxies.
8. **Increment test** — change one pressure variable only where traffic can distinguish a material effect.
9. **Decision** — KEEP / REDUCE / MOVE / HOLD / REMOVE; higher eCPM alone cannot produce KEEP.
10. **Re-entry trigger** — retry only after material traffic, format, demand, workflow or product-state change.

## MintTap

Protect portfolio entry/edit, tax-adjustment entry, distribution/ROC interpretation and any calculation/reconciliation path. Do not insert forced full-screen ads inside these jobs.

Candidate monetization surfaces must first be proven to be genuine breaks after specialist value is completed. Secondary browse/search/reference surfaces may be more suitable than Home or calculation flows, but production inventory is currently UNKNOWN and must be audited before any recommendation.

Measure revenue at impression level where supported, preserving precision type. Compare revenue changes against completion/continuation and repeated specialist-value signals. Do not infer a better business outcome from eCPM, match rate or impressions alone.

## LogMate

Professional record integrity dominates ad pressure. Protect flight entry/edit, import/mapping, duplicate resolution, Previous Total setup/correction, export and record verification. Pre-launch monetization remains HOLD until actual usage and workflow boundaries exist.

No ad should become a gate on a pilot's ability to maintain or retrieve the core logbook record.

## Reusable niche-app rule

**Protected specialist workflow > natural break > eligible format > pressure cap > impression-level revenue > specialist-value guardrail > retained revenue.**

This replaces ad-density optimization with retained-value monetization.

## Production audit fields

`surface | specialist job | protected? | natural break? | format | request | load | impression | paid event | precision | source | latency/error | cap/cooldown | continuation | completion | repeated value | decision`

Use UNKNOWN for unverified production state and NONE only for verified absence.

## Next learning target

Run the MintTap production monetization inventory before proposing any new ad placement or pressure increase. If repository/product evidence cannot verify current ad surfaces and instrumentation, keep recommendations at HOLD rather than inventing inventory.
