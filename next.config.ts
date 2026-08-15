import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  allowedDevOrigins: ["172.25.211.229"],
};

const withMDX = createMDX({
  options: {
    // Turbopack requires plugin names to be serializable strings.
    // remark-gfm enables Markdown tables, task lists, strikethrough, etc.
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
