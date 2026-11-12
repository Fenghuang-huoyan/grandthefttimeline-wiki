# Grand Theft Timeline Guide

Unofficial English fan guide for [Grand Theft Timeline](https://store.steampowered.com/app/4928450/Grand_Theft_Timeline/) (Steam AppID **4928450**), aimed at **grandthefttimeline.wiki**.

Not affiliated with REAL PLAYERS, Rockstar Games, Valve, or Steam. The site does not sell the game or recover accounts. On 12 November 2026 the Steam listing was still coming soon, with the date 19 November 2026.

## Build

```bash
npm install
npm run dev      # http://localhost:4329
npm run build
npm run preview  # http://localhost:4329
```

Node 22. The build is a static Astro site (`dist/`). `astro.config.mjs` sets `site` to `https://grandthefttimeline.wiki`.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/grandthefttimeline/site.config.ts` | Domain, Steam AppID, theme, nav |
| Ads | `sites/grandthefttimeline/ads.config.ts` | Ad slot left empty for this domain |
| Active site | `sites/active` → `grandthefttimeline` | What the build reads |
| Framework | `framework/` | Layout, SEO, ad slot |
| Content | `content/grandthefttimeline/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is empty, so the base layout does not load Google Analytics. The Adsterra Native Banner slot stays disabled until this domain has its own zone. See [ADS.md](ADS.md).

Steam art lives in `public/images/official/steam/` with `ATTRIBUTION.txt`. This repository does not buy a domain, edit DNS, or deploy. Vercel can serve the static `dist/` output.

## Pages

- `/` — release and what the store says the game is
- `/guide` — time-travel heist overview
- `/worlds` — the worlds claim and screenshot labels
- `/progression` — paradox, the arena, and the garage
- `/coop` — co-op tips from the store text
- `/about`, `/privacy`, `/disclaimer`, and the 404 — site policy
