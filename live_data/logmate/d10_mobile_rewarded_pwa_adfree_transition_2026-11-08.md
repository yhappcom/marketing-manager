# D10 — LogMate mobile rewarded ads / ad-free PWA / direct-sponsor transition

**Research date:** 2026-11-08 KST  
**Classification:** SOURCE / SYNTHESIS / OWNER DIRECTION (CHAT, NOT YET PRODUCT-MASTER ADOPTED) / MARKETING JUDGMENT / OPEN / VALIDATION / CHANGE WATCH  
**Current gate:** RESEARCH GO; PRODUCTION AD SERVING, SAVE-BLOCKING, REWARD ENTITLEMENTS and PUBLIC CLAIMS HOLD.  
**Repository boundary:** Changes only to yhappcom/marketing-manager. LogMate, Design Studio and Web Manager read-only.

## A. Executive decision and what changed

The 2026-10-12 Research 437 and D10 snapshot evaluated a small, immediately dismissible advertisement on the Manual Sync progress surface. In owner discussion dated 2026-11-08, the proposed business model **materially changed**:

1. No advertising on Home, flight workflows, backup, import/export, recovery, **or Manual Sync**.
2. A separate **opt-in Rewards page in iOS/Android native** may request official Google AdMob **rewarded**, not ordinary interstitial, ads. A completed qualifying ad grants a defined non-monetary **additional flight-record save allowance**; the initial allowance should be large enough to preserve normal professional use. Exact numbers are explicitly **not decided**.
3. **Tablet/EFB PWA is always ad-free:** no native AdMob SDK and no alternative web-ad serving at V1. If its allowance becomes low, it may tell the user to earn additional rights in the native phone app and then explicitly sync. There is no assertion that unattended offline PWA↔phone transfer exists.
4. Initial ad-network monetization is a **low-cost demand and UX experiment**, not a revenue forecast. Once actual qualified pilot traffic exists, study **direct aviation advertisers / sponsor inventory** with the network as optional fallback.
5. The owner accepted continued policy and safety research. This is recorded **owner discussion**, not a verified MASTER.md product decision, implementation approval, deployment instruction or Store/AdMob acceptance.

**CRITICAL AUTHORITY CONFLICT / HANDOFF:** LogMate MASTER.md (fetched from main 2026-11-08; content blob 5a6fd944abf24a95efed3b4a31db214d2e24a662) still contains an older future Manual Sync-ad proposal. Per LogMate AGENTS.md, MASTER is authoritative for recorded product policy and requires owner-approved product-side reconciliation. Do **not** silently overwrite that source or market the chat proposal as shipped. Preserve Research 437 as dated historical source; this document supersedes its ad-placement *recommendation* only at marketing research/owner-intent scope.

## B. Read-only current-product truth and cross-domain check

- **Product:** LogMate main AGENTS.md says MASTER.md is sole current product-state authority; account-required Firebase UID ownership is confirmed in MASTER §0, replacing older account-free assumptions. Manual foreground Sync is product direction, but production native↔PWA Sync/backup/device acceptance remains not fully validated. Import, previous totals and later edits exist in scope; no assumption that their records can be charged per save. Current product monetization deployment / official reward entitlement is **not verified**. SOURCE: https://github.com/yhappcom/logmate/blob/main/MASTER.md , https://github.com/yhappcom/logmate/blob/main/AGENTS.md
- **Marketing context:** company policy favors advertising-only/cash-light monetization, credible professional pilot retention and no intrusive advertising. SOURCE: context/COMPANY_MARKETING_CONSTRAINTS.md; Research 437; live_data/logmate/ad_monetization_readonly_evidence_2026-10-12.md.
- **Design Studio:** own visual hierarchy, disclosure placement, accessibility, reward state and error behavior. Read AGENTS.md and Marketing coordination/DESIGN_STUDIO_ALIGNMENT.md; request a Rewards interaction brief before creating visual specifications. No pixel/style conclusions made here. DEPENDENCY.
- **Web Manager:** PWA_ARCHITECTURE_MASTER.md §17 (2026-11-08) explicitly has **no validated unattended/offline native↔managed-iPad PWA route**; connected WAN, MDM, TLS and client capabilities must be observed. Manual server Sync is conceptually different from LAN/peer transfer. EFB Home Screen/managed iPad offline storage and independent Files custody remain release gates. DEPENDENCY: https://github.com/yhappcom/web-manager/blob/main/research/synthesis/PWA_ARCHITECTURE_MASTER.md
- **Marketing evidence:** Research 437 is a historical Manual-Sync-ad model, not active owner intent. D10 register and status must distinguish this change. No pilot MAU, rewarded-ad fill/eCPM, willingness to view, sponsor price, completed ad ratio or cohort retention measurements exist.

