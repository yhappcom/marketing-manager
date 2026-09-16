# Ad Value-Block Registry Template

Use one row per workflow × value block × ad format/trigger candidate.

| Product | Workflow | Value block | Semantic first value already reached? | Ad format | Candidate trigger | Genuine natural transition? | Genuine wait state? | Splits action→result/comprehension? | Frequency rule | Revenue metric | Retention/useful-return guardrail | UX/task guardrail | Platform-policy source/date | Evidence state | Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| MintTap | first portfolio setup | data path → personalized result → comprehension | No | — | — | No | No | Yes if inserted | none before first value | n/a | first-value reachability | task completion/comprehension | — | baseline | PROTECT |

## Decision vocabulary
- `PROTECT` — no interruptive monetization inside this block.
- `ELIGIBLE_AFTER_BLOCK` — ad may be evaluated only after completion of the block.
- `WAIT_STATE_ELIGIBLE` — app-open candidate only while a real load/wait state persists and only for sufficiently established users.
- `TEST_LATER` — plausible but insufficient traffic/evidence.
- `REJECT` — trigger is not a natural boundary or creates material trust/task risk.
- `UNKNOWN` — insufficient product/runtime evidence.

## Rules
- First Value Before Monetization.
- Value Block Integrity.
- Transition, Not Interruption.
- Wait-State Fit for App Open.
- Revenue Per Retained User, Not Impressions Per Session.
- Missing measurement remains UNKNOWN, never zero.
