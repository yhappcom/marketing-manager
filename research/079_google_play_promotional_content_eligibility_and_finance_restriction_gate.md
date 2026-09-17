# 079 — Google Play Promotional Content Eligibility & Finance-Restriction Gate

Date: 2026-09-17
Status: canonical post-freeze research

## Why this matters
Research 078 established Apple In-App Events as a truthful, time-bounded discovery/reactivation surface. Google Play has a superficially similar Promotional content system, but parity must not be assumed. For a sparse niche portfolio, and especially MintTap, platform eligibility and category restrictions materially change whether the surface belongs in the zero-cost growth plan.

## Validated first-party findings

### 1. Promotional content is not universally available to apps
Google Play states that Promotional content is available to all games, but for apps it is available only when the app meets eligibility criteria for Premium growth tools. Featuring, deep links, and audience targeting are likewise tied to that eligibility.

Operational consequence: do not place Google Play Promotional content in the baseline launch checklist for a new niche app. Console access/eligibility is a prerequisite, not an assumption.

Source: Google Play Console Help, “Understand promotional content” and “Create promotional content,” checked 2026-09-17.
- https://support.google.com/googleplay/android-developer/answer/12929029
- https://support.google.com/googleplay/android-developer/answer/12932541

### 2. When eligible, the surface is materially useful
Google describes Promotional content as a self-service surface for fresh and timely content including offers, time-limited events, and major updates. It can appear in the Apps/Games surfaces, search results, and the store listing, and can support opening/reinstalling the app and new acquisition.

This is discovery/reactivation infrastructure, not a replacement for activation quality.

### 3. Google imposes an event-truth requirement similar in spirit to Apple
Quality guidance requires Promotional content to be new, noteworthy, user-facing, and concurrent with the actual in-app experience. General service descriptions, evergreen content, and routine events are not valid promotional inventory. Users must be able to find the promoted content easily after opening the app.

Canonical rule: **Promotional Surface Requires Product Truth.**

A marketing deadline, routine monthly activity, or external market-calendar date does not become Google Play Promotional content merely because it could create exposure.

Source: Google Play Console Help, “Reach more customers by adhering to our content quality guidelines,” checked 2026-09-17.
- https://support.google.com/googleplay/android-developer/answer/12929944

### 4. MintTap has a stronger constraint: finance-related Promotional content is restricted
Google’s current submission-quality guidance explicitly says Promotional content is not currently allowed for certain financial products/services and tells developers to avoid events promoting investment/trading-related themes, including investment or financial advice/resources/management, stocks, funds, shares, and financial utility services.

MintTap tracks YieldMax ETFs and therefore sits close to, and potentially directly within, the restricted finance terminology/categories described by Google. We must not infer that MintTap is eligible merely because the app itself is permitted on Play.

Canonical MintTap decision: **Google Play Promotional content = NOT A PLANNED GROWTH SURFACE unless Play Console explicitly exposes eligibility and a proposed submission is independently verified against the then-current finance restriction.**

Do not design a campaign around this surface first and then attempt to word around the restriction. Semantic evasion is prohibited.

Source: Google Play Console Help, “Track and fix submissions that do not meet content guidelines,” checked 2026-09-17.
- https://support.google.com/googleplay/android-developer/answer/12932123

### 5. LogMate cannot assume access either
LogMate is not finance-related, so the MintTap finance restriction does not automatically apply. However, app-level Premium growth tools eligibility remains a gate. Even if access later exists, only a genuine major update, new user-facing content, or legitimate time-limited in-app experience should be submitted.

LogMate status: **FUTURE CONDITIONAL**, not launch inventory.

### 6. Timing and quality affect operations
Google says an event can be created at any time but submitted at the earliest 60 days before its start; approval can take up to four days. Promotional events can run for a maximum of four weeks. Quality-compliant submissions may gain broader reach; policy-compliant content that fails broader quality guidance may remain limited to the app details page.

Operational consequence: even for eligible future apps, featuring is not guaranteed inventory and should never be part of a forecast as deterministic reach.

## Cross-platform event-surface architecture

Do not treat Apple IAE and Google Promotional content as symmetric checkboxes.

| Surface | Baseline access | Primary role | Company gate |
|---|---|---|---|
| Apple CPP | eligible App Store product | stable search-intent routing | earned specialist intent/promise |
| Google CSL | eligible Play product | stable search-intent routing | earned specialist intent/promise |
| Apple In-App Events | App Store capability subject to Apple rules | truthful time-bounded discovery/reactivation | real event truth |
| Google Promotional content | all games; eligible apps only | fresh/timely discovery/reactivation | access + category + event truth |
| PPO / Store listing experiments | traffic-dependent | causal creative learning | evidence budget |

Canonical principle: **Platform Parity Is a Hypothesis, Not a Planning Assumption.**

A capability on one store does not imply the other store offers an equivalent surface, equivalent eligibility, or equivalent category permissions.

## Reusable decision gate for future niche apps
Before adding any Store event/promotional surface to a launch or growth plan, answer in order:

1. Is the app actually eligible for the surface in Console?
2. Is the app/category allowed to use it for the proposed subject?
3. Is there a real, new/noteworthy, user-facing in-app experience?
4. Does the Store description exactly match what the user reaches in-app?
5. Can the experience be found immediately/easily after open or via supported deep link?
6. Is the surface incremental to, rather than a substitute for, first-value activation?
7. Can performance be interpreted under sparse traffic without treating featuring as guaranteed?

Failure at 1–3 stops campaign design.

## Product-specific decisions

### MintTap
- Do not plan Google Promotional content campaigns around YieldMax distribution dates, ROC dates, ticker events, or investment-related updates.
- Current finance restriction is a stronger stop condition than creative opportunity.
- Keep zero-cost Play strategy centered on accurate default listing, observed search demand, CSL intent routing when earned, reviews/service recovery, and qualified external community acquisition.

### LogMate
- No finance restriction identified in the reviewed guidance.
- Still requires Premium growth tools eligibility and event truth.
- Candidate future moments could only be evaluated after the underlying feature is production-real and user-facing; roadmap milestones do not qualify.

## What this changes from 078
078 remains valid for Apple. This research prevents a false cross-platform inference: Google Play Promotional content is not a default Android counterpart available to every app, and MintTap faces an explicit finance-content restriction that makes the surface especially unsuitable as planned growth inventory.

## Next evidence targets
- Inspect MintTap Play Console only when connected data/access is available: whether Promotional content is exposed at all.
- If exposed, re-check the current finance restriction before any concept work.
- For LogMate, defer until launch readiness and actual Console eligibility exist.
- Continue higher-value work on observed Play Search demand/CSL and source→first-value evidence rather than manufacturing promotional events.
