# 025 — Niche Community Evidence Operations

Validated: 2026-09-16

## Purpose

Build a reusable operating model for learning from and participating in specialist communities without treating them as free acquisition inventory. Primary cases: YieldMax/income-investor communities for MintTap and pilot/professional aviation communities for LogMate.

## Core finding

A specialist community is simultaneously:

1. a social institution with locally governed norms;
2. a qualitative evidence surface;
3. a trust/reputation system;
4. only conditionally, a distribution surface.

Therefore `community relevance != promotion permission`, and `observed discussion != representative market demand`.

## Authoritative Reddit findings revalidated

Reddit Help currently defines spam around repeated, unwanted and/or unsolicited actions that negatively affect redditors, communities, or Reddit. Promotional content is not inherently spam, but individual communities may prohibit it entirely or set their own limits. Reddit explicitly says community moderators determine what is unwanted/spam within their communities and recommends checking local rules or contacting moderators when uncertain.

Reddit also recommends authentic participation in communities in which the account has genuine interest and warns when contributions mainly link to a business the contributor runs, owns, or benefits from. Repeated irrelevant/link-farmed posting and large-scale unsolicited messaging are examples of problematic behavior.

Operational implication: no company-wide numerical self-promotion ratio is safe to assume. Even Reddit's moderator-facing help mentions that *some* communities use a 10% rule; it explicitly leaves policy to each community. Treat any such ratio as local policy only, never as universal permission.

## Community Permission Ledger

Create one record per community, not per platform.

Required fields:

- `community_id`
- platform
- community name/url
- audience/problem relevance
- observed geography/language where knowable
- rule snapshot date
- rule source
- promotion state: `PROHIBITED | EXPLICITLY_ALLOWED | ALLOWED_WITH_CONDITIONS | AMBIGUOUS | UNKNOWN`
- permitted formats
- prohibited formats
- disclosure requirement
- link restrictions
- flair/post-format requirement
- moderator contact required?
- moderator permission evidence/date
- permission scope: exact post / topic / recurring / other
- expiry/recheck trigger
- last meaningful non-promotional contribution
- goodwill/risk notes
- linked evidence IDs

Do not infer permission from another subreddit/community, from a previous successful post, or from lack of removal.

## Five community action modes

### C0 — Listen
Read/search public discussion to understand vocabulary, recurring jobs, objections, workarounds, and questions. No promotional intervention.

### C1 — Contribute
Answer or discuss because the contribution is useful on its own. Do not force a product mention or link.

### C2 — Research
Ask a genuine research question when local rules permit. Do not disguise customer research as neutral conversation if affiliation materially affects interpretation. Record question wording and sampling limitations.

### C3 — Disclose + mention
Mention the app only where directly relevant and permitted; disclose material affiliation plainly. The contribution should remain useful without requiring the click.

### C4 — Promote
A launch/demo/request-for-feedback post whose distribution purpose is explicit. Use only when local rules or moderator permission support it.

The ladder is not a funnel that every community must climb. A community may remain permanently at C0/C1 and still be strategically valuable.

## Research vs promotion boundary

Classify the *primary purpose and payload*, not the label used by the marketer.

Likely research/contribution:
- question seeks information that can falsify an internal assumption;
- no download/click is required to participate;
- product mention is unnecessary or contextual;
- negative/contrary answers remain useful.

Likely promotion:
- success is primarily clicks, installs, sign-ups, or exposure;
- the post foregrounds product features, launch, screenshots, link, discount, or CTA;
- 'feedback' is effectively a wrapper around distribution;
- repeated posting across adjacent communities uses materially the same promotional payload.

When mixed, treat it as promotional for permission purposes and as research only for evidence that is actually elicited independently of the promotional CTA.

## Disclosure standard

When affiliation is material, disclose it near the first product mention in ordinary language. Do not bury disclosure in profile history or assume community members know the account.

Examples of the *information* that disclosure must convey (not mandatory wording): creator/developer/team affiliation and whether the link/app is one's own.

Disclosure does not create permission. A fully disclosed prohibited promotional post remains prohibited.

## Qualitative Evidence Capture

Community evidence should enter the Live Evidence Registry as qualitative observations, not fabricated frequencies.

Capture:
- exact problem/theme;
- user vocabulary;
- context/workflow;
- workaround/current alternative;
- stated consequence or frustration;
- counterexample/disagreement;
- source/community/date;
- whether prompted or naturally occurring;
- whether the company participated;
- selection/search method;
- evidence limitations.

