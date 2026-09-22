# Research 197 — Apple Featuring Nomination & Zero-Cost Editorial Distribution Integrity

Validated: 2026-09-22

## Why this closes a useful gap
Research 196 established Google Play Promotional content as an event-driven zero-cost re-engagement/discovery surface. Apple has a distinct zero-media-spend opportunity: Featuring Nominations in App Store Connect. It is editorial consideration, not a guaranteed distribution channel, and therefore needs its own operating contract rather than being treated as ordinary ASO or a release checklist item.

## Authoritative findings
Apple currently allows eligible App Store Connect roles (Account Holder, Admin, App Manager, Marketing) to nominate an app for featuring. Nomination types are New Content, App Enhancement, and App Launch. A nomination can specify platforms, relevant countries/regions and localizations. An approved or published In-App Event can be attached; Apple recommends attaching it early. Up to five supplemental URLs may support the nomination, including documents, art assets and TestFlight public links. Apple also explicitly invites useful details such as accessibility, inclusivity, nomination priority and unique aspects of the app/team.

Individual nominations can be saved as drafts before submission. CSV-imported nominations are submitted automatically rather than remaining drafts. Submitted nominations remain editable, but nomination type and related applications cannot be changed after submission. A submitted nomination is evidence of a pitch to Apple's editorial team, not evidence that Apple selected or featured the app.

Sources:
- Apple Developer, App Store Connect Help, “Nominate your app for featuring”: https://developer.apple.com/help/app-store-connect/manage-featuring-nominations/nominate-your-app-for-featuring
- Apple Developer, App Store Get Started: https://developer.apple.com/app-store/get-started/

## DI0–DI5 Apple Featuring Nomination & Editorial Distribution Integrity Gate

### DI0 — Opportunity identity
Record app/version, nomination type, platform, countries/regions, localizations, intended release/event date and App Store Connect state. Distinguish draft, submitted and actual editorial featuring.

### DI1 — Editorial-worthiness integrity
Nominate only a genuine launch, meaningful new content, or material app enhancement. Routine maintenance, ordinary data refreshes and minor bug fixes are not manufactured into editorial stories merely because nomination is free.

### DI2 — Specialist-value evidence
The nomination must explain the concrete specialist job improved and why it matters to the target niche. For MintTap this means demonstrable YieldMax-investor utility; for LogMate, demonstrable pilot/logbook utility. Avoid broad claims that exceed the product.

### DI3 — Story/evidence integrity
Support claims with the strongest available evidence: working product/release, relevant In-App Event where appropriate, accessibility/inclusivity facts, art/materials, documentation or TestFlight access. Supplemental links are evidence, not decoration. Every claim must remain maintainable after release.

### DI4 — Territory/localization continuity
A nomination's country/region and localization scope must match the actual product availability, language quality, support readiness and promoted capability. Do not submit a broad global scope merely to maximize theoretical editorial reach.

### DI5 — Outcome and reuse decision
Keep `submitted`, `selected/featured`, Store exposure, qualified acquisition and downstream repeated specialist value separate. A nomination that is not selected can still yield reusable launch-story assets and clearer positioning, but it must not be reported as a distribution success.

## Canonical semantic rules
- `nomination submitted ≠ Apple editorial selection`
- `selected/featured ≠ qualified acquisition`
- `qualified acquisition ≠ repeated specialist value`
- `release exists ≠ editorial-worthy release`
- `zero media spend ≠ zero preparation cost`
- `more nominations ≠ more sustainable organic distribution`
- `supplemental material ≠ permission for unsupported claims`
- `global app availability ≠ global nomination relevance`
- `In-App Event attached ≠ featuring guaranteed`

## MintTap application
Do not nominate routine YieldMax distribution/data refreshes. Candidate stories should require a material user-facing capability or launch milestone with a clear investor workflow improvement. Before submission, record exact release scope, supported territories/localizations, proof URLs/TestFlight if useful, accessibility facts, and the specialist value statement. If MintTap has historical nominations, reconstruct draft/submitted/featured status rather than inferring featuring from traffic spikes.

## LogMate application
Potential future candidates include the initial public launch or genuinely material pilot workflows such as a major import/offline/PWA capability when production-ready. Routine compatibility maintenance is not a featuring story. Pilot-specific correctness, workflow scope, supported sources and offline behavior must be described precisely; do not imply flight planning, navigation, dispatch, certification or regulatory authority that the product does not provide.

## Reusable company operating record
For every nomination keep:
`nomination_id → app/version → type → specialist story → release/event date → platform → territory → localization → attached In-App Event → evidence URLs → accessibility/inclusivity facts → draft/submitted timestamp → editorial outcome → observed Store exposure → qualified acquisition → core-value completion → repeat value`

This registry prevents editorial pitches from becoming unverifiable marketing anecdotes and lets future niche apps reuse high-quality story/evidence patterns without copying unsupported claims.

## Next validation
Audit MintTap App Store Connect for Featuring Nominations: current eligibility/roles, nomination history, exact types, territory/localization scope, supplemental evidence, any attached In-App Events, submission dates and actual featuring evidence. Until that evidence exists, do not invent a nomination calendar or claim that MintTap has been featured.