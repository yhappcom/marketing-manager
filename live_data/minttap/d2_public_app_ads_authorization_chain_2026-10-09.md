# MintTap public Store-to-app-ads.txt authorization chain — 2026-10-09

## Decision effect
D2 public infrastructure gate **STORE DOMAIN / ROOT FILE / SELLER ID / OBSERVED ROBOTS RULES VERIFIED**. AdMob account-side app verification, app readiness, policy/serving state, consent eligibility, live request-to-paid funnel and finalized revenue **UNKNOWN**. Monetization-pressure expansion remains **HOLD**. This closes a public publication/identity check, not monetization readiness.

## Primary observations (live HTTP retrieval, 2026-10-09)
- Public Google Play listing for `app.yh.yieldmax_tracker_v0` returns the MintTap page, category **Finance**, **Contains ads**, and developer **Website** link `https://minttap.app/`. Its description covers YieldMax ETF portfolio/transaction records, payouts, ROC and reverse-split history, not an asserted in-app stock execution function. URL: https://play.google.com/store/apps/details?id=app.yh.yieldmax_tracker_v0
- `https://minttap.app/app-ads.txt` returns HTTP **200**, `text/plain; charset=utf-8`, containing exactly `google.com, pub-9668158908250282, DIRECT, f08c47fec0942fa0`. URL: https://minttap.app/app-ads.txt
- `http://minttap.app/app-ads.txt` resolves to `https://minttap.app/app-ads.txt` with the same observed content and HTTP 200 at the final URL. This confirms a working observed HTTP-to-HTTPS path; it is not a Google crawler log.
- `https://minttap.app/robots.txt` returns HTTP **200** and explicitly allows `Mediapartners-Google`, `AdsBot-Google`, `AdsBot-Google-Mobile`, `Googlebot`, and `User-agent: *` at `/`. URL: https://minttap.app/robots.txt
- Shipped-source reference `yhappcom/yieldmax_tracker`, branch `1.0.29`: `lib/ads/admob_config.dart` configures production ad-unit IDs with publisher `9668158908250282` on iOS and Android (debug uses Google's test IDs); `android/app/src/main/AndroidManifest.xml` declares `ca-app-pub-9668158908250282~7955461965`; `ios/Runner/Info.plist` declares `ca-app-pub-9668158908250282~6927079037`. The publisher portion agrees with the public app-ads.txt seller ID. This does **not** establish account ownership or AdMob acceptance.

## Policy boundary
Google AdMob states that app-ads.txt authorization verification precedes a separate app-readiness review and apps cannot fully serve until both gates are complete. Publication and a browser-visible 200 response do **not** prove AdMob's internal app-ads.txt verification or approval. Primary source checked 2026-10-09: https://support.google.com/admob/answer/14538460

## Production decision ledger
- **VERIFIED (public/source):** Google Play developer-domain identity; root app-ads.txt reachable over HTTPS and HTTP redirect; DIRECT seller-line syntax and publisher-ID match; observed robots.txt allow rules.
- **UNKNOWN (operator-only):** AdMob app-ads.txt account status; app verification and readiness; actual crawler success/history; serving eligibility and restrictions; Policy Center/Confirmed Click; runtime UMP/ad-request state; request/load/impression/ILAR; mediation/source/error/floor/refresh; estimated-to-finalized revenue; protected-workflow and first/repeated-value guardrails.
- **HOLD:** no ad-pressure increase or yield experiment admitted on public-file evidence alone.

## Next operator evidence target
Capture a sanitized AdMob App settings → Verify app/app-ads.txt status, All apps → readiness/serving status and Policy Center snapshot (date, app ID masked as needed, state and history). Then correlate production ad units to actual safe surfaces and request→paid→finalized revenue, and reproduce iOS UMP denial/relaunch/expiry/privacy-option transitions. Never interpret missing account data as zero.

## Cross-domain ownership
Marketing owns the monetization decision gate and ledger; product owns shipped SDK/consent/ad-surface behavior; Web Manager owns live domain/robots/root-file delivery. This audit checks only observable cross-domain boundary conditions. No design change or general-theory research is warranted.


## 2026-11-07 primary-source verification lifecycle clarification — separate operator subgates

**SOURCE / Google official AdMob documentation (rechecked 2026-11-07):**
- [Verify your app with app-ads.txt](https://support.google.com/admob/answer/14538460): for newly added AdMob apps from **January 2025**, app-ads.txt verification is required; after publishing and AdMob's file crawl, an operator must use **App settings → Verify app → Check for updates** to request/confirm app verification, and **app readiness review begins after app verification**. File publication and a successful crawler check do **not** by themselves prove readiness approval or full serving.
- [Set up app-ads.txt](https://support.google.com/admob/answer/9363762): store listing must link the developer website; the operator checks the AdMob app-ads.txt status separately from external HTTP checks. A store website update can take up to 24 hours to be detected.
- [Resolve app-ads.txt issues](https://support.google.com/admob/answer/9776740): app-ads.txt status **may not appear** in the account's status page if the app has generated **no ad request in the past seven days** **or** the app has not been verified. Thus **absence of a row is ambiguous**, not proof of a broken seller file, zero ad requests, rejected app, or invalid traffic.

**New scoped decision consequence:** The 2026-10-09 public file/robots/publisher-ID PASS remains valid only at its original observation date. Separate account evidence into **(A) app-ads.txt file found/verified**, **(B) explicit app verification initiated/completed**, **(C) readiness review state**, and **(D) serving eligibility/history**, each with operator timestamp, app/platform and visible status. If the status row is missing, record `NOT_DISPLAYED / CAUSE_UNKNOWN`; request **redacted last-request activity** and operator app verification state before diagnosing. The January 2025 new-app rule does **not** establish when MintTap was added to AdMob or which operator action was completed. No current MintTap account, ad-request count, review state or serving status was observed. **D2 PRESSURE HOLD remains unchanged.**

**HANDOFF:** AdMob account owner captures (A)–(D) with redacted account/app identifiers and timestamps; Product owns test-ad request logs; Web Manager owns live public file/robots changes. Marketing records the gate and does not initiate monetization expansion.
