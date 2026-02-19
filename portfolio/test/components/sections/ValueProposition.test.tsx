import { render, screen } from '@testing-library/react';
import { ValueProposition } from '@/components/sections/ValueProposition';

describe('ValueProposition', () => {
  it('renders section heading', () => {
    render(<ValueProposition />);
    expect(screen.getByText('Por que automatizar comigo')).toBeInTheDocument();
  });

  it('renders all 4 value proposition cards', () => {
    render(<ValueProposition />);
    expect(screen.getByText('Automação Inteligente')).toBeInTheDocument();
    expect(screen.getByText('Integração Total')).toBeInTheDocument();
    expect(screen.getByText('Resultados Mensuráveis')).toBeInTheDocument();
    expect(screen.getByText('Suporte Contínuo')).toBeInTheDocument();
  });
});
