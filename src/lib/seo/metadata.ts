import type { Metadata } from "next";

export const SITE_URL = "https://guadalajaraitinerary.com";
export const SITE_NAME = "Guadalajara Itinerary";

interface GuideMetaProps {
  title: string;
  description: string;
  slug: string;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateGuideMetadata({
  title,
  description,
  slug,
  keywords = [],
  publishedTime,
  modifiedTime,
}: GuideMetaProps): Metadata {
  const url = `${SITE_URL}/${slug}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "article",
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
