/**
 * Real client testimonials only. The section stays hidden while this array is empty
 * (in development you'll see a dashed placeholder so you know where it goes).
 *
 * Rules (also required by Google's policies on deceptive content):
 *  - Only add quotes a real client gave you, with their permission.
 *  - Don't edit the meaning of a quote. Trim, don't rewrite.
 *  - If it came from LinkedIn, Upwork, Fiverr etc., put the link in `url` as proof.
 *
 * Example entry:
 *  { quote: "Fixed our checkout in a day and explained what went wrong.",
 *    name: "Jane Doe", role: "Founder", company: "Example Store",
 *    source: "LinkedIn recommendation", url: "https://www.linkedin.com/...", date: "2026-10-01" }
 */
export type Testimonial = { quote: string; name: string; role: string; company?: string; source?: string; url?: string; date?: string };

export const TESTIMONIALS: Testimonial[] = [];
