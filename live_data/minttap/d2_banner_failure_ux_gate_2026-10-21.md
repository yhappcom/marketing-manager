# D2 banner failure UX gate — 2026-10-21

Release tag `yhappcom/yieldmax_tracker@1.0.29`: fixed-bottom ad load failure displays an error region of height 52 logical pixels, whereas Home inline failure collapses. The fixed-bottom widget does not schedule another attempt until recreation. These are code observations, not device results. Test ad-only failure and recovery checks remain required; D2 PRESSURE HOLD unchanged.
