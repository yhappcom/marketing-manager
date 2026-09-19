# 122 — Rewarded ads as optional value exchange, not core-access toll

Validated: 2026-09-19

## Decision
Rewarded advertising is not automatically the least intrusive monetization format. It is legitimate for this portfolio only when the user voluntarily exchanges attention for a clearly disclosed, non-essential in-app benefit. Normal use must remain intact when the user refuses or skips the ad.

## Authoritative evidence
Google defines rewarded ads as ads users choose to interact with in exchange for in-app rewards. Google rewarded-inventory policy requires the action and reward to be disclosed clearly before each rewarded ad; ordinary rewarded ads require affirmative opt-in. The reward must be delivered after completion. Direct monetary rewards are prohibited; permitted rewards must be usable within the publisher's platform/app and non-transferable. Users must be able to skip/dismiss rewarded ads, and refusing/skipping must not interfere with normal app usage.

Rewarded interstitial is materially different: it can appear automatically at a natural transition, but requires an intro screen that announces the reward and provides a clear opt-out. It must not be treated as equivalent to user-requested rewarded inventory.

## AN0–AN5 Rewarded Value-Exchange Gate
- AN0 — coercive/noncompliant: core access depends on watching; refusal degrades normal use; disclosure/reward is misleading; prohibited reward.
- AN1 — revenue-first placement: reward invented mainly to manufacture ad inventory, with no specialist-user value hypothesis.
- AN2 — plausible optional reward, but no evidence that it is genuinely non-essential, understood, or economically worthwhile.
- AN3 — eligible: each impression is separately voluntary (or rewarded-interstitial intro/opt-out rules are met); action and exact reward are clear before the ad; refusal preserves normal core use; reward is in-app/non-transferable and reliably delivered; placement is outside protected core tasks; frequency is bounded; privacy/age-rating parity is satisfied; first-value/useful-return guardrails exist.
- AN4 — validated: incremental retained-user revenue is observed and the reward does not materially worsen first value, useful return, support burden, trust, or core-task completion.
- AN5 — reusable portfolio registry: reward classes, protected jobs, eligibility denominators, caps, economics, retirement triggers and owners are maintained per app.

## Product implications
### MintTap
Do not gate portfolio viewing, transaction entry/editing, distribution/ROC history, reverse-split continuity, tax adjustment, backup/recovery, or other accounting correctness behind rewarded ads. Those are core product value, not rewards.

A future rewarded candidate must add optional convenience or cosmetic value without withholding an existing core capability. "Watch an ad to unlock correct calculations", "watch to see your portfolio", or ad-based temporary removal of a deliberately obstructive ad are rejected. No candidate should ship merely because rewarded eCPM is attractive.

### LogMate
Use a stricter boundary. Flight entry, totals, search, import, export, backup/restore, offline access, record integrity and recovery are protected. A professional logbook must not make operational record access contingent on ad viewing. Rewarded inventory is therefore not a launch requirement and may legitimately remain absent.

## Measurement contract
The denominator is not all sessions. Measure among users who are eligible for a specific optional reward: offer exposure → explicit accept → ad start → completion → reward delivery → reward use → subsequent core-task completion/useful return. Pair impression-level revenue with this funnel. A high rewarded eCPM cannot compensate for coercion, low reward utility, or degradation of retained use.

Track refusal as a normal successful outcome, not a failed conversion. If declining the offer creates friction, nagging, repeated prompts, or lost functionality, the placement fails AN3.

## Relationship to existing gates
A0–A5 remains the earlier rewarded-ad foundation. AN sharpens the product/economic contract: optionality must be substantive, not merely a policy-compliant button. F protects foreground intent; E governs retained-utility economics; U governs impression-revenue evidence; AC/AD govern privacy and capability disclosures. Rewarded interstitial remains a separate automatic-transition subtype and must not inherit the voluntary-request assumption of ordinary rewarded ads.

## Reusable rule
`optional specialist benefit → clear exchange → voluntary accept → ad → reliable reward → unchanged core access → retained utility`

If the product team cannot name a genuine optional benefit without subtracting from core value, the correct rewarded-ad strategy is no rewarded ad.
