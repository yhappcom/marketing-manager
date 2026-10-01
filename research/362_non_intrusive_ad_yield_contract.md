# Research 362 — Non-Intrusive Ad Yield Contract

Validated: 2026-10-02

## Why this exists
For a niche professional utility, ad revenue must be optimized subject to workflow integrity, not by maximizing interruption count. MintTap and LogMate should treat specialist trust and repeated value as constraints on monetization.

## Authoritative platform findings
1. Google Play's current Ads policy prohibits unexpected full-screen interstitials, including ads inserted after a user chooses an action but before the intended content/action begins. Full-screen interstitials generally must be closeable within 15 seconds; explicitly opt-in rewarded ads and ads that do not interfere with normal use are treated differently.
2. AdMob's implementation guidance says not to place interstitials on app load or exit, not to overwhelm users with repeated interstitials, and gives a compliance example ceiling of no more than one interstitial after every two user actions. This is a policy/implementation boundary, not a revenue target.
3. Apple's App Review Guideline 2.5.18 requires interruptive/interstitial ads to be clearly identifiable as ads, not manipulate taps, and provide an easily accessible visible close/skip control. Apps with ads must let users report inappropriate or age-inappropriate ads.
4. Rewarded ads are a user-initiated exchange. For these apps, they must not become a disguised gate on core specialist work; zero usage restrictions remains the product constraint.

## New operating principle
Optimize expected sustainable ad value per retained specialist user, not impressions per session.

Revenue can rise through better eligible fill, latency, placement quality, traffic quality, source competition, and retained usage without adding interruption pressure. More impressions are not automatically better when they damage first value, repeated value, reviews, Store conversion, or professional trust.

## HY0–HY9 — Ad Yield Safety Contract
HY0 specialist job state
→ HY1 protected-workflow classification
→ HY2 format eligibility
→ HY3 user expectation/opt-in state
→ HY4 frequency/cooldown eligibility
→ HY5 request/load latency health
→ HY6 impression/paid-event reconciliation
→ HY7 revenue quality (eCPM × eligible impressions, not eCPM alone)
→ HY8 retention/trust guardrails
→ HY9 KEEP / OPTIMIZE-SUPPLY / MOVE-PLACEMENT / REDUCE-PRESSURE / DISABLE / UNKNOWN.

## Protected workflows
Default protected states include:
- MintTap: data entry/editing, ROC/tax adjustment work, split/reinvestment reconstruction, portfolio correction, error/recovery states.
- LogMate: Add Flight/multi-leg entry, import/migration, duplicate reconciliation, Previous Total, export/backup, sync/recovery, and other record-integrity workflows.

Do not place an unexpected full-screen ad between a user's command and completion of that command.

## Revenue optimization order
Before adding ad pressure:
1. verify consent/request eligibility and policy state;
2. map every production ad unit and surface;
3. measure request → load → impression → paid-event loss;
4. inspect latency/error/source quality;
5. reconcile paid events to network reporting;
6. improve eligible supply/mediation only where UX remains unchanged;
7. test placement only at natural completed-work boundaries;
8. increase frequency only if retention/trust guardrails remain intact.

This order distinguishes supply-side revenue loss from an inventory shortage. If existing eligible impressions are under-monetized, adding more interruptions is the wrong intervention.

## Measurement
For each surface record: specialist state, format, trigger, expected/opt-in status, requests, loads, impressions, paid events, estimated revenue, latency/error, dismiss/return behavior, next core action, first/repeated value, retention/review/support signals.

Do not infer causality from eCPM alone. A higher eCPM with fewer retained users can reduce sustainable revenue.

## MintTap decision
Keep Home free of intrusive ads per product direction. Audit sub-screen inventory first. Prefer persistent/non-full-screen inventory where it does not crowd data or controls. Full-screen inventory requires a genuine completed-work boundary and explicit HY eligibility; never insert it before requested navigation or calculation/reconstruction completion.

## LogMate decision
Pre-launch default is no monetization pressure until core professional workflows and measurement are stable. Ads must remain subordinate to logbook integrity. A rewarded format cannot gate logging, import, export, backup, or other core capability.

## Reusable niche-app rule
Professional trust is part of monetization economics. The reusable objective is:
truthful acquisition → first value → repeated value → eligible non-intrusive inventory → reconciled revenue → retained specialist user.

## Next evidence needed
MintTap production ad-unit/surface inventory; consent/request state; request/load/impression/paid-event funnel; latency/errors; mediation/source configuration; caps/cooldowns; Policy Center/traffic-quality history; app-ads.txt readiness. Until observed, monetization changes remain UNKNOWN rather than presumed opportunities.

## Sources
- Google Play Ads policy: https://support.google.com/googleplay/android-developer/answer/9857753
- AdMob disallowed interstitial implementations: https://support.google.com/admob/answer/6201362
- Google Mobile Ads rewarded ads: https://developers.google.com/admob/android/rewarded
- Apple App Review Guidelines §2.5.18: https://developer.apple.com/app-store/review/guidelines/
