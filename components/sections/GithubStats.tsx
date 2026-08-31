"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Database, MapPinned, Layers3, BookOpen } from "lucide-react";
import { social } from "@/data/social";

const stats = [
  {
    value: "90 GB",
    label: "Largest Dataset Processed",
    detail: "Historical weather data handled in the forecasting pipeline",
    icon: Database,
  },
  {
    value: "4,408",
    label: "City Datasets",
    detail: "City-level weather datasets verified in the training workflow",
    icon: MapPinned,
  },
  {
    value: "4",
    label: "Core ML Projects",
    detail: "Weather prediction, speech emotion, brain MRI, and traffic demand modeling",
    icon: Layers3,
  },
  {
    value: "1",
    label: "IEEE Publication",
    detail: "Peer-reviewed research in speech emotion recognition",
    icon: BookOpen,
  },
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
          By The Numbers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : i * 0.08,
                }}
                className="group rounded-2xl border border-border bg-card/80 p-6 sm:p-8 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start gap-5 sm:gap-7">
                  <div className="shrink-0 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border border-border bg-background/60 text-accent transition-colors duration-300 group-hover:border-accent/40">
                    <Icon className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.7} aria-hidden="true" />
                  </div>

                  <div className="min-w-0 pt-1">
                    <p className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-sm sm:text-base text-accent mt-1 font-medium">
                      {stat.label}
                    </p>
                    <p className="text-sm text-secondary mt-2 leading-relaxed max-w-xl">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

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
