import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const siteUrl = "https://shreyanshshakya.github.io";

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${siteUrl}/og-image.png`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const PostContent = post.component;

  const siteUrl = "https://shreyanshshakya.github.io";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Shreyansh Shakya",
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Shreyansh Shakya",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema, null, 2) }}
      />
      <article className="container mx-auto px-6 py-24 max-w-4xl">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors mb-10">
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      <div className="flex items-center gap-2 text-xs text-secondary font-mono mb-4">
        <Calendar className="w-3 h-3" />
        {post.date} · {post.readTime}
      </div>

      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
        {post.title}
      </h1>

      <p className="text-secondary text-lg leading-relaxed mb-10 max-w-3xl">
        {post.excerpt}
      </p>

      <div className="prose prose-invert max-w-none">
        <PostContent />
      </div>
    </article>
    </>
  );
}