## C. Primary-source policy findings (checked 2026-11-08)

| Source | Directly supported fact | LogMate interpretation / boundary |
| --- | --- | --- |
| Google AdMob reward policies, https://support.google.com/admob/answer/7313578 | Non-cash, nontransferable, within-platform rewards can qualify; explicit reward/action disclosure, affirmative opt-in, honored reward, ability to skip; refusal must not impede normal app usage; no business-support solicitation | Flight-save allowance is a plausible reward **category**, not approved execution. The exact exhausted-allowance/save-block interaction remains **OPEN/HIGH RISK**. Large introductory quota mitigates frequency but not the interpretation of 'normal usage'. Seek provider review with exact screens/states. |
| Google Play Ads, https://support.google.com/googleplay/android-developer/answer/9857753 | Opted-in rewarded ads are treated separately from prohibited unexpected fullscreen interstitials | Supports opt-in format, not a blanket guarantee of allowance-based gating approval. |
| Apple App Review Guidelines §§2.5.18, 3.2.2, https://developer.apple.com/app-store/review/guidelines/ | Ads need disclosures, appropriate dismissal/reporting; Apple permits incentives for certain in-app actions including watching ads and restricts artificial impression manipulation | Exact rewards/gating, reporting and ad UX require review. No App Store approval obtained. |
| Google Mobile Ads Flutter quick-start, https://developers.google.com/admob/flutter/quick-start | Plugin supports **Android and iOS only, not web/desktop**; current listed Flutter integration prerequisites must be checked against actual build | No AdMob Flutter on PWA. Native plugin compatibility **NOT CHECKED** on shipped LogMate SDK/build. |
| Google Flutter rewarded, https://developers.google.com/admob/flutter/rewarded | RewardedAd is SDK-controlled fullscreen overlay; user-earned callback; test units for development; ad cannot be hosted as a Flutter inline player | Rewards **page hosts user choice/status**, SDK controls ad display. Do not promise universal 5–30-second or immediately dismissible video. |
| Google Flutter SSV, https://developers.google.com/admob/flutter/ssv | Google-signed reward callback supports unique transaction ID, timestamp, amount, ad unit and optional app data; validation requires Google keys/signature; backend latency exists | A signed server-side reward receipt is feasible but **does not implement user ledger, conflict resolution or exactly-once credit by itself**. |
| Google Flutter UMP, https://developers.google.com/admob/flutter/privacy | Consent information refresh and canRequestAds gate; double-check eligibility can cause duplicate requests if not guarded | Native ads remain off when no valid request eligibility; no sensitive flight/crew data as ad identifiers. |
| Google invalid traffic, https://support.google.com/admob/answer/3342054 | Artificial/repetitive invalid impressions and clicks can trigger serving limitations | Do not encourage looping, fake ad engagement, forced repeats or actual live test traffic. |
| AdMob app-ads.txt / app review, https://support.google.com/admob/answer/14538460 | Publisher verification and app-readiness review required for full serving; new apps require app-ads.txt verification | App and domain/account ownership gate. Not evidenced from product source. |

**Policy confidence:** directly verified generic policy, **NOT** a binding decision on this specific pilot-logbook quota design. Escalate exact scenario to AdMob publisher support/policy process and Store review; keep gate HOLD pending response or actual approved operation. Do not claim compliance because introductory quota is 'generous'.

## D. Business-model alternatives and admission

