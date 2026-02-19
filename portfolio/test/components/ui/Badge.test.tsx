import { render, screen } from '@testing-library/react';
import { Badge } from '@/components/ui/Badge';

describe('Badge', () => {
  it('renders children text', () => {
    render(<Badge>Next.js</Badge>);
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  it('renders default variant with neutral text', () => {
    render(<Badge>Test</Badge>);
    const badge = screen.getByText('Test');
    expect(badge.className).toContain('text-neutral-400');
  });

  it('renders accent variant with accent text', () => {
    render(<Badge variant="accent">Accent</Badge>);
    const badge = screen.getByText('Accent');
    expect(badge.className).toContain('text-canvas-accent');
  });
});
