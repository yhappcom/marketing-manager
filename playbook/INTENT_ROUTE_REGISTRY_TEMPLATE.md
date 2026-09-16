# Intent Route Registry Template

Purpose: manage zero/low-cash acquisition by durable user intent rather than by individual post/channel. Use for App Store Custom Product Pages, Google Play Custom Store Listings, campaign links, UTM-routed referrals, owned content and community/social assets.

## Operating principle

`many content assets -> few source campaigns -> very few durable intent routes -> one coherent first-value promise`

Do not create a new route for every post, article, subreddit, social account or keyword. A route exists only when the user problem and Store story genuinely differ and traffic/decision value justify the maintenance burden.

## Registry

| route_id | audience/problem | evidence IDs | source surfaces | external promise | Store destination | Store variant | routing mechanism | native measurement | expected first value | product evidence state | status | expiry/review trigger | Decision Record |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| example_route |  |  |  |  | default / Apple CPP / Play CSL |  | Apple campaign / CPP URL / Play listing URL / UTM / keyword |  |  | VERIFIED / PARTIAL / UNKNOWN | CANDIDATE / ACTIVE / MERGE / RETIRE |  |  |

## Required route definition

### 1. Problem / intent

State the specific recurring job, question or pain in audience language. Do not define the route as a demographic label alone.

### 2. Evidence

Record the sources proving that this intent recurs:

- community threads/questions;
- search/query evidence;
- owned-content performance;
- support/user feedback;
- Store search terms;
- product usage evidence.

A route without evidence remains CANDIDATE.

### 3. External promise

Write the narrow promise conveyed before the Store. It must be supportable by the current product.

### 4. Store story

Specify what genuinely changes versus the default page:

- first screenshot/message;
- proof sequence;
- text emphasis;
- icon/name only where platform policy/strategy justifies it;
- keyword routing where available.

Marketing owns intent/message requirements. Design Studio owns visual execution.

### 5. Routing mechanism

Apple examples:

- default product page + campaign token;
- Custom Product Page unique URL;
- App Store keyword -> CPP;
- CPP deep link when product routing is implemented/approved.

Google Play examples:

- default listing + UTM source/campaign;
- Custom Store Listing unique `listing` URL parameter;
- Play search keyword -> CSL;
- country/segment CSL where evidence supports it.

### 6. Expected first value

Define the product state that should fulfill the external promise. Do not use install/app-open as first value.

### 7. Measurement

Preserve native definitions. Minimum chain:

`source click/referral -> Store view/visitor -> native Install/Open/download intent -> first product value -> useful return -> durable ad-bearing use`

Apple and Google metrics remain separate. CPP/CSL source differences are observational unless a valid experiment randomizes the relevant treatment.

## Route creation gate

Create a new durable route only if all are true:

- distinct recurring intent exists;
- product supports the promise;
- Store story materially differs;
- expected traffic/strategic importance can support a decision;
- maintenance cost is acceptable;
- measurement path exists or is explicitly UNKNOWN with a plan to resolve it.

Decision expression:

`distinct intent × distinct Store story × measurable traffic × supported product value > maintenance + fragmentation cost`

If false, reuse an existing route and distinguish source through campaign/UTM metadata.

## Sparse-traffic safeguards

- Never use platform capacity limits as route targets.
- Do not create one Store page per content asset.
- Merge routes whose promises and first-value state are materially the same.
- If Apple privacy thresholds repeatedly hide campaign/CPP data, broaden the decision unit/window instead of manufacturing conclusions.
- If Google Store experiments remain underpowered, keep control or use observational evidence rather than extending tests indefinitely.

## Review cadence

Review a route when one of these occurs:

- product capability changes;
- Store policy/feature changes;
- external claim/source expires;
- traffic remains below useful evidence thresholds;
- two routes converge semantically;
- downstream activation/return contradicts Store conversion;
- maintenance labor exceeds decision value.

## Cross-team handoff

For a route moving from CANDIDATE to implementation:

`route_id + evidence IDs + approved promise -> Design Studio visual brief -> Web/Content source asset -> Store configuration -> native measurement identifiers -> Marketing Decision Record`

No team should independently alter the core promise without updating the route definition.
