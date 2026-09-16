# MintTap First-Value Validation Fixtures V1

Date: 2026-09-17
Status: controlled-validation specification; values are synthetic and must not be presented as real investment examples or advice

## Purpose
Provide repeatable, privacy-safe fresh-user tasks for V1 route discovery, V2 personal first value and V3 comprehension without asking participants to expose real brokerage or investment records.

## Fixture principles
- synthetic identities and transactions only;
- small enough to inspect manually;
- enough variation to expose route/meaning problems;
- same economic facts across Manual and Import for direct route comparison;
- no expected-answer hints in discovery tasks;
- no coaching on where Import/Manual controls are located during discovery studies;
- fixture values are validation data, not claims about YieldMax performance.

## Fixture M1 — Manual simple holder
Scenario: a new user wants to track one existing YieldMax position.

Synthetic input:
- ticker: TSLY
- purchase date: 2026-08-03
- quantity: 10
- purchase price: USD 31.00

Participant task:
"Use MintTap to start tracking this holding. Stop when you believe the app is already showing you something useful about this portfolio. Tell the observer when that happens."

M1 remains a simple-holder diagnostic. It must **not** be compared directly against I1/N1 Import timing because the economic facts and transaction count differ.

Observe:
- whether Manual path is found without coaching;
- whether redundant portfolio choice appears;
- whether unrelated permission/ad interrupts the value block;
- what screen/result the participant identifies as useful;
- whether the participant can explain one visible result in their own words.

## Fixture N1 — normalized three-transaction dataset

Use N1 whenever Manual and Import are compared directly.

| date | ticker | type | quantity | price USD |
|---|---|---|---:|---:|
| 2026-06-05 | CONY | buy | 10 | 12.00 |
| 2026-06-12 | TSLY | buy | 8 | 9.50 |
| 2026-07-03 | CONY | buy | 5 | 11.40 |

Synthetic acquisition cost is USD 253.00. This is only a fixture-integrity arithmetic check, not an expected MintTap output.

### N1-Import
Use the schema-verified file `playbook/fixtures/minttap_i1_usd.csv` with a USD-default test account.

### N1-Manual
Give the same three transaction facts in a neutral human-readable table/text record and have the participant enter those exact three buy transactions manually. Do not require memo entry.

## Study D — unprompted route discovery

Participant task:
"These are transactions you already have in another record. Use MintTap to start tracking them. Stop when you believe the app is already showing you something useful about the portfolio."

Do not mention Import, Manual, CSV, upload, or the preferred route. Route discovery is part of V1.

Observe:
- first route attempted;
- Import/Manual discovery without coaching;
- file/schema/error comprehension if Import is chosen;
- review/confirmation confidence;
- first useful result identified by participant;
- comprehension of at least one result.

Do not use Study D for a clean route-speed comparison because participants self-select routes.

## Study E — controlled route execution

Use N1 for both routes. Assign/counterbalance Manual and Import rather than allowing route self-selection. Start timing after the participant is at the relevant route-entry surface. For Import, the prepared schema-valid N1 CSV is already available; for Manual, the N1 facts are visible in neutral human-readable form.

End timing at semantic V2 first value, not at file selection, parse success, transaction save, or review completion.

Record errors, support need, S0–S3 severity, review confidence and V3 comprehension in addition to duration. A faster route with worse comprehension or material errors is not a winner.

Prepared CSV execution time excludes file/template preparation. Any later claim about end-to-end Import speed must measure preparation burden separately.

## Fixture I2 — Import guardrail
Use only after baseline N1 to test error handling, not first-route discoverability.

Synthetic malformed conditions may include one at a time:
- unsupported header;
- invalid quantity;
- duplicate row according to the product's actual documented duplicate logic.

Do not invent expected duplicate behavior. Engineering/product must supply the canonical rule before this fixture is scored.

## Observer record
For each participant record only:
- fresh-to-current-flow: yes/no;
- fixture/study ID;
- route first attempted or assigned route;
- V1 discovered without coaching: yes/no/ambiguous when applicable;
- V2 first-value boundary reached: yes/no;
- V3 participant explanation: concise paraphrase, excluding personal data;
- first hesitation location;
- wrong-turn location;
- S0–S3 severity;
- participant-stated return rationale (V4 qualitative evidence);
- observer notes.

Do not record participant brokerage data, real holdings, account identifiers or screenshots containing personal financial information.

## Stop rules
- A product-caused S3 activation blocker can trigger redesign without waiting for a percentage estimate.
- Independent recurrence of the same S2 should be promoted for remediation review.
- Do not report small-N success rates as population estimates.
- Do not change acquisition strategy solely because a fixture participant completed the task.
- Do not compare route timing unless economic facts and timing boundaries are equivalent.

## Acceptance linkage
M1 primarily tests: sole-portfolio choice, Manual route, notification timing, first-value telemetry and ad/value-block continuity.

N1 Study D primarily tests: Import/Manual peer exposure and unprompted route semantics.

N1 Study E primarily tests: intrinsic Manual-vs-Import execution friction under equivalent economic facts.

Both can later test Demo continuation only through a separate task; Demo must never be mixed into the baseline Manual/Import fixture because it changes prior exposure.

See `research/059_route_discovery_vs_route_efficiency_experiment_design.md` for the causal-design rationale.