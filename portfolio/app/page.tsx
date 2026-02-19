import { Hero } from '@/components/sections/Hero';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { CasePreview } from '@/components/sections/CasePreview';
import { HomeContactForm } from '@/components/sections/HomeContactForm';
import { FadeSlideIn } from '@/components/effects/FadeSlideIn';

export default function HomePage() {
  return (
    <>
      <FadeSlideIn>
        <Hero
          title="Automatizo processos. Acelero resultados."
          subtitle="Transformo operações manuais em fluxos inteligentes com IA — gerando economia, velocidade e escala para o seu negócio."
          ctaText="Ver Cases"
          ctaHref="/cases"
        />
      </FadeSlideIn>

      <FadeSlideIn delay={0.2}>
        <ValueProposition />
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
