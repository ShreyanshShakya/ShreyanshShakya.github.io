"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Network,
  Bot,
  Cpu,
  BookOpen,
} from "lucide-react";

const technicalFocus = [
  {
    category: "Distributed ML",
    icon: Network,
    skills: [
      "PyTorch DDP",
      "gRPC",
      "Distributed Training",
      "Scheduling",
      "Telemetry",
      "NCCL / Gloo",
    ],
  },
  {
    category: "Agentic AI",
    icon: Bot,
    skills: [
      "Multi-Agent Systems",
      "LLM Orchestration",
      "Ollama",
      "Tool Use",
      "Research Agents",
      "Consensus",
    ],
  },
  {
    category: "ML Engineering",
    icon: Cpu,
    skills: [
      "PyTorch",
      "Python",
      "FastAPI",
      "Docker",
      "MLOps",
      "Model Serving",
    ],
  },
  {
    category: "Research",
    icon: BookOpen,
    skills: [
      "Computer Vision",
      "Medical AI",
      "Speech AI",
      "ML Systems",
      "IEEE Published",
    ],
  },
];

export function TechnicalFocus() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="technical-focus" className="py-20 sm:py-24 relative border-y border-border">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="text-sm text-secondary uppercase tracking-widest font-mono mb-12 sm:mb-16 text-center"
        >
          Technical Focus
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {technicalFocus.map((focus, i) => (
            <motion.div
              key={focus.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.1 }}
              className="group rounded-xl border border-border bg-card/50 p-6 sm:p-8 hover:border-accent/30 transition-colors duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <focus.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base sm:text-lg font-heading font-semibold text-foreground">
                  {focus.category}
                </h3>
              </div>
              <ul className="space-y-1.5 sm:space-y-2">
                {focus.skills.map((skill, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-secondary leading-relaxed flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}