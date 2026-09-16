# 038 — MintTap Activation-Cohort Measurement Design

Date: 2026-09-16
Status: POST-FREEZE LIVE-READINESS / MEASUREMENT DESIGN

## Purpose

With MintTap 1.0.29 confirmed released, stop spending effort on release-identity uncertainty and define the smallest measurement design that can answer the next real marketing question: **which acquired users reach actual MintTap value, return to use it, and generate sustainable ad revenue without increasing intrusive exposure?**

This design deliberately avoids broad clickstream instrumentation and sensitive investment-content payloads.

## Current verified state

- MintTap 1.0.29 is released by first-party operational confirmation.
- Firebase Analytics is initialized in the audited release-version implementation and custom `app_start` is code-verified.
- Firebase/Google Analytics automatically collects standard lifecycle/engagement events once Analytics is configured; current official documentation identifies automatically collected events and supports custom events for product-specific value states.
- `first_portfolio_value_ready_v1` has a code-verified semantic boundary but repository search did not find that literal event name on the searchable default surface. Because GitHub code search indexes the default branch rather than arbitrary version branches, this is **not sufficient proof of release-branch absence**; the event remains NOT YET VERIFIED AS IMPLEMENTED until exact-ref inspection or runtime evidence resolves it.
- `lastActiveAt` exists in 1.0.29 as a separate coarse authenticated-return/recency signal.
- Home detail-return recreates the banner request opportunity.
- AdMob↔Firebase linkage and automatic `ad_impression` runtime evidence remain UNKNOWN.

## Authoritative platform facts revalidated

Current Firebase documentation states:

1. Google Analytics for Firebase automatically captures a set of events/user properties and allows custom events for app-specific business states.
2. When an AdMob app is linked to Firebase and Analytics, the Firebase Analytics SDK automatically logs `ad_impression` when an AdMob impression occurs, including ad-revenue information.
3. Firebase recommends validating `ad_impression` in DebugView, Realtime, and—when available—BigQuery samples.
4. Google Analytics cohort exploration supports inclusion and return criteria based on events, but cohort analysis is device-based; User-ID is not considered in cohort exploration.

These facts materially change how MintTap retention analysis should be designed.

## Key learning 1 — do not define retention from `app_start`

`app_start` is useful as a technical app-launch signal, but a specialist portfolio app can be opened without reaching useful portfolio state. Using `app_start` as both acquisition activation and return criterion would reward empty opens and notification-driven peeks equally with useful portfolio review.

The measurement hierarchy should therefore be:

`first_open / acquisition context → first_portfolio_value_ready_v1 → useful-return criterion → ad_impression/revenue`

The first semantic event is the critical bridge between Store acquisition and product value.

## Key learning 2 — activation and return require different semantics

`first_portfolio_value_ready_v1` should fire once per activation-definition scope. It answers whether a user ever crossed the first-value boundary.

Retention/return requires a repeatable event or state. Reusing the one-time activation event as a return criterion is impossible by definition.

Therefore define a separate repeatable candidate only when implementation work is opened:

`portfolio_value_viewed_v1`

Candidate semantics:

- authenticated normal user;
- not browse/demo mode;
- Home summary calculation succeeds;
- `summary.positions.isNotEmpty`;
- normal calculated portfolio value is exposed in the user-visible Home path.

Unlike first activation, this event may repeat across legitimate useful visits. It must not contain ticker, holdings, quantities, portfolio identifiers/names, P&L, distributions, ROC, tax data, transaction data, memo, or other investment content.

Do **not** emit it on every rebuild. It needs explicit visit/session deduplication semantics so UI rebuilds cannot inflate useful-return counts. The exact deduplication implementation belongs to engineering design, not marketing inference.

## Key learning 3 — `lastActiveAt` is useful but cannot substitute for useful return

`lastActiveAt` is account-linked Firestore state with its own once-per-local-day/device behavior. It can answer coarse questions such as whether an authenticated account was active recently.

It does not prove that portfolio value was calculated/exposed. Keep it as an independent return/recency guardrail, especially useful for account-level operational analysis, while `portfolio_value_viewed_v1` would represent repeatable core-value use.

Never merge the two into one metric.

## Key learning 4 — GA cohort reports and account-level return answer different questions

Google's current cohort exploration documentation says cohort analysis is based on device data and does not use User-ID. This matters for MintTap because users can reinstall or use more than one device.

Therefore:

