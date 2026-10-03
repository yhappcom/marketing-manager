# Research 405 — Review Requests Are Post-Value Sampling, Not Rating Harvesting

Validated: 2026-10-03

## Decision
For sparse professional apps, an in-app review request is a sampling event after sufficient real product value. It is not a growth lever for maximizing prompt volume or selecting likely-positive users.

## Validated platform findings
Apple recommends asking at an appropriate satisfaction moment after an action or task is completed and not interrupting activity. Its standardized prompt can be requested up to three times in a 365-day period. Apple also recommends keeping support contact information easy to find.

Google Play says to request an in-app review only after the user has experienced enough of the app to provide useful feedback. It explicitly says not to ask opinion or predictive questions before or during the rating flow. Google also applies a time-bound display quota whose exact value can change, so an API call is not evidence that a dialog appeared.

Google Play policy prohibits incentivized or manipulated ratings/reviews.

## JO0–JO9 — Review Request Integrity Contract
- JO0 Value prerequisite: require completion of a real specialist job.
- JO1 No first-use prompting: onboarding, first launch, authentication, import setup and unresolved errors are ineligible.
- JO2 Neutral eligibility: do not gate on sentiment, NPS, willingness to rate, complaint absence or predicted stars.
- JO3 Protected-workflow boundary: never interrupt concentration-critical work.
- JO4 Platform-flow integrity: use the native review flow as designed.
- JO5 No consideration: no reward, unlock, discount, premium benefit or ad treatment for ratings/reviews.
- JO6 Local cooldown ledger: maintain conservative app-side eligibility state and never infer that an API call produced a visible prompt or submitted rating.
- JO7 Support separation: support/problem reporting remains independently discoverable.
- JO8 Diagnostic join: analyze review themes by available territory/version/device/workflow context and connect them to verified repairs.
- JO9 Decision: KEEP / RETIME / SUPPRESS / REPAIR-PRODUCT / REPAIR-SUPPORT / HOLD-SPARSE.

## MintTap
Eligibility should follow successful specialist value, not app open or ticker view. Do not prompt while a user is resolving ROC provenance, Tax Adjustment, split/reinvestment continuity, or an apparent calculation/data discrepancy. Those are trust-critical states.

## LogMate
After launch, candidate eligibility may follow verified successful import/migration, multi-leg logging, or export. Never prompt during flight-entry concentration, duplicate reconciliation, Previous Total correction, import/export failure, or first-run setup.

## Reusable rule
verified specialist success → neutral eligibility → non-interruptive native request → segmented review evidence → repair/re-engagement

Optimize timing quality, not request frequency. Rating movement after a prompt-policy change is observational evidence, not proof of acquisition, retention, or revenue lift.

## Sources
Apple Developer: Ratings, reviews, and responses.
Apple Developer: Respond to reviews.
Android Developers: Google Play In-App Reviews API.
Google Play Console Help: User Ratings, Reviews, and Installs.

## Next operational target
Audit MintTap's current iOS/Android review-request implementation and telemetry: trigger event, first-use exclusion, pre-prompt sentiment filtering, local cooldown, protected workflow state, support escape path, and whether review-flow calls are incorrectly treated as displayed/submitted reviews.
