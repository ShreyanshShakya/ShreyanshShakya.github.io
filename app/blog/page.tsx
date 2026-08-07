import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogIndexPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Blog
        </h1>
        <p className="text-secondary text-lg leading-relaxed">
          Technical notes, implementation write-ups, and research reflections in MDX.
        </p>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-xl border border-border bg-card p-8 transition-colors hover:border-accent/30">
            <div className="flex items-center gap-2 text-xs text-secondary font-mono mb-3">
              <Calendar className="w-3 h-3" />
              {post.date} · {post.readTime}
            </div>
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="text-secondary leading-relaxed mb-5 max-w-2xl">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-border text-xs font-mono text-secondary">
                  {tag}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-accent text-sm font-medium">
              Read post
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}