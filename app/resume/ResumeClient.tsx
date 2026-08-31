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
        <p><strong>Machine Learning &amp; Deep Learning:</strong> Python, TensorFlow, PyTorch, 3D U-Net, EfficientNet, CNN, XGBoost, CatBoost, LightGBM</p>
        <p><strong>Audio:</strong> Librosa, MFCC</p>
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
            <li>Conducted AI market research and competitive analysis across <strong>50+ major market players</strong> to identify product opportunities and feature innovations.</li>
            <li>Created <strong>10+ technical presentations and research reports</strong>, translating AI concepts and model capabilities into actionable business recommendations.</li>
            <li>Analyzed feedback and potential-client data to identify user pain points and support product prioritization with cross-functional teams.</li>
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
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>GridLock — Traffic Demand Prediction</strong><span>2026</span></div>
          <p className="text-xs mt-1">Python, XGBoost, CatBoost, LightGBM</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Analyzed temporal distribution shift between training data and the competition's <strong>morning-commute</strong> evaluation regime.</li>
            <li>Built a RoadType-aware ensemble routing Highways toward XGBoost, Residential roads toward LightGBM, and Streets toward CatBoost.</li>
            <li>Evaluated ablations including day removal, model-weight perturbation, cluster sensitivity, and meta-stacking to diagnose validation failure modes.</li>
            <li>Achieved a <strong>91.946 leaderboard score</strong>; post-mortem oracle analysis reported <strong>0.02167 MAE</strong> versus <strong>0.02996 MAE</strong> for the final Gate B solution.</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Weather Prediction</strong><span>2025 – 2026</span></div>
          <p className="text-xs mt-1">Python, XGBoost</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Built a city-specific next-day average temperature forecasting pipeline using temporal, lag, and rolling-window features.</li>
            <li>Designed a Kaggle → XGBoost → Hugging Face Model Hub → FastAPI → Gradio workflow for training, model storage, and serving.</li>
            <li>Implemented resumable model verification across <strong>4,408 city datasets</strong>; the multi-city pipeline is configured for up to 5,000 cities.</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Brain MRI Tumor Segmentation</strong><span>2025 – 2026</span></div>
          <p className="text-xs mt-1">PyTorch, 3D U-Net, EfficientNet, CNN</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Compared baseline 3D U-Net, EfficientNet-based 3D U-Net, and EfficientNet + Attention 3D U-Net on BraTS 2020.</li>
            <li>Improved validation performance from <strong>0.8057 to 0.8256 Dice</strong> and <strong>0.7349 to 0.7575 IoU</strong> across the architectural progression.</li>
            <li>Used four MRI modalities (T1, T1ce, T2, FLAIR), tumor-aware patch sampling, mixed-precision training, and Dice + Cross-Entropy optimization.</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Speech Emotion Recognition</strong><span>2025</span></div>
          <p className="text-xs mt-1">TensorFlow, CNN, Librosa, MFCC</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Developed a lightweight CNN-based speech emotion classifier using Librosa preprocessing and MFCC feature extraction.</li>
            <li>Produced a deployment-oriented trained model of <strong>under 5 MB</strong> using Kaggle GPU resources.</li>
            <li><strong>Published at IEEE DECoN 2025</strong> on lightweight CNN-based speech emotion recognition.</li>
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
