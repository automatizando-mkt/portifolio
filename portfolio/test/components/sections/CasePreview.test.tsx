import { render, screen } from '@testing-library/react';
import { CasePreview } from '@/components/sections/CasePreview';

describe('CasePreview', () => {
  it('renders section heading', () => {
    render(<CasePreview />);
    expect(screen.getByText('Cases em Destaque')).toBeInTheDocument();
  });

  it('renders all 3 case cards', () => {
    render(<CasePreview />);
    expect(screen.getByText('Automação de Pipeline de Vendas')).toBeInTheDocument();
    expect(screen.getByText('Chatbot de Suporte com IA')).toBeInTheDocument();
    expect(screen.getByText('Dashboard de Métricas Automatizado')).toBeInTheDocument();
  });

  it('renders metrics', () => {
    render(<CasePreview />);
    expect(screen.getByText('+45%')).toBeInTheDocument();
    expect(screen.getByText('-60%')).toBeInTheDocument();
    expect(screen.getByText('100+')).toBeInTheDocument();
  });

  it('renders "Ver todos os cases" link', () => {
    render(<CasePreview />);
    expect(screen.getByRole('link', { name: /Ver todos os cases/i })).toHaveAttribute('href', '/cases');
  });
});
