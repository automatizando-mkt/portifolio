import { Hero } from '@/components/sections/Hero';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { CasePreview } from '@/components/sections/CasePreview';
import { HomeContactForm } from '@/components/sections/HomeContactForm';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/layout/Container';
import { FadeSlideIn } from '@/components/effects/FadeSlideIn';
import { SERVICES } from '@/content/services';

export default function HomePage() {
  return (
    <>
      <FadeSlideIn>
        <Hero
          title="Automatizo processos. Acelero resultados."
          subtitle="Transformo operações manuais em fluxos inteligentes com IA — gerando economia, velocidade e escala para o seu negócio."
          ctaText="Ver Cases"
          ctaHref="/cases"
          showHeroImage
        />
      </FadeSlideIn>

      <FadeSlideIn delay={0.2}>
        <ValueProposition />
      </FadeSlideIn>

      <FadeSlideIn delay={0.3}>
        <section className="border-t border-white/5 py-24">
          <Container>
            <SectionHeading label="Serviços" title="Serviços de Automação com IA" />
            <p className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-neutral-400">
              Soluções sob medida para transformar seus processos e acelerar resultados com
              inteligência artificial.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {SERVICES.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      <FadeSlideIn delay={0.4}>
        <CasePreview />
      </FadeSlideIn>

      <FadeSlideIn delay={0.6}>
        <HomeContactForm />
      </FadeSlideIn>
    </>
  );
}
