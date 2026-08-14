import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Engineering case studies — distributed ML training, agentic AI systems, deep learning, MLOps, and research engineering projects by Shreyansh Shakya.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}