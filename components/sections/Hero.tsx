"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { ArrowDown, ExternalLink } from "lucide-react";
import Link from "next/link";

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
          {/* Top labels */}
          <div className="flex flex-wrap gap-3 md:gap-6 text-sm text-secondary font-mono mb-8">
            <span>Distributed Machine Learning</span>
            <span className="hidden md:inline text-border">·</span>
            <span>Agentic AI</span>
            <span className="hidden md:inline text-border">·</span>
            <span>Research Engineering</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-8 leading-[1.1]">
            Engineering intelligent systems that learn, reason, and scale across
            distributed compute.
          </h1>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/#projects"
              className="px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-colors text-sm"
            >
              Resume
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-colors text-sm inline-flex items-center gap-2"
            >
              GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
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
          Featured Work
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
