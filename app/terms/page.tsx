import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Schema from "@/components/Schema";
import { CONTACT } from "@/lib/social";
import { buildMetadata, crumbsSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Use | Ammar Qureshi",
  description: "Terms of use for this portfolio and blog: informational content, no warranty, third-party links, intellectual property and how to contact me.",
  path: "/terms",
});

export default function Terms() {
  const crumbs: [string, string][] = [["Home", "/"], ["Terms", "/terms"]];
  return (
    <PageShell>
      <Schema data={[crumbsSchema(crumbs)]} />
      <section className="ph"><div className="w nar">
        <Breadcrumbs items={crumbs} />
        <h1>Terms of <em>use</em></h1>
        <p className="lead">Last updated: October 4, 2026. By using this website you agree to these terms.</p>
      </div></section>
      <section style={{ paddingTop: 0 }}><div className="w nar prose">
        <h2>Informational content</h2>
        <p>Articles and guides are shared for general information. I test what I publish, but every website, server and plugin setup is different. Back up your site and test changes on a staging copy before you apply anything from this site.</p>
        <h2>No warranty</h2>
        <p>The content and code examples are provided as they are, without warranties. I’m not liable for losses that result from using them, to the extent the law allows.</p>
        <h2>Services</h2>
        <p>Descriptions of services are not a binding offer. Paid work is agreed separately, in writing, before it starts.</p>
        <h2>Intellectual property</h2>
        <p>Unless stated otherwise, the text, design and code of this website belong to Ammar Qureshi. Please don’t republish articles in full without permission. Project names, logos and screenshots of client or third-party sites belong to their owners and are shown to illustrate my work.</p>
        <h2>Links to other websites</h2>
        <p>This site links to websites I don’t control. I’m not responsible for their content or practices.</p>
        <h2>Changes</h2>
        <p>I may update these terms, and the date above will change when I do.</p>
        <h2>Contact</h2>
        <p>Questions about these terms: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>
      </div></section>
    </PageShell>
  );
}
