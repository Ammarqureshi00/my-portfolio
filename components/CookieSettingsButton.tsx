"use client";
export default function CookieSettingsButton() {
  return <button type="button" className="ft-link" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>Cookie settings</button>;
}
