import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/ui/ContactForm';
import { ContactInfo } from '@/components/sections/ContactInfo';
import { FadeSlideIn } from '@/components/effects/FadeSlideIn';

export const metadata: Metadata = {
  title: 'Contato | Portfólio',
  description: 'Entre em contato para discutir seu projeto de automação com IA.',
};

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <FadeSlideIn>
        <section className="py-24">
          <Container>
            <SectionHeading label="Contato" title="Entre em Contato" />
            <p className="max-w-2xl text-lg font-light leading-relaxed text-neutral-400">
              Vamos conversar sobre como automatizar seus processos
            </p>
          </Container>
        </section>
      </FadeSlideIn>

      {/* Form + Info */}
      <FadeSlideIn delay={0.2}>
        <section className="border-t border-white/5 py-24">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
              <div className="lg:col-span-5">
                <ContactInfo />
              </div>
            </div>
          </Container>
        </section>
      </FadeSlideIn>
    </>
  );
}
