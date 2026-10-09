export const siteConfig = {
  name: "Skagway Shore Excursions",
  domain: "skagwayshoreexcursions.com",
  url: "https://skagwayshoreexcursions.com",
  port: "Skagway, Alaska",
  tagline: "White Pass Railway, Yukon scenery & Gold Rush adventure",
  description:
    "Skagway shore excursions for cruise passengers from Wow A Tour — White Pass Railway, Yukon day trips, and Gold Rush adventures with clear return-to-ship planning guidance.",
  email: "hello@skagwayshoreexcursions.com",
  parentBrand: "Wow A Tour",
  /**
   * Legal operator and data controller, as registered at Companies House (company 11426960).
   * Not My Holidays On-Line (UK) Limited, which is a separate company.
   */
  legalOperator: {
    name: "Wow A Tour Limited",
    companyNumber: "11426960",
    registeredIn: "England and Wales",
    registeredOffice: "Kintyre House, 70 High Street, Fareham, Hampshire, PO16 7BB, United Kingdom",
  },
} as const;

/** Published privacy policy (app/privacy). Kept noindex and out of the sitemap. */
export const privacyPolicy = {
  published: true,
  path: "/privacy/",
} as const;

export const enquiryConfig = {
  /** Site identifier registered in the shared wowatour-enquiries service. */
  siteId: "skagway",
  endpoint:
    process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT ??
    "https://wowatour-enquiries.dark-violet-8d91.workers.dev/v1/enquiries",
  /** Public Cloudflare Turnstile site key; when empty the form relies on the honeypot and fill-time checks. */
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/excursions/", label: "Excursions" },
  { href: "/port-guide/", label: "Port Guide" },
  { href: "/one-day-in-skagway/", label: "One Day in Skagway" },
  { href: "/faq/", label: "FAQ" },
  { href: "/about/", label: "About" },
] as const;

export const categoryLinks = [
  {
    href: "/white-pass-railway-tours/",
    label: "White Pass Railway",
    description: "Historic narrow-gauge rail to the summit",
  },
  {
    href: "/yukon-tours-from-skagway/",
    label: "Yukon Tours",
    description: "Cross into Canada for alpine lakes & wilderness",
  },
  {
    href: "/skagway-dog-sledding-tours/",
    label: "Dog Sledding",
    description: "Meet mushers & ride with Alaskan huskies",
  },
  {
    href: "/helicopter-glacier-tours/",
    label: "Helicopter & Glacier",
    description: "Flightseeing over Skagway's ice fields",
  },
  {
    href: "/private-skagway-tours/",
    label: "Private & Self-Drive",
    description: "Custom pacing for your group",
  },
  {
    href: "/family-friendly-skagway-excursions/",
    label: "Family-Friendly",
    description: "Easy adventures for all ages",
  },
] as const;

export const cta = {
  viewExcursions: "View Skagway Shore Excursions",
  planPortDay: "Plan Your Skagway Port Day",
  compareTours: "Compare Skagway Tours",
  checkOptions: "Check Tour Options",
  exploreExcursions: "Explore Shore Excursions",
  enquire: "Enquire About a Tour",
  enquireTour: "Enquire About This Tour",
  enquireNow: "Enquire Now",
  viewTour: "View Tour",
} as const;

export function enquireHref(tourSlug?: string): string {
  return tourSlug ? `/enquire/?tour=${encodeURIComponent(tourSlug)}` : "/enquire/";
}

export type CruiseConfidence = "High Cruise Confidence" | "Medium Cruise Confidence" | "Plan Carefully";

export type ActivityLevel = "Easy" | "Moderate" | "Difficult";
