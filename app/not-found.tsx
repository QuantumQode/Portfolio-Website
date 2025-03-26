import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Your Name",
};

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-2xl mb-8">Page Not Found</h2>
        <p className="text-black/70 dark:text-white/70 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-foreground text-background rounded-md inline-block transition-opacity hover:opacity-90"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}