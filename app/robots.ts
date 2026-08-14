import { MetadataRoute } from "next";

const siteUrl = "https://shreyanshshakya.github.io";

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
        "/*.xml$",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}