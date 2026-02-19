import { render, screen } from '@testing-library/react';
import { Container } from '@/components/layout/Container';

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Test content</Container>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies max-width and padding classes', () => {
    render(<Container><span>Content</span></Container>);
    const container = screen.getByText('Content').closest('div')!;
    expect(container.className).toContain('max-w-');
    expect(container.className).toContain('mx-auto');
  });

  it('merges custom className', () => {
    render(<Container className="mt-8"><span>Content</span></Container>);
    const container = screen.getByText('Content').closest('div')!;
    expect(container.className).toContain('mt-8');
  });
});
