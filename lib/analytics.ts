export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
/** Only a well-formed container id is ever injected into the page. */
export const hasGtm = /^GTM-[A-Z0-9]+$/.test(GTM_ID);

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Push a custom event to the GTM dataLayer. Safe to call when GTM isn't installed. Never send personal data. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  (window.dataLayer = window.dataLayer || []).push({ event, ...params });
}
