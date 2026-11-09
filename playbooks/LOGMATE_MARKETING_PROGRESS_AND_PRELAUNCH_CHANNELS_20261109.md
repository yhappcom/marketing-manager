# LogMate — Marketing-only progress gates and prelaunch Store channel readiness

**Created: 2026-11-09 KST. Marketing Manager study only.** This is not an approved store launch, actual beta recruitment, branding change, technical test, or a statement of released LogMate functionality.

## Decision

**Do not start Apple App Store pre-orders or Google Play pre-registration until a credible launch date, product/claim approval and actual account eligibility exist.** First obtain owner-approved brand descriptor, an honest company-owned landing page and permissioned qualified interest. Marketing will not do Import/Sync/SSV/Firestore/device testing; those belong to Engine/Product/Web/Design.

### New official prelaunch channel research (2026-11-09)

| Channel / source | Actual rule | LogMate marketing action |
| --- | --- | --- |
| [Apple App Store first-release pre-order](https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/publish-for-pre-order/) | First pre-order release date **2 to 180 days** in future, with version submission/review and app release-for-preorder step. Eligible new free and paid apps in territories not yet released. | Not yet approved or activated. Do not promote a promised launch date before release confidence. Apple advises communicating date changes independently. |
| [Apple Pre-Order analytics](https://developer.apple.com/help/app-store-connect-analytics/acquisition/pre-orders/) and [metric definitions](https://developer.apple.com/help/app-store-connect-analytics/reference/metrics-definitions) | **Net reservations = pre-orders − cancellations**; pre-order metrics become available after **five unique users** pre-order. Source/region and postrelease downloads are separate metrics. Conversion counts pre-order and download without double-counting a later automatic download. | Require real net/source/region data after store approval; neither reservation nor auto-download proves specialist activation. |
| [Google Play pre-registration](https://support.google.com/googleplay/android-developer/answer/9859047) | Campaign lasts at most **90 days** to production launch or expires; test track and content declarations are required/recommended preparatory steps. Auto-install eligibility is **conditional**, including restrictions for enterprise-managed accounts. | Do not start when release cannot credibly occur within 90 days; do not promise managed EFB automatic installation. |
| [New personal Play publisher accounts](https://support.google.com/googleplay/android-developer/answer/14151465) | **Conditional** for personal developer accounts established **after Nov 13, 2023**: 12 opted-in closed testers continuously for 14 days and production-access request before eligible Play preregistration. | LogMate publisher type/date **UNKNOWN**. Operator must check; don't assert it applies universally. |
| [Play preregistration measurement](https://support.google.com/googleplay/android-developer/answer/9859047) | Pre-registered users and **conversions** differ; conversion counts users who installed **within 14 days** of release, including early-access/testing paths. | Don't equate preregistration with qualified pilot installs; reconcile store and genuine first-use separately. |

**Clarification:** App Store preorder publishing and App Store product-page-optimization tests are different features. A pre-order can be published **before** release once Apple's actual review and date conditions are met; this is not proof of present LogMate eligibility. Preorder and Play preregistration are available distribution mechanics, **not organic audience by themselves**.

**Sequence:** approved Brand/Store name → verified Engine-supported current product copy → authorized privacy-safe owned landing and consent → launch confidence/Store operator review → Apple pre-order (2–180-day first-release timing) and/or Play prereg (only when launch within 90 days is credible, and account gates pass) → measure net prereg interest, attributable real installs, actual first specialist logbook use and repeated use. No date has been set or registrations collected.

## Marketing-only 16-checkpoint register — NEW BASELINE, not the legacy 7/24

**Binary, unweighted evidence gates.** R means a defined **desk/sourced deliverable** has evidence in the repository; it does **not** establish real customer demand or product acceptance. O means **independently observed/approved** owner, market, Store or operating evidence. To count an O as DONE, cite concrete operator output, real qualified participant data or written approval; source-only docs and technical simulation are insufficient. Every report must show R and O separately, and must not infer completion or new percentage just from document additions.

| ID | Specific DONE oracle | State | Evidence or outstanding owner |
| --- | --- | --- | --- |
| **R01** | Audience/job *hypotheses* segmented, with no invented market share | **DONE — DESK** | D10 §V |
| **R02** | First-party competing offers and contradictory marketing superlatives reviewed | **DONE — DESK** | D10 §§U/V |
| **R03** | Narrow source-dated LogMate brand-name collisions documented, no trademark conclusion | **DONE — DESK** | [Brand/ASO brief](LOGMATE_PRELAUNCH_BRAND_ASO_GATE_20261109.md) |
| **R04** | At least two explicit marketing-channel/permission constraints evidenced | **DONE — DESK** | D10 §W: r/flying; EAA |
| **R05** | Truth-limited store/landing text drafts and official field-length requirements checked | **DONE — DESK** | [Brand/ASO brief](LOGMATE_PRELAUNCH_BRAND_ASO_GATE_20261109.md) |
| **R06** | Apple preorder vs Play prereg limits, approval and metric differences sourced | **DONE — DESK, this cycle** | Primary sources above |
| **O01** | Product/brand owner approves final public descriptor, trademark and target-country Store availability appropriately reviewed | **OPEN** | Owner/brand/legal |
| **O02** | Feature claim registry signed off against actually accepted product/Engine release truth | **OPEN** | Product and Engineering evidence, no Marketing technical testing |
| **O03** | Web owner confirms actually live landing, verified identity/privacy/consent and accurate claims | **OPEN** | Web Manager/operator |
| **O04** | Actual qualified search queries, clicks, sources and indexed pages observed | **OPEN** | Authorized Search Console/analytics |
| **O05** | Voluntary, consented airline pilot market conversations observed and records retained minimally | **OPEN** | Marketing; prior 12 qualitative interview target, zero completed |
| **O06** | Candidate value-message preference supported by observed participants/real market evidence | **OPEN** | No preference test completed |
| **O07** | Store operator makes dated GO/NO-GO for actual preorders/prereg based on launch date and account/review readiness | **OPEN** | No verified Store Console status |
| **O08** | Actual approved Store/registration listing with real net preorders, prereg or installs plus source | **OPEN** | No LogMate account metrics |
| **O09** | Consent-safe first meaningful airline-pilot task and subsequent repeat/28D use observed | **OPEN** | Actual released-user cohorts unavailable |
| **O10** | Real finalized eligible rewarded-ad economics or signed, delivered, settled aviation sponsor pilot | **OPEN** | No revenue or sponsor contract evidence |

**Baseline as of 2026-11-09: Desk research R = 6/6; real operator/customer evidence O = 0/10; overall 6/16 = 37.5% of these narrowly defined, equally counted checkpoints.** Neither R 6/6 nor overall 37.5% means launch readiness, product completion, quantified demand or even valid brand-name clearance. This score is **introduced today** and is **not comparable** with historic D10 7/24 (29.17%, mixed engineering/marketing). Do not report a 29%→37.5% increase. No real pilot/interview/search visit/conversion, App Store reservation, Firebase test, approved ad or sponsor settlement has been observed.

## Next evidence target

**O01 / O02 first**, because named-identity and feature-truth risks make any store/landing promise premature. Marketing recommends presenting the prior internal example **LogMate: Pilot Logbook** to the product/brand owner for legal/name/target-market review; do not rename the app. Product/Engine supplies accepted current capabilities; Marketing does not test them. **O03/O04** then require Web Manager-confirmed live site, owned Search Console evidence and lawful consent. **O07/O08** only when the app release owner can substantiate launch timetable and actual App Store/Play status. If no new external evidence is available, report NO NEW MARKET/OPERATOR EVIDENCE; do not manufacture a new micro-study, ranking, opt-in rate or model-count improvement.

**Owner constraints:** zero-cost marketing default, no paid upgrades, Home/Flight/Import/Backup/Manual Sync protected from intrusive ads, no unsupported EFB/PWA claims. r/flying/EAA permission restrictions remain in D10 §W. No customer outreach, App Store/Play Console action, website publishing, business contract or non-Marketing repository modification occurred.
