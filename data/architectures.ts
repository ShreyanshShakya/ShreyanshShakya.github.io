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
  "distributed-ml-framework": {
    title: "Distributed ML Training Framework",
    subtitle: "Cluster management + PyTorch DDP worker plane",

    nodes: [
      {
        id: "user",
        title: "User / CLI",
        subtitle: "Submit training job",
        kind: "input",
        x: 170,
        y: 150,
        width: 220,
        height: 86,
      },

      {
        id: "manager",
        title: "Cluster Manager",
        subtitle: "gRPC + scheduler",
        kind: "control",
        x: 470,
        y: 150,
        width: 240,
        height: 86,
      },

      {
        id: "registry",
        title: "SQLite Registry",
        subtitle: "Nodes + job state",
        kind: "data",
        x: 470,
        y: 290,
        width: 240,
        height: 78,
      },

      {
        id: "agent-a",
        title: "Node Agent A",
        subtitle: "Telemetry + hardware profile",
        kind: "agent",
        x: 820,
        y: 120,
        width: 250,
        height: 86,
      },

      {
        id: "agent-b",
        title: "Node Agent B",
        subtitle: "Telemetry + hardware profile",
        kind: "agent",
        x: 820,
        y: 270,
        width: 250,
        height: 86,
      },

      {
        id: "worker-a",
        title: "DDP Worker A",
        subtitle: "PyTorch / NCCL",
        kind: "model",
        x: 820,
        y: 450,
        width: 250,
        height: 86,
      },

      {
        id: "worker-b",
        title: "DDP Worker B",
        subtitle: "PyTorch / Gloo",
        kind: "model",
        x: 820,
        y: 590,
        width: 250,
        height: 86,
      },
    ],

    edges: [
      {
        from: "user",
        to: "manager",
        label: "job submission",
        color: "primary",
      },
      {
        from: "manager",
        to: "registry",
        label: "state",
        color: "secondary",
      },
      {
        from: "manager",
        to: "agent-a",
        label: "gRPC",
        color: "primary",
      },
      {
        from: "manager",
        to: "agent-b",
        label: "gRPC",
        color: "primary",
      },
      {
        from: "agent-a",
        to: "worker-a",
        label: "launch",
        color: "success",
      },
      {
        from: "agent-b",
        to: "worker-b",
        label: "launch",
        color: "success",
      },
      {
        from: "agent-a",
        to: "manager",
        label: "telemetry",
        dashed: true,
        color: "secondary",
      },
      {
        from: "agent-b",
        to: "manager",
        label: "telemetry",
        dashed: true,
        color: "secondary",
      },
    ],

    footer:
      "Heterogeneous consumer nodes coordinated through the cluster-management layer.",
  },

  "ai-research-orchestrator": {
    title: "Aster",
    subtitle: "Distributed AI research orchestration",

    nodes: [
      {
        id: "question",
        title: "Research Question",
        subtitle: "Problem intake",
        kind: "input",
        x: 180,
        y: 170,
      },

      {
        id: "planner",
        title: "Research Planner",
        subtitle: "Question-aware plan",
        kind: "control",
        x: 470,
        y: 170,
      },

      {
        id: "retrieval",
        title: "Literature Retrieval",
        subtitle: "OpenAlex / Semantic Scholar",
        kind: "data",
        x: 760,
        y: 170,
        width: 250,
      },

      {
        id: "analysis",
        title: "Research Agents",
        subtitle: "Analyze evidence",
        kind: "agent",
        x: 470,
        y: 350,
      },

      {
        id: "experiment",
        title: "Experiment Planner",
        subtitle: "Metrics + training plan",
        kind: "process",
        x: 760,
        y: 350,
      },

      {
        id: "workers",
        title: "Distributed Workers",
        subtitle: "DMLF / PyTorch DDP",
        kind: "model",
        x: 760,
        y: 520,
      },

      {
        id: "report",
        title: "Research Brief",
        subtitle: "Evidence + results",
        kind: "output",
        x: 470,
        y: 520,
      },
    ],

    edges: [
      { from: "question", to: "planner", color: "primary" },
      { from: "planner", to: "retrieval", color: "secondary" },
      { from: "retrieval", to: "analysis", color: "secondary" },
      { from: "analysis", to: "experiment", color: "primary" },
      { from: "experiment", to: "workers", color: "success" },
      { from: "workers", to: "report", color: "success" },
      { from: "analysis", to: "report", color: "primary" },
    ],

    footer:
      "Offline-demo mode uses deterministic agents and simulated workers where external services are unavailable.",
  },

  "agentforge": {
    title: "AgentForge",
    subtitle: "Local multi-agent software engineering assistant",

    nodes: [
      {
        id: "request",
        title: "Software Request",
        subtitle: "User requirements",
        kind: "input",
        x: 180,
        y: 170,
      },

      {
        id: "analyst",
        title: "Analyst",
        subtitle: "Requirements analysis",
        kind: "agent",
        x: 470,
        y: 110,
      },

      {
        id: "architect",
        title: "Architect",
        subtitle: "System design",
        kind: "agent",
        x: 470,
        y: 260,
      },

      {
        id: "critic",
        title: "Critic",
        subtitle: "Review + validation",
        kind: "agent",
        x: 760,
        y: 185,
      },

      {
        id: "planner",
        title: "Planner",
        subtitle: "Implementation plan",
        kind: "control",
        x: 760,
        y: 365,
      },

      {
        id: "generator",
        title: "Code Generation",
        subtitle: "Ollama / local LLM",
        kind: "model",
        x: 980,
        y: 275,
        width: 220,
      },

      {
        id: "output",
        title: "Validated Project",
        subtitle: "Code + tests + fixes",
        kind: "output",
        x: 980,
        y: 470,
        width: 220,
      },
    ],

    edges: [
      {
        from: "request",
        to: "analyst",
        color: "primary",
      },
      {
        from: "request",
        to: "architect",
        color: "primary",
      },
      {
        from: "analyst",
        to: "critic",
        color: "secondary",
      },
      {
        from: "architect",
        to: "critic",
        color: "secondary",
      },
      {
        from: "critic",
        to: "planner",
        color: "warning",
      },
      {
        from: "planner",
        to: "generator",
        color: "success",
      },
      {
        from: "generator",
        to: "output",
        color: "success",
      },
    ],

    footer:
      "Specialized agents collaborate locally with validation, caching, and code-generation workflows.",
  },

  "brain-mri-segmentation": {
    title: "Brain Tumor Segmentation",
    subtitle: "3D U-Net → EfficientNet → Attention pipeline",

    nodes: [
      {
        id: "data",
        title: "BraTS 2020",
        subtitle: "3D MRI volumes",
        kind: "input",
        x: 180,
        y: 180,
      },

      {
        id: "preprocess",
        title: "Preprocessing",
        subtitle: "Normalization + patches",
        kind: "process",
        x: 470,
        y: 180,
      },

      {
        id: "baseline",
        title: "Baseline 3D U-Net",
        subtitle: "Dice 0.8057",
        kind: "model",
        x: 760,
        y: 120,
      },

      {
        id: "efficient",
        title: "EfficientNet U-Net",
        subtitle: "Dice 0.8157",
        kind: "model",
        x: 760,
        y: 270,
      },

      {
        id: "attention",
        title: "Attention + EfficientNet",
        subtitle: "Dice 0.8256",
        kind: "model",
        x: 760,
        y: 420,
        width: 250,
      },

      {
        id: "evaluation",
        title: "Validation",
        subtitle: "Dice + segmentation metrics",
        kind: "output",
        x: 470,
        y: 450,
      },
    ],

    edges: [
      {
        from: "data",
        to: "preprocess",
        color: "primary",
      },
      {
        from: "preprocess",
        to: "baseline",
        color: "success",
      },
      {
        from: "preprocess",
        to: "efficient",
        color: "success",
      },
      {
        from: "preprocess",
        to: "attention",
        color: "success",
      },
      {
        from: "baseline",
        to: "evaluation",
        color: "secondary",
      },
      {
        from: "efficient",
        to: "evaluation",
        color: "secondary",
      },
      {
        from: "attention",
        to: "evaluation",
        color: "success",
      },
    ],

    footer:
      "Best validation Dice: 0.8256 using the Attention + EfficientNet architecture.",
  },

  "optimus": {
    title: "Optimus",
    subtitle: "Safety-constrained EnergyPlus control loop",

    nodes: [
      {
        id: "simulation",
        title: "EnergyPlus",
        subtitle: "Building simulation",
        kind: "input",
        x: 180,
        y: 180,
      },

      {
        id: "state",
        title: "Simulation State",
        subtitle: "Temperature + load + time",
        kind: "data",
        x: 470,
        y: 180,
        width: 240,
      },

      {
        id: "controller",
        title: "AI Controller",
        subtitle: "Local LLM / deterministic fallback",
        kind: "control",
        x: 770,
        y: 180,
        width: 270,
      },

      {
        id: "safety",
        title: "Safety Validator",
        subtitle: "Bounds + constraints",
        kind: "safety",
        x: 770,
        y: 360,
      },

      {
        id: "action",
        title: "Bounded Control Action",
        subtitle: "Schedule override",
        kind: "output",
        x: 470,
        y: 360,
        width: 240,
      },

      {
        id: "audit",
        title: "Audit / Metrics",
        subtitle: "Traceable decisions",
        kind: "process",
        x: 180,
        y: 360,
      },
    ],

    edges: [
      {
        from: "simulation",
        to: "state",
        color: "primary",
      },
      {
        from: "state",
        to: "controller",
        color: "secondary",
      },
      {
        from: "controller",
        to: "safety",
        color: "warning",
      },
      {
        from: "safety",
        to: "action",
        color: "success",
      },
      {
        from: "action",
        to: "simulation",
        color: "primary",
      },
      {
        from: "action",
        to: "audit",
        dashed: true,
        color: "secondary",
      },
      {
        from: "audit",
        to: "simulation",
        dashed: true,
        color: "secondary",
      },
    ],

    footer:
      "Control actions remain bounded by explicit safety constraints before being applied to the simulation.",
  },

  "speech-emotion-recognition": {
    title: "Speech Emotion Recognition",
    subtitle: "Audio preprocessing + neural emotion classification",

    nodes: [
      {
        id: "audio",
        title: "Audio Input",
        subtitle: "Speech waveform",
        kind: "input",
        x: 180,
        y: 180,
      },

      {
        id: "preprocess",
        title: "Preprocessing",
        subtitle: "Cleaning + augmentation",
        kind: "process",
        x: 470,
        y: 180,
      },

      {
        id: "features",
        title: "MFCC / Features",
        subtitle: "Time-frequency representation",
        kind: "data",
        x: 760,
        y: 180,
      },

      {
        id: "cnn",
        title: "CNN",
        subtitle: "Spatial feature extraction",
        kind: "model",
        x: 620,
        y: 380,
      },

      {
        id: "bilstm",
        title: "BiLSTM",
        subtitle: "Temporal modelling",
        kind: "model",
        x: 900,
        y: 380,
      },

      {
        id: "emotion",
        title: "Emotion Prediction",
        subtitle: "Emotion classes",
        kind: "output",
        x: 760,
        y: 540,
        width: 240,
      },
    ],

    edges: [
      {
        from: "audio",
        to: "preprocess",
        color: "primary",
      },
      {
        from: "preprocess",
        to: "features",
        color: "secondary",
      },
      {
        from: "features",
        to: "cnn",
        color: "success",
      },
      {
        from: "features",
        to: "bilstm",
        color: "success",
      },
      {
        from: "cnn",
        to: "emotion",
        color: "success",
      },
      {
        from: "bilstm",
        to: "emotion",
        color: "success",
      },
    ],

    footer:
      "Published research focuses on data augmentation and lightweight CNN-based speech emotion recognition.",
  },

  "weather-prediction": {
    title: "Weather Prediction",
    subtitle: "Large-scale city-specific ML forecasting",

    nodes: [
      {
        id: "history",
        title: "Historical Weather",
        subtitle: "90 GB dataset",
        kind: "input",
        x: 180,
        y: 180,
        width: 230,
      },

      {
        id: "preprocess",
        title: "Preprocessing",
        subtitle: "Cleaning + feature engineering",
        kind: "process",
        x: 470,
        y: 180,
        width: 240,
      },

      {
        id: "city",
        title: "City-Specific Models",
        subtitle: "Thousands of locations",
        kind: "control",
        x: 780,
        y: 180,
        width: 250,
      },

      {
        id: "xgboost",
        title: "XGBoost",
        subtitle: "Per-city forecasting",
        kind: "model",
        x: 780,
        y: 370,
      },

      {
        id: "api",
        title: "FastAPI",
        subtitle: "Prediction serving",
        kind: "system",
        x: 470,
        y: 370,
      },

      {
        id: "forecast",
        title: "Forecast Output",
        subtitle: "Temperature / weather predictions",
        kind: "output",
        x: 180,
        y: 370,
        width: 230,
      },
    ],

    edges: [
      {
        from: "history",
        to: "preprocess",
        color: "primary",
      },
      {
        from: "preprocess",
        to: "city",
        color: "secondary",
      },
      {
        from: "city",
        to: "xgboost",
        color: "success",
      },
      {
        from: "xgboost",
        to: "api",
        color: "success",
      },
      {
        from: "api",
        to: "forecast",
        color: "primary",
      },
    ],

    footer:
      "City-specific XGBoost models are exposed through an API-oriented serving layer.",
  },
};