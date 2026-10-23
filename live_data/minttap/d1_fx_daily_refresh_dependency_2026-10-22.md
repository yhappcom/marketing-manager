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

## 2026-10-23 provider observation-time provenance gate — source-only regression

**D1 HOLD / SOURCE-PROVENANCE SUBGATE FAILS RELEASE CONTRACT; LIVE IMPACT UNKNOWN.** In release-pinned `yhappcom/yieldmax_tracker@1.0.29`, `functions/index.js` blob `46dd263e7c85d85599ed9d8301de3738beab6810` (lines 1269–1272, 1302–1327), the provider `latest` response is checked for `success`, EUR `base`, and truthy `rates.USD`. The write uses the **server execution UTC date** as `exchange_rates/{date}`, converts the rate map, and stores `base`, `rates`, `updatedAt: serverTimestamp()` with `{merge:true}`. The function does **not** check or persist the provider's `date` or `timestamp` fields. The upstream provider's own official API documentation explicitly defines both as the quote observation date/time. Thus `updatedAt` is a write-time marker, **not verified quote age**.

**Isolated source-expression test: 4 synthetic provider cases, 7 assertions PASS.** Same numeric rates with provider dates 2026-10-23, 2026-09-01, 2026-11-01 or missing date/timestamp produce the same captured write shape and path `exchange_rates/2026-10-23`. This demonstrates **no provider-observation-time gate in the inspected source expressions**, not that the actual API served stale/future quotes, that Firestore accepted them, or that users saw stale conversions. The probe uses a fake clock and fake write; no SDK/Emulator, API key or production data. Local uncommitted probe: `d1_fx_provider_freshness_probe_2026-10-23.js` + `_results.json`.

**Potential downstream exposure, not proven live defect:** `lib/calculation/engine/calculation_engine_support.dart` blob `51317c00ee77ecea84ccac6e2fe7671b42cf71b6`, lines 365–407, evaluates rate freshness using canonical `dateYmd` and a configured maximum age, not an observed provider timestamp. The ingestion document's UTC date can therefore conceal quote age **if** the canonical adapter uses that document date. Verify the adapter mapping and device presentation before claiming this end-to-end effect. Same-day partial re-fetch with `{merge:true}` may retain older nested currency keys under Firestore's merge semantics; **this specific persistence behavior is still Emulator-unverified** and must not be reported as an executed test.

**Production acceptance gate:** (1) top priority remains redacted submitted Play Console Financial features selections/status; (2) verify live provider `date`/`timestamp`, supported symbols and per-currency age without exposing credentials; (3) reject/mark unavailable stale, future, missing or nonfinite observations; preserve observation time separately from ingestion time and enforce full expected-code coverage; (4) Firestore Emulator two-write partial-key merge plus canonical adapter and device/UI tests; (5) reconcile public 42-currency claim only against verified data coverage. Ordinary Store distribution and optional Promotional content remain separate. No product write or overall D1 closure.

Primary sources checked 2026-10-23:
- https://exchangeratesapi.io/documentation/ (provider `latest` response `date`/`timestamp` definitions)
- https://firebase.google.com/docs/firestore/manage-data/add-data (set merge semantics)
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/functions/index.js
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/lib/calculation/engine/calculation_engine_support.dart

## 2026-10-23 canonical FX adapter and calculation freshness mapping — downstream source subgate

**D1 HOLD / SOURCE MAPPING SUBGATE CLOSED AS VERIFIED; LIVE IMPACT UNKNOWN.** This reconciles the previous quote-time provenance finding with the **actual release-pinned canonical adapter and calculation resolver**. It is not another general FX study, not a Play Financial features declaration resolution, and not evidence of a deployed incident.

