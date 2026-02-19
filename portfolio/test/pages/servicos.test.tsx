import { render, screen } from '@testing-library/react';
import ServicosPage from '@/app/servicos/page';

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;
});

describe('ServicosPage', () => {
  it('renders page heading', () => {
    render(<ServicosPage />);
    expect(screen.getByText('Serviços de Automação com IA')).toBeInTheDocument();
  });

  it('renders all 6 services', () => {
    render(<ServicosPage />);
    expect(screen.getByText('Automação de Processos')).toBeInTheDocument();
    expect(screen.getByText('Chatbots & Assistentes IA')).toBeInTheDocument();
    expect(screen.getByText('Integração de Sistemas')).toBeInTheDocument();
    expect(screen.getByText('Dashboards & Relatórios')).toBeInTheDocument();
    expect(screen.getByText('Automação de Marketing')).toBeInTheDocument();
    expect(screen.getByText('Consultoria em Automação')).toBeInTheDocument();
  });

  it('renders service benefits', () => {
    render(<ServicosPage />);
    expect(screen.getByText('• Redução de erros')).toBeInTheDocument();
    expect(screen.getByText('• Atendimento instantâneo')).toBeInTheDocument();
  });

  it('renders CTA with link to contato', () => {
    render(<ServicosPage />);
    expect(screen.getByRole('link', { name: /Fale Comigo/i })).toHaveAttribute('href', '/contato');
  });
});
