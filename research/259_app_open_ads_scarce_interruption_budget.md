# Research 259 — App-Open Ads as a Scarce Interruption Budget

Validated: 2026-09-26

## Decision

For sparse-niche professional utility apps, app-open inventory is not a default monetization surface. It is an interruption surface that must earn eligibility after core-value continuity is protected.

Google's current Mobile Ads guidance defines app-open ads as a load-screen/foreground format, recommends delaying the first app-open ad until the user has used the app a few times, and says cold-start ads should be shown only from a loading screen while assets are still loading. If main content is reached before the ad loads, the ad should not be shown. Google Play separately prohibits unexpected full-screen interstitials when users have chosen to do something else and prohibits full-screen video interstitials before the splash/loading screen.

Therefore:
`foreground event ≠ eligible impression opportunity`
`SDK capability ≠ product permission`
`loading delay created for advertising ≠ natural loading opportunity`

## GE0–GE7 App-Open Eligibility Gate

1. **GE0 First-value protection** — no app-open ad on first launch; company default is stronger: no app-open inventory until qualified first value has occurred.
2. **GE1 Natural-wait test** — there must already be a genuine load/wait state. Never manufacture latency or a splash screen to create inventory.
3. **GE2 Cold-start continuity** — ad may originate only from the loading state; if main content becomes available first, abandon the opportunity.
4. **GE3 Warm/foreground semantics** — foregrounding alone is insufficient. Suppress when returning from a short interruption, external auth/payment/share flow, file picker, permission/settings round-trip, or another task-continuation context.
5. **GE4 Protected-workflow suppression** — suppress when the user is entering/resuming a core specialist job or has unsaved/incomplete work.
6. **GE5 Frequency integrity** — use a product-side cooldown/session exposure budget independent of network caps. Network/platform ceilings are not optimization targets.
7. **GE6 Measurement integrity** — log opportunity, suppression reason, request, load, impression, paid event and revenue precision separately. A suppressed opportunity is not a failed request.
8. **GE7 Value guardrail** — KEEP only when incremental reconciled revenue is positive without material degradation in qualified activation, repeated core value, abandonment, crash/latency or trust signals.

Decision states: PROTECTED / SUPPRESS / TEST-ONLY / ELIGIBLE / REDUCE / RETIRE.

## Portfolio application

### MintTap
Default-protect first launch, onboarding/portfolio creation, holding edits, distribution/ROC/tax-adjustment work, reconciliation, and any resume into unfinished portfolio work. A foreground return from broker/browser research or authentication is task continuation, not a new monetization break. App-open should remain TEST-ONLY until production instrumentation can distinguish natural load opportunities from task-continuation foregrounds and connect impressions to repeated portfolio value.

### LogMate
Stricter default. Protect authentication/onboarding, Previous Total, Add/Edit Flight, import/mapping/deduplication, totals reconciliation, export/backup/recovery and any resume into an incomplete logbook task. Because pilots may switch apps during an active logging workflow, generic foreground-triggered app-open ads are presumptively ineligible. Do not make app-open part of launch-critical monetization.

## Minimum instrumentation

`app_open_opportunity`: launch/foreground class, natural_wait_state, first_value_completed, protected_workflow, unsaved_work, elapsed_since_last_fullscreen, session_fullscreen_count.

`app_open_suppressed`: reason enum (first_value, no_natural_wait, main_content_ready, task_continuation, protected_workflow, unsaved_work, cooldown, session_budget, consent, no_ad).

Then preserve request → load → impression → paid-event/revenue-precision separately.

## Operating rule

Optimize `reconciled revenue per repeated-value user`, not app-open impressions per session. If revenue requires more interruptions because repeat-value users fall, the monetization change failed.

## Sources

- Google for Developers, App open ads (Android/iOS/Flutter), current guidance accessed 2026-09-26.
- Google Play Developer Program, Ads / Better ad experiences, current policy accessed 2026-09-26.
