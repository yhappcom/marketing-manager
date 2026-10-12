# LogMate Read-only Monetization Evidence Snapshot — 2026-10-12

**Authority:** Observed GitHub source and external primary policies, not product code approval.  
**LogMate boundary:** read-only. Repository `yhappcom/logmate`, default branch `main` at `827a7deed162bf525313c6b4b9d244e56828a1c1` when fetched (2026-10-12).  
**Marketing boundary:** `yhappcom/marketing-manager` only. Companion synthesis: `research/437_logmate_native_pwa_manual_sync_ad_monetization.md`.

## Observations [SOURCE]

1. `README.md`: native iOS/Android + tablet/EFB PWA first-class; personal Pilot Logbook, local-first; Firebase Auth and owner Sync above local domain. Desktop/laptop browser V1 not primary target.
2. `MASTER.md` Stage 3 (~lines 768–772): explicit user-initiated Manual Sync only; advertisement on Sync surface planned with immediate dismiss; dismiss independent of ongoing Sync; Sync complete only after real bidirectional apply; ad failure never blocks Sync; SDK/provider compatibility OPEN.
3. `docs/evidence/stage-3-sync-ready-storage-audit-2026-10-08.md` explicitly records that Sync UI, SDK, and Sync engine were not implemented in that audit.
4. `pubspec.yaml` contains no `google_mobile_ads` dependency at the read ref. It does not establish all ad-stack absence.
5. `docs/specs/sync-activity-member-operations-spec.md`: successful foreground authenticated Sync timestamps and offline-activity semantics differ. Ad impression/close event is neither a sync success receipt nor a proxy for user activity.
6. `docs/specs/offline-acceptance.md` states the actual tablet/EFB installed-PWA/offline acceptance remains unverified at its source checkpoint.

## Primary advertising platform policy snapshot [SOURCE]

- Android/iOS only for Flutter AdMob plugin: https://developers.google.com/admob/flutter/quick-start
- Natural transitions and full-screen behavior: https://developers.google.com/admob/flutter/interstitial
- Google Play unexpected interstitial / 15 s maximum-close requirement is not 0 s guaranteed: https://support.google.com/googleplay/android-developer/answer/9857753
- 300×250 custom X geometric risk: https://support.google.com/admob/answer/6293636
- Google Native Ad requirements (attribution, AdChoices): https://developers.google.com/admob/ios/native/advanced
- Web AdSense software and pop-up / unavailable-content placement caveats: https://support.google.com/adsense/answer/1346295
- Apple review interstitial easy-dismiss and reporting: https://developer.apple.com/app-store/review/guidelines/
- EEA/UK/Switzerland consent and revocation: https://developers.google.com/admob/flutter/privacy/gdpr

## Unverified and next evidence [OPEN]

Real iOS/Android Google Mobile Ads integration, actual SDK immediate dismiss UX, AdMob eligibility/IDs/account and app-ads.txt, UMP/ATT state, publisher-side policy approval, installed-PWA web ad eligibility, actual Manual Sync backend UI/runtime, impression paid callbacks, geo/device split, pilot DAU/retention, Sync frequency, CPM/fill, finalized revenue, real Firebase cost, crash/performance, accessibility, accidental-click rates.

## Guardrail [MARKETING JUDGMENT]

Use a small, genuinely optional dismissible ad region within an already-real Manual Sync interaction, not a full-screen takeover. No delayed completion, forced rewarded ad, PWA fake native SDK path, imported flight/crew details as targeting signals, or interruption to protected record workflows. Operational rollout remains HOLD until the precise product state, serving format, and publisher policy are proven. Marketing research may inform Design Studio/Web Manager and engineering but must not mutate the LogMate repository.
