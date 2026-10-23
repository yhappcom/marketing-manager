# MintTap D4 — final ROC CLI write-safety gate (2026-10-24)

## Decision
**D4 ROC IMPORT WRITE HOLD.** This is a newly verified *operational CLI guardrail gap*, not evidence of an actual live write, incorrect tax data, or an authorization to import. Do not run `--apply` against any real project.

## Pinned product evidence
- Read-only release: `yhappcom/yieldmax_tracker@1.0.29`, `functions/scripts/import_final_roc_csv.js`, Git blob `688dbc4b8f4824c784ced73bd3d8ceb74a7decb0`.
- The release `parseArgs` defaults to `apply:false`, `createMissing:true`, and `projectId:process.env.FIREBASE_PROJECT_ID || "yieldmax-tracker-7fc07"`. The latter is a **source default**, not proof of the operator's active Firebase target or credentials.
- The `--apply` branch sets `args.apply=true` without examining the flag value. Thus `--apply=false`, `--apply=0`, and `--apply=no` **all enable the write path**. `--create-missing=false` explicitly disables missing-document creation; absent that flag, creation is enabled when applying.
- The entry point initializes Firebase Admin with `admin.initializeApp({projectId: args.projectId})`, obtains `admin.firestore()`, then executes `applyRows` if `args.apply` and no validation errors. The script has a genuine default dry-run / parse-error guard (`if (!args.apply || errors.length > 0)`); it does **not** require a demo project, an emulator environment variable, a separate write confirmation, or an allowlisted project ID before applying.
- The script contains no `FIRESTORE_EMULATOR_HOST` check. Firebase's official Firestore Emulator guide documents that the Admin SDK targets the emulator when that environment variable is set, and recommends demo project IDs for tests: https://firebase.google.com/docs/emulator-suite/connect_firestore ; https://firebase.google.com/docs/reference/emulator-suite/rules-unit-testing/rules-unit-testing.testenvironmentconfig . A project ID alone is **not** proof of emulator routing.

## Reproduction — isolated exact-function execution
Extracted the **exact** `parseArgs` function body from the pinned source and executed it in a sandboxed V8 JavaScript function with an empty environment. Seven deterministic cases passed:
1. No arguments → dry-run, missing creation default true, source-default project ID.
2. `--apply` → apply true.
3. `--apply=false` → apply **true**.
4. `--apply=0` → apply **true**.
5. `--apply=no` → apply **true**.
6. `--apply --create-missing=false` → apply true, createMissing false.
7. `--apply --project-id=demo-minttap-d4` → apply true, explicit demo ID.

The entry-point write branch and Admin initialization were separately inspected in the same pinned source. **No CSV was imported, no Firebase SDK was executed, no Firestore Emulator was launched, and no production data was accessed or written.** The tests prove argument parsing and source-level write gating, not actual database routing or a production incident.

## Production acceptance / handoff
- Product-owned remediation: reject value-bearing `--apply=...` flags or implement explicit boolean parsing; require a deliberate `--apply` token plus positive write confirmation, allowlisted target, and project/emulator assertions; default to `createMissing:false` or require an explicit opt-in for creation; print target and effective flags before confirmation.
- **Test harness must be non-production by construction:** `demo-*` project ID, confirmed `FIRESTORE_EMULATOR_HOST` host:port, no production credentials, read-only production repository, and an abort when the emulator is not reachable. Do not run this release CLI with `--apply` merely to verify that it is dangerous.
- Controlled acceptance: 15 issuer Box 3 rows (10 numeric, 5 dash), unknown-vs-zero, validation bounds, calendar/date-year semantics, source-document and row hashes, ticker-renaming collisions, replay/downgrade, 401+ batch partial failure and recovery, 0/partial/full UI coverage. Capture pre/post document snapshots and write counts; never assert issuer dash means zero or a broker-confirmed tax year.
- This is a product-engineering dependency, not a marketing-copy workaround. Marketing Manager keeps D4 write HOLD until independent emulator and operator evidence exist.

## Cross-domain boundary
Marketing decision: truthful ROC finality/provenance and safe operational data handling. Product engineering owns CLI and Firestore guards; Web Manager and Design Studio are not material to the isolated CLI parsing gate. No ad or community action follows from this finding.

## 2026-10-24 release rename/dedup conflict-visibility acceptance — source-only

**New source-verified risk; D4 WRITE HOLD unchanged.** Re-read `yhappcom/yieldmax_tracker@1.0.29` `functions/scripts/import_final_roc_csv.js` (release blob `688dbc4b8f4824c784ced73bd3d8ceb74a7decb0`). Executed the **exact extracted** `sanitizeRenameMap`, `resolveMappedTicker`, and `applyTickerRenames` functions in an isolated JavaScript runtime; reproduced the release preflight `duplicates` expression. **Six explicit assertions passed (6/6)**; no Firebase SDK, CSV import, emulator or production access was used.

| Isolated case | Release result | Preflight `duplicates` |
| --- | --- | ---: |
| Same ticker+ex-date, conflicting 0.3 vs 0.4 ROC values | First row 0.3 retained; second silently dropped | 0 |
| Same conflicting rows reversed | First row 0.4 retained instead | 0 |
| `OLD → NEW` rename, OLD 0.3 before NEW 0.4, same ex-date | Mapped OLD 0.3 retained | 0 |
| Same rename collision, NEW 0.4 before OLD 0.3 | NEW 0.4 retained | 0 |
| Exact duplicate rows | One retained | 0 |
| Same ticker, different ex-dates | Both retained | 0 |

