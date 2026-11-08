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


---

## J. 2026-11-08 P0→P3 evidence-driven follow-up — failure proof, policy submission packet and rollout boundary

**Trigger:** The owner asked to continue research according to the P0 policy → P1 reward issuance → P2 PWA → P3 sponsor priorities. This section **adds distinct technical and business boundary evidence**; it does not assert that official review, a SDK run, a device trial or advertiser negotiation occurred. Existing sections A–I remain intact.

### J1. P0 policy matrix: precise classification, not presumed approval [SOURCE / SYNTHESIS / OPEN]

**Revalidated primary sources (2026-11-08):**
- Google rewarded ad-unit policy: https://support.google.com/admob/answer/7313578
- Google Play Ads and voluntarily opt-in rewarded format: https://support.google.com/googleplay/android-developer/answer/9857753
- Apple App Review Guidelines 3.2.2(x) allows incentives for specific app actions, 3.2.2(iii) rejects artificial impressions: https://developer.apple.com/app-store/review/guidelines/
- Google's rewarded opt-in UI/playbook: https://admob.google.com/intl/ko/home/resources/rewarded-ads-playbook/

| Proposed variant | Source-backed mechanics | Determination **for LogMate** |
| --- | --- | --- |
| Single distinct, unambiguous "Watch rewarded ad for +N saves" button, no autoplay, skip supported | Google requires opt-in, pre-ad reward disclosure and ability to skip; Apple's rule permits specified incentives | **FORMAT-LEVEL ADMISSIBLE FOR RESEARCH**, not approved app |
| Fixed additional non-cash, nontransferable in-app save entitlement | Google policy permits such in-app rewards and requires promised award fulfillment | **REWARD CATEGORY PLAUSIBLE**; expiry, transfer and mapping to app behavior must be verified |
| Large free baseline plus incremental rewarded grants | Reduces frequency of needing ads | **MARKETING/UX HYPOTHESIS**; quota size does **not** create exemption from normal-usage clause |
| User at zero capacity, no ad fill/network/mobile phone: must watch ad or cannot retain a newly flown sector | Google says skipping/no opt-in must not impede or interfere with normal platform/app usage | **P0 UNSATISFIED / HIGH RISK**, NOT a documented explicit blanket prohibition of any metered feature; seek scenario-specific provider interpretation |
| Core Flight create/edit/restore still operational, only optional nonessential additional convenience rewarded | Closest to opt-in/no-interference principle | **LOWER RISK FALLBACK**, user value and business conversion remain unproven |

**Do not conflate** (1) Play's exemption for genuinely opt-in rewarded full-screen ads from certain unexpected-fullscreen restrictions with (2) AdMob's separate reward refusal clause, (3) Apple Store review of app behavior, and (4) data-durability obligations. They are **four independent gates**.

**Exact provider escalation packet ready for an authorized operator (NOT submitted):**

> LogMate is a professional pilot logbook with durable local recording on iOS/Android and an ad-free iPad PWA. Native users may affirmatively view an AdMob RewardedAd from a separate Rewards page to receive a fixed, nontransferable number of additional Flight record creation entitlements. All records can be viewed/edited/exported without ads. A generous baseline is granted. In an edge case where the baseline plus reward credit is exhausted and ads cannot load (offline/no-fill, or the only active device is the ad-free iPad PWA), we are evaluating: (A) hard block of new flight creation; (B) a durable local emergency/provisional capture with later reconciliation; (C) no blocking of core saves. Under your current rewarded-ads policy requiring that declining or skipping not interfere with normal app use, is **each** scenario acceptable? If not, which exact changes would make the offer compliant? Are there special constraints for a Rewards-only entry page and optional additional-flight-save rights? Please point to the applicable rule and whether a binding account review or separate app review is required.

Record *dated provider response, account/app identity and exact proposed UI* before changing P0. No provider response, account status, Play/App Store submission or approval has been observed.

### J2. P1 SSV reliability and implementation choices [SOURCE / ENGINEERING HYPOTHESIS / VALIDATION OPEN]

Primary SDK sources (rechecked 2026-11-08):
- https://developers.google.com/admob/flutter/rewarded
- https://developers.google.com/admob/flutter/ssv
- https://developers.google.com/admob/flutter/privacy
- https://developers.google.com/admob/flutter/quick-start

**New critical constraint from SSV official FAQ:** Google's callback endpoint expects HTTP 200 and retries a failed/unreachable response **up to five times at one-second intervals**. A prolonged verification service outage therefore **cannot be assumed to heal via arbitrary automatic retry**; it can create an acknowledged client reward with no server-confirmed entitlement. Do not silently award verified global credits based solely on the client callback. Do not force the user to watch a second ad to compensate for platform/server failure.

