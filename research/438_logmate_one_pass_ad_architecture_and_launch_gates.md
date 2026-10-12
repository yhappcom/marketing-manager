# Research 438 — LogMate One-Pass Advertising Architecture: Native Manual Sync, PWA Exclusion, Policy and Unit Economics

Date: 2026-10-12 (Asia/Seoul)  
Status: **DEEP FOLLOW-UP COMPLETE / ENGINEERING HANDOFF READY AS A CONDITIONAL SPEC / PRODUCTION ADS HOLD**  
Scope: one integrated application study and implementation decision. Not a claim of live acceptance, legal clearance, or installed SDK.  
Evidence labels: [SOURCE] first-party product/vendor material; [SYNTHESIS] cross-source inference; [RECOMMENDATION] reversible implementation choice; [OPEN] condition lacking verification.  
**Preservation rule:** `yhappcom/logmate` is READ-ONLY. Persist all research and implementation guidance in `yhappcom/marketing-manager`.

## Executive decision

**Recommended release design: manual-Sync-only, iOS/Android-native AdMob anchored adaptive banner in a distinctly labeled, immediately dismissible, nonblocking Sync status surface; no full-screen takeover; PWA entirely ad-free in first release; feature flag off unless all acceptance gates pass.**

This is **one shared behavioral contract**, not one ad SDK across platforms. Native tablet shares the same native adapter when relevant; PWA uses a no-op provider. First candidate is an anchored adaptive banner because the Flutter plugin documents its native lifecycle with relatively low layout/integration cost. Second candidate is `NativeAd` small template if the banner cannot satisfy geometry/provider eligibility. Do not assume either candidate passes until real-device creative and policy testing. Standard interstitial and App Open are rejected for this application of the owner's immediate-close/only-on-Sync requirement. Rewarded formats cannot be mandatory for logbook/Sync.

An ad opportunity is strictly an optional side effect of a **genuine user-initiated foreground Sync**. The ad may not control whether Sync is authorized, executed, completed, reported, retried, or resumed. Do not modify Sync cadence or create fake waiting time to increase inventory.

See actionable Codex/engineering handoff: `projects/logmate/ads/ONE_PASS_IMPLEMENTATION_SPEC_V1.md`.

## 1. Product authority and verified implementation inventory [SOURCE]

Source: `yhappcom/logmate/main` Git tree HEAD `827a7deed162bf525313c6b4b9d244e56828a1c1`, directly checked 2026-10-12.

- `MASTER.md` §19 Stage 3 (lines ~768–772): local-first and **Manual Sync only**; opening, resuming and network recovery cannot initiate Sync. A future immediately closable ad may appear on Sync progress; closing the ad does not stop Sync; actual bidirectional completion, not ad lifecycle, controls Sync Complete; Sync success does not forcibly close ad or wait for it; ad load failure does not stop Sync.
- `README.md`, `MASTER.md`: native iOS/Android and tablet/EFB PWA are first-class targets. Native tablet is a supported presentation target, not assumed to be non-existent. Owner's expectation that native-tablet adoption is low is a **hypothesis, not measured fact**.
- `lib/presentation/adaptive/logmate_presentation_target.dart`: a source-level `LogMateRuntimeFamily {native,web}` separate from `LogMateLayoutClass {compact,expanded}`; `LogMatePresentationResolver` uses `kIsWeb` for runtime and shortest-side 600 for composition. **The ad provider must branch on runtime, never merely on size.**
- `lib/main.dart`: native phone orientation initialization precedes `runApp`; `lib/app/logmate_app.dart` intentionally renders a product shell before optional Firebase attachments; `SessionGate` owns owner access and passes a repository opener into `HomeScreen`; do not await ads/consent in this critical app bootstrap.
- `lib/screens/home_screen.dart` opens `SettingsScreen`; current `lib/screens/settings_screen.dart` shows Import shell, Previous Total and Sign Out, **no Manual Sync entry** in inspected source; `MASTER.md` states production Sync/UI remains OPEN. Therefore neither advertisement nor Sync may be claimed implemented.
- `pubspec.yaml`: `google_mobile_ads` absent from direct dependencies. `android/app/src/main/AndroidManifest.xml` and `ios/Runner/Info.plist` do not contain inspected AdMob App ID entries.
- `web/manifest.json` sets `display: "standalone"`; the app's Flutter web/PWA runtime is sensitive, locally authoritative record software. `web/privacy/index.html` currently anticipates possible advertising on non-primary surfaces and says logbook contents are not used to personalize ads; nevertheless publisher/vendor implementation and final public policy/Store consistency remain unverified.
- `docs/specs/sync-activity-member-operations-spec.md`: `lastSyncAt` has a server-authenticated success meaning; an impression or Sync-start is not success evidence.
- `docs/operations/ci-validation-strategy.md`: exact-head format/analyze/test/build evidence ≠ physical device acceptance; preserve these separate gates.
- `docs/specs/offline-acceptance.md`: tablet/EFB offline restart and recovery require actual device tests.

