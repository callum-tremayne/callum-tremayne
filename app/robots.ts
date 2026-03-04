import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://callumtremayne.co.uk/sitemap.xml",
    host: "https://callumtremayne.co.uk",
  };
}
