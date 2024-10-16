import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// Import Docusaurus CSS (which includes the Prism theme)

export function CodeBlock({
  language,
  value,
}: {
  language: string;
  value: string;
}) {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
}

export function MarkdownRenderer({ mdx }: { mdx: string }) {
  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {mdx}
    </ReactMarkdown>
  );
}
