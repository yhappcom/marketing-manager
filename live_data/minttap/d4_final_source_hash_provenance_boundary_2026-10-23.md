# MintTap D4 — finalSourceHash is a row fingerprint, not issuer-document provenance (2026-10-23)

**Decision: ROC IMPORT WRITE HOLD.** Source-only evidence; no Firebase/production write or actual document-revision observation.

Verified release: `yhappcom/yieldmax_tracker@1.0.29`, `functions/scripts/import_final_roc_csv.js`, blob `688dbc4b8f4824c784ced73bd3d8ceb74a7decb0`, lines 247–263, 326–359.

`buildFinalSourceHash` SHA-256 hashes a pipe-joined set of row fields (ticker, optional original ticker, ex/record/payable dates, total, ROC amount/percent, sourceType, sourceFile, fund, CUSIP). It does **not** hash the issuer PDF/XLSX bytes or incorporate issuer publication/revision ID, document SHA, or tax-year provenance. The field name must not be treated as a source-document authenticity or revision proof.

A source-faithful offline probe using the release hash function confirms: synthetic document revision/byte-hash metadata alone leaves the row hash unchanged; a changed ROC amount changes the hash; changing only the sourceFile label also changes the hash. These are deterministic function properties, not claims of an actual issuer revision.

Earlier in-memory `applyRows` probes substituted `SHA256(JSON.stringify(row))` for this function. Repeating the reimport/source-downgrade and 401-row partial-batch tests with the exact release hash preserves their behavioral findings, but earlier mock digest values must **not** be represented as production digest parity.

**Acceptance:** store separately (a) verified issuer-document URL and bytes digest, publication/revision/as-of, tax-year and source class; (b) normalized row fingerprint; (c) import batch manifest and approval/supersession history. Same-hash replay should be a no-op absent an explicit audit action. Actual operator data and Firestore Emulator validation remain required. No overall decision closed.
