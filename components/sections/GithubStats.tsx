"use client";

import { motion } from "framer-motion";
import { social } from "@/data/social";
import Image from "next/image";

const stats = [
  { label: "Repositories", value: "40+" },
  { label: "Contributions", value: "1,200+" },
  { label: "Stars", value: "350+" },
];

export function GithubStats() {
  return (
    <section id="github" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-secondary uppercase tracking-widest font-mono mb-16"
        >
          Open Source
        </motion.h2>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-xl">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <p className="text-2xl font-heading font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-xs text-secondary font-mono mt-1">
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-xl border border-border bg-card p-6 overflow-x-auto"
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
