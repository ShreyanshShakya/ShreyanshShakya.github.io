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
            Open to AI/ML Engineering & Research Internships
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight mb-4 leading-[1.1]">
            AI & Machine Learning Engineer
          </h1>

          <p className="max-w-3xl text-base md:text-lg text-secondary leading-relaxed mb-10">
            I build practical machine learning and deep-learning applications, including predictive models, medical image segmentation, and speech emotion recognition. My work focuses on Python, model evaluation, and turning experiments into useful applications.
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
              Resume
              <Download className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex items-center gap-5 mt-10 text-secondary">
            <a href={social.email} aria-label="Email" className="hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
              <LinkIcon className="w-5 h-5" />
            </a>
            <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground transition-colors">
              <Code2 className="w-5 h-5" />
            </a>
            <a href="#technical-focus" aria-label="Technical focus" className="hover:text-foreground transition-colors">
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
