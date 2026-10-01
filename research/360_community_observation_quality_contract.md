# Research 360 — Community Observation Quality Contract

Validated: 2026-10-01

## Decision

For sparse-niche community marketing, do not treat engagement as demand until distribution is observable. The measurement unit is not "post published" but an eligible observation with enough evidence to distinguish distribution from response.

Research 358–359 established permission/trust-state and censoring. This extension defines the measurement contract needed before MintTap or LogMate learns from Reddit outcomes.

## Authoritative platform facts

Reddit's Post & Comment Insights currently expose post views, comments, shares, reposts, awards and first-24-hour views-per-hour; comment insights expose upvotes, upvote ratio, replies, views, geography, shares and awards. Reddit Pro Performance provides lifetime organic-post views, upvote rate, comments, shares, and first-48-hour hourly views, with CSV export for post performance.

These are observation signals, not incrementality or conversion proof. A visible post with views and weak response is materially different evidence from a post whose visibility is unknown.

## HW0–HW9 — observation-quality gate

HW0 problem fit
→ HW1 current community/rule eligibility
→ HW2 account/community trust-state
→ HW3 publication state (published / removed / filtered / unknown)
→ HW4 observable distribution evidence (views/time curve where available)
→ HW5 native response quality (replies, substantive questions, corrections, shares)
→ HW6 affiliation/link treatment
→ HW7 downstream evidence (referral/store/product event only when attributable)
→ HW8 repeated eligible observations
→ HW9 LEARN / HOLD-CENSORED / REPAIR-CONTRIBUTION / ESTABLISH-TRUST / STOP

## Interpretation rules

1. Zero engagement + unknown distribution = HOLD-CENSORED, not "no demand."
2. Observable distribution + weak native response can become negative evidence, but only for the tested problem/framing/community—not the entire market.
3. Upvotes are weak alone. Substantive replies, corrections, follow-up questions, saves/shares where observable, and repeated problem recurrence carry more specialist-learning value.
4. A product link changes the treatment. Do not compare linked and native-only contributions as though only the topic changed.
5. Do not optimize for karma, reposting frequency, or manufactured visibility. Trust-system gaming invalidates the observation and adds platform risk.
6. Do not infer installs from Reddit engagement. Referral/store/product evidence must remain a separate downstream layer.
7. In sparse traffic, prefer repeated eligible observations of a material problem over many one-off topic tests.

## MintTap application

Build the external-community ledger at the contribution level:
- community + date;
- recurring YieldMax problem cluster;
- rule/link/disclosure eligibility;
- native answer completeness;
- account/community trust-state;
- published/removed/filtered/unknown;
- views/time curve if available;
- substantive replies/questions/corrections/shares;
- whether a MintTap/owned-reference link was present;
- attributable downstream evidence, if any;
- HW decision.

Priority clusters remain ROC state/provenance, broker/substitute-payment mismatch, ticker/date reconstruction, split/reinvestment reconstruction, and total-return methodology.

A native answer with normal distribution but no meaningful response is usable evidence. A contribution with unknown visibility is not.

## LogMate application

Before launch, use the same ledger for pilot communities around import/migration fidelity, duplicate handling, Previous Total continuity, multi-leg logging, export/backup integrity, and offline/PWA/device boundaries. Professional corrections and workflow-specific follow-up questions are more informative than broad engagement counts.

## Reusable niche-app rule

Community marketing should optimize for information quality before reach:
qualified problem → permission → observable distribution → native response → repeated evidence → product/referral evidence.

Only the final layers support acquisition conclusions.

## Next target

Operationalize the MintTap external-community ledger using actual candidate communities and current rules. Do not add another Reddit theory layer unless the ledger exposes a framework failure or a platform change.
