import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { GridBackground } from '@/components/effects/GridBackground';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  showHeroImage?: boolean;
}

export function Hero({ title, subtitle, ctaText, ctaHref, showHeroImage = false }: HeroProps) {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center py-10 lg:py-12">
      <GridBackground />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className={showHeroImage ? 'lg:col-span-6' : 'lg:col-span-7'}>
            <h1 className="text-4xl font-medium leading-[0.9] tracking-tighter text-white md:text-5xl lg:text-[5.5rem] xl:text-[6.5rem]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-neutral-400">
                {subtitle}
              </p>
            )}
            {ctaText && ctaHref && (
              <div className="mt-8">
                <Button href={ctaHref} icon>
                  {ctaText}
                </Button>
              </div>
            )}
          </div>

          {showHeroImage && (
            <div className="hidden lg:flex lg:col-span-6 items-center justify-center">
              <div className="relative w-full max-w-lg">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-canvas-accent/10 blur-3xl" />
                <Image
                  src="/hero-image.jpg"
                  alt="Automação com Inteligência Artificial"
                  width={600}
                  height={500}
                  className="w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
