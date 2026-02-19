import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function Card({ children, className, href }: CardProps) {
  const classes = cn(
    'border border-white/10 bg-canvas-surface p-8 group hover:border-canvas-accent/30 hover:-translate-y-1 transition-all duration-300',
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, 'block')}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
