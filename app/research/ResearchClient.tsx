"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const researchNotes = [
  {
    slug: "brain-mri-segmentation",
    title: "Brain MRI Tumor Segmentation with 3D U-Net",
    date: "2025-06-20",
    excerpt: "An iterative study of 3D U-Net and EfficientNet-based architectures for volumetric brain tumor segmentation, including attention-enhanced experiments.",
  },
  {
    slug: "speech-emotion-recognition",
    title: "Building Speech Emotion Recognition with MFCC and CNN",
    date: "2025-08-15",
    excerpt: "A practical look at audio preprocessing, MFCC feature extraction, CNN classification, and evaluation for speech emotion recognition.",
  },
  {
    slug: "weather-prediction",
    title: "City-Specific Weather Prediction with Gradient Boosting",
    date: "2025-04-10",
    excerpt: "Lessons from building a weather prediction pipeline using historical observations and gradient boosting models across many cities.",
  },
];

export function ResearchClient() {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Research Notes</h1>
        <p className="text-secondary text-lg mb-16 max-w-2xl">
          Technical write-ups on medical imaging, speech intelligence, weather prediction, and practical machine learning experimentation.
        </p>
      </motion.div>

      <div className="space-y-6">
        {researchNotes.map((note, i) => (
          <motion.div key={note.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
            <Link href={`/research/${note.slug}`} className="group block">
              <div className="rounded-xl border border-border bg-card p-8 hover:border-accent/30 transition-colors duration-300">
                <div className="flex items-center gap-2 text-xs text-secondary font-mono mb-3"><Calendar className="w-3 h-3" />{note.date}</div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{note.title}</h2>
                <p className="text-secondary text-sm leading-relaxed mb-4">{note.excerpt}</p>
                <span className="text-sm text-accent font-medium inline-flex items-center gap-1">Read more<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
