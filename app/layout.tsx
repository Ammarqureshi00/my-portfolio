import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const sans = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-sans" });
const serif = Playfair_Display({ subsets: ["latin"], weight: ["500"], style: ["italic"], display: "swap", variable: "--font-serif" });

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
  themeColor: "#07060d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
