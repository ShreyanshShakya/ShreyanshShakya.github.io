export const featuredProjects = [
  {
    id: "weather-prediction",
    title: "Weather Prediction System",
    description:
      "Built a city-specific weather prediction pipeline using XGBoost and historical weather observations, with preprocessing, lag-based feature engineering, and an application interface for accessing predictions.",
    tags: ["Python", "XGBoost", "Pandas", "Time Series", "FastAPI", "Docker", "Gradio"],
    link: "/projects/weather-prediction",
    problem:
      "City-level weather prediction requires handling temporal patterns and location-specific observations across a large historical dataset.",
    architecture:
      "Historical observations → preprocessing and lag features → city-specific XGBoost models → prediction API and user interface.",
    challenges: [
      "Prepared historical weather observations for modeling",
      "Designed lag-based features for time-dependent prediction",
      "Organized training around city-specific models",
      "Integrated prediction logic with an API and application interface",
    ],
    benchmarks:
      "The project uses approximately 10 years of historical data across thousands of cities. Retain dataset-size claims only where they match the documented pipeline.",
    lessons: [
      "Feature engineering and temporal validation are important for forecasting",
      "Location-specific models can capture local patterns",
      "A prediction interface helps make model outputs accessible",
    ],
    github: "https://github.com/ShreyanshShakya/Weather-Prediction",
    demo: "",
    relatedProjects: ["gridlock", "speech-emotion-recognition"],
  },
  {
    id: "brain-mri-segmentation",
    title: "Brain Tumor Segmentation",
    description:
      "Investigated 3D deep-learning architectures for brain tumor segmentation using multimodal MRI data from the BraTS dataset.",
    tags: ["Python", "PyTorch", "3D U-Net", "Attention U-Net", "EfficientNet", "MONAI"],
    link: "/projects/brain-mri-segmentation",
    problem:
      "Volumetric tumor segmentation requires models to identify relevant structures across three-dimensional MRI scans while managing substantial memory demands.",
    architecture:
      "MRI preprocessing → volumetric patch sampling → 3D encoder-decoder segmentation models → Dice and IoU evaluation.",
    challenges: [
      "Prepared and normalized volumetric MRI data",
      "Compared baseline and attention-enhanced 3D segmentation architectures",
      "Managed GPU memory constraints during patch-based training",
      "Evaluated segmentation quality using Dice score and IoU",
    ],
    benchmarks:
      "The project explored baseline 3D U-Net, EfficientNet-encoder, and attention-enhanced variants. Include exact metric values only when they match the final reproducible validation run.",
    lessons: [
      "Three-dimensional models require careful memory and patch-size management",
      "Architecture comparisons should use consistent validation methodology",
      "Dice and IoU provide complementary views of segmentation quality",
    ],
    github: "https://github.com/ShreyanshShakya/Brain-Tumor-Segmentation-using-3D-U-Net-Architectures",
    demo: "",
    relatedProjects: ["speech-emotion-recognition", "weather-prediction"],
  },
  {
    id: "speech-emotion-recognition",
    title: "Speech Emotion Recognition",
    description:
      "Developed a speech emotion recognition pipeline using audio preprocessing, MFCC feature extraction, and deep-learning models for emotion classification.",
    tags: ["Python", "TensorFlow", "PyTorch", "Librosa", "MFCC", "CNN"],
    link: "/projects/speech-emotion-recognition",
    problem:
      "Speech emotion classification must account for differences in speakers, audio quality, and emotional expression.",
    architecture:
      "Audio preprocessing → MFCC feature extraction → neural-network classification → emotion prediction and evaluation.",
    challenges: [
      "Prepared audio samples and extracted MFCC features",
      "Explored convolutional and sequential model architectures",
      "Considered class balance and speaker variability during evaluation",
      "Compared model performance using held-out data",
    ],
    benchmarks:
      "The project references speech emotion datasets including RAVDESS and CREMA-D. Report accuracy and latency only when supported by the final evaluation results.",
    lessons: [
      "Consistent preprocessing is essential between training and inference",
      "Audio feature quality can strongly affect classification performance",
      "Evaluation splits should account for speaker variability where possible",
    ],
    github: "https://github.com/ShreyanshShakya/Speech-Emotion-Recognition",
    demo: "",
    relatedProjects: ["brain-mri-segmentation", "weather-prediction"],
  },
  {
    id: "gridlock",
    title: "GridLock — Traffic Demand Prediction",
    description:
      "Built a traffic-demand prediction solution using gradient-boosting models, with experiments focused on validation design, distribution shift, and road-type-aware prediction.",
    tags: ["Python", "XGBoost", "CatBoost", "LightGBM", "Feature Engineering"],
    link: "/projects/gridlock",
    problem:
      "Traffic demand varies by time and road type, and validation data may not fully reflect the distribution encountered during evaluation.",
    architecture:
      "Feature preparation → gradient-boosting models → error analysis → road-type-aware model blending.",
    challenges: [
      "Analyzed prediction errors across time and road types",
      "Investigated differences between local validation and target evaluation",
      "Compared XGBoost, CatBoost, and LightGBM approaches",
      "Tested model blending and road-type-aware routing strategies",
    ],
    benchmarks:
      "Use leaderboard scores or post-mortem metrics only when they can be verified in the project repository and clearly labeled by evaluation split.",
    lessons: [
      "Validation design can be as important as model complexity",
      "Different boosting models may perform differently across data regimes",
      "Error analysis helps identify distribution shift and model weaknesses",
    ],
    github: "https://github.com/ShreyanshShakya/Traffic-Demand-Prediction---GridLock-Hackathon2026",
    demo: "",
    relatedProjects: ["weather-prediction", "speech-emotion-recognition"],
  },

  {
    id: "agentforge",
    title: "AgentForge — Multi-Agent Software Engineering Assistant",
    description:
      "Built a locally runnable multi-agent assistant that coordinates specialized agents to analyze tasks, propose software architecture, critique solutions, plan implementation, and synthesize a final response.",
    tags: ["Python", "Ollama", "LLMs", "Multi-Agent Systems", "Code Generation"],
    link: "/projects/agentforge",
    problem:
      "Software engineering tasks often require separate stages of analysis, design, review, and planning, which can be difficult to coordinate in a single prompt.",
    architecture:
      "User task → Analyst → Architect → Critic → Planner → Consensus → consolidated response, using locally hosted Ollama models.",
    challenges: [
      "Defined responsibilities for specialized agents",
      "Coordinated outputs across sequential stages",
      "Used a local model runtime to support development workflows",
      "Structured the final response around review and consensus",
    ],
    benchmarks:
      "This is a local prototype focused on agent orchestration and workflow design; no quantitative productivity or code-quality improvement is claimed.",
    lessons: [
      "Explicit agent responsibilities make multi-step workflows easier to inspect",
      "Critique and planning stages can expose gaps before implementation",
      "Local inference introduces practical model-size and hardware constraints",
    ],
    github: "https://github.com/ShreyanshShakya/agentforge",
    demo: "",
    relatedProjects: ["distributed-ml-training", "personal-coding-assistant"],
  },
  {
    id: "distributed-ml-training",
    title: "Distributed ML Training Framework",
    description:
      "Developed an MVP for coordinating machine-learning training across heterogeneous computers, combining PyTorch Distributed Data Parallel with node registration, telemetry, and job scheduling.",
    tags: ["Python", "PyTorch DDP", "gRPC", "SQLite", "Distributed Systems", "Scheduling"],
    link: "/projects/distributed-ml-training",
    problem:
      "Consumer laptops have uneven CPU, RAM, and GPU capabilities, making it challenging to coordinate training jobs and monitor available compute resources across a local network.",
    architecture:
      "Node agents → gRPC-based cluster management and telemetry → SQLite state and job queue → resource-aware scheduler → PyTorch DDP training.",
    challenges: [
      "Implemented node registration and periodic hardware telemetry",
      "Connected job submission with a persistent queue",
      "Added basic resource-aware scheduling across registered nodes",
      "Tested local multi-process execution and simulated multi-node workflows",
    ],
    benchmarks:
      "MVP validation focused on cluster orchestration and telemetry. Multi-node behavior was partly simulated; do not present it as a production-scale distributed training benchmark.",
    lessons: [
      "Cluster orchestration and model-gradient synchronization are separate responsibilities",
      "Telemetry is needed to make resource-aware scheduling decisions",
      "Networking, process startup, and heterogeneous hardware complicate distributed training",
    ],
    github: "https://github.com/ShreyanshShakya/Distributed-ML-Training",
    demo: "",
    relatedProjects: ["agentforge", "weather-prediction"],
  },
];
