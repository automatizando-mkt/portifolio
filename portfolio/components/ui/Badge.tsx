import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span className="beam-badge inline-flex">
      <span className="beam-badge-beam" />
      <span
        className={cn(
          'beam-badge-content block font-mono text-xs uppercase tracking-widest px-3 py-1',
          variant === 'accent' ? 'text-canvas-accent' : 'text-neutral-400',
        )}
      >
        {children}
      </span>
    </span>
  );
}
