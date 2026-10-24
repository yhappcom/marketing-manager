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


## 2026-10-24 18:36 KST — observed migration/reconciliation problems in public pilot discussions

**SOURCE / observational community evidence, not pilot validation or posting permission.** Three independent 2026 Reddit discussion threads were directly opened and their original poster/comment context checked. These are unsolicited public accounts, not verified LogMate target-airline pilot interviews, representative demand estimates, or permission to contact/comment. The sources describe incumbent tools and workflows; they do **not** establish any defect in LogMate or a feature it already ships.

| Evidence ID and date | First-person problem / counterexample | D8 job and decision consequence | Evidence limit |
| --- | --- | --- | --- |
| P-01, 2026-01-17, r/Foreflight | User reports 10 years and 2200+ hours in ForeFlight and asks how to migrate while retaining as much as possible. Other commenters ask about signed entries and bulk track-log export; another reports paper → ForeFlight → LogTen import was easy. | Treat **field/attachment preservation and post-import comparison** as separate jobs; migration can be easy for some, so do not presume universal friction. Include signed entries and track-log scope as discovery questions, **not LogMate v1 promises**. | Self-reported thread; export limitations and vendor claims are not independently verified. https://www.reddit.com/r/Foreflight/comments/1qexim6/best_digital_logbook_to_migrate_to/ |
| P-02, 2026-02-15 with 2026-06-21 follow-up, r/Foreflight | Original poster describes >1000 paper-flight entries as daunting and asks about AI→CSV conversion. Commenters disagree: some advise manual transcription due to accuracy risk, others report using assisted templates **with repeated manual cross-checking**; a June follow-up describes 47 paper pages and 1000+ total hours taking multiple days plus a separate verification evening. | Prioritize **preview, per-field provenance, page/Previous Total reconciliation and explicit user confirmation** over promising one-click OCR/AI conversion. Interview for tolerable reconciliation time and proof of completeness. | Individual experience; the hours and time spent are self-reported; no validated AI accuracy or import conversion rate. https://www.reddit.com/r/Foreflight/comments/1r44elk/logbook_import_export/ |
| P-03, 2026-03-26, r/flying | A user requests ForeFlight→LogTen migration help. Replies offer both CSV self-import and vendor-assisted conversion, with one reporting a few corrections after importing years of entries. | Migration **success is not merely parser acceptance**: compare source and destination totals/fields, expose discrepancies, and permit correction before final confirmation. Vendor-assisted migration is a competing solution, not proof of LogMate demand. | Anecdotal reports, no checked source file, no consent for outreach; thread is archived and not a posting opportunity. https://www.reddit.com/r/flying/comments/1s4do56/logbook_transfer_foreflight_to_logten_pro/ |

**Evidence synthesis / scoped production decision:** Public problem signals now exist for high-cost history migration, fidelity of carried-over fields/attachments, and reconciliation labor. This advances D8 from *protocol-only* to **PUBLIC PROBLEM SIGNALS OBSERVED / PERMISSIONED PILOT VALIDATION STILL OPEN**; it does **not** close discovery, establish a quantified market, verify airline-roster-specific pain, or authorize product claims. Existing `PRODUCT CLAIM HOLD / DISCOVERY-ONLY` remains. The evidence also supplies a counterexample to blanket migration-pain claims: some users report smooth import or choose a spreadsheet/vendor service. No source proves a preference for LogMate over alternatives.

**Next highest-information-gain validation:** With permission, recruit actual airline pilots (not inferred from generic r/flying/Foreflight posts) and collect their existing export format and a *sanitized* representative page/CSV, current starting totals, field/attachment omissions, conflicting flight examples, reconciliation method, required device/EFB offline boundary, and how they verify a backup can be restored. Record role/airline context without collecting private roster identifiers, and compare the same pilot's first import versus repeated monthly update. Until those inputs exist, report community signals only; do not advertise working import, PWA, device transfer or Sync. No public post, contact, repo/product modification or user data ingestion occurred.
