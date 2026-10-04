"use client";
import { useState } from "react";
import { CONTACT, SOCIALS } from "@/lib/social";
import Icon from "@/components/Icon";
import { track } from "@/lib/analytics";

const TYPES = ["WordPress website", "Shopify storefront", "Frontend / React", "Backend / API", "Performance & SEO", "Automation", "Something else"];

export default function Contact() {
  const [status, setStatus] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const d = new FormData(f);
    const name = String(d.get("name") || ""), email = String(d.get("email") || ""), type = String(d.get("type") || ""), message = String(d.get("message") || "");
    if (!name || !f.email.validity.valid || !message) return setStatus("Please complete name, a valid email and message.");
    track("generate_lead", { form_name: "contact", project_type: type, page_path: window.location.pathname });
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`${type} — ${name}`)}&body=${encodeURIComponent(`${message}\n\n${name} (${email})`)}`;
    setStatus("Opening your email app…");
  }

  return (
    <section id="contact" aria-labelledby="contact-h">
      <div className="w">
        <div className="glass ct">
          <div>
            <span className="pill">Contact</span>
            <h2 id="contact-h">Have a project <em>in mind?</em></h2>
            <p className="lead">Whether you need a custom WordPress website, Shopify storefront, modern frontend experience or technical optimization, let&apos;s talk.</p>
            <div className="ch">
              {SOCIALS.map((c) => (
                <a key={c.key} href={c.href} {...(c.external ? { target: "_blank", rel: "noopener" } : {})}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}><Icon name={c.key} />{c.label}</span><span>{c.text}</span>
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={onSubmit} noValidate>
            <label>Name<input name="name" autoComplete="name" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required /></label>
            <label>Project type<select name="type">{TYPES.map((t) => <option key={t}>{t}</option>)}</select></label>
            <label>Message<textarea name="message" required /></label>
            <button className="btn g" style={{ justifySelf: "start" }} type="submit">Send Message</button>
            <p id="fs" role="status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
