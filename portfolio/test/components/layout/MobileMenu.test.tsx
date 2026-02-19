import { render, screen, fireEvent } from '@testing-library/react';
import { MobileMenu } from '@/components/layout/MobileMenu';

describe('MobileMenu', () => {
  it('renders the menu toggle button', () => {
    render(<MobileMenu pathname="/" />);
    expect(screen.getByLabelText('Abrir menu')).toBeInTheDocument();
  });

  it('opens menu on click', () => {
    render(<MobileMenu pathname="/" />);
    fireEvent.click(screen.getByLabelText('Abrir menu'));
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByLabelText('Fechar menu')).toBeInTheDocument();
  });

  it('closes menu when a link is clicked', () => {
    render(<MobileMenu pathname="/" />);
    fireEvent.click(screen.getByLabelText('Abrir menu'));
    fireEvent.click(screen.getByRole('link', { name: 'Sobre' }));
    expect(screen.getByLabelText('Abrir menu')).toBeInTheDocument();
  });
});
