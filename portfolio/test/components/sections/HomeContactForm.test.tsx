import { render, screen, fireEvent } from '@testing-library/react';
import { HomeContactForm } from '@/components/sections/HomeContactForm';

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;
});

describe('HomeContactForm', () => {
  it('renders heading', () => {
    render(<HomeContactForm />);
    expect(screen.getByText('Pronto para automatizar?')).toBeInTheDocument();
  });

  it('renders all form fields', () => {
    render(<HomeContactForm />);
    expect(screen.getByLabelText(/Nome Completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefone WhatsApp/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
  });

  it('shows success message on submit', () => {
    render(<HomeContactForm />);
    const form = screen.getByRole('button', { name: /Enviar Mensagem/i }).closest('form')!;
    fireEvent.submit(form);
    expect(screen.getByText(/Obrigado/)).toBeInTheDocument();
  });
});
