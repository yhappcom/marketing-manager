# Research 437 — LogMate Native/PWA Split and Manual-Sync Ad Monetization Admission Contract

Date: 2026-10-12 (Asia/Seoul)  
Evidence state: SOURCE + SYNTHESIS + MARKETING JUDGMENT; production advertising NOT VERIFIED / HOLD  
Scope: LogMate-specific applied research, not a universal ad-format rule  
Repository boundaries: `yhappcom/logmate` READ ONLY. All changes in this work belong exclusively to `yhappcom/marketing-manager`.

## 1. Decision question and product/business constraints

**Question:** For the professional-pilot LogMate product, which ads and serving systems, on which platforms, can generate sustainable ad-only revenue without degrading flight-record integrity, and can an advertisement on **user-initiated Manual Sync** be closed **immediately** without blocking or delaying the synchronization?

**Owner constraints:** no non-ad monetization; minimal/no direct paid acquisition; niche audience (professional/airline pilots); non-cluttered advertising; no ad gates for essential tasks. User's 2026-10-12 clarification: phone native app and tablet/EFB PWA are likely primary use, native tablet potentially limited. This **usage split is a planning hypothesis, not measurement**. Pop-up advertising may appear **only on the Manual Sync occasion**, must be closable immediately, and must not impede use.

**Product authority:** LogMate `MASTER.md` (at `main` commit `827a7deed162bf525313c6b4b9d244e56828a1c1`; retrieved 2026-10-12). MASTER §§0, 19 Stage 3 and product architecture, rather than marketing research, own final product implementation semantics.

## 2. Read-only LogMate evidence and temporal limitations [SOURCE]

- `README.md`: personal Pilot Logbook, manual entry possible without import; local-first core; Firebase authentication / minimal owner Sync layer; native iOS, native Android and tablet/EFB PWA as primary product targets; native tablet uses Tablet presentation when supported. Browser desktop/laptop design is out of V1 product scope.
- `MASTER.md` Stage 3, §19 (lines ~768–772): **Manual Sync only**. No automatic start on opening, resuming, or network recovery. The owner-approved *future* ad is shown on Manual Sync's progress surface, can be dismissed immediately, and its dismissal must not cancel Sync; Sync completion must reflect real bidirectional apply; success does not wait for the ad or force-dismiss it. Ad-network/SDK compatibility is explicitly OPEN.
- `MASTER.md` §0 and §19: production Sync and operational writer, import and tablet/EFB offline acceptance remain OPEN / NOT VERIFIED in stated checkpoints. Historical proof-of-concept or implementation foundations are not runtime product acceptance. `docs/evidence/stage-3-sync-ready-storage-audit-2026-10-08.md` expressly states that ad UI, SDK and Sync engine were not implemented at the audit. Later commits do not by themselves supply a live-pilot validation.
- `pubspec.yaml` on inspected main lists Firebase Auth/Core, HTTP, Google Sign-in, Sembast, path provider, intl etc.; no `google_mobile_ads` dependency in this manifest. **This is direct dependency evidence, not a global claim that every possible ad integration is absent.**
- `docs/specs/sync-activity-member-operations-spec.md`: operational `lastSyncAt` is server-observed only after successful authenticated foreground Sync; offline app usage is not a proxy for Sync. An empty-delta successful foreground Sync still counts as contact; failed/unauthenticated contact does not. Do not redefine `lastSyncAt` as ad engagement.
- `docs/specs/offline-acceptance.md`: real tablet/EFB installed PWA, offline restart, recovery, persistence, and no-network scenarios require physical acceptance evidence. Any ad implementation must not add dependency to these core scenarios.
- No LogMate files, PRs, issues, branches, dependencies, secrets, settings, or source lines were modified by this study.

Read sources:
- https://github.com/yhappcom/logmate/blob/827a7deed162bf525313c6b4b9d244e56828a1c1/MASTER.md
- https://github.com/yhappcom/logmate/blob/827a7deed162bf525313c6b4b9d244e56828a1c1/README.md
- https://github.com/yhappcom/logmate/blob/827a7deed162bf525313c6b4b9d244e56828a1c1/pubspec.yaml
- https://github.com/yhappcom/logmate/blob/827a7deed162bf525313c6b4b9d244e56828a1c1/docs/specs/sync-activity-member-operations-spec.md
- https://github.com/yhappcom/logmate/blob/827a7deed162bf525313c6b4b9d244e56828a1c1/docs/specs/offline-acceptance.md

