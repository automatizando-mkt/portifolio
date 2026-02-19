import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  label?: string;
  className?: string;
}

export function SectionHeading({ title, label, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', className)}>
      {label && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-canvas-accent">
          {label}
        </p>
      )}
      <h2 className="text-4xl font-medium text-white">{title}</h2>
    </div>
  );
}