Recommended evidence states:
- `NATURALISTIC_OBSERVATION`
- `ELICITED_RESPONSE`
- `MODERATOR_POLICY_EVIDENCE`
- `PROMOTIONAL_RESPONSE`

Do not silently pool these.

## Saturation without fake quantification

Repeated themes can raise confidence that a problem exists, but subreddit comment counts are not prevalence estimates. Avoid claims such as '30% of YieldMax investors struggle with X' unless a defensible sampling design supports them.

Use qualitative recurrence labels only when useful:
- isolated;
- recurring across threads;
- recurring across independent communities/surfaces;
- contradicted/mixed.

Always preserve negative cases. A contradictory pilot or investor workflow may reveal segmentation rather than noise.

## Triangulation rule

Community evidence becomes stronger for a decision when independent surfaces converge:

`natural community language + search/query evidence + Store behavior + product telemetry/interviews`

Convergence supports the mechanism; it does not magically make community samples representative.

## Goodwill as constrained capital

Community goodwill is slow to earn and easy to spend. Therefore optimize for `useful participation per promotional ask`, not post volume.

Do not impose a universal numeric ratio. Instead monitor:
- removals/warnings;
- moderator responses;
- substantive replies vs drive-by clicks;
- whether discussions continue without the company;
- whether members voluntarily mention/share the product;
- repeated objections about self-promotion;
- contribution maintenance burden.

A promotional post with installs but damaged permission can have negative portfolio value because future access to a scarce specialist audience is impaired.

## MintTap application

YieldMax communities can provide unusually rich vocabulary and problem evidence around distributions, ROC, reverse splits, cost basis, tax handling, and tracker shortcomings. These are high-value C0/C1 evidence surfaces even when promotion is prohibited.

Do not infer financial truth from community consensus. Tax, ROC treatment, fund distributions, and product facts require authoritative validation before becoming owned content or product claims.

For the company's own MintTap community, clearly label affiliation/official status and moderate it as a community rather than a captive announcement feed. Reddit's current moderator guidance requires reasonable expectations and warns against mislabeling a brand community as official when it is not professionally affiliated; the inverse implication is that official affiliation should be truthful and clear.

## LogMate application

Pilot communities are valuable for workflow vocabulary, logging pain, migration/import constraints, device/EFB realities, and differences across airline/operator contexts. A response from one airline, jurisdiction, fleet, or role must not be generalized across professional pilots without transfer analysis.

Regulatory/logbook requirements are never established by community consensus. Use community evidence to discover the question; validate the answer against the competent authority or authoritative source.

## Permission-led execution gate

Before C3/C4:

1. fetch/re-read current community rules;
2. check Permission Ledger state;
3. classify the post's real purpose;
4. confirm required disclosure/flair/link format;
5. if ambiguous and material, ask moderators rather than infer permission;
6. record the permission basis;
7. publish only within that scope;
8. record removal/warning/mod response as evidence;
9. recheck after rule changes or before materially different promotion.

## Anti-patterns

- 'It stayed up, therefore it is allowed.'
- universal 90/10 self-promotion folklore.
- mass cross-posting the same launch copy.
- unsolicited DM acquisition.
- manufacturing neutral-looking questions whose purpose is app exposure.
- treating upvotes as market-size evidence.
- using community claims as financial/regulatory facts.
- deleting contradictory qualitative observations from the research record.
- measuring community success only by installs.

## Decision metrics

Community operations should be judged on four dimensions:

1. **Evidence value** — did uncertainty about user problem/language/workflow decrease?
2. **Contribution value** — was the interaction useful without requiring product adoption?
3. **Permission/trust health** — did access/goodwill remain intact or improve?
4. **Qualified business effect** — where attribution exists, did relevant users progress toward activation/retention?

No single dimension substitutes for the others.

## Source notes

Authoritative sources revalidated 2026-09-16:

- Reddit Help, `Spam` / avoiding spam: sitewide spam definition, authentic participation, business-link caution, local moderator authority.
- Reddit Help, `How do I keep spam out of my community?`: promotional content not inherently spam; some communities prohibit promotion; some use a 10% rule; local moderators decide.
- Reddit Help, `What's a moderator?`: moderators are unpaid community operators and can set/enforce community rules within Reddit-wide policy.
- Reddit Help, Moderator Code of Conduct Rule 2: communities should set predictable expectations; brand communities must not falsely label themselves official.

These establish platform/community governance boundaries. The evidence-capture, permission-ledger, goodwill-capital, and action-mode frameworks above are company operating synthesis, not claims that Reddit mandates those exact structures.
