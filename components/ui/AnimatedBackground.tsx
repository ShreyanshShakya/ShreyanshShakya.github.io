"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Engineering grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Connecting nodes */}
      <motion.div
        className="absolute left-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-accent/50 shadow-[0_0_16px_rgba(91,140,255,0.45)]"
        animate={{ opacity: [0.35, 0.8, 0.35], scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[18%] top-[30%] h-1.5 w-1.5 rounded-full bg-accent/40 shadow-[0_0_16px_rgba(91,140,255,0.35)]"
        animate={{ opacity: [0.25, 0.7, 0.25], scale: [1, 1.25, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[42%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-foreground/35 shadow-[0_0_14px_rgba(255,255,255,0.18)]"
        animate={{ opacity: [0.2, 0.55, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Connecting lines */}
      <motion.div
        className="absolute left-[12%] top-[18%] h-px w-[20%] origin-left bg-linear-to-r from-accent/40 to-transparent"
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[18%] top-[30%] h-px w-[22%] origin-left bg-linear-to-r from-accent/30 to-transparent"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
        animate={{
          x: ["0%", "20%", "0%"],
          y: ["0%", "10%", "0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-10 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-foreground) 0%, transparent 70%)",
        }}
        animate={{
          x: ["0%", "-20%", "0%"],
          y: ["0%", "-10%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
