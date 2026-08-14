import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";

const researchNotesList = [
  {
    slug: "gradient-synchronization",
    title: "Understanding Gradient Synchronization in DDP",
    date: "2026-07-15",
    excerpt: "Deep dive into how gradient synchronization works in PyTorch Distributed Data Parallel and why it bottlenecks at scale.",
  },
  {
    slug: "multi-agent-systems",
    title: "Building Resilient Multi-Agent Systems",
    date: "2026-06-20",
    excerpt: "Lessons learned from building a team of specialized LLM agents that collaboratively review code.",
  },
  {
    slug: "distributed-training-failures",
    title: "Debugging Distributed Training Failures",
    date: "2026-05-10",
    excerpt: "A practical guide to diagnosing and fixing common failures in distributed ML training pipelines.",
  },
];

export function generateStaticParams() {
  return researchNotesList.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const notes = researchNotesList;
  
  const note = notes.find((entry) => entry.slug === slug);

  if (!note) {
    return { title: "Research Note Not Found" };
  }

  return {
    title: note.title,
    description: note.excerpt,
    openGraph: {
      title: note.title,
      description: note.excerpt,
      type: "article",
      publishedTime: note.date,
      authors: ["Shreyansh Shakya"],
    },
    twitter: {
      card: "summary_large_image",
      title: note.title,
      description: note.excerpt,
    },
  };
}

const researchNotesData = [
  {
    slug: "gradient-synchronization",
    title: "Understanding Gradient Synchronization in DDP",
    date: "2026-07-15",
    excerpt: "Deep dive into how gradient synchronization works in PyTorch Distributed Data Parallel and why it bottlenecks at scale.",
  },
  {
    slug: "multi-agent-systems",
    title: "Building Resilient Multi-Agent Systems",
    date: "2026-06-20",
    excerpt: "Lessons learned from building a team of specialized LLM agents that collaboratively review code.",
  },
  {
    slug: "distributed-training-failures",
    title: "Debugging Distributed Training Failures",
    date: "2026-05-10",
    excerpt: "A practical guide to diagnosing and fixing common failures in distributed ML training pipelines.",
  },
];

export default async function ResearchNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = researchNotesData.find((entry) => entry.slug === slug);

  if (!note) {
    notFound();
  }

  return (
    <article className="container mx-auto px-6 py-24 max-w-4xl">
      <Link href="/research" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors mb-10">
        <ArrowLeft className="w-4 h-4" />
        Back to Research
      </Link>

      <div className="flex items-center gap-2 text-xs text-secondary font-mono mb-4">
        <Calendar className="w-3 h-3" />
        {note.date}
      </div>

      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
        {note.title}
      </h1>

      <p className="text-secondary text-lg leading-relaxed mb-10 max-w-3xl">
        {note.excerpt}
      </p>

      <div className="prose prose-invert max-w-none">
        <p className="text-secondary">
          This research note is a placeholder. Full content will be added here.
        </p>
      </div>
    </article>
  );
}