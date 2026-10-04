/** Single source of truth for contact + social links. Env vars can override the defaults. */
export const CONTACT = {
  email: process.env.NEXT_PUBLIC_EMAIL || "ammar.techmail@gmail.com",
  phoneDisplay: "+92 329 7727245",
  phoneTel: "+923297727245",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "https://wa.me/923297727245",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/in/ammarqureshi099/",
  github: process.env.NEXT_PUBLIC_GITHUB || "https://github.com/Ammarqureshi00",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/ez.scripts/",
};

export type Social = { key: string; label: string; href: string; text: string; external: boolean };

export const SOCIALS: Social[] = [
  { key: "mail", label: "Email", href: `mailto:${CONTACT.email}`, text: CONTACT.email, external: false },
  { key: "whatsapp", label: "WhatsApp", href: CONTACT.whatsapp, text: CONTACT.phoneDisplay, external: true },
  { key: "phone", label: "Phone", href: `tel:${CONTACT.phoneTel}`, text: CONTACT.phoneDisplay, external: false },
  { key: "linkedin", label: "LinkedIn", href: CONTACT.linkedin, text: "ammarqureshi099", external: true },
  { key: "github", label: "GitHub", href: CONTACT.github, text: "Ammarqureshi00", external: true },
  { key: "instagram", label: "Instagram", href: CONTACT.instagram, text: "@ez.scripts", external: true },
].filter((s) => s.href && !/^mailto:$/.test(s.href));

export const SAME_AS = [CONTACT.linkedin, CONTACT.github, CONTACT.instagram].filter(Boolean);
