import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { CTA } from '@/components/sections/CTA';
import { FadeSlideIn } from '@/components/effects/FadeSlideIn';
import { SERVICES } from '@/content/services';

export const metadata: Metadata = {
  title: 'Serviços | Portfólio',
  description: 'Serviços de automação com IA para transformar seus processos.',
};

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <FadeSlideIn>
        <section className="py-24">
          <Container>
            <SectionHeading label="Serviços" title="Serviços de Automação com IA" />
            <p className="max-w-2xl text-lg font-light leading-relaxed text-neutral-400">
              Soluções sob medida para transformar seus processos e acelerar resultados com
              inteligência artificial.
            </p>
          </Container>
        </section>
      </FadeSlideIn>

      {/* Services Grid */}
      <FadeSlideIn delay={0.2}>
        <section className="border-t border-white/5 py-24">
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {SERVICES.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      {/* CTA */}
      <FadeSlideIn delay={0.4}>
        <CTA
          title="Tem um processo para automatizar?"
          description="Vamos conversar sobre como posso ajudar sua empresa"
          buttonText="Fale Comigo"
          href="/contato"
        />
      </FadeSlideIn>
    </>
  );
}
