"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeartPulse, Mic, CloudSun, FileText, ExternalLink } from "lucide-react";

const researchProjects = [
  {
    title: "Speech Emotion Recognition",
    description:
      "Research on speech emotion recognition using data augmentation and a lightweight convolutional neural network.",
    icon: Mic,
    tags: ["Speech AI", "CNN", "MFCC", "Audio Processing"],
    publication: {
      title: "Speech Emotion Recognition: A Human-Centric Framework with Enhanced Data Augmentation and Lightweight CNN",
      venue: "IEEE DECoN 2025",
      doi: "10.1109/DECoN67170.2025.11448083",
    },
  },
  {
    title: "Medical Image Segmentation",
    description:
      "Experiments with 3D deep-learning architectures for brain MRI tumor segmentation using the BraTS dataset.",
    icon: HeartPulse,
    tags: ["PyTorch", "3D U-Net", "EfficientNet", "BraTS"],
  },
  {
    title: "Weather Prediction",
    description:
      "City-specific weather prediction using historical observations, lag-based features, and XGBoost.",
    icon: CloudSun,
    tags: ["Python", "XGBoost", "Time Series", "Feature Engineering"],
  },
];

export function Research() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="research" className="py-20 sm:py-24 relative border-y border-border">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="text-sm text-secondary uppercase tracking-widest font-mono mb-12 sm:mb-16 text-center"
        >
          Research & Publications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 sm:p-8 hover:border-accent/30 transition-colors duration-300"
            >
              <project.icon className="w-6 h-6 text-accent mb-3 sm:mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-base sm:text-lg font-heading font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed mb-3 sm:mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded border border-border bg-background/50 text-xs font-mono text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
              {project.publication && (
                <div className="pt-3 sm:pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-xs text-accent font-mono mb-2">
                    <FileText className="w-3 h-3" />
                    Publication
                  </div>
                  <p className="text-xs text-secondary mb-1 font-medium">{project.publication.title}</p>
                  <p className="text-xs text-secondary/70 mb-2">{project.publication.venue}</p>
                  <a
                    href={`https://doi.org/${project.publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                  >
                    DOI: {project.publication.doi}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
