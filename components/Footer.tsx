import Link from "next/link";
import { contactLinks } from "@/lib/site";
import { SERVICE_PAGES } from "@/lib/content";

export default function Footer() {
  const social = contactLinks.filter((s) => /LinkedIn|GitHub/.test(s.label));
  return (
    <footer>
      <div className="w">
        <div className="fg">
          <div>
            <div className="logo"><b>A</b>AMMAR QURESHI</div>
            <p>Full Stack WordPress Developer</p>
            <p>WordPress • WooCommerce • Shopify • React • Laravel</p>
          </div>
          <nav className="fl" aria-label="Footer">
            <Link href="/#work">Work</Link>
            {SERVICE_PAGES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>)}
            <Link href="/blog">Blog</Link><Link href="/hire">Hire me</Link>
            {social.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener me">{s.label}</a>)}
          </nav>
        </div>
        <p className="cp">© {new Date().getFullYear()} Ammar Qureshi. All rights reserved.</p>
      </div>
    </footer>
  );
}
