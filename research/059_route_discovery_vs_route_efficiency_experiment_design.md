# 059 — MintTap Route Discovery vs Route Efficiency Experiment Design

Date: 2026-09-17
Status: OPERATIONAL DESIGN; built from verified 052/055/056/058 constraints

## Problem closed in this cycle

The existing M1 and I1 fixtures were useful for separate activation checks but were not economically equivalent. That makes a direct Manual-vs-Import timing comparison invalid: transaction count, ticker mix and economic facts change at the same time as the route.

A second confound was more subtle: one study cannot simultaneously measure unprompted route discovery and clean route execution speed if participants are explicitly assigned Manual or Import. Route assignment destroys discovery evidence; leaving route unassigned destroys route-level comparability because participants self-select.

## New separation: two different experiments

### Study D — discovery / route-choice study

Question: when given existing transaction records, can a fresh user discover an appropriate first-data route without coaching?

Use one neutral economic dataset for everyone. Do not mention Manual, Import, CSV, upload, or a preferred route in the task wording. Record first attempted route, hesitation, wrong turns and whether a usable personal result is reached.

This study produces qualitative discoverability evidence. It does **not** produce a clean Manual-vs-Import speed comparison because route choice is endogenous.

### Study E — execution-efficiency study

Question: once the route is known, what friction is intrinsic to Manual versus Import for the same economic facts?

Randomly/counterbalanced assign participants to a route, or use separate fresh participants. Give exactly the same transactions. For Import, provide a schema-valid file. For Manual, provide the same facts in a neutral human-readable record. Start timing only after the participant is at the route entry point, so navigation/discovery is excluded.

This study can compare observed steps, errors, support need and task duration descriptively. With sparse specialist samples, do not convert the result into population-level percentages or claims of statistical superiority.

## Normalized N1 economic dataset

Use the schema-verified 058 I1 facts for both routes:

| date | ticker | type | quantity | price USD |
|---|---|---|---:|---:|
| 2026-06-05 | CONY | buy | 10 | 12.00 |
| 2026-06-12 | TSLY | buy | 8 | 9.50 |
| 2026-07-03 | CONY | buy | 5 | 11.40 |

Synthetic acquisition cost represented by the fixture is USD 253.00 (=120 + 76 + 57). This arithmetic is a fixture integrity check only; it is not an expected app output because MintTap may show additional market/distribution-derived results.

### N1-Import

Use `playbook/fixtures/minttap_i1_usd.csv` exactly as the input file for a USD-default test account.

### N1-Manual

Give the participant the same three rows in a neutral table/text record, not a CSV file. They must enter those exact three buy transactions manually. Memo is optional and should not be required for route equivalence.

## Why the input medium differs

Economic equivalence does not mean presentation equivalence. Import necessarily needs a machine-readable file; Manual necessarily needs facts a human can transcribe. The invariant is the transaction facts, not the physical artifact.

Do not count time spent creating the CSV as user route time when the product itself offers a downloadable template and the study is specifically testing in-app execution. Template comprehension/preparation is a separate burden and belongs in Study D or a dedicated preparation study.

## Timing boundaries

For Study E:

- Manual start: participant has entered the Manual transaction-entry surface and has N1 facts visible.
- Import start: participant has entered the Import/file-selection surface and has the prepared N1 CSV available.
- End for both: semantic V2 first value — actual portfolio context, valid real test data, and a personalized calculated result successfully rendered.

Also record intermediate timestamps/events where observable: first record accepted, all source records accepted, review/confirmation complete, Home/personal-result render.

## Decision rules

1. **Discovery and efficiency are separate causal questions.** Never report one as evidence for the other.
2. **Same facts before route comparison.** If ticker, dates, quantities, prices, currency, or transaction count differ, timing is not a route-only comparison.
3. **Prepared-file advantage must be named.** N1 execution timing excludes file preparation. A separate preparation burden must be measured before claiming end-to-end Import superiority.
4. **No speed-only winner.** A faster route that creates more S2/S3 errors, lower review confidence, or lower V3 comprehension is not preferred.
5. **No sparse-N population claim.** Use results to find failure modes and prioritize design, not to publish a percentage advantage.

## Marketing consequence

Claims such as “import your portfolio quickly” require end-to-end evidence that includes discovery and file preparation, not merely parser execution. Claims that Import is a better first-data route require evidence across discovery, execution, semantic first value and comprehension.

Until then, Store/community copy may state only verified capability (for example, CSV import availability where current implementation supports it), not comparative ease or speed.

## New operating principles

### Separate Discovery From Execution
Route discoverability and route efficiency require different experimental controls.

### Economic Equivalence Before Route Comparison
Compare routes only when they represent the same underlying portfolio facts.

### Prepared Input Is a Boundary, Not Free Work
If a test begins with a prepared file, file preparation is outside the measured boundary and must be disclosed.

### Comprehension Beats Stopwatch
Time-to-first-value is useful only when the resulting value is understood and trusted.

## Next

1. Audit the actual 1.0.29 Import UI path when first-party source becomes accessible: discovery → template → file selection → review/mapping → completion.
2. Update the controlled-validation playbook to use N1 for any direct Manual-vs-Import comparison while preserving M1 as a simple-holder diagnostic.
3. Build a separate template-preparation task if end-to-end Import speed becomes a Store/marketing claim candidate.
4. Verify KRW localized path separately; N1 is USD-only and must not be generalized to non-USD activation.