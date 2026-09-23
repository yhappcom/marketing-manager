# Research 213 — Apple Promotional Text Message-Freshness Integrity

Validated: 2026-09-23

## Why this matters
For a zero-cost niche-app business, App Store promotional text is a rare owned Store surface that can be changed without shipping a new app version. That makes it useful for truthful message freshness, but dangerous if treated as an ASO keyword field or as a substitute for product evidence.

## Authoritative platform facts
Apple currently allows up to 170 characters of promotional text. It appears above the description and can be updated at any time without submitting a new app version. Apple explicitly positions it for current app features, news, limited-time sales, or upcoming features. Apple also states that promotional text does **not** affect App Store search ranking and should not be used to display keywords. The main description is different: its first sentence is especially visible, and description changes are tied to submitting a new app version.

Custom Product Pages can also carry different promotional text, but CPPs have their own review/routing/search/deep-link lifecycle and remain governed by Research 204. Do not confuse default-page promotional-text freshness with CPP segmentation.

## DY0–DY5 Promotional-Text Message-Freshness Integrity Gate

### DY0 — Surface identity
Record whether the text is default product-page promotional text or CPP promotional text, plus territory/localization and effective date. Do not mix it with subtitle, description, keywords, What's New, In-App Events, or Promotional Content.

### DY1 — Shipped-state integrity
Every present-tense capability claim must be true in the currently distributed app for the addressed users. Upcoming-feature wording must clearly remain future-facing. Do not use promotional text to imply that an unshipped workflow already exists.

### DY2 — Search-semantics integrity
Do not insert keywords for ranking purposes. Apple states promotional text does not affect search ranking. Keyword strategy remains a separate metadata/search-intent problem.

### DY3 — Freshness and expiry integrity
Every time-sensitive message needs an owner, effective date, expiry/review trigger, and replacement/default state. Stale promotional text is a Store promise defect even when technically editable without a release.

### DY4 — Cross-surface continuity
The message must agree with screenshots, description, current binary, support/owned-web statements, and the actual destination/workflow. A fresh headline attached to stale or contradictory evidence is not a valid update.

### DY5 — Qualified-value decision
Judge a change using downstream qualified behavior where evidence exists, not merely Store conversion. Sparse niche traffic may make causal inference impossible; in that case record the change and preserve uncertainty rather than claiming uplift.

## MintTap operating rule
Use default promotional text only when there is a materially useful, current message for YieldMax users—for example a genuinely shipped workflow improvement or other time-relevant product fact. Do not rotate ticker names, distribution headlines, or high-volume finance keywords merely to make the listing look active. Any distribution/ROC/tax-related claim must remain current and product-supported; time-sensitive financial wording receives an explicit expiry/revalidation trigger.

A proposed message packet should preserve:
`surface | locale | exact copy | claim class | shipped evidence | effective date | expiry/review trigger | linked Store/web evidence | downstream observation | decision`.

## LogMate operating rule
Pre-launch, promotional text is not a substitute for release readiness. Post-launch it may communicate a genuinely shipped pilot-workflow improvement without waiting for another metadata-bearing release, but it must not overstate import coverage, offline/PWA behavior, regulatory suitability, or workflow support. Preserve the product decision that Home remains ad-free; Store copy should not imply a monetization tradeoff that does not exist.

## Reusable company rule
Treat editable Store copy as a controlled message layer, not a free-form growth lever:

`current product truth → current specialist relevance → localized concise message → expiry/revalidation → cross-surface continuity → qualified downstream evidence`.

Preserve these inequalities:
- `editable anytime ≠ safe to change casually`
- `promotional text ≠ keyword field`
- `message freshness ≠ product freshness`
- `Store conversion change ≠ qualified growth`
- `upcoming claim ≠ shipped capability`

## Production evidence needed
For MintTap capture the current default promotional text by localization, last-change date if recoverable, current binary/product support for each claim, screenshots/description continuity, and any associated Store/downstream observations. Do not recommend a rewrite until this evidence exists.

## Sources
- Apple Developer, “Creating Your Product Page” — promotional text placement, 170-character limit, editability without a new version, non-ranking status, description guidance: https://developer.apple.com/app-store/product-page/
- App Store Connect Help, “Platform version information” — promotional text purpose and version metadata context: https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information
- Apple Developer, “Custom Product Pages” — CPP-specific promotional text and separate lifecycle: https://developer.apple.com/app-store/custom-product-pages/
