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

## Publishing the privacy policy

The privacy policy is unpublished until the legal operator / data controller is confirmed. The draft is
in `app/_privacy-draft/` — Next.js does not build folders that start with `_`, so `/privacy/` is not in
`out/`, and `privacyPolicy.published` (in `lib/site.ts`) hides every link to it. Meanwhile the enquiry
forms show an inline "How we use your details" notice.

To publish once the owner has confirmed the entity:

1. In `lib/site.ts`, set `siteConfig.legalOperator` to the confirmed legal name (and any registration
   details the owner provides), and set `privacyPolicy.published` to `true`.
2. `git mv app/_privacy-draft app/privacy`, remove the "UNPUBLISHED DRAFT" comment at the top of the
   page, and update "Last updated".
3. Re-read the policy and the inline notice in `components/EnquiryForm.tsx` against the owner's
   confirmed answers (marketing use, sharing with operators, retention), and keep them consistent.
4. `npm run lint && npm run build`, then check that `out/privacy/index.html` exists, shows no "Draft"
   notice, and that the footer, About page and form link to it. `/privacy/` stays out of the sitemap
   and is noindex; `https-redirect.js` already lists `privacy` in `KNOWN_PAGES`.

## Pages

- Home, Excursions, Port Guide, One Day in Skagway, FAQ
- About, Enquire, Tour Operator Partnerships (Privacy Policy is built only once published, see above)
- Category pages: White Pass Railway, Yukon, Dog Sledding, Helicopter, Private, Family-Friendly
- 10 individual tour detail pages with TouristTrip schema (no Offer, price, or review data)
