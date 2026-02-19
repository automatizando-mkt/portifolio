'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const inputClasses =
  'w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-canvas-accent focus:outline-none transition-colors';

const labelClasses = 'block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-green-500/30 bg-green-500/5 p-8 text-center">
        <p className="text-lg font-medium text-green-400">
          Obrigado! Em breve esta funcionalidade estará ativa.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Nome *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          placeholder="Seu nome"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="seu@email.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="company" className={labelClasses}>
          Empresa
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Nome da empresa (opcional)"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Conte sobre seu projeto ou necessidade..."
          className={inputClasses}
        />
      </div>

      <Button type="submit" icon>
        Enviar Mensagem
      </Button>
    </form>
  );
}
