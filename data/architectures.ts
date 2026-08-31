export interface ArchitectureNode {
  id: string;
  title: string;
  subtitle?: string;
  kind: NodeKind;
  x: number;
  y: number;
  width?: number;
  height?: number;
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
  color?: "primary" | "secondary" | "success" | "warning";
}

export interface ArchitectureDefinition {
  title: string;
  subtitle?: string;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  footer?: string;
}

export type NodeKind =
  | "input"
  | "control"
  | "process"
  | "agent"
  | "model"
  | "data"
  | "output"
  | "safety"
  | "system";

export const architectures: Record<string, ArchitectureDefinition> = {
  "brain-mri-segmentation": {
    title: "Brain Tumor Segmentation",
    subtitle: "3D U-Net → EfficientNet → Attention pipeline",
    nodes: [
      { id: "data", title: "BraTS MRI", subtitle: "3D multimodal volumes", kind: "input", x: 180, y: 180 },
      { id: "preprocess", title: "Preprocessing", subtitle: "Normalization + patches", kind: "process", x: 470, y: 180 },
      { id: "unet", title: "3D U-Net", subtitle: "Baseline segmentation", kind: "model", x: 760, y: 110 },
      { id: "efficient", title: "EfficientNet U-Net", subtitle: "Enhanced encoder", kind: "model", x: 760, y: 270 },
      { id: "attention", title: "Attention + EfficientNet", subtitle: "Best Dice: 0.8256", kind: "model", x: 760, y: 430, width: 250 },
      { id: "output", title: "Tumor Mask", subtitle: "Volumetric segmentation", kind: "output", x: 470, y: 450 },
    ],
    edges: [
      { from: "data", to: "preprocess", color: "primary" },
      { from: "preprocess", to: "unet", color: "success" },
      { from: "preprocess", to: "efficient", color: "success" },
      { from: "preprocess", to: "attention", color: "success" },
      { from: "unet", to: "output", color: "secondary" },
      { from: "efficient", to: "output", color: "secondary" },
      { from: "attention", to: "output", color: "success" },
    ],
    footer: "Iterative evaluation of 3D U-Net, EfficientNet encoder, and attention-enhanced segmentation models.",
  },

  "weather-prediction": {
    title: "Weather Prediction",
    subtitle: "City-specific gradient boosting pipeline",
    nodes: [
      { id: "history", title: "Historical Weather", subtitle: "Long-term observations", kind: "input", x: 180, y: 180, width: 230 },
      { id: "preprocess", title: "Preprocessing", subtitle: "Cleaning + features", kind: "process", x: 470, y: 180, width: 240 },
      { id: "models", title: "Gradient Boosting", subtitle: "XGBoost / CatBoost / LightGBM", kind: "model", x: 780, y: 180, width: 270 },
      { id: "database", title: "SQLite", subtitle: "Prediction data", kind: "data", x: 470, y: 380 },
      { id: "forecast", title: "Weather Forecast", subtitle: "City-level predictions", kind: "output", x: 780, y: 380, width: 250 },
    ],
    edges: [
      { from: "history", to: "preprocess", color: "primary" },
      { from: "preprocess", to: "models", color: "success" },
      { from: "preprocess", to: "database", color: "secondary" },
      { from: "models", to: "forecast", color: "success" },
      { from: "database", to: "forecast", color: "secondary" },
    ],
    footer: "Historical observations are transformed into features and used by gradient-boosting models for weather prediction.",
  },

  "emotion-recognition": {
    title: "Emotion Recognition",
    subtitle: "Speech preprocessing + CNN classification",
    nodes: [
      { id: "audio", title: "Audio Input", subtitle: "Speech waveform", kind: "input", x: 180, y: 180 },
      { id: "preprocess", title: "Audio Preprocessing", subtitle: "Cleaning + normalization", kind: "process", x: 470, y: 180, width: 240 },
      { id: "mfcc", title: "MFCC", subtitle: "Audio feature extraction", kind: "data", x: 760, y: 180 },
      { id: "cnn", title: "CNN", subtitle: "Emotion classifier", kind: "model", x: 620, y: 390 },
      { id: "output", title: "Emotion", subtitle: "Predicted class", kind: "output", x: 900, y: 390 },
    ],
    edges: [
      { from: "audio", to: "preprocess", color: "primary" },
      { from: "preprocess", to: "mfcc", color: "secondary" },
      { from: "mfcc", to: "cnn", color: "success" },
      { from: "cnn", to: "output", color: "success" },
    ],
    footer: "Speech is preprocessed, represented with MFCC features, and classified using a CNN-based deep learning pipeline.",
  },

  "gridlock": {
    title: "Gridlock",
    subtitle: "Grid-based application with persistent data",
    nodes: [
      { id: "input", title: "User Input", subtitle: "Grid interaction", kind: "input", x: 180, y: 250 },
      { id: "logic", title: "Grid Logic", subtitle: "State + processing", kind: "process", x: 470, y: 250 },
      { id: "storage", title: "SQLite", subtitle: "Persistent state", kind: "data", x: 760, y: 150 },
      { id: "sql", title: "SQL", subtitle: "Data operations", kind: "system", x: 760, y: 350 },
      { id: "output", title: "Result", subtitle: "Updated grid state", kind: "output", x: 1020, y: 250 },
    ],
    edges: [
      { from: "input", to: "logic", color: "primary" },
      { from: "logic", to: "storage", color: "secondary" },
      { from: "logic", to: "sql", color: "secondary" },
      { from: "storage", to: "output", color: "success" },
      { from: "sql", to: "output", color: "success" },
    ],
    footer: "Grid state is processed by the application logic with SQLite-backed persistence and SQL data operations.",
  },
};
