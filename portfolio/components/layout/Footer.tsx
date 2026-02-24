import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram, Phone, Mail } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/navigation';
import { Container } from './Container';

const LEGAL_LINKS = [
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
  { label: 'Termos de Uso', href: '/termos-de-uso' },
  { label: 'Exclusão de Dados', href: '/exclusao-de-dados' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-main.png"
                alt="Automatizando Soluções"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
              Automações inteligentes que transformam operações e geram resultados mensuráveis.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/gabriel-automatizando-solucoes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-canvas-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/automatizando.solucoes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-canvas-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/5592981866864"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-canvas-accent transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
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

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((item) => (
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
                  href="mailto:contato@automatizando.site"
                  className="flex items-center gap-2 text-sm text-neutral-500 hover:text-canvas-accent transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  contato@automatizando.site
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5592981866864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-500 hover:text-canvas-accent transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  (92) 98186-6864
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-neutral-600">
              &copy; {new Date().getFullYear()} Automatizando Soluções LTDA — CNPJ: 54.536.607/0001-10.
              Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              {LEGAL_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-neutral-600 hover:text-canvas-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