**Exact-once handling is an *application* property, not an SDK guarantee.** Server signs SSV; backend must verify ECDSA against Google's public key (public keys rotated; source recommends cache under 24h), bind an opaque one-use server-issued attempt nonce to Firebase UID, check ad unit/reward item/amount/expected offer version, store provider+transaction ID uniquely, and make grant+state transition transactional and idempotent. Do not put raw Firebase UID, routes, crew, employer or logbook contents in ad custom_data or ad targeting.

**Proposed reward handling variants (not implementation selection):**
1. **Verified-first:** client shows "Pending verification"; only a signed accepted server receipt becomes globally spendable. Stronger accounting; degrades immediate rewarded UX during delay or backend outages.
2. **Provisional-first:** client callback marks a provisional local, non-transferable claim immediately, while only verified transactions increase global spendable credits. Suitable for honest UX but requires expiry/manual recovery and must not misstate the provisional as validated usable global quota.
3. **Immediate globally spendable client-only grant:** smooth experience but readily spoofed and likely unreconcilable across phone/PWA; **REJECT as default**.

**Verification fault lab:** V01 same SSV delivered 2–6 times → exactly 1 grant; V02 SSV before SDK callback → correct state; V03 SDK callback but no server receipt after callback retries → pending and governed support/recovery, no fabricated verification; V04 valid callback with wrong ad-unit/offer/UID mapping → quarantine; V05 stale key cache/new key_id → refresh/secure retry, never disable signature verification; V06 phone app crash after ad completion, before local write → server-sourced state on reauth/sync; V07 deleting account/recreating different UID → do not rebound old grants or leak; V08 consent declined/invalid ads → no unintended ad requests; V09 identical transaction under two accounts → reject second grant; V10 unexpected amount/reward version → no silent pricing mutation.

**SDK release constraint newly observed:** As read 2026-11-08, detailed Google Flutter quick-start prerequisites specify Flutter **3.38.1+**; its rendered page summary inconsistently says 3.27.0+. Treat the detailed prerequisite as more restrictive pending clarification; compare to actual LogMate Flutter binary/lockfile in a bounded future test. LogMate pubspec.yaml declares Dart SDK ^3.12.0, **not proof of a particular installed Flutter toolchain**. Full-screen ad cannot be closed programmatically after show; use SDK lifecycle and accessible close/dismiss behavior, never promise arbitrary video duration or instant developer-controlled exit.

### J3. P2 finite quota and two offline replicas: an impossibility example [SYNTHESIS / FAILURE MODEL]

**Minimal counterexample, no invented real incident:**
- Same verified UID has **one** remaining unique-record-create entitlement and two devices, native phone A and installed EFB PWA B. They last synced earlier and each locally reads balance 1.
- Airplane/offline separation: A creates Flight `A1`; B creates different Flight `B1` without network. Neither can coordinate with the other.
- Both independently show balance 0 and locally save successfully. After Manual Sync, the global system has **two distinct legitimate records** for one nominal entitlement.
- Therefore **strict global no-overdraft and guaranteed offline creation on both devices cannot both be promised** without pre-reserving credits for replicas, an online authority or an explicitly defined grace/overdraft policy.
- Preallocating the sole credit to A makes B's offline create unavailable, conflicting with protected-workflow expectations.

**Recommended acceptance contract for feasibility research:** Record integrity takes priority; keep both offline-created flights, allow a bounded clearly labeled provisional overrun / grace, and reconcile entitlement counts only after an authenticated, successfully completed Manual Sync. No flight deletion, hidden loss, failed export or retroactive silent overwrite to restore an advertisement quota. Determine how preallocated allowances, multiple concurrent devices, imports and same logical flight dedup affect accounting before product adoption. This is a *product and engineering design proposal*, not an approved policy, algorithm or runtime proof.

**EFB exact scenario contract:** native RewardedAd completion at t0 ≠ signed verified grant at t1 ≠ authenticated phone manual Sync acknowledgement at t2 ≠ authenticated PWA manual Sync/apply receipt at t3. Claim "PWA now has +N" only after the relevant authority's acknowledged update is present **in that PWA**, not because phone had a callback. If PWA is offline/MDM WAN blocked or has no compatible native companion, preserve its usable local recording/backup/recovery path and do not promise direct P2P or automatic transport.

