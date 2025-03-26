import Link from 'next/link';
import Image from 'next/image';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  coverImage?: string;
  tags?: string[];
}

export default function BlogPostCard({
  title,
  excerpt,
  date,
  slug,
  coverImage,
  tags = [],
}: BlogPostCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link 
      href={`/blog/${slug}`}
      className="block group border border-black/10 dark:border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
    >
      <article className="flex flex-col h-full">
        {coverImage && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <time dateTime={date} className="text-sm text-black/60 dark:text-white/60 mb-2">
            {formattedDate}
          </time>
          <h3 className="text-xl font-medium mb-2 transition-colors group-hover:text-black/80 dark:group-hover:text-white/80">
            {title}
          </h3>
          <p className="text-black/70 dark:text-white/70 mb-4 flex-grow">{excerpt}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-black/5 dark:bg-white/10 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}