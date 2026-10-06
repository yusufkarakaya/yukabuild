import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Fraunces } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

// The serif for headings and the YukaBuild wordmark. Loaded as the variable
// font so headings can sit at 600 and the wordmark at 700.
const headingFont = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

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
  themeColor: "#101828",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Dark only, so the `dark` class is always on. Geist Sans carries the page,
    // Geist Mono the labels and chips, Fraunces the headings and the logo.
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable} ${headingFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
