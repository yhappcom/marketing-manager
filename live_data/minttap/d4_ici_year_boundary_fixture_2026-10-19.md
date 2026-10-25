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

## 2026-10-23 release-source date-basis reconciliation — conditional 15/15 divergence

**SOURCE / REPRODUCED OFFLINE, NOT A LIVE TAX OR IMPORT DEFECT.** The 15 issuer rows above all have ex-date 2025-12-31 and payable date 2026-01-02. Release `yhappcom/yieldmax_tracker@1.0.29` (`functions/scripts/import_final_roc_csv.js`, blob `688dbc4b8f4824c784ced73bd3d8ceb74a7decb0`) computes `buildSummary(rows).years` from `payableDate` (lines 179–186) and writes `rocFinalYear: Number(row.payableDate.slice(0,4))` (line 331). The release `lib/screens/yearly_roc_screen.dart` (blob `5afdd190dd7f0de12bf347a228b2b2aec4a6c8f2`) groups the annual summary by `exDate.year` (lines 694–703) and only includes a year in `ICI FINAL` options when qualifying rows have non-null final ROC and payable dates no later than the viewing date (lines 625–641, 735–739).

**Date-expression probe:** Applying these exact date expressions to the 15 issuer source-only rows gives importer preflight year **2026**, stored `rocFinalYear` **2026**, but Yearly ROC UI grouping **2025 if valid final ROC values are subsequently present**. All **15/15** rows cross that year boundary. Offline Node assertion PASS; no Firestore, SDK, device or live import was invoked. The fixture contains gross distributions only; the test **does not** supply `rocPercentageFinal` or Box 3 and does not claim that the UI currently displays these rows.

**Decision consequence:** A shared unqualified label such as “2025/2026 final ROC year” is not yet source-justified across import preflight, stored metadata, and annual UI. The divergence may be intentional if payable-year metadata and ex-year portfolio display serve different purposes; **do not call it a tax-year bug** without product contract and broker/issuer authority. Keep D4 `ROC IMPORT WRITE HOLD` and require (1) explicit semantics for ex-year, payable-year, issuer tax document year and investor/broker tax year, (2) a controlled fixture with issuer-confirmed final ROC where available, (3) Firestore Emulator and widget acceptance across 2025/2026 boundaries, and (4) UI/Store/owned-reference claim qualification before release. This adds a concrete date-basis acceptance subgate; it does not supersede the existing XLSX parity, blank-state, duplicate, source-downgrade, idempotency or partial-batch gates.

**Probe files (local handoff, not GitHub evidence):** `d4_cross_year_date_basis_probe_2026-10-23.js`, `d4_cross_year_date_basis_probe_2026-10-23_results.json`. Source hierarchy: issuer PDF (gross and dates), release code (year expressions), synthetic/offline date-basis probe (reproduction); no live account or investor tax records.

## 2026-10-24 issuer Box 1a / Box 3 classification — source fixture upgraded, runtime still HOLD

**New primary-source evidence / correction of fixture scope, not proof of a live import.** The issuer-hosted **2025 ICI Primary Tax Data** PDF itself has separately labeled Form 1099 **Box 1a Total** and **Box 3* Nondividend Distributions** columns. The earlier 15-row fixture intentionally captured only gross distribution, and therefore did **not** establish that no issuer Box 3 data were available. The cross-year rows can now be classified at the issuer-document level. Source: https://yieldmaxetfs.com/wp-content/uploads/TaxDocuments/All%20Funds%20Tax%20Documents/2025%20ICI%20Primary%20Layout%20%E2%80%93%20YieldMax.pdf (rechecked 2026-10-24; PDF pages 2, 4, 6–11). IRS identifies Form 1099-DIV Box 3 as nondividend distributions: https://www.irs.gov/instructions/i1099div . This is **issuer ICI source classification**, not an investor's final broker 1099-DIV or a conclusion about the investor's tax year.

All rows below are **2025-12-31 ex/record** and **2026-01-02 payable**. Dollar amounts are **per share, six decimal places**. The `—` symbol transcribes a PDF dash, **not** an inferred numerical zero. The first gross-distribution amount is a separate field, never the Box 3 amount.

