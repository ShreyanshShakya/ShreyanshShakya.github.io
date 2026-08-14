import Link from "next/link";
import { social } from "@/data/social";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-secondary text-sm">
          &copy; {new Date().getFullYear()} Shreyansh Shakya. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href={social.github} target="_blank" className="text-secondary hover:text-foreground transition-colors text-sm">
            GitHub
          </Link>
          <Link href={social.linkedin} target="_blank" className="text-secondary hover:text-foreground transition-colors text-sm">
            LinkedIn
          </Link>
          <Link href={`mailto:${social.email}`} className="text-secondary hover:text-foreground transition-colors text-sm">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
