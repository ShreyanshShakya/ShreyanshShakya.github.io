import type { Metadata } from "next";
import { ResumeClient } from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Shreyansh Shakya — AI Engineer & ML Systems Builder. Download PDF or view online.",
};

export default function ResumePage() {
  return <ResumeClient />;
}