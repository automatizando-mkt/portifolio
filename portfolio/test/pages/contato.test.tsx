import { render, screen, fireEvent } from '@testing-library/react';
import ContatoPage from '@/app/contato/page';

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;
});

describe('ContatoPage', () => {
  it('renders page heading', () => {
    render(<ContatoPage />);
    expect(screen.getByText('Entre em Contato')).toBeInTheDocument();
  });

  it('renders all form fields', () => {
    render(<ContatoPage />);
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Empresa/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
  });

  it('renders required attributes on mandatory fields', () => {
    render(<ContatoPage />);
    expect(screen.getByLabelText(/^Nome/)).toBeRequired();
    expect(screen.getByLabelText(/^Email/)).toBeRequired();
    expect(screen.getByLabelText(/^Mensagem/)).toBeRequired();
    expect(screen.getByLabelText(/^Empresa/)).not.toBeRequired();
  });

  it('renders contact info', () => {
    render(<ContatoPage />);
    expect(screen.getByText('contato@automatizando.com')).toBeInTheDocument();
    expect(screen.getByText('Brasil — Remoto')).toBeInTheDocument();
  });

  it('shows success message on submit', () => {
    render(<ContatoPage />);
    const form = screen.getByRole('button', { name: /Enviar Mensagem/i }).closest('form')!;
    fireEvent.submit(form);
    expect(screen.getByText(/Obrigado/)).toBeInTheDocument();
  });
});
