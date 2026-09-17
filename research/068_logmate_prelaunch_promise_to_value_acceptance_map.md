# 068 — LogMate Pre-launch Promise-to-Value Acceptance Map

Date: 2026-09-17
Status: CANONICAL MARKETING RESEARCH

## Why this exists

LogMate is pre-launch and its current repository contains a mixture of implemented presentation/UI shells, confirmed product contracts, open decisions, POC evidence, and functionality that is explicitly not implemented. Marketing must not collapse these evidence states into one generic notion of “feature.”

The current product SOT (`yhappcom/logmate` `MASTER.md`, reviewed 2026-09-17) says that Opening/Auth UI, Home, Recent/Activity/Totals/Customize detail entry and Settings/date-locale handling exist, but Home flight/time/activity/totals remain mock/presentation shell. Canonical ledger, persistence repository, Calculation/Aggregation Engine, production importer, backup and server Sync connection do not currently exist. Manual-first, import-optional, local-first, paper-logbook-first, native + tablet/EFB PWA and canonical-semantics/customizable-presentation are confirmed product directions, not proof that their complete user journeys are implemented.

Latest accessible `main` commit reviewed: `b551ce434ad72b1895033e0f3617c73b026d40ea` (`feat(view-logbook): implement customize v1 catalog`, 2026-09-13).

## Platform-policy anchor

Apple App Review Guidelines require app information/metadata to be complete and accurate and state that misleading marketing of content or services the app does not actually offer can lead to removal. Apple also says subtitles should not make unverifiable product claims. Google Play Store-listing guidance likewise requires descriptions and graphic assets to accurately represent app functionality and prohibits false or misleading functionality claims.

Marketing therefore needs a stricter internal claim gate than “the roadmap says we plan to build it.”

## Evidence ladder for pre-launch claims

### L0 — concept / intent
A desired outcome, roadmap item, OPEN decision, historical plan, reference format, or target architecture.

Marketing use: internal positioning research only. Do not present as a current product capability.

### L1 — confirmed product contract
MASTER/spec says the behavior is a confirmed product requirement, but production implementation is absent or incomplete.

Marketing use: may inform future messaging architecture and launch preparation. Do not use present-tense capability wording.

### L2 — implemented shell / presentation evidence
A screen, navigation path, mock-session projection, static presentation, or adapter exists, but the underlying durable workflow/value engine is absent.

Marketing use: screenshots may be useful for internal creative planning, but must not imply that mocked values or non-durable flows are production capability. A visible UI is not evidence of user value.

### L3 — implemented functional path
The required data model/engine/persistence and end-to-end path exist in current production-target code.

Marketing use: capability claim candidate, subject to verification. Not yet an ease, reliability, offline, sync, accuracy or retention claim.

### L4 — verified functional path
The implemented path passes appropriate build/device/platform/scenario validation with evidence matching the claim boundary.

Marketing use: bounded capability claims can graduate. Claim wording must stay inside the verified environment and semantics.

### L5 — target-user first-value evidence
Representative pilots can independently complete the workflow, reach a personally meaningful result and correctly understand it.

Marketing use: supports stronger benefit/comprehension claims. Small-N qualitative evidence identifies failure modes; it does not justify population percentages.

### L6 — useful-return / sustained-value evidence
Users return for the core job and the return behavior is measured with adequate telemetry coverage.

Marketing use: supports retention-oriented promise families and creates the first credible basis for evaluating ad-bearing usage without sacrificing product value.

## Current LogMate promise map

| Promise family | Current evidence | Marketing state | Graduation requirement |
| --- | --- | --- | --- |
| “Personal pilot logbook / paper-logbook companion” | Product definition and philosophy CONFIRMED | Positioning concept only until core ledger is functional | durable manual record path + meaningful logbook view + target-pilot comprehension |
| “Record flights manually” | Manual-first CONFIRMED; canonical ledger/persistence absent | NOT CLAIMABLE as current working capability | FlightRecord persistence + edit/delete/recovery semantics + end-to-end verification |
| “Search your flights/crew/routes” | V1 scope CONFIRMED; production ledger/search engine absent | NOT CLAIMABLE | persisted realistic data + search implementation + representative query validation |
| “Automatic totals/statistics” | scope confirmed; Home totals currently mock/presentation shell; calculation engine absent | NOT CLAIMABLE | canonical calculation semantics + implementation + test vectors + user comprehension |
| “Customize logbook columns” | Customize V1 catalog/mock-session projection IMPLEMENTED; configuration persistence/Sync not implemented | SHELL-ONLY; do not imply durable customization | persistence + reopen/restart behavior + projection invariants + device validation |
| “Import airline/CrewConnex/CSV/XLSX records” | Import-optional direction and source scope confirmed; production importer absent | NOT CLAIMABLE | production parser/reconciliation + provenance + duplicate handling + real-source validation |
| “Works offline / local-first” | local-first is confirmed architecture direction; production persistence incomplete | NOT CLAIMABLE as a reliability promise | core workflow verified under network loss/restart and supported-platform matrix |
| “Sync across devices” | owner Sync is in scope; server Sync connection absent | NOT CLAIMABLE | persistence + identity/ownership + conflict semantics + cross-device verification |
| “Backup and restore” | support direction confirmed; production backup absent | NOT CLAIMABLE | export/restore implementation + corruption/recovery test evidence |
| “iPhone/Android + tablet/EFB PWA” | platform target confirmed | TARGET, not parity claim | supported builds + equivalent semantic/calculation outcomes + platform-specific acceptance |
| “Professional/regulatory logbook compliance” | product explicitly does not replace official airline systems/legal career proof; multiple output profile families tracked but renderer/acceptance incomplete | PROHIBITED unless exact jurisdiction/format evidence later exists | separate regulatory/legal evidence gate; never infer from field resemblance |

