import { POSTS } from "@/lib/content";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const items = [...POSTS].sort((a, b) => b.date.localeCompare(a.date)).map((p) =>
    `<item><title>${esc(p.title)}</title><link>${SITE.url}/blog/${p.slug}</link><guid>${SITE.url}/blog/${p.slug}</guid><pubDate>${new Date(p.date).toUTCString()}</pubDate><description>${esc(p.description)}</description></item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(SITE.name)} — WordPress Blog</title><link>${SITE.url}/blog</link><description>${esc(SITE.description)}</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
