# MintTap D1 — public US Google Play claim and declaration boundary (2026-10-10)

## Production decision
PUBLIC LISTING VERIFIED / PRIVATE FINANCIAL FEATURES DECLARATION UNKNOWN / HOLD. Public metadata cannot establish the submitted Play Console Financial features choices. Ordinary Store distribution and optional Promotional content eligibility are distinct.

## Direct public observation
Source: https://play.google.com/store/apps/details?id=app.yh.yieldmax_tracker_v0 (US English locale displayed, accessed 2026-10-10).
- App title MintTap; Finance category; Contains ads; updated 2026-09-08; publicly displayed install band 50+.
- Description positions the product as YieldMax ETF portfolio/transaction records and payout/date tracking. Explicit claims include gross/net distribution and payback views, 42 currencies, supported-screen FX options, ROC and reverse-split history, multilingual support, and optional account-based sync.
- The description does not advertise brokerage trade execution. This is a public claim observation, not proof of every implementation or absence of an unadvertised feature.
- Public Data safety says the developer reports no third-party data sharing and possible collection of personal information, app activity and device IDs. This is developer-declared metadata, not an independent privacy audit.
- The public page does not display the developer's submitted Financial features declaration or account-side policy status.

## Official platform boundary (rechecked 2026-10-10)
- https://support.google.com/googleplay/android-developer/answer/13849271 — all published apps must submit a Financial features declaration, even when declaring no financial features. The current combined choice includes "Stock trading and portfolio management"; this label alone does not prove order execution.
- https://support.google.com/googleplay/android-developer/answer/12929944 — optional Promotional content restricts investment/financial products, tools and terms. Do not euphemize the app's actual function to gain eligibility.

## Required operator evidence before D1 closure
1. Redacted Play Console App content > Financial features submitted choices and current review/status.
2. Version-matched shipped-feature matrix for portfolio tracking, trade recording vs execution, broker connectivity, tax/ROC calculations, and account sync.
3. Exact current Store text/screenshots and dependent Claim Registry entries; correct any materially unsupported statement without misrepresenting financial functionality.
4. Separate verdict for ordinary distribution and optional Promotional content. Do not treat 50+ public installs, category or policy silence as compliance proof.

No Console access, policy approval, growth-surface eligibility or new research is claimed by this audit.

## Release 1.0.29 transaction and portfolio source cross-check (2026-10-14)

Read-only inspected product ref `yhappcom/yieldmax_tracker@1.0.29`:
- `lib/edit_transaction/edit_transaction_repository.dart:115-139,142-158`: portfolio creation and manual buy/sell transaction changes write to `users/{uid}/portfolios` and `users/{uid}/transactions` in Firestore.
- `lib/transaction_import/transaction_import_firestore_payload.dart:5-36` and `lib/screens/transaction_import_review_screen.dart:948-1064`: reviewed CSV/XLSX-derived buy/sell rows are written as user transaction records, with import-batch/source metadata; the inspected save path is not a brokerage order API.
- `lib/auth/auth_service.dart:35-69` uses Firebase Auth providers; this is account sign-in, not brokerage authentication.
- `lib/calculation/engine/split_processor.dart` contains split accounting logic; `lib/screens/yearly_roc_screen.dart:92-108,322-330` exposes a year-level `ICI FINAL` selection with partial coverage caveat already in STATUS.

**Subgate verdict:** `RELEASE-SOURCE RECORDKEEPING FLOWS VERIFIED / TRADE EXECUTION NOT OBSERVED IN INSPECTED FLOWS`. Do not generalize absence to the entire shipped binary or infer actual Play Console Financial features selections. The Google Play combined category `Stock trading and portfolio management` must be evaluated against portfolio management, not interpreted as proof of trade execution. Next: check all relevant network/API integrations, the 42-currency and cloud-sync Store claims, and the actual submitted Console declaration before D1 closure. Ordinary Store distribution and optional Promotional content remain separate decisions.
