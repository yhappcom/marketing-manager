# 058 — MintTap Import Schema → Activation Fixture

Date: 2026-09-17
Status: VERIFIED against MintTap 1.0.29 release reference `736bbc99a41c14130d82aeaa17ac81f0fc835a65`

## Why this matters

The controlled activation work in 052/055/056 required an executable Import-route fixture. Until now the canonical file schema was unresolved, so producing CSV/XLSX examples would have required guessing. This audit closes that gap from first-party code.

## Verified canonical import fields

The release code defines eight canonical fields:

`date, ticker, type, quantity, price, exchangeRate, memo, isDividendReinvestment`

Required fields are `date`, `ticker`, `type`, `quantity`, and `price`. `exchangeRate` becomes required when the user's default currency is not USD. `memo` and `isDividendReinvestment` are optional.

For USD-default users, a blank/missing exchange-rate value is interpreted as `1.0`; for non-USD users, missing or non-positive exchange rate is rejected.

## Verified localized template behavior

MintTap does not merely accept one English header set. The shipped template generator provides localized headers and localized buy/sell and reinvestment values. English uses the canonical header names. Korean uses:

`거래일, 티커, 구분, 수량, 단가(USD), 환율(<default currency>), 메모, 배당재투자`

The generated template includes comment/note rows, a blank row, then the locked header. The parser explicitly ignores ignorable rows before treating the first meaningful row as the header.

This has an activation implication: **Import discoverability and Import comprehensibility are separate gates.** A user may find Import yet still fail if they do not understand required columns, currency-dependent exchange-rate semantics, or accepted transaction-type values.

## Parser-backed validation rules relevant to testing

A valid row requires:

- parseable transaction date;
- supported ticker after ticker-alias normalization;
- recognized buy/sell value;
- quantity > 0;
- price > 0;
- exchange rate > 0 when applicable.

The parser distinguishes valid, rejected/error, and unsupported rows. Therefore activation testing must not score "file selected" or "file parsed" as success. The route is only operationally successful after valid rows survive review/import and produce the personal result boundary defined in 056/057.

## Executable I1 fixture — USD

The first controlled fixture should use English canonical headers and USD default currency to minimize localization/currency confounds:

```csv
date,ticker,type,quantity,price,memo,isDividendReinvestment
2026-06-05,CONY,buy,10,12.00,fixture-I1,false
2026-06-12,TSLY,buy,8,9.50,fixture-I1,false
2026-07-03,CONY,buy,5,11.40,fixture-I1,false
```

This deliberately omits `exchangeRate`; that is valid only for a USD-default test account. It also avoids sell-lot constraints and reinvestment semantics so the first experiment measures route discovery and basic import comprehension rather than edge-case accounting.

## Non-USD variant

For a KRW-default account the fixture must include exchange rate, for example:

```csv
date,ticker,type,quantity,price,exchangeRate,memo,isDividendReinvestment
2026-06-05,CONY,buy,10,12.00,1365.00,fixture-I1-KRW,false
2026-06-12,TSLY,buy,8,9.50,1372.00,fixture-I1-KRW,false
2026-07-03,CONY,buy,5,11.40,1380.00,fixture-I1-KRW,false
```

These are synthetic test values, not historical exchange-rate claims.

## Controlled-test rule

Do not tell a fresh participant which route to use. Give the portfolio records and ask them to get the records into MintTap and stop when they believe the app is showing a useful personal result. Observe:

`route discovery → file/template comprehension → parse/review success → import completion → Home personal-result render → result comprehension`

Manual and Import route fixtures should represent equivalent economic data when conducting a direct time/friction comparison. The current I1 above is now schema-valid, but exact M1↔I1 economic equivalence should be normalized before comparative timing is reported.

## New operating principles

### Schema Before Fixture
Never manufacture activation fixtures from assumed file formats when first-party schema exists.

### Parse Success Is Not Activation
Import parsing is an intermediate technical state, not user value.

### Remove Confounds Before Comparing Routes
The first Manual-vs-Import comparison should avoid sell-lot, reinvestment, unsupported-ticker, and currency complications unless those are the specific research target.

### Currency Is an Activation Variable
A route that is simple for USD users may impose an additional required-field burden on non-USD users. Store/onboarding claims about "easy import" must therefore be validated across the intended currency contexts before broad localization claims are made.

## Product/marketing implication

Import can legitimately be elevated as a peer first-data path only if fresh users can discover it, understand the schema, complete review, and reach semantic first value without disproportionate support. The existence of a robust parser or downloadable template is product capability evidence; it is not evidence of activation performance.

## Next

1. Normalize M1 and I1 to the same economic dataset for route-comparison testing.
2. Verify the actual UI path that exposes template download, file selection, mapping/review and completion in 1.0.29.
3. Audit whether the localized template labels and review UI preserve the same semantics for KRW and other non-USD users.
4. Only after those checks, produce an XLSX fixture if XLSX-specific behavior needs separate validation; do not assume CSV success proves XLSX UX success.