**P2 acceptance matrix:** P01 phone grant verifies but PWA never syncs; P02 PWA sync while offline; P03 phone and PWA use last 1 quota concurrently; P04 delayed reward verification after one device already consumed record allowance; P05 1,000-flight historical import / dedup / rollback without ad loops; P06 restore old backup and reapply already-earned grants; P07 independent UID A→B deletion and web-worker old/new client concurrency; P08 old PWA local state with stale allowance but good flight data; P09 flight edit / retry / auto-backup do not double charge; P10 iPad Home Screen vs managed EFB Web Clip real-device storage/Files/MDM tests. **NOT EXECUTED.**

### J4. P3 sponsor economics and partner-market boundary [SOURCE / BUSINESS SYNTHESIS]

- AOPA advertises aviation professionals/pilots through digital/native campaigns and media reporting: https://www.aopa.org/advertising/digital ; current media-kit marketing is an **existence-of-channel example**, not a quote for LogMate pricing or an airline-pilot-cohort purchase guarantee.
- AdMob app readiness requires an app in a supported public store plus publisher app-ads.txt verification and subsequent readiness review: https://support.google.com/admob/answer/14538460 and https://support.google.com/admob/answer/10564477 . Testing the SDK before release is allowed with **test ad units**, but no assumption that an unlisted beta has production demand. This matters to the first-revenue timeline.
- Native SDK vs PWA split confirmed: https://developers.google.com/admob/flutter/quick-start . PWA remains ad-free under owner direction even if external web-ad products exist.

**Direct-sponsor decision should use observed qualified reach, not a fixed guessed MAU threshold:**
- Monthly unique verified opt-in Rewards visitors, opt-in view rate, rewarded impression completion, sponsor eligibility geography, fraud-safe and privacy-safe outcome report, 30/90-day core-task retention and complaint rates.
- First sponsor offer: **one bounded aviation partner campaign** (category suitability, clear sponsorship marking, duration, creative signoff, exact view/impression/click definitions, anti-fraud/no-guaranteed-outcome, cancellation/refund, data sharing/consent, invoicing/settlement). No requirement to make a currently ad-free PWA carry sponsor inventory.
- Direct sale go/no-go: **signed paid pilot contract + delivered eligible reach + verified settlement net of servicing and lost retention**, then optimize a hybrid direct-first/network-fallback supply if platform architecture supports it; no fictitious contract price or demand.
- Fee/operating-cost break-even must count support, privacy/legal review, server SSV, creative review, reporting and renewal labor, not merely `impressions × CPM`.

### J5. New evidence and closure ledger

| Priority | Newly closed at source/reasoning scope | Still OPEN before product GO |
| --- | --- | --- |
| **P0** | Exact Google opt-in/skip/reward clauses, Apple incentive distinction and **scenario-specific provider submission text** ready | Actual provider reply/Store review, hard-stop compatibility and user-safe exhausted state |
| **P1** | SSV unique ID/signature/retry limits; client-verified timing tradeoffs; detailed SDK prerequisites current web-doc snapshot | Native binary/plugin compatibility test, signed backend, outage recovery, trustworthy grant idempotency runtime |
| **P2** | Concrete two-offline-replica quota counterexample and four-step mobile→PWA state authority | Approved overdraft/preallocation semantics, current Sync implementation and managed iPad acceptance |
| **P3** | Paid aviation digital media category exists; documented app publication and ad readiness gates | Actual LogMate audience/fill/eCPM, sponsor outreach, signed contract and net realized economics |

**Decision remains:** P0–P3 **research/source-design progressed** but all operational launch/saving-restriction gates HOLD. Preserve the full old 2026-10-12 study and exact first D10 evidence; continue only on evidence that closes a genuine gate.


---

## K. 2026-11-08 policy cross-reading and direct server-grant transfer refinement

**Decision delta (material):** Research J correctly distinguished callback and confirmed grant, but assumed native's own Manual Sync was necessarily required before PWA could obtain the rewarded right. A **server-authoritative SSV grant** changes the transfer dependency: PWA can receive already-verified rights from the reward backend on its **own confirmed Manual Sync**, without requiring an extra native Flight-ledger Sync. This is **architectural feasibility**, not implemented behavior or a change to the LogMate Manual Sync contract.

### K1. P0 official text cross-reading (checked 2026-11-08) [SOURCE / CONFLICT / INTERPRETATION OPEN]

