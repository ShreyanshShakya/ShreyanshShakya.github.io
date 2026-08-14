"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const researchNotes = [
  {
    slug: "gradient-synchronization",
    title: "Understanding Gradient Synchronization in DDP",
    date: "2026-07-15",
    excerpt:
      "Deep dive into how gradient synchronization works in PyTorch Distributed Data Parallel and why it bottlenecks at scale.",
  },
  {
    slug: "multi-agent-systems",
    title: "Building Resilient Multi-Agent Systems",
    date: "2026-06-20",
    excerpt:
      "Lessons learned from building a team of specialized LLM agents that collaboratively review code.",
  },
  {
    slug: "distributed-training-failures",
    title: "Debugging Distributed Training Failures",
    date: "2026-05-10",
    excerpt:
      "A practical guide to diagnosing and fixing common failures in distributed ML training pipelines.",
  },
];

export function ResearchClient() {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Research Notes
        </h1>
        <p className="text-secondary text-lg mb-16 max-w-2xl">
          Technical write-ups on distributed systems, ML infrastructure, and
          lessons from building AI at scale.
        </p>
      </motion.div>

      <div className="space-y-6">
        {researchNotes.map((note, i) => (
          <motion.div
            key={note.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={`/research/${note.slug}`} className="group block">
              <div className="rounded-xl border border-border bg-card p-8 hover:border-accent/30 transition-colors duration-300">
                <div className="flex items-center gap-2 text-xs text-secondary font-mono mb-3">
                  <Calendar className="w-3 h-3" />
                  {note.date}
                </div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {note.title}
                </h2>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  {note.excerpt}
                </p>
                <span className="text-sm text-accent font-medium inline-flex items-center gap-1">
                  Read more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}