## 3. Format and platform mechanism [SOURCE + SYNTHESIS]

### 3.1 Native phone (iOS/Android): primary supply candidate

Google Mobile Ads Flutter plugin supports **iOS and Android only**. The product has no inspected direct plugin dependency. AdMob is a **recommended evaluation vendor**, not an integrated/approved account state.

- **Standard interstitial:** hosted full-screen format used at natural transitions; the ad network owns presentation/dismiss mechanics. Immediate user-closability must **not** be presumed. Google Play's rule disallowing certain full-screen ads that cannot be closed after 15 seconds is a *policy ceiling*, emphatically **not** a product guarantee of an immediate X. A standard interstitial on Sync-start would also risk appearing between the user's command and intended result. **HOLD/REJECT for the strict owner requirement unless exact tested creative/SDK behavior demonstrably satisfies every invariant.**
- **App Open:** for genuine app entry/loading, not Manual Sync; LogMate's first professional task must not be delayed. **REJECT at V1.**
- **Rewarded/rewarded interstitial:** cannot make core logbook/Sync access contingent on an ad, artificial scarcity, or watching a clip. **REJECT for mandatory Sync and core value.** No optional separate valuable exchange is currently evidenced.
- **Anchored adaptive banner:** occupies a reserved layout position, can be native Flutter's `AdWidget`, does not need to be full-screen. **Candidate only inside an eligible, specifically designed non-blocking Manual Sync status container; no Home, entry, totals, import, certificate, export or recovery default ads.** Standard banners are not assumed to be safely dismissible unless container mechanics/policy checked.
- **Native ad (small template / appropriate native layout):** flexible in-app presentation. A **non-full-screen ad card inside a separately dismissible Sync panel** is the best functional candidate where immediate X is essential; must visibly label 'Ad', preserve AdChoices attribution, isolate SDK-managed click regions, avoid using an X overlapping/adjacent to creative, and pass provider/Store policy review. Use platform-specific native factories/templates and cross-platform parity tests. **Not yet policy-approved for this exact placement.**
- **300×250 display unit:** feasible only with space, tap-clearance and deliberate container dismiss mechanics. Google's 300×250 guidance specifically warns against custom close buttons overlaying or immediately adjoining the creative. Therefore do not implement the requested X as a button atop an ad frame.

### 3.2 Tablet native: a secondary cohort, not an unsupported platform

The same native AdMob mechanism could work technically on supported iOS/Android native tablet builds, but actual distribution, installation and frequency remain **UNKNOWN**. Maintain presentation support where applicable; do not invest in tablet-native-specific inventory absent observed usage/ROI.

### 3.3 Tablet/EFB PWA: independent web supply, not AdMob Flutter

Flutter Google Mobile Ads is **not a web advertising SDK**. Installing a PWA does not turn Safari/Chromium Flutter Web into a native AdMob inventory surface.

AdSense or Google Publisher Tag/Ad Manager web options need a **separate publisher/site eligibility, ad placement and web-runtime audit**, rather than plugging the mobile unit ID into PWA. Authenticated, locally rendered, thin or unavailable-to-crawler content makes content evaluation and approval particularly material; do not assume that web ad-network approval or policy eligibility exists. Google AdSense's software-app, pop-up/browser controls and inability-to-evaluate-content placement rules require careful interpretation for an installed standalone PWA. Test actual iPad Safari/EFB full-screen mode, ad rendering and offline/failure behavior under authorized publisher conditions. **Default: PWA AD-FREE / WEB ADS HOLD**; PWA functionality does not depend on a monetization outcome. Do not use an arbitrary WebView/iframe wrapper to pretend that native inventory is eligible.

