import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { POSTS, SERVICE_PAGES } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = POSTS.map((p) => p.updated).sort().pop()!;
  const at = (d: string) => new Date(d + "T00:00:00Z");
  return [
    { url: SITE.url, lastModified: at(latest), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/services`, lastModified: at(latest), changeFrequency: "monthly", priority: 0.9 },
    ...SERVICE_PAGES.map((s) => ({ url: `${SITE.url}/services/${s.slug}`, lastModified: at(latest), changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${SITE.url}/blog`, lastModified: at(latest), changeFrequency: "weekly", priority: 0.8 },
    ...POSTS.map((p) => ({ url: `${SITE.url}/blog/${p.slug}`, lastModified: at(p.updated), changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${SITE.url}/work/nextjs-portfolio-seo`, lastModified: at(latest), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/privacy-policy`, lastModified: at("2026-10-04"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/terms`, lastModified: at("2026-10-04"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/hire`, lastModified: at(latest), changeFrequency: "yearly", priority: 0.8 },
  ];
}
