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
      className="block border border-black/10 rounded-lg overflow-hidden bg-white shadow-sm"
    >
      <article className="flex flex-col h-full">
        {coverImage && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <time dateTime={date} className="text-sm text-black/60 mb-2">
            {formattedDate}
          </time>
          <h3 className="text-xl font-medium mb-2">
            {title}
          </h3>
          <p className="text-black/70 mb-4 flex-grow">{excerpt}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-black/5 text-xs rounded"
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