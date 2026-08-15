export const featuredProjects = [
  {
    id: "distributed-ml-framework",
    title: "Distributed ML Training Framework",
    description:
      "Built a distributed training framework that orchestrates heterogeneous consumer laptops over a LAN, enabling synchronized PyTorch Distributed Data Parallel (DDP) training with automated node management, scheduling, and telemetry.",
    tags: ["PyTorch DDP", "Python", "gRPC", "SQLite", "Docker", "AWS", "NCCL", "Gloo"],
    link: "/projects/distributed-ml-framework",
    problem:
      "Training large models on a single machine is not practical, and off-the-shelf distributed training setups often assume homogeneous, centrally managed infrastructure. The challenge was to make distributed PyTorch training work reliably across mixed consumer hardware on a local network.",
    architecture:
      "Browser-driven cluster manager coordinating a SQLite-backed registry, a job scheduler, and node agents that register workers, stream telemetry, and launch PyTorch DDP workers across CPU and GPU nodes.",
    challenges: [
      "Designed node discovery across heterogeneous hardware",
      "Managed DDP initialization and rendezvous",
      "Implemented a scheduler for available compute nodes",
      "Added a persistent cluster registry using SQLite",
      "Implemented worker heartbeat and telemetry streaming",
      "Added CPU fallback using the Gloo backend",
    ],
    benchmarks:
      "Implemented multi-node distributed training with automatic worker registration, gRPC-based control messages, job scheduling, hardware telemetry, CPU and GPU node support, and fault-aware node monitoring.",
    lessons: [
      "Overlap of communication and computation matters more than raw node count",
      "A small persistent registry can make a distributed system much easier to debug",
      "Telemetry and heartbeat checks are essential in heterogeneous clusters",
    ],
    github: "https://github.com/ShreyanshShakya/Distributed-ML-Training",
    demo: "",
    relatedProjects: ["ai-research-orchestrator", "agentforge", "optimus"],
  },
  {
    id: "agentforge",
    title: "AgentForge",
    description:
      "Developed a local multi-agent software engineering assistant where specialized AI agents collaborate to analyze requirements, design solutions, critique outputs, and produce implementation plans.",
    tags: ["Ollama", "Multi-Agent Systems", "TypeScript", "Local Inference", "Consensus", "Qwen", "GPT-OSS"],
    link: "/projects/agentforge",
    problem:
      "Software engineering assistants become more useful when different roles can reason separately instead of forcing one model to do every step.",
    architecture:
      "Planner, analyst, architect, critic, and consensus pipeline coordinating local inference and role-based reasoning.",
    challenges: [
      "Designed role-based agent separation",
      "Handled local model execution with Ollama",
      "Added caching for repeated reasoning steps",
      "Built consensus reasoning across specialized agents",
      "Integrated Codex into the workflow where useful",
      "Balanced response quality with execution latency",
    ],
    benchmarks:
      "Role-based agents, local inference, caching, consensus reasoning, and Codex integration in a local assistant workflow.",
    lessons: [
      "Separating agent roles improves clarity of reasoning",
      "Local inference is useful when privacy or offline operation matters",
      "Consensus steps help catch weak outputs before they reach a user",
      "Modular agent design enables parallel development and testing",
    ],
    github: "https://github.com/ShreyanshShakya/agentforge",
    demo: "",
    relatedProjects: ["distributed-ml-framework", "ai-research-orchestrator", "optimus"],
  },
  {
    id: "optimus",
    title: "Optimus: Autonomous EnergyPlus Building Controller",
    description:
      "Built a safety-constrained physical-AI controller for autonomous building operations. Uses EnergyPlus simulation with PyEnergyPlus API for live state observation, local LLM (Ollama/Qwen) or deterministic fallback for bounded supervisory planning, and hard safety validation before schedule override injection.",
    tags: ["EnergyPlus", "PyEnergyPlus", "Ollama", "Qwen", "Streamlit", "Docker", "Physical AI", "Building Control"],
    link: "/projects/optimus",
    problem:
      "Building HVAC control typically relies on fixed schedules or reactive thermostats. The challenge was to create an autonomous controller that observes live simulation state, plans bounded supervisory actions via local LLM or deterministic fallback, validates safety (PMV/ITE constraints), and injects approved schedule overrides — all with full auditability.",
    architecture:
      "EnergyPlus baseline → Interface discovery → Live PyEnergyPlus callback loop → Bounded LLM planner (Ollama/Qwen) or deterministic fallback → Hard safety validator (PMV for comfort, ITE inlet temp for data centers) → One-hour bounded schedule override with automatic native restoration → EnergyPlus SQL KPI comparison + JSONL audit trail.",
    challenges: [
      "Integrated EnergyPlus Python API for live state observation",
      "Designed bounded LLM planning with deterministic fallback for offline operation",
      "Implemented hard safety validation: PMV/temperature guards (comfort), ITE inlet temperature (data centers)",
      "Built one-hour bounded cooling relaxation with automatic native schedule restoration",
      "Delivered Docker/Streamlit deployment with JSONL audit trail and EnergyPlus SQL-derived KPI reports",
      "Handled unsupported interfaces gracefully (baseline-only with explanation)",
    ],
    benchmarks:
      "Validated on EnergyPlus models: comfort buildings (PMV safety) and data centers (ITE inlet headroom). Frozen v1 controller produces auditable comparison reports (baseline vs AI energy, peak, comfort) with per-action validation reasons.",
    lessons: [
      "Physical-AI systems require hard safety boundaries, not just ML optimization",
      "Deterministic fallback enables evaluation without external LLM dependencies",
      "EnergyPlus SQL + JSONL audit trail provides full traceability for building operators",
      "Bounded one-hour overrides with automatic restoration prevent runaway control",
      "Interface discovery determines actuation capability per model — unsupported models run baseline-only",
    ],
    github: "https://github.com/ShreyanshShakya/Optimus",
    demo: "",
    relatedProjects: ["distributed-ml-framework", "agentforge", "ai-research-orchestrator"],
  },
  {
    id: "brain-mri-segmentation",
    title: "Brain MRI Tumor Segmentation",
    description:
      "Investigated multiple 3D medical image segmentation architectures for brain tumor delineation using the BraTS dataset, evaluating baseline and attention-enhanced models.",
    tags: ["PyTorch", "3D U-Net", "Attention U-Net", "EfficientNet", "BraTS", "MONAI", "Mixed Precision"],
    link: "/projects/brain-mri-segmentation",
    problem:
      "Brain tumor segmentation requires accurate volumetric understanding across noisy medical scans, with strong constraints on precision and clinical interpretability.",
    architecture:
      "3D segmentation pipeline evaluating baseline and attention-enhanced encoder-decoder architectures on BraTS data, with patch-based training and mixed-precision optimization.",
    challenges: [
      "Handled volumetric 3D MRI inputs with patch-based training",
      "Compared baseline 3D U-Net and attention-enhanced variants",
      "Balanced segmentation quality with memory limits on large 3D tensors",
      "Tuned loss functions for class imbalance in tumor regions",
      "Optimized GPU memory with mixed precision and gradient checkpointing",
    ],
    benchmarks:
      "BraTS dataset, 128×128×128 patch size. Validation Dice progression: baseline 3D U-Net 0.8057 → EfficientNet encoder 0.8157 → Attention U-Net + EfficientNet 0.8256 (+1.99 pp improvement over baseline). Mixed precision training with MONAI.",
    lessons: [
      "Attention mechanisms can improve localization in medical volumes",
      "3D models are memory-bound quickly, so training strategy matters",
      "Dice-based objectives are essential for imbalanced segmentation tasks",
      "Incremental experimentation beats architectural complexity",
    ],
    github: "https://github.com/ShreyanshShakya/Brain-Tumor-Segmentation-using-3D-U-Net-Architectures",
    demo: "",
    relatedProjects: ["speech-emotion-recognition", "distributed-ml-framework"],
  },
  {
    id: "weather-prediction",
    title: "Weather Prediction at Scale",
    description:
      "Built a city-specific weather prediction pipeline using gradient boosting models trained on approximately 10 years of historical weather observations across thousands of cities.",
    tags: ["XGBoost", "Python", "Pandas", "Time Series", "ML Pipelines", "90GB Data"],
    link: "/projects/weather-prediction",
    problem:
      "Weather forecasting at a city level needs a scalable modeling approach that can handle many locations while keeping per-city signal strong enough to be useful.",
    architecture:
      "Data pipeline that trains one XGBoost model per city using long-range historical observations and city-specific feature sets.",
    challenges: [
      "Managed a dataset of roughly 90 GB",
      "Modeled 4,300+ cities independently",
      "Built a training workflow that scales across many per-city models",
      "Balanced locality-specific patterns with global feature reuse",
      "Handled missing observations and temporal consistency",
    ],
    benchmarks:
      "Approximately 10 years of history, 90 GB of data, and 4,300+ modeled cities with one XGBoost model per city.",
    lessons: [
      "Per-city models can outperform a single global model when local patterns matter",
      "Data organization matters as much as model choice at this scale",
      "Pipeline simplicity helps when training thousands of related models",
      "Automated retraining is essential as new data arrives",
    ],
    github: "https://github.com/ShreyanshShakya/Weather-Prediction",
    demo: "",
    relatedProjects: ["distributed-ml-framework", "agentforge"],
  },
  {
    id: "speech-emotion-recognition",
    title: "Speech Emotion Recognition",
    description:
      "Built a real-time speech emotion recognition pipeline combining audio preprocessing, MFCC feature extraction, and hybrid CNN-RNN deep learning models for affective computing.",
    tags: ["TensorFlow", "PyTorch", "Librosa", "MFCC", "CNN", "RNN", "Real-time Inference"],
    link: "/projects/speech-emotion-recognition",
    problem:
      "Human emotional expression in speech varies significantly across speakers, recording conditions, and languages. The challenge was to build a robust pipeline that generalizes across these variations while maintaining real-time inference performance.",
    architecture:
      "Modular pipeline: audio acquisition → preprocessing (normalization, silence removal) → MFCC feature extraction → hybrid CNN-RNN classifier → real-time emotion prediction. Separated signal processing from model inference for maintainability.",
    challenges: [
      "Speaker variability and recording quality differences",
      "Class imbalance across emotion categories",
      "Background noise robustness",
      "Variable audio duration handling",
      "Real-time inference latency constraints",
      "Generalization across speakers and datasets",
    ],
    benchmarks:
      "Evaluated on RAVDESS and CREMA-D datasets. Achieved competitive accuracy across 7-8 emotion classes with sub-100ms inference latency for real-time applications.",
    lessons: [
      "High-quality preprocessing matters more than model complexity for speech",
      "MFCCs provide strong perceptual features with low dimensionality",
      "Hybrid CNN-RNN captures both local patterns and temporal dependencies",
      "Consistent train/inference pipelines are critical for deployment",
    ],
    github: "https://github.com/ShreyanshShakya/Speech-Emotion-Recognition",
    demo: "",
    relatedProjects: ["brain-mri-segmentation", "agentforge", "ai-research-orchestrator"],
  },
  {
    id: "ai-research-orchestrator",
    title: "AI Research Orchestrator / Multi-Agent Research Scientist",
    description:
      "Developed an autonomous multi-agent research system that plans literature reviews, retrieves academic papers, synthesizes findings, and generates structured research reports.",
    tags: ["Node.js", "TypeScript", "Semantic Scholar", "OpenAlex", "LLMs", "Agent Orchestration"],
    link: "/projects/ai-research-orchestrator",
    problem:
      "Research workflows are fragmented across search, ranking, reading, and synthesis. The goal was to coordinate those steps into a repeatable agent-driven system.",
    architecture:
      "Planner, analyst, architect, critic, and consensus stages coordinate paper retrieval, citation analysis, literature summaries, and structured report generation.",
    challenges: [
      "API rate limiting",
      "Paper ranking",
      "Agent orchestration",
      "Tool abstraction",
      "Offline execution mode",
    ],
    benchmarks:
      "Built research planning, paper retrieval, citation analysis, structured reports, and literature summary flows using external academic data sources and LLM-driven orchestration.",
    lessons: [
      "Specialized agents make research workflows easier to reason about",
      "Consensus steps are useful when synthesis needs to be grounded in sources",
      "Tool boundaries matter when mixing retrieval, ranking, and writing",
    ],
    github: "https://github.com/ShreyanshShakya/Aster",
    demo: "",
    relatedProjects: ["distributed-ml-framework", "agentforge", "optimus"],
  },
];