import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-heading font-bold text-foreground mt-12 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-heading font-semibold text-foreground mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-heading font-medium text-foreground mt-6 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-secondary leading-relaxed mb-4">{children}</p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-accent hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-secondary space-y-2 mb-4 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-secondary space-y-2 mb-4 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-accent/50 pl-4 italic text-secondary my-6">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="font-mono text-sm bg-card px-1.5 py-0.5 rounded text-accent">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-card border border-border rounded-xl p-6 overflow-x-auto my-6 font-mono text-sm">
        {children}
      </pre>
    ),
    ...components,
  };
}
