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
    title: "Speech Emotion Recognition",
    excerpt:
      "An overview of the speech emotion recognition workflow, including audio preprocessing, MFCC features, neural-network modeling, and evaluation.",
    date: "2025-08-15",
    readTime: "10 min read",
    tags: ["Speech AI", "Deep Learning", "TensorFlow", "PyTorch", "Librosa"],
    component: SpeechEmotionRecognition,
  },
  {
    slug: "brain-mri-segmentation",
    title: "Brain MRI Tumor Segmentation",
    excerpt:
      "Experiments with volumetric brain tumor segmentation using 3D U-Net, EfficientNet encoders, patch-based training, and validation metrics.",
    date: "2025-06-20",
    readTime: "12 min read",
    tags: ["Medical AI", "Computer Vision", "PyTorch", "3D U-Net", "BraTS"],
    component: BrainMriSegmentation,
  },
  {
    slug: "weather-prediction",
    title: "Weather Prediction with City-Specific Models",
    excerpt:
      "Lessons from building a weather prediction pipeline using historical observations, lag-based features, and XGBoost models.",
    date: "2025-04-10",
    readTime: "12 min read",
    tags: ["Machine Learning", "XGBoost", "Time Series", "Python"],
    component: WeatherPrediction,
  },
];
