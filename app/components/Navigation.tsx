'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="py-6 w-full">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-medium text-lg transition-opacity hover:opacity-70">
          Your Name
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <Link 
              href="/" 
              className={`transition-all ${pathname === '/' 
                ? 'border-b-2 border-foreground' 
                : 'hover:opacity-70'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className={`transition-all ${pathname === '/projects' 
                ? 'border-b-2 border-foreground' 
                : 'hover:opacity-70'}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/blog" 
              className={`transition-all ${pathname === '/blog' 
                ? 'border-b-2 border-foreground' 
                : 'hover:opacity-70'}`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}