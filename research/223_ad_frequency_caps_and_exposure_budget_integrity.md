# Research 223 — Ad Frequency Caps & Exposure-Budget Integrity

Date: 2026-09-23
Status: Validated operating guidance

## Why this closes a real gap

Research 222 established that aggregate impressions and revenue do not reveal how ad burden is distributed across users. The next operational question is how to constrain that burden deliberately rather than merely observe it afterward.

Google AdMob currently supports frequency caps at both app and ad-unit level. Caps limit impressions to an individual user over a period measured in minutes, hours, or days. App-level caps cover interstitial, rewarded, and app-open units across the app; ad-unit caps constrain the applicable unit. If both exist, whichever cap is reached first governs serving. Google states that caps apply to Google demand and third-party ad sources. A cap change can take up to 24 hours to take effect, and slight server delay can occasionally allow the configured cap to be exceeded.

Authoritative source: https://support.google.com/admob/answer/6244508?hl=en

## Core finding

A frequency cap is a delivery guardrail, not an optimization target and not proof of acceptable UX.

A setting such as `2 impressions / 30 minutes` means at most approximately that delivery frequency under the platform mechanism; it does **not** mean that two impressions per 30 minutes are desirable, that every eligible user should be driven to the cap, or that the cap is sufficient to protect a specialist workflow.

The correct product abstraction is an **exposure budget**. The cap is one enforcement mechanism inside that budget. The budget must also account for surface, lifecycle moment, session density, repeated-user burden, and interruption cost.

## EI0–EI5 — Frequency-Cap & Exposure-Budget Integrity Gate

### EI0 — Configuration identity
Preserve exact app-level and ad-unit-level cap configuration, covered formats, count, time window, effective date, and change history. Unknown settings remain unknown.

### EI1 — Effective-cap integrity
When app and ad-unit caps coexist, model the effective constraint as the first applicable cap reached. Do not audit one level in isolation. Preserve Google-demand and third-party-source scope.

### EI2 — Delivery-versus-target integrity
Treat the cap as a ceiling, never as a desired impression quota. Product logic must not manufacture eligible transitions or prolong sessions merely to approach the cap.

### EI3 — Exposure-budget integrity
Evaluate frequency alongside `Imps/AU`, `Imps/AV`, `Imps/Session`, viewer rate, session duration, placement, format, workflow state, and exposure tails. A technically compliant cap can still produce excessive burden in a short specialist session.

### EI4 — Change-window integrity
Do not attribute immediate post-change behavior to a new cap. Google states cap changes can take up to 24 hours to take effect and slight server delay can occasionally exceed the configured limit. Preserve configuration-change timestamps and separate transition-window evidence.

### EI5 — Sustainable-value decision
Approve a cap or cap change only when reconciled revenue improves or remains acceptable without degrading specialist task completion, time-to-core-value, repeat value, complaint/review signals, retention, or exposure distribution. Revenue gained by concentrating interruptions on frequent users fails this gate.

## Canonical distinctions

- `frequency cap ≠ frequency target`
- `cap reached ≠ healthy monetization`
- `below cap ≠ non-intrusive UX`
- `app-level cap ≠ ad-unit-level cap`
- `configured cap ≠ instantly effective cap`
- `configured cap ≠ perfectly hard real-time ceiling`
- `average Imps/AU ≠ individual exposure safety`
- `more eligible transitions ≠ more legitimate inventory`
- `revenue/user increase ≠ sustainable improvement when exposure burden rises materially`

## MintTap application

Do not choose a cap from generic mobile-app benchmarks. MintTap is a specialist YieldMax portfolio workflow; appropriate exposure depends on actual session cadence and where value is obtained.

Production evidence packet should add:

`user/cohort → session → specialist workflow state → app-level cap → ad-unit cap → effective cap → format/placement → impression timestamp → cumulative impressions in relevant cap window → Imps/AU → Imps/AV → Imps/Session → ILRD/reconciled revenue → task completion/abandonment → repeat value → complaint/review/invalid-activity signals`.

A revenue experiment may lower a cap (stronger protection) before considering raising one. Raising a cap is not the default response to low revenue. First decompose qualified audience scale, viewer participation, auction value, placement efficiency, and exposure distribution per Research 222.

No UI transition should be added solely to create another cap-eligible impression opportunity.

## LogMate application

Home remains ad-free. Critical flight-entry, logbook, import/validation, export, sync/recovery and totals workflows remain protected. Frequency capping does not make an otherwise inappropriate interruptive placement acceptable.

If a future non-critical secondary surface is monetized, begin with a deliberately conservative exposure budget and validate actual pilot workflow burden. Frequent professional use must not translate mechanically into proportionally greater advertising burden.

## Reusable niche-app framework

For future specialist apps:

1. Define protected workflows before choosing ad frequency.
2. Inventory actual formats and placements.
3. Measure exposure distribution before changing caps.
4. Establish app-level safety budget where fullscreen formats coexist.
5. Add narrower ad-unit caps where a particular surface needs stronger protection.
6. Preserve every cap change with effective timestamp and transition window.
7. Judge changes on reconciled revenue **and** specialist-value guardrails.
8. Never convert the cap into an impression quota.

## Evidence status / unresolved

For MintTap, current production app-level and ad-unit-level cap settings, historical changes, and individual/cohort exposure-window distributions are not yet available. Therefore no numeric cap recommendation is validated.

For LogMate, monetization surfaces are not yet established; no numeric cap should be selected before product evidence exists.

## Sources

- Google AdMob Help — Set frequency caps for apps or ad units: https://support.google.com/admob/answer/6244508?hl=en
- Google AdMob Help — Imps / AV definition: https://support.google.com/admob/answer/15282068?hl=en
- Google AdMob Help — Ad viewer rate definition: https://support.google.com/admob/answer/15241608?hl=en
