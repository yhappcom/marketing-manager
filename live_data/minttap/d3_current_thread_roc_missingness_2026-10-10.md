# MintTap D3/D4 — current thread ROC missingness observation (2026-10-10)

## Observed first-party community artifact
A 2026-10-05 automated r/YieldMaxETFs distribution thread, "Monday's Target25 Distributions", presents three ticker rows with ROC displayed as `--`, while its aggregate section states "Average ROC: 0.00%". Source: https://www.reddit.com/r/YieldMaxETFs/comments/1wy5l54/mondays_target25_distributions/ . Search-indexed Reddit content was observable on 2026-10-10; direct page retrieval was blocked. The bot says it uses vendor-published public information. No independent issuer validation of those rows was performed.

## Production decision
**CURRENT NATIVE PROBLEM EXAMPLE OBSERVED / FINANCIAL VALUE UNKNOWN / LINK PERMISSION UNKNOWN.** Do not treat the thread's "Average ROC: 0.00%" as issuer-confirmed zero ROC when every visible per-ticker ROC is missing (`--`). The aggregator's denominator, default-value logic, and source coverage are unknown. This is an external presentation ambiguity, not proof of a MintTap bug or of a particular fund's final tax status. A complete native answer should distinguish missing/estimated/final tax characterization and direct readers to the dated issuer notice and year-end documents without pitching the app.

## Next evidence
Check original thread against issuer source for the stated pay period; determine whether the average is calculated from missing values or from an independently populated field. Capture current subreddit rules/moderator permission separately before any product mention or link. No posting, promotion, or general research expansion is authorized.


## 2026-10-17 issuer-event reconciliation — October 14 Target 25 payment

**Issuer row-level estimates located; no final-tax inference.** YieldMax's own fund distribution histories show declaration 2026-10-12, ex/record 2026-10-13 and payment 2026-10-14 for three *distinct* events:

| Ticker | Issuer per-share distribution | Issuer event-row ROC | Authority/status |
| --- | ---: | ---: | --- |
| MSST | $0.1501 | 99.83% | YieldMax fund history; **estimated ROC** |
| NVIT | $0.2451 | 95.05% | YieldMax fund history; **estimated ROC** |
| TEST | $0.1834 | 93.48% | YieldMax fund history; **estimated ROC** |

Issuer primary sources (checked 2026-10-17):
- https://yieldmaxetfs.com/our-etfs/msst/
- https://yieldmaxetfs.com/our-etfs/nvit/
- https://yieldmaxetfs.com/our-etfs/test/
- https://yieldmaxetfs.com/our-etfs/ (explicit `Estimated ROC %`, as-of 2026-10-12)

The 2026-10-12 automated community post https://www.reddit.com/r/YieldMaxETFs/comments/1x3ywly/mondays_target25_distributions/ has four rows (MSST $0.1501, duplicate MSST $0.0000, NVIT $0.2451, TEST $0.1834). All four ROC cells show `--` but the aggregate reads `Average ROC: 0.00%`. The three nonzero distribution values agree with issuer rows; the duplicate zero row has no matching issuer event. Its reported `Average distribution $0.1446` equals $0.5786/4 rounded, whereas the three issuer events average $0.1928667; the extra row depresses the unweighted average by 25%. Reported `Average rate 18.75%` is also consistent with averaging three 25% rows and one blank/zero over four. This verifies an **external aggregation presentation error**, not its internal implementation cause and not a MintTap product defect.

**Important correction/precision:** The issuer's 99.83%/95.05%/93.48% figures are not merely unanchored portfolio-wide estimates: each is displayed on a *dated distribution-event row* as well as the current fund inventory. They remain **estimated**, not a 19a-1 notice or year-end tax finality. The issuer's public tax-documents index https://yieldmaxetfs.com/tax-documents/ was inspected 2026-10-17: its Target 25 section visibly lists 2026 notices through 2026-09-02 and does not list a 2026-10-14 payable notice. This is an **index observation**, not proof that a notice does not exist elsewhere.

**Decision state:** D3 remains NATIVE-ONLY HOLD; no posting, external link or moderator permission granted. A complete native explanation can distinguish issuer event-level estimated ROC from the bot's missing `--` and misleading `0.00%` aggregate, without claiming tax finality. D4 event-level estimated-source identification subgate is now VERIFIED for these three events only; issuer 19a, correction history, broker tax records and MintTap ingestion remain UNKNOWN.


## 2026-10-24 follow-up — 2026-10-19 recurrence and issuer reconciliation

**D3 / REPEATED NATIVE PROBLEM VERIFIED; PROMOTIONAL PERMISSION UNKNOWN / NATIVE-ONLY HOLD.** The search-indexed 2026-10-19 r/YieldMaxETFs automated post again contains four rows for the **2026-10-20 ex-date / 2026-10-21 payable** event: MSST $0.1345, a second MSST **$0.0000**, NVIT $0.2339 and TEST $0.1736. All four ROC fields are `--`, yet the summary reads `Average ROC: 0.00%`. The thread includes a reader's observation that MSST was duplicated again. Source: https://www.reddit.com/r/YieldMaxETFs/comments/1x9u1ep/mondays_target25_distributions/ (Reddit indexed result checked 2026-10-24; direct Reddit page fetch inaccessible; current visibility/edit history not independently confirmed).

