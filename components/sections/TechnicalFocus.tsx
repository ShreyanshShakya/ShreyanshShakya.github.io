"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Brain, Mic, Database, BarChart3 } from "lucide-react";

const technicalFocus = [
  {
    category: "Programming & Data",
    icon: Database,
    skills: ["Python", "SQL", "Pandas", "NumPy", "Data Preprocessing"],
  },
  {
    category: "Machine Learning",
    icon: BarChart3,
    skills: ["XGBoost", "CatBoost", "LightGBM", "Feature Engineering", "Time Series"],
  },
  {
    category: "Deep Learning",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "3D U-Net", "EfficientNet", "Image Segmentation"],
  },
  {
    category: "Speech AI",
    icon: Mic,
    skills: ["Librosa", "MFCC", "CNN", "Speech Emotion Recognition", "Model Evaluation"],
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
                <h3 className="text-base font-heading font-semibold">{focus.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {focus.skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-md border border-border bg-background/60 text-xs font-mono text-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
