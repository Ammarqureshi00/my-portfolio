import Image from "next/image";
import { SITE, PROJECTS } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="w hg">
        <div>
          <span className="pill rv">Full-Stack Web Developer</span>
          <h1 className="rv">I build the web <em>behind</em> the experience.</h1>
          <p className="sub rv">{SITE.description}</p>
          <div className="cta rv">
            <a className="btn g" href="#work">View Selected Work</a>
            <a className="btn" href="#contact">Let&apos;s Work Together</a>
          </div>
          <div className="stats rv">
            <div><strong>{PROJECTS.length}</strong>Selected projects</div><hr />
            <div><strong>2</strong>Platforms mastered<br />WordPress · Shopify</div><hr />
            <div><strong>Full</strong>Stack, end to end</div>
          </div>
          <p className="av rv">Available for freelance projects / remote opportunities</p>
        </div>
        <div className="pt rv">
          <Image src="/ammar-qureshi.jpg" width={760} height={708} priority sizes="(max-width:768px) 340px, 460px" quality={80}
            alt="Portrait of Ammar Qureshi, full-stack web developer, in glasses and a black sweater, arms crossed, against a dark studio background" />
          <div className="glass tag">WordPress · Shopify</div>
          <div className="glass fc">
            I&apos;m <em>Ammar Qureshi</em>, a developer who builds fast, conversion-focused websites — from the interface people see to the systems behind it.<br />
            <a className="btn p" href="#work">View Projects →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
