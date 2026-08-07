"use client";

import { motion } from "framer-motion";
import {
  Network,
  MessageSquare,
  Brain,
  HeartPulse,
  Zap,
} from "lucide-react";

const researchAreas = [
  {
    title: "Distributed AI",
    description:
      "Scaling training and inference across heterogeneous compute clusters with minimal communication overhead.",
    icon: Network,
  },
  {
    title: "Large Language Models",
    description:
      "Efficient fine-tuning, alignment, and deployment of LLMs for production workloads.",
    icon: Brain,
  },
  {
    title: "Multi-Agent Systems",
    description:
      "Designing teams of specialized AI agents that communicate and collaborate on complex tasks.",
    icon: MessageSquare,
  },
  {
    title: "Medical AI",
    description:
      "Applying deep learning to medical imaging for segmentation, classification, and diagnostic assistance.",
    icon: HeartPulse,
  },
  {
    title: "Reinforcement Learning",
    description:
      "Reward shaping and policy optimization for real-world decision-making systems.",
    icon: Zap,
  },
];

export function Research() {
  return (
    <section id="research" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-secondary uppercase tracking-widest font-mono mb-16"
        >
          Research Interests
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-8 hover:border-accent/30 transition-colors duration-300"
            >
              <area.icon className="w-6 h-6 text-accent mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {area.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
