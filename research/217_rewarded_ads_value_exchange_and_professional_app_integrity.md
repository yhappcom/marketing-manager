# Research 217 — Rewarded Ads: Value-Exchange & Professional-App Integrity

Date: 2026-09-23
Status: validated operating addition

## Why this matters
Rewarded inventory can look attractive for an ad-only business because the user explicitly participates in a value exchange. That does not make it automatically suitable for a specialist/professional app. The reward itself can distort the product, create artificial restrictions, or turn an otherwise free core workflow into an ad gate.

## Authoritative findings

### 1. Rewarded ads are explicitly opt-in
Google Mobile Ads documentation defines rewarded ads as ads users choose to interact with in exchange for an in-app reward. Before presentation, the user must be given an explicit choice. This makes ordinary rewarded ads categorically different from rewarded interstitials.

Source: Google for Developers, Rewarded ads (iOS), current documentation: https://developers.google.com/admob/ios/rewarded

### 2. Rewarded interstitial is not ordinary rewarded inventory
Google defines rewarded interstitials as incentivized ads that can appear automatically at natural app transitions; unlike ordinary rewarded ads, users need not opt in to the ad itself. However, Google requires an intro screen before display that clearly communicates the reward and provides a skip option.

Sources:
- https://developers.google.com/admob/android/next-gen/rewarded-interstitial
- https://developers.google.com/admob/android/rewarded-interstitial

Operational consequence: never collapse `rewarded` and `rewarded interstitial` into one format class. Their user-intent and interruption semantics differ.

### 3. Rewards have policy constraints
Google's AdMob reward policy prohibits direct monetary items such as cash, cryptocurrency, and gift cards. Permitted indirect/non-monetary rewards must be redeemable within the publisher's platform/site/app and non-transferable. Additional constraints apply to physical-item discounts/vouchers.

Source: Google AdMob Help, Policies for ad units that offer rewards: https://support.google.com/admob/answer/7313578

### 4. Reward verification is a separate integrity problem
Google supports server-side verification (SSV) callbacks for rewarded and rewarded-interstitial implementations. Where a reward has meaningful entitlement value, client-side callback receipt alone should not be treated as equivalent to verified entitlement fulfillment. Reward issuance, duplicate protection, failure recovery and reconciliation need explicit evidence.

Sources:
- https://developers.google.com/admob/ios/rewarded
- https://developers.google.com/admob/android/next-gen/rewarded-interstitial

## EC0–EC5 Rewarded Value-Exchange Integrity Gate

### EC0 — Format identity
Record ordinary rewarded versus rewarded interstitial, platform, SDK/version, ad unit, exact surface and trigger. Do not infer behavior from a generic `rewarded` label.

### EC1 — Reward legitimacy
Record the exact reward, its product purpose, duration/quantity, transferability, monetary character and policy eligibility. A reward must not exist merely to manufacture demand for an ad.

### EC2 — Choice / skip integrity
For ordinary rewarded, require explicit opt-in before presentation. For rewarded interstitial, require a clear pre-ad reward explanation and skip path, and only use a genuine natural transition. Record opt-in/skip/decline behavior separately from ad availability.

### EC3 — Core-utility non-hostage rule
A specialist app's promised core utility must not be intentionally degraded, delayed or artificially rationed to create a rewarded-ad opportunity. Do not convert an existing unrestricted core workflow into `watch an ad to continue`, restore normal operation, access owned data, complete a safety/reliability-sensitive task, or remove an artificial delay.

A rewarded opportunity is eligible only when the optional benefit is genuinely incremental and the app remains coherent and useful when the user declines it.

### EC4 — Entitlement integrity
Map `offer shown → user accepts/declines → ad available → show → impression → reward callback → SSV state where applicable → entitlement granted → duplicate/failure/recovery state`. Never equate an impression with successful reward delivery. Never make reward delivery depend on an unobserved assumption about callback ordering across mediated networks.

### EC5 — Sustainable-value decision
Evaluate incremental reconciled revenue together with reward uptake, decline/skip rate, reward-delivery failures, task completion, abandonment, repeat specialist value, complaints/reviews, retention and invalid-activity signals. Approve only if optional value exchange improves sustainable economics without corrupting the underlying specialist product.

## Canonical semantic separations
- `rewarded ≠ rewarded interstitial`
- `ad available ≠ user consent`
- `reward offer ≠ reward earned`
- `impression ≠ entitlement delivered`
- `client callback ≠ server-verified entitlement`
- `policy-eligible reward ≠ product-appropriate reward`
- `high opt-in rate ≠ healthy product design`
- `incremental ad revenue ≠ sustainable LTV improvement`

## MintTap application
MintTap should not invent friction in portfolio tracking, distributions, ROC/tax-adjustment understanding, data access or other promised specialist workflows to create rewarded inventory. Examples such as `watch an ad to reveal your portfolio result`, `watch to continue normal tracking`, or restoring an intentionally withheld core function fail EC3 even if technically implementable.

If production already contains rewarded inventory, audit it before redesign: exact format, reward, trigger, optionality/skip behavior, entitlement path, SSV/reconciliation, task effect and revenue. If none exists, absence is not a monetization defect. A future rewarded feature needs a genuinely incremental, non-essential benefit and must pass DZ + EA + EC before experimentation.

## LogMate application
For a professional pilot logbook, rewarded ads should not gate flight entry, logbook viewing, import/validation, export of owned records, sync/recovery, certificate/document access, totals, or other reliability-critical workflows. The existing ad-free Home principle remains intact. Rewarded inventory is not a loophole for monetizing access to Home or core records.

Launch default: no rewarded format unless a later optional, non-critical incremental service is identified and passes EC0–EC5. Do not copy MintTap reward economics to LogMate.

## Reusable operating registry
For any future niche app, maintain:
`app | build | platform | format | ad unit | surface | trigger | reward | reward policy class | core/incremental classification | opt-in/intro/skip state | request/load/show/impression | reward callback | SSV | entitlement result | failure/duplicate recovery | ILRD/reconciled revenue | task outcome | repeat value | complaints | decision`

## Next evidence target
Apply EC only after actual MintTap production ad inventory is known. Determine whether ordinary rewarded or rewarded-interstitial units exist. If they do, reconstruct the full offer-to-entitlement chain and test EC3 before considering revenue optimization. Unknown inventory remains unknown; do not recommend adding rewarded ads solely because the format exists.