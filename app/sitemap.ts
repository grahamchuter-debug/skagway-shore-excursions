import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { tours } from "@/lib/tours";
import { categoryLinks } from "@/lib/site";

const staticPages = [
  "",
  "excursions/",
  "port-guide/",
  "one-day-in-skagway/",
  "faq/",
  ...categoryLinks.map((c) => c.href.replace(/^\//, "")),
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${siteConfig.url}/${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "excursions/" ? 0.9 : 0.8,
  }));

  const tourEntries: MetadataRoute.Sitemap = tours.map((tour) => ({
    url: `${siteConfig.url}/tours/${tour.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...tourEntries];
}
