import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Shreyansh Shakya in machine learning, deep learning, speech emotion recognition, medical image segmentation, weather prediction, and software development.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
