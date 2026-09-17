# 087 — App-Open / Foreground Intent Protection Contract

Validated: 2026-09-18

## Why this exists

The business model is ad-supported, but the product constraint is stronger: ads must not make MintTap or LogMate feel gated, surprising, or harder to use. App-open advertising is therefore not a generic revenue slot. It is eligible only when a real loading/wait boundary exists and the user's foreground intent has not yet become actionable.

## Canonical principle

> **Monetize waiting, not intent.**

A foreground event is not itself an ad opportunity. The opportunity exists only while the user is already waiting for product readiness. Once actionable product content is available, the user's intent owns the foreground.

## First-party findings

### Google Mobile Ads / AdMob

Google's current App Open guidance says:
- App Open ads are designed to monetize app loading screens / foreground entry.
- The first App Open ad should be delayed until the user has used the app a few times.
- Ads should be shown while the user would otherwise be waiting for the app to load.
- On cold start, the preferred implementation is to show from the loading screen while assets continue loading; if the app has already completed loading and sent the user to main content, do not show the ad.
- App Open ads should not be stacked immediately before/after other ads or shown on top of content already carrying another ad.
- AdMob says the format performs best in apps opened frequently; apps opened more than once every four hours see the highest performance, and another format should be considered when that pattern does not fit.
- Frequency caps can be set at app or ad-unit level and should be adjusted from observed performance.

This means `foregrounded` is only a technical trigger candidate. It is not sufficient product eligibility.

### Google Play

Google Play's Ads policy prohibits unexpected full-screen interstitials when a user has chosen to do something else. It explicitly identifies ads inserted after a button click but before the intended action as an example of an unexpected interruption. Repeated interstitials that distract users from performing in-app tasks can also qualify as Made for Ads behavior.

Therefore a foreground/resume implementation must protect pending user action and cannot treat every lifecycle transition as a monetization boundary.

### Apple

Apple App Review Guideline 2.5.18 requires interruptive/interstitial ads to be clearly identifiable as ads, not manipulate users into tapping, and provide an easily accessible visible close/skip control large enough to dismiss. Apps containing ads must also provide a way to report inappropriate or age-inappropriate ads.

Cross-platform implication: dismissibility and non-deception are floors. They do not establish that an ad placement is product-appropriate.

## F0–F5 Foreground Monetization Eligibility

### F0 — Intent hijack
Ad appears after actionable content or after a user action has begun, blocks a pending task, overlaps another ad, or otherwise converts product intent into forced ad exposure.

**Do not ship.**

### F1 — Lifecycle-only trigger
Ad is triggered because the app entered foreground, without knowing whether the user is a first-time user, returning from a short interruption, already has a pending task, or is actually waiting.

**Insufficient.**

### F2 — Frequency-controlled but semantically blind
Cooldown/frequency cap exists, but the system still cannot prove a legitimate wait boundary or protect a pending product action.

**Still insufficient.** Frequency capping reduces exposure; it does not create placement legitimacy.

### F3 — Protected wait boundary
All must hold:
1. user has already had several app uses / first-value opportunity;
2. the app is genuinely in a loading/wait state;
3. main actionable content has not become available;
4. no pending deep link, notification destination, import continuation, save/restore operation, error recovery, or other explicit user intent will be delayed;
5. no adjacent/overlapping ad exposure exists;
6. ad is clearly attributable, dismissible, and policy-compliant;
7. normal app use remains available without ad interaction.

**Minimum candidate for controlled production testing.**

### F4 — Evidence-governed placement
F3 plus telemetry distinguishes:
`foreground → eligibility reason → wait duration → ad request → match → impression → dismissal → content-ready time → first actionable content → useful action → rapid exit/error`.

Compare eligible exposed sessions against comparable non-exposed sessions. Revenue is evaluated together with useful return, task continuation, latency and rapid-exit signals.

### F5 — Sustainable boundary
Repeated evidence shows the placement monetizes otherwise-idle waiting without meaningful deterioration in task completion, useful return, trust/compliance incidents or product latency. Frequency remains evidence-driven rather than revenue-maximized by default.

## Protected foreground-intent registry

Before App Open eligibility is evaluated, the implementation should suppress exposure when any protected intent is active. Candidate registry:
- first launch / onboarding / consent / migration;
- Store or web deep link into a specific portfolio/ticker/workflow;
- notification tap with an explicit destination;
- unfinished transaction/import/restore/save flow;
- authentication or permission continuation;
- error/recovery state;
- user returns from OS picker, browser, share sheet or another app specifically to complete an action;
- product content is already ready and interactive;
- another full-screen or banner/native ad exposure would conflict with the App Open surface.

This registry must be validated against actual app navigation before implementation; it is not a claim that all entries currently exist in MintTap or LogMate.

## MintTap implication

MintTap is a utility/portfolio-tracking product. A foreground can plausibly mean a user wants to check a portfolio value, distribution, ROC result, transaction, or a deep-linked workflow immediately. That makes lifecycle-only App Open logic particularly risky.

Do not add or tune App Open frequency from eCPM alone. First build the actual foreground-intent and loading-state ledger. If MintTap normally becomes actionable almost immediately, the format may have little legitimate inventory; this is an acceptable outcome. The business objective is revenue per retained useful user, not ads per open.

## LogMate implication

For a pilot logbook, fast access can be operationally important even when the app is not safety-critical. Do not establish App Open as a default monetization assumption before production navigation, offline restore/sync, import continuation and manual-entry behavior are stable. A return from file picker/import or another operational continuation is protected intent, not a fresh monetization opportunity.

## Measurement contract

Do not report App Open success as eCPM or impression count alone. Minimum ledger:

`session_id → launch_type(cold/resume) → prior_use_count → protected_intent → loading_started → content_ready → F-class → ad_requested → matched → impression → dismissed → actionable_content → useful_action → useful_return → rapid_exit → error → revenue`

Derived questions:
- What share of foregrounds contain a real wait boundary?
- What share are suppressed because user intent is already active?
- Does exposure add time after content is ready?
- Does useful-action completion change for comparable sessions?
- Does revenue per retained/useful user improve, not merely revenue per open?
- Are invalid-traffic, accidental-click, policy, complaint or rapid-exit signals worsening?

## Stop / rollback triggers

Immediately investigate or disable the placement if:
- ads appear after actionable content is visible;
- ads intercept button/deep-link/notification/file-picker continuation;
- accidental-click or policy warnings appear;
- rapid exits or task abandonment rise materially around exposure;
- ad loading extends the wait rather than monetizing unavoidable wait;
- placement requires making the product artificially slower;
- the only positive evidence is more impressions/revenue while useful behavior weakens.

## Reusable rule for future niche apps

App Open is not a default ad slot in the company template. New apps inherit **F0–F5**, not an enabled format. The product must first prove that it naturally has a wait boundary, that foreground intent can be protected, and that the audience's expected immediacy is compatible with the format.

## Authoritative sources

- Google Mobile Ads SDK for Flutter — App open ads: https://developers.google.com/admob/flutter/app-open
- Google AdMob Help — App open ad guidance and best practices: https://support.google.com/admob/answer/9341964
- Google AdMob Help — Frequency caps: https://support.google.com/admob/answer/6244508
- Google Play Console Help — Ads / Disruptive Ads / Better Ads Experiences / Made for Ads: https://support.google.com/googleplay/android-developer/answer/9857753
- Google AdMob Help — Disallowed interstitial implementations: https://support.google.com/admob/answer/6201362
- Apple App Review Guidelines §2.5.18: https://developer.apple.com/app-store/review/guidelines/
