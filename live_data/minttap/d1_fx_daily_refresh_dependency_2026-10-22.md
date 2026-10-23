# MintTap D1 — release FX dependency and claim-scope acceptance (2026-10-22)

## Decision
**D1 HOLD — release-code dependency verified; live incident, FX coverage and Play Console Financial features submission UNKNOWN.** This is a production evidence addendum to the committed 2026-10-21 currency-selector study, not new general research. Product repository read-only.

## Version-pinned source
- Product: `yhappcom/yieldmax_tracker@1.0.29`.
- `functions/index.js` blob `46dd263e7c85d85599ed9d8301de3738beab6810`, lines 1257–1330: `fetchAndSaveExchangeRates` retries provider failures within its configured limit; missing key, failed response, non-EUR base or absent USD quote throws. A successful response is normalized to USD and stored under `exchange_rates/{UTC-date}`. No explicit cross-check of all 43 selectable codes appears in this function.
- Same file, lines 2874–2927: `fetchDailyDataJob` awaits FX collection **before** ETF-list read, dividend scrape, new-ETF scrape and notification dispatch. An FX exception exits that daily invocation via catch and releases its lock. This is a **code-path coupling**, not proof of a live outage.
- Same file, lines 3099–3122: `marketDataTick` runs daily, intraday and close jobs with `Promise.allSettled`; daily failure does not itself cancel the other two jobs. Do not claim an all-market-data outage.
- `lib/calculation/engine/calculation_engine_support.dart` blob `51317c00ee77ecea84ccac6e2fe7671b42cf71b6`, lines 365–407: empty FX list returns null before USD identity-rate handling; with nonempty list, USD resolves to 1.0; non-USD requires a positive matching rate no older than the configured age limit.
- `lib/calculation/engine/calculation_engine.dart` blob `f9d493b11002bb17b16607140104472f05250d56`, lines 926–934: missing resolved FX yields `partial` and an internal 1.0 fallback multiplier. This alone does not establish a wrong user-visible converted amount.
- Already committed: `live_data/minttap/d1_release_currency_claim_selector_validation_2026-10-21.md` establishes 43 selector codes (USD + 42 non-USD); public claim snapshot says "42 currencies". Selector presence is not FX data coverage.

## Production acceptance and operator evidence
1. **D1 priority:** obtain redacted Play Console > App content > Financial features actual submitted selections, review status, locale/territory and applicable shipped build. Reconcile portfolio recordkeeping vs any trading claims. Ordinary Store distribution and optional finance-restricted Promotional content are separate gates.
2. **FX availability:** sanitized daily-job execution and lock/retry/recovery timestamps for provider failure and subsequent dividend/notification outcomes; demonstrate continuity or explicit alert and recovery. Preserve independence of intraday/close jobs.
3. **Claim truth:** production FX provider code set and freshness vs 43 selectable codes and the public "42 currencies" denominator; do not count unknown/expired as supported.
4. **Runtime UX:** USD with empty FX list; non-USD with absent, stale and fresh FX; verify displayed amount/status across Home and portfolio flows, rather than infer UI from calculation internals.

## Boundaries and decisions
- **Verified:** version-pinned dependency and missing-data handling paths.
- **Unknown:** deployed backend parity, whether provider failures happened, whether dividends/notifications were missed, actual 43-code coverage, actual Play Console declaration and user-visible defect.
- **No production decision closed.** D1 HOLD, D2 PRESSURE HOLD, D3 NATIVE-ONLY HOLD, D4 ROC IMPORT WRITE HOLD, D5 OPEN.
- No changes to product repository or ads/community execution.

## Primary sources (checked 2026-10-22)
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/functions/index.js
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/lib/calculation/engine/calculation_engine_support.dart
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/lib/calculation/engine/calculation_engine.dart
- https://support.google.com/googleplay/android-developer/answer/13849271
- https://support.google.com/googleplay/android-developer/answer/12929944

## 2026-10-23 provider-payload completeness and numeric-validity gate — source-faithful isolated probe

**D1 HOLD / CLAIM-COVERAGE AND DATA-QUALITY SUBGATE OPEN; LIVE IMPACT UNKNOWN.** This is an additional production acceptance finding, not a new research number or evidence of a real provider incident.

**Pinned release:** `yhappcom/yieldmax_tracker@1.0.29`, `functions/index.js` blob `46dd263e7c85d85599ed9d8301de3738beab6810`, lines 1302–1327. After checking `success === truthy`, `base === 'EUR'` and a truthy `rates.USD`, the function loops over **whatever rate keys the provider returned**, divides each by the USD quote, and writes `exchange_rates/{UTC-date}` with `{merge:true}`. It does **not** check coverage against the 43 selectable currencies (USD + 42 non-USD), validate that each quote is finite and positive, or enforce a minimum rate-count threshold before this write. Existing calculation-side positivity/freshness handling does not establish provider-data completeness.

**Isolated probe (6/6 PASS):** A source-faithful copy of those expressions with a captured mock write accepted synthetic `EUR/USD/KRW` only, and even `USD` alone; negative USD produced a negative EUR normalized rate; a truthy nonnumeric USD string yielded non-finite normalized values. Missing USD and wrong base were rejected. These are **adversarial synthetic payloads**, not observed provider responses. The probe was not the deployed function, did not use Firestore SDK/Emulator, and does not prove any actual database contains invalid values. Local handoff: `d1_fx_provider_shape_probe_2026-10-23.js` and `d1_fx_provider_shape_probe_2026-10-23_results.json` (not committed).

**Operational consequence:** A provider `success` response is insufficient to substantiate the public currency-coverage claim. The `{merge:true}` write also requires a controlled Firestore Emulator test for same-day re-fetches with a missing currency key; do not infer actual stale-key persistence from the isolated mock. This is an acceptance gap, not proof of a visible FX defect or inaccurate published rates.

**Next evidence:** (1) operator-submitted Play Financial features declaration/status remains top priority; (2) provider contract and sanitized production per-code rate availability/freshness across all selectable codes, including missing/non-finite/negative responses; (3) Emulator test for partial second fetch and nested-map merge; (4) app device/UI acceptance for absent/stale FX, USD identity, and `partial` presentation; (5) version-matched Store claim denominator. Ordinary Store distribution remains distinct from optional Promotional content.

**Primary source references (checked 2026-10-23):** `https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/functions/index.js`; `https://firebase.google.com/docs/firestore/manage-data/add-data`; `https://support.google.com/googleplay/android-developer/answer/13849271`. No product repository or live data was changed.
