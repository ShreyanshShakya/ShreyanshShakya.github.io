import { MetadataRoute } from "next";

const siteUrl = "https://shreyanshshakya.github.io";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/projects",
        "/projects/",
        "/research",
        "/research/",
        "/blog",
        "/blog/",
        "/resume",
        "/resume.pdf",
      ],
      disallow: [
        "/api/",
        "/_next/",
        "/static/",
        "/*.json$",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}