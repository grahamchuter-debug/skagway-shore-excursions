export const siteConfig = {
  name: "Skagway Shore Excursions",
  domain: "skagwayshoreexcursions.com",
  url: "https://skagwayshoreexcursions.com",
  port: "Skagway, Alaska",
  tagline: "White Pass Railway, Yukon scenery & Gold Rush adventure",
  description:
    "Premium Skagway shore excursions for cruise passengers. White Pass Railway tours, Yukon day trips, glacier helicopters, dog sledding, and family-friendly Alaska adventures with clear return-to-ship guidance.",
  email: "info@skagwayshoreexcursions.com",
  phone: "+1 (907) 555-0142",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/excursions/", label: "Excursions" },
  { href: "/port-guide/", label: "Port Guide" },
  { href: "/one-day-in-skagway/", label: "One Day in Skagway" },
  { href: "/faq/", label: "FAQ" },
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
    label: "Private Tours",
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
} as const;

export type CruiseConfidence = "High Cruise Confidence" | "Medium Cruise Confidence" | "Plan Carefully";

export type ActivityLevel = "Easy" | "Moderate" | "Difficult";
