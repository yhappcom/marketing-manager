# 151 — Google Play Custom Store Listings as Zero-Cost Intent Routing

Validated: 2026-09-20

## Why this is new

Apple CPP governance in research 150 established intent-routed Store surfaces on iOS. Google Play now supports an overlapping but materially different zero-cost mechanism: Custom Store Listings (CSLs) can target Play Search keywords, unique URLs, geography, lifecycle/user segments, custom audiences, pre-registration, and ads traffic. This must not be modeled as an Android clone of Apple CPP.

## Primary-source findings

Google Play Console Help currently documents up to 50 CSL pages. A CSL may customize app name, icon, descriptions, and graphic assets. Contact details, privacy policy, and category remain shared.

Search-keyword targeting lets the publisher choose Play Search keywords that lead users to a specific CSL. Play exposes known traffic-producing keywords and keyword bundles/variations; publishers can include or exclude spelling corrections and translations. Google also offers Gemini-generated descriptions based on the published default listing plus selected search terms. Generated text remains publisher-reviewed evidence, not a claim authority.

A CSL can also be reached through a unique `listing` URL parameter. This creates a zero-cost routing primitive for owned blog, permitted community posts, social profiles/posts, support/education pages, QR/other owned surfaces, subject to the venue's link rules and the company's attribution contract.

Google additionally supports lifecycle/audience targeting including churned users, users lapsed for 28 days, churned+lapsed users, non-buyers, one-time buyers, repeat buyers, lapsed buyers, custom audiences, countries/regions, pre-registration and ads traffic. This makes CSL both an acquisition and re-entry surface; those jobs must not be pooled in one conversion interpretation.

CSLs do not receive automatic translations. The publisher must supply translations; otherwise users can receive the CSL default language. This is a material trust/conversion risk for niche professional audiences and makes localization coverage part of routing integrity rather than cosmetic optimization.

Google I/O 2026 further shortened the workflow from search evidence to CSL creation: the Grow overview can surface keyword recommendations and Gemini can generate a keyword-tailored CSL. Automation reduces production cost but does not establish demand, separability, truthful proof, or statistical sufficiency.

## BO0–BO5 — Google Play Intent/Audience Store Routing Gate

### BO0 — Demand/source identity
Record why the listing exists: Play Search keyword evidence, owned/community URL route, country, lifecycle segment, custom audience, pre-registration, or ads. Do not create CSLs merely because capacity exists.

### BO1 — Intent/audience separability
The proposed listing must represent a materially different user question, lifecycle state, geography/language need, or audience expectation that warrants different proof. Near-duplicate ticker pages or cosmetic variants fail.

### BO2 — Claim and proof integrity
Name, descriptions, screenshots, icon and graphics must truthfully prove the routed promise. Consequential financial claims inherit BE provenance. AI-generated descriptions receive the same substantiation review as human copy.

### BO3 — Routing/localization integrity
Verify the actual targeting mode, unique URL parameter where applicable, country overlap constraints, keyword bundle/variations, and translations. Do not assume a custom listing is automatically localized. Preserve source/route identity for attribution where possible.

### BO4 — Evidence semantics and sparse-sample discipline
Keep Search-keyword, unique-URL, country, lifecycle/custom-audience and paid-ad traffic analytically distinct. A higher CSL conversion rate is not sufficient evidence if audience composition changed or volume is sparse. Platform recommendation is a hypothesis source, not proof of incremental acquisition.

### BO5 — Downstream value
Promote a CSL only when routed users reach the promised first value and useful/repeated value without degrading trust or core workflow. For re-entry CSLs, measure restored core value rather than treating a return visit/reinstall as equivalent to new-user acquisition.

## MintTap application

Initial hypotheses remain hypotheses, not approved listings:

- distribution/cash-flow tracking intent;
- ROC/reverse-split accounting intent;
- portfolio/transaction tracking intent.

A CSL is justified only when Play keyword evidence or attributable external demand shows separability and the Store proof can materially differ. Do not proliferate TSLY/CONY/MSTY pages simply because each ticker can generate a keyword. Financial/tax language inherits BE.

Unique-URL CSLs are potentially useful for permitted Reddit/blog/social routes because the destination can preserve message match without paid media. The external venue's permission/disclosure rules remain upstream gates; a CSL URL does not create permission to promote.

For Korean/English or other market-specific traffic, translation coverage must be explicit. A specialized financial page shown in an unintended default language is a routing failure.

## LogMate reuse

Potential separable pilot intents include import/migration, multi-leg logging, period totals, and offline/PWA workflows, but no CSL should be created until actual pilot search/community evidence exists. Aviation/regulatory claims require their own authority chain; Store conversion is not regulatory validation.

## Company-wide operational rule

Apple CPP (BN) and Google Play CSL (BO) share the principle `evidenced intent → matched proof → qualified downstream value`, but their platform mechanics must remain separate. Google Play CSL additionally spans lifecycle/custom audiences and explicit unique-URL routing. Do not merge platform metrics or infer feature parity.

## Sources

- Google Play Console Help, “Create custom store listings to target specific user segments,” accessed 2026-09-20: https://support.google.com/googleplay/android-developer/answer/9867158?hl=en
- Android Developers Blog, “I/O 2026: What's new in Google Play,” May 2026: https://android-developers.googleblog.com/2026/05/io-2026-whats-new-in-google-play.html

## Next evidence work

1. Audit MintTap Play Console CSL inventory, targeting modes, keyword bundles, URL parameters, translations and performance when console evidence is available.
2. Compare actual Play Search keyword evidence against the three MintTap hypotheses before creating any CSL.
3. Define first/useful/repeated value once and reuse it for BO downstream validation, BL rating eligibility and BF ad guardrails.
4. Keep lifecycle CSLs separate from acquisition CSLs in the Store registry and reporting.