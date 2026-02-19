import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button', () => {
  it('renders children text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders as link when href is provided', () => {
    render(<Button href="/test">Link button</Button>);
    expect(screen.getByRole('link', { name: /Link button/i })).toHaveAttribute('href', '/test');
  });

  it('renders as button when no href', () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument();
  });

  it('renders arrow icon when icon prop is true', () => {
    render(<Button icon>With icon</Button>);
    const svg = screen.getByText('With icon').closest('button')?.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
