# 159 — Native attribution failure modes and Install Referrer boundary

Validated: 2026-09-21

## Finding
Research 158 established native Store-link attribution. This addition defines where that evidence can silently change meaning or disappear.

Apple App Store Connect distinguishes App Referrer, Web Referrer and Campaign. A web referrer is the website that led a user to the App Store product page; when Safari follows a redirect chain, Apple attributes the last URL in that chain. For iOS, links opened from non-Safari browsers such as Chrome are attributed as that browser app rather than as a web referrer. Campaign data has a separate visibility rule: campaigns appear only after more than one day and at least five App Units are attributed. Therefore a missing minttap.app/Reddit web-referrer row is not evidence that the source produced no traffic, and redirect/browser architecture can change the reported source without changing the human marketing source.

Google Play Acquisition reporting also has explicit coverage boundaries. Tracked channels (UTM) are users who visit the Store Listing in the Play Store app from a UTM-tagged link; Third-party referrers are users arriving from an untagged deep link. Google states that over-the-air and play.google.com web impressions are not tracked on the Acquisition reports page. Separately, the Play Install Referrer API can securely return the installed package's referrer URL, referrer-click timestamp, install-begin timestamp, install-time app version and recent Instant-experience flag. Referrer information is available for 90 days and does not change unless the app is reinstalled; Google recommends retrieving it once on the first execution after install.

Authoritative sources (accessed 2026-09-21):
- Apple App Store Connect Help, Acquisition
- Apple App Store Connect Help, App analytics filters and dimensions
- Google Play Console Help, Measure your app's acquisition and retention
- Android Developers, Google Play Install Referrer / Install Referrer Library

## Operating principle
Do not normalize attribution before preserving the platform-native observation and the route mechanics that produced it.

Canonical chain:
`human source → click surface/browser → redirects → Store destination → platform attribution class → install-referrer evidence where available → acquisition → product value`

A difference between two layers can be instrumentation semantics, not a marketing contradiction.

## BW0–BW5 Attribution Route Integrity Gate

### BW0 — Human-source identity
Preserve the intended human source/content ID independently of what Apple or Google later reports. Reddit post, blog article, owned page and social post are marketing-source identities; browser/referrer classes are measurement observations.

### BW1 — Route capture
For each deliberate CTA preserve final Store URL, CPP/CSL destination, campaign/UTM identifiers and whether an owned redirect/shortener/interstitial exists. Do not introduce redirects solely to beautify links when they reduce source interpretability or conflict with community rules.

### BW2 — Native semantics
Store raw Apple Source Type/App Referrer/Web Referrer/Campaign and Google traffic-source/UTM/referrer fields before cross-platform normalization. On iOS, a Chrome-originating website click may surface as Chrome App Referrer rather than the website. In Safari redirect chains, the last URL can become Apple's web referrer.

### BW3 — Coverage and suppression
Apple campaign absence before >1 day and >=5 attributed App Units is not zero. Google Acquisition reporting excludes over-the-air and play.google.com web impressions. Missing rows, suppressed rows and unsupported surfaces remain `not observable at this layer`, never reconstructed as zero.

### BW4 — Install boundary
For Android, evaluate Play Install Referrer as a first-install provenance input where product engineering can support it without unnecessary third-party SDK complexity. Capture once on first execution, preserve raw referrer/timestamps/install version, and treat the 90-day availability/reinstall semantics as technical boundaries. It is not a substitute for Play Console aggregate acquisition reporting.

### BW5 — Reconciliation and downstream value
Compare human-source registry, Store-native aggregate evidence and install-time provenance only under explicit identity/time-window rules. Investigate mismatches before reallocating effort. A reconciled install still must reach first/restored and repeated useful value before a source is considered productive.

## MintTap
The first live attribution inventory must record whether minttap.app, Reddit/blog/social links pass through redirects or browser-dependent paths. Do not conclude that a community source is ineffective merely because Apple reports Chrome/Facebook/etc. as App Referrer or because a campaign row is suppressed. On Android, inspect whether Install Referrer is already implemented before adding code; if absent, treat implementation as an engineering decision, not an automatic marketing requirement.

## LogMate
Build route identity into launch infrastructure before pilot-community content scales. Pilot communities are especially sparse, so losing provenance to redirects or browser semantics can create false channel conclusions from very small samples.

## Reusable launch rule
Maintain three distinct columns in the company-wide attribution registry: `declared_human_source`, `platform_observed_source`, and `route_mechanics`. Never overwrite one with another. Add install-time provenance only when the platform exposes it and the product can collect it with a justified data contract.

## Non-claims
Referrer evidence does not prove incrementality. Install Referrer does not identify all marketing influence. Browser/referrer disagreement does not by itself indicate fraud or tracking failure. Missing Store rows do not imply zero activity.

## Next validation
Audit MintTap's actual outbound-link redirect/browser path and Android codebase for existing Play Install Referrer support; then reconcile live Apple App Referrer/Web Referrer/Campaign and Google UTM/referrer evidence without retroactively inventing provenance.