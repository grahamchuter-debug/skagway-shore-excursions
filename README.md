# Skagway Shore Excursions

Premium static website for **skagwayshoreexcursions.com** — Skagway, Alaska cruise shore excursions.

## Stack

- Next.js (App Router, static export)
- Tailwind CSS v4
- Hosting: Cloudflare Worker `skagway-shore-excursions` serving `out/` as static assets on the
  `skagwayshoreexcursions.com/*` route (see `wrangler.jsonc`). `https-redirect.js` runs first to handle
  http→https, trailing slashes, real 404s, and blocking source paths — add new top-level pages to its
  `KNOWN_PAGES`.
- `www.skagwayshoreexcursions.com` → apex is a separate redirect Worker (`Alaska World 2.0/www-redirects`).

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

Static output is written to `out/`.

## Deploy

Deploys are manual — pushing to GitHub does not deploy:

```bash
npm run deploy   # next build + wrangler deploy
```

## Enquiry form

`/enquire/` and `/partners/` post to the shared Wow A Tour enquiry service (`wowatour-enquiries`) as site
`skagway`. The site must be registered in that service before the form will work. Build-time settings
(public values only, no secrets):

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile site key. If unset, the form renders without
  Turnstile and relies on the honeypot field and minimum fill time.
- `NEXT_PUBLIC_ENQUIRY_ENDPOINT` — override the enquiry endpoint, e.g. a local mock for testing.
  Never set it for a production build.

## Privacy policy

The privacy policy is published at `/privacy/` (`app/privacy/page.tsx`). The data controller is
Wow A Tour Limited (company 11426960), set in `siteConfig.legalOperator` in `lib/site.ts` and verified
on Companies House in October 2026. The footer, About page and enquiry form link to it; it is noindex
and not in the sitemap, and `https-redirect.js` lists `privacy` in `KNOWN_PAGES`.

When the way enquiries are handled changes (retention, processors, sharing, Turnstile), update the policy,
its "Last updated" line and the inline "How we use your details" notice in
`components/EnquiryForm.tsx` together. To take the policy offline again, set `privacyPolicy.published`
to `false` (hides every link) and rename the folder to `app/_privacy-draft` (Next.js does not build
folders that start with `_`).

## Pages

- Home, Excursions, Port Guide, One Day in Skagway, FAQ
- About, Enquire, Tour Operator Partnerships (Privacy Policy is built only once published, see above)
- Category pages: White Pass Railway, Yukon, Dog Sledding, Helicopter, Private, Family-Friendly
- 10 individual tour detail pages with TouristTrip schema (no Offer, price, or review data)
