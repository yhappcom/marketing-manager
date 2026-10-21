# MintTap D5 — iOS language metadata versus release configuration (2026-10-21)

## Production evidence (read-only)
- Public Apple App Store MintTap page (Australia and Slovenia variants, retrieved 2026-10-21) displays **Languages: English** and advertises "multi-language support." Public Store metadata is not App Store Connect source data.
- Released product tag `yhappcom/yieldmax_tracker@1.0.29` has `lib/localization/app_locale.dart` declaring **11 selectable locale options**: en, ko, ja, zh-TW, zh-CN, es, fr, ar, de, pt, vi. `lib/main.dart` passes `kSupportedLocales` to MaterialApp and resolves device locale. `ios/Runner/Info.plist` includes the corresponding 11 `CFBundleLocalizations` strings.
- These are **different observed metadata/configuration states**, not proof that shipped App Store binary is monolingual, that every translated string is complete, or that Apple misclassified the app. Public Store language metadata may reflect build/archive localization packaging, App Store processing or a different shipped binary; none is established here.

## Decision
**D5 Store-language metadata reconciliation OPEN** (D1 financial declaration and D2 revenue gates retain higher priority). No change to public language claim is authorized from this evidence alone.

## Next production evidence
Obtain exact App Store Connect 1.0.29 build metadata, archived IPA localization inspection, actual in-app language switching on iOS, and screenshot/localization inventory; reconcile whether the English-only App Store language field is expected. If multilingual in-app support works but Store lists English, decide whether an iOS build metadata correction is warranted. Do not promise full localization without screen-level checks.

## Sources
- https://apps.apple.com/au/app/minttap/id6766008739
- https://apps.apple.com/si/app/minttap/id6766008739
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/lib/localization/app_locale.dart
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/lib/main.dart
- https://github.com/yhappcom/yieldmax_tracker/blob/1.0.29/ios/Runner/Info.plist
