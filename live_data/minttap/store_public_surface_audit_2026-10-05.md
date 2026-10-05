# MintTap Public Store Surface Audit — 2026-10-05

## Scope
Publicly observable App Store evidence only. This is not a substitute for App Store Connect, Play Console, CPP/CSL inventories, App Tags management, acquisition reports, or production analytics.

## Observed Apple surfaces

### United States
Public product page: https://apps.apple.com/us/app/minttap/id6766008739

Observed:
- App name: MintTap
- Primary category shown publicly: Finance
- iPhone-only positioning
- Free
- Current public description explicitly positions MintTap as a YieldMax ETF tracker.
- Public claims include portfolio/transaction tracking, payout history/calendar, ex-dividend/payment dates, tax settings/history, gross/net distribution and payback views, 42-currency support, dividend FX options, ROC and reverse-split history, multilingual support, and optional account-based sync.
- The public page says there are not enough ratings/reviews to display an overview.
- Advertising is disclosed on the Store surface.
- No App Tags were observable in the retrieved public-page representation. **This is NOT evidence that App Store Connect has assigned no tags.** Research 436 requires direct App Store Connect observation before recording an observed-tag state.

### Korea
Public product page: https://apps.apple.com/kr/app/minttap/id6766008739

Observed:
- Finance category.
- Three ratings with a displayed 5.0 aggregate at audit time.
- One visible review praises merger/split handling (Korean: “병합 반영이 완전 제대로 되네요”).
- Accessibility section says the developer has not yet indicated supported accessibility features.
- Advertising is disclosed.
- Current version history includes CSV/Excel transaction import, Final ROC tax-adjustment tracking, portfolio-value/return display changes, and other workflow changes.

## Production-decision consequences

### D5 — Store semantic routing
State advances from entirely unverified public surface to **PUBLIC DEFAULT-PAGE OBSERVED / APP-CONNECT ROUTING EVIDENCE STILL REQUIRED**.

The default Store promise is already narrow and specialist: YieldMax tracking, distributions, ROC, reverse splits, tax/history and portfolio workflows. Do not create ticker-specific CPP/CSL clones merely because the description names YieldMax. Distinct routes still require distinct observed intent and production evidence.

Public web retrieval cannot establish:
- actual US App Tags in App Store Connect;
- CPP inventory;
- CPP keywords/deep links;
- Google CSL inventory/search-keyword routes;
- eligible Store traffic or experiment power.

### D2 — Public monetization/privacy declaration evidence
State advances to **PUBLIC ADVERTISING DECLARATION OBSERVED / PRODUCTION AD STACK STILL UNVERIFIED**.

The public App Store privacy surface currently discloses advertising and says identifiers and usage data may be used to track users across other companies' apps/websites. It also lists advertising data under third-party advertising/analytics purposes. Treat these as developer-declared Store/privacy states, not proof of the actual ad SDK, consent path, request volume, placements, ILAR precision, mediation, traffic quality, or revenue reconciliation in production.

Operational consequence: D2 no longer has zero public evidence, but it remains blocked for monetization optimization until production ad/consent instrumentation is inspected. Do not infer ATT/UMP behavior, AdMob configuration, or ad-pressure safety from the Store privacy declaration alone.

### D6 — Ratings/reviews and specialist evidence
The Korean Store provides one small but concrete product-value signal: a visible review specifically values merger/split handling. Treat this as qualitative specialist evidence, not representative satisfaction or causal acquisition evidence. The US Store does not yet expose a ratings/reviews overview in the retrieved public page.

Do not pool country ratings as if they were one market or infer retention from ratings.

### Claim-registry implication
The public description currently carries material claims around ROC, reverse splits, gross/net views, payback, FX/currency support, import/history and sync. These claims should be linked to shipped-product evidence and invalidation triggers in the Claim Registry. Version-history evidence supports several of them, but a public Store page alone does not verify every workflow end-to-end.

### Accessibility
The Korean public Store page currently reports no developer-declared accessibility features. This is an observed Store-claim state, not evidence that the app is inaccessible. Any future accessibility label must follow verified common-workflow support under Research 413.

## Next evidence
1. Direct App Store Connect observation of US App Tags and CPP inventory.
2. Google Play Console CSL/search-keyword inventory.
3. Production ad/consent evidence to reconcile the public advertising/privacy declaration with actual D2 implementation.
4. Store acquisition/referrer and first/repeated-value evidence.
5. Claim Registry sweep for the current public description.
6. Accessibility verification before declaring labels.

## Sources
- Apple App Store, US MintTap product page, retrieved 2026-10-05: https://apps.apple.com/us/app/minttap/id6766008739
- Apple App Store, Korea MintTap product page, retrieved 2026-10-05: https://apps.apple.com/kr/app/minttap/id6766008739
- Research 413 — Accessibility Labels Are Verified Store Claims.
- Research 423 — Sparse-Niche Store Experiment Admission Control.
- Research 436 — App Tags Turn Metadata Into a Derived Discovery Surface.
