'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="py-6 w-full">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-medium text-lg">
          Pouria Ghasemi
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <Link 
              href="/" 
              className={`${pathname === '/' 
                ? 'border-b-2 border-foreground' 
                : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className={`${pathname === '/projects' 
                ? 'border-b-2 border-foreground' 
                : ''}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/blog" 
              className={`${pathname === '/blog' 
                ? 'border-b-2 border-foreground' 
                : ''}`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}