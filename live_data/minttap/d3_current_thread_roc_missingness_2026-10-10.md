# MintTap D3/D4 — current thread ROC missingness observation (2026-10-10)

## Observed first-party community artifact
A 2026-10-05 automated r/YieldMaxETFs distribution thread, "Monday's Target25 Distributions", presents three ticker rows with ROC displayed as `--`, while its aggregate section states "Average ROC: 0.00%". Source: https://www.reddit.com/r/YieldMaxETFs/comments/1wy5l54/mondays_target25_distributions/ . Search-indexed Reddit content was observable on 2026-10-10; direct page retrieval was blocked. The bot says it uses vendor-published public information. No independent issuer validation of those rows was performed.

## Production decision
**CURRENT NATIVE PROBLEM EXAMPLE OBSERVED / FINANCIAL VALUE UNKNOWN / LINK PERMISSION UNKNOWN.** Do not treat the thread's "Average ROC: 0.00%" as issuer-confirmed zero ROC when every visible per-ticker ROC is missing (`--`). The aggregator's denominator, default-value logic, and source coverage are unknown. This is an external presentation ambiguity, not proof of a MintTap bug or of a particular fund's final tax status. A complete native answer should distinguish missing/estimated/final tax characterization and direct readers to the dated issuer notice and year-end documents without pitching the app.

## Next evidence
Check original thread against issuer source for the stated pay period; determine whether the average is calculated from missing values or from an independently populated field. Capture current subreddit rules/moderator permission separately before any product mention or link. No posting, promotion, or general research expansion is authorized.
