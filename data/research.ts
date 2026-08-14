export const researchExperience = {
  philosophy: {
    title: "Research Philosophy",
    description:
      "I believe that impactful artificial intelligence systems emerge from the combination of rigorous scientific experimentation and robust software engineering. While modern machine learning research often emphasizes incremental architectural improvements, practical deployment requires equal attention to system design, reproducibility, scalability, monitoring, and maintainability. Consequently, I view AI research as an interdisciplinary engineering activity that combines algorithms, distributed systems, data engineering, software architecture, and human-centered evaluation.",
  },
  methodology: {
    title: "Research Methodology",
    description:
      "Most of my projects follow a consistent research methodology:",
    steps: [
      "Literature Review",
      "Problem Definition",
      "Baseline Implementation",
      "Experimental Design",
      "Incremental Improvements",
      "Comparative Evaluation",
      "Failure Analysis",
      "Documentation",
      "Reproducibility",
      "Future Work",
    ],
    note:
      "This structured methodology has been applied across projects involving medical image segmentation, speech emotion recognition, distributed machine learning, and autonomous research systems.",
  },
  currentAreas: [
    {
      title: "Distributed AI Infrastructure",
      description: "Designing scalable systems capable of coordinating multiple heterogeneous compute resources for collaborative machine learning.",
    },
    {
      title: "Medical Artificial Intelligence",
      description: "Deep learning architectures for volumetric medical image segmentation and clinical decision support.",
    },
    {
      title: "Agentic AI",
      description: "Collaborative autonomous systems composed of specialized language-model-based agents capable of reasoning, planning, and scientific investigation.",
    },
    {
      title: "Speech Intelligence",
      description: "Emotion recognition and affective computing using deep neural networks and modern speech representations.",
    },
    {
      title: "Machine Learning Systems",
      description: "Software engineering practices that improve reproducibility, scalability, and deployment of machine learning applications.",
    },
  ],
  currentGoals: [
    "Distributed training infrastructure",
    "Agentic AI systems",
    "Efficient LLM inference",
    "Medical foundation models",
    "AI infrastructure engineering",
    "Large-scale distributed reasoning",
    "Cloud-native machine learning",
    "Reproducible AI experimentation",
  ],
  interests: [
    "Distributed Machine Learning",
    "Large Language Models (LLMs)",
    "Multi-Agent Systems",
    "Medical Image Analysis",
    "AI Infrastructure",
    "Machine Learning Systems",
    "Cloud-native AI",
    "Agentic Artificial Intelligence",
    "Computer Vision",
    "Speech Intelligence",
    "Explainable Artificial Intelligence",
    "AI Systems Engineering",
    "AI for Healthcare",
  ],
};

export const publications = [
  {
    id: "publication-1",
    title: "Speech Emotion Recognition: A Human-Centric Framework with Enhanced Data Augmentation and Lightweight CNN",
    venue: "IEEE DECoN 2025 (Distributed Computing and Networking Conference)",
    year: "2025",
    abstract: "This work presents a human-centric framework for speech emotion recognition (SER) that addresses key challenges in real-world deployment: speaker variability, class imbalance, and computational efficiency. We propose enhanced data augmentation strategies combined with a lightweight CNN architecture optimized for real-time inference.",
    areas: ["Speech Emotion Recognition", "Deep Learning", "Human-Computer Interaction", "Affective Computing"],
    contributions: [
      "Designed enhanced data augmentation pipeline (pitch shifting, time stretching, noise injection, SpecAugment) tailored for SER",
      "Developed lightweight CNN architecture achieving competitive accuracy with sub-100ms inference latency",
      "Evaluated on RAVDESS and CREMA-D datasets with speaker-independent splits",
      "Analyzed augmentation impact on cross-speaker generalization"
    ],
    link: "https://doi.org/10.1109/DECoN67170.2025.11448083",
    status: "published",
    doi: "10.1109/DECoN67170.2025.11448083",
  },
];

export const researchRoadmap = {
  shortTerm: [
    "Complete Distributed Machine Learning Framework beyond MVP",
    "Publish additional technical documentation and project case studies",
    "Improve cloud deployment skills using AWS",
    "Expand experience with Amazon Bedrock and foundation models",
    "Strengthen system design and distributed computing knowledge",
    "Contribute to open-source AI projects",
    "Continue participating in AI hackathons and engineering competitions",
    "Prepare for AI engineering and research internships",
  ],
  mediumTerm: [
    "Publish research in AI systems and distributed machine learning",
    "Design production-ready multi-agent AI systems",
    "Build scalable cloud-native machine learning infrastructure",
    "Develop expertise in distributed model training and inference",
    "Work on foundation model applications",
    "Gain experience with MLOps and production AI pipelines",
    "Collaborate with research laboratories and industry teams",
    "Mentor junior students through technical communities",
  ],
  longTerm: [
    "AI Infrastructure",
    "Foundation Models",
    "Distributed AI Systems",
    "Autonomous Software Engineering",
    "Medical Artificial Intelligence",
    "Cloud-scale Machine Learning",
    "Large-Scale Multi-Agent Systems",
    "AI Research",
  ],
  learningDomains: [
    { domain: "Distributed Systems", objectives: ["Fault tolerance", "Scheduling", "Consensus", "Scalability"] },
    { domain: "Artificial Intelligence", objectives: ["Foundation models", "Multimodal AI", "Reasoning systems"] },
    { domain: "Machine Learning Systems", objectives: ["MLOps", "Model serving", "Distributed inference"] },
    { domain: "Cloud Computing", objectives: ["AWS", "Kubernetes", "Cloud-native deployment"] },
    { domain: "Software Engineering", objectives: ["Large-scale architecture", "Testing", "Observability"] },
    { domain: "Research", objectives: ["Scientific writing", "Experimentation", "Publications"] },
  ],
  researchDirections: [
    "Distributed Machine Learning",
    "Efficient Large Language Models",
    "Multi-Agent Reasoning",
    "Medical Foundation Models",
    "Explainable Artificial Intelligence",
    "Distributed AI Infrastructure",
    "Edge AI",
    "Human-AI Collaboration",
    "AI for Scientific Discovery",
  ],
};