**Pinned product source, inspected 2026-10-23:**
- `yhappcom/yieldmax_tracker@1.0.29`, `functions/index.js` blob `46dd263e7c85d85599ed9d8301de3738beab6810`, lines 1302–1327: upstream quote `date`/`timestamp` ignored; UTC *execution date* is Firestore `exchange_rates/{documentId}`; `base: USD`, normalized `rates`, server `updatedAt` written with merge.
- `lib/calculation/adapters/firestore/firestore_canonical_adapter.dart` blob `d8562f0fc07a4db74624acf846d450f1e3158fc7`, lines 840–891 and 1315–1328: fetches `exchange_rates` documents by document ID; passes `doc.id` as `dateYmd` to `parseExchangeRateMap`; maps only `rates` and `base` into `CanonicalFxDailyRate`. No quote-observation date or server `updatedAt` enters the canonical FX DTO.
- `lib/calculation/models/canonical_input.dart` blob `eb9ea895bd3f556e5f119fe5abab4be34416f021`, lines 167–179: `CanonicalFxDailyRate` has only `dateYmd`, `base`, `rates`.
- `lib/calculation/engine/calculation_engine_support.dart` blob `51317c00ee77ecea84ccac6e2fe7671b42cf71b6`, lines 365–452: current-rate resolver sorts by canonical `dateYmd` and rejects only `ageDays > maxAgeDays` (Home/Stock Detail pass seven days). It checks base USD and positive selected-currency value, but **does not reject future-dated document IDs** (negative age). Historical at-or-before resolver chooses a positive rate at/before target date **without a maximum-age bound**. A date-sorted stale document may therefore be accepted as a historical conversion for a much later target, depending on actual data availability. These are distinct current and historical semantics.
- `lib/calculation/engine/calculation_engine.dart` blob `f9d493b11002bb17b16607140104472f05250d56`, lines 858–874 and 1307–1321: Home/Stock Detail current FX uses the above seven-day resolver; `fxUpdatedDateYmd` derives from the selected canonical document ID, not the provider's quote time.

**Reproducible isolated acceptance probe:** independent Node.js transcription of the cited mapping/resolver expressions, **7/7 assertions PASS**: document ID becomes `dateYmd`; stale provider observation is indistinguishable from fresh if rates and execution-day ID are identical; a synthetically future-dated document is admitted by the current-age check; a genuinely old document ID is rejected; absent currency remains unavailable; historical lookup has no max-age limit; empty FX input yields null even for USD. This is a source-expression/logic test only; **Dart/Flutter, Firestore Emulator, device, upstream API, and live backend were not executed**. Local handoff: `d1_fx_adapter_date_provenance_probe_2026-10-23.js` and `_results.json` (not committed). The writer normally creates an execution-day ID, so the synthetic future-ID scenario is a defensive input case, not a claim about ordinary writer output.

**Decision delta:** The prior conditional statement “if the canonical adapter uses the document date” is now **confirmed at release-source level**. Thus the code-level chain `provider observation fields discarded → ingestion-day document ID → canonical dateYmd → freshness/display FX date` is established. This is a **real provenance/claim-validity gap in inspected code**, not a proven live wrong rate, an actual 7-day violation, or a verified user-facing display defect. No blanket claim of bad FX or tax calculations is authorized.

**Acceptance next:** (1) obtain the submitted Play Console Financial features selections/status (top D1 production decision) and separate optional Promotional content eligibility; (2) if available, sanitized provider response with observation date/time and full code coverage, plus production write/read trace; (3) emulator/device scenarios for quote-age vs ingestion-age, future/missing dates, same-day partial-map merge, USD/no FX, missing currency, and historical rate age; (4) separately D2 operator AdMob event/revenue/policy evidence. Until actual evidence, D1 HOLD; do not expand Store currency/freshness claims. No product, live Firestore or Store change.

**Primary source paths:**
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/functions/index.js
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/lib/calculation/adapters/firestore/firestore_canonical_adapter.dart
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/lib/calculation/models/canonical_input.dart
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/lib/calculation/engine/calculation_engine_support.dart
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/lib/calculation/engine/calculation_engine.dart
