# 125 — Interstitial completed-task transition gate

Date: 2026-09-19

## Principle
An interstitial is eligible only when a meaningful user task is complete and a genuine pause already exists. Ordinary navigation is not inventory.

Google Mobile Ads documents interstitials for natural transition points and recommends showing them during a pause, including after task completion. Google AdMob Help prohibits app-load/exit interstitials, repeated/recurring interstitials, and placements that interfere with core content or navigation. Its outer policy boundary is not an optimization target for a professional niche app.

Authoritative sources:
- https://developers.google.com/admob/android/interstitial
- https://support.google.com/admob/answer/6201362

## AQ0–AQ5
- AQ0: prohibited or harmful placement: load/exit, core obstruction, recurring action trigger, or protected workflow interruption.
- AQ1: navigation-shaped inventory: page change, Back, Save, tab switch, or click count used merely because it is easy to instrument.
- AQ2: plausible pause but task completion, exclusions, caps, economics, or downstream guardrails are unproven.
- AQ3: meaningful task is complete; following state can safely wait; pause exists without the ad; protected workflows are excluded; no-fill means immediate continuation; test-ad QA passes; frequency/cooldown is bounded; privacy/age requirements pass; eligible-opportunity denominator and owner exist.
- AQ4: paid-event revenue is joined to eligible opportunities and retained-user economics while first value, task completion, useful return, abandonment, reputation and click-quality guardrails remain acceptable.
- AQ5: validated transition taxonomy, exclusions, caps, measurement and rollback rules transfer safely to another niche app.

## Eligibility test
A candidate transition must satisfy all: the preceding job is recognizably complete; no unsaved/ambiguous state remains; the next required core action is not time-sensitive; the transition exists with ads disabled; no-fill never delays continuation; an explicit cap/cooldown applies; and the trigger is not merely Back, tab change, page view, tap count or exit.

## MintTap
Transaction entry/edit/delete, portfolio inspection, distribution/ROC/tax work, calculations, warnings and recovery/backup remain protected. Save is not automatically eligible if the user's natural next step is verifying the resulting portfolio. Evaluate only genuinely completed, non-urgent secondary-task boundaries.

## LogMate
Flight entry/save/edit/delete, totals/search, import/duplicate resolution, offline/recovery, backup/restore and operational warnings remain protected. A saved flight is not automatically a break because verification, another leg, correction or duty review may immediately follow. Until pilot workflow evidence establishes a harmless completed-task boundary, assume no interstitial inventory.

## Measurement
`eligible completed-task transitions → ad-ready opportunities → shown impressions → paid events/revenue → immediate continuation → next core action → useful return`

No-fill/ad-not-ready are normal continuation paths. Do not delay the product waiting for an ad. Optimize incremental retained-user revenue per eligible completed-task transition, not impressions/session or CTR.

Existing F/E/U controls remain authoritative; AQ adds the missing eligibility test. If no AQ3 transition exists, use no interstitial.