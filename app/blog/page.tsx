import BlogPostCard from "../components/BlogPostCard";

// Example blog posts data - replace with your actual blog posts or CMS integration
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js and TypeScript",
    slug: "getting-started-with-nextjs-and-typescript",
    date: "2025-03-15",
    excerpt: "Learn how to set up a new project with Next.js and TypeScript from scratch, and understand the key benefits of this powerful combination.",
    coverImage: "/blog/nextjs-typescript-placeholder.jpg", // Replace with actual image
    tags: ["Next.js", "TypeScript", "Web Development"],
  },
  {
    id: 2,
    title: "Designing Minimalist User Interfaces",
    slug: "designing-minimalist-user-interfaces",
    date: "2025-03-01",
    excerpt: "Explore the principles of minimalist design and how to apply them to create clean, functional, and aesthetically pleasing user interfaces.",
    coverImage: "/blog/minimalist-ui-placeholder.jpg", // Replace with actual image
    tags: ["Design", "UI/UX", "Minimalism"],
  },
  {
    id: 3,
    title: "Building a Blog with Next.js and Markdown",
    slug: "building-a-blog-with-nextjs-and-markdown",
    date: "2025-02-15",
    excerpt: "A step-by-step guide to creating a blog using Next.js with Markdown for content management, perfect for developers who want a simple yet powerful solution.",
    coverImage: "/blog/markdown-blog-placeholder.jpg", // Replace with actual image
    tags: ["Next.js", "Markdown", "Blog"],
  },
  {
    id: 4,
    title: "The Power of CSS Grid for Modern Layouts",
    slug: "the-power-of-css-grid-for-modern-layouts",
    date: "2025-02-01",
    excerpt: "Dive into CSS Grid and discover how it can transform your approach to web layout design with practical examples and techniques.",
    coverImage: "/blog/css-grid-placeholder.jpg", // Replace with actual image
    tags: ["CSS", "Layout", "Web Design"],
  },
  {
    id: 5,
    title: "Optimizing Performance in React Applications",
    slug: "optimizing-performance-in-react-applications",
    date: "2025-01-15",
    excerpt: "Learn advanced techniques for optimizing the performance of your React applications, from code splitting to memoization and beyond.",
    coverImage: "/blog/react-performance-placeholder.jpg", // Replace with actual image
    tags: ["React", "Performance", "JavaScript"],
  },
];

export const metadata = {
  title: "Blog | Your Name",
  description: "Articles and thoughts on web development, design, and technology",
};

export default function BlogPage() {
  return (
    <div className="container-wide py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-black/70 dark:text-white/70 max-w-2xl mx-auto">
          Thoughts, learnings, and insights on web development, design, and technology.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            slug={post.slug}
            coverImage={post.coverImage}
            tags={post.tags}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to the Newsletter</h2>
        <p className="text-black/70 dark:text-white/70 mb-6 max-w-2xl mx-auto">
          Get notified when I publish new articles and resources. No spam, unsubscribe any time.
        </p>
        <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-md border border-input bg-background"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-foreground text-background rounded-md transition-opacity hover:opacity-90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}