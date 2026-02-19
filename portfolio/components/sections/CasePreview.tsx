import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MetricCard } from '@/components/ui/MetricCard';
import { Button } from '@/components/ui/Button';

const FEATURED_CASES = [
  {
    title: 'Automação de Pipeline de Vendas',
    description: 'Pipeline completo automatizado com IA para qualificação e follow-up de leads.',
    metric: { value: '+45%', label: 'Conversão' },
    tags: ['Vendas', 'CRM', 'IA'],
  },
  {
    title: 'Chatbot de Suporte com IA',
    description: 'Atendimento 24/7 com chatbot inteligente que resolve 80% das dúvidas.',
    metric: { value: '-60%', label: 'Tempo resposta' },
    tags: ['Suporte', 'Chatbot', 'NLP'],
  },
  {
    title: 'Dashboard de Métricas Automatizado',
    description: 'Relatórios automáticos consolidando dados de 5+ plataformas em tempo real.',
    metric: { value: '100+', label: 'Relatórios/mês' },
    tags: ['Analytics', 'Automação'],
  },
] as const;

export function CasePreview() {
  return (
    <section className="border-t border-white/5 py-24">
      <Container>
        <SectionHeading label="Cases" title="Cases em Destaque" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURED_CASES.map((caseItem) => (
            <Card key={caseItem.title}>
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
