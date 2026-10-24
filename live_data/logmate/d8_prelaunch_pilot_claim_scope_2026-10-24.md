# LogMate D8 — pre-launch pilot claim scope and evidence route (2026-10-24)

## Production decision

**D8 PRODUCT-READINESS HOLD; DISCOVERY-ONLY RESEARCH ROUTE READY.** Do **not** recruit pilots with a promise of working airline-file migration, automatic duplicate reconciliation, end-user full-ledger export/new-device recovery, production multi-device Sync, or installed EFB/PWA offline reliability. A source-grounded, permissioned *problem-discovery interview* may investigate those jobs without claiming the product performs them. No recruitment, community post, user contact, test-flight import, or product/account write was executed.

This is a current product-truth decision, not general marketing theory or an approval of the proposed engineering roadmap.

## Version-pinned evidence and authority (read-only)

- Product repository: `yhappcom/logmate`, **main HEAD `27f926aa6ea1e032dfa9affc598e8e41131eb092`**, read 2026-10-24. Its merge adds `docs/roadmap-reconciliation-2026-10-24.md`, marked **PROPOSED EXECUTION ROADMAP / OWNER APPROVAL REQUIRED**. The roadmap is an index, **not** a new product decision. `MASTER.md` and current domain contracts retain authority.
- `README.md` and `docs/LOGMATE_UNIFIED_PRODUCT_REVIEW.md`: native iOS/Android and tablet/EFB PWA targets, local-first personal pilot logbook, account-required UID owner; approved Local-First Manual Delta Sync **contract**, production server/app Sync **not implemented**.
- `MASTER.md` current implementation matrix (§16), current initiative/Phases (§19), and `docs/specs/import-contract.md`: supported narrow canonical manual Add/Edit and targeted View, durable sparse Previous Total/aggregate foundation; **general-user Custom Previous Total authoring/reconciliation UI open**, full Home data and Search open; Import menu only, no production parser/review/commit; imported data cannot silently overwrite user-confirmed current values; baseline-effective-boundary backfill requires review.
- `docs/roadmap-reconciliation-2026-10-24.md`: merged **B1 whole-ledger `.lbk` backup/restore foundation** and F1 local Sync persistence have bounded host/CI evidence; **user-facing export/share, device file handoff, new-device Bootstrap E2E, authenticated Sync receipt and production Sync remain open**. F1-R03 is NOT VERIFIED. This distinction corrects any reading of “backup/export not implemented” as “no backup code exists.”
- `docs/specs/offline-acceptance.md` and `MASTER.md` Stage 7: generated PWA artifacts and bounded simulator observations **do not** establish installed Safari/EFB offline/restart/storage-eviction/physical-device PASS. Signed-out offline Home is not an authorized general promise; offline re-entry applies to an established matching verified owner under its separate acceptance.
- `MASTER.md` Phase 8: final first-use Store previews require real production Home/entry/Import/Search/export screens; mock/placeholder tutorial must not be marketed as complete product.

## Claim/evidence gate by specialist job

| Pilot job / claim | Current product evidence | Allowed pre-launch research wording | Missing production proof |
| --- | --- | --- | --- |
| Manual flight entry, edit and paper-style page totals | Narrow canonical Add/Edit, targeted View, local aggregates and sparse Previous Total foundation implemented | Ask pilots to assess the *workflow concept*; bounded internal prototype observation only with build/test limitations | Exact-build device create→edit→reopen, page totals and baseline reconciliation, first/repeated value |
| Airline/CrewConnex/CSV/Excel migration | Import contract and source-specific profiles; **production import engine absent** | Ask about source formats, missing fields, time zones, review expectations and willingness to reconcile | Real parser → normalized candidate → duplicate/conflict review → user-confirmed commit → undo, sanitized fixture |
| Duplicate handling and Previous Total backfill | Contract requires ambiguity review and baseline cutoff safety; user-facing full reconciliation not complete | Test comprehension of duplicate/keep-both/baseline scenarios using explicitly *nonfunctional* examples | Same-flight collisions, date shifts, manual-overwrite protection, baseline crossing and repeated import on current build |
| Export, backup and device change | B1 whole-ledger format/restore foundation merged; **end-user export/share and Bootstrap E2E open** | Ask which export format, file custody and restore assurances pilots need | Actual device `.lbk` and spreadsheet round-trip, content/aggregate integrity, owner/replica checks, restore failure/retry |
| Tablet/EFB PWA offline operation | PWA packaging and limited simulator evidence; real installed EFB offline durability NOT VERIFIED | Ask for EFB restrictions, browser/OS, offline/restart expectations; **do not promise readiness** | Installed Safari/EFB clean-origin offline re-entry, storage/restart/eviction, signed-in owner boundary, exact-build parity |
| Multi-device Sync | Approved manual contract; F1 local persistence only; production authenticated server path absent | Ask about manual Sync cadence and trust in pending/receipt indicators | UID-scoped admission/receipt, pull/atomic apply, cursor, two-device convergence and no false Sync success |

