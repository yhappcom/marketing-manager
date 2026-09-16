# 061 — Sparse-Niche Activation Observation Protocol

Date: 2026-09-17
Status: OPERATIONAL RESEARCH COMPLETE; behavioral execution pending

## Question
How should MintTap compare first-data route discovery and execution with a very small specialist sample without turning qualitative observations into fake quantitative evidence?

## Evidence basis
Nielsen Norman Group distinguishes qualitative usability research from quantitative benchmarking: qualitative studies are for discovering problems and opportunities, while small-N averages/percentages are not reliable estimates. NN/g also recommends realistic tasks that express a user goal without giving away the interface path. Severity coding is useful for prioritizing observed issues. Google HEART is useful as a goal-to-signal-to-metric framework, but its large-scale behavioral metrics should not be mechanically transplanted into a sparse qualitative study.

## Core design
### Study D — route discovery
Purpose: discover whether a fresh target user can identify an appropriate first-data route without being taught Manual or Import.

Start boundary: authenticated, post-onboarding, zero-data state, same app build and same fixture facts.
Stop boundary: participant commits to a plausible first-data route, reaches an unrecoverable stall, explicitly asks for help, or moderator terminates for safety/time.

Moderator task language: state the real-world goal (begin tracking the supplied existing YieldMax holdings/history) without naming Add Transaction, Settings, CSV, XLSX, Manual, Import, or a navigation destination.

Observe per participant:
- first visible action and stated rationale;
- whether Manual, Import, Settings, or another route is noticed spontaneously;
- backtracks/search loops;
- labels or concepts misunderstood;
- help request or moderator intervention;
- route selected and confidence in why it fits the supplied situation;
- issue codes S0–S3 with evidence note.

Do NOT publish a discovery percentage from a 5–8-person qualitative round. Record participant-level evidence and recurring failure patterns.

### Study E — intrinsic execution
Purpose: compare friction after the route is already known, using economically equivalent N1 facts.

Manual start: participant is placed at the add-transaction route with N1 facts available.
Import start: participant is placed at TransactionImportReviewScreen with the prepared canonical N1 file available.
Stop: semantic first value is successfully displayed and the participant can explain one meaningful personalized result, or the task is abandoned/blocked.

Observe:
- completion/abandonment as participant-level facts;
- wrong turns and recoveries;
- validation/review misunderstandings;
- moderator intervention;
- confidence before commit/save;
- whether personalized result is found after data entry/import;
- V3 comprehension: participant explains what one displayed portfolio result means in their own words;
- time may be recorded as descriptive context for each participant, not averaged into a performance claim at small N.

## Severity code
S0 — observation/no demonstrated friction.
S1 — minor friction; user self-recovers without changing task outcome.
S2 — substantive confusion or repeated wrong path; completion remains possible but trust/comprehension is materially weakened.
S3 — activation blocker; product behavior or information architecture prevents independent first value or produces a materially wrong understanding.

Severity is a product-prioritization code, not a statistical score.

## Evidence ledger row
For every meaningful incident record: participant alias; target-user qualification; study D/E; build; locale/currency; boundary where incident occurred; observable behavior; exact neutral follow-up if any; severity; self-recovery yes/no; moderator intervention yes/no; affected V-stage; proposed hypothesis; whether repeated independently.

## Decision rules
- One clear product-caused S3 is sufficient to investigate before scaling acquisition.
- Repeated independent S2 of the same mechanism is a remediation candidate.
- Do not choose Manual vs Import from mean task time in a tiny sample.
- Do not interpret absence of an observed problem as proof of absence.
- Discovery failure and execution failure remain separate diagnoses.
- A route is not activation-successful until semantic first value plus comprehension is reached.
- Store/community ease or speed claims require end-to-end evidence including preparation work when that work is part of the claim.

## New operating rules
- **Participant Evidence Before Percentages** — small specialist rounds produce incidents and mechanisms, not population rates.
- **Goal Language Before UI Language** — task wording describes the user's job, never the control to click.
- **Boundary Discipline Before Timing** — elapsed time is interpretable only when start/stop boundaries and excluded preparation are explicit.
- **Comprehension Is an Outcome** — task completion without correct interpretation is not V3 success.
- **Intervention Is Data** — moderator help must be logged; assisted completion cannot be silently counted as independent success.

## Application to MintTap
Study D directly tests the 060 finding that the release teaches Manual in the zero-data Transaction History path while Import is nested in Settings. Study E then isolates the execution quality of each route after discovery has been removed as a confound. This prevents a technically mature Import engine from being judged by its hidden placement, and prevents a discoverable Manual route from being judged superior merely because the UI taught it first.

## Remaining unknowns
Behavioral results remain uncollected. Post-Import-save navigation to personalized Home remains code-unverified in this run. Localized/KRW Import comprehension remains untested. These are execution targets, not facts to infer from the protocol.