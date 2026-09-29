# Research 306 — Optional Rewarded-Value Contract

Validated: 2026-09-29

## Why this exists
Research 303–305 established protected workflows, layout-stable inventory, and impression-level revenue quality. This contract answers a different question: whether rewarded advertising can add revenue without turning essential specialist utility into an ad gate.

## Authoritative findings
1. Google AdMob's rewarded-ad policy requires a clear, accurate, conspicuous disclosure of the required action and reward before each rewarded ad. Standard rewarded ads require affirmative, unambiguous opt-in for each ad. Rewards cannot be direct monetary items; allowed rewards must remain non-transferable and usable within the publisher's platform/app.
2. Rewarded interstitial is a distinct format: it can appear at a natural transition without the same initial opt-in model, but Google requires an intro screen that clearly describes the reward and offers a skip option before the ad starts.
3. Apple App Review Guideline 3.2.2(x) prohibits forcing ratings, reviews, other-app downloads, or other Store actions to access app functionality/content/use, while allowing incentives for in-app actions such as watching an ad. Apple 3.2.2(iii) also rejects artificial inflation of ad impressions/clicks or apps designed predominantly to display ads.

## Niche-utility conclusion
Policy permission is not product permission. For MintTap and LogMate, rewarded advertising is acceptable only when the reward is an optional convenience or additive non-essential benefit. It must never be the route to data correctness, records, import/export, calculations, reconciliation, backup, safety-relevant information, or another core specialist job.

A rewarded ad must not manufacture deprivation: do not remove a previously normal core capability, add an artificial wait, impose an arbitrary quota, or degrade normal workflow merely to sell restoration through an ad. This violates the business objective even where a narrow implementation might pass platform policy.

## HH0–HH9
HH0 specialist job classification
→ HH1 core-access/non-degradation gate
→ HH2 genuinely optional reward definition
→ HH3 truthful pre-ad disclosure
→ HH4 affirmative opt-in (or rewarded-interstitial intro+skip)
→ HH5 guaranteed reward delivery / failure recovery
→ HH6 conservative frequency and no coercive resurfacing
→ HH7 paid-event + reward-event telemetry
→ HH8 downstream task/repeat-value guardrails
→ HH9 KEEP / REDESIGN / REMOVE / UNKNOWN.

## Hard exclusions
MintTap: portfolio access/editing, Tax Adjustment, distribution/ROC interpretation, reconstruction/correction, monetary reconciliation, calculations, export/backup, or removal of normal ads cannot be conditioned on rewarded viewing unless the rewarded item is demonstrably additive and non-essential.

LogMate: flight entry/history, import/mapping, duplicate resolution, Previous Totals, calculations, export/backup/certificate integrity, offline continuity, or record access must never depend on watching an ad.

For both products, “watch an ad to continue” inside a protected workflow is REMOVE by default.

## Candidate reward test
A reward is eligible for experimentation only if all are true:
- the app remains materially useful without it;
- the normal specialist workflow is not slower or worse because the reward exists;
- the reward is additive, reversible/non-destructive, and clearly described;
- declining the ad has no punitive consequence;
- reward delivery can be verified and recovered after ad/network failure;
- revenue can be joined to task completion and repeated specialist value.

If a credible optional reward does not naturally exist, do not invent one. Banner/native inventory on low-interruption surfaces can be economically superior to a contrived rewarded mechanic.

## Measurement ledger
surface | specialist_job | core_or_optional | reward | prior_baseline | disclosure | opt_in/skip | request | impression | paid_event | reward_event | reward_delivery | failure_recovery | frequency | task_completion | repeat_value | support/rating_signal | decision

Paid event without reward delivery is a monetization defect. Reward delivery without paid event is a measurement/reconciliation issue, not a reason to deny the user the earned reward.

## Reusable launch rule
For future niche apps, decide the free core before designing rewarded inventory. Monetization follows the value architecture; it must not define artificial scarcity around the professional job.

## Next target
Perform a MintTap production monetization inventory audit across HE/HF/HG/HH: identify actual ad units, surfaces, triggers, protected workflows, layout behavior, impression-level revenue telemetry, and whether any genuinely optional rewarded-value candidate exists. Do not add rewarded inventory merely because the format is available.
