import Script from "next/script";
import { GTM_ID, hasGtm } from "@/lib/analytics";
import ClickTracker from "@/components/ClickTracker";
import ConsentBanner from "@/components/ConsentBanner";

/** Put <GtmNoScript /> right after <body> and <Analytics /> at the end of <body>. Renders nothing without a valid NEXT_PUBLIC_GTM_ID. */
export function GtmNoScript() {
  if (!hasGtm) return null;
  return (
    <noscript>
      <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager" />
    </noscript>
  );
}

// Consent Mode v2: everything is denied by default, and only restored if the visitor accepted earlier.
const CONSENT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});try{if(localStorage.getItem('consent:v1')==='granted'){gtag('consent','update',{analytics_storage:'granted'});}}catch(e){}`;

export default function Analytics() {
  if (!hasGtm) return null;
  return (
    <>
      <Script id="gtm" strategy="afterInteractive">
        {`${CONSENT}(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <ClickTracker />
      <ConsentBanner />
    </>
  );
}
