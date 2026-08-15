import type { ComponentType } from "react";
import DistributedTraining from "@/content/blog/distributed-training.mdx";
import MultiAgentSystems from "@/content/blog/multi-agent-systems.mdx";
import BrainMriSegmentation from "@/content/blog/brain-mri-segmentation.mdx";
import SpeechEmotionRecognition from "@/content/blog/speech-emotion-recognition.mdx";
import WeatherPrediction from "@/content/blog/weather-prediction.mdx";
import AgentForge from "@/content/blog/agentforge.mdx";
import AiResearchOrchestrator from "@/content/blog/ai-research-orchestrator.mdx";
import OptimusController from "@/content/blog/optimus-controller.mdx";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  component: ComponentType;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "optimus-controller",
    title: "Optimus: Autonomous EnergyPlus Building Controller",
    excerpt:
      "A safety-constrained physical-AI controller for autonomous building operations. Uses EnergyPlus simulation with PyEnergyPlus API, local LLM (Ollama/Qwen) or deterministic fallback for bounded planning, and hard safety validation before schedule override injection.",
    date: "2026-07-25",
    readTime: "12 min read",
    tags: ["EnergyPlus", "Physical AI", "Building Control", "Ollama", "Qwen", "Streamlit", "Docker"],
    component: OptimusController,
  },
  {
    slug: "distributed-training",
    title: "Why Distributed Training Still Bottlenecks at Scale",
    excerpt:
      "A practical look at gradient synchronization, communication overlap, and the hidden costs of scaling PyTorch DDP. Based on building a distributed ML training framework for heterogeneous consumer hardware.",
    date: "2026-07-15",
    readTime: "12 min read",
    tags: ["Distributed Systems", "PyTorch", "ML Infra"],
    component: DistributedTraining,
  },
  {
    slug: "multi-agent-systems",
    title: "Technical Note: Designing Reliable Multi-Agent Systems",
    excerpt:
      "Notes on orchestration, context management, and fault tolerance for specialized LLM agent teams. Based on building AgentForge and AI Research Orchestrator.",
    date: "2026-06-20",
    readTime: "10 min read",
    tags: ["LLMs", "Agents", "Architecture"],
    component: MultiAgentSystems,
  },
  {
    slug: "agentforge",
    title: "AgentForge: Multi-Agent Software Engineering with Local LLMs",
    excerpt:
      "Building a local-first multi-agent coding assistant where specialized agents (Analyst, Architect, Planner, Critic, Consensus) collaborate on software tasks—running entirely on your machine with Ollama. Focus on role specialization, structured intermediates, and local execution.",
    date: "2025-11-01",
    readTime: "12 min read",
    tags: ["Agentic AI", "Multi-Agent", "Local LLMs", "Ollama", "Software Engineering"],
    component: AgentForge,
  },
  {
    slug: "speech-emotion-recognition",
    title: "Building Real-Time Speech Emotion Recognition",
    excerpt:
      "How I built a complete speech emotion recognition pipeline from audio preprocessing to real-time inference—published at IEEE DECoN 2025. Covers the published lightweight CNN approach and the extended project implementation with CNN-BiLSTM.",
    date: "2025-08-15",
    readTime: "10 min read",
    tags: ["Speech AI", "Deep Learning", "TensorFlow", "PyTorch", "Librosa", "Real-time", "IEEE"],
    component: SpeechEmotionRecognition,
  },
  {
    slug: "ai-research-orchestrator",
    title: "AI Research Orchestrator: Multi-Agent Literature Synthesis",
    excerpt:
      "An autonomous research assistant that plans literature reviews, retrieves papers from academic APIs, analyzes findings, and generates structured reports—built as a modular multi-agent system in TypeScript with production and offline modes.",
    date: "2025-07-20",
    readTime: "10 min read",
    tags: ["Multi-Agent Systems", "Research Engineering", "LLMs", "TypeScript", "Semantic Scholar", "OpenAlex"],
    component: AiResearchOrchestrator,
  },
  {
    slug: "brain-mri-segmentation",
    title: "Brain MRI Tumor Segmentation: 3D U-Net to Attention + EfficientNet",
    excerpt:
      "An iterative research journey through volumetric brain tumor segmentation—comparing baseline 3D U-Net, EfficientNet encoder, and Attention U-Net on the BraTS dataset with patch-based training and mixed precision. Final validation Dice: 0.8256 with Attention + EfficientNet.",
    date: "2025-06-20",
    readTime: "12 min read",
    tags: ["Medical AI", "Computer Vision", "PyTorch", "3D U-Net", "BraTS", "MONAI"],
    component: BrainMriSegmentation,
  },
  {
    slug: "weather-prediction",
    title: "Weather Prediction at Scale: 4,300+ Cities, 90GB, One Model Each",
    excerpt:
      "How I built a city-specific weather forecasting pipeline training 4,300+ independent XGBoost models on 10 years of historical data—lessons in data organization, pipeline automation, and when local models beat global ones.",
    date: "2025-04-10",
    readTime: "12 min read",
    tags: ["Data Engineering", "XGBoost", "Time Series", "MLOps", "Scalable ML"],
    component: WeatherPrediction,
  },
];