'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/navigation';

interface MobileMenuProps {
  pathname: string;
}

export function MobileMenu({ pathname }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-neutral-400 hover:text-white transition-colors p-1"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <>
          {/* Overlay de fundo — totalmente sólido para bloquear o conteúdo */}
          <div
            className="fixed inset-0 top-16 z-40"
            style={{ background: '#050505' }}
            onClick={() => setIsOpen(false)}
          />

          {/* Painel do menu — sobre o overlay */}
          <div className="fixed inset-x-0 top-16 z-50" style={{ background: '#050505' }}>
            {/* Linha decorativa superior com gradiente laranja */}
            <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, #F97316 50%, transparent)' }} />

            <nav className="flex flex-col">
              {NAV_ITEMS.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'group relative flex items-center gap-4 px-6 py-6 transition-all duration-200',
                      isActive
                        ? 'bg-white/5'
                        : 'hover:bg-white/[0.03]',
                    )}
                  >
                    {/* Borda laranja à esquerda para item ativo */}
                    <div
                      className={cn(
                        'absolute left-0 top-0 h-full w-0.5 transition-all duration-200',
                        isActive ? 'bg-[#F97316]' : 'bg-transparent group-hover:bg-[#F97316]/40',
                      )}
                    />

                    {/* Número do item */}
                    <span
                      className={cn(
                        'font-mono text-xs tabular-nums',
                        isActive ? 'text-[#F97316]' : 'text-neutral-700',
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Label */}
                    <span
                      className={cn(
                        'font-mono text-xl uppercase tracking-widest',
                        isActive ? 'text-white' : 'text-neutral-300',
                      )}
                    >
                      {item.label}
                    </span>

                    {/* Indicador → para item ativo */}
                    {isActive && (
                      <span className="ml-auto text-[#F97316] font-mono text-sm">→</span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Rodapé do menu */}
            <div className="px-6 py-5 border-t border-white/5">
              <p className="font-mono text-xs text-neutral-700 uppercase tracking-widest">
                automatizando.site
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
