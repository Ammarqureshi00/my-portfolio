import { SITE, PROJECTS, SERVICES } from "@/lib/site";
import { CONTACT, SAME_AS } from "@/lib/social";

export default function JsonLd() {
  const sameAs = SAME_AS;
  const graph = [
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: `${SITE.name} — Portfolio`,
      description: SITE.description,
      inLanguage: "en",
      publisher: { "@id": `${SITE.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: SITE.name,
      url: SITE.url,
      image: `${SITE.url}/ammar-qureshi.jpg`,
      jobTitle: SITE.jobTitle,
      email: `mailto:${CONTACT.email}`,
      telephone: CONTACT.phoneTel,
      description: SITE.description,
      knowsAbout: ["WordPress", "Shopify", "Liquid", "WooCommerce", "Elementor", "React", "JavaScript", "PHP", "Laravel", "Node.js", "Express.js", "Technical SEO", "Core Web Vitals", "Workflow automation"],
      ...(sameAs.length ? { sameAs } : {}),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#service`,
      name: `${SITE.name} — Web Development`,
      url: SITE.url,
      provider: { "@id": `${SITE.url}/#person` },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: SERVICES.map(([name, description]) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description },
        })),
      },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE.url}/#work`,
      name: "Selected Work",
      itemListElement: PROJECTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "CreativeWork", name: p.name, url: p.url, description: p.description, image: `${SITE.url}${p.image}`, creator: { "@id": `${SITE.url}/#person` } },
      })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") }}
    />
  );
}
