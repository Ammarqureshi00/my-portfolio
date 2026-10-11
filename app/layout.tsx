import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const sans = localFont({
  src: [
    { path: "./fonts/Satoshi-400.woff2", weight: "400" },
    { path: "./fonts/Satoshi-500.woff2", weight: "500" },
    { path: "./fonts/Satoshi-700.woff2", weight: "700" },
  ],
  display: "swap",
  variable: "--font-sans",
});
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], display: "swap", variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  applicationName: `${SITE.name} Portfolio`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: `${SITE.name} — Portfolio`,
    title: SITE.title,
    description: SITE.description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
};

const themeInitScript = `(()=>{let saved;try{saved=localStorage.getItem("portfolio-theme")}catch{}const theme=saved==="light"||saved==="dark"?saved:matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;document.querySelector('meta[name="theme-color"]')?.setAttribute("content",theme==="light"?"#F5F7FA":"#101318")})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#101318" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
