# 063 — Localization and Currency Activation Claim Ceiling

Date: 2026-09-17
Status: Framework verified; KRW end-to-end behavior still requires user testing.

## Purpose
058 established that MintTap Import changes when the account default currency is non-USD: exchangeRate becomes required. 060–062 established that discoverability, parsing, saving and post-save value handoff are separate activation boundaries. The next question is whether a localized/non-USD user can complete the same value journey without hidden semantic burden.

## Verified MintTap baseline
- Import fields include date, ticker, type, quantity, price, exchangeRate, memo and isDividendReinvestment.
- USD-default users may omit exchange rate; non-USD users must supply a positive exchange rate.
- The generated Korean template localizes headers and transaction values.
- Template/parser capability does not prove comprehension or end-to-end activation.

USD and KRW are therefore different activation workloads, not merely display variants.

## Localization Activation Parity
A localized route earns parity only when five layers survive:
1. Discovery parity: the route is comparably findable.
2. Schema parity: required inputs are explicit and consistent.
3. Semantic parity: domain terms communicate the same financial meaning.
4. Workload parity: locale/currency requirements do not create an unacknowledged preparation burden.
5. Value parity: the user reaches and understands the same personalized result boundary.

A translated template establishes only partial schema/semantic evidence.

## Claim ceiling
Marketing claims stop at the strongest boundary actually verified.
- localized strings/template exists -> localized template/interface is available.
- parser accepts a valid localized/non-USD file -> localized/non-USD import is technically supported.
- fresh users independently prepare/import/save -> workflow usability evidence for the tested task.
- fresh users reach and understand the personalized result -> end-to-end activation evidence for the tested context.
- repeated evidence across intended locale/currency combinations -> broader ease claims may be considered.

Do not turn technical support into an easy-import claim.

## Currency workload rule
Required-field asymmetry is activation work even when the UI is translated. For KRW, users may need to understand the expected exchange-rate meaning, obtain a value, associate it with transactions and enter the correct unit. A fixture with pre-filled synthetic rates removes this work and cannot establish preparation ease.

Separate two tests:
- K1 Prepared-file execution: participant receives a schema-valid localized file with synthetic rates. Measures execution/review/save/value handoff, not rate preparation.
- K2 End-to-end preparation: participant receives normalized transaction facts and uses product instructions/template to prepare the import. Measures the additional currency workload.

Never compare K1 timing with a USD end-to-end task as if both boundaries were equal.

## KRW semantic-risk ledger
Observe comprehension of:
- unit-price USD versus account/reporting currency;
- exchange-rate direction/unit semantics;
- whether a rate is expected per transaction/date;
- buy/sell terminology;
- dividend-reinvestment terminology;
- validation language for missing/invalid rate;
- whether post-import Home values make currency transformation understandable.

Do not classify a translation as correct merely because it sounds natural. Financial meaning and input units require product-semantic and target-user validation.

## Store/community consequence
Store localization is an acquisition surface, not proof that the localized product journey works. Korean Store/community messaging should not claim end-to-end import ease solely because Korean templates and parser support exist. Until K2 and result-comprehension evidence exist, keep claims at factual capability level.

## New operating principles
- Translation Is Not Activation Parity.
- Required-Field Asymmetry Is Product Friction.
- Prepared Fixtures Cannot Prove Preparation Ease.
- Claim Ceiling Follows the Weakest Unverified Boundary.

## Next
1. Build a prepared KRW fixture with synthetic rates and label its boundary explicitly.
2. Extend the observation sheet with currency-semantic incidents and K1/K2 boundary markers.
3. Verify first-party UI/help wording for exchange-rate direction/unit.
4. Run K1/K2 with Korean target users when available; do not manufacture percentages from sparse samples.
5. Only then decide whether Korean Store/community Import language can move above technical-support wording.