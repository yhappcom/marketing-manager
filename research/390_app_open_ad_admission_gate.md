# Research 390 — App-Open Ads Need a Separate Admission Gate

Validated: 2026-10-03

## Why this is new
Research 389 established an interruption budget for interstitial/banner inventory. App-open ads are a distinct format with a different placement contract: Google AdMob designs them specifically for app-open/resume loading moments, not as a generic extra full-screen impression.

## Authoritative findings
- AdMob says app-open ads should appear only when the user opens or switches back to an app and should be integrated with the splash/loading experience.
- AdMob says apps opened more than once every four hours see the best performance from app-open ads and advises considering other formats when usage does not fit that pattern.
- Do not stack another ad immediately before/after an app-open ad or place an app-open ad over other ads.
- Google Play prohibits unexpected full-screen interstitials when the user has chosen to do something else; explicitly opted-in rewarded ads are treated separately.
- Standard interstitials must not be substituted at app load; AdMob's interstitial guidance directs publishers toward the dedicated app-open format instead.

Sources:
- https://support.google.com/admob/answer/9341964
- https://support.google.com/admob/answer/6201362
- https://support.google.com/googleplay/android-developer/answer/9857753

## ILD0–ILD9 — App-open admission contract
1. **Session-entry pattern** — measure actual cold-open/resume cadence before considering inventory.
2. **Loading-state truth** — there must be a genuine loading/transition state; do not manufacture delay solely to host an ad.
3. **First-value sensitivity** — identify whether immediate specialist context is important enough that a full-screen entry ad would damage trust.
4. **Frequency fit** — sparse/intentional-use apps do not inherit high-frequency consumer-app monetization patterns.
5. **Format correctness** — app-open inventory is not a workaround for disallowed launch interstitials.
6. **No stacking** — exclude adjacent interstitial/banner conflicts and preserve a clean transition into content.
7. **Failure-safe entry** — ad load failure must never delay or gate normal app access.
8. **Cohort measurement** — compare first-value completion, repeat use/retention and revenue, not eCPM alone.
9. **Sparse-data discipline** — low-volume results remain UNKNOWN/HOLD rather than being optimized from noise.
10. **Decision** — ADMIT / HOLD-USAGE-MISMATCH / HOLD-FIRST-VALUE-RISK / REJECT-NO-REAL-LOADING-STATE / REMOVE / RETEST.

## MintTap
Do not add app-open ads merely because the format exists. MintTap users may open the app with a specific portfolio/distribution/ROC question; that makes entry latency and context interruption material. First audit real session-open cadence and time-to-first-specialist-value. If usage is not frequent enough or entry interruption reduces first-value completion, classify HOLD-USAGE-MISMATCH or HOLD-FIRST-VALUE-RISK.

## LogMate
Default posture is stricter. A pilot opening LogMate to enter or inspect operational records has a professional task in progress. App-open monetization should therefore be REJECT/HOLD unless post-launch evidence shows a genuine loading state, suitable usage cadence, and no degradation in first/repeated professional value. Never create artificial loading time or restrict normal use to manufacture inventory.

## Reusable rule
**A monetizable transition is not automatically monetization inventory.** Admit app-open ads only when the product already has a natural entry/loading transition and measured usage economics justify the interruption without harming specialist value.

## Next operational target
Audit MintTap production session-entry telemetry: cold opens vs resumes, inter-open interval distribution, real loading duration, time-to-first-specialist-value, existing entry ads, and adjacent ad formats. Only then decide whether app-open inventory should exist.