| Ticker | CUSIP | Gross/share | Issuer Box 1a/share | Issuer Box 3/share | PDF page |
| --- | --- | ---: | ---: | ---: | ---: |
| GPTY | 88636R735 | 0.256500 | 0.256500 | — | 2 |
| LFGY | 88636R727 | 0.248100 | 0.087666 | 0.160434 | 4 |
| FEAT | 88636R669 | 0.341500 | 0.271580 | 0.069920 | 4 |
| FIVY | 88636R651 | 0.250700 | 0.202645 | 0.048055 | 4 |
| YMAG | 88636J642 | 0.099200 | 0.055184 | 0.044016 | 6 |
| QDTY | 88636R578 | 0.149400 | 0.107241 | 0.042159 | 7 |
| RDTY | 88636R552 | 0.204900 | 0.054362 | 0.150538 | 8 |
| CHPY | 88636R693 | 0.440100 | 0.332388 | 0.107712 | 9 |
| SDTY | 88636R560 | 0.124000 | 0.073790 | 0.050210 | 10 |
| BIGY | 88636R750 | 0.533100 | 0.533100 | — | 10 |
| RNTY | 88636R776 | 0.495100 | 0.495100 | — | 10 |
| SOXY | 88636R818 | 0.595300 | 0.595300 | — | 10 |
| ULTY | 88636X708 | 0.486600 | 0.157521 | 0.329079 | 11 |
| SLTY | 88636R677 | 0.394700 | 0.011811 | 0.382889 | 11 |
| YMAX | 88636J659 | 0.106000 | 0.106000 | — | 11 |

**Deterministic consistency check:** For 10 rows with an explicit numeric Box 3 amount, `gross - Box 1a == Box 3` exactly at six-decimal precision. For the other five rows, `gross == Box 1a`, while Box 3 is a **source dash** and remains distinct from a source-confirmed zero. 15/15 arithmetic consistency, 10 numeric / 5 dash states. This is a **column extraction cross-check**, not an independent XLSX parity check or a runtime importer test.

**Decision delta:** The previously OPEN question “can an issuer-confirmed Box 3 cross-year fixture be obtained?” is **partially CLOSED at PDF source-row level**. The earlier “gross-only” boundary applied to the previously extracted fixture, not to the entire issuer PDF. The 15 rows can now support controlled *non-production* ROC/Box 3 date-basis and missing-state acceptance. **D4 ROC IMPORT WRITE HOLD remains.** Still required: exact PDF↔XLSX parity and byte/revision identity, product-approved ex/payable/issuer/broker tax-year semantics, release importer field mapping and provenance, 0/partial/full finality and dash-versus-zero UI tests, Firestore Emulator duplicate/replay/downgrade/multi-batch recovery, sanitized live-batch reconciliation. Do not auto-import, backfill, publish tax advice, or treat the five dashes as confirmed zero.

**Access limitation:** issuer XLSX could not be retrieved in this run; no XLSX parity or document-byte digest was claimed. No product repository or production data was modified.

## 2026-10-24 release-pinned importer acceptance — issuer Box 3 dash is not a final zero

**REPRODUCED / SOURCE-ONLY, NOT A LIVE IMPORT.** Compared the 15 issuer cross-year Box 3 fixture rows above with the exact `yhappcom/yieldmax_tracker@1.0.29` `functions/scripts/import_final_roc_csv.js` validator (blob `688dbc4b8f4824c784ced73bd3d8ceb74a7decb0`). Extracted and executed the release's actual `normalizeYmd`, `toNumber`, and `validateAndNormalize` function bodies in an isolated JavaScript V8 runtime; no Firebase SDK, production environment, file import, or database was invoked. Input mapping was explicit: issuer gross -> `total_distribution`, issuer Box 3 numeric -> `nondividend_distribution`, and for numeric Box 3 only, calculated `roc_percent = 100 * Box3 / gross`. The latter is **a test conversion**, not a source-native PDF percentage or broker 1099 claim.

- **10/15 ACCEPT:** all ten issuer rows with numeric Box 3 passed release validation when the derived ROC percentage was supplied.
- **5/15 REJECT:** GPTY, BIGY, RNTY, SOXY and YMAX have issuer Box 3 `—`. Preserving the dash as blank/unknown yields `Invalid numeric columns` for each, because both `nondividend_distribution` and `roc_percent` are required finite numbers. A literal `—` also fails. This is a correct refusal to import unknown as final, but the importer cannot represent an unknown/blank source state in a successfully applied final row.
- **Unsafe operator workaround:** replacing an issuer dash with numeric `0` and ROC percent `0` **passes validation**. If later applied, `applyRows` writes `rocAmountFinalPerShare: 0`, `rocPercentageFinal: 0`, and `finalStatus: "final"` (lines 326–337). Therefore a dash-to-zero conversion would assert a final zero **without issuer confirmation**. No evidence that such a conversion has occurred in production.
- **Additional validator limits reproduced:** synthetic negative Box 3 (`-0.010000`), Box 3 larger than gross (`0.500000` on `0.248100`), mismatched ROC percent (`99` with `0.160434 / 0.248100`), out-of-range percent (`999`), and a syntactically valid but impossible date (`2025-02-30`) all pass this validator. `normalizeYmd` checks only YYYY-MM-DD shape. These are release-code input-contract gaps, **not** evidence of malformed issuer data or live corruption.

