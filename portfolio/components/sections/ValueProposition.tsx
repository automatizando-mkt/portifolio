import { Cpu, Link as LinkIcon, TrendingUp, Headphones } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';

const VALUE_PROPS = [
  {
    icon: Cpu,
    title: 'Automação Inteligente',
    description: 'Processos otimizados com IA que aprendem e evoluem com seu negócio.',
  },
  {
    icon: LinkIcon,
    title: 'Integração Total',
    description: 'Sistemas conectados sem fricção, dados fluindo entre plataformas.',
  },
  {
    icon: TrendingUp,
    title: 'Resultados Mensuráveis',
    description: 'ROI comprovado com métricas claras de impacto no seu negócio.',
  },
  {
    icon: Headphones,
    title: 'Suporte Contínuo',
    description: 'Acompanhamento pós-implementação e evolução constante.',
  },
] as const;

export function ValueProposition() {
  return (
    <section className="border-t border-white/5 py-24">
      <Container>
        <SectionHeading label="Diferenciais" title="Por que automatizar comigo" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((item) => (
            <Card key={item.title}>
              <item.icon className="mb-4 h-10 w-10 text-canvas-accent" />
              <h3 className="text-xl font-medium text-white transition-colors duration-300 group-hover:text-canvas-accent">
                {item.title}
              </h3>
              <p className="mt-2 text-neutral-400 font-light leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
