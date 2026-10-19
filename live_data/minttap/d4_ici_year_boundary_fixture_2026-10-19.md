# D4 issuer date-boundary fixture — 2026-10-19

Issuer source: https://yieldmaxetfs.com/tax-documents/ (2025 ICI Primary Tax Data PDF).

Observed ex-date 2025-12-31 and payable date 2026-01-02:
- GPTY: USD 0.256500 per share
- YMAG: USD 0.099200 per share
- YMAX: USD 0.106000 per share
- ULTY: USD 0.486600 per share

Additional cross-year ticker examples observed: LFGY, FEAT, FIVY, QDTY, RDTY, CHPY, SDTY, BIGY, RNTY, SOXY, SLTY. Fifteen issuer examples total; not evidence of production impact.

Correction: the index lists two identically named 2025 ICI links, one PDF and one XLSX. Different revisions are not established; file contents and revision histories have not been compared.

D4 remains ROC IMPORT WRITE HOLD. Test release-pinned importer/storage/display date basis, missing/partial/full final coverage, duplicate rows and source provenance. Never infer a customer's broker tax year from this issuer fixture.
