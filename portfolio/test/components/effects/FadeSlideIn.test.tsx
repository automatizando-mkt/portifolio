import { render, screen } from '@testing-library/react';
import { FadeSlideIn } from '@/components/effects/FadeSlideIn';

beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;
});

describe('FadeSlideIn', () => {
  it('renders children', () => {
    render(<FadeSlideIn><span>Content</span></FadeSlideIn>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
