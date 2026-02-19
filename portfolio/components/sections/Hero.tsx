import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { GridBackground } from '@/components/effects/GridBackground';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function Hero({ title, subtitle, ctaText, ctaHref }: HeroProps) {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center py-10 lg:py-12">
      <GridBackground />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
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
        </div>
      </Container>
    </section>
  );
}