**Mechanism:** `applyTickerRenames` constructs a Map keyed by `mappedTicker|exDate` and keeps the **first** encountered row. `dedupedCount` reports the number discarded, but neither compares conflicting amounts/provenance nor emits the discarded rows. The later `main` calculation of `duplicates` occurs **after deduplication**, so it is zero for these cases and, under the function's normal invariant, cannot detect original duplicate/conflict inputs. Input order can therefore determine which contradictory issuer row survives preflight and would be eligible for a later write. This is **not evidence** of a conflicting row in the 15-row issuer fixture or any live import.

**Production gate:** Product engineering must distinguish identical replay from conflicting same-key rows, preserve pre/post-rename keys and both competing source rows, fail closed or require explicit source/revision precedence for conflicts, and report collisions in preflight before any write. Acceptance fixtures must reverse input order and include ticker-renaming convergence, different source revisions, identical duplicates, and distinct dates; the retained result for a conflict must not depend on arbitrary CSV ordering. Run on a confirmed `demo-*` Firestore Emulator target only after CLI write guards are repaired. Source-file/document digest and importer row hash remain distinct; do not infer issuer document authenticity from `finalSourceHash`.

## 2026-10-24 release applyRows replay/precedence/provenance/partial-commit acceptance — mocked execution

**Decision: D4 ROC IMPORT WRITE HOLD remains.** Re-fetched exact release `yhappcom/yieldmax_tracker@1.0.29` `functions/scripts/import_final_roc_csv.js` (blob `688dbc4b8f4824c784ced73bd3d8ceb74a7decb0`) and executed the *actual extracted* `applyRows` and `buildFinalSourceHash` function bodies with injected deterministic Firestore/Admin mocks. Four independent cases passed **4/4**. The hash stub preserved the source function's field composition but was **not cryptographic SHA-256**; this experiment verifies control flow and merge payloads, not hash cryptography, SDK/Emulator behavior or any live database effect.

| Controlled fixture | Observed source-function result | Production implication |
| --- | --- | --- |
| Existing final row, identical issuer row imported twice | Both invocations returned `writeCount=1`; `finalSourceHash` stayed equal but `finalImportedAt` changed | No hash-based no-op/replay gate: identical replay rewrites audit timestamps/batch ID rather than remaining write-idempotent. |
| Existing final `issuer_verified` ROC 40%, then synthetic `unverified_manual` ROC 0% | Existing row overwritten to source `unverified_manual`, `rocPercentageFinal=0` even with `createMissing:false` | No existing-source/authority/revision/finality precedence comparison; `createMissing:false` does **not** protect existing final data. This does not establish an actual issuer downgrade. |
| Initial row includes `originalTicker=OLD`, `fund=Alpha`, `cusip=12345`; second row omits all three | Old `rocFinalOriginalTicker`, `rocFinalFundName`, `rocFinalCusip` remained after second `set(...,{merge:true})`, although new `finalSourceHash` excluded `OLD` | Optional provenance fields are conditionally emitted but never cleared, so a later record can retain stale metadata inconsistent with its new hash input. |
| 401 distinct synthetic rows, second commit injected to fail | First 400 rows persisted in the mock; second `batch.commit()` threw, leaving 400 records; no completion manifest returned | Multi-batch import has no all-or-nothing envelope, durable checkpoint or recovery journal. Real Firestore batches are atomic **per batch**, not across separately committed batches. |

**Scope and external rule:** The mock modeled `batch.set(...,{merge:true})`, document existence and per-commit durability; it was deliberately disconnected from Firebase. Official Firestore semantics checked 2026-10-24: https://firebase.google.com/docs/firestore/manage-data/add-data (merge preserves unspecified existing fields), https://firebase.google.com/docs/firestore/manage-data/transactions (each write batch is atomic). No claim is made that any live importer run suffered a downgrade, stale metadata, replay or partial commit.

**Product-owned acceptance, integrated with earlier CLI/duplicate/missing-state gates:**
1. Guard explicit write target and `--apply` semantics before SDK initialization; run **only** on a verified `demo-*` emulator. Do not use production credentials or live data to test.
2. Preflight existing document source authority, issuer document revision, existing `finalStatus` and `finalSourceHash`. Identical replay must be a **zero-write no-op** with unchanged timestamps; conflicting or lower-authority input must be blocked pending explicit source precedence/approval, never silently overwrite a final row.
3. Define explicit replace/delete behavior for nullable `rocFinalOriginalTicker`, `rocFinalFundName`, `rocFinalCusip`; compare persisted fields with the hash's canonical input and source-document/row digests. Keep unknown Box 3 distinct from confirmed zero.
4. For 400/401+ rows, persist a non-production import manifest with planned rows, immutable source/revision identity, per-batch outcome, checkpoint and reconciliation/repair protocol. Inject failure on a later batch, rerun safely, verify no silent mixed revisions, no duplicate writes and truthful partial-completion status.
5. Only after emulator and release-build Yearly ROC coverage/date/authority acceptance plus sanitized operator evidence may the marketing claim registry move from **qualified/hold** to verified. Product engineering owns code and tests; Marketing Manager owns claims and decision queue. Design Studio/Web Manager are not material to this importer write-safety gate.
