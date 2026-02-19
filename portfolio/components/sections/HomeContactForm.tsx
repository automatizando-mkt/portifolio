'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

const inputClasses =
  'w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-canvas-accent focus:outline-none transition-colors';

const labelClasses = 'block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2';

export function HomeContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="border-t border-white/5 py-24">
      <Container>
        <SectionHeading label="Contato" title="Pronto para automatizar?" />
        <p className="mb-10 max-w-xl text-lg font-light text-neutral-400">
          Vamos conversar sobre como a automação com IA pode transformar seus processos e gerar
          resultados reais.
        </p>

        {submitted ? (
          <div className="border border-green-500/30 bg-green-500/5 p-8 text-center">
            <p className="text-lg font-medium text-green-400">
              Obrigado! Em breve esta funcionalidade estará ativa.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="home-name" className={labelClasses}>
                Nome Completo *
              </label>
              <input
                id="home-name"
                name="name"
                type="text"
                required
                minLength={2}
                placeholder="Seu nome completo"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="home-whatsapp" className={labelClasses}>
                Telefone WhatsApp *
              </label>
              <input
                id="home-whatsapp"
                name="whatsapp"
                type="tel"
                required
                placeholder="+55 (XX) XXXXX-XXXX"
                className={inputClasses}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="home-email" className={labelClasses}>
                Email *
              </label>
              <input
                id="home-email"
                name="email"
                type="email"
                required
                placeholder="seu@email.com"
                className={inputClasses}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="home-message" className={labelClasses}>
                Mensagem *
              </label>
              <textarea
                id="home-message"
                name="message"
                required
                minLength={10}
                rows={4}
                placeholder="Conte sobre seu projeto ou necessidade..."
                className={inputClasses}
              />
            </div>

            <div className="md:col-span-2">
              <Button type="submit" icon>
                Enviar Mensagem
              </Button>
            </div>
          </form>
        )}
      </Container>
    </section>
  );
}
