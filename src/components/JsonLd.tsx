'use client';

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WENS",
    "url": "https://wens.sk",
    "telephone": "+421902917898",
    "email": "info@wens.sk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "971 01",
      "addressCountry": "SK"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
