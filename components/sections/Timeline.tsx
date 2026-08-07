"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export function Timeline() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-secondary uppercase tracking-widest font-mono mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-16">
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Glowing dot */}
                  <div
                    className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-1/2 top-2 z-10 shadow-[0_0_8px_rgba(91,140,255,0.5)]"
                  />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[45%] ${
                      isLeft
                        ? "md:mr-auto md:pr-12 md:text-right"
                        : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <span className="text-xs font-mono text-accent">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-foreground mt-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-accent/80 font-medium">
                      {item.org}
                    </p>
                    <p className="text-secondary text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
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
