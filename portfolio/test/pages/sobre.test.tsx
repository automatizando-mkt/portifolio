import { render, screen } from '@testing-library/react';
import SobrePage from '@/app/sobre/page';

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;
});

describe('SobrePage', () => {
  it('renders name and title', () => {
    render(<SobrePage />);
    expect(screen.getByText('Gabriel')).toBeInTheDocument();
    expect(screen.getByText('Gestor de Automação com IA')).toBeInTheDocument();
  });

  it('renders all 6 expertise cards', () => {
    render(<SobrePage />);
    expect(screen.getByText('Automação de Processos')).toBeInTheDocument();
    expect(screen.getByText('Inteligência Artificial')).toBeInTheDocument();
    expect(screen.getByText('Integração de Sistemas')).toBeInTheDocument();
    expect(screen.getByText('Análise de Dados')).toBeInTheDocument();
    expect(screen.getByText('Chatbots & Assistentes')).toBeInTheDocument();
    expect(screen.getByText('Consultoria Estratégica')).toBeInTheDocument();
  });

  it('renders technology badges', () => {
    render(<SobrePage />);
    expect(screen.getByText('n8n')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });

  it('renders CTA with link to contato', () => {
    render(<SobrePage />);
    expect(screen.getByRole('link', { name: /Fale Comigo/i })).toHaveAttribute('href', '/contato');
  });
});
