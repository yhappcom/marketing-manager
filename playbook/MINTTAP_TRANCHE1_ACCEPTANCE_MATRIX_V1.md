# MintTap Tranche-1 Cross-Functional Acceptance Matrix V1

Date: 2026-09-16
Status: operational acceptance framework; implementation not implied
Release reference: MintTap 1.0.29 unless newer first-party evidence supersedes it

## Purpose
Convert the six current activation-remediation candidates into falsifiable acceptance conditions. This is not a feature wishlist. A change graduates only if it reduces a known Promise-to-Value discontinuity without violating product/data invariants or monetization guardrails.

## Validation stages
- V1 Route discovery: fresh target user can identify the correct next path without coaching.
- V2 Personal first value: user reaches a result based on their own/test portfolio data.
- V3 Comprehension: user correctly explains at least one meaningful portfolio result.
- V4 Return rationale: user can state a credible future reason/moment to reopen MintTap.

Form completion, sign-in, import completion, or transaction save alone are not activation.

## Matrix

| Change | Primary failure addressed | V-stage target | Acceptance evidence | Regression / invariant gate | Monetization gate | Decision if failed |
|---|---|---|---|---|---|---|
| Defer notification permission | permission request before demonstrated value; setup burden | V1/V2 | fresh user reaches first-data path without an unrelated permission interruption; notification opt-in is requested only when its benefit is contextual | notification capability remains discoverable/configurable later; existing notification state is preserved | no ad substitution for removed permission interruption | redesign request timing/context, not copy-only polishing |
| Auto-select sole portfolio | redundant choice after initial portfolio creation | V1/V2 | when exactly one eligible portfolio exists, first transaction/import path does not require redundant portfolio selection | never silently choose when multiple eligible portfolios exist; preserve portfolio identity and transaction ownership | none | revert auto-selection if ambiguity/invariant risk exists |
| Expose Import + Manual as peer first-data paths | Import discoverability hidden behind transaction UI | V1/V2 | fresh existing-holder recognizes Import without coaching; fresh simple-entry user recognizes Manual without being forced through Import | Import validation/duplicate/error safeguards unchanged; Manual remains available; no unsupported file promise | first-data choice block is protected from interruptive ads | revise labels/hierarchy if users choose by misunderstanding rather than fit |
| Resume Demo protected-action intent through sign-in/setup | Demo creates intent but current protected action terminates in read-only messaging | V1/V2 | user attempting a protected Demo action can authenticate/setup and return to the intended real action with context preserved | Demo data never becomes user-owned real data; auth/security/onboarding invariants remain intact; stale intent expires safely | transition remains ad-free until resumed action/first-value block completes | fall back to explicit post-auth continuation choice if exact resume is unsafe |
| Semantic first-value telemetry | current measurement cannot reliably distinguish setup completion from value attainment | V2/V3 | one aggregate-safe event/derived state represents first personal result plus defined semantic boundary; deduplication semantics documented | no UID/email/raw portfolio holdings/stable pseudonymous rows exported; missing remains unknown; existing users not backfilled by guess | event can later join aggregate retained-user/ad-revenue analysis | do not launch acquisition experiments until boundary is measurable enough to interpret |
| Move Home inline banner after complete interpretation block | current Summary→Ad→Positions placement splits likely comprehension chain | V3/V4 | fresh user can interpret Summary→Positions as a continuous block; ad remains visible only after that block where layout/performance remain acceptable | Demo remains protected; consent gating and ad lifecycle remain valid; no accidental-click proximity introduced | no increase in ad pressure; measure aggregate revenue per retained/returning user, not CTR alone | restore/retune placement if comprehension does not improve or monetization/layout regression is material |

## Cross-functional stop gates
A Tranche-1 change must not graduate merely because it looks simpler. Stop or redesign when any of the following occurs:
1. Product/data invariant cannot be stated or verified.
2. A fresh target user needs moderator guidance to discover the intended route.
3. The change increases choice ambiguity while reducing taps.
4. Store/demo promise becomes stronger than the real path supports.
5. First-value telemetry would require identifying or investment-level user exports.
6. Monetization enters before the first personal-value/comprehension block completes.
7. Small-N observations are converted into population percentages.

## Evidence package per change
Minimum handoff:
`change ID → failure evidence → V-stage → fresh-user task observation → invariant review → telemetry definition → ad/value-block classification → decision record`

## Recommended implementation order
This is dependency order, not an impact ranking:
1. State invariants and telemetry boundary.
2. Defer notification permission and remove redundant sole-portfolio choice where safe.
3. Surface Import/Manual peer routes.
4. Implement safe Demo intent continuation.
5. Relocate Home ad after a complete comprehension block.
6. Run fresh-user V1–V4 validation before controlled acquisition restart.

## Interpretation
Tranche 1 succeeds only when the system makes the shortest truthful route to personal value easier. Fewer screens/taps are secondary. The governing criterion is lower semantic friction without hidden product, privacy, or revenue debt.