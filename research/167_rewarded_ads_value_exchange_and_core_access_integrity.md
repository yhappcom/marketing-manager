# Research 167 — Rewarded Ads Value Exchange and Core-Access Integrity

Date: 2026-09-21
Status: validated operating addition

## Why this matters

Rewarded inventory is materially different from ordinary interstitial inventory. It can monetize explicit user choice rather than interrupting a task, but only if the reward is legitimate, the choice is real, and normal product use is not degraded to manufacture demand for the ad. For a zero-cost, ad-supported niche-app business, this distinction is central: rewarded inventory can be a lower-intrusion monetization option, but it is not permission to put core utility behind an ad wall.

## Authoritative findings

### 1. Rewarded ads require an explicit value exchange
Google AdMob defines rewarded ads as ads that provide in-app rewards for user interaction. For ordinary rewarded ads, the user must affirmatively and unambiguously opt in before each rewarded ad. The action required and reward offered must be clearly, accurately and conspicuously disclosed before presentation. Skipping/dismissing the ad must remain possible, and declining must not interfere with normal use.

Source: Google AdMob, “Policies for ad units that offer rewards,” current page retrieved 2026-09-21: https://support.google.com/admob/answer/7313578

### 2. The reward has hard policy boundaries
Direct monetary items—including cash, cryptocurrency and gift cards—cannot be offered as rewards. Permitted indirect/non-monetary rewards must be redeemable within the publisher’s platform/site/app and non-transferable. Random rewards are possible only with prior probability/outcome disclosure and a greater-than-zero chance of receiving a reward.

This is especially relevant to MintTap: investment/portfolio context must never cause an ad reward to resemble investment return, cash yield, securities value, cryptocurrency, or transferable financial benefit.

Source: same AdMob reward-policy page.

### 3. Rewarded interstitial is not equivalent to rewarded opt-in
Google distinguishes rewarded interstitial from ordinary rewarded ads. Rewarded interstitial can appear automatically at a natural app transition, but it requires an introductory screen that announces the reward and provides a functioning opt-out before the ad. Ordinary rewarded ads require affirmative opt-in.

Sources:
- Google Mobile Ads SDK, rewarded interstitial documentation: https://developers.google.com/admob/android/next-gen/rewarded-interstitial
- Google AdMob reward-policy page above.

### 4. Reward callback and dismissal ordering is not universally stable
For Google-served rewarded ads, the Android SDK documents that `onUserEarnedReward` is called before dismissal; under AdMob Mediation, a third-party ad source determines callback ordering. Therefore product logic must not infer reward eligibility merely from dismissal, impression, or a fixed cross-network callback sequence.

Source: Google Mobile Ads SDK, rewarded ads: https://developers.google.com/admob/android/rewarded

### 5. Google Play policy reinforces the distinction between unexpected interruption and explicit opt-in
Google Play’s ads policy prohibits unexpected full-screen interstitials in common interruption states and explicitly distinguishes rewarded ads that users opt into. This policy exception must not be misread as a growth recommendation: policy eligibility is not evidence that a rewarded placement improves retention, trust, or lifetime revenue.

Source: Google Play Developer Program, Ads policy: https://support.google.com/googleplay/android-developer/answer/9857753

## CE0–CE5 Rewarded Value-Exchange Integrity Gate

### CE0 — Core-access boundary
Define the product capability that remains available without viewing an ad. Existing core utility, saved user data, safety/accuracy functions, corrections, support, privacy controls and essential workflow continuation must not be degraded merely to create rewarded-ad demand.

### CE1 — Reward legitimacy
Document exact reward, eligibility, duration, redemption scope, transferability and whether the reward can be interpreted as money or real-world financial value. Reject direct monetary rewards and ambiguous financial-value framing.

### CE2 — Choice/disclosure integrity
For ordinary rewarded ads, require affirmative per-instance opt-in and clear action/reward disclosure. For rewarded interstitial, require a natural transition plus a clear pre-ad intro/opt-out. Declining must preserve normal use.

### CE3 — Event/reward integrity
Keep separate events for offer shown, opt-in/accept, ad loaded, ad shown, impression, paid event, user-earned-reward callback, dismissal/failure, reward grant, reward redemption and expiration. Never equate dismissal or impression with earned reward. Design for mediation callback-order variation and idempotent reward granting.

### CE4 — Revenue reconciliation
Join rewarded impressions/ILRD with CB precision/currency evidence and aggregate AdMob revenue. Separate requested/accepted ads from actual impressions, earned rewards and reconciled revenue.

### CE5 — Sustainable-value decision
Retain a rewarded placement only when incremental reconciled revenue is accompanied by preserved core-task completion, repeat useful value, trust and retention. Measure offer acceptance and reward redemption as diagnostics, not as the objective function. Reject designs that increase rewarded views by making the free experience artificially worse.

Canonical chain:
`eligible optional enhancement → truthful reward offer → explicit choice/valid opt-out → actual ad exposure → earned-reward callback → idempotent grant → redemption/use → reconciled revenue → preserved repeated core value`

Preserve these inequalities:
- `reward offer ≠ opt-in`
- `opt-in ≠ impression`
- `impression ≠ earned reward`
- `dismissal ≠ earned reward`
- `earned callback ≠ reward successfully granted`
- `reward granted ≠ reward redeemed`
- `rewarded revenue ≠ sustainable incremental value`
- `policy-eligible ≠ product-appropriate`

## MintTap operating decision

Do not introduce rewarded ads merely because they can be less interruptive than interstitials. First complete CB/CC/CD production observability. If rewarded inventory is later tested, the reward must be an optional, non-financial, non-transferable enhancement that does not alter portfolio/investment truth or withhold existing core tracking utility. Never frame a reward as yield, dividend, return, cash, investment credit, cryptocurrency, or anything plausibly confused with portfolio value.

Home remains ad-free under the current product decision. Transaction, tax-adjustment, portfolio-editing and other accuracy-sensitive states remain ineligible. A possible future rewarded candidate must be identified from a genuinely optional secondary capability, not created by degrading the base product.

## LogMate operating decision

Do not place rewarded ads inside flight entry, import, correction, error recovery, totals integrity, or any workflow whose interruption or gating could impair logbook accuracy. A future reward may only enhance an optional secondary capability while normal logbook use remains intact. Release instrumentation must model reward callback/grant idempotency before production use.

## Reusable niche-app rule

For future ad-supported professional apps, rewarded inventory is a voluntary exchange layer, not a substitute for a usable free product. The strongest candidate is an optional enhancement with clear marginal value, low safety/accuracy consequence, low manipulation risk, and observable downstream use. If no such reward exists naturally, do not invent one solely to create ad inventory.

## Next evidence target

Audit MintTap source/AdMob configuration for any RewardedAd or RewardedInterstitialAd units and code paths. If none exist, record “not implemented” rather than creating a treatment. If present, capture placement, exact reward, offer copy, opt-in/opt-out behavior, callback/grant logic, mediation behavior, ILRD joinability, and whether declining preserves normal use.