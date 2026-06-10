import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Sixram Technologies & Studio",
    template: "%s | Sixram"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Sixram",
    "Sixram Technologies",
    "Marxis Cabero",
    "software development",
    "automation",
    "business systems",
    "AI-assisted solutions",
    "Next.js",
    "Vercel"
  ],
  openGraph: {
    title: "Sixram Technologies & Studio",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sixram Technologies & Studio",
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
