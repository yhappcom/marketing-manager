# Research 286 — MintTap ROC Authority and Provenance Layer

Date: 2026-09-28
Status: validated
Scope: MintTap / YieldMax community evidence / owned-reference readiness

## New finding

MintTap must model ROC as a **stateful claim with provenance**, not as one timeless percentage.

YieldMax's current ROC Center states that final tax treatment is determined after year-end and reported on the investor's Form 1099-DIV, and tells investors to rely on final tax documents rather than interim estimates when filing taxes. YieldMax's fund pages separately warn that displayed ROC figures are estimates that may later be characterized as taxable net investment income, short-term gains, long-term gains, or return of capital. Rule 19a-1 notices likewise describe their source breakdown as estimated.

YieldMax also publishes historical ICI Primary Tax Data (2023, 2024, 2025) and Form 8937 materials in its Tax Documents area. These are distinct artifacts with different purposes and must not be collapsed into the same semantic field.

## Provenance contract — GM0–GM8

GM0 claim identity → GM1 issuer/source identity → GM2 distribution identity/date → GM3 evidence artifact type → GM4 estimate/final state → GM5 effective/as-of date → GM6 supersession/reconciliation → GM7 jurisdiction/user-tax boundary → GM8 UI/marketing claim gate.

### Required data semantics

A distribution-level ROC record should preserve at minimum:
- fund/ticker and distribution identity;
- payable/ex/record date as applicable;
- amount and ROC percentage/value;
- source URL/document identity;
- source artifact type (fund-page estimate, 19a-1 estimate, year-end/final tax data, broker tax document, user adjustment);
- observed/published/as-of date where available;
- status: ESTIMATED, REVISED, FINAL_ISSUER, BROKER_REPORTED, USER_ADJUSTED, UNKNOWN;
- supersedes/reconciles relationship where a later artifact changes the earlier interpretation;
- jurisdiction/account context if a user-specific tax treatment is involved.

Never overwrite an interim estimate silently with a final value. Preserve the lineage so MintTap can explain why a historical number changed.

## Marketing consequence

The strongest zero-cost owned asset is not “today's ROC percentage.” It is an explainer showing:
1. what the currently displayed ROC number represents;
2. whether it is estimated or final;
3. which document produced it;
4. why year-end/broker reporting can differ;
5. what MintTap does when later evidence supersedes an estimate.

This answers the recurring community confusion without making individualized tax claims. It is useful even with no MintTap link, satisfying the Community Trust Before Distribution contract.

## Claim guardrails

Do not market an interim ROC estimate as “your tax-free distribution,” “your refund,” or final tax treatment. Do not infer an individual investor's filing treatment solely from issuer ROC tables or 19a-1 notices. Separate issuer classification evidence from broker reporting and from MintTap's user-entered Tax Adjustment.

The product should visually distinguish provisional versus final evidence. If provenance is absent, show UNKNOWN rather than manufacturing certainty.

## Operational application

MintTap ingestion/reconciliation should prioritize authoritative issuer artifacts and preserve raw source identity. Community questions can be used to discover confusion, but Reddit/forum claims are not authority for tax classification. An owned ROC reference becomes publishable only when every factual classification can be traced to an issuer/final-tax source and provisional language is explicit.

## Sources validated

- YieldMax ROC Center: https://yieldmaxetfs.com/roc-center/
- YieldMax Tax Documents: https://yieldmaxetfs.com/tax-documents/
- YieldMax fund-page ROC disclosure (current pages): figures shown are estimates and may later be recharacterized.
- YieldMax Rule 19a-1 notices: distribution-source breakdowns are estimated.

## Next learning target

Build the second owned-reference layer: a **MintTap total-return methodology contract** that distinguishes cash distributions, reinvestment, price/NAV movement, split normalization, cost basis, tax adjustments, and time-weighting without presenting distribution rate as total return. Validate against issuer disclosures and finance-standard return definitions before community publication.