**Decision delta:** Close only the previously unknown *release validator behavior for these issuer Box 3 states* as SOURCE-VERIFIED. Do not mark issuer dash rows as final zero, auto-fill their ROC percent, or silently import a partial set as complete. Product-owned acceptance should (a) preserve issuer numeric / issuer dash / source-confirmed zero separately; (b) require per-row source class, revision and tax-year semantics; (c) enforce finite `0 <= nondividend <= gross` and `0 <= ROC% <= 100`, and verify ROC% against the source amounts within a documented decimal tolerance; (d) reject impossible dates and test date ordering; (e) explicitly account for skipped/unknown rows in annual coverage and provenance; (f) run Firestore Emulator + UI 0/partial/full coverage and replay/downgrade tests before any write. Do not interpret a 2025 ICI label or 2026 payable date as an investor's broker tax year. `ROC IMPORT WRITE HOLD` remains.

**Evidence boundary:** issuer-hosted PDF / existing 15-row extracted fixture (not an XLSX parity or document-byte check), release-pinned product source, isolated execution of exact validator functions and synthetic negative tests. No full CSV CLI run, no actual Firebase admin or Firestore Emulator, no broker records, no product repository or production-data change.


## 2026-10-25 archived issuer ICI XLSX cross-format reconciliation — PDF dash is not necessarily missing

**NEW SOURCE-COPY EVIDENCE / CORRECTION TO THE PDF-ONLY INTERPRETATION; D4 ROC IMPORT WRITE HOLD REMAINS.** A user-accessible archived workbook named `2025-ICI-Primary-YieldMax-ETFs.xlsx` was located in connected Google Drive and read **without editing it**. This is an archived copy (Drive file modified 2026-05-28), **not** a newly fetched issuer-hosted XLSX. Its raw 213,912-byte XLSX has SHA-256 `2148c4a2c26ff418a51aadf27d4e18ad3f67ccf1ca032681254b70402ef78637`. The private Drive file identifier/link is intentionally not published. The current issuer-hosted 12-page PDF was also accessible on 2026-10-25: https://yieldmaxetfs.com/wp-content/uploads/TaxDocuments/All%20Funds%20Tax%20Documents/2025%20ICI%20Primary%20Layout%20%E2%80%93%20YieldMax.pdf .

**Reproducible bounded check:** Read the archived XLSX raw workbook with `artifact_tool`, sheet `YM - ICI Primary Layout`, header row 8; source columns B (CUSIP), C (ticker), G/H/I (record/ex/payable), J (gross), Q (Box 1a), Z (Box 3). For the 15 source fixture tickers at 2025-12-31 record/ex and 2026-01-02 payable, **15/15 unique ticker+CUSIP+dates, gross and Box 1a match** the previously PDF-extracted six-decimal fixture. All ten PDF-numeric Box 3 amounts also match exactly at six decimals. The five **PDF-displayed dashes** (GPTY, BIGY, RNTY, SOXY, YMAX) are **numeric zero values in the archived XLSX Z cells**, not blank cells. Those cells use an Excel accounting number format with separate positive/negative/zero/text sections; the **zero section** contains the literal display symbol `"-"`, so the displayed dash is consistent with an underlying numeric zero. The verified distinction is **raw numeric 0 + zero-format display dash**, not the exact spacing or escaping of the format string. For the ten nonzero Box 3 rows the workbook's Reclass (R) column is `R`; for the five zero rows it is blank. This flag difference must not be converted into a claim about broker finality.

**Interpretation correction:** The earlier PDF-only rule **"dash is unknown, not proven zero"** was the safe reading when the XLSX cell data were unavailable. For these five matched rows **in this archived workbook**, the underlying cell is a source-file numeric zero, rendered as a dash by accounting formatting. Therefore the earlier `5/15 reject` release-importer probe remains true for **PDF-dash-as-blank conversion**, but it does **not** describe an XLSX numeric-zero conversion of this archived source copy. Likewise, the earlier warning about **inventing** zero from a PDF dash remains valid for other documents/versions; do not turn every dash into zero by a global parser rule. Raw value, cell type, display formatting, source class, source revision, and whether a row is authoritative for a particular tax year are separate facts.

