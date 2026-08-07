import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Research", href: "/#research" },
  { name: "Experience", href: "/#experience" },
  { name: "Blog", href: "/blog" },
  { name: "Skills", href: "/#skills" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading font-black text-2xl tracking-tight text-foreground">
          SS
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
