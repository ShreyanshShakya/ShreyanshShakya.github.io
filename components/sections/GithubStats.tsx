"use client";

import { motion, useReducedMotion } from "framer-motion";
import { social } from "@/data/social";

const stats = [
  { label: "Major Engineering Projects", value: "6" },
  { label: "Research-Oriented Projects", value: "4" },
  { label: "Distributed Systems Projects", value: "2" },
  { label: "Deep Learning Projects", value: "3" },
  { label: "Multi-Agent Systems", value: "2" },
  { label: "Medical AI Projects", value: "1" },
  { label: "Speech AI Projects", value: "1" },
  { label: "Large-Scale Data Projects", value: "1" },
  { label: "Historical Weather Dataset", value: "90 GB" },
  { label: "Cities Modeled", value: "4,300+" },
  { label: "Weather Records Span", value: "10 Years" },
  { label: "Published Research Papers", value: "1" },
  { label: "Research Domains", value: "5+" },
  { label: "Engineering Case Studies", value: "6" },
  { label: "Programming Languages", value: "5+" },
  { label: "ML Frameworks", value: "5+" },
  { label: "Distributed Technologies", value: "5+" },
];

export function GithubStats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="github" className="py-20 sm:py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="text-sm text-secondary uppercase tracking-widest font-mono mb-12 sm:mb-16 text-center"
        >
          Verifiable Highlights
        </motion.h2>

        {/* Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.05 }}
              className="rounded-xl border border-border bg-card p-4 sm:p-5 text-center hover:border-accent/30 transition-colors"
            >
              <p className="text-lg sm:text-xl sm:text-2xl font-heading font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-xs text-secondary font-mono mt-1 leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
          className="rounded-xl border border-border bg-card p-4 sm:p-6 overflow-x-auto"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/5B8CFF/${social.githubUsername}`}
            alt="GitHub Contribution Graph"
            className="w-full max-w-3xl opacity-80"
          />
        </motion.div>
      </div>
    </section>
  );
}