**Newly closed narrow subgate:** `ARCHIVED_XLSX_TO_PDF_FIXTURE_15_ROW_VALUE_PARITY = VERIFIED` and `ARCHIVED_XLSX_FIVE_FORMATTED_ZERO_CELLS = VERIFIED`. **Not closed:** current issuer-hosted XLSX bytes/hash/revision identity, full 1,300+ row parity, whether the PDF and archived XLSX were generated from the same revision, broker/account-specific final 1099, issuer correction history, production importer behavior, UI finality coverage, emulator tests or actual MintTap writes. A numeric zero in this source copy is **not automatically an investor's broker-confirmed final ROC**.

**Product-owned acceptance change:** Preserve source-native XLSX numeric zero separately from PDF presentation dash and true missing/blank; require document hash/revision and explicit authority/coverage before marking `finalStatus=final`. For each source version, verify raw XLSX cell value/number format and the issuer PDF rendering rather than equating typography with data nullability. Run isolated emulator 0/partial/full, replay/downgrade, year-boundary and 401-row recovery tests before any production write. No product repository, Firestore, tax filing, external community or operator account was modified.

## 2026-10-25 archived ICI full-row capital-gain allocation reconciliation

**NEW VERIFIED ARCHIVED-SOURCE SUBGATE / ROC IMPORT WRITE HOLD REMAINS.** On 2026-10-25, re-read the same user-accessible archived `2025-ICI-Primary-YieldMax-ETFs.xlsx` in connected Google Drive (the 2026-05-28 modified, 213,912-byte copy identified above), using its parsed complete worksheet as a **source-copy**; did not fetch or hash the issuer's currently hosted XLSX. Parsed all **1,352 populated 2025 distribution rows across 60 tickers** (CUSIP, ticker and ex-date required), retaining source columns J gross distribution/share, Q Form 1099 Box 1a ordinary dividends, V Form 1099 Box 2a total capital-gain distributions, and Z Form 1099 Box 3 nondividend distributions. Computed comparisons in integer millionths (six-decimal per-share precision), not floating-point tolerance-based estimates.

- **1,352/1,352 exact identity:** `gross = Box 1a + Box 2a + Box 3` in this archived source copy; **zero** exceptions at six decimal places. Separately, `gross = Box 1a + Box 3` fails for **32/1,352 rows** because Box 2a is positive; the 32 rows cover **10 tickers**: YBIT 5, CONY 1, YMAG 1, QDTY 10, RDTY 2, SNOY 1, SDTY 9, RNTY 1, ULTY 1, YMAX 1. All other 1,320 rows have Box 2a = 0. This is an observed identity for this specific source copy, **not** a universal rule for all tax statements or corrected revisions.
- **Material counterexample (issuer PDF corroborated):** YBIT, ex-date 2025-10-02 / payable 2025-10-03: gross **$0.308400**, Box 1a **$0.000000**, Box 2a **$0.308400**, Box 3 **$0.000000**. The shortcut `gross - Box 1a` would falsely report **100% ROC** when the archived issuer source explicitly allocates **0% to Box 3** and 100% to capital gains. First-party issuer PDF page 3 (1-based) displays the $0.308400 capital-gain column, not a nondividend distribution. Independent second spot check: YMAG 2025-10-29 gross $0.134600, Box 1a $0.021955, Box 2a $0.094472, Box 3 $0.018173, matching the issuer PDF page 6 (1-based). Primary PDF: https://yieldmaxetfs.com/wp-content/uploads/TaxDocuments/All%20Funds%20Tax%20Documents/2025%20ICI%20Primary%20Layout%20%E2%80%93%20YieldMax.pdf . These are **two spot checks**, not full 1,352-row PDF↔XLSX parity.
- **Production contract consequence:** Importers, owned ROC references and Store claims must never treat `gross - Box 1a` as a source-proven Box 3/ROC value. Preserve typed issuer Box 1a, Box 2a, Box 3, raw zero, display dash, source class/revision and document tax-year basis separately. If a supplied source omits Box 2a or Box 3, do not invent the omitted allocation. The release-pinned CLI currently requires an explicit nondividend/ROC percentage input; this archive analysis **does not** prove it actually performed the unsafe subtraction or corrupted production records.

