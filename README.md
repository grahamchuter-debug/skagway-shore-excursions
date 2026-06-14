# Skagway Shore Excursions

Premium static website for **skagwayshoreexcursions.com** — Skagway, Alaska cruise shore excursions.

## Stack

- Next.js (App Router, static export)
- Tailwind CSS v4
- Deploy target: Cloudflare Pages

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is written to `out/` — suitable for Cloudflare Pages.

## Cloudflare Pages Deploy

1. Connect this repository in Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `out`
4. Node.js version: 20 or later

## Pages

- Home, Excursions, Port Guide, One Day in Skagway, FAQ
- Category pages: White Pass Railway, Yukon, Dog Sledding, Helicopter, Private, Family-Friendly
- 10 individual tour detail pages with Product/TouristTrip schema
