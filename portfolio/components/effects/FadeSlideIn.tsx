'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeSlideInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeSlideIn({ children, delay = 0, className }: FadeSlideInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && 'animate-fade-slide-in',
        className,
      )}
      style={{ animationDelay: isVisible ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
}
