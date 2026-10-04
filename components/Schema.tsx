import { SITE } from "@/lib/site";

/** Outputs a JSON-LD @graph. The Person node is included so every page resolves the `#person` @id on its own. */
export default function Schema({ data }: { data: object | object[] }) {
  const person = { "@type": "Person", "@id": `${SITE.url}/#person`, name: SITE.name, url: SITE.url, jobTitle: SITE.jobTitle };
  const graph = [...(Array.isArray(data) ? data : [data]), person];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") }}
    />
  );
}
