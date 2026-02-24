import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { FadeSlideIn } from '@/components/effects/FadeSlideIn';
import { ExclusaoForm } from './ExclusaoForm';

export const metadata: Metadata = {
  title: 'Exclusão de Dados | Automatizando Soluções',
  description:
    'Solicite a exclusão dos seus dados pessoais conforme a LGPD — Automatizando Soluções LTDA.',
};

export default function ExclusaoDeDadosPage() {
  return (
    <FadeSlideIn>
      <section className="py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-canvas-accent mb-4">
              Legal
            </p>
            <h1 className="text-4xl font-medium tracking-tight text-white mb-4">
              Exclusão de Dados
            </h1>
            <p className="text-sm text-neutral-500 mb-12">
              Conforme a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)
            </p>

            <div className="space-y-8 text-neutral-400 leading-relaxed mb-16">
              <p>
                Você tem o direito de solicitar a exclusão de seus dados pessoais de nossos
                sistemas. Preencha o formulário abaixo ou entre em contato diretamente pelo e-mail{' '}
                <a
                  href="mailto:contato@automatizando.site"
                  className="text-canvas-accent hover:underline"
                >
                  contato@automatizando.site
                </a>
                .
              </p>

              <div className="border border-white/5 bg-white/[0.02] p-6 space-y-3">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
                  O que acontece após a solicitação?
                </h2>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  <li>Confirmaremos o recebimento em até 24 horas</li>
                  <li>Processaremos a exclusão em até 15 dias úteis</li>
                  <li>Enviaremos confirmação da exclusão por e-mail</li>
                  <li>Dados mantidos por obrigação legal serão anonimizados, não excluídos</li>
                </ul>
              </div>
            </div>

            <ExclusaoForm />
          </div>
        </Container>
      </section>
    </FadeSlideIn>
  );
}
