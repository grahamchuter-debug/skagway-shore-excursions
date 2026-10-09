/** Attribution for openly licensed photos. Keep in sync with docs/image-licences.md. */
export interface PhotoCredit {
  file: string;
  usedOn: string;
  title: string;
  sourceUrl: string;
  author: string;
  authorUrl: string;
  licence: string;
  licenceUrl: string;
  changes: string;
}

export const photoCredits: PhotoCredit[] = [
  {
    file: "/hero-white-pass-railway.webp",
    usedOn: "Home page and White Pass Summit Rail and Bus",
    title: "White Pass & Yukon Railroad - Skagway - Alaska (13 of 19)",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:White_Pass_%26_Yukon_Railroad_-_Skagway_-_Alaska_(13_of_19)_(41768425985).jpg",
    author: "Gary Bembridge",
    authorUrl: "https://www.flickr.com/people/8327374@N02",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    changes: "resized and converted to WebP",
  },
  {
    file: "/tours/skagway-city-and-white-pass-summit.webp",
    usedOn: "Skagway City and White Pass Summit",
    title: "Downtown Skagway",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Downtown_Skagway_-_panoramio.jpg",
    author: "pcwiles",
    authorUrl:
      "https://web.archive.org/web/20161013033627/http://www.panoramio.com/user/1185566?with_photo_id=16683532",
    licence: "CC BY 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by/3.0/",
    changes: "resized and converted to WebP",
  },
  {
    file: "/tours/yukon-rail-and-bus-adventure.webp",
    usedOn: "Home page and Yukon Rail and Bus Adventure",
    title: "Entering the Yukon Territory of Canada",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Entering_the_Yukon_Territory_of_Canada.jpg",
    author: "Richard Martin",
    authorUrl: "https://www.flickr.com/people/14963903@N06",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    changes: "resized and converted to WebP",
  },
];
