'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setIsTransitioning(true);
    
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <div
      className={`transition-opacity duration-300 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {displayChildren}
    </div>
  );
}