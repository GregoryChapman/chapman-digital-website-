import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chapman Digital Services — Modern websites for creators and small businesses",
  description: "Modern websites for creators and small businesses. Live in weeks, not months. Fixed scope, fixed price, professional quality at small-business prices.",
  keywords: ["creator website", "personal brand site", "small business website", "web developer", "Toronto web developer"],
  authors: [{ name: "Chapman Digital Services" }],
  openGraph: {
    title: "Chapman Digital Services — Modern websites for creators and small businesses",
    description: "Modern websites for creators and small businesses. Live in weeks, not months. Fixed scope, fixed price, professional quality at small-business prices.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chapman Digital Services — Modern websites for creators and small businesses",
    description: "Modern websites for creators and small businesses. Live in weeks, not months. Fixed scope, fixed price, professional quality at small-business prices.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
