"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/experience";

export function Timeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-20 sm:py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="text-sm text-secondary uppercase tracking-widest font-mono mb-12 sm:mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-px" />

          <div className="space-y-12 sm:space-y-16">
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0;
              const description = Array.isArray(item.description)
                ? item.description
                : [item.description];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : (isLeft ? -30 : 30) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
                  className="relative"
                >
                  {/* Glowing dot — mobile (left edge) */}
                  <div className="absolute left-4 md:hidden w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-1/2 top-2 z-10 shadow-[0_0_8px_rgba(91,140,255,0.5)]" />

                  {/* Glowing dot — desktop (center) */}
                  <div className="hidden md:block absolute left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-1/2 top-2 z-10 shadow-[0_0_8px_rgba(91,140,255,0.5)]" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[45%] ${
                      isLeft
                        ? "md:mr-auto md:pr-12 md:text-right"
                        : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <span className="text-xs font-mono text-accent block mb-1">
                      {item.year}
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-accent/80 font-medium mb-2">
                      {item.org}
                    </p>
                    <ul
                      className={`text-secondary text-sm space-y-1.5 leading-relaxed ${
                        isLeft
                          ? "md:list-none md:pl-0"
                          : "list-disc list-inside"
                      }`}
                    >
                      {description.map((desc, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