Sources reviewed 2026-10-12:
- Google, Mobile Ads Flutter Quick Start: https://developers.google.com/admob/flutter/quick-start
- Google, Flutter native ads: https://developers.google.com/admob/flutter/native
- Google, Flutter anchored adaptive banners: https://developers.google.com/admob/flutter/banner
- Google, Flutter interstitial: https://developers.google.com/admob/flutter/interstitial
- Google, AdMob 300×250 banner / custom close risk: https://support.google.com/admob/answer/6293636
- Google, Full-screen ads Play policy: https://support.google.com/googleplay/android-developer/answer/9857753
- Google, interstitial disallowed placement: https://support.google.com/admob/answer/6201362
- Apple, App Review Guidelines §2.5.18: https://developer.apple.com/app-store/review/guidelines/
- Google, AdSense placement: https://support.google.com/adsense/answer/1346295
- Google, AdSense program policy: https://support.google.com/adsense/answer/48182
- Google, Native Ad attribution and AdChoices: https://developers.google.com/admob/ios/native/advanced
- Google Ad Manager, Native advanced dismiss options: https://support.google.com/admanager/answer/7031536
- Google, Flutter privacy GDPR/UMP and revocation: https://developers.google.com/admob/flutter/privacy/gdpr

## 4. Proposed Sync ad interaction contract [MARKETING JUDGMENT, not implementation approval]

**Proposed UI:** one Manual Sync progress/status surface, with a clearly bounded `Sponsored / Ad` slot below/away from operational status. If a separate ad panel/sheet is explored, an immediately available X belongs to the **LogMate container** and is geometrically separated from the provider-managed creative. Dismissing the ad closes **only the ad container**, never the underlying Sync or user access to true status. No fullscreen takeover or fake blocking spinner. Final layout, contrast, typography, accessibility and interaction geometry belong to Design Studio; this is a behavioral requirement.

State machine (two orthogonal states, not one modal state):

1. **Sync** `idle → explicit_user_request → pending/running → succeeded | failed | indeterminate`. Never start Sync merely because an ad loaded or closed. Actual local receipt/remote apply authority comes from product engineering. Respect existing label hierarchy `Not synced yet`, `Syncing…`, `Failed`, `Sync Complete`, `Last synced: HH:MM`, `Changes not synced` per MASTER.
2. **Ad** `not_eligible | consent_pending | requesting → ready → visible → dismissed | error | expired`; this must not change `Sync`.
3. **Eligibility gate:** manual user start + real active Sync window + online if required + advertiser consent/request eligibility + SDK/readiness + no protected modal/form/recovery + within local frequency cap. If any gate fails, **no ad**. Do not delay Sync while checking any gate.
4. **Timing:** a preloaded, eligible ad may be displayed only while the actual Sync progress surface exists; late ad load after successful/failed completion is discarded, **not** revealed on the next content screen. Do not extend progress artificially to meet an impression target.
5. **Immediate dismissal:** X (or equivalent accessible dismiss) present from first visible ad frame; closes/removes ad without stopping, retrying, faking success or hiding critical Sync state. Suppress re-display for the same Sync attempt.
6. **End of Sync:** completion/status feedback is authoritative, visible on time whether ad is present, dismissed or failed. Final handling of still-visible ad must never postpone or mask success/failure; exact container transition requires Design Studio/prototype and policy check.
7. **Failure/offline/retry:** Sync stays functional ad-free. Retry should not necessarily display another ad; use conservative exposure caps and no surprise ad on navigating away/back.

**Launch candidate:** one non-full-screen, manually dismissible **native ad or reserved-size adaptive banner within Sync** (format contingent on provider-policy and usability tests). No full-screen interstitial/app-open/rewarded for V1, no ads on Home and protected work. This reconciles the owner's pop-up *occasion* requirement without claiming the chosen SDK grants instant-dismiss interstitials.

**Provisional conservative exposure budget for prototype only (not an owner-approved fixed policy):** maximum one ad-render per explicitly initiated Sync, no redisplay after X, a proposed 24-hour user-level cap of one visible Sync ad, and no demand to complete an ad view. Empirical workload/revenue data can justify adjusting *down* or revisiting the cap, subject to owner decision; never raise pressure just to compensate for low DAU.

