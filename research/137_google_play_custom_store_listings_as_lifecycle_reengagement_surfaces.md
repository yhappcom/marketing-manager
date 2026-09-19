# 137 — Google Play Custom Store Listings as Lifecycle Re-engagement Surfaces

Validated: 2026-09-20

## Why this is a material extension

Earlier AX work treated custom storefronts primarily as deterministic acquisition-intent routing. Current Google Play Console documentation supports a broader model: Custom Store Listings (CSLs) can target not only country, pre-registration, search keywords, unique URL and ads traffic, but also **existing-user lifecycle/value segments**.

Current documented segments include:
- churned users — uninstalled the app;
- lapsed users — have not opened the app in the last 28 days;
- lapsed + churned users;
- non-buyers — installed but never purchased;
- one-time buyers;
- repeat buyers;
- lapsed buyers — purchased but not in the last 180 days;
- custom audiences based on developer-defined behavior/attributes.

Google permits up to 50 CSLs. A CSL can customize app name, icon, descriptions and graphic assets. Contact details, privacy policy and category remain shared. CSLs are not automatically translated; explicit translations are needed where appropriate.

Primary authoritative source: Google Play Console Help, “Create custom store listings to target specific user segments,” current as checked 2026-09-20: https://support.google.com/googleplay/android-developer/answer/9867158

## Canonical principle

**A Store surface can be a lifecycle re-entry surface, not only an acquisition surface. Do not force acquisition and re-engagement into one funnel.**

For Google Play, a user who already knows or previously used the product can receive a storefront promise tailored to a lifecycle state. That changes the correct question from “which listing converts new users?” to “what truthful reason to return is appropriate for this known lifecycle state?”

This is especially relevant to sparse niche apps: reacquiring a previously qualified specialist can be more valuable than manufacturing broad new traffic.

## BC0–BC5 Lifecycle Storefront Re-entry Gate

### BC0 — Unrecognized
All Store traffic is treated as new acquisition; prior-user state is ignored.

### BC1 — Segment-aware
The team knows Play exposes lifecycle/value targeting, but has no explicit re-entry job or measurement contract.

### BC2 — Listing deployed
A lifecycle-targeted CSL exists, but its promise, eligibility, localization, or downstream return behavior is not sufficiently documented.

### BC3 — Decision-grade re-entry surface
Required record:
- exact Play target segment and its platform definition;
- why that state has a legitimate specialist re-entry job;
- truthful differentiated promise and asset delta;
- listing/localization scope;
- dates and semantic version;
- exposure/interaction/acquisition metrics using AZ exact semantics;
- whether the user is returning/churned/lapsed rather than new;
- post-return first restored value and useful return event;
- no artificial friction, feature withholding or deceptive urgency used to force return.

### BC4 — Qualified reactivation evidence
BC3 plus evidence that the surface improves **useful specialist reactivation**, not merely Store interaction. Measure return to core value, subsequent useful cadence and compatible ad-bearing use separately.

### BC5 — Reusable lifecycle memory
Retain wins, losses, insufficient evidence and retired hypotheses by lifecycle state, promise, market and semantic version. Do not generalize a lapsed-user result to churned users, new acquisition, or another professional niche without evidence.

## MintTap implications

Potential lifecycle jobs should come from product evidence, not from the existence of Play targeting options. Plausible hypotheses to test only after evidence exists include:
- a lapsed investor returning because current distribution/portfolio information has become useful again;
- a churned user returning after a materially relevant tracking capability or reliability improvement;
- a prior user returning after a product change that resolves a previously observed workflow problem.

Do **not** use generic “come back” creative, artificial scarcity, investment-performance implication, or promises unsupported by the current app. Do not target lapsed/churned users merely to increase ad impressions. Reactivation is successful only when the user regains useful product value.

MintTap is ad-funded, so lifecycle economics must be evaluated as:
`eligible prior specialist → truthful re-entry reason → CSL interaction/reacquisition → restored core value → useful return cadence → compatible ad-bearing use`

Ad revenue is downstream. A reactivated user who immediately abandons after seeing more ads is not a successful lifecycle outcome.

## LogMate implications

For LogMate, pre-launch work should define the measurement contract only. After launch, lapsed/churned pilot targeting becomes legitimate only if there is evidence for a concrete return job—for example, a materially improved import/restore/offline workflow relevant to the user's prior problem.

Do not create retention failure intentionally to populate lifecycle audiences, and do not broaden from pilots to generic aviation audiences to obtain volume.

## Cross-platform asymmetry

Do not assume Apple Custom Product Pages provide the same native lifecycle-state targeting. Current Apple CPP documentation validated in research 132/133 describes URL, keyword, localization and deep-link routing; this research does not establish an Apple equivalent to Play's churned/lapsed/buyer/custom-audience CSL targeting.

Therefore the canonical registry must preserve `platform_native_targeting_mode` rather than normalizing both platforms into a generic “custom page segment.”

## Operational registry fields

Add to the combined storefront registry:
- platform;
- listing ID/reference name;
- targeting mode;
- exact platform segment definition;
- acquisition vs lifecycle-reentry purpose;
- eligibility hypothesis;
- promise/asset delta;
- localization;
- start/end dates;
- metric semantic version;
- Store interaction/acquisition evidence;
- restored-core-value event;
- useful-return event/window;
- ad-bearing-use eligibility;
- evidence state: observed / censored / unknown / not instrumented / not applicable;
- decision and rationale.

## Guardrails

1. Segment availability is not a reason to create a listing.
2. Do not flatten new, lapsed, churned and buyer-state populations.
3. Do not optimize re-entry to raw clicks or installs alone.
4. Do not use ad revenue as the reactivation promise.
5. Do not infer Apple parity from Google Play capability.
6. Preserve current platform definitions because lifecycle thresholds can change.
7. Missing or insufficient data remains unknown/censored, not zero.

## Next validation

Audit the actual MintTap Play Console CSL inventory for targeting mode. Specifically determine whether any existing CSL uses lifecycle/value segments, URL/search/country targeting only, or none. For every lifecycle listing found, recover its exact target definition, assets, localization, dates, Store metrics and downstream restored-value evidence before judging performance.