## Core marketing rule: Promise State Must Follow Product State

`roadmap ≠ contract ≠ UI shell ≠ functional path ≠ verified path ≠ first value ≠ useful return`

Every public promise must cite the highest evidence rung actually reached. A higher-level benefit cannot be inferred from a lower-level implementation artifact.

## Screenshot rule for pre-launch work

A screenshot is evidence that a surface can be rendered, not that the represented workflow works. For LogMate, current Home flight/time/activity/totals mock content must not be used in Store/community creative in a way that implies production calculation, persistence or real user data behavior.

Before a screenshot becomes launch-eligible, record:
1. which current build/commit produced it;
2. whether displayed data are fixture/mock/demo/realistic synthetic data;
3. which represented actions are functional;
4. which benefit statement the screenshot is intended to support;
5. the evidence rung for that statement.

## First-value acceptance map

Do not choose the final launch headline yet. First establish which core job reaches L5 earliest.

Candidate manual-first chain, because Manual-first is a confirmed product principle:

`open app → local access/account boundary → create first real FlightRecord → persist → reopen/view it in Logbook → see a correct personally relevant derived result → explain the result → know why to return`

This is a candidate validation chain, not a declaration that each step currently exists.

Candidate first-value outcomes should be tested independently once implementation exists:
- “My flight is safely recorded and still here.”
- “I can see it in a logbook structure useful for paper transcription.”
- “A total/search result saves me work I would otherwise do manually.”

The earliest technically available result is not automatically the strongest marketing first value. Prefer the result pilots recognize as a completed professional job.

## Pre-launch acceptance gate

A promise family can enter Store/community launch planning only when all are true:
- current implementation reaches at least L3;
- L4 verification matches the intended platform and semantic boundary;
- no MASTER OPEN item is being silently represented as resolved;
- the promise does not imply legal/regulatory status that the product does not have;
- screenshots depict the same functional state being claimed;
- the acquisition promise points to a first-value path that can be observed;
- for benefit/ease language, target-user L5 evidence exists.

## Advertising boundary

No ad-revenue optimization should be designed around LogMate shell screens. First identify a complete recurring value block after L5/L6 evidence. Ads may then be evaluated only at boundaries that do not interrupt recording, correction, review, import reconciliation, critical search, or paper-transcription tasks. “There is screen space” is not an ad-placement justification.

## Reusable company principles added

1. **Roadmap Is Not Marketing Inventory.** Planned/confirmed scope cannot be marketed as present capability.
2. **Rendered Is Not Functional.** A screen or screenshot does not prove the workflow behind it.
3. **Functional Is Not Valuable.** End-to-end implementation still needs target-user first-value evidence before benefit/ease claims.
4. **Claim State Follows Evidence State.** Public wording cannot outrun the weakest boundary necessary to make the claim true.
5. **Choose the Launch Promise After First Value, Not Before It.** For a niche professional product, the first launch message should emerge from the first reliably completed specialist job.

## Immediate next work

1. Re-check LogMate after the next production-domain implementation milestone and move promise families up the ladder only with code/test evidence.
2. When canonical FlightRecord persistence exists, build a manual-first fresh-pilot first-value observation protocol.
3. Do not spend Store creative variants or community launch effort on Import/Sync/backup until their functional paths reach L4.
4. Keep regulatory/legal positioning explicitly bounded: companion/reference tool, not official airline system or legal career-proof replacement.
5. Once one core job reaches L5, derive the first Store/community promise family and only then design source→Store→first-value continuity.

## Sources reviewed

- LogMate `AGENTS.md` and `MASTER.md`, accessed 2026-09-17.
- LogMate latest accessible `main` commits, accessed 2026-09-17.
- Apple App Review Guidelines, current page accessed 2026-09-17.
- Apple App Store Asset Best Practices, current page accessed 2026-09-17.
- Google Play “Best practices for your store listing”, current page accessed 2026-09-17.
