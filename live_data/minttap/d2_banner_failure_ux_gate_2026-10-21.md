# D2 banner failure UX gate — 2026-10-21

Release tag `yhappcom/yieldmax_tracker@1.0.29`: fixed-bottom ad load failure renders a 52-logical-pixel inner error box inside 10 logical pixels of top padding (62 logical pixels total widget layout height), whereas Home inline failure collapses. The fixed-bottom widget does not schedule another attempt until recreation. These are code observations, not device results. Test ad-only failure and recovery checks remain required; D2 PRESSURE HOLD unchanged.
