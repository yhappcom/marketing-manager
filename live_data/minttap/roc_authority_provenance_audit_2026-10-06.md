# MintTap ROC authority/provenance audit — 2026-10-06

## Decision impact
D4 advances from a generic issuer/broker provenance requirement to an observed issuer document hierarchy.

## Primary-source evidence observed
YieldMax's official Tax Documents page currently exposes, separately:
- 2025 ICI Primary Layout — YieldMax;
- YieldMax Tax Insert 2025;
- IRS Form 8937 documents for relevant funds/fiscal-year groups;
- recurring Fund 19a-1 notices.

This separation matters. A recurring 19a-1 distribution notice and a year-end/final tax package are not interchangeable provenance states.

## Production contract
MintTap must not collapse ROC into one unlabeled percentage. Preserve at least:
1. issuer periodic estimate / 19a-1 state;
2. issuer year-end tax-document state (ICI Primary / tax insert / applicable Form 8937);
3. broker-reported customer tax-document state;
4. unknown/missing state.

A later/final source may supersede an estimate for the same tax period, but provenance must remain auditable. Broker treatment is account-specific evidence and may differ from an issuer-level estimate; do not silently overwrite one source class with another.

## Community evidence alignment
Recurring r/YieldMaxETFs discussions independently show confusion around 19a estimates, broker 1099 treatment, substitute payments and revised forms. These are problem-evidence inputs only, not tax authority. The authoritative owned-reference answer must route readers to issuer/broker provenance rather than reproduce community claims as fact.

## Decision state
**ISSUER YEAR-END DOCUMENT FAMILY OBSERVED / MINTTAP FIELD-LEVEL PROVENANCE NOT YET VERIFIED.**

Do not claim that a value shown by MintTap is final until the app/data pipeline identifies which source class populated it and the applicable tax period.

## Next evidence target
Inspect MintTap's actual ROC data model/import/update pipeline and UI labels to determine whether each displayed value can distinguish estimate, issuer year-end/final, broker/account-specific and unknown states. If not, open a product/data remediation dependency rather than a marketing-copy workaround.

## Sources
- YieldMax, Tax Documents, accessed 2026-10-06: https://yieldmaxetfs.com/tax-documents/
- Reddit r/YieldMaxETFs discussions are retained only as recurring-problem evidence, not authority.

## Primary issuer clarification — checked 2026-10-16 (D4 decision refinement)

**New direct issuer evidence:** YieldMax's [ROC Center](https://yieldmaxetfs.com/roc-center/) explicitly says (a) during-year ROC estimates are preliminary and may change, (b) final tax treatment is determined after year end and reported on the investor's broker Form 1099-DIV, (c) investors should rely on final tax documents rather than interim estimates for filing, and (d) historical issuer ICI Primary Tax Data for 2023, 2024 and 2025 is separately available. The issuer's [Tax Documents](https://yieldmaxetfs.com/tax-documents/) index lists recurring 19a-1 notices, annual ICI layouts, tax inserts and Form 8937 separately; the index shows two 2025 ICI layout entries, so an undated document-title match alone cannot establish which revision is authoritative. Checked against the US IRS [Mutual funds / return of capital FAQ](https://www.irs.gov/faqs/capital-gains-losses-and-sale-of-home/mutual-funds-costs-distributions-etc) and [Form 1099-DIV instructions](https://www.irs.gov/instructions/i1099div): box 3 reports nondividend distributions where determinable; ROC generally reduces tax basis, and treatment changes once basis reaches zero.

**Refined product/claim contract:** issuer periodic estimate != issuer historical annual ICI/tax package != investor-specific broker Form 1099-DIV != unknown. Do not present an issuer annual dataset as an investor's broker-confirmed final 1099, or a Yearly ROC 'ICI FINAL' UI selection as proof of final coverage for all rows/tickers. Keep issuer-document date, tax year, revision/URL, per-row coverage, brokerage account-specific reconciliation and corrected-1099 state separately. A 2025 issuer document label is not sufficient to close the prior year-end source conflict or the released CSV-import partial-finality risk.

**Decision state:** ISSUER'S EXPLICIT BROKER-1099 FINALITY BOUNDARY VERIFIED / MINTTAP ROW-LEVEL COVERAGE AND LIVE TAX IMPACT UNKNOWN. No evidence of actual tax error. Next obtain a specific 2025 ICI document revision plus sanitized broker 1099 and ROC import rows, reconcile same ticker/period and revision history, then test 0/partial/full coverage and ex-date/payable-year boundaries. No general research created; no product repository modified.


## 2026-10-24 16:31 KST — issuer annual-document field-purpose correction

**SOURCE / DOCUMENT-FIELD CLASSIFICATION (not live product data).** The issuer's current [Tax Documents index](https://yieldmaxetfs.com/tax-documents/) links a distinct two-page [“YieldMax - Tax Insert 2025” PDF](https://yieldmaxetfs.com/wp-content/uploads/TaxDocuments/All%20Funds%20Tax%20Documents/YieldMax%20-%20Tax%20Insert%202025.pdf). Direct inspection on 2026-10-24 shows that this *particular document* supplies **fund-level percentages of ordinary-income dividends (Box 1) attributable to direct U.S. government obligations for possible state-income-tax treatment**; it does **not** present an event-level Box 3/nondividend-distribution table, individual broker 1099-DIV or the 15 cross-year ICI ROC rows. Its explanatory text directs holders to applicable state rules and tax advisers. The fund percentages are not ROC percentages. For example, the issuer document shows YieldMax Ultra Option Income Strategy ETF **0.502550%** and YieldMax Universe Fund of Option Income ETF **54.142664%** in the *government-obligations/ordinary-income* column; these must **not** be ingested or published as ULTY/YMAX ROC. This is a field-meaning distinction, not a contradiction of issuer year-end ROC data.

**IRS document-purpose cross-check:** [IRS Form 8937 instructions](https://www.irs.gov/instructions/i8937) describe organizational actions affecting security basis, including some nontaxable distributions and stock splits, and explicitly distinguish distributions reportable as dividends on Form 1099-DIV. A Form 8937 can be relevant to a *particular basis-affecting action*, but its presence in the issuer's tax index is not a blanket event-level Box 3 finality feed or a substitute for a holder's broker 1099. Likewise, this 2025 Tax Insert is supplemental Box 1/state-tax context, not an ICI ROC correction or revision. **Document family is not field authority.**

**D4 operational consequence / newly closed source-purpose subgate:** Classify the issuer's actual **2025 Tax Insert** as `supplemental_box1_government_obligations`, distinct from `issuer_ici_box3_nondividend`, `issuer_8937_action_basis`, `issuer_19a_estimate`, and `broker_1099_div`. Prevent a generic “2025 tax documents” loader or owned-reference claim from mapping the insert's fund-level percentages to ROC/final-status fields. Require per-document *field schema, scope (fund/year vs event vs account/action), source URL/version, and correction history* before authorizing import or publication. The **source-purpose classification** is verified; no evidence of such a mis-import in MintTap, no deployed importer/Emulator test, and no broker-specific tax treatment is claimed. **D4 ROC IMPORT WRITE HOLD remains.**

**Next evidence:** preserve the existing 15-row issuer ICI Box 1a/Box 3 fixture and its dash/zero distinctions; obtain XLSX bytes/row parity when possible; have product owners test typed source dispatch, 0/partial/full finality, year boundaries, duplicate/replay/downgrade and batch recovery in an isolated Emulator; reconcile sanitized operator data before live writes. D1 actual Play Console and D2 AdMob operator evidence remain higher-priority unavailable gates. No product/account writes, external post, new theory or new research file.
