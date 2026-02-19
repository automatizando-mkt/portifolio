import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'default' | 'lg';
  href?: string;
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  variant = 'primary',
  size = 'default',
  href,
  children,
  icon = false,
  className,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center gap-3 font-medium uppercase tracking-wider text-sm transition-all duration-300';

  const variants = {
    primary: 'group relative border border-neutral-800 hover:border-canvas-accent hover:bg-canvas-accent hover:text-black text-white',
    outline: 'border border-white/10 hover:border-canvas-accent/30 text-white',
    ghost: 'text-neutral-400 hover:text-canvas-accent',
  };

  const sizes = {
    default: 'px-6 py-3',
    lg: 'px-8 py-4',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {variant === 'primary' && (
        <>
          <span className="absolute top-0 left-0 h-2 w-2 border-t border-l border-canvas-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-canvas-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </>
      )}
      {children}
      {icon && <ArrowUpRight className="h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
