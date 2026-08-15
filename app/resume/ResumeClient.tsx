"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function ResumeClient() {
  const printResume = () => window.print();

  return (
    <main className="container mx-auto px-4 sm:px-6 py-20 sm:py-24 print:px-0 print:py-0">
      <motion.div