# 121 — App-open ads as wait-state inventory, not a launch tax

Validated: 2026-09-19

## Decision

Canonical principle: **An app-open ad is legitimate only when it monetizes a wait state that already exists; it must not manufacture a wait state or tax access to core value.**

This is especially important for MintTap and LogMate because their value is specialist utility, not high-frequency entertainment. A format being available in AdMob is not evidence that it belongs in either product.

## Authoritative evidence

Google documents app-open ads as a format for app loading/foregrounding. Its current implementation guidance says:

- do not show the first app-open ad on the first app start; the broader best-practice wording is to wait until the user has used the app a few times;
- show app-open ads while the user would otherwise be waiting for the app to load;
- on a cold start, if loading completes and the user has already reached main content before the ad is ready, do not show the ad afterward;
- loaded app-open ads expire after four hours;
- do not place another ad immediately before or after an app-open ad, and do not overlay it on content already carrying another ad;
- Google says the format performs best for apps opened frequently, with more-than-once-per-four-hours usage cited as the strongest-fit pattern; otherwise another format should be considered;
- AdMob supports app-level/ad-unit frequency capping for interstitial, rewarded and app-open impressions.

Interstitials are a separate format. AdMob explicitly disallows interstitials on app load/exit and recommends app-open ads for the load/return context. It also warns against recurring interstitials and says they must not block core navigation/content.

Sources:
- Google Mobile Ads SDK, App open ads: https://developers.google.com/admob/android/app-open
- Google Mobile Ads SDK Next-Gen, app open: https://developers.google.com/admob/android/next-gen/app-open
- AdMob Help, app-open guidance: https://support.google.com/admob/answer/9341964
- AdMob Help, disallowed interstitial implementations: https://support.google.com/admob/answer/6201362
- AdMob Help, frequency capping: https://support.google.com/admob/answer/6244508

## AM0–AM5 App-Open Fit Gate

**AM0 — harmful/noncompliant.** Interstitial-on-launch substitution, ad after content becomes usable, first-start obstruction, stacked full-screen ads, or core-navigation interference.

**AM1 — inventory chasing.** App-open is enabled because it adds impressions, without observed natural loading/foreground wait or user-cadence evidence.

**AM2 — technically plausible.** Correct format/lifecycle implementation exists, but first-value protection, natural wait evidence, frequency policy, and downstream measurement are incomplete.

**AM3 — legitimate wait-state monetization.** Requires all of: no first-start ad; prior successful core-value experience; a genuine loading/foreground wait that exists without the ad; cancel/skip when content becomes ready before the ad; no adjacent/overlapping ad; explicit frequency cap; impression/revenue measurement through U-class evidence; AC privacy parity for SDK/config; and first-value/useful-return guardrails.

**AM4 — observed economic fit.** AM3 plus cohort evidence that incremental retained-user ad revenue is positive without material degradation in first-value completion, useful return, support/reputation signals, or foreground-task continuity. Correlation is not causal proof; controlled rollout is preferred when traffic permits.

**AM5 — reusable portfolio rule.** A cross-app registry records eligibility, natural wait definition, minimum prior-value condition, cap, exclusions, revenue evidence, retention/reputation guardrails, and retirement trigger.

## MintTap application

Do **not** treat app launch as monetizable inventory by default. A user opening MintTap to check a distribution, portfolio state, ROC/tax adjustment, or split-adjusted position has explicit foreground intent. If the app normally reaches useful content quickly, inserting an app-open ad would create latency rather than monetize latency and fails AM3.

App-open becomes testable only if production telemetry demonstrates a real unavoidable load/restore wait and users have already completed core value on earlier sessions. Even then, the test must compare incremental retained-user revenue, not raw impression count or eCPM.

Given the current company preference for non-intrusive ads, **default MintTap policy is no app-open ad until AM3 evidence exists.** Banner/native or legitimate post-task boundaries remain preferable where already governed by B/E/F/U gates.

## LogMate application

Default is stricter: **no app-open ad during launch, flight-record entry, restore, offline recovery, import, backup, or any path where immediate record access is operationally important.** A pilot opening a logbook is not an entertainment re-entry event.

LogMate should not manufacture a splash/loading screen to create ad inventory. If the production PWA/mobile architecture has a genuine unavoidable wait in a noncritical context, it can be evaluated later, after pilot first-value/cadence evidence. Until then LogMate is AM1 at best for this format and app-open is not a launch requirement.

## Measurement contract

Do not optimize `app-open impressions/session` or `app-open eCPM` in isolation. Minimum decision table:

`eligible returning user → natural wait encountered → ad eligible → ad shown → incremental paid impression revenue → core task reached → useful return → support/reputation outcome`

Required exclusions include first run/onboarding, unresolved recovery/error states, deep links that represent explicit specialist intent, adjacent full-screen ad exposure, and any state in which main content is already interactive.

A frequency cap is a safety control, not proof of product fit. Passing a platform policy ceiling is also not evidence that the format is acceptable for a specialist audience.

## Portfolio rule

For future niche apps, classify monetization inventory by **natural user state**, not by SDK format availability:

1. foreground core task — protect;
2. genuine wait/loading state — potentially monetizable after prior value;
3. voluntary value exchange — rewarded candidate;
4. post-task transition — interstitial candidate only under existing F/E gates;
5. persistent non-obstructive space — banner/native candidate under B/E gates.

This prevents ad-format availability from dictating product UX.

## Unresolved evidence

- MintTap observed cold/warm launch-to-interactive latency and foreground cadence.
- Whether MintTap currently implements any app-open unit or app-level frequency cap.
- Revenue delta versus downstream useful-return/reputation effects under a controlled eligible cohort.
- LogMate production launch/offline/restore latency and pilot cadence; no app-open test is justified before these exist.
