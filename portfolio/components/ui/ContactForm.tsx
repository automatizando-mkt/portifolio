'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const WEBHOOK_URL =
  'https://webhooks.automatizando.site/webhook/lead-capture-automatizando-738777f5-4589-4f7a-89d5-d7f8c4d67fe0';

const inputClasses =
  'w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-canvas-accent focus:outline-none transition-colors';

const labelClasses = 'block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: data.get('name') as string,
      email: data.get('email') as string,
      phone: data.get('phone') as string,
      company: data.get('company') as string,
      projectDescription: data.get('message') as string,
      origem: 'Página de Contato',
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Erro na resposta do servidor');
      setSubmitted(true);
    } catch {
      setError('Não foi possível enviar. Tente novamente ou entre em contato pelo WhatsApp.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-green-500/30 bg-green-500/5 p-8 text-center">
        <p className="text-lg font-medium text-green-400">
          Mensagem enviada! Em breve entraremos em contato.
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
        <label htmlFor="phone" className={labelClasses}>
          Telefone / WhatsApp *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="(00) 00000-0000"
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

      {error && (
        <div className="border border-red-500/30 bg-red-500/5 px-4 py-3">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      <Button type="submit" icon disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>
    </form>
  );
}
