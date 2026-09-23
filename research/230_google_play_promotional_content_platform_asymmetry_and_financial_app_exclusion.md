# Research 230 — Google Play Promotional Content: Platform Asymmetry and Financial-App Exclusion

Date: 2026-09-24
Status: Validated from current Google Play authoritative documentation

## Why this matters
Research 229 validated Apple In-App Events. This research tests whether Google Play has an equivalent Store-native re-engagement mechanism and whether it is actually usable by MintTap or LogMate. The answer is asymmetric: Google Play has Promotional content, but access and content eligibility differ materially from Apple, and current Google guidance creates a direct exclusion problem for MintTap's investment/financial-utility positioning.

## Authoritative findings

### 1. Google Play Promotional content is a real Store-native discovery/re-engagement surface
Google Play describes Promotional content as a self-service tool for fresh and timely content such as special offers, limited-time events and major updates. It may appear across Play surfaces including Apps/Games tabs, search results and the store listing. Google states that it can encourage users to open or reinstall an app and can attract new downloads.

Source: Google Play Console Help, “Understand promotional content”
https://support.google.com/googleplay/android-developer/answer/12929029

### 2. It is not universally available to apps
Current Google documentation says Promotional content is available to all games, but for apps only when they meet eligibility criteria for Premium growth tools. Featuring, deep links and audience targeting likewise depend on Premium growth-tool eligibility.

Therefore Apple In-App Events and Google Play Promotional content must not be modeled as universally interchangeable inventory.

Sources:
https://support.google.com/googleplay/android-developer/answer/12929029
https://support.google.com/googleplay/android-developer/answer/12932541

### 3. Google recognizes three event classes
Current Play Console documentation exposes OFFER, TIME-LIMITED_EVENT and MAJOR_UPDATE event types. Promotional content should be new/noteworthy and user-facing; generic service descriptions, evergreen content and routine events are ineligible. Event information must correspond to what actually exists in-app, and users must be able to find the promoted content readily.

Sources:
https://support.google.com/googleplay/android-developer/answer/12932541
https://support.google.com/googleplay/android-developer/answer/12929944

### 4. Submission timing is operationally different from Apple
Google says an event can be created at any time but submitted no earlier than 60 days before its start. Review can take up to four days, so Google recommends submitting at least four days before start. This timing must be versioned independently rather than copied from Apple's In-App Event windows.

Source:
https://support.google.com/googleplay/android-developer/answer/12932541

### 5. Critical MintTap finding: current Google guidance excludes investment/financial-tool promotional themes
Google's current failure/content-quality guidance states that Promotional content is currently not allowed for certain financial products and services. Its examples explicitly include financial advice or tools relating to investing/trading, stocks, funds, shares, investment resources/management, and financial utility services.

MintTap is a YieldMax ETF portfolio/tracking utility. Until Google policy/eligibility evidence proves otherwise for the actual app/account and proposed submission, MintTap must therefore treat Google Play Promotional content as **not an available growth channel**, rather than assuming that a major feature update can be promoted through this surface.

Source: Google Play Console Help, “Track and fix submissions that do not meet content guidelines”
https://support.google.com/googleplay/android-developer/answer/12932123

### 6. LogMate is not automatically eligible either
LogMate's pilot/logbook domain is not identified by the reviewed documentation as categorically excluded, but that does not establish access. The app must first satisfy Premium growth-tool eligibility and the proposed moment must be genuinely new/noteworthy and user-facing. Routine logging, recency checks or ordinary pilot work must not be manufactured into events.

## EP0–EP5 — Google Play Promotional-Content Eligibility & Platform-Asymmetry Gate

EP0 — Platform/tool access identity
- Confirm Play Console Promotional content access for the exact app/account.
- Record Premium growth-tool eligibility state and date.
- Unknown access remains unknown; do not infer access from documentation or another app.

EP1 — Category/policy eligibility
- Check current Google content-quality/restricted-category rules against the app and proposed moment.
- A category-level exclusion ends the path before creative work begins.
- For MintTap, current evidence fails this gate unless newer authoritative/account-specific evidence changes the conclusion.

EP2 — Moment eligibility
- Require a genuinely fresh/new/noteworthy major update, time-limited event or qualifying offer.
- Reject evergreen service descriptions, routine recurring activity and artificial urgency.

EP3 — In-app truth/destination integrity
- Promotional claim, timing, assets and in-app state must agree.
- The promoted experience must be readily findable and useful in-app.
- Deep-link capability, if available, does not excuse a mismatched or inaccessible destination.

EP4 — Submission/distribution integrity
- Preserve start/end dates, submission date, review state, territories/localizations, featuring request, audience settings and distribution surfaces.
- `submitted/approved ≠ featured`; `eligible ≠ distributed`; `distributed ≠ qualified engagement`.

EP5 — Qualified-value decision
- Evaluate downstream install/reinstall/open separately from first/restored specialist value and repeat value.
- Do not optimize for event inventory count, impressions, opens or featuring alone.

## Product decisions

### MintTap
Do not plan Google Play Promotional content as a current zero-cost channel. The reviewed current Google guidance explicitly includes investment/stocks/funds/financial utility themes among promotional-content exclusions. Preserve Apple and Google Store-native event strategies as separate platform branches. Re-check only when Google changes policy or Play Console provides authoritative app-specific evidence that changes eligibility.

### LogMate
Keep Promotional content as a conditional post-launch capability only. Before use, verify actual Play Console access/Premium growth eligibility and a genuine qualifying product moment. Do not use ordinary flight logging, recency, import, export or routine pilot activity as artificial events.

### Future niche apps
Before designing any Store-native event campaign, run category/policy eligibility before creative production. Platform capability must be represented as:
`platform feature exists → exact app has tool access → category/proposal is policy-eligible → moment is eligible → destination is truthful → distribution occurs → qualified value occurs`.

## Canonical distinctions
- Apple In-App Events ≠ Google Play Promotional content.
- Feature existence ≠ app access.
- App access ≠ category/content eligibility.
- Eligibility ≠ approval.
- Approval ≠ featuring/distribution.
- Distribution ≠ install/reinstall/open.
- Open ≠ first/restored specialist value.
- Store-native surface ≠ permission to manufacture urgency or routine events.

## Operational consequence
The company-wide Store-event registry must add platform-specific fields for tool-access eligibility, category/policy eligibility, event taxonomy, submission window, review state, featuring request/state, destination, distribution and downstream specialist value. Never maintain a single cross-platform “events available” boolean.

## Next evidence targets
1. Check actual Play Console Promotional content/Premium growth-tool eligibility for LogMate when its production account/listing exists.
2. Re-check MintTap only after a documented Google policy change or explicit app-specific Play Console eligibility signal; do not spend creative effort before then.
3. Preserve Apple In-App Event evidence independently under EO0–EO5.
4. For future niche apps, add promotional-content category screening to launch/growth channel qualification before campaign planning.
