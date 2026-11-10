import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Modern websites for creators and small businesses`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: ["creator website", "personal brand site", "small business website", "web developer", "Montreal web developer", "Canada web design"],
  authors: [{ name: "Gregory Chapman" }],
  creator: "Gregory Chapman",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | Modern websites for creators and small businesses`,
    description: site.description,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Modern websites for creators and small businesses`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
