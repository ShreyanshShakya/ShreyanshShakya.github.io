"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { ArrowDown, Code2, Link as LinkIcon, Mail, ExternalLink, Download } from "lucide-react";
import Link from "next/link";
import { social } from "@/data/social";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-mono text-secondary mb-8">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.7)]" />
            Open to AI Engineering & Research Internships
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight mb-4 leading-[1.1]">
            AI Engineer & ML Systems Builder
          </h1>

          <p className="max-w-3xl text-base md:text-lg text-secondary leading-relaxed mb-10">
            I build distributed ML infrastructure, agentic AI systems, and research-driven machine learning applications.
            Experienced with PyTorch Distributed, LLM orchestration, cloud platforms, and scalable software engineering for real-world AI workloads.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link
              href="/#projects"
              className="flex-1 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm text-center"
            >
              View Projects
            </Link>
            <Link
              href={social.github}
              target="_blank"
              className="flex-1 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-colors text-sm inline-flex items-center justify-center gap-2"
            >
              GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/resume"
              className="flex-1 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-colors text-sm inline-flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-6 text-secondary">
            <Link
              href={social.github}
              target="_blank"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 transition-colors hover:text-foreground hover:border-accent/40"
            >
              <Code2 className="h-4 w-4" />
            </Link>
            <Link
              href={social.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 transition-colors hover:text-foreground hover:border-accent/40"
            >
              <LinkIcon className="h-4 w-4" />
            </Link>
            <Link
              href={`mailto:${social.email}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 transition-colors hover:text-foreground hover:border-accent/40"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-10 max-w-4xl">
            {[
              { value: "0.8256", label: "Best validation Dice" },
              { value: "90 GB", label: "Largest dataset processed" },
              { value: "2+", label: "Distributed nodes validated" },
              { value: "1", label: "IEEE publication" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card/70 p-4 sm:p-5 backdrop-blur-sm"
              >
                <p className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-secondary leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-sm text-secondary uppercase tracking-widest font-mono">
          Selected Engineering Projects
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-secondary w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}