- GA/Firebase cohort analysis is suitable for device-level marketing/product behavior trends;
- account-scoped `lastActiveAt` or a future privacy-reviewed server/account activation marker is suitable for account-level operational questions;
- do not claim the two populations are identical;
- report the unit of analysis explicitly: device/user-instance vs authenticated account.

This distinction should become a reusable rule for future cross-device niche apps, especially LogMate if phone/EFB synchronization is implemented.

## Key learning 5 — minimum viable funnel should stay intentionally small

Do not instrument every navigation tap. The minimum high-value funnel is:

1. `first_open` / Store acquisition context — platform-native/Analytics acquisition layer;
2. `first_portfolio_value_ready_v1` — one-time semantic activation;
3. `portfolio_value_viewed_v1` — repeatable useful-return candidate with rebuild/session deduplication;
4. automatic `ad_impression` + revenue — only after AdMob↔Firebase linkage is verified;
5. coarse account recency (`lastActiveAt`) — independent operational guardrail.

Optional diagnostics should only be added when a Decision Record identifies a specific unresolved mechanism.

## First baseline tables to build after instrumentation alignment

### Acquisition → activation

By install/acquisition cohort and app version:

- first opens;
- users reaching first portfolio value;
- activation rate;
- time-to-first-value distribution where safely derivable;
- missing/unknown state explicitly preserved.

Do not compare channels with tiny specialist samples as if ordinary sampling noise were causal evidence.

### Activation → useful return

For activated device cohorts:

- D1/D7/D28 useful-return incidence using the repeatable semantic event, once implemented;
- separately, authenticated-account recent activity from `lastActiveAt` using its documented semantics;
- never label `lastActiveAt` as GA retention.

### Useful use → monetization

After AdMob↔Firebase linkage is verified:

- confirmed impressions per activated/returning device;
- ad revenue per activated/returning device;
- impressions per useful portfolio-view visit/window;
- revenue distribution, not only mean ARPU, where sample size permits;
- ad-load/fill diagnostics from AdMob aggregate reporting before adding custom request telemetry.

## Frequency decision guardrails

Do not optimize the current detail-return refresh policy until the baseline can distinguish:

`useful portfolio review depth` from `ad exposure pressure`.

A highly engaged user may naturally create more detail-return ad requests. Raw impressions/user can therefore rise because users are receiving more value, because the app is showing ads more aggressively, or both.

A frequency Decision Record should compare monetization against at least:

- useful-return rate;
- useful portfolio-view frequency;
- app-version stability/crash signals where available;
- ad click anomaly/policy risk;
- qualitative complaints/reviews mentioning ad annoyance;
- latency/layout harm if observed.

The objective is sustainable ad revenue conditional on product value, not maximum impressions.

## Zero-cost marketing implication

Once the semantic activation event exists, Store/community/blog/social work can finally be evaluated on **qualified activation**, not installs alone.

For MintTap's narrow YieldMax audience, this is particularly important: a small source that sends users who actually create and revisit a portfolio may be more valuable than a larger source that generates curiosity installs and no portfolio state.

Until this event is live, channel decisions should retain a lower evidence grade rather than substituting `app_start` or downloads for product value.

## Reusable company framework

For future niche apps:

`acquisition event ≠ first value ≠ useful return ≠ account recency ≠ monetized impression`

Choose one explicit unit of analysis for every metric and preserve it in the Evidence Registry.

Recommended metadata for each metric definition:

- business question;
- event/state name and version;
- unit: device/user-instance/account/impression;
- inclusion predicate;
- deduplication window;
- sensitive fields explicitly prohibited;
- source system;
- deployment version;
- missingness semantics;
- known cross-device limitations.

## Next evidence targets

1. Inspect exact 1.0.29 ref/runtime evidence to determine whether any existing semantic activation/useful-return events already exist under other names before engineering new events.
2. Verify AdMob↔Firebase/Analytics linkage and automatic `ad_impression` runtime parameters.
3. If semantic events are absent, hand engineering the minimal two-event contract: one-time `first_portfolio_value_ready_v1` plus deduplicated repeatable `portfolio_value_viewed_v1`.
4. Build the first version-aligned activation/useful-return/ad-revenue baseline only after those events are actually served.
5. Keep acquisition and ad-frequency optimization evidence-gated until this baseline exists.

## Sources revalidated 2026-09-16

- Firebase Analytics overview: https://firebase.google.com/docs/analytics
- Firebase ad-revenue measurement: https://firebase.google.com/docs/analytics/measure-ad-revenue
- Firebase + AdMob overview: https://firebase.google.com/docs/admob
- Google Analytics cohort exploration: https://support.google.com/analytics/answer/9670133
