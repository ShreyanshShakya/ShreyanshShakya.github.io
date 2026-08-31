import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { social } from "@/data/social";
import { StructuredData } from "@/components/seo/StructuredData";
import { PlausibleAnalytics } from "@/components/analytics/PlausibleAnalytics";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });

const siteUrl = "https://shreyanshshakya.github.io";
const siteName = "Shreyansh Shakya";

export const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  title: {
    default: "Shreyansh Shakya — AI Engineer & ML Practitioner",
    template: "%s | Shreyansh Shakya",
  },
  description: "AI engineer building practical machine learning applications across medical imaging, speech emotion recognition, and weather prediction using Python, TensorFlow, PyTorch, and modern machine learning methods.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Python",
    "TensorFlow",
    "PyTorch",
    "3D U-Net",
    "EfficientNet",
    "CNN",
    "XGBoost",
    "CatBoost",
    "LightGBM",
    "Medical AI",
    "Speech Emotion Recognition",
    "Weather Prediction",
  ],
  authors: [{ name: "Shreyansh Shakya", url: social.github }],
  creator: "Shreyansh Shakya",
  publisher: "Shreyansh Shakya",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Shreyansh Shakya — AI Engineer & ML Practitioner",
    description: "AI engineer building practical machine learning applications across medical imaging, speech emotion recognition, and weather prediction.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Shreyansh Shakya — AI Engineer & ML Practitioner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyansh Shakya — AI Engineer & ML Practitioner",
    description: "AI engineer building practical machine learning applications across medical imaging, speech emotion recognition, and weather prediction.",
    images: ["/og-image.png"],
    creator: "@ShreyanshShakya",
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon-16x16.png", apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://www.linkedin.com" />
        <PlausibleAnalytics />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <CursorGlow />
        <StructuredData />
        <Navbar />
        <main className="grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
