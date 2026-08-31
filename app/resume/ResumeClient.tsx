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
        <p><strong>Programming:</strong> Python, Java (Basic), SQL</p>
        <p><strong>Machine Learning &amp; Deep Learning:</strong> TensorFlow, PyTorch, 3D U-Net, EfficientNet, CNN, XGBoost, CatBoost, LightGBM</p>
        <p><strong>Audio &amp; Signal Processing:</strong> Librosa, MFCC</p>
        <p><strong>Databases &amp; Systems:</strong> SQLite, WSL</p>
      </div>
    ),
  },
  {
    title: "Experience",
    content: (
      <div className="space-y-5">
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Coding Jr — AI Research Intern</strong><span>April 2025 – July 2025</span></div>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Identified product opportunities across <strong>50+ major market players</strong> by conducting competitive AI market research and synthesizing findings into actionable recommendations.</li>
            <li>Translated complex AI concepts into <strong>10+ technical presentations and research reports</strong> to support product and business decision-making.</li>
            <li>Supported product prioritization by analyzing feedback and potential-client data to identify user pain points and emerging requirements.</li>
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
            <li>Improved traffic-demand prediction to a <strong>91.946 leaderboard score</strong> by diagnosing temporal distribution shift and designing a RoadType-aware ensemble routing predictions to specialized boosting models.</li>
            <li>Reduced test error to <strong>0.02996 MAE</strong> by routing Highways toward XGBoost, Residential roads toward LightGBM, and Streets toward CatBoost based on out-of-fold diagnostics.</li>
            <li>Identified a <strong>0.02167 MAE oracle benchmark</strong> by evaluating model-level specialization and conducting post-competition error analysis across traffic regimes.</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Weather Prediction</strong><span>2025 – 2026</span></div>
          <p className="text-xs mt-1">Python, XGBoost, FastAPI, Docker, Hugging Face, Gradio</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Built a next-day temperature forecasting pipeline by engineering temporal, lag, and rolling-window features from historical city-level weather observations.</li>
            <li>Scaled model training and serving to <strong>4,408 city datasets</strong> by developing a resumable Kaggle → XGBoost → Hugging Face Model Hub → FastAPI → Gradio workflow.</li>
            <li>Improved deployment reproducibility by containerizing the serving layer and implementing on-demand model loading and artifact management.</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Brain MRI Tumor Segmentation</strong><span>2025 – 2026</span></div>
          <p className="text-xs mt-1">PyTorch, 3D U-Net, EfficientNet, Attention, CNN</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Improved validation Dice from <strong>0.8057 to 0.8256 (+2.47%)</strong> by replacing the baseline 3D U-Net encoder with EfficientNet-inspired blocks and adding attention mechanisms.</li>
            <li>Improved IoU from <strong>0.7349 to 0.7575 (+3.08%)</strong> using four MRI modalities, tumor-aware patch sampling, and attention-guided feature refinement.</li>
            <li>Established a reproducible training pipeline using mixed-precision optimization and Dice + Cross-Entropy loss on BraTS 2020.</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Speech Emotion Recognition</strong><span>2025</span></div>
          <p className="text-xs mt-1">Python, TensorFlow, CNN, Librosa, MFCC</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Built a lightweight CNN-based speech emotion classifier by applying Librosa audio preprocessing and MFCC feature extraction.</li>
            <li>Reduced deployment footprint to <strong>under 5 MB</strong> by developing a compact trained model suitable for resource-constrained environments.</li>
            <li>Published research at <strong>IEEE DECoN 2025</strong>, documenting the lightweight CNN approach for speech emotion recognition.</li>
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
