# MintTap First-Value Validation Fixtures V1

Date: 2026-09-17
Status: controlled-validation specification; values are synthetic and must not be presented as real investment examples or advice

## Purpose
Provide repeatable, privacy-safe fresh-user tasks for V1 route discovery, V2 personal first value and V3 comprehension without asking participants to expose real brokerage or investment records.

## Fixture principles
- synthetic identities and transactions only;
- small enough to inspect manually;
- enough variation to expose route/meaning problems;
- same economic facts across Manual and Import where practical;
- no expected-answer hints in the participant task;
- no coaching on where Import/Manual controls are located;
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

Observe:
- whether Manual path is found without coaching;
- whether redundant portfolio choice appears;
- whether unrelated permission/ad interrupts the value block;
- what screen/result the participant identifies as useful;
- whether the participant can explain one visible result in their own words.

## Fixture I1 — Import existing holder
Scenario: a user already has several transactions and does not want to re-enter them individually.

Synthetic CSV content specification:
`date,ticker,quantity,price`
`2026-06-10,CONY,8,52.00`
`2026-07-15,CONY,4,48.00`
`2026-08-20,TSLY,6,30.00`

Participant task:
"These are transactions you already have in another record. Use MintTap to start tracking them. Stop when you believe the app is already showing you something useful about the portfolio."

Do not tell the participant to use Import. Route discovery is part of V1.

Observe:
- Import discovery without coaching;
- file/schema/error comprehension;
- review/confirmation confidence;
- whether Manual is mistakenly chosen despite multi-row source data and why;
- first useful result identified by participant;
- comprehension of at least one result.

## Fixture I2 — Import guardrail
Use only after I1 to test error handling, not first-route discoverability.

Synthetic malformed conditions may include one at a time:
- unsupported header;
- invalid quantity;
- duplicate row according to the product's actual documented duplicate logic.

Do not invent expected duplicate behavior. Engineering/product must supply the canonical rule before this fixture is scored.

## Observer record
For each participant record only:
- fresh-to-current-flow: yes/no;
- fixture ID;
- route first attempted;
- V1 discovered without coaching: yes/no/ambiguous;
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

## Acceptance linkage
M1 primarily tests: sole-portfolio choice, Manual route, notification timing, first-value telemetry and ad/value-block continuity.

I1 primarily tests: Import/Manual peer exposure, Import route semantics, first-value telemetry and ad/value-block continuity.

Both can later test Demo continuation only through a separate task; Demo must never be mixed into the baseline Manual/Import fixture because it changes prior exposure.
