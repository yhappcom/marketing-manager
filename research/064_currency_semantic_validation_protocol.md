# 064 — Currency Semantic Validation Protocol

Date: 2026-09-17
Status: Operational protocol complete; first-party MintTap wording audit remains blocked by unavailable production repository access in the current GitHub installation.

## Why this exists
063 established that non-USD Import creates a different activation workload because exchangeRate is required. The next risk is semantic, not merely syntactic: a user can enter a positive number that passes validation while misunderstanding the direction, unit, date basis, or relationship between USD unit price and reporting currency.

A parser-valid value is therefore not evidence of a financially understood input.

## Semantic correctness boundary
For currency-bearing financial input, distinguish four states:
1. syntactic validity — value is present and parseable;
2. domain validity — value satisfies product constraints such as positivity;
3. semantic comprehension — user understands what the number represents and its direction/unit/date basis;
4. result comprehension — user understands how that input affects the personalized result.

Marketing and activation claims must not jump from 1–2 to 3–4.

## Neutral validation protocol
For K1/K2, do not explain the rate before observation. Record the participant's own interpretation of:
- what one unit of the quoted rate means;
- whether the expected direction is KRW per USD or the inverse;
- whether the rate belongs to transaction date, import date, current date, or another basis;
- whether unit price remains USD while the account/reporting currency is KRW;
- how the rate affects the post-import result.

If clarification is required, mark the independent boundary as failed before providing help. Moderator-assisted completion is diagnostic evidence, not independent activation success.

## Error-message rule
An error message that says only that exchange rate is missing/invalid may establish a validation constraint but not the intended financial meaning. A semantically adequate recovery path should let a target user determine what value is required without external interpretation.

Classify incidents:
- S1: momentary hesitation, correct self-recovery from product information;
- S2: material uncertainty, wrong initial interpretation, or external lookup caused by insufficient semantics, but eventual independent recovery;
- S3: wrong financially meaningful input accepted, inability to proceed without moderator help, or materially incorrect result interpretation attributable to the product semantics.

## Marketing consequence
Until K2 demonstrates independent preparation and result comprehension, Korean Store/community claims should remain capability-level: localized/non-USD Import is supported. Avoid claims equivalent to effortless, automatic, or simple KRW import when the exchange-rate preparation boundary is unverified.

## First-party wording audit status
The canonical marketing repository documents the schema and workload, but the current GitHub installation does not expose the MintTap production source repository. Therefore the exact live UI/help/error wording for exchange-rate direction and unit cannot be re-verified in this run. Do not reconstruct it from memory or localized headers.

When source access is available, audit exact strings/screens for:
1. field label and hint;
2. template header/comment/instruction;
3. missing-rate error;
4. non-positive/invalid-rate error;
5. review representation before save;
6. any post-import explanation of currency conversion.

For each surface classify: explicit / inferable / ambiguous / absent for direction, unit, date basis, and USD-price-vs-reporting-currency distinction.

## Reusable principle for future apps
**Validation Success Is Not Semantic Success.** In finance, aviation, health, measurement, tax, and other specialist products, domain-valid input can still encode the wrong user meaning. Marketing claim ceilings should follow semantic comprehension, not parser acceptance.

## Repository action
The MintTap activation observation sheet is extended with K1/K2 boundaries and explicit currency-semantic evidence fields so the next target-user session can capture this risk without redesigning the study.