## 5. Platform/surface decision matrix

| Surface | iOS/Android native phone | Native tablet | Tablet/EFB PWA |
| --- | --- | --- | --- |
| Welcome/Auth/onboarding | NO ADS | NO ADS | NO ADS |
| Home/flight create-edit/records/search/totals | NO ADS | NO ADS | NO ADS |
| Import, duplicate conflict, Previous Total, backup/export, recovery | NO ADS | NO ADS | NO ADS |
| Explicit Manual Sync progress | Small native/adaptive slot **CANDIDATE / HOLD-GATES** | Same contract, lower priority | **HOLD web supply; default ad-free** |
| App cold open/resume | NO APP-OPEN ADS | NO APP-OPEN ADS | NO ADS |
| Extra passive secondary surfaces | HOLD; separate proposal and owner approval required | HOLD | HOLD |

Note: 'CANDIDATE' is a research recommendation, not evidence that LogMate currently shows ads or that monetization will be approved.

## 6. Advertising economics and niche supply ceiling [MODEL, not observed revenue]

A professional-pilot niche has lower potential eligible users and Manual Sync is explicitly **not** automatic. Therefore ads per user are structurally limited by actual user-initiated Sync frequency. Model:

`Impressions/day = active users × manual sync attempts/user/day × eligible share × impression delivery rate × eligible placements/attempt`

`Modeled revenue/day = impressions/day × assumed effective CPM / 1,000`.

**Illustrative scenario only, no claimed AdMob rate or real user count:** 1,000 active users × 0.30 Manual Sync attempts/day × 70% eligibility × 80% delivered impressions × 1 slot = **168 impressions/day**. At a deliberately assumed **$3 eCPM** this is **$0.504/day** or **$15.12 per 30 days**. If users number 10,000 with every other assumption fixed, gross modeled revenue is **$151.20/30 days**. These are sensitivity examples, **not forecasts**; real geo, consent, fill, CPM, demand, active pilots and cost data are UNKNOWN. Ads with a higher headline eCPM but materially lower fill or retained professional usage can perform worse.

**Consequence:** do not invent extra Syncs, turn on background Sync, force rewarded ads or interrupt Flight entry to manufacture revenue. Investigate sustainable qualified-user penetration, ad readiness, permitted demand-source competition, and the net contribution of an actually-safe Sync slot. Evaluate potential Firebase/network costs separately; the goal is durable net economics, not nominal impressions.

## 7. Instrumentation, tests and stopping gates [VALIDATION]

Track separately, with privacy-minimized event identifiers and **without flight routes, crew details, logbook contents, Firebase UID or other operational records as advertising targeting signals**:

- `manual_sync_started`, `sync_attempt_id` (ephemeral analytics only), `sync_completed`, `sync_failed`, elapsed time and actual server-authenticated receipt; offline false-completion = STOP.
- `ad_slot_eligible` (reason code), `ad_request`, `ad_load_success/error`, `ad_visible_impression`, `ad_dismiss`, paid event/precision/currency/source, load latency; keep test traffic separate.
- Ad-dismiss responsiveness, Sync success and duration exposed vs unexposed, return to core task, failed/aborted Sync, accidental-click complaints, app crashes, native/PWA performance and first/repeated specialist value.
- Outcome denominator **revenue per eligible user / genuine Sync**, not sessions manufactured via ad pressure. Paid-event estimated values are not finalized publisher settlement.
- Sanity cases: dismiss immediately; dismiss before load; success during load; success while ad visible; fail/retry; offline; authentication expiry; navigation/back; device rotation; accessibility 200% text; native phone light/dark; native tablet and iPad PWA; screen reader; restored app session; no duplicate impression; user consent revoked. Any loss/delay of data/control = STOP / disable remotely if possible.
- Operational launch gates: consent/UMP and revocation where applicable, ATT/disclosure applicability, store privacy/ads disclosures, AdMob account/app/ad-unit readiness, app-ads.txt where required, real SDK format close behavior, mediation/service quality, and confirmed policy-safe visual geometry. Ads remain off if any critical prerequisite is UNKNOWN.
- Sparse-sample inference: do not treat eCPM, single-week revenue or an observed exposure cohort as causal. Use phased canaries/holdout only when sufficient sample and owner approval exist.

