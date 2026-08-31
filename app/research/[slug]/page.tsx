import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";

const researchNotes = [
  {
    slug: "brain-mri-segmentation",
    title: "Brain MRI Tumor Segmentation with 3D U-Net",
    date: "2025-06-20",
    excerpt: "An iterative study of 3D U-Net and EfficientNet-based architectures for volumetric brain tumor segmentation, including attention-enhanced experiments.",
  },
  {
    slug: "speech-emotion-recognition",
    title: "Building Speech Emotion Recognition with MFCC and CNN",
    date: "2025-08-15",
    excerpt: "A practical look at audio preprocessing, MFCC feature extraction, CNN classification, and evaluation for speech emotion recognition.",
  },
  {
    slug: "weather-prediction",
    title: "City-Specific Weather Prediction with Gradient Boosting",
    date: "2025-04-10",
    excerpt: "Lessons from building a city-specific weather prediction pipeline using historical observations and gradient boosting models.",
  },
];

export function generateStaticParams() {
  return researchNotes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = researchNotes.find((entry) => entry.slug === slug);
  if (!note) return { title: "Research Note Not Found" };
  return { title: note.title, description: note.excerpt };
}

export default async function ResearchNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = researchNotes.find((entry) => entry.slug === slug);
  if (!note) notFound();

  return (
    <article className="container mx-auto px-6 py-24 max-w-4xl">
      <Link href="/research" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors mb-10">
        <ArrowLeft className="w-4 h-4" /> Back to Research
      </Link>
      <div className="flex items-center gap-2 text-xs text-secondary font-mono mb-4"><Calendar className="w-3 h-3" />{note.date}</div>
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">{note.title}</h1>
      <p className="text-secondary text-lg leading-relaxed mb-10 max-w-3xl">{note.excerpt}</p>
      <div className="prose prose-invert max-w-none">
        <p className="text-secondary">This research note is a placeholder. Full content will be added here.</p>
      </div>
    </article>
  );
}
