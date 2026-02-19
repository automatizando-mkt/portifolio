import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram, Phone } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/navigation';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo-icon.png"
                alt="Automatizando Soluções"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-xs font-mono uppercase tracking-widest text-white">
                Automatizando
              </span>
            </div>
            <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
              Automações inteligentes que transformam operações e geram resultados mensuráveis.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-500 hover:text-canvas-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@automatizando.com"
                  className="text-sm text-neutral-500 hover:text-canvas-accent transition-colors"
                >
                  contato@automatizando.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-canvas-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-canvas-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-canvas-accent transition-colors"
                  aria-label="WhatsApp"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Automatizando Soluções. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