| Model | Technical availability | UX / platform-policy risk | Decision |
| --- | --- | --- | --- |
| A. Native opt-in rewarded ads, extra record-save allowance, **hard stop at zero** | Native SDK yes | **High/OPEN**: no-fill, offline, no-phone, export/import, normal-usage/refusal clause | **Do not ship hard stop** until accepted by provider and protected-record safety tests |
| B. Same ads, but safety-first **durable provisional capture / grace** when exhausted | Engineering hypothesis, not implemented | Medium-to-high: breaks scarcity mechanics; provisional status cannot be marketed as canonical saved record without clarity | **Preferred safety prototype** to test; no approval to implement |
| C. Core saves permanently available, reward only nonessential extras | Feasible in principle | Lower; reward desirability and 'all features free' conflict | Fallback to validate against real users |
| D. Fully free, voluntary directly contracted aviation sponsor content | Technically viable | No AdMob rewarded supply until advertiser demand exists; disclosure/contracts needed | Long-term sponsor route; no assumption of sales |
| E. PWA Ad Manager / AdSense rewards | Separate web products exist | Product owner **chooses no PWA ads** | **Out of V1 scope**; do not spend research cycles on implementation absent owner change |

**Real constraint:** A large initial allowance makes ad pressure rare, but cannot solve the edge case 'PWA has zero allowance and phone has no working ad/network'. A genuine durable provisional save, unmetered safety exception or policy-cleared alternative must exist before a launch claim of protected recording. If a safety grace is unmetered/renewable, revenue is even less forecastable—acknowledge this, do not silently count provisional saves as blocked.

## E. Reward entitlement: proposed minimal technical contract (NOT approved product schema)

**Immutable event ledger, separate from flight content and advertising telemetry:**

- entitlement owner = verified Firebase UID **within product authority**; use server-mapped opaque reward request nonce in advertiser-visible custom data rather than exposing UID or flight metadata unnecessarily;
- grant event {provider, providerTransactionId, providerAdUnit, rewardKind='flight_record_capacity', amount, receivedAt, verifiedAt, verificationState, version}; uniqueness by provider+transaction ID;
- capacity = default published allowance + verified grants + explicitly approved compensation - accounted unique new-record creations; use stable logical record IDs / idempotent operations, **not** number of Save taps or UI retries;
- domain decisions still **OPEN**: whether imports consume allowance (historical migration is high volume); how record deletion affects balance; simulator/other record kinds; previous-total baseline; duplicate resolution, batch undo, device restoration, compensation and offer-version migration;
- **never charge Edit/Restore/Sync/Retry and never revoke already-saved flights** by an ad-settlement adjustment. The entitlement is separate from flight/crew/route records and cannot authorize erasure.

**Event/Sync boundary:** Only server-verified grants become globally authoritative rights. The remote entitlement should be idempotently mergeable to each local device; a plain integer copied across two offline replicas is vulnerable to concurrent double spending. Need either server-reserved consumption with carefully designed offline allowances or allowance-floor/provisional grace preserving offline capture. Strict remote-only decrement would violate the offline-first model. This is a **design hypothesis**, not existing implementation.

**Failure lab to require:** repeated client callback, duplicate SSV webhook, webhook before/after local callback, network loss during award, no-fill, consent denied, ad not completed, ad close, app force-close, reinstall/new device, simultaneous offline native+PWA creations, Restore/Import/Undo, deleted and recreated UID, logout/owner switch, old PWA worker, expired rewards/invalid traffic adjustment, untrusted backup replay. Every case has expected allowance and record-integrity oracle. If failure: recording remains safely recoverable; do not imply permanent server receipt until it exists.

**PWA-specific scenario:** Mobile earns +N at time t0; native reward verifies online; **manual** native↔PWA server Sync explicitly succeeds at t1; PWA displays updated allowance at t2. If no t1 confirmed receipt (e.g. offline EFB, managed network blocked), PWA must show last known state honestly and have safe capture/recovery path. Never claim hotspot-free direct P2P or automatic background transfer works.

## F. Minimal telemetry + economics

No invented MAU/eCPM. Proposed privacy-minimized funnel: eligible-native-MAU → Rewards-page unique visitors → consent-eligible opt-in attempts → ad load/no-fill → user-earned callback → verified unique reward grants → attempted manual sync → PWA acknowledgement; link only with privacy-respecting internal IDs and consent rules. Segment **native vs PWA cohorts**, users with and without phone installed, pilot activation, retention and complaint rates. No pilot flight contents, rosters, employer, airport routes or raw UID to advertisers.

Ad gross revenue = eligible active native users × eligible opt-in rate × ads per participant × served fraction × verified impression fraction × **observed** eCPM / 1000. Deduct SSV/service costs, support, lost-user retention and operational overhead. Because broad introductory quotas reduce ads/participant, **do not expect meaningful early revenue without evidence**. Native-to-PWA cross-device demand is an adoption and rights-delivery hypothesis, not demonstrated usage.

