# 157 — Google Play category and tag discovery

Validated: 2026-09-21

## New finding
Google Play category and tags are a zero-cost discovery surface, but Google defines them as classification metadata rather than free-form ASO keywords. Google says categories and tags help users search for and discover relevant apps, allows at most five tags, requires tags to be obviously relevant from the store listing or initial app experience, and recommends changing them only after significant content or functionality changes.

Primary source: https://support.google.com/googleplay/android-developer/answer/9859673

Google's published category examples explicitly place portfolio/trading in Finance. That gives MintTap a strong documented Finance fit, subject to confirming its actual current Play Console state. The same documentation exposes accessibility tags including Screen reader-friendly, Visual assistance, Hearing assistance, Learning disability, Motor assistance, and Accessible communication. These should be treated as capability claims, not reach-maximizing keywords.

Google's store-listing guidance also says app type and category should represent the app's primary purpose and warns against improper categorization or misleading descriptions.

Primary source: https://support.google.com/googleplay/android-developer/answer/13393723

Google states that curated Play Console peer groups are generated using review-team tagging systems that also power the Play Store experience. Peer data is aggregated across at least 100 apps. This supports treating classification as part of Store context, while not treating peer benchmarks as proof that a developer-selected tag caused a ranking or conversion change.

Primary source: https://support.google.com/googleplay/android-developer/answer/10771707

## BU0–BU5 Classification and Tag Integrity Gate

BU0 — Record the live app type, category, selected tags, release/version and observation date before analysis.

BU1 — The category must represent the app's actual primary purpose. Do not choose an adjacent category merely to seek more traffic.

BU2 — Every selected tag must be plainly defensible from the listing or initial app experience. Five is a maximum, not a target.

BU3 — Accessibility or other capability-signaling tags require product evidence. Planned support or isolated screens are insufficient.

BU4 — Do not rotate tags as pseudo-keywords. Re-evaluate only after meaningful product change, taxonomy change, or evidence that the current classification is wrong.

BU5 — Observe discovery, conversion and peer context after legitimate changes, but do not claim a tag caused ranking movement without platform evidence. Classification is not proof of product-market fit or domain correctness.

## MintTap
Confirm the live category and tags. Finance is the strongest documented category fit because Google explicitly includes portfolio/trading. Audit every selected tag as obvious, secondary-but-defensible, or unsupported. Accessibility tags inherit release-level accessibility validation. Include category/tag state in Store evidence snapshots so CSL and Store experiment results are not compared across an unnoticed classification change.

## LogMate
Choose the launch category from the shipping product's primary purpose and first-run experience. A professional pilot audience alone does not establish whether Travel, Business, Productivity, Tools, or another category is correct. Use the current Play taxonomy and actual release behavior rather than presumed category traffic.

## Reusable rule
actual primary purpose → truthful category → no more than five obviously relevant tags → capability proof for special tags → stable classification → observed downstream value

Classification is infrastructure, not a recurring campaign.

## Open evidence
- MintTap live Google Play category and selected tags.
- Which accessibility tags are actually supported by the MintTap release.
- LogMate release-qualified category and tag set.
