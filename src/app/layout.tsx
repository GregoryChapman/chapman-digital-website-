import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chapman Digital Services — Creator sites & AI for small business",
  description: "Modern websites and AI solutions for creators and small businesses. Fast, professional builds powered by AI — without the agency price tag.",
  keywords: ["creator website", "personal brand site", "AI for small business", "workflow automation", "small business website", "AI tools"],
  authors: [{ name: "Chapman Digital Services" }],
  openGraph: {
    title: "Chapman Digital Services — Creator sites & AI for small business",
    description: "Modern websites and AI solutions for creators and small businesses. Fast, professional builds powered by AI — without the agency price tag.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chapman Digital Services — Creator sites & AI for small business",
    description: "Modern websites and AI solutions for creators and small businesses. Fast, professional builds powered by AI — without the agency price tag.",
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
      </body>
    </html>
  );
}
