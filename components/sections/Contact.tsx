"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { social } from "@/data/social";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${social.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: social.linkedin,
    icon: ExternalLink,
  },
  {
    label: "GitHub",
    href: social.github,
    icon: Code2,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12"
        >
          Let&apos;s build something.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-8"
        >
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              className="group flex flex-col items-center gap-3 text-secondary hover:text-foreground transition-colors"
            >
              <div className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center group-hover:border-accent/30 transition-colors">
                <link.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-mono">{link.label}</span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
