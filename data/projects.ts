export const featuredProjects = [
  {
    id: "brain-mri-segmentation",
    title: "Brain MRI Tumor Segmentation",
    description:
      "Investigated 3D medical image segmentation architectures for brain tumor delineation using the BraTS dataset, evaluating baseline and attention-enhanced models.",
    tags: ["PyTorch", "3D U-Net", "EfficientNet"],
    link: "/projects/brain-mri-segmentation",
    problem:
      "Brain tumor segmentation requires accurate volumetric understanding across noisy medical scans, with strong constraints on precision and interpretability.",
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
      "BraTS dataset, 128×128×128 patch size. Validation Dice progression: baseline 3D U-Net 0.8057 → EfficientNet encoder 0.8157 → Attention U-Net + EfficientNet 0.8256.",
    lessons: [
      "Attention mechanisms can improve localization in medical volumes",
      "3D models are memory-bound quickly, so training strategy matters",
      "Dice-based objectives are essential for imbalanced segmentation tasks",
      "Incremental experimentation beats architectural complexity",
    ],
    github: "https://github.com/ShreyanshShakya/Brain-Tumor-Segmentation-using-3D-U-Net-Architectures",
    demo: "",
    relatedProjects: ["speech-emotion-recognition", "weather-prediction"],
  },
  {
    id: "weather-prediction",
    title: "Weather Prediction",
    description:
      "Built a city-specific weather prediction pipeline using gradient boosting models trained on historical weather observations across thousands of cities.",
    tags: ["Python", "XGBoost", "CatBoost", "LightGBM"],
    link: "/projects/weather-prediction",
    problem:
      "City-level weather prediction needs a scalable modeling approach that can handle many locations while preserving local patterns.",
    architecture:
      "Data pipeline that trains gradient boosting models using historical observations and city-specific feature sets.",
    challenges: [
      "Managed a large historical weather dataset",
      "Modeled thousands of cities independently",
      "Built a training workflow that scales across many models",
      "Handled missing observations and temporal consistency",
    ],
    benchmarks:
      "Approximately 10 years of historical weather data and thousands of modeled cities.",
    lessons: [
      "Local patterns can be important for city-level prediction",
      "Data organization matters as much as model choice at scale",
      "Simple, repeatable pipelines make large modeling workloads manageable",
    ],
    github: "https://github.com/ShreyanshShakya/Weather-Prediction",
    demo: "",
    relatedProjects: ["brain-mri-segmentation", "emotion-recognition"],
  },
  {
    id: "emotion-recognition",
    title: "Emotion Recognition",
    description:
      "Built a speech emotion recognition pipeline combining audio preprocessing, MFCC feature extraction, and CNN-based deep learning for emotion classification.",
    tags: ["TensorFlow", "PyTorch", "Librosa", "MFCC", "CNN"],
    link: "/projects/emotion-recognition",
    problem:
      "Human emotional expression in speech varies across speakers and recording conditions. The goal was to build a robust audio classification pipeline.",
    architecture:
      "Audio acquisition → preprocessing → MFCC feature extraction → CNN classifier → emotion prediction.",
    challenges: [
      "Speaker variability and recording quality differences",
      "Class imbalance across emotion categories",
      "Background noise robustness",
      "Variable audio duration handling",
      "Generalization across speakers and datasets",
    ],
    benchmarks:
      "Evaluated using established speech emotion datasets with MFCC-based audio features and CNN classification.",
    lessons: [
      "High-quality preprocessing strongly affects speech classification",
      "MFCCs provide compact perceptual features for audio models",
      "Consistent train and inference pipelines are critical for deployment",
    ],
    github: "https://github.com/ShreyanshShakya/Speech-Emotion-Recognition",
    demo: "",
    relatedProjects: ["brain-mri-segmentation", "weather-prediction"],
  },
  {
    id: "gridlock",
    title: "Gridlock",
    description:
      "Developed Gridlock as a software project focused on solving and managing grid-based problems with a clean, practical implementation.",
    tags: ["Python", "SQLite", "SQL"],
    link: "/projects/gridlock",
    problem:
      "Grid-based systems require clear state management and efficient handling of entities and interactions.",
    architecture:
      "Application logic backed by structured data storage and SQL-based persistence.",
    challenges: [
      "Designed clear state and data management",
      "Implemented persistent storage",
      "Kept application logic modular and maintainable",
    ],
    benchmarks:
      "Implemented a functional grid-based application with persistent SQLite storage.",
    lessons: [
      "Simple data models make application state easier to maintain",
      "Separating persistence from application logic improves maintainability",
    ],
    github: "https://github.com/ShreyanshShakya/Gridlock",
    demo: "",
    relatedProjects: ["weather-prediction", "emotion-recognition"],
  },
];