**Independent issuer row match (primary source, pages read 2026-10-24):**

| Fund | Issuer distribution/share | Issuer event-level estimated ROC | Event dates | Community comparison |
| --- | ---: | ---: | --- | --- |
| MSST | $0.1345 | **99.45%** | declared 10/19; ex 10/20; payable 10/21 | Correct nonzero distribution plus unmatched duplicate zero MSST row |
| NVIT | $0.2339 | **91.49%** | same dates | Nonzero amount matches |
| TEST | $0.1736 | **87.99%** | same dates | Nonzero amount matches |

Issuer first-party distribution histories:
- https://yieldmaxetfs.com/our-etfs/msst/
- https://yieldmaxetfs.com/our-etfs/nvit/
- https://yieldmaxetfs.com/our-etfs/test/

**Arithmetic reconciliation (independently recalculated):** three issuer event distributions total **$0.5420**; their unweighted per-fund average is **$0.1806667**. The community post's four-row average **$0.1355** is exactly `($0.1345 + $0.0000 + $0.2339 + $0.1736) / 4`, a **25% downward difference** from the three-event average. Its `18.75%` average distribution rate is likewise consistent with three 25% rows plus a blank/zero row divided by four. The **mechanism inside the bot is not verified**; this establishes an externally observable repeated presentation/aggregation inconsistency across the 10/12 and 10/19 posts, not a MintTap bug.

**ROC semantics:** the issuer's three event-level ROC values are **estimates**, not final annual tax characterizations. The bot's `--` cannot be interpreted as verified zero; `Average ROC: 0.00%` is not an issuer-confirmed average. Do not compute or advertise an average ROC from mismatched source states, or infer broker 1099 treatment from these estimates.

**Production decision:** D3's recurring-problem/complete-native-answer evidence is strengthened from one to **two successive October examples**. Prioritize a link-free, context-complete explanation of (a) event identity and duplicate row, (b) issuer estimated ROC versus missing community ROC, (c) final 1099/broker source and revision limits, and (d) why the displayed average is misleading. **Do not post, mention MintTap, link an owned reference, or seek conversions** without a fresh community-rule check and action-specific permission. No moderator approval, bot-owner outreach, tax advice, production telemetry, or product change is established.

**Next evidence target:** direct current thread/rules and moderator authorization if any outward action is contemplated; otherwise use the two observed failures to define an owned-reference source-state/duplicate-event acceptance example. D1 submitted Financial features and D2 operator ad-integrity evidence remain higher-priority blockers.


## 2026-10-24 14:28 KST — link-free native-answer acceptance and total-versus-mean distinction

**D3 CONTENT SUBGATE: PASS FOR INTERNAL, SOURCE-BOUND NATIVE ANSWER / EXTERNAL ACTION STILL HOLD.** No post, reply, link, product mention, or moderator contact was made. The answer below is an *unpublished* English candidate for the observed October 19 thread, not a reusable claim that all YieldMax periods have the same values.

**Fresh source checks (2026-10-24):** Reddit search returned the original October 19 thread with all four rows and the reader's "MSST is double posted again" comment (https://www.reddit.com/r/YieldMaxETFs/comments/1x9u1ep/mondays_target25_distributions/). A direct Reddit page/rules open remained blocked, so current thread edits, posting eligibility, and permission are **not** verified. YieldMax's primary issuer fund pages and ETF inventory independently support the three nonzero 10/19-declared, 10/20-ex, 10/21-payable amounts and estimated ROC values. YieldMax's ROC Center expressly distinguishes interim ROC estimates from final broker Form 1099-DIV; IRS Form 1099-DIV instructions identify box 3 as nondividend distributions, and IRS basis guidance distinguishes ROC from immediately taxable dividends.

**Additional arithmetic distinction:** the bot's *total* $0.5420 is consistent with the three issuer amounts **despite** the unmatched $0.0000 MSST row; the *average* $0.1355 is instead calculated across four displayed rows and is 25% lower than the three-issuer-event average $0.1806667. Thus a correct total does **not** validate the event count, denominator, ROC average, or other summary fields. The bot's 18.75% "Average rate" is consistent with three 25% target-rate cells and one blank cell counted as zero; it is **not** an independently verified fund yield or total return. The issuer's Target 25 distribution-rate target is not a guaranteed return. The mechanism and intended denominator inside the bot remain UNKNOWN.

**Unpublished native answer candidate (no app, no CTA, no external links):**