| Policy layer | Exact official scope | Admission judgment |
| --- | --- | --- |
| AdMob [rewarded-unit policy](https://support.google.com/admob/answer/7313578) | Requires clear reward/action disclosure per instance, affirmative opt-in for standard rewarded, skip/dismiss, reward delivery, and no adverse impact on **normal usage** from declining; forbids nonreward "watch to support us" persuasion | Native opt-in separate Rewards page is format-compliant candidate; **what counts as normal usage at a depleted professional Flight-save quota is UNDETERMINED**. A generous free allowance is not an explicit policy waiver. |
| Google Play [Better Ads FAQ](https://support.google.com/googleplay/android-developer/answer/12271244) | Explicit opt-in rewarded ads are excluded **from the unexpected full-screen interruption policy**, with examples of unlocking game features/content; all other Developer Program Policies still apply | There is **positive official precedent for an opt-in unlock**, so do NOT falsely state all rewarded feature gates are forbidden. Conversely this is not a blanket allowance for blocking Flight capture or AdMob's normal-usage language. |
| Apple [App Review 3.2.2(x)](https://developer.apple.com/app-store/review/guidelines/) | Allows app-internal incentives for specific actions including watching an ad, while forbidding forced store-related actions to access functions | Positive indication that an ad-linked app reward is not inherently prohibited on iOS. No specific LogMate quota approved. |
| Apple [App Review 3.1.4](https://developer.apple.com/app-store/review/guidelines/) | In the **Hardware-Specific Content** section, says users may **not be required to engage in advertising or marketing activities to unlock app functionality** | **Important new caveat:** this sentence is embedded in a hardware-content exception section; it is **not safe to generalize it as a blanket cross-app ban** without resolving scope against 3.2.2(x). Nonetheless any mandatory exhaustion gate warrants explicit Apple review notes and account-specific interpretation. |
| Apple [App Review 2.5.18; 3.2.2(iii)](https://developer.apple.com/app-store/review/guidelines/) | Clear advertisement disclosure, easy close/skip, reporting of inappropriate ads; no artificially increasing impressions or an app primarily designed to display ads | Preserve Rewards-only placement, no automatic repeat / forced view pressure. |
| AdMob [2023 policy update](https://support.google.com/admob/answer/9391084) | Indirect/nonmonetary, nontransferable within-publisher-platform rewards allowed; logged-in same-user redemption is an example | Same verified UID using additional credits on native and PWA is **plausibly nontransferable within one publisher platform**, NOT a confirmed provider ruling on cross-device reward portability. |

**Operator-specific P0 escalation is now two distinct questions, not just one generic provider ticket:** (1) ask AdMob whether a professional-record **hard-depletion** state counts as interference with normal use, and whether offline/grace solves it; (2) separately ask Apple how 3.1.4 hardware-context advertising-unlock wording should be applied together with 3.2.2(x) for this specific native app. Do not assert formal written permission, submission or reviewer response. Google Play's opt-in Better Ads exemption **does not** resolve the AdMob question.

### K2. P1 authoritative grant bypasses a redundant phone Flight Sync [SOURCE + ARCHITECTURAL INFERENCE]

**Official technical bases (checked 2026-11-08):**
- [Google Flutter SSV](https://developers.google.com/admob/flutter/ssv): signed server reward callback contains provider transaction ID; custom_data must be set **before showing**; delayed callbacks possible; verified-first acceptable for economically important rewards; if endpoint unreachable Google retries only up to five times at one-second intervals.
- [Cloud Firestore transactions](https://firebase.google.com/docs/firestore/manage-data/transactions): atomic multi-document read+write transactions, retry on concurrent edits, **client transaction fails offline**; batched writes can be queued offline but are **not evidence that server authority was consulted or its balance admitted**.
- [LogMate local-first Manual Delta Sync](https://github.com/yhappcom/logmate/blob/main/docs/specs/local-first-manual-delta-sync-contract.md): local writes are independent; authenticated *Manual Sync* is the only actual Delta Push/Pull/Apply; app-start read-only change check must not silently apply data or advance the cursor/lastSyncAt; production implementation still not accepted.
- [LogMate MASTER](https://github.com/yhappcom/logmate/blob/main/MASTER.md): Firebase UID is product owner authority; ordinary-client Firestore canonical writes remain protected; no implicit unrestricted web sync.

**Proposed minimum pipeline (not implementation):**

1. Authenticated native obtains a **short-lived, server-issued, single-use attempt nonce** tied server-side to the current Firebase UID, grant offer/version and expected provider ad unit; only the opaque nonce appears in `custom_data`. Authenticated request is **before** the video. Never send raw UID, flight, crew, route, employer or tokens to Google custom_data.
2. User opts in with accurate stated reward; native loads/shows RewardedAd, SDK callback displays "Awaiting verification" (not a global confirmed amount). Server independently receives SSV; verify exact signed byte sequence/public key ID, ad unit, reward amount/item, nonce owner and expiry; replay/double-receipt protection by immutable provider+transaction ID and nonce.
3. **Atomic backend commit** creates a verified grant for that UID and marks the attempt consumed; ack provider only after durable commit. Need a recovery/help path for lost callbacks, because limited delivery retries cannot guarantee every client-earned action generates a verified server receipt. Provisional client-only event is **not** silently counted as global spendable.
4. The **PWA's own authorized foreground Manual Sync**, when network/operator policy permits, fetches verified reward events/entitlement projection for its same UID; verifies and atomically applies appropriate local entitlement view. A separate **phone Flight Manual Sync is not required for grant publication**, because AdMob SSV already wrote the backend entitlement. However the phone's UI also needs a verified-grant refresh to show accurate balance; do not equate its ad callback with a sync receipt.
5. The normal Flight Delta/Receipt/lastSyncAt remains governed by product-owned Sync rules. App startup's one read-only change check may *inform* the user that rights could be available, but must not silently apply/advance a reward entitlement if that would violate the Manual Sync contract.

**Important correction to J3:** Its earlier `t2 phone Manual Sync acknowledgement` is **necessary only for Flight changes or for an alternative local-only reward publishing design**, not for the recommended signed server-first reward model. Treat J3's four-step timeline as a conceptual *alternative*, superseded by this K2 pipeline for the current D10 **engineering feasibility recommendation**. Do not erase historical evidence.

### K3. P2 local admission limits: three different products cannot be promised at once

**Invariants to protect:**
- F1: A real Flight that passed local durable save is never erased, reverted or concealed to fix a quota-accounting discrepancy.
- F2: PWA contains **zero advertising SDK, ad rendering, or ad-dependent code path** under current owner direction.
- F3: All verified grants carry the correct Firebase UID and immutable transaction identity, no cross-owner grant inheritance.
- F4: Offline native/PWA creates and verified remote grants have **different authorities**; local belief in a quota does not certify global uniqueness.
- F5: If user refuses or cannot load ads, they must not suffer a fabricated successful sync, silent data loss or coercive repeat-ad prompts.
- F6: No public claim of universal offline sync, unlimited records or policy-cleared hard block before admission evidence.

**Three mutually tensioned requirements:** strict *global* nonnegative credits; any device can create new flights offline indefinitely; no explicit safety exception / unbilled grace. These cannot all hold under network partition and independent replicas. Firebase offline batches and local transactions do not fix the distributed budget problem.

| Candidate admission | Strongest property | Principal cost / UX risk | Engineering status |
| --- | --- | --- | --- |
| Strict server adjudication for every NEW Flight | Exact global quota | Offline EFB creates fail → violates local-first professional core; **reject as default** |
| Per-replica advance allocation / escrow | Bounded double-spend in previously funded allocations | Stranded credits on unavailable device; new PWA no native grants while offline; owner deletion/reinstall recovery complexity | **Not implemented; research candidate** |
| Local durable record capture + deferred quota accounting with explicit safety grace | Data protection offline and no coerced ad at moment of Flight entry | Credit overdraft/debt can occur; scarcity/revenue weakened; need policy review | **Preferred safety candidate for P0/P2 prototype**, not approved |
| Unmetered core recording; rewarded option only for nonessential additional value | Best resilience and policy headroom | Weaker reason to watch ads; changes proposed reward offer | Contingency if hard/deferred storage reward fails review |

**First acceptance priority:** test **A and B offline with last remaining entitlement, independent distinct flight CREATE**, one later server-verified grant, and PWA Manual Sync conflict; ensure both original flights remain, verified-grant transactions count once, and any provisional/overdraft status is truthful. Add 1,000-record import, rollback, UID replacement and removed-app recovery. **No app code/device test has run.**

### K4. Sponsor phase unchanged

No new verifiable LogMate pilot traffic or sponsor contract exists. Direct aviation ads remain a later revenue experiment and do not authorize native/PWA advertising expansion now. Keep current P3 measurement and paid-pilot contract gate from J4; avoid duplicate market generalities.

### K5. Net result and owners

**P0 materially improved, not cleared:** Apple 3.1.4/3.2.2(x) context tension + Google Play opt-in unlock example and AdMob no-interference condition explicitly reconciled by scope. Written provider/app-review acceptance remains **OPEN**.

**P1 architectural simplification, not runtime PASS:** server-signed grant can be published without an additional native Flight Sync, PWA pulls on its own Manual Sync. Reward backend, SSV exact-once and compensation path **NOT IMPLEMENTED / NOT TESTED**.

**P2 formal admission contract, not device PASS:** Firestore offline transaction failure and two-replica credit partition formally prevent claiming strict global quota plus unconstrained offline capture; product must decide escrow vs safety-grace vs unrestricted core. No assumption of PWA connectivity or automatic pairing.

**P3 unchanged HOLD:** market existence ≠ LogMate contract.

**RELATED DOMAIN HANDOFF:** LogMate product/engineering owns MASTER reconciliation, rewards transaction model and offline safety acceptance; Design Studio owns accessible Rewards/warning/error copy and ad attribution; Web Manager owns WebKit/EFB/MDM transport, Files/restore, no PWA ads; Marketing owns platform-policy questions, valid-user metrics and sponsor economics. No LogMate/Design/Web files or ad publisher accounts were modified.


---

## L. 2026-11-08 P0 inventory eligibility / Apple ad reporting / P1 SSV fail-safe acceptance

**Decision delta:** Prior D10 assessed rewarded-format consent and normal-usage refusal. The latest source cross-check establishes an **independent P0 risk for the standalone Rewards page as an advertising inventory surface**, an explicit **Apple in-app ad-reporting obligation**, an official **pre-review consultation route that cannot preapprove**, and byte-accurate/idempotent **P1 verification oracles**. These are material admission criteria, not a new advertising placement approval. **No vendor/operator action, trial, design or runtime acceptance performed.**

### L1. P0 is a four-gate matrix, not one rewarded-ad policy [SOURCE / INTERPRETATION OPEN]

| Separate gate | Primary source (checked 2026-11-08) | Operational implication / conclusion |
| --- | --- | --- |
| **R: Rewarded-unit implementation** | [AdMob reward policies](https://support.google.com/admob/answer/7313578) | Opt-in, upfront clearly described reward, skip, delivery of promised reward, *declining must not impair normal app usage*, no generic `watch to support our business` pressure. Stated save-grant reward is **plausible**, depleted-Flight-save interaction **OPEN**. |
| **I: Ad inventory value** | [Google-served ads on screens without publisher-content](https://support.google.com/publisherpolicies/answer/11112688) | Google disallows ads on no/low publisher-content screens, under-construction or pure alert/navigation/behavioral surfaces; true user value should be focal. A separate *blank video-button screen* can trigger inventory risk **even if reward mechanics satisfy R**. No specific exception for a standalone rewarded-only page was established in the cited text; applicability to the exact LogMate rewarded overlay needs publisher determination. Adding token filler content is not a safe workaround. |
| **S: App Store ad experience** | [Apple Review 2.5.18](https://developer.apple.com/app-store/review/guidelines/) | Ad indication, visible close/skip where relevant, age-appropriateness, ability for users to view ad-targeting information, and **in-app capability to report inappropriate or age-inappropriate ads**. This report-ads obligation was absent from the current D10 proposed Rewards contract. Requires product/design/provider support/complaint handling, not simply displaying an ad SDK. |
| **A: App-specific Store approval** | [Apple App Review 3.2.2(x)/3.1.4](https://developer.apple.com/app-store/review/guidelines/), [Apple App Review appointment](https://developer.apple.com/kr/help/app-review/before-submitting-for-review/app-review-appointment), [complete review information](https://developer.apple.com/kr/help/app-review/before-submitting-for-review/complete-review/) | An App Review one-on-one appointment can clarify rules before submitting, **but cannot preapprove an app**. Real review needs accurate business model, test devices, fully functional demo account and exact exhausted-capacity scenario in review notes. Apple 3.1.4 is hardware-specific context; do not turn it into unsupported blanket ban. |

**Inventory-focused design requirement (Design Studio owner, Marketing brief only):** A Rewards/Allowance screen should independently serve the real user task of understanding allowance rights, verified grants, pending rewards, exact sync freshness, consumption rules, failed reward help, and an ad-reporting route. Ad request is only a clearly marked, optional action within that context; do not auto-request/show solely because user navigated to a low-value empty page. **Real value makes the design more defensible, not automatically approved under the Google rule**. Do not fill the page with artificial text/articles for ad approval; product owns meaningful content.

**Exact provider questions (not contacted):**
- AdMob: Does the **standalone Rewards screen** with real allowance balance, grant history, pending-verification state, optional rewarded button and no other ad placements satisfy publisher-content/inventory-value policy for rewarded formats? Does Google's publisher-content screen rule apply to the SDK full-screen overlay or underlying Rewards surface? A blank ad-button-only alternative is rejected pending written provider guidance.
- AdMob: Can a pilot logbook **require** another reward to save a new Flight once a generous free allowance expires, including (a) online + ad available, (b) no-fill/offline, and (c) iPad PWA with **no on-device ads**? Does durable emergency capture/grace change the normal-usage interpretation?
- Apple: How would App Review 3.2.2(x) and the hardware-specific 3.1.4 wording apply to that exact scenario? What in-app ad reporting and advertiser targeting disclosure does 2.5.18 require for an SDK-controlled rewarded overlay?

**Contact route source:** [AdMob publisher support options](https://support.google.com/admob/answer/9948073) describes `Contact us` through help center, with account-eligible options; **availability to current owner/account not checked**. Apple pre-review appointment is informational, not binding; actual store acceptance comes only with reviewed binary. No support message or submission sent.

**P0 user-state/screen evidence packet for any provider consultation:** screenshots or prototype of (1) new account generous initial balance, (2) positive balance/no ads, (3) Rewards page with grant disclosure and opt-in/skip, (4) balance zero/ad available, (5) zero/no-fill/consent denied, (6) offline native, (7) PWA-only iPad with zero or stale quota, (8) urgent offline flight entry, (9) pending/failed SSV award, (10) Report Ad and support. Clearly mark *concept/mock vs released build* and never supply real pilots' logs. Define initial allowance as `N` until owner approves numeric level.

### L2. P1 signed reward verification: identify the **bytes** and business offer separately [SOURCE / SYNTHESIS / VALIDATION OPEN]

Rechecked [official Flutter SSV guide](https://developers.google.com/admob/flutter/ssv):

- The SSV response includes `ad_unit`, `reward_amount`, `reward_item`, `transaction_id`, `timestamp`, `key_id`, `signature` and optional `custom_data`/`user_id`. **The provider reward amount/item are defined in the ad-unit settings**, not automatically derived from the text in LogMate's button.
- Verify the original query data **without modifying/reordering/re-encoding** the signed parameters. The guide says last parameters `signature` and `key_id`, and demonstrates ECDSA public key verification. Percent-escaped `custom_data` must be processed carefully; decode only *after* verifying original signed bytes when mapping the nonce.
- Public keys rotate; cache no longer than 24 hours. Invalid/unknown `key_id` or signature must **not** be accepted as a grant. A signed Google callback proves the provider event, **not** the caller's Firebase UID unless the one-time nonce was already authenticated and bound in a trusted server ledger.
- Google's endpoint expects `HTTP 200 OK`; unsuccessful deliveries are retried **up to five times at one-second intervals**, not indefinitely. Never send 200 before durable idempotent commitment of the reward event, yet acknowledge that prolonged downtime can still lose the notification.
- Google prefers prompt client-side reward with later SSV validation for UX in ordinary cases, but specifically permits waiting for verified SSV when reward validity is critical and delay is acceptable. **LogMate's cross-device spendable grant should be verified-first** as a security research preference, not a statement that immediate client grant is forbidden. The user needs a truthful pending state and fair failure-recovery route.

**Provider-reward-to-product-offer authority:** Create immutable server-side offer records `offerId / offerVersion / adUnitId / configuredRewardItem / configuredRewardAmount / flightSaveGrantN / effectiveFrom` and bind signed attempt nonce before showing. Before crediting, compare SSV's configured reward fields with the offer version associated with that attempt. A creative that promises `+N saves` while the AdMob ad unit is configured with a mismatched reward type or amount needs a deliberate mapping and consistent user disclosure, **not** blind trust in whichever integer appears in the SSV. Do not retroactively alter granted or already-spent rights when future offers change.

**Proposed minimal state machine (not implemented):**
`READY` → [explicit opt-in; server attempt created] `OFFER_RESERVED` → [ad shown] `AD_IN_PROGRESS` → [client earned callback] `USER_REWARD_PENDING` → [SSV signature + nonce + offer + idempotent server transaction PASS] `VERIFIED_GRANTED` → [same-UID PWA foreground Manual Sync] `PWA_APPLIED`.

Branch terminals: `CANCELLED`, `NO_FILL`, `INVALID_SIGNATURE` (quarantine), `SSV_MISSING` (documented dispute/recovery), `UID_DELETED`, `REPLAY` (no additional credit). Arrival order may be SSV-before-client, and local app crash/reinstall may erase client callback history: **derive authoritative grant from durable backend**, not client callback ordering.

**Suggested recovery rather than unjustified payout:** On verified grant lost from app UI → refresh same-UID server entitlement. On client-earned event without verified SSV → record limited audit evidence/attempt ID, expose `Reward pending`, offer noncoercive support/reconciliation; authorized operator may issue a separately identified goodwill **compensation grant** after investigation with audit attribution, not forge a Google-signed grant or promise automatic approval. If no receipt and no independent proof, loss is unresolved and an operational/business risk. Never demand another ad merely to repair a failed prior reward.

### L3. Executable P0–P2 acceptance **spec**, defined not run

| ID | Setup / fault injection | Expected measurable oracle | Owner |
| --- | --- | --- | --- |
| R01 | Incomplete Rewards screen and only ad button | Treat inventory-value review as **OPEN**, don't assert acceptance from SDK PASS; exact proposed screen supplied for publisher review | Marketing + Design |
| R02 | Valid Rewards screen; user declines or skips | No grant; core logbook view/edit/export and safety recording path remain; no nag/popup loop | Product + Design |
| R03 | Zero allowance + online no-fill/denied consent | Explicit honest unavailable/alternative; no lost Flight; policy-hard-block remains disabled in test | Product |
| R04 | PWA zero/stale balance + offline managed iPad | No ad SDK/network request or forced native dependency to retain independent local records; truthful sync status | Web + Product |
| R05 | Rewarded creative shown then reported as inappropriate | User can reach report action; record handling/response path demonstrated, without collecting Flight or advertising profile data | Design + Support |
| R06 | SSV original query valid vs reordered/decoded/re-encoded before verification | Valid signature accepted once; altered signed bytes fail; no fallback on unverifiable raw query | Engineering |
| R07 | SSV valid but `ad_unit`/`reward_item`/`reward_amount` mismatches the immutable offer | Quarantined; no global credit; operator diagnosed from non-sensitive log | Engineering |
| R08 | Missing `custom_data`, unknown nonce, expired or reused nonce, wrong Firebase UID | No cross-UID credit; duplicate request/transaction doesn't increase balance twice | Engineering |
| R09 | 6 duplicate valid callbacks for same `transaction_id` | Exactly one durable verified grant; idempotent 200 after persistence; no excess credit | Engineering |
| R10 | Client callback first; then 10-minute SSV outage beyond bounded retries | Honest pending state and support/recovery; zero *unverified global* grants; no forced rewatch | Engineering + Support |
| R11 | SSV first, client callback later or client process crashes | Same-UID server grant reconstructs on recovery; no negative balance or double credit | Engineering |
| R12 | Ad completed but user signs out and a different UID logs in | Original owner only receives any later verified grant; no new UID inherit/cross-owner leak | Engineering |
| R13 | PWA manual sync after server grant; phone Flight Sync **not** performed | Same-UID grant is fetched and acknowledged in PWA if network/backend admission available; no claim without PWA receipt | Product + Web |
| R14 | Native and PWA both offline spend last local allowance | Both unique Flights durable; no hidden delete; explicit safe pending quota reconciliation on reconnect | Product |
| R15 | Restore old backup, import large historical Flight batch, batch undo, edit/save retry | No duplicated grant/charge, no fabricated saleable views; exact record vs 'new' accounting policy required | Product |
| R16 | Test SDK on exact Flutter version, dark/light, screen-reader and iPad PWA | Native SDK limited to supported builds; PWA bundle has no ad SDK; no unrecoverable accessibility block | Product + Design |

**Acceptance evidence format:** exact app/device/build/commit, date, actor, operating profile, input/callback fixtures, immutable expected oracle, actual result, trace provenance and reviewer. No optimistic summary-only PASS. R06–R12 should first run in isolated development/emulator scope using Google's SSV test mechanism or signature-valid signed fixtures, **not live impressions**. R01/2/5 require actual screen and provider review; R04/13/14 require physical managed-EFB device evidence.

### L4. Closing the gap operationally

**Prioritize by information gain:** P0 policy **two review surfaces** (reward mechanics and inventory eligibility) plus Apple's ad reporting, before creating any production quota restriction. Once a credible design and provider response exist, P1 signed SSV acceptance tests R06–R12, then P2 physical device R04/R13/R14 and imports. P3 direct aviation sponsor work stays at an evidence-dependent HOLD; no real advertiser response or user count exists.

**Current result:** SOURCE/TEST-SPEC advanced. **No new supplier approval, screen implementation, test execution, Firebase entitlement writes, Apple appointment, AdMob contact or PR into LogMate.** User-approved ad-free PWA and high initial free quota remain proposed scope; **production hard-save-block STOP** until policy and protected-record admission evidence exists. The LogMate MASTER still owns any eventual product-spec reconciliation.
