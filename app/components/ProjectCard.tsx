import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col overflow-hidden border border-black/10 rounded-lg bg-white shadow-sm">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-black/70 dark:text-white/70 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-black/5 dark:bg-white/10 text-sm rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {projectUrl && (
            <Link 
              href={projectUrl}
              className="px-4 py-2 bg-black text-white rounded-md flex-1 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </Link>
          )}
          {githubUrl && (
            <Link 
              href={githubUrl}
              className="px-4 py-2 bg-transparent border border-black/20 rounded-md flex-1 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}