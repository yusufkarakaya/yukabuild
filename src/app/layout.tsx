import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Fraunces } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

// The serif behind the yukabuild wordmark. Used by the logo and nothing else.
const logoFont = Fraunces({ subsets: ["latin"], weight: "700", variable: "--font-fraunces" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.title}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Light only. Geist Sans carries the page, Geist Mono the eyebrows and the stack row,
    // Fraunces the logo.
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${logoFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
