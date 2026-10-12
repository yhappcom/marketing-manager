# LogMate One-Pass Advertising Implementation Specification V1

**Prepared:** 2026-10-12  
**Authority:** Marketing Manager implementation handoff — NOT a LogMate product-authority amendment  
**Read baseline:** `yhappcom/logmate/main@827a7deed162bf525313c6b4b9d244e56828a1c1` (read-only)  
**Research:** `research/438_logmate_one_pass_ad_architecture_and_launch_gates.md` and `research/437_logmate_native_pwa_manual_sync_ad_monetization.md`  
**Integration rule:** use this document **only after** Engineering verifies there is a genuine implementation of user-initiated production Manual Sync. If absent, build/test ad interfaces in isolation only; do not fake a Sync engine or reinterpret product state.  
**Do not edit `yhappcom/logmate` under the marketing research instruction.** This is a specification for a separately authorized future Codex product task, not an instruction to automatically execute it.

## A. Product acceptance in one sentence

When the user deliberately triggers a legitimate, safe, authorized Manual Sync on native iOS/Android, the existing Sync starts and reports real status immediately; an optional, clearly labeled native AdMob banner inside an instantly dismissible non-critical area may be shown if eligible; the advertising lifecycle must **never** block, modify, cancel, retry, extend, disguise or complete Sync; iPad/EFB PWA remains ad-free.

## B. Exact existing touchpoints (read at pinned baseline)

| Product file | Observed source | Future work permitted only after separately authorized |
| --- | --- | --- |
| `lib/main.dart` | orientation initialization then `runApp` | never await ad SDK/consent before first frame |
| `lib/app/logmate_app.dart` | shell renders before optional Firebase initialization | optional async ad bootstrap; no startup gate |
| `lib/app/session_gate.dart` | owner authority/routes | ensure ad eligibility only for verified/recovered allowed owner; stale callbacks invalidated |
| `lib/presentation/adaptive/logmate_presentation_target.dart` | `RuntimeFamily.native/web` independent of layout class | resolve provider by **runtime**, not tablet/phone breakpoint |
| `lib/screens/home_screen.dart` | opens Settings | no Home ad; no new Sync trigger without product-authorized integration |
| `lib/screens/settings_screen.dart` | currently no Sync tile | add user Manual Sync access only as part of accepted real Sync UX |
| `pubspec.yaml` | no `google_mobile_ads` | version/Flutter toolchain resolution; pin tested SDK |
| `android/app/src/main/AndroidManifest.xml` | no AdMob App ID | add approved ID and required privacy metadata |
| `ios/Runner/Info.plist` | no AdMob App ID | add approved ID; audit tracking/privacy requirements |
| `web/manifest.json` | `display=standalone` | NO AdSense/GPT scripts, no native SDK, zero ad activity |
| `web/privacy/index.html` | may display non-primary ads; never personalize using logbook contents | actual disclosure/vendor/region policy reviewed with Web Manager before release |
| `MASTER.md` §19 | ad planned but SDK/support OPEN | product source of truth, **not** modified by Marketing Manager |

## C. Proposed isolated files/interfaces (names illustrative; adapt to verified product architecture)

```text
lib/monetization/ad_policy.dart
lib/monetization/ad_privacy_coordinator.dart
lib/monetization/ad_provider.dart
lib/monetization/ad_provider_mobile.dart
lib/monetization/ad_provider_web.dart
lib/monetization/manual_sync_ad_controller.dart
lib/monetization/ad_metrics_sink.dart
lib/screens/manual_sync_screen.dart             # only if real Sync owns screen
lib/screens/manual_sync_mobile.dart             # adaptive semantics
lib/screens/manual_sync_tablet.dart
test/monetization/ad_policy_test.dart
test/monetization/manual_sync_ad_controller_test.dart
test/monetization/ad_lifecycle_races_test.dart
test/monetization/noop_web_ad_provider_test.dart
test/monetization/sync_status_ad_independence_test.dart
```

Prefer a single shared policy/controller with platform adapters and mocked interfaces. Ensure iOS/Android dependency is not imported in a way that breaks Web compilation. The native provider shall never import product logbook repository/ledger/Sync payload types; only a **read-only Sync-attempt state token** reaches it. The PWA provider shall never make a network ad request.