> For the October 19 Target 25 announcement (October 21 payment), I would separate the distribution amounts from the ROC figures. The issuer lists three distributions: MSST $0.1345, NVIT $0.2339 and TEST $0.1736 per share. Those add up to $0.5420, which agrees with the post's total. But the post also shows a second MSST row at $0.0000 that I cannot match to another issuer distribution for that payment date. Including that extra row produces the displayed four-row average of $0.1355; averaging the three issuer events gives about $0.1807. So the total can be right while the average is misleading.
>
> The post shows ROC as "--" for each row but says "Average ROC: 0.00%". Missing ROC data is not the same as an issuer-confirmed zero. For those specific October 21 payment events, the issuer's **estimated** ROC percentages are MSST 99.45%, NVIT 91.49% and TEST 87.99%. Those are preliminary estimates, not final tax classifications or a basis for assuming what any individual's broker will report. For US tax reporting, check the year-end issuer information and the broker's Form 1099-DIV (including any corrections). The 25% target distribution rate also should not be read as a guaranteed investment return.

**Acceptance checks:** (1) all three ticker amounts and dates match issuer; (2) total-versus-denominator arithmetic explicitly reconciled; (3) missing `--` never rewritten as zero; (4) issuer *estimated* ROC explicitly distinguished from final broker 1099; (5) no average ROC fabricated; (6) no personal tax instruction, product mention, external link, app-search CTA, or promotion; (7) 25% target not called total return. **7/7 content checks PASS against the cited sources**, not a community permission check or production telemetry test.

**Authority / evidence:**
- Original Reddit thread (structured search extraction, direct open blocked): https://www.reddit.com/r/YieldMaxETFs/comments/1x9u1ep/mondays_target25_distributions/
- YieldMax MSST, NVIT, TEST distribution histories: https://yieldmaxetfs.com/our-etfs/msst/ ; https://yieldmaxetfs.com/our-etfs/nvit/ ; https://yieldmaxetfs.com/our-etfs/test/
- YieldMax dated estimated ROC inventory: https://yieldmaxetfs.com/our-etfs/
- Issuer preliminary/final boundary: https://yieldmaxetfs.com/roc-center/
- IRS Form 1099-DIV instructions: https://www.irs.gov/instructions/i1099div ; IRS basis FAQ: https://www.irs.gov/faqs/capital-gains-losses-and-sale-of-home/mutual-funds-costs-distributions-etc

**Production decision:** D3 remains **NATIVE-ONLY HOLD** for all external action; internal native-answer *content* is now source-checked. Do not post this candidate automatically. Current subreddit rules, moderator action-specific approval and posting identity remain UNKNOWN. D1 live submitted Google Play Financial features and D2 operator AdMob evidence are higher-priority blockers; connected browser still returns `Browser access requires the originating browser context`. D4 source-state/duplicate acceptance remains separate and **ROC IMPORT WRITE HOLD**. No new general theory or new research file. Marketing owns source-accurate community content and permission; product owns ROC importer correctness; Design Studio and Web Manager are not material to this text-only, no-link internal acceptance. Measurement remains **no posting / no observed reach, acquisition, retention or revenue**.


## 2026-10-24 15:30 KST — moderator-authored placement evidence (dated; current rules unverified)

**SOURCE / COMMUNITY-SPECIFIC, HISTORICAL (not live rule verification).** A moderator-authored r/YieldMaxETFs announcement dated **2025-09-12** explicitly introduced **Rule 10, “Do Not Post Against Megathreads”**, directing discussion of YieldMax distribution estimates and announcements to the existing Monday/Wednesday megathreads instead of duplicate standalone feed posts. The announcement warns that repeated standalone distribution posts can receive short bans. A **2025-09-19** moderator follow-up in that same thread says the misinformation rule had gone live and includes misleading performance comparisons that omit either price movement or distributions. These are first-party moderator statements as of their dates, **not proof that the same wording remains effective on 2026-10-24**. Source: https://www.reddit.com/r/YieldMaxETFs/comments/1nesglh/ (search-indexed primary Reddit thread; direct Reddit open failed).

**PROJECT DECISION / D3 placement subgate:** Do **not** create a separate post about the observed October Target 25 duplicate/ROC problem. The prevalidated link-free answer is a *candidate reply in the existing relevant distribution discussion*, **only after** directly verifying current rules, post/comment eligibility, account identity/disclosure and any action-specific moderator permission. The 2025 moderator announcement does not authorize a comment, external reference, MintTap mention, product link, or automated participation. This is a **routing constraint**, not promotion approval. Reddit's official Rules help page, updated **2026-10-06**, confirms that moderators configure community rules and their post/comment scope; it does not disclose this community's present rules: https://support.reddithelp.com/hc/en-us/articles/15484500104212-Rules .

**ACCESS / CONFIDENCE:** Direct `reddit.com/r/YieldMaxETFs/about/rules`, the 2025 moderator thread and the 2026-10-19 distribution thread could not be opened via web (DisabledError). A separate scrape attempt did not execute because the connected scraper reported insufficient credits. No current rule text, current moderation consent, user account eligibility, post, comment or outreach was obtained. No content claim or app promotion was published. **D3 NATIVE-ONLY HOLD** remains; internal answer content PASS from prior checkpoint is unchanged. Next: current direct rules and mod approval if needed; otherwise progress D4 issuer XLSX parity/emulator when source bytes and execution are accessible.
