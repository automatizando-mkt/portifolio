import { cn } from '@/lib/utils';

interface GridBackgroundProps {
  className?: string;
}

export function GridBackground({ className }: GridBackgroundProps) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 z-0 grid-background', className)}
      aria-hidden="true"
    />
  );
}
