import { site } from "@/lib/site";

/**
 * JSON-LD for the business and the website. Only facts that are true and
 * public: no street address, no phone number, no invented ratings.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      description: site.description,
      logo: `${site.url}/images/chapman-digital-logo.png`,
      image: `${site.url}/opengraph-image`,
      email: site.email,
      founder: { "@type": "Person", name: "Gregory Chapman" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montreal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      areaServed: { "@type": "Country", name: "Canada" },
      sameAs: [site.instagram],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      inLanguage: "en-CA",
      publisher: { "@id": `${site.url}/#business` },
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
    />
  );
}
