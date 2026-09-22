# Research 188 — Rewarded Ad Voluntariness & Reward-Value Integrity

Validated: 2026-09-22

## Decision
Rewarded advertising is acceptable for a specialist utility only when the ad is a genuinely optional exchange for a clearly defined incremental benefit. It must never become a disguised toll on normal product use, a coercive route around the non-intrusive-ad principle, or a mechanism that makes core professional utility conditional on ad consumption.

## Current authoritative findings
Google AdMob's current rewarded-ad-unit policy requires rewarded ads to be skippable/dismissible and says skipping must not impede normal use. Rewarded interstitials require an introductory screen with a functional `no`/`don't accept` choice and enough time to opt out. Publishers must deliver the promised reward after completion and may not use messaging that improperly pushes the user toward accepting the ad, including language such as watching an ad merely to support the business.

Google Play's current Ads policy separately exempts explicitly opted-in rewarded ads from certain disruptive full-screen-ad restrictions. That exemption is not permission to coerce the opt-in or gate ordinary app use; it reinforces the distinction between an explicit optional exchange and an unexpected interruption.

The Google Mobile Ads SDK exposes a client-side earned-reward callback. For higher-integrity reward validation, AdMob also supports server-side verification (SSV): signed callbacks can include ad source, ad unit, reward amount/item, timestamp, transaction ID and optional user/custom data. Google describes SSV as extra protection against spoofed client-side reward callbacks. Because server callbacks can be delayed, Google's documented best practice is generally to grant promptly via the client callback and validate via SSV when appropriate; where reward validity is critical and delay is acceptable, waiting for verified SSV can be justified.

## CZ0–CZ5 Rewarded Ad Voluntariness & Reward-Value Integrity Gate

CZ0 — Core-utility boundary
- Define what the user can normally do without watching an ad.
- Core specialist value, safety/compliance-adjacent functions, previously available ordinary use and essential recovery/edit workflows cannot become reward-gated merely to raise ad yield.
- A reward must be incremental, not restoration of utility intentionally removed to manufacture demand for the ad.

CZ1 — Exchange clarity
- State the concrete reward before the user chooses.
- Preserve an obvious decline/skip path and normal app use after declining.
- Do not use guilt, urgency, false scarcity or `support us by watching` framing to bias the choice.

CZ2 — Reward-delivery integrity
- Define the exact completion event and reward grant semantics.
- Grant the promised reward consistently; preserve failure/retry handling so an ad completion does not strand the user without the stated benefit.
- Do not silently change reward value after acceptance.

CZ3 — Verification/instrumentation integrity
- Capture ad unit, format, request/show/completion/reward callbacks and CW paid-event revenue.
- If reward fraud or material economic value makes validation important, use SSV and verify signed callbacks; retain transaction ID and relevant reward provenance for deduplication/audit.
- Preserve client-vs-server timing semantics; an SSV delay is not evidence that the user failed to earn the reward.

CZ4 — Voluntariness and substitution measurement
- Measure offer impressions separately from accepted ads, completed ads and granted rewards.
- Track decline rate, repeated prompting, time-to-core-task after decline, abandonment, and whether users feel forced because the non-ad route is materially degraded.
- High opt-in rate is not automatically good: it can indicate a valuable optional exchange or a coercive product design.

CZ5 — Sustainable-value decision
- Join incremental CW revenue with reward cost/value, product outcomes, return behavior and CX interruption budget.
- Reject a rewarded placement if monetization depends on withholding core utility, repeated nagging, ambiguous reward terms, failed reward delivery or deterioration of first/repeated specialist value.

## Canonical invariants
`rewarded ≠ mandatory`
`explicit opt-in ≠ coercive consent`
`high opt-in rate ≠ healthy monetization`
`ad completion ≠ reward delivery proof`
`client reward callback ≠ server-verified reward provenance`
`rewarded-policy exemption ≠ permission to degrade normal use`
`incremental benefit ≠ artificially removed core utility`
`reward revenue ≠ net sustainable value`

## MintTap application
Do not gate portfolio tracking, distribution/ROC/tax information, tax adjustments, calculations, data correction or ordinary analysis behind rewarded ads. If rewarded inventory is ever considered, first identify a genuinely optional incremental benefit that does not weaken the baseline product. Audit whether any existing rewarded/rewarded-interstitial units exist; if absent, record `not implemented` rather than inventing a reward economy solely to add impressions.

## LogMate application
The current ad-free Home and protected flight-entry/edit, import, duplicate resolution, Previous Total, validation/recovery and safety/compliance-adjacent states remain outside rewarded gating. Do not create a reward mechanic that makes logging, correcting, importing, exporting required records, or accessing ordinary professional data conditional on watching an ad. Any future optional benefit must pass CZ independently before implementation.

## Reusable company contract
For every rewarded candidate retain: app/version/platform; specialist job; baseline no-ad capability; offered reward and duration/value; exact opt-in copy; decline path; rewarded vs rewarded-interstitial format; request/show/completion/earned/granted events; failure/retry path; SSV enabled/not-needed rationale; transaction/deduplication evidence where applicable; CW revenue; reward cost; offer/accept/complete/grant rates; repeat prompts; decline-to-task continuity; abandonment; first/repeated-value and return evidence; keep/change/remove decision.

## Sources
- Google AdMob Help, “Policies for ad units that offer rewards,” current documentation accessed 2026-09-22: https://support.google.com/admob/answer/7313578
- Google Play Console Help, “Ads,” current policy documentation accessed 2026-09-22: https://support.google.com/googleplay/android-developer/answer/9857753
- Google for Developers, “Rewarded ads — Android,” current documentation accessed 2026-09-22: https://developers.google.com/admob/android/rewarded
- Google for Developers, “Validate server-side verification (SSV) callbacks — Android,” current documentation accessed 2026-09-22: https://developers.google.com/admob/android/ssv

## Next evidence target
Extend the MintTap production inventory audit to identify rewarded/rewarded-interstitial presence, baseline capability, exact reward terms, opt-in/decline path, reward callback/SSV behavior and whether any ordinary specialist utility is effectively ad-gated. If rewarded inventory is absent, preserve that fact and continue the broader CB–CI + CW–CZ audit without introducing a reward mechanic for its own sake.