## 8. Cross-domain check and handoff

- **Company constraint:** niche-only, ad-only revenues, cash-light distribution, no intrusive ad gating — direct read of `context/COMPANY_MARKETING_CONSTRAINTS.md`.
- **Product truth:** `MASTER.md` authority; explicitly manual Sync is confirmed as product direction, but production Sync/ad runtime remains OPEN. Engineering alone owns code and Sync safety; LogMate repository read-only during this marketing assignment.
- **Design Studio:** must own dismissible ad container/presentation, X separation, ad attribution, light/dark, Mobile/Tablet, accessibility and error/completion priority. Relevant canonical marketing alignment: `coordination/DESIGN_STUDIO_ALIGNMENT.md`. No unverified pixel mock is a production decision.
- **Web Manager:** independent PWA/web serving, publisher eligibility, client loading/caching, installed Safari/EFB constraints, offline fail-open, privacy/cookie consent and web performance. Source: `yhappcom/web-manager/STATUS.md` (read-only, PWA specialization). Do not treat web runtime as mobile native.
- **Marketing:** audience/monetization fit, conservative policy/format admission, testing, telemetry, frequency budgets and sustained revenue.
- **Prior marketing research:** 017, 068, 186, 290, 389, 390, 403, 416 and 431; this file applies their protected-workflow model to the owner-approved Manual Sync and unresolved PWA supply architecture rather than restarting generic ad education.

## 9. Decision register

| Question | State as of 2026-10-12 | Owner/next proof |
| --- | --- | --- |
| Is LogMate Manual Sync explicit and local-first? | **PRODUCT DIRECTION CONFIRMED** | `MASTER.md`, engineering implementation evidence later |
| Immediate-close ad only on Manual Sync? | **OWNER INTENT CONFIRMED**; exact serving mechanism unverified | format/prototype/policy acceptance |
| Standard interstitial acceptable for instant X? | **HOLD/NOT ESTABLISHED**; not a default recommendation | provider SDK and creative-specific runtime proof |
| Small/native/adaptive Sync ad? | **MARKETING CANDIDATE, NOT FINAL APPROVAL** | Design Studio + engineering + policy review |
| Can PWA use Flutter mobile AdMob? | **NO** per official platform support | independent web monetization supply study |
| Will authenticated installed PWA qualify for web ads? | **UNKNOWN / HOLD** | Web Manager + actual publisher review/test |
| Native tablet user share and Sync usage? | **UNKNOWN** | device-class analytics, privacy-eligible |
| Real fill/eCPM/revenue/cost/contribution? | **UNKNOWN** | real accounting-validated telemetry |
| Is monetization already implemented in LogMate main? | **No direct mobile-ad SDK dependency observed**; full shipped/runtime ads not verified | build/device audit |
| Extra non-Sync advertising? | **NOT AUTHORIZED AS A DEFAULT; HOLD** | separate owner decision and workflow analysis |

## 10. Recommended next deep research block / re-entry

A. Map actual designed Manual Sync steps, state transitions, and timing once production UX/backend code exists; compare ad-free and dismissible-ad paths with fake/real payload outcomes.  
B. Native policy/format feasibility prototype for **immediate dismiss** (small native vs adaptive banner; reject normal interstitial if unable), inspect actual iOS/Android callbacks and accidental-click geometry.  
C. PWA-specific publisher applicability and feasibility under installed iPad/EFB, offline, and authenticated content; default no ads until verified.  
D. Economics backed by real DAU/platform split, Manual Sync cadence and eligible regional demand, not speculative pilot-population multipliers.  
E. Design Studio and Web Manager handoffs without editing LogMate source, with production authorizations/implementation deferred to owning project.

**Disposition:** **PROVISIONAL GO for research and format prototype in a separate workstream; HOLD production SDK installation, live ad requests, extra ad inventory, and any revenue forecast.**

**Scope protection:** This document is not a request to modify `yhappcom/logmate`; all implementation would require a separate explicit product-side instruction.
