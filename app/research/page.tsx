import type { Metadata } from "next";
import { ResearchClient } from "./ResearchClient";

export const metadata: Metadata = {
  title: "Research",
  description: "Research in distributed machine learning, medical AI, speech emotion recognition, and agentic AI systems by Shreyansh Shakya. Includes IEEE publication on speech emotion recognition.",
};

export default function ResearchPage() {
  return <ResearchClient />;
}