## D. Nonnegotiable call graph

```text
Tap Manual Sync
    │
    ├── [1] Production ManualSyncCoordinator.start()  → authoritative Sync state stream
    │                         │
    │                         ├── server receipt / reconciliation
    │                         └── true completion/error/pending into Sync UI
    │
    └── [2] optional AdOpportunityController.maybeShow(attemptRef)
                              │
                              ├── native runtime only; feature flag + cap + consent + policy checks
                              ├── asynchronous load (never awaited by Sync)
                              ├── render labeled isolated ad slot only if current attempt/state permits
                              ├── X removes ad slot immediately; async dispose SDK object
                              └── metrics only; **no outgoing control edge to Sync**
```

All success, failure, retry, `lastSyncAt`, pending dirty state and flight records are exclusively owned by the existing production coordinator/repository, NEVER by the ad controller. Side effects cannot cause extra Firebase writes or reads during ordinary logbook usage.

## E. Ads UX and lifecycle algorithm

```text
function onUserTapManualSync():
  attempt = syncCoordinator.startUserInitiated()
  showSyncStatus(attempt)
  launchNonBlocking(maybeAd(attempt))    # never await

async function maybeAd(attempt):
  if not native or not enabled or not eligible or not currentConsent:
      return
  if adCapExhausted or adWasDismissed(attempt):
      return
  ad = await nativeAdProvider.loadUsingTestOrApprovedUnit()
  if attempt != currentAttempt or dismissed or statusViewGone or
     not contextAllowsAd or syncTerminalBeforeFirstDisplay:
      ad.dispose()
      return
  renderOnlyAdSlot(ad)  # never covers or changes Sync status

function onUserTapX(attempt):
  markDismissed(attempt)
  synchronouslyHideAdSlot()
  disposeAfterWidgetUnsubscription()
  # do NOT call Sync cancel, pop Sync screen, or set success

onSyncTerminal(realReceipt):
  renderRealSyncResultImmediately()
  forbidFutureAdRequestsForAttempt()
  # existing visible ad may remain within current result context,
  # never force-dismiss solely for completion or delay status.
```

**Race discipline:** use monotonically increasing local attempt generation; ignore old `onAdLoaded`/paid callbacks when dismounted or owner signout; avoid double disposal and duplicate requests; clear ad resources when context is exited, revoked or backgrounded as policy requires.

**Visible X:** this is the app's **ad-container dismiss**, not an SDK-controlled full-screen-ad close button. Keep visibly distinct from Sync status/Cancel and paid creative; no overlap or near-ad accidental-click geometry. Access available without countdown or ad interaction. Design Studio owns actual geometry/keyboard focus and 200% scaling, iOS/Android platform taps.

**Placement:** in Manual Sync status/result screen only; never within flight import, logs, Home or forms; do not use Home bottom anchored unit; no modal blocking the status; no mandatory video.

**Exposure policy default for pilot:** one possible visible ad per honest Manual Sync, never redisplay after X, and a proposed 24-hour locally stored maximum one visible ad/user (NOT an already-approved company setting). Suppress for initial/low-value/short operations as needed. No hidden app-open/auto-sync triggers and no deliberate ad request until user explicitly initiated Sync (but consent-info check at launch per UMP policy remains separate).

## F. Ad SDK exact integration order

