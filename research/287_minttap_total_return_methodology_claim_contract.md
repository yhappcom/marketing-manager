# Research 287 — MintTap Total-Return Methodology & Marketing Claim Contract

Validated: 2026-09-28

## Decision
MintTap must not collapse distribution rate, cash distributions, ROC, market-value change, cost basis, gross total return, after-tax return, and recovery metrics into one ambiguous “yield/return” number.

## GN0–GN8
measurement identity → split-consistent normalization → external cash-flow ledger → distribution ledger → reinvestment ledger → market-value leg → tax/ROC layer → explicit method label → marketing claim gate

## Operating rules
- A distribution rate is not total return.
- DRIP is two linked events: a distribution and a reinvestment purchase. Never double-count the distribution as both income and newly created value.
- A split/reverse split changes units, not economic value at the split instant; historical share/price series must be normalized consistently.
- Tax adjustments alter the after-tax view; they must not silently rewrite the underlying gross economic event.
- Interim ROC estimates must retain provenance/state and must not silently overwrite historical economic-return records.
- Marketing must not equate high distribution rate with high total return, ROC with profit, or an estimated distribution with guaranteed income.

## Owned-reference implication
A durable methodology page explaining why distribution rate, cash received, ROC, NAV/price movement and total return differ is higher-value than generic high-yield content because it demonstrates the product's calculation contract and can be cited from community answers without requiring installation.

## Evidence boundary
YieldMax's own fund disclosures distinguish distribution rate from total return and warn that distributions can include return of capital. Calculation and tax claims must retain source/status/date provenance and jurisdiction boundaries.

## Reuse
The same method-label/claim-gate pattern applies to future finance apps: name the metric, disclose the calculation boundary, separate estimated/final evidence, and prevent acquisition copy from promising more than the calculation supports.
