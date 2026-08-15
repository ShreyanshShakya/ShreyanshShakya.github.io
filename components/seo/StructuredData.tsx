"use client";

import { social } from "@/data/social";
import { featuredProjects } from "@/data/projects";

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
};

function getAppCategory(tags: string[]): string {
  if (tags.some(t => t.includes("Medical") || t.includes("BraTS") || t.includes("MRI"))) return "MedicalApplication";
  if (tags.some(t => t.includes("Weather") || t.includes("Time Series") || t.includes("XGBoost"))) return "DataAnalysisApplication";
  if (tags.some(t => t.includes("Speech") || t.includes("Emotion") || t.includes("Audio"))) return "MultimediaApplication";
  if (tags.some(t => t.includes("Physical") || t.includes("EnergyPlus") || t.includes("Building"))) return "EngineeringApplication";
  return "DeveloperApplication";
}

function getOS(tags: string[]): string {
  if (tags.some(t => t.includes("Docker"))) return "Linux, Docker";
  if (tags.some(t => t.includes("Linux") || t.includes("macOS") || t.includes("Windows"))) return "Linux, Windows, macOS";
  return "Linux, Windows, macOS";
}

function getLanguage(tags: string[]): string {
  if (tags.some(t => t.includes("Python") || t.includes("PyTorch") || t.includes("XGBoost"))) return "Python";
  if (tags.some(t => t.includes("TypeScript") || t.includes("Node.js"))) return "TypeScript";
  if (tags.some(t => t.includes("TensorFlow"))) return "Python";
  return "Python";
}

const projectsSchema = featuredProjects.map((project) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: project.title,
  description: project.description,
  url: `${siteUrl}${project.link}`,
  programmingLanguage: getLanguage(project.tags),
  applicationCategory: getAppCategory(project.tags),
  operatingSystem: getOS(project.tags),
  author: {
    "@type": "Person",
    name: "Shreyansh Shakya",
    url: siteUrl,
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
    ...projectsSchema,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas, null, 2) }}
    />
  );
}