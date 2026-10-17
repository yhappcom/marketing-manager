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
