import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { MetricCard } from '@/components/ui/MetricCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeSlideIn } from '@/components/effects/FadeSlideIn';

export const metadata: Metadata = {
  title: 'Cases | Automatizando',
  description: 'Projetos reais de automação com IA — resultados mensuráveis, processos transformados.',
};

const CASES = [
  {
    slug: 'moods',
    label: 'Infoprodutor · WhatsApp · IA',
    title: '95% do suporte da Moods virou automático',
    description:
      'Como uma infoprodutora com +20.000 figurinhas para Stories parou de responder a mesma pergunta todo dia com automação de atendimento no WhatsApp.',
    metric: { value: '95%', label: 'Atendimento automatizado' },
  },
];

export default function CasesPage() {
  return (
    <FadeSlideIn>
      <section className="py-24">
        <Container>
          <SectionHeading label="Portfólio" title="Cases" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c) => (
              <Card key={c.slug} href={`/cases/${c.slug}`}>
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-500">
                  {c.label}
                </p>
                <h3 className="text-xl font-medium text-white transition-colors duration-300 group-hover:text-canvas-accent">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-neutral-400">
                  {c.description}
                </p>
                <div className="mt-6 border-t border-white/5 pt-6">
                  <MetricCard value={c.metric.value} label={c.metric.label} />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </FadeSlideIn>
  );
}
