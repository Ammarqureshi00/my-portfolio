import { contactLinks } from "@/lib/site";

export default function Footer() {
  const social = contactLinks.filter((s) => /LinkedIn|GitHub/.test(s.label));
  return (
    <footer>
      <div className="w">
        <div className="fg">
          <div>
            <div className="logo"><b>A</b>AMMAR QURESHI</div>
            <p>Full-Stack Web Developer</p>
            <p>WordPress • Shopify • React • Laravel • Node.js</p>
          </div>
          <nav className="fl" aria-label="Footer">
            <a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a>
            {social.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener me">{s.label}</a>)}
          </nav>
        </div>
        <p className="cp">© {new Date().getFullYear()} Ammar Qureshi. All rights reserved.</p>
      </div>
    </footer>
  );
}
