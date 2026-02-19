export interface Service {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export const SERVICES: Service[] = [
  {
    title: 'Automação de Processos',
    description:
      'Fluxos automatizados com n8n, Make e Zapier que eliminam tarefas manuais e aumentam a produtividade da sua equipe.',
    icon: 'Workflow',
    benefits: ['Redução de erros', 'Economia de tempo', 'Escalabilidade'],
  },
  {
    title: 'Chatbots & Assistentes IA',
    description:
      'Atendimento 24/7 com chatbots inteligentes usando GPT e Claude, integrados aos seus canais de comunicação.',
    icon: 'MessageSquare',
    benefits: ['Atendimento instantâneo', 'Redução de custos', 'Satisfação do cliente'],
  },
  {
    title: 'Integração de Sistemas',
    description:
      'Conexão de CRMs, ERPs, APIs e plataformas em fluxo único, eliminando silos de dados.',
    icon: 'Plug',
    benefits: ['Dados unificados', 'Eliminação de retrabalho', 'Visão 360°'],
  },
  {
    title: 'Dashboards & Relatórios',
    description:
      'Painéis automatizados com métricas em tempo real para decisões baseadas em dados.',
    icon: 'BarChart3',
    benefits: ['Decisões data-driven', 'Relatórios automáticos', 'KPIs claros'],
  },
  {
    title: 'Automação de Marketing',
    description:
      'Campanhas, nurturing e segmentação automatizados para converter mais leads com menos esforço.',
    icon: 'Mail',
    benefits: ['Leads qualificados', 'Conversão otimizada', 'ROI mensurável'],
  },
  {
    title: 'Consultoria em Automação',
    description:
      'Diagnóstico completo, estratégia personalizada e roadmap de automação para o seu negócio.',
    icon: 'Compass',
    benefits: ['Visão estratégica', 'Priorização inteligente', 'Quick wins'],
  },
];
