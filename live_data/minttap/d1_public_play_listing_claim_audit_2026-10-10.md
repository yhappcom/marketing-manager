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


## 2026-10-24 D1 declaration-choice recommendation and promotional-surface decision

**PROJECT DECISION / RECOMMENDATION READY (not a Console submission or policy approval):** Given the inspected MintTap `1.0.29` manual portfolio and buy/sell recordkeeping workflows, and the existing US Play listing's portfolio/distribution tracking claims, the truthful recommended Financial features declaration is **`Stock trading and portfolio management`**. This is Google's **combined choice**, not a representation that MintTap executes brokerage trades. Do **not** select `My app doesn't provide any financial features` merely because no order execution was observed in the inspected paths. Whether other choices such as `Financial advice` apply is **NOT ESTABLISHED** by the inspected evidence and requires a whole-feature/claim check. The actual live Play Console selection and review status remain **UNKNOWN / D1 HOLD**.

**Separate growth-surface decision:** Under the Google Play Promotional content quality guidelines, investment tools, investment management, stocks, funds, shares and financial utility services are currently among restricted finance themes/terms. For MintTap's current investor/ETF proposition, **do not submit investment-themed Promotional content** or euphemize finance features to seek featuring. This is a **NO-GO for that optional growth tactic under the presently observed rules**, not a ban on ordinary Play listing/distribution, and not an account-side eligibility determination. Revisit only after a relevant authoritative rule change or a genuinely different non-restricted content proposition independently clears review.

**Evidence:** Product source `yhappcom/yieldmax_tracker@1.0.29` `lib/edit_transaction/edit_transaction_repository.dart`, `lib/transaction_import/transaction_import_firestore_payload.dart` and `lib/screens/transaction_import_review_screen.dart` (previously verified in this file); public US Play listing observation 2026-10-10 (not refreshed 2026-10-24). Official Google primary guidance rechecked 2026-10-24: https://support.google.com/googleplay/android-developer/answer/13849271 and https://support.google.com/googleplay/android-developer/answer/12929944 . No platform rule change established; this is an application of the existing framework to a live decision, not new general research.

**Required operator reconciliation (unchanged):** Redacted Play Console `Policy and programs > App content > Financial features` submitted choices, save/review/status and current Store claim matrix, checked against the shipped Android build; retain screenshots or structured evidence with dates. If actual selection is `no financial features` or materially mismatches the shipped app, **flag correction for operator review**, do not infer an automatic enforcement finding. No Console, Gmail, Firecrawl live page or account-side proof was available in this run. Other D1 claims and D2 monetization remain separately gated.

## 2026-10-25 release-source provenance checkpoint — branch divergence

**SOURCE / GitHub commit comparison (read-only):** Comparing `yhappcom/yieldmax_tracker` `main...1.0.29` via GitHub's compare API on 2026-10-25 returned **188 commits ahead, 0 behind** for tag `1.0.29` relative to product `main`; product `main` resolves to `d88f5855dbe5be91c979b58f3670487e3691f479`. The earlier audited `1.0.29` source commit is `736bbc99a41c14130d82aeaa17ac81f0fc835a65`. This establishes that product `main` is **not an interchangeable proxy for the audited release-tag source**. A `main`-only feature check could falsely classify release-tag functionality as absent. It does **not** independently prove the binary currently served on Google Play was built from that tag, or that the Play Console declaration matches either ref.

**PROJECT DECISION / provenance subgate verified, D1 HOLD unchanged:** Keep financial-feature and Store-claim auditing pinned to the actual distributed artifact/version and its independently verified source commit; do not silently substitute product `main`. Required operator evidence remains (1) redacted actual Financial features submitted selection/status, (2) Play release versionCode/versionName and artifact/build-to-commit provenance, and (3) version-matched current Store copy/feature tests. No code, Play Console or live account changes; no claim of compliance, policy violation, or newly closed overall decision.