1. Verify fresh exact-head Sync implementation and supported Flutter version (current Google docs Flutter >=3.38.1; do not derive it from Dart SDK alone).
2. Resolve `google_mobile_ads` version compatible with the exact checkout, iOS/Android build tools and PWA conditional implementation. Pin/test `pubspec.lock`.
3. Add AdMob **application IDs** to AndroidManifest and Info.plist from owner AdMob account. Do not confuse App IDs (tilde `~`) with **ad unit IDs** (slash `/`).
4. Keep SDK initialization asynchronous and independent of first frame and normal record tasks. Register listener before showing; duplicate-init idempotence.
5. UMP `requestConsentInfoUpdate()` each launch, show form/Privacy Options only where appropriate and platform-required, `canRequestAds()` before request, deduplicate consent callback routes. Verify ATT requirements on iOS if cross-company tracking/IDFA used; deny/skip behavior works.
6. Begin with **one anchored adaptive banner ad unit per OS** in the isolated Sync slot. Correct native width/height and `AdWidget` sizing, pre-eligible request logic, `BannerAdListener` error/impression/click lifecycle, dispose after unmount. Disable automatic banner refresh for this short-lived placement when publisher configuration allows; do not trigger manual repeated refresh.
7. If banner produces unsafe geometry or unacceptable latency/low delivery, evaluate Flutter `NativeAd` `TemplateType.small` independently, with ad badge and AdChoices. Do NOT stack banner and native or ship both simultaneously to raise impressions.
8. Use Google provided **test ad unit IDs only** before publisher approval; Android sample banner `ca-app-pub-3940256099942544/9214589741`, iOS sample banner `ca-app-pub-3940256099942544/2435281174` (official docs, checked 2026-10-12). No live test clicking. Replace only after publisher approval.
9. `NoOpWebAdProvider` with zero JS/HTTP ad side effects. Prove `flutter build web`, installed PWA offline restart and no extra third-party origin capability.
10. Apply feature flag OFF by default with a product-approved operational disable mechanism. A remote kill config must not force app-start network access or fabricate Sync; if no safe remote facility exists, release flag + audited hotfix path is acceptable.
11. Audit app-ads.txt via real Store developer-site domain, AdMob app verification, policy center, app readiness, Store privacy declarations and public LogMate policy. Never fabricate the publisher ID or Store account state.

## G. Acceptance matrix (each case must be evidenced for exact tested build)

| ID | Given / When | Must be observed | Blocking if violated |
| --- | --- | --- | --- |
| M01 | No native ad adapter / PWA | Sync works, zero ad request | YES |
| M02 | SDK delayed 30s | Sync progress starts without waiting | YES |
| M03 | Offline user explicitly taps Sync | Honest failed/pending status, no ad blocking | YES |
| M04 | Sync completed zero delta before ad load | True completion, no late creative | YES |
| M05 | Ad loads then X tapped immediately | Ad slot gone next UI frame or equivalent immediate feedback, Sync persists | YES |
| M06 | X tapped while loading / stale callback arrives | No creative shown, resource freed | YES |
| M07 | Sync terminal while ad already visible | Status updates, no forced dismiss/delay | YES |
| M08 | Ad SDK failure | Sync unaffected; no app crash | YES |
| M09 | Repeated taps / retry | Honest Sync de-dup and one ad attempt cap | YES |
| M10 | Sign out / owner mismatch / deletion lock | Ad disposed, no stale render or data disclosure | YES |
| M11 | New frame after native ad was disposed | No duplicate dispose / native plugin crash | YES |
| M12 | Native compact/expanded, light/dark, rotation | Status, copy, X accessible, ad never overlaps controls | YES |
| M13 | Text scale 200%, VoiceOver/TalkBack/keyboard focus | Reading order and dismiss operable | YES |
| M14 | App background/foreground | No automatic Sync, no auto-ad | YES |
| M15 | Consent denied/revoked/not eligible | Zero disallowed requests, core use intact | YES |
| M16 | Ad impression vs load vs paid | Correct distinct event counts, no fabricated revenue | YES |
| M17 | Test ID and test device | Test ads only in development; test clicks not production traffic | YES |
| M18 | Real pilot ledger inspected in traffic/log | No routes/crew/flight/UID/email sent as ad targeting | YES |
| M19 | PWA offline real iPad/EFB restart | Original app and record recovery unaffected, no ads JS, no false Sync receipt | YES |
| M20 | Actual publisher domain/store/app-ads.txt | Verified AdMob account-side readiness before live requests | YES |
| M21 | Production crash/latency/record save regression | Zero relevant integrity regressions; latency threshold agreed beforehand | YES |
| M22 | Ad X accidentally triggers ad click | Zero reproducible overlap/misclick geometry | YES |
| M23 | No advertisement is available ever | App remains complete/useful and Manual Sync valid | YES |
| M24 | Real paid impression ILAR event | Source, precision, micros, currency recorded without user logbook data | YES |

Check native iPhone & Android physical devices (and native tablets when released) under real OS versions, simulator/CI tests, actual offline-installed iPad/EFB PWA. CI exact HEAD and device acceptance must be separated; product's existing CI strategies remain authority.

## H. Publisher, policy and privacy operator checklist

