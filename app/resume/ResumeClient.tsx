"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function ResumeClient() {
  const resumeUrl = "/resume.pdf";

  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-heading font-bold text-foreground">
            Resume
          </h1>
          <a
            href={resumeUrl}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <object data={resumeUrl} type="application/pdf" className="w-full h-[80vh]">
            <div className="flex h-[80vh] items-center justify-center p-8 text-center">
              <div className="max-w-lg space-y-4">
                <p className="text-foreground font-medium">
                  Resume preview is unavailable until a PDF is placed at public/resume.pdf.
                </p>
                <p className="text-secondary text-sm">
                  Add your resume PDF to the public folder, or use the download button above once it is available.
                </p>
                <a
                  href={resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-secondary hover:text-foreground hover:bg-background transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </object>
        </div>
      </motion.div>
    </div>
  );
}