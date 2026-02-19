import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/sections/Hero';

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;
});

describe('Hero', () => {
  it('renders title', () => {
    render(<Hero title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<Hero title="Title" subtitle="Subtitle text" />);
    expect(screen.getByText('Subtitle text')).toBeInTheDocument();
  });

  it('renders CTA button when provided', () => {
    render(<Hero title="Title" ctaText="Click" ctaHref="/test" />);
    expect(screen.getByRole('link', { name: /Click/i })).toHaveAttribute('href', '/test');
  });

  it('does not render CTA when not provided', () => {
    render(<Hero title="Title" />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
