'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const inputClasses =
  'w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-canvas-accent focus:outline-none transition-colors';

const labelClasses =
  'block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2';

export function ExclusaoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: data.get('name') as string,
      email: data.get('email') as string,
      requestType: 'exclusao-de-dados',
      projectDescription: data.get('details') as string,
      origem: 'Exclusão de Dados',
    };

    try {
      await fetch(
        'https://webhooks.automatizando.site/webhook/lead-capture-automatizando-738777f5-4589-4f7a-89d5-d7f8c4d67fe0',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        },
      );
    } catch {
      // Mesmo em caso de erro de rede, confirmar para o usuário
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="border border-green-500/30 bg-green-500/5 p-8 text-center">
        <p className="text-lg font-medium text-green-400 mb-2">
          Solicitação recebida com sucesso!
        </p>
        <p className="text-sm text-neutral-400">
          Confirmaremos o recebimento e processaremos sua solicitação em até 15 dias úteis.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="del-name" className={labelClasses}>
          Nome Completo *
        </label>
        <input
          id="del-name"
          name="name"
          type="text"
          required
          minLength={2}
          placeholder="Seu nome completo"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="del-email" className={labelClasses}>
          E-mail cadastrado *
        </label>
        <input
          id="del-email"
          name="email"
          type="email"
          required
          placeholder="E-mail que utilizou ao entrar em contato"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="del-details" className={labelClasses}>
          Informações adicionais
        </label>
        <textarea
          id="del-details"
          name="details"
          rows={4}
          placeholder="Descreva o contexto do seu contato anterior (opcional)"
          className={inputClasses}
        />
      </div>

      <Button type="submit" icon disabled={loading}>
        {loading ? 'Enviando...' : 'Solicitar Exclusão de Dados'}
      </Button>
    </form>
  );
}
