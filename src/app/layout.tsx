import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chapman Digital - AI Consulting & Digital Transformation",
  description: "Empowering organizations to modernize through AI, intelligent front-end design, and streamlined digital experiences.",
  keywords: ["AI consulting", "digital transformation", "front-end modernization", "enterprise software"],
  authors: [{ name: "Chapman Digital" }],
  openGraph: {
    title: "Chapman Digital - AI Consulting & Digital Transformation",
    description: "Empowering organizations to modernize through AI, intelligent front-end design, and streamlined digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chapman Digital - AI Consulting & Digital Transformation",
    description: "Empowering organizations to modernize through AI, intelligent front-end design, and streamlined digital experiences.",
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
