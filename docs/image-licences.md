# Image licences

Register of every photo shipped in `public/`. Retrieved and checked 9 October 2026.
Attribution for CC BY images is shown in the **Photo credits** section at the bottom of
`/about/` (`components/PhotoCredits.tsx`, data in `lib/photo-credits.ts`). Keep that data and
this file in sync when images change.

Tours with no verified photo use the branded placeholder panel in `components/TourImage.tsx`.

## 1. White Pass & Yukon Route train (homepage hero)

| | |
|---|---|
| File | `public/hero-white-pass-railway.webp` (2048×1365, ~335 KB) |
| Used on | Homepage hero (`app/page.tsx`), White Pass highlight on homepage (`components/HighlightSections.tsx`), White Pass Summit Rail and Bus tour card and tour page (`lib/tours.ts`) |
| Title | White Pass & Yukon Railroad - Skagway - Alaska (13 of 19) |
| Source | https://commons.wikimedia.org/wiki/File:White_Pass_%26_Yukon_Railroad_-_Skagway_-_Alaska_(13_of_19)_(41768425985).jpg |
| Original | https://www.flickr.com/photos/tipsfortravellers/41768425985/ (taken 30 May 2018) |
| Author | Gary Bembridge (Flickr "Tips For Travellers") |
| Licence | CC BY 2.0 — https://creativecommons.org/licenses/by/2.0/ |
| Licence verification | Commons FlickreviewR **passed** (2019-12-07); Flickr page archived at https://web.archive.org/web/20200813210311/https://www.flickr.com/photos/8327374@N02/41768425985 |
| Attribution required | **Yes.** Displayed text: *"White Pass & Yukon Railroad - Skagway - Alaska (13 of 19)" by Gary Bembridge, licensed under CC BY 2.0; resized and converted to WebP.* (title links to source, author to Flickr profile, licence to deed) |
| Modifications | Resized from 5472×3648 to 2048 px wide, converted to WebP (q68), metadata stripped. No crop (the site's CSS `object-cover` crops visually at display time). |
| Caveats | WP&YR livery and name are White Pass & Yukon Route trademarks. Showing the train in a photo is fine, but nothing on the site should suggest WP&YR endorses or partners with us. The credits section includes a no-endorsement line. No identifiable people. |

## 2. Broadway, Skagway (Skagway City and White Pass Summit tour)

| | |
|---|---|
| File | `public/tours/skagway-city-and-white-pass-summit.webp` (1600×1071, ~195 KB) |
| Used on | Skagway City and White Pass Summit tour card and tour page (`lib/tours.ts`) |
| Title | Downtown Skagway |
| Source | https://commons.wikimedia.org/wiki/File:Downtown_Skagway_-_panoramio.jpg |
| Original | Panoramio photo 16683532 (taken 27 May 2008), archived at https://web.archive.org/web/20161013033626/http://www.panoramio.com/photo/16683532 |
| Author | pcwiles (Panoramio user 1185566) |
| Licence | CC BY 3.0 — https://creativecommons.org/licenses/by/3.0/ |
| Licence verification | Commons Panoramioreview **passed** (2016-09-13) |
| Attribution required | **Yes.** Displayed text: *"Downtown Skagway" by pcwiles, licensed under CC BY 3.0; resized and converted to WebP.* |
| Modifications | Resized from 3872×2592 to 1600 px wide, converted to WebP (q74), metadata stripped. No crop. |
| Caveats | Shows Broadway with the Golden North Hotel dome and the Klondike Gold Rush NHP visitor centre sign. Tourists are visible at street level as incidental figures, not the main subject. Store signs are incidental. |

## 3. "Yukon — Larger than Life" welcome sign (Yukon Rail and Bus Adventure)

| | |
|---|---|
| File | `public/tours/yukon-rail-and-bus-adventure.webp` (1600×1070, ~195 KB) |
| Used on | Yukon Rail and Bus Adventure tour card and tour page (`lib/tours.ts`), Yukon highlight on homepage (`components/HighlightSections.tsx`) |
| Title | Entering the Yukon Territory of Canada |
| Source | https://commons.wikimedia.org/wiki/File:Entering_the_Yukon_Territory_of_Canada.jpg |
| Original | https://www.flickr.com/photos/14963903@N06/2634496613/ ("2008 Alaska Cruise 093", taken 26 June 2008) |
| Author | Richard Martin |
| Licence | CC BY 2.0 — https://creativecommons.org/licenses/by/2.0/ |
| Licence verification | Commons flickrreview by File Upload Bot (Magnus Manske), 4 July 2008 |
| Attribution required | **Yes.** Displayed text: *"Entering the Yukon Territory of Canada" by Richard Martin, licensed under CC BY 2.0; resized and converted to WebP.* |
| Modifications | Resized from 2896×1936 to 1600 px wide, converted to WebP (q74), metadata stripped. No crop. |
| Caveats | The exact location isn't stated on the file page. The photographer's same-day photos are of Carcross and Bennett Lake, and the South Klondike Highway is the only road from Skagway into the Yukon, so this is very likely the Klondike Highway border sign the tour passes. The sign design and "Larger than Life" slogan belong to the Government of Yukon's tourism branding. A photo of a public roadside sign is fine, but don't imply endorsement. No people. |

## Removed images (must not ship)

Removed from `public/` on 9 October 2026 because their origin and rights couldn't be verified
(two were crops of macOS screenshots of third-party images):

| Removed file | What it showed | Replaced by |
|---|---|---|
| `public/hero-white-pass-railway.png` (1024×676) | WP&YR train on a trestle by a tunnel | `public/hero-white-pass-railway.webp` |
| `public/tours/skagway-city-and-white-pass-summit.png` (1024×673) | Broadway with the Golden North Hotel and a Princess ship | `public/tours/skagway-city-and-white-pass-summit.webp` |
| `public/tours/yukon-rail-and-bus-adventure.png` (1024×678) | "Yukon — Larger than Life" road sign | `public/tours/yukon-rail-and-bus-adventure.webp` |

They remain in git history (commit `707754d` and earlier), but they're no longer in `public/` or `out/`.

## Alternatives

Licensed alternatives for each slot are staged outside the repo in
`~/Desktop/Alaska World 2.0/skagway-image-candidates/` (see its README). If you swap one in, update
`lib/photo-credits.ts` and this file. CC BY-SA images also require ShareAlike: if the image is
adapted (cropped, edited), the adapted image must be offered under the same licence.
