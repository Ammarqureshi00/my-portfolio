import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="w hg">
        <div>
          <span className="pill rv">Full-Stack Web Developer</span>
          <h1 className="rv">I build the web <em>behind</em> the experience.</h1>
          <p className="sub rv">{SITE.description}</p>
          <div className="hero-trust rv">
            <div>
              <span className="availability">Available for freelance and remote work</span>
              {SITE.responseTime && <p className="response-time">Typical response time: {SITE.responseTime}</p>}
            </div>
            <div className="hero-actions">
              <a className="btn g" href="/hire">Hire me</a>
              <a className="btn" href={SITE.whatsapp} target="_blank" rel="noopener">WhatsApp</a>
              {SITE.resumeUrl && <a className="btn" href={SITE.resumeUrl} target="_blank" rel="noopener" data-track="resume_download">Download résumé</a>}
            </div>
          </div>
        </div>
        <div className="pt rv">
          <Image src="/ammar-qureshi.jpg" width={760} height={708} priority sizes="(max-width:768px) 340px, 460px" quality={95}
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