**Source authority limit:** these observations are of the checked remote `main`; unmerged local worktrees / deployed binaries / publisher consoles may differ. Require fresh exact-head reconciliation before engineering edits.

## 2. Format/platform admissibility and contradiction register [SOURCE + RECOMMENDATION]

| Format/surface | Functional reality | Decision now |
| --- | --- | --- |
| Android/iOS anchored adaptive banner inside Manual Sync | `BannerAd` + `BannerAdListener` + `AdWidget`, size and load lifecycle documented; app can remove its **own** surrounding slot; X separated from ad creative | **PREFERRED PROTOTYPE**, still policy/UX HOLD |
| Android/iOS small `NativeAd` template | Flutter templates small/medium; more styling, advertiser asset attribution and AdChoices requirements; template or platform-specific integration | **SECONDARY CANDIDATE**, more test burden |
| Ordinary full-screen interstitial | Google network-controlled full-screen close; immediate X neither universal nor guaranteed; Sync command isn't necessarily a post-task natural transition | **REJECT** for strict requested use |
| App Open ad | App entry/loading, not Manual Sync; risky to first professional value | **REJECT** |
| Rewarded / rewarded interstitial | Core Sync/recordkeeping cannot depend on viewing an ad | **REJECT** |
| Collapsible banner | Collapse reduces height but not necessarily fully dismisses; may still overlap/protrude | **NOT SUBSTITUTE** for immediate X |
| Installed iPad/EFB PWA AdMob Flutter | Official mobile SDK supports Android/iOS, not web | **TECHNICALLY INAPPLICABLE** |
| Installed iPad/EFB PWA AdSense in Sync popup | AdSense rules restrict software embedding, no-content screens, certain popup/window contexts and browser windows without visible navigation/URL controls; standalone PWA plus protected local record creates security and content-review complications | **REJECT AS DEFAULT RELEASE DESIGN / HOLD ANY ALTERNATE WEB PRODUCT AFTER SPECIFIC PUBLISHER APPROVAL** |
| Native iPad/Android tablet | Supported native runtime, technical adapter can be reused; adoption/ROI unmeasured | **SUPPORTED, NO SEPARATE FORMAT PROJECT** |

**Crucial nuance:** "AdSense prohibited on every PWA" is not established. Public web content that genuinely meets publisher and browser rules is different from a standalone authenticated locally authoritative LogMate Sync panel. No web ad SDK or third-party script should be introduced into this PWA origin without independent publisher approval and Web Manager threat model. No vendor approval was obtained in this study.

### Primary policy anchors, checked 2026-10-12

- Google Mobile Ads Flutter Quick Start (iOS/Android only, current Flutter prereqs/manifest, SDK initialization): https://developers.google.com/admob/flutter/quick-start
- Banner lifecycle, size, test units, `AdWidget`, disposal, refresh: https://developers.google.com/admob/flutter/banner
- Native templates, small vs medium: https://developers.google.com/admob/flutter/native and https://developers.google.com/admob/flutter/native/templates
- AdMob close-button proximity / misclick: https://support.google.com/admob/answer/6293636 and https://support.google.com/admob/answer/6128877
- Interstitial natural breaks: https://developers.google.com/admob/flutter/interstitial
- Google Play unexpected full-screen policy; maximum delay ceilings do **not** guarantee immediate X: https://support.google.com/googleplay/android-developer/answer/9857753
- AdSense software/window/popup/content/URL bar and placement rules: https://support.google.com/adsense/answer/48182 and https://support.google.com/adsense/answer/1346295
- Apple App Review §2.5.18 advertising label/close/report inappropriate ads: https://developer.apple.com/app-store/review/guidelines/
- Google Flutter UMP consent/update and `canRequestAds`: https://developers.google.com/admob/flutter/privacy
- Apple ATT conditions: https://developer.apple.com/documentation/apptrackingtransparency
- AdMob new-app app-ads.txt verification and readiness: https://support.google.com/admob/answer/14538460
- Authorized seller domain and store link mechanics: https://support.google.com/admob/answer/9776740
- Test devices/in-context Ad Inspector: https://developers.google.com/admob/flutter/test-ads and https://developers.google.com/admob/flutter/ad-inspector/test-ad-units
- ILAR value micros and precision (SDK-platform reference; verify actual Flutter plugin callbacks at exact version): https://developers.google.com/admob/android/next-gen/impression-level-ad-revenue

