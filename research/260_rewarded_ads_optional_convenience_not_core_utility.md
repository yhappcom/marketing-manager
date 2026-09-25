# Research 260 — Rewarded Ads Must Buy Optional Convenience, Never Core Utility

Validated: 2026-09-26

## Decision
For specialist utility apps, rewarded advertising is eligible only when the user makes an explicit opt-in choice and the reward adds optional convenience or a reversible enhancement. It must not gate the core job, correctness, record access, safety/compliance-relevant functionality, or recovery of the user's own data.

Google's current rewarded-ad documentation defines rewarded ads as an explicit opt-in exchange: before display, the user must be offered a clear choice to view the ad in exchange for a reward. Rewarded interstitial is materially different: it can appear automatically at a natural transition and therefore requires an intro screen with clear reward messaging and a skip option. These formats must not be treated as interchangeable.

## GF0–GF7 Rewarded Utility Integrity Gate
1. Core-job protection — reward cannot unlock functionality required to perform the app's primary specialist job.
2. Ownership integrity — never require an ad to access/export/recover user-created records or data.
3. Explicit exchange — state the exact optional benefit before a standard rewarded ad and require affirmative opt-in.
4. Reversibility — declining the ad leaves the normal core workflow intact.
5. Reward truth — grant exactly the promised benefit; do not disguise ordinary functionality as a reward.
6. Verification proportionality — use reward callbacks correctly; where reward integrity materially matters, server-side verification can protect against spoofing.
7. Interruption integrity — rewarded interstitial remains a full-screen interruption; skip messaging and a genuinely natural transition are mandatory, and specialist protected workflows remain ineligible.
8. Value guardrail — KEEP only if incremental reconciled revenue does not reduce qualified activation, repeated specialist value, trust, or task completion.

## Portfolio application
### MintTap
Default: standard rewarded ads are TEST-ONLY, rewarded interstitial is RETIRE/BLOCK by default.
Potential future rewards must be optional conveniences that do not change portfolio correctness or restrict normal tracking. Do not reward-gate portfolio creation, holdings, distribution/ROC/tax-adjustment accounting, reconciliation, core analytics required to understand saved portfolio state, export/recovery of owned data, or ordinary access to historical records.

### LogMate
Default: rewarded and rewarded-interstitial inventory is BLOCKED for launch/core logging.
Never reward-gate Add/Edit Flight, Previous Total, import/mapping/deduplication, totals, export/backup/recovery, records needed for normal logbook maintenance, or any feature whose absence could be interpreted as degrading record integrity or compliance-related workflow. If a future optional convenience exists, it requires a separate product review before monetization.

## Measurement contract
Track separately:
reward_offer_eligible → reward_offer_seen → reward_opt_in → ad_request → load → impression → reward_earned → reward_granted → downstream task completion → repeated specialist value → reconciled revenue.
A declined reward is not an ad failure. A suppressed protected-workflow opportunity is not an unfilled request.

## Operating rule
Rewarded ads are not a mechanism for manufacturing scarcity in an otherwise free specialist utility. Monetization must attach to optional incremental value, not to removal of an artificial restriction.

## Sources
- Google Mobile Ads rewarded ads documentation, checked 2026-09-26.
- Google Mobile Ads rewarded interstitial documentation, checked 2026-09-26.
- Google Mobile Ads server-side verification documentation, checked 2026-09-26.
