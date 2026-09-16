# 060 — MintTap 1.0.29 Import UI → Activation Path Audit

Date: 2026-09-17
Status: VERIFIED against release implementation `736bbc99a41c14130d82aeaa17ac81f0fc835a65`

## Question
Where does a new MintTap user actually discover Import, what work is required before a portfolio result can exist, and which parts belong to V1 route discovery versus V2 first-value execution?

## Verified release path

### 1. Import discovery is Settings-dependent
`SettingsScreen` imports `transaction_import_review_screen.dart`. Inside the Settings UI, the transaction Import entry is a navigation row titled by `transactionImportTitle`, with a visible `CSV/XLSX` value. Selecting it pushes `TransactionImportReviewScreen` and forwards a selected portfolio only when the current selection is a specific portfolio.

By contrast, the release `TransactionHistoryScreen` empty state and first-transaction tutorial point the user toward **Add Transaction**. The empty-state CTA opens `EditTransactionScreen`; the first-transaction spotlight targets the add button and labels its primary action with the add-transaction string. No Import peer action is present in the audited Transaction History first-data path.

**Activation interpretation:** Import exists, but the first-data surface teaches Manual. Therefore Import is not currently a peer-discoverable first-data route. This is a product-path fact, not a usability percentage.

### 2. Import setup automatically selects the first portfolio when possible
`TransactionImportReviewScreen._loadInitialData()` loads portfolios and supported tickers. If a valid `initialPortfolioId` is supplied it is selected; otherwise, when portfolios exist, the first portfolio is selected automatically. If no portfolio exists, selection remains null.

**Activation interpretation:** once the user has found Import and already has a portfolio, portfolio choice is not necessarily an additional mandatory tap. Discovery remains the larger structural issue.

### 3. Template acquisition is optional but supported in both CSV and XLSX
The Import screen can build localized CSV and XLSX templates. Mobile iOS/Android uses SharePlus for template export; other surfaces use a save-location flow. Template generation uses the user's locale and default currency.

**Measurement boundary:** template acquisition/preparation is real user work when the participant does not already possess a compatible file. Prepared-file Study E must not include it in the intrinsic Import execution time; end-to-end Import studies must include it separately.

### 4. File selection performs immediate parsing and validation
The file picker accepts a selected file, rejects files over 5 MiB, rejects extensions other than CSV/XLSX, parses rows, applies a 5,000-row limit, then parses with `mapping: null` and immediately refreshes Import validation.

There is no separate mandatory column-mapping screen in the audited happy path. `ImportColumnMapping` exists at parser level, but `_pickFile()` invokes `_parseRows(rows, mapping: null)`. A template-mismatch panel is shown when required columns are missing rather than making a mapping step part of every valid-template Import.

**Correction to prior working language:** the canonical happy path should not be described as `file selection → column mapping/review` for 1.0.29. It is `file selection → parse/validation → review`, with mismatch handling as an exception path.

### 5. Review is substantive, not a cosmetic confirmation
The screen maintains preview filters for valid, duplicate, sell-error, error and unsupported rows, plus transaction-type, reinvestment and memo overrides. Submission is enabled only when a portfolio exists, parsed data exists, at least one row is importable, required columns are present, and validation/save operations are idle.

On submit, validation is rebuilt before saving. The successful batch marks user data changed, clears the selected-file state, stores the last batch summary and reports imported-row count.

**Activation interpretation:** Import completion is not first value. It is a data-ingestion boundary. V2 remains downstream: the user must subsequently reach a successful personalized portfolio result under the semantic first-value contract from 056/057.

## V1/V2 acceptance map

| Boundary | Evidence class | Activation stage | Acceptance question |
|---|---|---|---|
| User identifies Import without prompting | behavioral | V1 | Can a fresh user find Import as a plausible way to start tracking existing holdings? |
| Settings → Import navigation | code-verified | V1 | Does routing require knowledge that Import lives in Settings? |
| Portfolio preselection | code-verified | V1/V2 friction | Is a valid portfolio already available and correctly selected? |
| Template acquisition/preparation | code-verified + behavioral needed | V2 preparation | Can the user understand and produce compatible input without assistance? |
| File selection | code-verified | V2 | Can the user select a supported CSV/XLSX? |
| Parse/validation | code-verified | V2 | Does valid N1 input parse without mismatch/error? |
| Review/override | code-verified + behavioral needed | V2 | Can the user distinguish valid/duplicate/error states and trust what will be imported? |
| Save batch | code-verified | pre-first-value | Are intended rows actually committed? |
| Personalized result displayed and understood | 056/057 contract | V2/V3 | Does the user reach semantic first value and understand a meaningful result? |

## Tranche-1 implication
The earlier Tranche-1 proposal to expose Import and Manual as peer first-data paths now has direct release-code support. The problem is not that Import is absent or technically immature. The release provides localized templates, CSV/XLSX parsing, validation, duplicate/error classification and batch save. The discoverability asymmetry is upstream: Transaction History's zero-data guidance explicitly promotes Manual, while Import is nested in Settings.

A low-risk activation candidate is therefore **surface-level route parity before Import-engine redesign**: expose an Import choice wherever the zero-data Manual CTA/tutorial currently teaches the first transaction, while preserving the existing Import screen and its validation safeguards. Exact UI design remains a Design/Product decision and must be validated with fresh users.

## Study D / Study E updates

### Study D — unprompted route discovery
Start from the same post-onboarding state. Do not mention Manual or Import. Record whether the participant chooses Add Transaction, searches Settings, finds Import, or stalls. The primary discovery observation is route identification, not elapsed time alone.

### Study E — intrinsic route execution
For Import, begin timing at entry to `TransactionImportReviewScreen` with N1 prepared file available. Do not count prior discovery or file preparation. For Manual, begin at entry to the add-transaction route with identical N1 facts. Continue through semantic first value and V3 comprehension.

A separate end-to-end Import-preparation study is required before making ease/speed claims that include template preparation.

## New operating rules
- **Route Availability Is Not Route Discoverability** — a technically complete feature nested away from first-data guidance is not an equivalent activation route.
- **Happy Path Before Exception Path** — do not insert column mapping into the canonical funnel when release code does not require it for schema-valid input.
- **Ingestion Is Not Value** — successful Import is an upstream state transition, not semantic first value.
- **Teach Both Before Optimizing Either** — when Manual and Import serve materially different user starting states, first-data guidance should not silently train only one route before comparative validation.

## Remaining unknowns
- Fresh-user behavioral discovery rate and failure modes.
- Template comprehension and preparation burden in real brokerage-history workflows.
- KRW/non-English review comprehension.
- Whether XLSX and CSV produce equivalent perceived confidence and error recovery.
- Post-save navigation/time to semantic first value in live task execution.
- Exact safest peer-route UI treatment and whether it introduces choice overload.