**Temporal caveat:** vendor quick start now specifies Flutter 3.38.1+ (observed Oct 12); remote LogMate pubspec Dart `^3.12.0` does NOT by itself verify the installed Flutter toolchain. Run `flutter --version` and dependency resolution in the authorized development worktree before choosing versions. Do not copy historic plugin snippets or Gradle setup without compatibility checks.

## 3. Exact state semantics: Sync is the authority, ad is disposable [RECOMMENDATION]

Two distinct finite-state machines:

`Sync: idle -> userRequested -> running -> succeeded | failed | indeterminate`  
`Ad: disabled | notEligible -> requesting -> loaded -> showing -> dismissed | expired | failed | disposed`

**No edge from Ad to Sync success/failure**, no sync trigger from ad request, and no retroactive ad after Sync terminates.

Transition requirements:

- **Tap Manual Sync:** emit a genuine command to the future product Sync coordinator first and immediately show accessible progress, regardless of advertising/network. Do not place an interstitial before Sync starts.
- **Ad eligibility:** user actually requested foreground Sync; authenticated owner/session is valid; online for ad purposes; current consent and request permission valid; ad-enabled runtime is native; product isn't in protected error/recovery/first activation/other route; user cap and attempt cap pass; renderer has separate safe noncritical space.
- **Async request:** ad request runs only as an optional, independent task; it never blocks sync command or awaited completion. If Sync becomes complete/failed or ad was dismissed before load finishes, dispose the arriving ad, never display it late.
- **Rendering:** ad lives inside a labeled advertising subregion of the real Sync status context, not a takeover. The X closes only the host **ad container** (not the network's own creative), is accessible from first visible ad frame, never overlaps/is immediately adjacent to paid creative, and cannot be confused with close Sync/back. No "watch to finish" or please-click copy.
- **Ad dismissed:** store local per-attempt suppression immediately; remove ad widget then dispose SDK resource after unmount; no duplicate ad in same Sync attempt or upon route re-entry. Sync state continues. Dismissal is not user cancellation of synchronization.
- **Sync terminates while ad visible:** show truthful success/error/pending receipt immediately and let the ad persist **only** within an otherwise valid Sync result context; do not force-close solely because Sync completed, nor delay success to keep the ad. When the user leaves the context, dispose normally. Never initiate another request after terminal Sync. User can dismiss ad or navigate without awaiting it.
- **Background/foreground:** do not automatically launch Sync or new ad on resume; suppress late callbacks/obsolete attempts; prefer cancel/dispose when visibility changes and re-entry requires explicit new Manual Sync with cap.
- **Zero-delta, very fast Sync:** do not extend real duration for ad delivery; likely **no ad impression**. This is honest inventory scarcity, not an engineering bug.
- **Offline/failure/conflict:** proceed fail-open **with respect to ads**, while retaining Sync's own true fail-closed data-identity/reconciliation contract. An ad error must never be surfaced as a Sync error.
- **Completion copy:** preserve product `MASTER.md` status contract, including `Not synced yet`, `Syncing…`, `Failed`, `Sync Complete`, `Last synced: HH:MM`, and `Changes not synced` priority. An advertiser call must not update `lastSyncAt`, receipts, local dirty-state or onboarding projections.

Ad `onAdClosed` **is not** the publisher's custom X event; it may report closing an advertiser click-through overlay. Track host dismiss and ad lifecycle separately. `onAdLoaded` is not an impression; listen to actual impression events, and recorded paid events may remain estimates.

## 4. Launch architecture and coupling budget [RECOMMENDATION]

**Dependency direction:** verified owner + genuine future `ManualSyncCoordinator` -> `ManualSyncStatusPresenter` -> optional `AdOpportunityController` -> `AdConsentGate` -> platform `NativeAdProvider` or `NoOpWebAdProvider`. No link points back from ad toward repository, owner authority, Sync scheduler/backend, receipt or conflict resolver.

Expose a narrow interface; example semantic contract (pseudo-Dart, not asserted compilable SDK source):

```text
AdCapability: supportedNative | unsupportedWeb
AdEligibility: eligible | denied(reason)
AdAttemptKey: ephemeral non-PII local attempt token
AdRequestResult: ready(handle) | unavailable(reason)
AdHostState: empty | visible | dismissed | disposed
ManualSyncStatus: actual authoritative read-only status/receipt
AdMetricsSink: privacy-filtered observational callbacks only

beginManualSync(): execute Sync immediately, independently of ad
maybeRequestAd(attemptToken, eligibility): fire-and-forget, no Sync future await
onAdLoaded(handle): render only if same attempt + status context valid + not dismissed
dismissAd(): synchronously remove host slot, then dispose handle
onAdPaid(...): record microcurrency/precision/format, not Sync success
```

Source-level mapping for a **future authorized product PR**, not direct changes made in this study:

- `pubspec.yaml`, lockfile: add compatible `google_mobile_ads` dependency for Android/iOS only; inspect Flutter toolchain and web compilation before adoption.
- `android/app/src/main/AndroidManifest.xml`: AdMob Application ID metadata from actual account; verify SDK/manifest merge, Google Play Ads/AD_ID declaration applicability, privacy and signing.
- `ios/Runner/Info.plist`: AdMob `GADApplicationIdentifier`, any required Google/Apple documentation-backed SKAdNetwork/ATT/privacy settings **only when applicable**, not guessed keys. Check full iOS plugin provisioning/SwiftPM/compile.
- New **proposed paths, not existing files** under `lib/monetization/`: `ad_policy.dart`, `ad_provider.dart`, `ad_provider_mobile.dart`, `ad_provider_web.dart`, `manual_sync_ad_controller.dart`, `ad_metrics_sink.dart`, `ad_privacy_coordinator.dart`; use conditional imports or supported isolates to keep web build free of native-only plugin initialization. Ensure PWA uses NoOp, no ad network script.
- New **proposed** `lib/screens/manual_sync_screen.dart` and mobile/tablet presentations follow LogMate's `<screen>_screen/mobile/tablet` adaptive pattern, with shared Sync and Ad semantics. Real product team decides actual navigation integration. Avoid making a new Settings tile or changing Home route without verified production Sync command and product owner approval.
- Test paths **proposed** `test/monetization/` pure fakes plus native/device integration checks. UI tests mock an ad provider; never serve live ad traffic from CI.

**Initialization:** Google SDK initialization is mandatory before requests, but not on Flutter's critical `main()/runApp()` path. An independent async initialization may run when legal/product readiness permits, but must not introduce non-Sync advertising requests, block local records, or rely on network in offline startup. Account privacy/consent requires a separate compliant user journey; do not show a required consent form as if it were a revenue ad, and do not make Sync depend on answering an ad-consent prompt.

**No-op capability invariant:** web/desktop unsupported platform and all kill-switch/consent failures resolve to `NoOpAdProvider` with exactly zero ad requests and unchanged core app behavior.

## 5. Consent, disclosure and secure boundary [SOURCE + VALIDATION]

**CMP/UMP:** current Flutter UMP docs instruct updating consent state at every app launch and checking `canRequestAds()` before any ad request, guarding against duplicate request paths. Privacy-options entry must be provided where required; allow refusal or revocation without breaking logbook/Sync. Privacy form prompting should be placed in appropriate optional non-disruptive UX, even if the Manual Sync ad must be suppressed when not ready. Never substitute a locally guessed consent flag for UMP's current status.

**ATT (iOS):** required **if** app or integrated vendors perform cross-company tracking as defined by Apple; do not blindly show ATT solely because AdMob is present. For IDFA/tracking use, implement ATT disclosure/purpose and obtain authorization; otherwise configure non-tracking ad behavior as the vendor allows. Reconcile all actual third-party data processing with App Store Privacy and Play Data Safety, not marketing promises.

**Publisher readiness:** new AdMob app verification typically depends on a correctly reachable `app-ads.txt`, official Store developer website association, and app readiness review. The LogMate public site/privacy is at `logmate.minttap.app`, but the **authoritative developer website domain in real App Store/Play listings is unobserved**. Do not publish or guess `app-ads.txt` owner IDs; Web Manager must use the actual publisher snippet and verify network/store crawler status. Readiness is not implied by public policy pages being online.

**User logbook privacy:** no export of flight identifiers, airport routes, crew details, remarks, dates, personal ledger records, UID/email, or Sync payload into ad requests, custom targeting, analytics dimensions or network extras. Standard SDK/device/network data still requires accurate consent/disclosure. Use distinct, short-lived, pseudonymous attempt/correlation IDs **within the app**, with no ad SDK correlation to underlying flight data. Do not overstate anonymity: device/network identifiers and publisher events can still be personal data under applicable law.

**Web Manager dependency — stronger than ad fill:** `yhappcom/web-manager/research/096-pwa-sensitive-context-origin-third-party-capability-isolation.md` warns that third-party origin scripts injected into an offline-first PWA sharing origin/storage can compromise irreplaceable local data; path separation doesn't provide origin isolation. Even a publisher-approved web ad integration would need script origin/CSP/data boundary, offline bootstrap and managed EFB validation. **Therefore first-release PWA ads remain OFF.**

**Design Studio:** `yhappcom/design-studio/case-studies/logmate/INTEGRATION_PRINCIPLES_20260919.md` and `OPERATIONAL_GEOMETRY_CONTRACT_20260919.md` prioritize operational meaning, geometry, direct/reversible interaction and target/focus/recovery. Ad chrome cannot displace Sync status/error, logbook content or accessibility. Marketing gives semantic contract and test criteria, not unreviewed pixels, font, palette or a final visual mock.

## 6. Financial decision model: actual ad opportunity is scarce [MODEL]

Let:
- `A` eligible daily active native pilots (not installs, not all logbook users)
- `F` real explicit Manual Sync attempts per active native user per day
- `E` fraction of attempts with valid ads/consent, adequate network/context and user frequency budget
- `Q` probability an eligible request creates a *real recorded impression* before the opportunity expires
- `N` maximum eligible impressions per attempt; launch `N <= 1`
- `M` realized effective thousand-impression revenue, varying by country/format/demand/consent

`Gross daily revenue = (A × F × E × Q × N) × M / 1000`  
`Net contribution = finalized gross revenue − incremental ad operations/infrastructure/compliance/engineering support costs (where measurable)`.

Sensitivity examples, **pure assumption**, dollars not actual AdMob price or forecast:

| Scenario | A | F | E | Q | CPM assumption | Gross USD / 30 days |
| --- | ---:| ---:| ---:| ---:| ---:| ---:|
| Low | 500 | 0.20 | 0.60 | 0.60 | $1 | $1.08 |
| Middle | 5,000 | 0.30 | 0.70 | 0.80 | $3 | $75.60 |
| High | 20,000 | 0.50 | 0.80 | 0.90 | $8 | $1,728.00 |

Calculations exclude account-level daily exposure caps, meaning even these are upper-side illustrations if real frequency caps bind. No real AdMob fill, geo eCPM, verified pilot reach, Sync cadence, costs, launch funnel or publisher settlement is known. If e.g. 24-hour user cap is adopted, use `F_effective <= 1` where applicable. **Do not treat revenue as justification for additional automatic Sync or bigger ad pressure.**

Value metric: `reconciled ad revenue per genuine eligible Sync and per retained qualified professional user`; guard against worse flight-save accuracy, user return, sync success, first value, complaints, battery/latency, accidental clicks. Observational ad exposure vs retention is confounded by heavier users doing more Sync; comparison is descriptive, not automatically causal. A controlled test requires traffic and minimum effect/power rationale; low-volume result stays UNKNOWN.

## 7. Test and safety minimum acceptance [VALIDATION]

**Engineering deterministic suite** (fake Sync, fake ad, fake consent, controllable async ordering):
1. Ad disabled/web -> zero requests while real Sync completes.
2. Sync starts with ad SDK cold/missing/error/30s initialize -> Sync UI and receipts proceed unchanged.
3. Close host X before ad load; late onAdLoaded disposed; no ad redisplay.
4. Close X after loaded; remove widget promptly, dispose once after unmount; Sync running unchanged.
5. Sync succeeds while ad requests; success displays immediately, no new late ad.
6. Sync fails/indeterminate while ad loaded; shows exact failure/review-required state and never claims success.
7. Sync complete with a *currently displayed* ad does not forcibly close it or hold completion; navigation/close disposes naturally.
8. User exits, signs out, owner mismatch, deletion lock, recovery or restart -> stale callback cannot render.
9. Two taps to Manual Sync -> no duplicate attempt, ad or call unless genuine product Sync rules permit a second one; ad never causes retries.
10. App resume/network recovery -> zero automatic Sync, zero automatic ad.
11. Expired/refused/revoked/unknown consent -> zero ineligible requests; no delay to Sync.
12. Test banner/impression/paid event callbacks are not conflated; source/precision/currency and value-micro units preserved; test traffic excluded from real revenue.
13. Light/dark, orientation, compact/expanded and 200% text -> ad never overlays status/action, X reachable to touch/keyboard/screen reader; no ad click from X/back.
14. PWA installed/offline/restart -> no web advertising script/network request, no change to ledger and Sync pending semantics.
15. No Personal Pilot Logbook values in request/log/analytics payloads; data-deletion and Settings privacy options reviewed.
16. No fake Sync spinner, no forced waiting to monetize very short/zero-delta Sync, no ad impression on unsupported lifecycle.

**Hard STOP:** missing/incorrect Sync receipt, flight data change caused by ad, genuine Sync delay/gating, inability to close host ad immediately, overlapping advertiser hit target, accidental-click spike, unapproved policy/consent/privacy state, ad requests from PWA, unsupported SDK on target Flutter, build or device regression.

**Operational rollout sequence, not separate micro-research:**
- `G0` exact-head current production Sync + provider/owner/end-to-end acceptance; without it ad integration remains blocked.
- `G1` Android/iOS test-ID prototype with NoOp PWA, consent and feature flag off by default.
- `G2` deterministic race/accessibility/real-device close geometry + true Sync status acceptance, Apple/Google vendor check.
- `G3` App ID, app-ads.txt, Store disclosures, privacy option and app readiness confirmed.
- `G4` limited canary with live valid ads only after publisher activation and owner-approved rollout; reconciliation and incident/rollback plan.
- `G5` measure genuine eligible attempts, impression quality, retention/complaints/net contribution; **KEEP / TUNE-YIELD / HOLD / REMOVE**. Expand ad frequency/surfaces only under separate explicit owner decision.

## 8. One-pass owner decision package [RECOMMENDATION]

Proposed default for the implementation spec, requiring product owner confirmation only at actual feature approval:
1. Advertise **only** when a user explicitly initiates Manual Sync.
2. Native iOS/Android anchored adaptive **banner first** within a *distinctly dismissible* optional ad area, with small native template as fallback after policy/UX testing.
3. PWA no ad/NoOp even when Manual Sync works; no extra vendor JS injected into sensitive PWA.
4. One ad opportunity maximum per attempt; local provisional cap of one visible ad per user/day is a **proposed safety setting**, adjustable only based on observed trust/economics, not pre-approved policy. Dismissed attempt never re-opens.
5. No ad on Home, forms, import, totals, logs, recovery, first-use, app open, or records of aviation operations.
6. `FEATURE_ADS_ENABLED=false` default; zero prod calls until all launch gates and owner release approval are documented.
7. No automation or product commits in marketing work. Codex gets the conditional one-pass brief after the genuine Sync prerequisite is implemented and evidence accepted.

## 9. Cross-domain challenge and proof gap register

| Domain | Checked evidence | New finding / dependency |
| --- | --- | --- |
| Product | LogMate `MASTER.md`, source app shells, settings, adaptive/runtime, PWA specs | Ad SDK/Manual Sync absent from read baseline; integration conditional |
| Design | Design Studio integration principles/geometry | Separate X from paid creative, preserve status/recovery priority, real 200%/reader/touch acceptance |
| Web | Web Manager sensitive PWA origin isolation research 096 and status | AdSense installed-PWA monetization can be inappropriate AND third-party script shares sensitive origin privileges |
| Marketing | Studies 017/068/186/290/389/390/403/416/437 | Apply interruption budgets specifically to true Manual Sync, not page navigation |
| Platform | Google Flutter AdMob/AdSense/UMP, Play, Apple ATT/review, app-ads.txt docs (2026-10-12) | Format availability ≠ instant-close ≠ policy approval ≠ publisher readiness |
| Economics | Only hypothetical sensitivity | Need native pilots, real Sync distribution, eligibility/fill, realized ILAR/final settlement |
| Privacy | LogMate public policy source plus Apple/Google requirements | Ad tech disclosures and data minimization require release audit |

No misleading claim of vendor approval, on-device acceptance, actual advertising integration, runtime success, or verified ad revenue is made. **Disposition: implementation specification ready to hand off, production rollout HOLD on Sync/platform/consent/provider/device evidence.**
