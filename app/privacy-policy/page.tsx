import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Schema from "@/components/Schema";
import { CONTACT } from "@/lib/social";
import { buildMetadata, crumbsSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | Ammar Qureshi",
  description: "How this portfolio handles your data: contact messages, Google Analytics through Tag Manager (only with consent), cookies and your rights.",
  path: "/privacy-policy",
});

const UPDATED = "October 4, 2026";

export default function Privacy() {
  const crumbs: [string, string][] = [["Home", "/"], ["Privacy policy", "/privacy-policy"]];
  return (
    <PageShell>
      <Schema data={[crumbsSchema(crumbs)]} />
      <section className="ph"><div className="w nar">
        <Breadcrumbs items={crumbs} />
        <h1>Privacy <em>policy</em></h1>
        <p className="lead">Last updated: {UPDATED}. This is a personal portfolio website. This page explains what data it handles and why.</p>
      </div></section>
      <section style={{ paddingTop: 0 }}><div className="w nar prose">
        <h2>Who is responsible</h2>
        <p>This website is run by Ammar Qureshi. For anything about your data, email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>
        <h2>What this site handles</h2>
        <ul>
          <li><strong>Contact messages.</strong> The contact form opens your own email app with a pre-filled message. Nothing you type is stored on this website’s server. If you email or message me, I receive what you send and use it only to reply and to work with you.</li>
          <li><strong>Analytics, only with your consent.</strong> If you press Accept, the site uses Google Analytics 4, loaded through Google Tag Manager, to count page views and see which pages and buttons are used. This can include approximate location, device and browser information. Google Analytics 4 does not log or store IP addresses. Analytics does not run until you accept.</li>
          <li><strong>Your cookie choice.</strong> Your Accept or Decline choice is saved in your browser’s local storage so that you aren’t asked on every page. You can change it any time with “Cookie settings” in the footer.</li>
          <li><strong>Hosting logs.</strong> The hosting provider may keep standard server logs (for example IP address and time of request) for security and operation.</li>
        </ul>
        <h2>Advertising</h2>
        <p>This site does not currently show advertising. If that changes, this policy will be updated and consent will be requested where the law requires it.</p>
        <h2>Third parties</h2>
        <p>Google provides Analytics and Tag Manager. Links to other websites and social networks (LinkedIn, GitHub, Instagram, WhatsApp) lead to services with their own privacy policies.</p>
        <h2>Your rights</h2>
        <p>Depending on where you live, you can ask to access, correct or delete personal data I hold about you, and you can withdraw your analytics consent at any time. Email me and I’ll respond as soon as I can.</p>
        <h2>Children</h2>
        <p>This website is not aimed at children, and I don’t knowingly collect their data.</p>
        <h2>Changes</h2>
        <p>If this policy changes, the date at the top will be updated.</p>
      </div></section>
    </PageShell>
  );
}
