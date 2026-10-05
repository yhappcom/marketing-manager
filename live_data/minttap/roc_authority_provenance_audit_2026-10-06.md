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