- [ ] Google Play and Apple product identity, storefront live status and Ads disclosure checked, not assumed.
- [ ] AdMob app record/approval, Android/iOS separate IDs, accepted ad units and Policy Center verified.
- [ ] Store-associated Developer Website and `app-ads.txt` text, URL, crawler status and app readiness verified.
- [ ] UMP configured, per launch update, `canRequestAds()`, privacy options, denied/expired/revoked.
- [ ] iOS ATT necessity reviewed based on actual tracking/third-party SDK use, disclosures accurate.
- [ ] App Store Privacy/Play Data Safety/privacy page/support in line with real transmitted SDK data.
- [ ] Appropriate/ad-age reporting and AdChoices requirements; account/vendor controls and contact channel.
- [ ] Fake/blank content and forbidden AdSense software/popup/standalone context avoided; PWA has no ad runtime.
- [ ] Feature flag defaults off, local/offline product has no dependency on its configuration fetch.
- [ ] No sensitive logbook data or Sync receipts passed to advertising.
- [ ] Field monitoring can remotely or promptly halt unsafe monetization without halting logs or Sync.

## I. Revenue and acceptance decision

Capture `user_manual_sync_attempt`, Sync true server-success/failure, native runtime, eligibility reason, ad request/load/impression/host dismiss, paid-event value micros/currency/precision/source, latency and errors; use ephemeral correlation not pilot operational IDs. Record observed impressions and publisher finalized statements separately. Show revenue per **eligible attempted Sync**, not raw impressions/session, and regressions in repeat specialist value, crash rate, completed useful Sync, negative reviews, accidental clicks and memory/battery.

Model: `30d gross ≈ 30 × daily_native_active_users × manual_syncs/native_user/day × ad_eligibility_rate × impression_delivery_rate × impressions_per_attempt × effective_CPM/1000`. All factors presently UNKNOWN; no vendor CPM is assumed.

**Release hard gate:** if production Sync, immediate dismiss, policy/consent, publisher authorization or device acceptance is unavailable, ship an ad-free LogMate build. Do not delay product launch or Manual Sync for advertising.

## J. Code assistant ready handoff prompt

> Implement the **LogMate Manual Sync advertising contract** using this specification and research 438, only after confirming the current LogMate checkout and a real production Manual Sync coordinator/status UI. Protect all product invariants in MASTER.md. Use Android/iOS Google Mobile Ads with one isolated, dismissible, labeled anchored adaptive banner as the first test candidate; attach SDK status events separately from Sync and never block completion. Keep iPad/EFB PWA on NoOp ad provider with no advertising JS. Add correct consent/verification/privacy integration and exact-head tests; default live advertising disabled. Do not claim release eligibility until policy, publisher and real-device gates pass. Any missing Sync integration is a blocker: deliver separately reviewed interfaces/tests instead of inventing a Sync success path. Preserve original logbook data/records and established owner authority. The Marketing Manager workstream is **read-only** against this product repository; actual implementation requires a separately authorized Codex/worktree task.

## K. Evidence and ownership

- Product source: https://github.com/yhappcom/logmate/blob/827a7deed162bf525313c6b4b9d244e56828a1c1/MASTER.md
- Design Studio: https://github.com/yhappcom/design-studio/blob/main/case-studies/logmate/OPERATIONAL_GEOMETRY_CONTRACT_20260919.md
- Web Manager PWA isolation: https://github.com/yhappcom/web-manager/blob/main/research/096-pwa-sensitive-context-origin-third-party-capability-isolation.md
- Current official AdMob Flutter: https://developers.google.com/admob/flutter/quick-start ; https://developers.google.com/admob/flutter/banner
- Publisher policy: https://support.google.com/adsense/answer/1346295 ; https://support.google.com/admob/answer/6293636 ; https://support.google.com/admob/answer/14538460
- Apple: https://developer.apple.com/app-store/review/guidelines/ ; https://developer.apple.com/documentation/apptrackingtransparency
- Consent: https://developers.google.com/admob/flutter/privacy
- Marketing: https://github.com/yhappcom/marketing-manager/blob/main/research/438_logmate_one_pass_ad_architecture_and_launch_gates.md

**Research sign-off:** one-pass handoff-ready **CONDITIONAL**, NOT a live-ad go-live sign-off. All external policy references retrieved or verified on 2026-10-12.
