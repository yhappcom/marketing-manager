# MintTap D4 — finalSourceHash is a row fingerprint, not issuer-document provenance (2026-10-23)

**Decision: ROC IMPORT WRITE HOLD.** Source-only evidence; no Firebase/production write or actual document-revision observation.

Verified release: `yhappcom/yieldmax_tracker@1.0.29`, `functions/scripts/import_final_roc_csv.js`, blob `688dbc4b8f4824c784ced73bd3d8ceb74a7decb0`, lines 247–263, 326–359.

`buildFinalSourceHash` SHA-256 hashes a pipe-joined set of row fields (ticker, optional original ticker, ex/record/payable dates, total, ROC amount/percent, sourceType, sourceFile, fund, CUSIP). It does **not** hash the issuer PDF/XLSX bytes or incorporate issuer publication/revision ID, document SHA, or tax-year provenance. The field name must not be treated as a source-document authenticity or revision proof.

A source-faithful offline probe using the release hash function confirms: synthetic document revision/byte-hash metadata alone leaves the row hash unchanged; a changed ROC amount changes the hash; changing only the sourceFile label also changes the hash. These are deterministic function properties, not claims of an actual issuer revision.

Earlier in-memory `applyRows` probes substituted `SHA256(JSON.stringify(row))` for this function. Repeating the reimport/source-downgrade and 401-row partial-batch tests with the exact release hash preserves their behavioral findings, but earlier mock digest values must **not** be represented as production digest parity.

**Acceptance:** store separately (a) verified issuer-document URL and bytes digest, publication/revision/as-of, tax-year and source class; (b) normalized row fingerprint; (c) import batch manifest and approval/supersession history. Same-hash replay should be a no-op absent an explicit audit action. Actual operator data and Firestore Emulator validation remain required. No overall decision closed.


## 2026-10-30 05 KST — current issuer ROC authority route, document bytes still unavailable

**SOURCE / OPEN / NO IMPORT WRITE.** Independently opened YieldMax's live [ROC Center](https://yieldmaxetfs.com/roc-center/) on 2026-10-30. The issuer explicitly says intrayear ROC estimates are preliminary and can change; final investor tax treatment is reflected in the investor's broker Form 1099-DIV. The ROC Center exposes a **2025 ICI Primary Tax Data** link directly to [issuer-hosted XLSX](https://yieldmaxetfs.com/wp-content/uploads/2026/01/2025-ICI-Primary-YieldMax-ETFs.xlsx), in addition to 2023/2024 files. This confirms a current first-party **retrieval path and authority boundary**, not a current workbook revision or its contents.

**Acquisition failure / exact evidence limit:** The web reader rejected the XLSX as unsupported binary content; container download failed, and direct container HTTPS retrieval failed with DNS resolution for `yieldmaxetfs.com`. Consequently **no 2026-10-30 XLSX bytes, SHA-256, file metadata, sheet rows, comparison to the archived 1352-row workbook or issuer revision evidence were obtained**. A live HTML link is not a verified content digest; the previously archived fixture must not be silently promoted to current finality. No claim that a revision occurred.

**Decision and next admissible evidence:** D4 `ROC IMPORT WRITE HOLD` unchanged. Acquire exact issuer XLSX bytes using an authorized binary-capable channel; record retrieval timestamp, final URL, SHA-256 and workbook schema; compare issuer PDF/XLSX rows and source-year/payable-year semantics; then run controlled importer/Firestore Emulator acceptance and broker-finality qualification. No product, Firestore, broker account or public-content write.

## 2026-11-07 — live issuer YSPC record-date anomaly (source-quality exception)

**New first-party observed anomaly, not a MintTap production incident.** On 2026-11-07, directly opened the [YieldMax YSPC fund distribution table](https://yieldmaxetfs.com/our-etfs/yspc/) (live page; row with declared 2026-07-29, ex 2026-07-30, payable 2026-07-31). The issuer table prints **record date 07/30/2036** while the adjacent ex/payable dates are in **2026**. Direct fresh retrieval independently reproduces the 2036 text; source page is authoritative for what it *publishes*, but the year cannot be assumed factually correct. This is an apparent issuer-published date inconsistency, not verified corrected date, not a 2025 ICI workbook revision, not an observed MintTap import or user-facing error. Issuer ROC percentages on this table are estimates, not finalized broker tax records.

**Operational contract:** preserve the exact raw source cell and URL/retrieval timestamp, mark `SOURCE_DATE_CONFLICT / UNRESOLVED`, and quarantine this row from automatic authoritative record-date promotion or any import/write. Cross-check an independent dated issuer distribution schedule / 19a-1 notice / correction, recording document bytes and digest before resolution; do not silently change 2036 to 2026 based on adjacent dates. If no independent source settles it, escalate to issuer/source owner. This strengthens the D4 source-quality exception gate but does **not** clear `ROC IMPORT WRITE HOLD`. No external contact, product edit, or production write was performed.

## 2026-11-07 — independent issuer schedule cross-check (partial corroboration; unresolved)

Directly retrieved the issuer's separate [Distribution Schedules](https://yieldmaxetfs.com/distribution-schedule/) page on 2026-11-07. Its Group 2 weekly-payer membership table explicitly includes YSPC; the dated Group 2 schedule lists Wednesday 2026-07-29 declaration / Thursday 2026-07-30 Ex/Record / Friday 2026-07-31 payment. These dates and group membership independently align with the YSPC fund row's declaration, ex and payment dates, while contradicting that row's published 07/30/2036 record-date year. This is a second first-party schedule-level page, not a transaction-specific correction notice, document byte hash, 19a-1 statement or broker tax confirmation. The schedule warns that dates are subject to change; a generic group schedule alone cannot certify a specific distribution's final record date.

Evidence effect: SOURCE_DATE_CONFLICT now has an issuer-published 2026-07-30 schedule candidate and a conflicting issuer-published 2036 fund-table cell. Do not silently normalize the raw 2036 cell or promote the schedule candidate to a verified canonical date. Preserve both URLs, table scope and retrieval date; seek issuer correction or transaction-specific dated notice before resolution. ROC IMPORT WRITE HOLD and no-write restriction remain unchanged. No MintTap ingestion or actual customer harm was observed.
