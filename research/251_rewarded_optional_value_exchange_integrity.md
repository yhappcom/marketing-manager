# Research 251 — Rewarded Ads as Optional Value Exchange, Not Core-Feature Toll

Status: validated  
Date: 2026-09-25

## Decision
For an ad-only niche professional app, rewarded advertising is eligible only when it creates an optional, truthful value exchange around a non-essential benefit. It must not become a toll on the core specialist job, normal usage, data access, recovery, accuracy, or compliance-relevant workflow.

## Authoritative findings
- Google AdMob requires standard rewarded ads to be an explicit opt-in experience: the user chooses to view the ad in exchange for a disclosed reward.
- AdMob reward-unit policy requires users to be able to skip/dismiss rewarded ads; declining or skipping must not impede normal app/site use. The promised reward must be delivered after the required action.
- Rewarded interstitial differs materially: it may appear automatically at a natural transition, but Google requires a preceding intro screen that clearly describes the reward and provides a functional skip/decline option.
- Google Play's disruptive-ads policy exempts explicitly opted-in rewarded ads from its general full-screen-interstitial rule, but this does not convert rewarded ads into permission to gate normal app use.
- Development/testing must use test ads rather than live inventory.

## FR0–FR6 Rewarded Value-Exchange Integrity Gate
1. **Core-job protection** — classify the underlying user job. If it is required for normal specialist use, data integrity, recovery, safety/compliance, or the app's primary promise, rewarded gating fails.
2. **Reward incrementality** — the reward must add optional value rather than restore functionality intentionally removed from the normal product.
3. **Choice integrity** — disclose the concrete reward before the ad; standard rewarded must be explicit opt-in. Rewarded interstitial requires a clear pre-ad explanation and working decline/skip.
4. **Decline-path parity** — declining must leave normal app use intact. Never punish refusal with degraded core workflow, artificial delay, lost data, repeated prompts, or a blocked path.
5. **Delivery integrity** — grant exactly the promised reward after the qualifying event; instrument load/show/reward/dismiss/failure separately. Use SSV where reward integrity materially matters.
6. **Economics integrity** — measure opt-in rate, completed rewarded impressions, paid-event revenue, reward cost, downstream task completion/session continuation/retention, traffic-quality signals and reconciled revenue. Do not optimize raw opt-in or impressions alone.
7. **Keep/rollback** — retain only if incremental sustainable revenue is positive without measurable deterioration of protected specialist behavior or trust.

## Portfolio application
### MintTap
Protected: portfolio viewing/manipulation, distribution/ROC interpretation, split-adjusted history needed for the product promise, tax-adjustment entry, account/data recovery, and ordinary access to the user's records. Do not place these behind rewarded ads.

A future rewarded candidate must be a genuinely optional convenience or cosmetic/extra-value layer whose absence does not impair normal portfolio tracking. “Watch an ad to support us” is not an acceptable reward framing under AdMob reward-unit policy.

### LogMate
Protected: onboarding, log entry/edit, import/migration, totals reconciliation, export needed for ownership/portability, sync/recovery, and any recency/compliance-relevant workflow. These must not depend on watching an ad.

Because pilot records are professional records, reward design should be more conservative than consumer-game patterns. A feature is not eligible merely because it can technically be delayed or limited.

## Measurement ledger
`surface → specialist job → protected? → optional reward → disclosure/choice → decline path → request/load/show → reward callback → dismiss/failure → paid event/precision → reward cost → task continuation → retention → traffic-quality adjustment → finalized revenue → keep/rollback`

## Forbidden inferences
- rewarded = automatically non-intrusive
- opt-in = acceptable to gate core functionality
- higher opt-in rate = better UX
- more rewarded impressions = better monetization
- rewarded interstitial = no consent/decline requirement
- technically skippable = non-coercive
- estimated ad revenue = sustainable incremental profit
- a valuable professional feature = suitable ad reward

## Reusable rule
For future niche apps, define the protected core before designing rewards. Rewarded inventory is downstream of product entitlement architecture, not a mechanism for manufacturing scarcity around the app's primary promise.

## Next evidence target
Audit actual MintTap/LogMate entitlement maps before proposing any rewarded placement. If no genuinely optional incremental benefit exists, use no rewarded inventory rather than inventing one.
