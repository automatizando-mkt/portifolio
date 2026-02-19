import type { Metadata } from 'next';
import { Workflow, Brain, Plug, BarChart3, MessageSquare, Target } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CTA } from '@/components/sections/CTA';
import { FadeSlideIn } from '@/components/effects/FadeSlideIn';

export const metadata: Metadata = {
  title: 'Sobre | Portfólio',
  description: 'Conheça o profissional por trás das automações com IA.',
};

const EXPERTISE = [
  {
    icon: Workflow,
    title: 'Automação de Processos',
    description: 'Fluxos inteligentes com n8n, Make, Zapier',
  },
  {
    icon: Brain,
    title: 'Inteligência Artificial',
    description: 'ChatGPT, Claude, modelos custom',
  },
  {
    icon: Plug,
    title: 'Integração de Sistemas',
    description: 'APIs, CRMs, ERPs conectados',
  },
  {
    icon: BarChart3,
    title: 'Análise de Dados',
    description: 'Dashboards e relatórios automatizados',
  },
  {
    icon: MessageSquare,
    title: 'Chatbots & Assistentes',
    description: 'Atendimento 24/7 com IA',
  },
  {
    icon: Target,
    title: 'Consultoria Estratégica',
    description: 'Diagnóstico e roadmap de automação',
  },
];

const TECHNOLOGIES: Record<string, string[]> = {
  Automação: ['n8n', 'Make', 'Zapier', 'Power Automate'],
  'IA & ML': ['OpenAI/ChatGPT', 'Claude', 'LangChain', 'Embeddings'],
  Desenvolvimento: ['Next.js', 'TypeScript', 'Python', 'Node.js'],
  Dados: ['PostgreSQL', 'Supabase', 'Google Sheets', 'APIs REST'],
  'CRM & Marketing': ['HubSpot', 'RD Station', 'ActiveCampaign'],
  Cloud: ['AWS', 'Vercel', 'Railway', 'Docker'],
};

export default function SobrePage() {
  return (
    <>
      {/* Bio / Hero */}
      <FadeSlideIn>
        <section className="py-24">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex h-24 w-24 items-center justify-center border border-white/10 bg-canvas-surface text-3xl font-medium text-canvas-accent">
                  G
                </div>
                <h1 className="text-4xl font-medium text-white">Gabriel</h1>
                <p className="mt-2 text-lg font-light text-canvas-accent">
                  Gestor de Automação com IA
                </p>
              </div>
              <div>
                <p className="text-lg font-light leading-relaxed text-neutral-400">
                  Profissional especializado em automação de processos empresariais com inteligência
                  artificial. Combino tecnologia de ponta com visão estratégica para transformar
                  operações manuais em fluxos inteligentes que geram resultados mensuráveis.
                </p>
                <p className="mt-4 text-lg font-light leading-relaxed text-neutral-400">
                  Com experiência em integração de sistemas, chatbots e dashboards automatizados,
                  ajudo empresas a escalar suas operações com eficiência e previsibilidade.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      {/* Expertise */}
      <FadeSlideIn delay={0.2}>
        <section className="border-t border-white/5 py-24">
          <Container>
            <SectionHeading label="Competências" title="O que eu domino" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {EXPERTISE.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title}>
                    <Icon className="mb-4 h-8 w-8 text-canvas-accent" />
                    <h3 className="text-lg font-medium text-white transition-colors duration-300 group-hover:text-canvas-accent">{item.title}</h3>
                    <p className="mt-1 text-sm font-light text-neutral-400">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      {/* Tecnologias */}
      <FadeSlideIn delay={0.4}>
        <section className="border-t border-white/5 py-24">
          <Container>
            <SectionHeading label="Stack" title="Tecnologias & Ferramentas" />
            <div className="space-y-8">
              {Object.entries(TECHNOLOGIES).map(([category, techs]) => (
                <div key={category}>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-500">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      {/* CTA */}
      <FadeSlideIn delay={0.6}>
        <CTA
          title="Vamos automatizar juntos?"
          description="Entre em contato para discutir seu projeto"
          buttonText="Fale Comigo"
          href="/contato"
        />
      </FadeSlideIn>
    </>
  );
}
