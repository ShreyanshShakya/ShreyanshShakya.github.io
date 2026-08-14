"use client";

import { social } from "@/data/social";

const siteUrl = "https://shreyanshshakya.github.io";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shreyansh Shakya",
  url: siteUrl,
  sameAs: [social.github, social.linkedin],
  jobTitle: "AI Engineer & ML Systems Builder",
  worksFor: {
    "@type": "Organization",
    name: "Independent Research Engineer",
  },
  knowsAbout: [
    "Distributed Machine Learning",
    "Agentic AI Systems",
    "Deep Learning",
    "Medical Image Analysis",
    "Speech Emotion Recognition",
    "MLOps",
    "PyTorch",
    "Python",
    "Software Engineering",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "VIT Bhopal",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shreyansh Shakya — AI Engineer Portfolio",
  url: siteUrl,
  description: "AI Engineer building distributed ML infrastructure, agentic AI systems, and research-driven machine learning applications.",
  publisher: {
    "@type": "Person",
    name: "Shreyansh Shakya",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const projects = [
  {
    name: "Distributed ML Training Framework (DMLF)",
    description: "A distributed training framework orchestrating heterogeneous compute nodes over LAN using PyTorch DDP with automated node management, scheduling, and telemetry.",
    url: "https://shreyanshshakya.github.io/projects/distributed-ml-framework",
    programmingLanguage: "Python",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, Windows, macOS",
  },
  {
    name: "Aster — AI Research Orchestrator",
    description: "An autonomous multi-agent research system that plans literature reviews, retrieves academic papers, synthesizes findings, and generates structured reports.",
    url: "https://shreyanshshakya.github.io/projects/autonomous-agents",
    programmingLanguage: "TypeScript",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, Windows, macOS",
  },
  {
    name: "AgentForge",
    description: "A local multi-agent software engineering assistant where specialized AI agents collaborate to analyze requirements, design solutions, and produce implementation plans.",
    url: "https://shreyanshshakya.github.io/projects/agentforge",
    programmingLanguage: "Python",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, Windows, macOS",
  },
  {
    name: "Optimus — Autonomous EnergyPlus Building Controller",
    description: "A safety-constrained physical-AI controller for autonomous building operations using EnergyPlus simulation with local LLM or deterministic fallback.",
    url: "https://shreyanshshakya.github.io/projects/optimus",
    programmingLanguage: "Python",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, Docker",
  },
  {
    name: "Brain MRI Tumor Segmentation",
    description: "3D medical image segmentation using BraTS dataset with Attention U-Net and EfficientNet encoder achieving 0.8256 validation Dice.",
    url: "https://shreyanshshakya.github.io/projects/brain-mri-segmentation",
    programmingLanguage: "Python",
    applicationCategory: "MedicalApplication",
    operatingSystem: "Linux, Windows, macOS",
  },
  {
    name: "Weather Prediction at Scale",
    description: "City-specific weather forecasting pipeline training 4,300+ independent XGBoost models on 90GB historical data across 10 years.",
    url: "https://shreyanshshakya.github.io/projects/weather-prediction",
    programmingLanguage: "Python",
    applicationCategory: "DataAnalysisApplication",
    operatingSystem: "Linux, Windows, macOS",
  },
];

const softwareApplicationsSchema = projects.map((project) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: project.name,
  description: project.description,
  url: project.url,
  programmingLanguage: project.programmingLanguage,
  applicationCategory: project.applicationCategory,
  operatingSystem: project.operatingSystem,
  author: {
    "@type": "Person",
    name: "Shreyansh Shakya",
    url: "https://shreyanshshakya.github.io",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
}));

export function StructuredData() {
  const schemas = [
    personSchema,
    webSiteSchema,
    ...softwareApplicationsSchema,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas, null, 2) }}
    />
  );
}