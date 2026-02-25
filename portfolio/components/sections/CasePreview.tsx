import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MetricCard } from '@/components/ui/MetricCard';
import { Button } from '@/components/ui/Button';

const FEATURED_CASES = [
  {
    slug: 'moods',
    title: '95% do suporte da Moods virou automático',
    description: 'Como uma infoprodutora com +20.000 figurinhas para Stories parou de responder a mesma pergunta todo dia com automação de atendimento no WhatsApp.',
    metric: { value: '95%', label: 'Atendimento automatizado' },
    tags: ['Infoprodutor', 'WhatsApp', 'IA'],
  },
] as const;

export function CasePreview() {
  return (
    <section className="border-t border-white/5 py-24">
      <Container>
        <SectionHeading label="Cases" title="Cases em Destaque" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURED_CASES.map((caseItem) => (
            <Card key={caseItem.title} href={`/cases/${caseItem.slug}`}>
              <div className="mb-4 flex flex-wrap gap-2">
                {caseItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs uppercase tracking-widest text-neutral-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-medium text-white transition-colors duration-300 group-hover:text-canvas-accent">{caseItem.title}</h3>
              <p className="mt-2 text-neutral-400 font-light leading-relaxed">
                {caseItem.description}
              </p>
              <div className="mt-6">
                <MetricCard value={caseItem.metric.value} label={caseItem.metric.label} />
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/cases" icon>
            Ver todos os cases
          </Button>
        </div>
      </Container>
    </section>
  );
}
