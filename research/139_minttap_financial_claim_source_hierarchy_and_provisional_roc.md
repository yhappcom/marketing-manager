# 139 — MintTap financial-claim source hierarchy and provisional ROC discipline

Validated: 2026-09-20

## Why this is new
Research 138 established evidence-led specialist publishing. This note defines the operational evidence contract for MintTap's most consequential content: distributions, return of capital (ROC), splits and tax-adjacent explanations. It prevents an estimated fund disclosure from being silently promoted into a final tax fact.

## Core principle
A financial claim is publishable only at the epistemic level supported by its source. Source authority, claim type, effective date and provisional/final status travel with the claim. Later authoritative evidence can supersede earlier evidence without rewriting history.

## Source hierarchy by claim

### 1. Fund event and current distribution data
Preferred: YieldMax official fund page / official distribution schedule and fund documents. Use issuer data for declared amount, declared/ex/record/payable dates and issuer-published ROC estimate. Do not substitute aggregators when the issuer source exists.

### 2. Distribution composition / ROC
Preferred contemporaneous evidence: official Rule 19a-1 notice. Critical semantic rule: 19a-1 composition is an estimate, not final tax characterization. YieldMax itself states that displayed ROC figures are estimates and may later be determined to be taxable net investment income, short-term gains, long-term gains or ROC.

Final US tax characterization: year-end tax reporting (for example Form 1099-DIV / issuer tax documents as applicable) supersedes provisional 19a estimates for tax-character claims. SEC-filed notices explicitly warn that 19(a) amounts/sources are estimates and not provided for tax reporting.

### 3. General US tax mechanics
Preferred: IRS primary guidance/current publications. IRS Publication 550 and Topic 404 explain that nondividend distributions/ROC generally reduce adjusted basis until basis reaches zero, after which additional nondividend distribution is generally capital gain. This is US federal-tax context, not a rule to transplant into Korean tax treatment.

### 4. Regulatory meaning and investor-protection framing
Preferred: SEC statutes/rules, SEC filings/notices and SEC staff material. SEC material warns that a high distribution rate containing ROC can mislead investors if interpreted as investment return. Therefore MintTap content must never equate distribution rate, distribution amount or estimated ROC with total return or investment performance.

### 5. Splits
Preferred: issuer/fund official corporate-action announcement and prospectus/supplement/SEC filing where applicable. Preserve effective date, ratio and whether displayed historical per-share values have been adjusted. Never infer a split solely from a discontinuity in market-price data.

### 6. Korea-specific tax claims
US issuer/IRS evidence is insufficient. A Korea-specific claim requires current Korean primary authority (tax statute/enforcement decree, National Tax Service or other competent authority) and, where the actual broker withholding/refund process matters, evidence of the operational treatment. Product accounting behavior must be labelled separately from legal tax advice.

## BE0–BE5 Financial Claim Provenance Gate
- **BE0 — unsupported:** claim has no traceable primary evidence.
- **BE1 — secondary only:** aggregator/community/article evidence; discovery aid only, not decision-grade for consequential claims.
- **BE2 — primary but semantically incomplete:** issuer/regulator source exists but status/date/scope or provisional-vs-final meaning is not preserved.
- **BE3 — publishable:** exact claim is linked to appropriate primary source, source date/effective date, jurisdiction, claim type and status (`provisional`, `final`, `historical`, `superseded`) are explicit; product behavior is separated from tax/legal interpretation.
- **BE4 — maintained:** refresh trigger and supersession path are registered; downstream app/blog/store/social surfaces consume the same canonical fact or clearly versioned derivative.
- **BE5 — audited:** a later final source is reconciled against provisional values, material changes propagate, and the historical record retains what was known at each time rather than retroactively pretending the estimate was final.

## Required claim record
`claim_id | ticker/fund | claim_type | value | unit | jurisdiction | period/event_date | source_authority | source_url/document | source_published_date | observed_at | evidence_status | supersedes | refresh_trigger | downstream_surfaces | notes`

For ROC specifically also preserve `distribution_id`, `estimate_or_final`, and the tax year to which final characterization belongs.

## Refresh triggers
- new distribution declaration or correction;
- new/updated Rule 19a-1 notice;
- year-end/final tax document publication;
- split/corporate-action announcement or correction;
- relevant IRS/SEC/Korean-authority rule/guidance change;
- issuer correction to historical distribution table;
- discrepancy between app data and primary source.

## MintTap operating consequences
1. A displayed YieldMax ROC percentage sourced from the issuer must be labelled estimated when the issuer says it is estimated.
2. Blog copy must not say a 19a estimate is the shareholder's final taxable ROC.
3. If MintTap performs a user-facing tax adjustment, documentation must distinguish the app's accounting transformation from a legal conclusion about the user's Korean tax liability.
4. Distribution yield is not total return. Marketing copy must not imply that a high payout or ROC percentage demonstrates investment performance.
5. Aggregators can identify candidate discrepancies but cannot silently overwrite canonical financial facts.
6. When final evidence differs from provisional evidence, preserve both versions and propagate the final state rather than deleting the provenance trail.

## Reusable niche-app lesson
For any regulated/professional niche, create a claim-specific authority hierarchy rather than a generic 'trusted sources' list. A source can be authoritative for one claim and insufficient for another. Evidence status is part of the data model, not editorial decoration.

## Validated authoritative references
- YieldMax official fund pages / distribution tables and 19a-1 notices: issuer states ROC figures are estimates and may later be recharacterized.
- IRS Topic 404 and Publication 550 (2025): US federal treatment of nondividend distributions and basis reduction.
- SEC compliance material and SEC-filed Section 19 notices: 19(a) notices concern distribution source; estimated source allocations are not final tax reporting and distribution amounts should not be read as investment performance.

## Next evidence work
Build the first MintTap claim registry from live TSLY/CONY/MSTY distribution, ROC and split records; sample records against issuer primary evidence; then map Korea-specific tax-adjustment claims to current Korean primary authority before publishing tax-adjacent educational content.