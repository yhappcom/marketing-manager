# 054 — MintTap 1.0.29 Home Ad Value-Block Mapping

Date: 2026-09-16
Status: CODE-VERIFIED at release ref `736bbc99a41c14130d82aeaa17ac81f0fc835a65`; runtime revenue/behavior impact remains UNKNOWN.

## Question
Where does the released MintTap Home ad actually sit relative to the user's value block, and what should be changed or measured before increasing ad pressure?

## Code evidence

### 1. Home uses an inline adaptive banner, not an interstitial/app-open unit
`lib/widgets/home_inline_ad_slot_mobile.dart` constructs a `BannerAd` using `AdSize.getCurrentOrientationInlineAdaptiveBannerAdSize`, waits 350 ms after the widget is mounted, prepares privacy/consent, and collapses to zero height until an ad is loaded.

Implication: current Home monetization is non-modal, but non-modal does not automatically mean non-disruptive.

### 2. The ad is inserted between the summary block and Positions
`lib/screens/home_screen.dart` renders:

`SummaryHeaderCard → HomeInlineAdSlot → PositionsCard → YTD Estimated ROC`

The summary block contains portfolio-level interpretation; Positions is the next layer needed to attribute that result to holdings. Therefore the ad currently splits a plausible comprehension chain:

`portfolio result → holding-level explanation`

This is a **value-block integrity risk**, not a proven retention harm. Runtime behavior is not yet measured.

### 3. Returning from detail recreates the Home ad slot
`_handleReturnFromDetail()` scrolls Home to the top and increments `_homeAdRefreshToken`; the slot is keyed with that token. That destroys/recreates the ad widget after detail return and initiates a new delayed load subject to consent.

This means a user who drills into a holding and returns to Home can encounter a newly instantiated banner in the same summary→positions corridor. The actual request/impression frequency is UNKNOWN until runtime telemetry is available.

### 4. Browse/demo mode suppresses the Home inline ad
The slot is rendered only when `!isBrowseMode`. Demo therefore provides a cleaner proof experience than the real signed-in Home. This creates a small but meaningful Promise-to-Value continuity issue: monetization pressure begins precisely when personal data becomes available.

## Platform evidence
Google AdMob guidance warns against banners adjacent to interactive elements and against banners sandwiched between app content/navigation because accidental clicks and poor experience can result. Interstitial guidance separately reinforces the broader principle that monetization should occur at logical breaks rather than while a user is focused on a task. These policies do not prove the current Home banner is non-compliant; they establish why placement must be evaluated by interaction context rather than format name alone.

Sources checked 2026-09-16:
- Google AdMob Help — Discouraged banner implementations: https://support.google.com/admob/answer/6275345
- Google AdMob Help — Disallowed interstitial implementations: https://support.google.com/admob/answer/6201362
- Google for Developers — App open ads: https://developers.google.com/admob/android/next-gen/app-open

## Registry classification

| Surface | Unit | Current boundary | Classification | Reason |
|---|---|---|---|---|
| Home signed-in | inline adaptive banner | Summary → Positions | `TEST_LATER / RELOCATE_CANDIDATE` | splits likely comprehension chain; harm not yet measured |
| Home browse/demo | none | n/a | `PROTECT` | proof/activation preview should remain ad-free |
| Detail return → Home | recreated inline banner | return to summary | `MEASURE_BEFORE_REFRESH` | code creates new slot; actual request/impression frequency unknown |
| First personal value session | same Home slot | personal result corridor | `PROTECT_CANDIDATE` | owner-observed activation warning makes early monetization pressure strategically low priority |

## Decision
Do not add interstitial/app-open pressure to compensate for weak revenue while activation is unresolved. For Tranche 1, the low-risk product hypothesis is to move the Home inline banner **after a complete interpretation block**, ideally after Positions or another validated boundary, while keeping Demo ad-free.

This is not yet an instruction to delete Home monetization. It is a placement experiment with guardrails.

## Required measurement before monetization optimization
Minimum aggregate telemetry should distinguish:
1. first personal value reached;
2. Home value block completed / meaningful detail viewed;
3. ad request / impression by placement ID;
4. detail return;
5. useful return on a later session;
6. aggregate ad revenue by placement where privacy-safe and available.

Do not optimize CTR. Accidental clicks can make CTR directionally misleading. Primary business outcome is sustainable revenue per retained/returning specialist user.

## Reusable rule
**Monetization Boundary Must Follow Comprehension Boundary.**

A non-modal banner may still be badly placed if it interrupts the sequence required to understand the product's result. Format intrusiveness and workflow intrusiveness are separate dimensions.