**Direct sponsor phase:** qualify named aviation advertisers only after meaningful monthly *unique opted-in visitors, qualified pilot reach, completed views, attributable destinations, privacy-safe advertiser reports and verified pilot retention* exist. Test one bounded paid pilot agreement (creative approval, disclosure, campaign term, measurement definition, refunds/invalid traffic, content rights, data boundary, settlement). Consider Google Ad Manager direct campaigns only if publisher access and actual economics justify it; do not promise availability. Keep core UI free of forced placements. No automatic switch triggered by a speculative MAU threshold.

## G. Acceptance / stop gates

1. **P0 Policy & product authority:** product owner reconciles MASTER's outdated Manual Sync ad and the new Rewards/PWA-ad-free direction in an authorized product change. Written AdMob policy interpretation for *zero allowance + no internet/no ad + no native phone* sought before hard stop; Apple/Play submission readiness separately assessed. Until then: HOLD real restriction/ads.
2. **P1 Bounded prototype:** isolated Flutter test-ad build using current LogMate toolchain; native iOS/Android actual plugin compatibility; opt-in/disclosure, cancel, load/earn, UMP and privacy controls. Zero production ad IDs and no core product data changes.
3. **P2 Security/record safety:** SSV signature/idempotency and provisional/verified ledger; UID isolation; restore/reinstall/account deletion; offline dual-device spend; import burst; conflict and rollback; real on-device PWA custody. Record loss/hidden save failure = NO-GO.
4. **P3 Controlled revenue experiment:** only after policy, account/readiness, app-ads.txt, consent, accessibility, privacy, incident and ad-disable controls pass. Use valid ad traffic, honest measurement; quantify long-term retained pilot value, not just ad impressions.
5. **P4 Direct sponsor pilot:** after qualified reach is proven, obtain an actual sponsor trial and verify realized paid campaign economics, not just a media-kit precedent.

**Current decision: GO for further research and isolated test-ad design; HOLD any implementation in LogMate, ad activation, public claims, record-save blocking, unverified PWA sync and direct sponsor revenue forecasts.**

## H. Handoff by discipline

- **Product/Engineering:** owner-approved MASTER reconciliation; storage accounting semantics, offline grace/provisional recovery, UID-bound signed SSV ledger, privacy/account deletion and PWA Sync integration. Do not edit LogMate during marketing research.
- **Design Studio:** design a distinctly opt-in Rewards page, clear grant/expiry/sync status and ad unavailable/low capacity states; accessible 200% text and VoiceOver/TalkBack, compact tablet copy, no manipulative prompts.
- **Web Manager:** PWA entirely ad-free; actual installed Safari/managed EFB manual-server-Sync behavior, persistent storage, worker updates and independent backup/Files acceptance; app-ads.txt belongs to deployed publisher domain/operator.
- **Marketing:** targeted niche research, scenario-based policy escalation, privacy-safe funnel, native/PWA cohorts, sponsor proposition and pricing/contract testing. No misleading 'unlimited free saves' promise while any hard limit is proposed.

## I. Research provenance and supersession

Read 2026-11-08: marketing AGENTS, STATUS, LEARNING_ROADMAP, COMPANY_MARKETING_CONSTRAINTS, STAGE1 supplement, research/437, live_data/logmate/ad_monetization_readonly_evidence_2026-10-12, DESIGN_STUDIO_ALIGNMENT and PROJECT_ENGAGEMENT; LogMate AGENTS/MASTER (read-only), Web Manager AGENTS/PWA_ARCHITECTURE_MASTER and Design Studio AGENTS (read-only). Official sources checked on date indicated in section C. No repository code, physical device, publisher dashboard, AdMob policy support ticket, Store submission or live campaign was executed.

Prior Research 437's **old Sync ad recommendation is historical**; its source observations remain preserved. New D10 direction is **chat owner direction pending recorded product MASTER change**. This study is a materially different integrated decision record, not a claim of validated launch.

**Next evidence target:** exact P0 provider interpretation for exhausted quota and safety-first save behavior **plus** product-owner-master reconciliation; then P1 test-ad app and P2 entitlement fault matrix.