**Newly closed narrow subgate:** `ARCHIVED_2025_ICI_1352_ROW_THREE_COMPONENT_RECONCILIATION = VERIFIED`. **Still open:** live issuer-hosted XLSX byte/revision identity and full PDF parity, broker/account finality, product-owned source-type mapping and validation, Firestore Emulator/UI acceptance, operator-approved tax-year semantics and live impact. **Decision remains D4 ROC IMPORT WRITE HOLD**. No GitHub product, Firestore, Play, AdMob or community write; the archive was read only.


## 2026-10-25 archived ICI January-payable source-tax-year and reclassification acceptance

**NEW VERIFIED ARCHIVED-SOURCE SUBGATE; D4 ROC IMPORT WRITE HOLD UNCHANGED.** Re-read the original 213,912-byte Google Drive source copy `2025-ICI-Primary-YieldMax-ETFs.xlsx` (modified 2026-05-28; SHA-256 `2148c4a2c26ff418a51aadf27d4e18ad3f67ccf1ca032681254b70402ef78637`) with its native typed cells and worksheet header. This is the same archived copy as the earlier 1,352-row allocation audit, **not** a newly fetched current issuer-hosted XLSX or an actual broker Form 1099-DIV.

**Tax-year field vs cash payable date (15/15 source rows):** Among 1,352 populated rows, **15 distinct CUSIPs/tickers** have record/ex-date **2025-12-31** and payable date **2026-01-02**. For **all 15**, source columns K `2024 (Prior Year)` and L `2026 (Next Year)` are numeric **0**, while column M `2025 (Current Year)` equals column J gross distribution per share. Combined gross per-share amounts across these *different funds* total $4.725200 (a fixture checksum only, **not** an investor portfolio payout). Source worksheet explicitly assigns these January-payable events to the **2025 source reporting-year allocation**, rather than 2026 by naive payable-year grouping. The issuer PDF also displays the 15 January-payable rows; examples GPTY $0.256500 (PDF page 2) and LFGY $0.248100 (page 4). Source: https://yieldmaxetfs.com/wp-content/uploads/TaxDocuments/All%20Funds%20Tax%20Documents/2025%20ICI%20Primary%20Layout%20%E2%80%93%20YieldMax.pdf .

**Independent tax authority, conditional not automatic:** IRS Form 1099-DIV instructions state that for a regulated investment company/REIT dividend **declared in October–December** and payable to holders of record in that period, **actually paid in January**, the amount is treated as received on December 31 and reported for the **prior calendar year** (IRC 852(b)(7)/857(b)(9)). Source: https://www.irs.gov/instructions/i1099div (section “Dividend payment delayed until January”; checked 2026-10-25). The archived ICI rows give record/ex/payable dates and source-year allocation but **not an independently authenticated declaration date, actual bank settlement or investor-specific corrected broker 1099**. The observed source allocation is **consistent** with the IRS rule; this audit does not certify that each investor meets every tax condition or independently establish a broker-final year.

**Bounded revision/identity metadata audit:** Across 1,352 populated rows, column E `Reclass (R)` is `R` on **1,137**, blank on **215**; no populated Estimated (column D) or Corrected/Extended (column F) flags were observed. **0 duplicate tuples** for (CUSIP, record date, ex-date, payable date) within this single archived workbook; **60 tickers map one-to-one to 60 CUSIPs within this copy**. These facts are not a historical version comparison: `R` alone cannot authorize replacement of an earlier estimate or prove that a previous import exists; uniqueness within one file does not establish cross-version/cross-source deduplication.

**Production acceptance contract:** Preserve separately (1) issuer-stated source reporting/tax-year field, (2) record/ex/payable calendar dates, (3) issuer revision/reclass flag, (4) document version/hash, and (5) broker/account finality. Add all **15 January-payable fixtures** to a product-owned emulator test that preserves the issuer's 2025 allocation while displaying cash payable 2026-01-02, without silently remapping to 2026. Test `R` vs blank source flags, same-file replay, cross-version corrections, and distinct broker-final records with explicit precedence; **never auto-overwrite on `R` alone**. Do not infer actual product misclassification, live data impact, or full PDF↔XLSX parity. No product/Firestore/account/community write.

**Closed narrow subgate:** `ARCHIVED_2025_ICI_15_JANUARY_PAYABLE_SOURCE_YEAR_AND_1352_ROW_KEY_FLAG_AUDIT = VERIFIED`. **Still open:** current issuer-hosted XLSX revision and complete parity, true declaration/settlement evidence where required, operator-approved year semantics, broker finality, importer/UI/Firestore Emulator acceptance and production impact. D4 **ROC IMPORT WRITE HOLD** remains; D1 and D2 operator evidence remain higher priority.
