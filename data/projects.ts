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
    relatedProjects: ["emotion-recognition", "weather-prediction"],
  },
  {
    id: "weather-prediction",
    title: "Weather Prediction",
    description:
      "Built a city-specific weather prediction pipeline using XGBoost models trained on historical weather observations across thousands of Indian cities, with a Kaggle training workflow and deployed serving architecture.",
    tags: ["Python", "XGBoost", "FastAPI", "Docker", "Gradio"],
    link: "/projects/weather-prediction",
    problem:
      "City-level weather prediction needs a scalable modeling approach that can handle many locations while preserving local historical patterns.",
    architecture:
      "Kaggle Dataset → Kaggle Training Pipeline → Hugging Face Model Hub → FastAPI Server → Gradio UI.",
    challenges: [
      "Managed a large historical weather dataset",
      "Trained and tracked separate models across thousands of cities",
      "Built a resumable workflow that identifies already-uploaded models",
      "Stored city model artifacts in a centralized model repository",
      "Designed on-demand model loading and caching for serving",
    ],
    benchmarks:
      "The training verification workflow found 4,408 city datasets in the available input data; the multi-city pipeline is configured to process up to 5,000 cities.",
    lessons: [
      "Data and model management become major engineering problems at scale",
      "Repeatable pipelines are essential when training thousands of models",
      "A model registry simplifies artifact organization and verification",
      "Serving architecture must account for a large number of independent models",
    ],
    github: "https://github.com/ShreyanshShakya/Weather-Prediction",
    demo: "",
    relatedProjects: ["brain-mri-segmentation", "emotion-recognition"],
  },
  {
    id: "emotion-recognition",
    title: "Emotion Recognition",
    description:
      "Built a lightweight speech emotion recognition pipeline using audio preprocessing, MFCC feature extraction, and CNN-based deep learning for emotion classification.",
    tags: ["TensorFlow", "Librosa", "MFCC", "CNN"],
    link: "/projects/emotion-recognition",
    problem:
      "Human emotional expression in speech varies across speakers and recording conditions. The goal was to build a lightweight audio classification pipeline.",
    architecture:
      "Audio acquisition → preprocessing → MFCC feature extraction → lightweight CNN classifier → emotion prediction.",
    challenges: [
      "Speaker variability and recording quality differences",
      "Class imbalance across emotion categories",
      "Background noise robustness",
      "Variable audio duration handling",
      "Keeping the trained model lightweight for constrained environments",
    ],
    benchmarks:
      "The project repository documents a final trained model of less than 5 MB and training through Kaggle's remote GPU environment.",
    lessons: [
      "High-quality preprocessing strongly affects speech classification",
      "MFCCs provide compact perceptual features for audio models",
      "Lightweight architectures can be useful when deployment resources are limited",
      "Training and inference have different resource requirements",
    ],
    github: "https://github.com/ShreyanshShakya/EmotionRecognition",
    demo: "",
    relatedProjects: ["brain-mri-segmentation", "weather-prediction"],
  },
  {
    id: "gridlock",
    title: "Gridlock",
    description:
      "Developed a traffic-demand prediction solution for the GridLock hackathon, focusing on distribution shift, model specialization, validation design, and RoadType-aware ensemble routing.",
    tags: ["Python", "XGBoost", "CatBoost", "LightGBM"],
    link: "/projects/gridlock",
    problem:
      "Traffic demand varied strongly across time, geography, and road types, while the leaderboard distribution differed from the dominant patterns in the training data.",
    architecture:
      "Feature Set → CatBoost + XGBoost + LightGBM → RoadType Gate → domain-specific prediction blend.",
    challenges: [
      "Detected a mismatch between conventional validation and leaderboard performance",
      "Analyzed model errors across hour and RoadType",
      "Tested and rejected several approaches that improved local validation but hurt target performance",
      "Designed a RoadType-aware routing strategy for the final ensemble",
    ],
    benchmarks:
      "The repository reports a final Gate B leaderboard score of 91.946, with a post-mortem Gate B test MAE of 0.02996.",
    lessons: [
      "Validation design can matter more than model complexity",
      "Different gradient-boosting models can specialize in different regimes",
      "Domain information can be used as an ensemble routing signal",
      "Failed experiments can reveal the real source of distribution shift",
    ],
    github: "https://github.com/ShreyanshShakya/Traffic-Demand-Prediction---GridLock-Hackathon2026",
    demo: "",
    relatedProjects: ["weather-prediction", "emotion-recognition"],
  },
];
