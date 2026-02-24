import { Mail, Phone, Linkedin, Instagram, MapPin } from 'lucide-react';

const CONTACT_ITEMS = [
  { icon: Mail, label: 'contato@automatizando.site', href: 'mailto:contato@automatizando.site' },
  { icon: Phone, label: '(92) 98186-6864', href: 'https://wa.me/5592981866864', external: true },
  { icon: Linkedin, label: '/in/gabriel-automatizando-solucoes', href: 'https://www.linkedin.com/in/gabriel-automatizando-solucoes', external: true },
  { icon: Instagram, label: '@automatizando.solucoes', href: 'https://www.instagram.com/automatizando.solucoes', external: true },
  { icon: MapPin, label: 'Brasil — Remoto' },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-white">Informações de Contato</h3>
      <div className="space-y-4">
        {CONTACT_ITEMS.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5 shrink-0 text-canvas-accent" />
              <span className="text-neutral-400">{item.label}</span>
            </div>
          );

          if (item.href) {
            return (
              <a
                key={item.label}
                href={item.href}
                className="block transition-colors hover:text-white"
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {content}
              </a>
            );
          }

          return <div key={item.label}>{content}</div>;
        })}
      </div>
    </div>
  );
}
