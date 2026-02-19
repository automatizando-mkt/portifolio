import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

interface CTAProps {
  title: string;
  description?: string;
  buttonText: string;
  href: string;
}

export function CTA({ title, description, buttonText, href }: CTAProps) {
  return (
    <section className="border-t border-white/5 py-24">
      <Container className="text-center">
        <h2 className="text-4xl font-medium text-white">{title}</h2>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-lg font-light text-neutral-400">
            {description}
          </p>
        )}
        <div className="mt-8">
          <Button href={href} icon>
            {buttonText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
