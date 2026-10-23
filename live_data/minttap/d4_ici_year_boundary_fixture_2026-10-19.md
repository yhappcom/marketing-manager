# D4 issuer date-boundary fixture — 2026-10-19; expanded source check 2026-10-23

**Decision: ROC IMPORT WRITE HOLD.** This is an issuer-document fixture, not evidence of a successful MintTap import, investor-specific broker 1099-DIV treatment, or production tax error.

## Issuer document and extraction boundary

- Issuer index: https://yieldmaxetfs.com/tax-documents/
- Source: 2025 ICI Primary Tax Data, 12-page PDF, linked as “2025 ICI Primary Layout – YieldMax”.
- PDF: https://yieldmaxetfs.com/wp-content/uploads/TaxDocuments/All%20Funds%20Tax%20Documents/2025%20ICI%20Primary%20Layout%20%E2%80%93%20YieldMax.pdf
- Inspected 2026-10-23 via the issuer-hosted PDF's machine-readable text and table-page visual inspection. Values below are the first amount under **Total Distribution Amount Per Share**, not Box 3/ROC, not a derived ROC percentage. Each source row has ex-date and record date **2025-12-31** and payable date **2026-01-02**. PDF page numbers below are 1-based.
- The issuer index has two identically titled 2025 links, one PDF and one XLSX. XLSX content parity, publication timestamps, revisions and document-byte hashes are **not verified**; identical titles are not proof of revision or equivalence.

| Ticker | CUSIP | Ex-date | Payable date | Gross distribution/share (USD) | PDF page |
| --- | --- | --- | --- | ---: | ---: |
| GPTY | 88636R735 | 2025-12-31 | 2026-01-02 | 0.256500 | 2 |
| LFGY | 88636R727 | 2025-12-31 | 2026-01-02 | 0.248100 | 4 |
| FEAT | 88636R669 | 2025-12-31 | 2026-01-02 | 0.341500 | 4 |
| FIVY | 88636R651 | 2025-12-31 | 2026-01-02 | 0.250700 | 4 |
| YMAG | 88636J642 | 2025-12-31 | 2026-01-02 | 0.099200 | 6 |
| QDTY | 88636R578 | 2025-12-31 | 2026-01-02 | 0.149400 | 7 |
| RDTY | 88636R552 | 2025-12-31 | 2026-01-02 | 0.204900 | 8 |
| CHPY | 88636R693 | 2025-12-31 | 2026-01-02 | 0.440100 | 9 |
| SDTY | 88636R560 | 2025-12-31 | 2026-01-02 | 0.124000 | 10 |
| BIGY | 88636R750 | 2025-12-31 | 2026-01-02 | 0.533100 | 10 |
| RNTY | 88636R776 | 2025-12-31 | 2026-01-02 | 0.495100 | 10 |
| SOXY | 88636R818 | 2025-12-31 | 2026-01-02 | 0.595300 | 10 |
| ULTY | 88636X708 | 2025-12-31 | 2026-01-02 | 0.486600 | 11 |
| SLTY | 88636R677 | 2025-12-31 | 2026-01-02 | 0.394700 | 11 |
| YMAX | 88636J659 | 2025-12-31 | 2026-01-02 | 0.106000 | 11 |

## Production acceptance use (not yet executed)

1. Use all 15 exact issuer keys (CUSIP, ticker, ex/record/payable dates) and gross amounts as a **source-only fixture**; preserve six-decimal precision. Do not infer missing ROC/Box 3 from gross amount or the displayed 0.000000% in another column.
2. Run the release-pinned CSV importer against controlled fixture conversions, recording missing/blank/zero as distinct states; compare ex-date and payable-date year semantics in storage and Yearly ROC UI. The 2025 issuer file's inclusion of 2026 payable dates does not itself determine an investor's 1099 tax year.
3. Compare the PDF and actual XLSX bytes/rows before asserting parity or a revision, then bind a document-byte digest separately from normalized-row `finalSourceHash`.
4. Execute duplicate/conflict, partial/full finality, source downgrade, same-hash replay and multi-batch recovery cases in Firestore Emulator before any live write.
5. Reconcile against a sanitized actual import batch and, if relevant, investor-specific broker documentation before claiming production correctness or tax finality.

**Closed subgate:** all 15 identified cross-year PDF gross-distribution rows now have ticker/CUSIP/date/value/page anchors. **Still open:** XLSX parity, Box 3/ROC classification, release importer execution, provenance, broker treatment and live impact. No product repository or operational data changed.
