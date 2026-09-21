# 163 — Store developer website as support, trust, and ad-supply infrastructure

Validated: 2026-09-21

## Why this matters
For an ad-supported niche-app business, the Store-linked developer website is not merely a marketing landing page. It is simultaneously a user-support/trust endpoint and part of the technical identity chain used by app-ads.txt to authorize advertising inventory. A stale, incorrect, or operationally unsuitable Store website can therefore affect support quality and ad-supply verification even when the app itself is functioning correctly.

## Authoritative findings

### Apple
Apple App Store Connect defines a required, localizable Support URL. It must point to a support website with actual contact information as required by local law so users can reach the developer about app issues, feedback, and feature requests. Apple separately provides an optional, localizable Marketing URL for more information about the app.

Apple also requires a Privacy Policy URL for all apps and requires App Privacy answers to remain accurate and current, including relevant third-party partner practices.

### Google Play
Google Play requires a support email in Store listing contact details; phone number and website can also be provided and appear on the app's Play listing. Google recommends additional support paths such as a monitored website/forum, FAQ/help content, and clear support expectations.

### AdMob / app-ads.txt
Google AdMob explicitly uses the developer website linked from the app-store listing to establish app ownership for app-ads.txt. For Google Play, the developer website must be in the app's Store listing contact details; for Apple App Store, AdMob instructs developers to put the developer website in Apple's Marketing URL field. The app-ads.txt file is then discovered from that website hostname, normally at `/app-ads.txt` under the derived host. The full app-ads.txt URL should not be placed in the Store listing.

AdMob documents crawler rules for subdomains and redirects. Store metadata propagation is not instantaneous: Google says to allow up to 24 hours after adding/updating the developer website in Google Play before AdMob detects the change; AdMob verification itself can also take up to 24 hours. Google Ad Manager documentation states Apple App Store developer-website changes can take up to 7 days to be detected for app-ads.txt purposes.

## Strategic interpretation
1. `Store website present` is not equivalent to `support usable`, `app-ads.txt reachable`, `app-ads.txt verified`, or `ad revenue healthy`.
2. The website field should not be optimized solely as a conversion link. For an ad-funded app it is part of monetization infrastructure.
3. Support URL, Marketing/developer website, Privacy Policy URL, and app-ads.txt have different contracts. They may share a domain, but their functions and evidence states must remain separate.
4. Changing a Store website or domain is an infrastructure change. It can create a temporary verification lag and must be audited before/after release rather than treated as harmless copy editing.
5. A vanity redirect is acceptable only if the resulting host/crawler path remains valid under the documented app-ads.txt rules. Browser success alone is not sufficient evidence of verified ad-supply identity.
6. For MintTap and future LogMate monetization, domain ownership, Store metadata, root-level app-ads.txt reachability, authorized seller records, AdMob verification status, and support reachability should be reconciled as one release checklist without collapsing them into one metric.

## CA0–CA5 Store Website / Ad-Supply Identity Gate
- **CA0 — Live Store identity:** capture platform, territory/locale, version, Support URL, Marketing/developer website, privacy URL, and effective public Store state.
- **CA1 — Support integrity:** required contact route works, monitored support destination exists, and localized expectations do not overpromise service.
- **CA2 — Domain/control integrity:** developer controls the effective domain/host and HTTPS/DNS/redirect behavior is intentional.
- **CA3 — app-ads.txt integrity:** expected crawler-derived `/app-ads.txt` path is reachable and contains current authorized advertising-system records; do not infer verification from browser reachability alone.
- **CA4 — Platform verification:** preserve AdMob/app-ads.txt verification status and observation timestamp; respect documented propagation/crawl delays after Store/domain changes.
- **CA5 — Revenue/support outcome:** separately monitor support failures, ad-request/fill/impression/revenue evidence, and verification incidents. Never claim app-ads.txt caused a revenue change without reconciliation evidence.

## Product application
### MintTap
Audit the live iOS Marketing URL and Support URL, Android Store listing website/support email, effective hostname, root app-ads.txt, and AdMob verification state. Because MintTap depends on advertising revenue, this is higher priority than creating additional promotional surfaces. Preserve the Home-ad-free decision; app-ads.txt integrity concerns supply authorization, not placement aggressiveness.

### LogMate
Before monetized launch, establish the Store-linked developer domain and support path early enough to validate crawler behavior. Do not wait until release day to discover that Store metadata, domain routing, or app-ads.txt ownership cannot reconcile.

### Future niche apps
Reuse one controlled company-domain architecture where practical, but maintain app-level Store identity and verification records. Shared infrastructure does not justify copying unsupported support, privacy, or advertising declarations across apps.

## Evidence boundaries
- app-ads.txt verification authorizes/declares advertising-system relationships; it does not prove fill, eCPM, impressions, incremental revenue, or product quality.
- Store support/contact metadata can improve operational trust but is not evidence of conversion lift unless measured.
- Platform-required identity/contact information is compliance infrastructure, not promotional copy.

## Sources
- Apple, App Store Connect Help — Platform version information: https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information
- Apple, App Store Connect Help — Manage app privacy: https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy
- Google Play Console Help — How to support your app's users: https://support.google.com/googleplay/android-developer/answer/113477
- Google Play Console Help — View and manage developer account information: https://support.google.com/googleplay/android-developer/answer/13634081
- Google AdMob Help — Set up an app-ads.txt file for your app: https://support.google.com/admob/answer/9363762
- Google AdMob Help — Resolve issues with app-ads.txt: https://support.google.com/admob/answer/9776740
- Google Ad Manager Help — Create ads.txt/app-ads.txt: https://support.google.com/admanager/answer/7544382
