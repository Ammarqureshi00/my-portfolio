import Link from "next/link";
import { SOCIALS } from "@/lib/social";
import { SERVICE_PAGES } from "@/lib/content";
import { hasGtm } from "@/lib/analytics";
import Icon from "@/components/Icon";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import "@/app/extras.css";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="w">
        <div className="ft-grid">
          <div className="ft-brand">
            <div className="logo"><b>A</b>AMMAR QURESHI</div>
            <p>Full Stack WordPress Developer. I build blogs, WooCommerce stores and Next.js sites, and fix the plugin and theme problems that slow them down.</p>
            {/* <ul className="ft-social" aria-label="Social links">
              {SOCIALS.filter((s) => ["linkedin", "github", "instagram", "whatsapp"].includes(s.key)).map((s) => (
                <li key={s.key}><a href={s.href} target="_blank" rel="me noopener" aria-label={s.label}><Icon name={s.key} /></a></li>
              ))}
            </ul> */}
          </div>
          <nav aria-labelledby="ft-s"><h2 id="ft-s" className="ft-h">Services</h2>
            <ul>{SERVICE_PAGES.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>)}</ul></nav>
          <nav aria-labelledby="ft-r"><h2 id="ft-r" className="ft-h">Explore</h2>
            <ul>
              <li><Link href="/#work">Work</Link></li>
              <li><Link href="/work/nextjs-portfolio-seo">Case study</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/hire">Hire me</Link></li>
            </ul></nav>
          <div><h2 className="ft-h">Get in touch</h2>
            <ul className="ft-contact">
              {SOCIALS.filter((s) => ["mail", "whatsapp", "linkedin", "github", "instagram"].includes(s.key)).map((s) => (
                <li key={s.key}><a href={s.href} {...(s.external ? { target: "_blank", rel: "me noopener" } : {})}><Icon name={s.key} /><span><b>{s.label}</b>{s.text}</span></a></li>
              ))}
            </ul></div>
        </div>
        <div className="ft-bottom">
          <p>© {new Date().getFullYear()} Ammar Qureshi. All rights reserved.</p>
          <ul>
            <li><Link href="/privacy-policy">Privacy policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            {hasGtm && <li><CookieSettingsButton /></li>}
          </ul>
        </div>
      </div>
    </footer>
  );
}
