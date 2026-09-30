# Research 331 — Voluntary Rewarded-Ad Boundary for Specialist Utility Apps

Validated: 2026-09-30

## Why this research exists
Research 330 established marginal ad-pressure control. This addition answers a narrower question: when can rewarded advertising add revenue without converting a specialist utility into an ad-gated product?

## Authoritative platform findings
- Google Play's Ads policy exempts explicitly opt-in rewarded ads from the specific full-screen-interstitial rules that otherwise prohibit unexpected interruption; the policy example is a user explicitly choosing to watch an ad for a specific feature/content reward.
- The same Google Play policy prohibits unexpected full-screen ads when the user has chosen to do something else. Therefore a rewarded format is not a license to surprise the user; explicit opt-in is the boundary.
- Apple App Review Guidelines allow developers to incentivize certain in-app actions such as watching an advertisement, while separately prohibiting requiring Store actions such as ratings/reviews or downloads of other apps to access functionality.
- Apple also requires interruptive/interstitial ads to be clearly identifiable, non-manipulative, and easily dismissible, and apps with ads must provide a way to report inappropriate or age-inappropriate ads.

Primary sources:
- Google Play Ads policy: https://support.google.com/googleplay/android-developer/answer/9857753
- Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/

## Specialist-utility interpretation
A rewarded ad should be treated as a voluntary exchange, not a disguised tollbooth.

For MintTap and LogMate, the product's core specialist value must remain usable without watching an ad. This is a business/trust constraint stronger than the minimum platform rule. Rewarded inventory is only a candidate when all of the following are true:
1. the user deliberately initiates the exchange;
2. the reward is stated before the ad;
3. declining leaves the normal workflow intact;
4. the reward does not alter financial/logbook truth, data integrity, safety, record access, backup, export, or correction rights;
5. the ad does not appear in the middle of a protected workflow;
6. the reward is reversible/optional and does not create a coercive repeated loop;
7. incremental ad revenue is evaluated against retention, trust, task completion, latency and support cost.

## IG0–IG9 — Rewarded-ad operating contract
IG0 protected-core gate → IG1 explicit opt-in → IG2 reward clarity → IG3 decline parity → IG4 truth/integrity neutrality → IG5 workflow-boundary fit → IG6 exposure/cooldown budget → IG7 paid-event evidence → IG8 retention/trust counter-metrics → IG9 KEEP / TEST / REDUCE / REMOVE / UNKNOWN.

### IG0 Protected-core gate
Never attach a rewarded ad to essential specialist outcomes: viewing/correcting records, required calculations, tax/ROC interpretation, transaction reconstruction, flight-log integrity, import reconciliation, Previous Totals, backup/restore, export/certificate, or recovery from errors.

### IG1 Explicit opt-in
The user must choose the rewarded exchange before the ad begins. Do not relabel an automatically triggered full-screen ad as “rewarded.”

### IG2 Reward clarity
State the exact optional benefit before opt-in. Do not use vague “continue” language that makes the ad look required.

### IG3 Decline parity
Declining must preserve the ordinary product path. A slower, degraded, blocked, or artificially inconvenient core path is coercive even if a nominal close button exists.

### IG4 Truth/integrity neutrality
Rewards may not change the correctness of financial or aviation records, calculations, provenance, or compliance-related output.

### IG5 Workflow-boundary fit
Only consider rewarded inventory outside protected work, at a user-controlled boundary. Never insert it between an input and its save/verification/result.

### IG6 Exposure budget
Rewarded inventory still needs cooldowns and per-user exposure accounting. Opt-in does not eliminate fatigue.

### IG7 Revenue evidence
Measure request → load → impression → paid event and retain currency/revenue precision where available. Do not infer value from eCPM alone.

### IG8 Counter-metrics
Track reward offer shown, offer accepted, offer declined, task completion, next-session return, repeated specialist value, support complaints, ad-report events and latency. A revenue lift with specialist-value deterioration is not a win.

### IG9 Decision
KEEP only when voluntary behavior is stable and downstream specialist value is non-inferior. TEST when evidence is sufficient and the surface is genuinely optional. REDUCE/REMOVE on coercion, workflow damage, trust complaints or weak net value. UNKNOWN when niche traffic is insufficient.

## MintTap
Default position: no rewarded ad around portfolio truth, transaction entry/editing, distribution/ROC interpretation, reverse-split/reinvestment reconstruction, Tax Adjustment, or recovery/total-return analysis.

Possible future candidates must be genuinely peripheral conveniences and pass IG0–IG9. “Watch an ad to reveal a calculation/result” is rejected because it converts specialist truth into an ad gate.

## LogMate
Default position: no rewarded ad around Add Flight, import/migration, duplicate reconciliation, Previous Totals, record correction, backup/restore, export/certificate or offline/device continuity.

Because the product is a professional recordkeeping tool, launch should not invent a rewarded surface merely because the format is policy-permitted. Revisit only after repeated specialist value is established and a genuinely optional peripheral benefit exists.

## Reusable niche-app rule
Rewarded advertising is not automatically less intrusive than banners/interstitials. Its advantage exists only when user agency is real. The reusable test is:

voluntary incremental revenue
− specialist-value loss
− trust/retention loss
− latency/support cost
− policy/traffic-quality risk
− operator cost

If the reward is required to make the core product tolerable or complete, redesign the product/monetization model instead of optimizing the ad.

## Next evidence target
Audit MintTap production ad inventory against IF0–IF9 and IG0–IG9. Record which surfaces are currently banner/native/interstitial/app-open/rewarded, which workflows they touch, consent/request state, caps/cooldowns, and whether paid-event evidence can be reconciled to first/repeated specialist value. Unknown production settings remain UNKNOWN.
