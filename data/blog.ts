import type { ComponentType } from "react";
import BrainMriSegmentation from "@/content/blog/brain-mri-segmentation.mdx";
import SpeechEmotionRecognition from "@/content/blog/speech-emotion-recognition.mdx";
import WeatherPrediction from "@/content/blog/weather-prediction.mdx";

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
    excerpt: "A practical look at audio preprocessing, MFCC feature extraction, CNN-based classification, and evaluation for speech emotion recognition.",
    date: "2025-08-15",
    readTime: "10 min read",
    tags: ["TensorFlow", "PyTorch", "CNN", "Librosa", "MFCC", "Speech AI"],
    component: SpeechEmotionRecognition,
  },
  {
    slug: "brain-mri-segmentation",
    title: "Brain MRI Tumor Segmentation with 3D U-Net",
    excerpt: "An iterative research journey comparing 3D U-Net and EfficientNet-based architectures for volumetric brain tumor segmentation.",
    date: "2025-06-20",
    readTime: "12 min read",
    tags: ["PyTorch", "3D U-Net", "EfficientNet", "Medical AI"],
    component: BrainMriSegmentation,
  },
  {
    slug: "weather-prediction",
    title: "Weather Prediction with Gradient Boosting",
    excerpt: "Lessons from building a city-specific weather prediction pipeline using historical observations and gradient boosting models.",
    date: "2025-04-10",
    readTime: "12 min read",
    tags: ["Python", "XGBoost", "CatBoost", "LightGBM", "Weather Prediction"],
    component: WeatherPrediction,
  },
];
