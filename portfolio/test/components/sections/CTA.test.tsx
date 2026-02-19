import { render, screen } from '@testing-library/react';
import { CTA } from '@/components/sections/CTA';

describe('CTA', () => {
  it('renders title and button', () => {
    render(<CTA title="Ready?" buttonText="Contact" href="/contato" />);
    expect(screen.getByText('Ready?')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/i })).toHaveAttribute('href', '/contato');
  });

  it('renders description when provided', () => {
    render(<CTA title="Title" description="Description text" buttonText="Go" href="/" />);
    expect(screen.getByText('Description text')).toBeInTheDocument();
  });
});
