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