## D8 decision route and evidence ledger

- **Now:** `RESEARCH FIRST / OBSERVE-TRIANGULATE`. Build a consent/permission-scoped pilot problem ledger; do not treat planned engineering capabilities or historical PoC as shipped value.
- **Interview capture (no production data required):** pilot role/context, actual logbook migration trigger, incumbent source/export format, which fields are truly available vs unknown, ambiguous-duplicate examples, baseline effective boundary, device/EFB offline restrictions, desired backup/restore behavior, and the first and *repeated* job that would make LogMate useful. Record the source/date, sample limitations, user wording, permission and contradictory cases. No fabricated participant counts or demand metrics.
- **Claim Registry state:** `manual-entry/local-core = narrowly implemented / device acceptance open`; `import/duplicate migration = contract only`; `Previous Total = core implemented / full authoring/reconciliation UX open`; `backup = foundation implemented / user export and device restore open`; `PWA offline = target and artifact / real device unverified`; `Sync = approved contract and local foundation / production not implemented`.
- **Stop/rollback:** any permission conflict, inference of missing flight time from block, silent overwrite, loss of baseline, unresolved identity/UID, unproven offline/restore claim, or pilot misunderstanding of a mock as a working feature. No public acquisition copy or Store screenshot of an unimplemented workflow.
- **Handoff:** product engineering owns actual importer/backup/Sync and device acceptance; Design Studio owns interview/mock interaction design; Web Manager owns future web publication. Marketing owns specialist demand evidence, truthful claims, permission and first/repeated-value evaluation.

## What closes the subgates

1. **Discovery evidence:** real, permissioned pilot responses with source/date and disconfirming examples; an uncontacted research protocol is **not** demand validation.
2. **Hands-on import claim:** source-specific exact-build import/duplicate/Previous Total review with synthetic/sanitized data and explicit failure/undo proof.
3. **Export/device/PWA claim:** user-facing `.lbk`/spreadsheet file round-trip, exact device restart/offline/storage tests and owner-bound restore; host CI alone is insufficient.
4. **Launch/Store claim:** verified screenshots, first-value and repeated-value pilot tasks, accessibility, platform parity and actual release state; do not convert proposal or build artifact into a launch claim.

## Queue priority and boundary

D1 actual Google Play Financial features submission and D2 AdMob operator integrity remain higher-priority operator-only blockers; D3 current community permission and D4 ROC importer safety remain HOLD. This D8 update advances an **accessible, newly merged product-truth decision** while those accounts/files are inaccessible. No pilot interviews, external marketing, production app/account operations or LogMate repository edits were performed.

Primary internal links:
- https://github.com/yhappcom/logmate/blob/main/MASTER.md
- https://github.com/yhappcom/logmate/blob/main/docs/roadmap-reconciliation-2026-10-24.md
- https://github.com/yhappcom/logmate/blob/main/docs/LOGMATE_UNIFIED_PRODUCT_REVIEW.md
- https://github.com/yhappcom/logmate/blob/main/docs/specs/import-contract.md
- https://github.com/yhappcom/logmate/blob/main/docs/specs/offline-acceptance.md
