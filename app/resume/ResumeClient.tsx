"use client";

import { motion } from "framer-motion";
import { Download, Mail, Phone } from "lucide-react";

const sections = [
  {
    title: "Education",
    content: (
      <div className="space-y-1">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
          <strong>VIT Bhopal</strong><span>Expected June 2027</span>
        </div>
        <p>B.Tech, Computer Science and Engineering | CGPA 8.33/10</p>
      </div>
    ),
  },
  {
    title: "Technical Skills",
    content: (
      <div className="space-y-1.5">
        <p><strong>Machine Learning:</strong> Python, TensorFlow, PyTorch, 3D U-Net, EfficientNet, CNN, XGBoost, CatBoost, LightGBM</p>
        <p><strong>Audio &amp; Signal Processing:</strong> Librosa, MFCC</p>
        <p><strong>Databases &amp; Systems:</strong> SQLite, WSL, SQL</p>
        <p><strong>Programming:</strong> Java (Basic)</p>
      </div>
    ),
  },
  {
    title: "Experience",
    content: (
      <div className="space-y-5">
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Springer Capital — Data Analysis and LLM Intern</strong><span>May 2026 – Present</span></div>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Generated actionable business insights by collecting, cleaning, and analyzing structured and unstructured datasets using exploratory data analysis.</li>
            <li>Enhanced AI evaluation workflows and developed dashboards and analytical reports for cross-functional stakeholders.</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Coding Jr — AI Research Intern</strong><span>April 2025 – July 2025</span></div>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Conducted AI market research and competitive analysis on 50+ major market players to identify opportunities for product development and feature innovation.</li>
            <li>Created 10+ technical presentations and research reports translating AI concepts into actionable business recommendations.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Projects & Research",
    content: (
      <div className="space-y-5">
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Weather Prediction</strong><span>2025</span></div>
          <p className="text-xs mt-1">Python, XGBoost, CatBoost, LightGBM</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Built a city-specific weather prediction pipeline using gradient boosting models and approximately 10 years of historical weather observations.</li>
            <li>Designed a scalable workflow for training models across thousands of cities while handling missing observations and temporal consistency.</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Brain Tumor Segmentation</strong><span>2025 – 2026</span></div>
          <p className="text-xs mt-1">Python, PyTorch, TensorFlow, EfficientNet, 3D U-Net</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Developed and evaluated 3D architectures for brain tumor segmentation on the BraTS dataset, including baseline 3D U-Net and EfficientNet-based models.</li>
            <li>Improved validation Dice from 0.8057 to 0.8256 using an attention-enhanced EfficientNet architecture with patch-based training and mixed precision.</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Emotion Recognition</strong><span>2025</span></div>
          <p className="text-xs mt-1">Python, TensorFlow, PyTorch, CNN, MFCC, Librosa</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Built a speech emotion recognition pipeline using audio preprocessing, MFCC feature extraction, and CNN-based deep learning.</li>
            <li>Authored research on speech emotion recognition accepted for presentation at IEEE DECoN 2025.</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Gridlock</strong><span>2026</span></div>
          <p className="text-xs mt-1">Python, SQLite, SQL</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Developed a grid-based application with modular state management and persistent SQLite-backed storage.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export function ResumeClient() {
  const printResume = () => window.print();

  return (
    <main className="container mx-auto px-4 sm:px-6 py-20 sm:py-24 print:px-0 print:py-0">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8 print:hidden">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Resume</h1>
          <button onClick={printResume} className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            <Download className="w-4 h-4" /> Save / Print PDF
          </button>
        </div>
        <article className="bg-white text-slate-900 rounded-xl shadow-2xl p-7 sm:p-10 print:shadow-none print:rounded-none print:p-8 print:text-black text-[13px] leading-[1.45]">
          <header className="text-center border-b border-slate-300 pb-4 mb-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Shreyansh Shakya</h2>
            <p className="mt-1">Banswara, Rajasthan (327001)</p>
            <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> +91-9116924202</span>
              <span className="inline-flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> shreyanshshakya695@gmail.com</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
              <a href="https://github.com/ShreyanshShakya" target="_blank" rel="noreferrer" className="underline">GitHub</a>
            </div>
          </header>
          <div className="space-y-5">
            {sections.map((section) => (
              <section key={section.title}>
                <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">{section.title}</h3>
                <div>{section.content}</div>
              </section>
            ))}
          </div>
        </article>
      </motion.div>
    </main>
  );
}
