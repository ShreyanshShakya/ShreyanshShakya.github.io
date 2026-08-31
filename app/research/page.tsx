import type { Metadata } from "next";
import { ResearchClient } from "./ResearchClient";

export const metadata: Metadata = {
  title: "Research",
  description: "Research and publications by Shreyansh Shakya covering medical image segmentation, speech emotion recognition, weather prediction, and applied machine learning.",
};

export default function ResearchPage() {
  return <ResearchClient />;
}
