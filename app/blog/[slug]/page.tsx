import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Example blog posts data - replace with your actual blog posts or CMS integration
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js and TypeScript",
    slug: "getting-started-with-nextjs-and-typescript",
    date: "2025-03-15",
    content: `
# Getting Started with Next.js and TypeScript

Next.js and TypeScript are a powerful combination for building modern web applications. This guide will walk you through setting up a new project with both technologies.

## Prerequisites

Before you begin, make sure you have the following installed:
- Node.js (v14 or later)
- npm or yarn

## Setting Up Your Project

The easiest way to get started is to use the Next.js CLI:

\`\`\`bash
npx create-next-app@latest my-app --typescript
\`\`\`

This command creates a new Next.js project with TypeScript configuration already set up for you.

## Understanding the Project Structure

After setting up, your project will have the following structure:

\`\`\`
my-app/
  ├── node_modules/
  ├── public/
  ├── src/
  │   ├── app/
  │   │   ├── layout.tsx
  │   │   └── page.tsx
  │   └── ...
  ├── .eslintrc.json
  ├── .gitignore
  ├── next-env.d.ts
  ├── next.config.mjs
  ├── package.json
  ├── README.md
  ├── tsconfig.json
  └── ...
\`\`\`

## Key Benefits of Using TypeScript with Next.js

1. **Type Safety**: Catch errors during development rather than at runtime
2. **Better Documentation**: Types serve as documentation for your code
3. **Improved Developer Experience**: Better intellisense and code completion
4. **Enhanced Refactoring**: Makes changes to your codebase safer

## Building Your First Component

Let's create a simple component with TypeScript:

\`\`\`tsx
// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button
      onClick={onClick}
      className={\`px-4 py-2 rounded \${
        variant === 'primary' 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-200 text-gray-800'
      }\`}
    >
      {text}
    </button>
  );
};

export default Button;
\`\`\`

## Conclusion

Now you have a basic Next.js project with TypeScript set up! From here, you can start building your application with the benefits of type safety and all the features Next.js offers.

Stay tuned for more tutorials on advanced Next.js and TypeScript patterns.
    `,
    coverImage: "/blog/nextjs-typescript-placeholder.jpg", // Replace with actual image
    tags: ["Next.js", "TypeScript", "Web Development"],
  },
  {
    id: 2,
    title: "Designing Minimalist User Interfaces",
    slug: "designing-minimalist-user-interfaces",
    date: "2025-03-01",
    content: `
# Designing Minimalist User Interfaces

Minimalism in user interface design is not just an aesthetic choice—it's a functional approach that can significantly improve user experience. This article explores the principles of minimalist design and how to apply them effectively.

## Core Principles of Minimalist UI Design

### 1. Remove the Unnecessary

The foundation of minimalist design is to remove anything that doesn't serve a purpose. For every element on your interface, ask:
- Does it serve a clear purpose?
- Would removing it affect functionality or clarity?
- Is there a simpler way to achieve the same goal?

### 2. Thoughtful Use of Space

Minimalist design leverages white space (or negative space) deliberately:
- Use generous margins and padding
- Allow elements to "breathe" with proper spacing
- Group related elements to create visual hierarchy

### 3. Limited Color Palette

A focused color scheme enhances minimalist design:
- Choose 1-3 primary colors
- Add 1-2 accent colors for emphasis
- Use color consistently and with purpose

### 4. Typography Matters

Typography plays a crucial role in minimalist interfaces:
- Select 1-2 typefaces maximum
- Choose fonts with good readability
- Use font weights for hierarchy instead of different fonts

## Practical Implementation Tips

### Focus on Functionality First

Before considering aesthetics, ensure your interface functions smoothly:
- Map out the user journey
- Identify essential functions
- Design clear interaction patterns

### Use Visual Hierarchy Effectively

Guide users through content with thoughtful hierarchy:
- Make important elements stand out
- Use size, weight, and position for emphasis
- Create clear paths for the user's eye to follow

### Embrace Consistency

Consistency creates a seamless experience:
- Maintain uniform spacing
- Use the same interaction patterns throughout
- Apply colors consistently for similar actions

## Examples in Practice

Let's look at some examples of effective minimalist interfaces:

### Apple.com
- Clean layout with significant white space
- Limited color palette with focused imagery
- Typography does heavy lifting for information hierarchy

### Google Search
- Stripped back to essential functionality
- Clear, distinct interactive elements
- Thoughtful spacing for readability

## Conclusion

Minimalist UI design is not about making things look empty or austere—it's about intentionality and focus. By removing distractions and highlighting what's important, you create interfaces that are both aesthetically pleasing and highly functional.

Remember that minimalism is not one-size-fits-all. The right balance depends on your users' needs, your brand identity, and the specific tasks your interface needs to support.
    `,
    coverImage: "/blog/minimalist-ui-placeholder.jpg", // Replace with actual image
    tags: ["Design", "UI/UX", "Minimalism"],
  },
];

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  
  return {
    title: `${post.title} | Your Name`,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  // Simple Markdown to HTML conversion (for a real site, use a proper Markdown library)
  function renderMarkdown(content: string) {
    let html = content
      // Headers
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
      // Bold and italic
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      // Lists
      .replace(/^\- (.*$)/gim, '<li class="ml-6 list-disc mb-1">$1</li>')
      .replace(/<\/li>\n<li/gim, '</li><li')
      .replace(/<\/li>\n\n<li/gim, '</li></ul><ul class="my-4"><li')
      .replace(/^<li/gim, '<ul class="my-4"><li')
      .replace(/<\/li>$/gim, '</li></ul>')
      // Code blocks
      .replace(/```(.*)\n([\s\S]*?)\n```/gim, '<pre class="bg-black/5 dark:bg-white/5 p-4 rounded-md overflow-auto my-4 font-mono text-sm"><code>$2</code></pre>')
      // Inline code
      .replace(/`([^`]+)`/gim, '<code class="bg-black/5 dark:bg-white/5 px-1 py-0.5 rounded font-mono text-sm">$1</code>')
      // Paragraphs
      .replace(/^\s*(\n)?(.+)/gim, function(m) {
        return /\<(\/)?(h1|h2|h3|h4|h5|h6|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p class="mb-4 leading-relaxed">'+m+'</p>';
      })
      // Fix empty paragraphs
      .replace(/<p>\s*<\/p>/gim, '')
      // Fix paragraph breaks
      .replace(/<\/p><p>/gim, '</p>\n<p>');
      
    return { __html: html };
  }

  return (
    <div className="container-narrow py-16">
      <div className="mb-8">
        <Link href="/blog" className="flex items-center gap-2 text-black/70 dark:text-white/70 transition-colors hover:text-foreground mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to all posts
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-black/60 dark:text-white/60 mb-6">
          <time dateTime={post.date}>{formattedDate}</time>
          <div className="h-1 w-1 rounded-full bg-current"></div>
          <span>5 min read</span>
        </div>
        
        {post.coverImage && (
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-black/5 dark:bg-white/10 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={renderMarkdown(post.content)} />
      </article>
      
      <div className="mt-16 border-t border-black/10 dark:border-white/10 pt-8">
        <h3 className="text-xl font-bold mb-4">Share this article</h3>
        <div className="flex gap-4">
          <a 
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://yourwebsite.com/blog/${post.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-black/10 dark:border-white/10 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Share on Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a 
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yourwebsite.com/blog/${post.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-black/10 dark:border-white/10 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Share on LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a 
            href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`I thought you might be interested in this article: https://yourwebsite.com/blog/${post.slug}`)}`}
            className="p-2 border border-black/10 dark:border-white/10 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Share via Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
              <line x1="22" y1="7" x2="12" y2="13"></line>
              <line x1="2" y1="7" x2="12" y2="13"></line>
              <line x1="12" y1="13" x2="12" y2="4"></line>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="text-xl font-bold mb-6">You might also like</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.filter(p => p.slug !== post.slug).slice(0, 2).map((relatedPost) => (
            <Link
              key={relatedPost.id}
              href={`/blog/${relatedPost.slug}`}
              className="group flex gap-4 items-start"
            >
              <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={relatedPost.coverImage}
                  alt={relatedPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium group-hover:underline">{relatedPost.title}</h4>
                <time dateTime={relatedPost.date} className="text-sm text-black/60 dark:text-white/60">
                  {new Date(relatedPost.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}