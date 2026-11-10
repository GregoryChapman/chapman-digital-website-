import type { Metadata } from "next";

export const site = {
  name: "Chapman Digital Services",
  url: "https://chapmandigitalservices.com",
  tagline: "Modern websites for creators and small businesses.",
  description:
    "Modern websites for creators and small businesses. Live in weeks, not months. Fixed scope, fixed price, professional quality at small-business prices.",
  locale: "en_CA",
} as const;

/** The generated default share image (src/app/opengraph-image.tsx). */
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Chapman Digital Services: modern websites for creators and small businesses",
};

type PageMeta = {
  /** Page name, rendered through the "%s | Chapman Digital Services" template. */
  title: string;
  description: string;
  /** Path from the site root, e.g. "/about". */
  path: string;
};

/** Unique title, description, canonical, Open Graph and Twitter tags for one page. */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage.url],
    },
  };
}
