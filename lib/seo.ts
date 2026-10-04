import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export function buildMetadata(o: { title: string; description: string; path: string; type?: "website" | "article"; noOgImage?: boolean; published?: string; modified?: string }): Metadata {
  return {
    title: { absolute: o.title },
    description: o.description,
    alternates: { canonical: o.path },
    openGraph: {
      type: o.type || "website",
      url: `${SITE.url}${o.path}`,
      title: o.title,
      description: o.description,
      siteName: `${SITE.name} — Portfolio`,
      ...(o.published ? { publishedTime: o.published, modifiedTime: o.modified, authors: [SITE.name] } : {}),
      ...(o.noOgImage ? {} : { images: [{ url: "/opengraph-image", width: 1200, height: 630 }] }),
    },
    twitter: { card: "summary_large_image", title: o.title, description: o.description },
  };
}

export const crumbsSchema = (items: [string, string][]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: `${SITE.url}${path}` })),
});
