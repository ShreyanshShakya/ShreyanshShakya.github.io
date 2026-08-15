"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

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
        <p><strong>Programming Languages:</strong> Java, Python, SQL</p>
        <p><strong>Core Computer Science:</strong> Data Structures &amp; Algorithms, Oops, DBMS, Operating Systems, Computer Networks</p>
        <p><strong>AI &amp; Machine Learning:</strong> PyTorch, TensorFlow, Scikit-Learn, CNN, LSTM, BiLSTM, U-Net, Computer Vision, Feature Engineering, Model Evaluation</p>
        <p><strong>Generative AI:</strong> LLMs, Prompt Engineering, AI Agents, LangChain, RAG, OpenAI APIs</p>
        <p><strong>Tools &amp; Technologies:</strong> Git, GitHub, Docker, FastAPI, Hugging Face, Jupyter Notebook, VS Code</p>
        <p><strong>Data Science:</strong> Pandas, NumPy, Exploratory Data Analysis, Statistical Analysis</p>
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
            <li>Generated actionable business insights by collecting, cleaning, and analyzing structured and unstructured datasets using exploratory data analysis (EDA), supporting data-driven decision making.</li>
            <li>Enhanced Generative AI solutions by designing prompt engineering and evaluation workflows, integrating LLM APIs, and developing dashboards and analytical reports for cross-functional stakeholders.</li>
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
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>AgentForge: Autonomous Multi-Agent Software Engineering Platform</strong><span>April 2026 – June 2026</span></div>
          <p className="text-xs mt-1">Python, Ollama, Qwen, LLMs, Multi-Agent Systems, Prompt Engineering, Agent Orchestration, Software Engineering, Pytest</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Automated end-to-end software development by building a fully local multi-agent platform that converts natural language requirements into implementation-ready projects using Analyst, Architect, Planner, Critic, Coder and Fixer agents.</li>
            <li>Improved software quality by designing a consensus-driven orchestration pipeline with dependency-aware planning, context-aware code generation, automated compilation, pytest-based testing, and iterative self-repair.</li>
            <li>Enabled offline AI-assisted development through custom agent orchestration, MD5 response caching, dependency-aware context management, and Ollama-powered local LLM inference for reproducible software generation.</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Brain Tumor Classification and Segmentation</strong><span>October 2025 – January 2026</span></div>
          <p className="text-xs mt-1">Python, PyTorch, TensorFlow, EfficientNet, 3D U-Net, MRI Processing, Medical AI, BraTS 2020, Mixed Precision</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Improved MRI brain tumor segmentation by developing and evaluating three 3D architectures—Baseline U-Net, EfficientNet U-Net, and Attention-EfficientNet U-Net—on the BraTS 2020 dataset.</li>
            <li>Enhanced volumetric learning by implementing multimodal MRI preprocessing, tumor-aware patch sampling, mixed-precision training, and Dice + Cross-Entropy optimization for large-scale 3D segmentation.</li>
            <li>Increased segmentation performance from 80.57% Dice to 82.56% Dice (75.47% IoU) while conducting comparative analysis of EfficientNet encoders and attention mechanisms.</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><strong>Speech Emotion Recognition</strong><span>March 2025 – July 2025</span></div>
          <p className="text-xs mt-1">Python, TensorFlow, Keras, CNN, MFCC, Librosa, Speech AI, Audio Signal Processing, Deep Learning</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Recognized emotions from speech by developing a CNN-BiLSTM model using MFCC feature extraction, achieving 72% classification accuracy on the RAVDESS and TESS datasets.</li>
            <li>Built a robust audio processing pipeline for feature extraction, preprocessing, and model training on high-dimensional speech datasets using TensorFlow and Librosa.</li>
            <li>Validated the research contribution by authoring a 6-page research paper accepted for presentation at the IEEE Intl. Conference on Data, Energy and Communication Networks (DECON).</li>
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
              <span className="inline-flex items-center gap-1"><Linkedin className="w-3.5 h-3.5" /> LinkedIn</span>
              <span className="inline-flex items-center gap-1"><Github className="w-3.5 h-3.5" /> GitHub</span>
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
