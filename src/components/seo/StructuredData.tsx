interface BreadcrumbItem {
  name: string;
  href: string;
}

interface StructuredDataProps {
  breadcrumbs?: BreadcrumbItem[];
  article?: {
    headline: string;
    description: string;
    datePublished: string;
    dateModified: string;
    url: string;
  };
}

export function StructuredData({ breadcrumbs, article }: StructuredDataProps) {
  const schemas = [];

  if (breadcrumbs) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `https://guadalajaraitinerary.com${item.href}`,
      })),
    });
  }

  if (article) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.headline,
      description: article.description,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      url: article.url,
      author: {
        "@type": "Organization",
        name: "Guadalajara Itinerary Team",
        url: "https://guadalajaraitinerary.com/about",
      },
      publisher: {
        "@type": "Organization",
        name: "Guadalajara Itinerary",
        url: "https://guadalajaraitinerary.com",
        sameAs: [
          "https://itine.ai",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@guadalajaraitinerary.com",
          contactType: "editorial",
        },
      },
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
