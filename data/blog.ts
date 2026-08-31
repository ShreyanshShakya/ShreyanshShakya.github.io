import type { ComponentType } from "react";
import BrainMriSegmentation from "@/content/blog/brain-mri-segmentation.mdx";
import SpeechEmotionRecognition from "@/content/blog/speech-emotion-recognition.mdx";
import WeatherPrediction from "@/content/blog/weather-prediction.mdx";
import Gridlock from "@/content/blog/gridlock.mdx";

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
    slug: "speech-emotion-recognition",
    title: "Building Speech Emotion Recognition",
    excerpt: "A practical look at audio preprocessing, MFCC feature extraction, lightweight CNN-based classification, and the research journey behind the IEEE DECoN 2025 publication.",
    date: "2025-08-15",
    readTime: "8 min read",
    tags: ["TensorFlow", "CNN", "Librosa", "MFCC", "Speech AI"],
    component: SpeechEmotionRecognition,
  },
  {
    slug: "brain-mri-segmentation",
    title: "Brain MRI Tumor Segmentation with 3D U-Net",
    excerpt: "An iterative study comparing 3D U-Net, EfficientNet-based, and attention-enhanced architectures for volumetric brain tumor segmentation.",
    date: "2025-06-20",
    readTime: "8 min read",
    tags: ["PyTorch", "3D U-Net", "EfficientNet", "Medical AI"],
    component: BrainMriSegmentation,
  },
  {
    slug: "weather-prediction",
    title: "Weather Prediction: From Thousands of Cities to a Deployable System",
    excerpt: "How a city-specific XGBoost forecasting pipeline grew into a multi-stage system using Kaggle, Hugging Face, FastAPI, Docker, and Gradio.",
    date: "2025-04-10",
    readTime: "9 min read",
    tags: ["Python", "XGBoost", "Weather Prediction", "MLOps"],
    component: WeatherPrediction,
  },
  {
    slug: "gridlock",
    title: "GridLock: Learning from a Traffic Demand Prediction Hackathon",
    excerpt: "A journey through distribution shift, the validation trap, model specialization, and the RoadType-gated ensemble that became the final solution.",
    date: "2026-08-31",
    readTime: "9 min read",
    tags: ["Python", "XGBoost", "CatBoost", "LightGBM", "Traffic Prediction"],
    component: Gridlock,
  },
];
