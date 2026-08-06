"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-tight">
            Building AI Systems <br />
            <span className="text-secondary">That Scale.</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg text-secondary font-mono">
            <span>Distributed Machine Learning</span>
            <span className="hidden md:inline">•</span>
            <span>LLM Agents</span>
            <span className="hidden md:inline">•</span>
            <span>AI Research</span>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-sm text-secondary uppercase tracking-widest font-mono">Featured Work</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-secondary w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
