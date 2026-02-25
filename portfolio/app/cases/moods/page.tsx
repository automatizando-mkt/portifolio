import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MetricCard } from '@/components/ui/MetricCard';
import { CTA } from '@/components/sections/CTA';
import { FadeSlideIn } from '@/components/effects/FadeSlideIn';

export const metadata: Metadata = {
  title: 'Como a Moods automatizou 95% do suporte WhatsApp — Case | Automatizando',
  description:
    'Veja como a Moods reduziu 95% do atendimento manual no WhatsApp com a bIA — um sistema de suporte com personalidade que funciona 24/7. Case completo com prints reais.',
};

const TAGS = ['Infoprodutor', 'WhatsApp', 'IA', 'Kiwify'];

const PILARES = [
  {
    number: '01',
    title: 'Cliente Conectado',
    description:
      'O sistema sabe o que o cliente comprou e o histórico completo antes de ele dizer uma palavra. A IA não precisa perguntar o que o cliente já informou.',
    image: '/cases/moods/cliente-conectado.jpg',
    imageAlt: 'Sistema identificando automaticamente o cliente e seu histórico de compras',
  },
  {
    number: '02',
    title: 'Boas-vindas em 0 Segundos',
    description:
      'Toda compra disparada no Kiwify gera automaticamente uma mensagem no WhatsApp com os dados de acesso e o passo a passo. O cliente recebe o que precisa antes de perceber que tinha uma dúvida.',
    image: '/cases/moods/boas-vindas-automaticas.jpeg',
    imageAlt: 'Mensagem automática de boas-vindas disparada imediatamente após a compra',
  },
  {
    number: '03',
    title: 'Atendimento com Personalidade',
    description:
      'A bIA tem persona própria: tom "Girl Boss", energia alta, linguagem casual — o estilo da Moods. Quem conversa com ela não percebe que está falando com uma automação.',
    image: '/cases/moods/suporte-produto.jpeg',
    imageAlt: 'bIA ensinando cliente a buscar figurinhas no grupo com tom casual da marca',
  },
  {
    number: '04',
    title: 'Operação à Prova de Bloqueio',
    description:
      'Múltiplos números de WhatsApp em rotação automática. Se um número é bloqueado, outro assume instantaneamente. A operação não para.',
    image: '/cases/moods/operacao-prova-bloqueio.jpg',
    imageAlt: 'Rotação automática de instâncias WhatsApp garantindo operação ininterrupta',
  },
];

const ENTREGAVEIS = [
  {
    item: 'Persona bIA',
    descricao: 'Assistente com tom "Girl Boss" personalizado para a Moods',
    impacto: 'IA que fala como a marca',
  },
  {
    item: 'Boas-vindas automáticas',
    descricao: 'Mensagem no WhatsApp com dados de acesso + passo a passo após cada compra',
    impacto: 'Elimina a dúvida antes de ela ser feita',
  },
  {
    item: 'Integração Kiwify ↔ WhatsApp',
    descricao: 'Verificação de compra em tempo real via webhook',
    impacto: 'IA sabe o que o cliente comprou',
  },
  {
    item: 'Suporte 24/7',
    descricao: 'Respostas automáticas para dúvidas frequentes a qualquer hora',
    impacto: 'Zero fila. Zero espera.',
  },
  {
    item: 'Rotação de Instâncias',
    descricao: 'Múltiplos números WhatsApp em rodízio automático',
    impacto: 'Operação ininterrupta',
  },
  {
    item: 'Visão 360 do Cliente',
    descricao: 'Banco de dados unificado: compras, histórico de contatos, status',
    impacto: 'Atendimento personalizado em escala',
  },
];

const RESULTADOS = [
  { indicador: 'Mensagens respondidas manualmente', antes: '~30 por dia', depois: '~6 por dia' },
  { indicador: 'Cobertura fora do horário comercial', antes: '0%', depois: '100%' },
  { indicador: 'Foco da equipe', antes: 'Perguntas repetitivas', depois: 'Casos que precisam de humano' },
  {
    indicador: 'Experiência do novo cliente',
    antes: 'Dependia de alguém estar online',
    depois: 'Dados de acesso no WhatsApp em segundos',
  },
];

const TAKEAWAYS = [
  {
    titulo: 'A pergunta mais frequente do seu suporte é o melhor candidato para automação.',
    desc: 'Se você responde a mesma coisa todo dia, o processo está pedindo automação — não mais pessoas.',
  },
  {
    titulo: 'A voz da IA precisa ser a voz da marca.',
    desc: 'Robô genérico afasta. Personalidade retém. A bIA não soa como automação porque foi construída para não soar.',
  },
  {
    titulo: 'A integração entre venda e atendimento elimina a maior fricção do suporte digital.',
    desc: 'Quando o sistema sabe o que o cliente comprou, ele responde antes da pergunta existir.',
  },
  {
    titulo: 'Uma IA bem treinada conhece o produto por dentro.',
    desc: 'Não basta responder "verifique seu email" — a bIA sabe navegar no grupo, buscar por tema, resolver cada etapa.',
  },
];

const FAQS = [
  {
    q: 'Para quem é indicado esse tipo de solução?',
    a: 'Para infoprodutores com produto digital (curso, membership, grupo, acesso a conteúdo) que recebem suporte concentrado no WhatsApp e ainda dependem de resposta manual para perguntas repetitivas. Se a mesma dúvida chega todos os dias, a solução é para você.',
  },
  {
    q: 'A IA vai soar robótica para os meus clientes?',
    a: 'Não, se for construída certa. A bIA da Moods tem persona definida — tom "Girl Boss", linguagem casual, estilo da marca. O diferencial está em treinar a IA com a voz da sua marca, não instalar um chatbot genérico.',
  },
  {
    q: 'E se o número de WhatsApp for bloqueado?',
    a: 'O sistema usa rotação automática de instâncias: múltiplos números em rodízio. Se um número for bloqueado, outro assume instantaneamente — sem interrupção no atendimento.',
  },
  {
    q: 'Preciso de equipe técnica para manter a solução?',
    a: 'Não. O sistema é entregue funcionando e configurado para a sua operação. Manutenção técnica de infraestrutura fica com a gente.',
  },
  {
    q: 'Funciona com plataformas além do Kiwify?',
    a: 'Sim. A lógica de integração é via webhook — funciona com Hotmart, Eduzz, Braip e outras plataformas de venda.',
  },
  {
    q: 'Como funciona o processo de diagnóstico gratuito?',
    a: 'É uma conversa de 30 minutos onde entendemos sua operação atual — volume de suporte, plataforma de venda, dúvidas mais frequentes dos clientes. Ao final, você sai com clareza sobre o que pode ser automatizado. Sem compromisso.',
  },
];

export default function MoodsCasePage() {
  return (
    <>
      {/* ── HERO ── */}
      <FadeSlideIn>
        <section className="py-24">
          <Container>
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-canvas-accent">
              Estudo de Caso — Infoprodutores
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <h1 className="max-w-4xl text-5xl font-medium leading-tight text-white">
              95% do suporte da Moods virou automático.
              <span className="mt-2 block text-canvas-accent">
                Sem robô genérico — com a voz da marca.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-neutral-400">
              Como uma infoprodutora que recebe centenas de mensagens de suporte por mês parou de
              responder a mesma pergunta todo dia — e liberou a equipe para o que importa.
            </p>
            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row">
              <div>
                <Button href="/contato" size="lg" icon>
                  Quero um diagnóstico grátis
                </Button>
                <p className="mt-3 text-sm text-neutral-500">
                  Sem compromisso. 30 minutos. A gente entende sua operação.
                </p>
              </div>
              <p className="self-center font-mono text-xs uppercase tracking-widest text-neutral-600">
                7 min de leitura
              </p>
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      {/* ── RESUMO ── */}
      <FadeSlideIn delay={0.1}>
        <section className="border-t border-white/5 py-24">
          <Container>
            <SectionHeading label="Resultados" title="Em 30 Segundos" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="text-center">
                <MetricCard value="95%" label="Atendimento automatizado" />
                <p className="mt-4 text-sm font-light text-neutral-500">confirmado pela fundadora</p>
              </Card>
              <Card className="text-center">
                <MetricCard value="24/7" label="Cobertura de atendimento" />
                <p className="mt-4 text-sm font-light text-neutral-500">antes: só horário comercial</p>
              </Card>
              <Card className="text-center">
                <MetricCard value="30→6" label="Mensagens manuais/dia" />
                <p className="mt-4 text-sm font-light text-neutral-500">equipe focada no que importa</p>
              </Card>
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      {/* ── CONTEXTO ── */}
      <FadeSlideIn delay={0.2}>
        <section className="border-t border-white/5 py-24">
          <Container>
            <SectionHeading label="Cliente" title="Moods — O Produto e o Contexto" />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <p className="text-lg font-light leading-relaxed text-neutral-400">
                A Mood Digital, liderada pela especialista Beatriz, é uma referência em estética para
                redes sociais. A marca possui um ecossistema completo de produtos digitais (como Mood
                Presets, Mood Fonts e Mood Bio), mas seu grande motor de vendas é o{' '}
                <span className="font-medium text-white">Adesivos Mood</span>: uma assinatura de
                acesso a uma biblioteca viva com mais de 20.000 figurinhas para Stories, que exige
                atualizações constantes e entrega imediata.
              </p>
              <Card>
                <ul className="space-y-5">
                  {[
                    {
                      titulo: 'Equipe enxuta',
                      desc: 'Fundadora (Beatriz) + 1 freelancer de suporte',
                    },
                    {
                      titulo: 'Volume real',
                      desc: 'Centenas de novas compras chegando todo dia',
                    },
                    {
                      titulo: 'Atendimento no WhatsApp',
                      desc: 'Canal mais próximo da audiência — e o mais difícil de escalar',
                    },
                  ].map((item) => (
                    <li key={item.titulo} className="flex items-start gap-4">
                      <span className="mt-2 block h-1.5 w-1.5 shrink-0 bg-canvas-accent" />
                      <div>
                        <p className="text-sm font-semibold text-white">{item.titulo}</p>
                        <p className="mt-0.5 text-sm font-light text-neutral-400">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      {/* ── DESAFIO ── */}
      <FadeSlideIn>
        <section className="border-t border-white/5 py-24">
          <Container>
            <SectionHeading label="O Problema" title="Cada Venda Gerava um Chamado de Suporte" />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                {[
                  {
                    titulo: '~30 mensagens de suporte por dia',
                    desc: 'Quase todas com a mesma pergunta',
                  },
                  {
                    titulo: 'Zero cobertura fora do horário comercial',
                    desc: 'Cliente que comprava à noite esperava até o próximo dia útil',
                  },
                  {
                    titulo: 'Equipe consumida por respostas repetitivas',
                    desc: 'Horas gastas com o que podia ser automatizado',
                  },
                  {
                    titulo: 'Fricção no acesso ao produto',
                    desc: 'Email caía no spam, clientes digitavam o endereço errado, sem passo a passo',
                  },
                ].map((item) => (
                  <div
                    key={item.titulo}
                    className="flex items-start gap-4 border border-white/5 p-6 transition-colors duration-300 hover:border-canvas-accent/20"
                  >
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 bg-canvas-accent" />
                    <div>
                      <p className="font-medium text-white">{item.titulo}</p>
                      <p className="mt-1 text-sm font-light text-neutral-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Card>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-canvas-accent">
                  Causa Raiz
                </p>
                <p className="text-lg font-light leading-relaxed text-neutral-400">
                  A Kiwify envia o acesso por e-mail — mas as clientes não encontravam o e-mail, não
                  sabiam qual endereço usaram na compra, e o suporte virava uma corrida para resolver
                  algo que podia ser resolvido antes de virar problema.
                </p>
                <p className="mt-4 text-lg font-light leading-relaxed text-neutral-400">
                  Com a mensagem de boas-vindas automática, essa informação passou a chegar direto no
                  WhatsApp da cliente — antes de ela precisar perguntar. A pergunta sumiu antes de
                  existir.
                </p>
              </Card>
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      {/* ── PILARES ── */}
      <FadeSlideIn>
        <section className="border-t border-white/5 py-24">
          <Container>
            <SectionHeading label="Metodologia" title="Sistema bIA em 4 Pilares" />
            <p className="mb-12 max-w-2xl text-lg font-light text-neutral-400">
              Não construímos um chatbot genérico. Construímos um sistema de atendimento que pensa como
              a operação da Moods e fala como a Moods.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {PILARES.map((pilar) => (
                <Card key={pilar.number} className="border-white/20 hover:border-canvas-accent/50">
                  <p className="mb-4 text-5xl font-light text-canvas-accent/20">{pilar.number}</p>
                  <h3 className="text-xl font-medium text-white transition-colors duration-300 group-hover:text-canvas-accent">
                    {pilar.title}
                  </h3>
                  <p className="mt-3 font-light leading-relaxed text-neutral-400">
                    {pilar.description}
                  </p>
                  {pilar.image && (
                    <div className="mt-6 overflow-hidden border border-white/10 w-1/2 mx-auto">
                      <img
                        src={pilar.image}
                        alt={pilar.imageAlt}
                        className="h-auto w-full"
                      />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      {/* ── IMPLEMENTADO ── */}
      <FadeSlideIn>
        <section className="border-t border-white/5 py-24">
          <Container>
            <SectionHeading label="Escopo" title="O Que Implementamos" />
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 pr-8 text-left text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      Entregável
                    </th>
                    <th className="hidden py-4 pr-8 text-left text-xs font-semibold uppercase tracking-widest text-neutral-500 md:table-cell">
                      Descrição
                    </th>
                    <th className="py-4 text-left text-xs font-semibold uppercase tracking-widest text-canvas-accent">
                      Impacto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ENTREGAVEIS.map((e) => (
                    <tr
                      key={e.item}
                      className="border-b border-white/5 transition-colors duration-300 hover:border-canvas-accent/20"
                    >
                      <td className="py-5 pr-8 align-top font-medium text-white">{e.item}</td>
                      <td className="hidden py-5 pr-8 align-top text-sm font-light text-neutral-400 md:table-cell">
                        {e.descricao}
                      </td>
                      <td className="py-5 align-top text-sm text-canvas-accent">{e.impacto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      {/* ── RESULTADOS ── */}
      <FadeSlideIn>
        <section className="border-t border-white/5 py-24">
          <Container>
            <SectionHeading label="Resultados" title="95% do Suporte Automatizado" />

            {/* Métrica central */}
            <div className="mb-12 border border-canvas-accent/20 p-12 text-center">
              <MetricCard value="95%" label="Redução no atendimento manual" />
              <p className="mt-4 text-sm font-light text-neutral-500">
                Confirmado pela fundadora Beatriz
              </p>
            </div>

            {/* Antes / Depois */}
            <div className="mb-12 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 pr-8 text-left text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      Indicador
                    </th>
                    <th className="py-4 pr-8 text-left text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      Antes
                    </th>
                    <th className="py-4 text-left text-xs font-semibold uppercase tracking-widest text-canvas-accent">
                      Depois
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {RESULTADOS.map((row) => (
                    <tr key={row.indicador} className="border-b border-white/5">
                      <td className="py-4 pr-8 align-top text-sm font-medium text-neutral-300">
                        {row.indicador}
                      </td>
                      <td className="py-4 pr-8 align-top text-sm font-light text-neutral-500 line-through">
                        {row.antes}
                      </td>
                      <td className="py-4 align-top text-sm font-medium text-canvas-accent">
                        {row.depois}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Print de apoio */}
            <div className="mb-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                O sistema em ação
              </p>
              <div className="mx-auto w-full overflow-hidden border border-white/10 sm:w-1/2 md:w-1/3">
                <img
                  src="/cases/moods/suporte-acesso.jpeg"
                  alt="bIA resolvendo dúvida de acesso ao produto"
                  className="h-auto w-full"
                />
                <p className="border-t border-white/10 p-4 text-xs font-light text-neutral-500">
                  bIA resolvendo problema de acesso — mesmo fora do horário comercial
                </p>
              </div>
            </div>

            {/* CTA inline */}
            <div className="text-center">
              <Button href="/contato" size="lg" icon>
                Quero implementar isso na minha operação
              </Button>
              <p className="mt-3 text-sm text-neutral-500">
                A gente analisa o seu caso antes de propor qualquer coisa.
              </p>
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      {/* ── DEPOIMENTO ── */}
      <FadeSlideIn>
        <section className="border-t border-white/5 py-24">
          <Container>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-canvas-accent">
              Prova Real
            </p>
            <h2 className="mb-12 text-3xl font-medium text-white">
              A fundadora confirma — por escrito
            </h2>
            <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-start lg:gap-16">
              {/* Print — mesmo tamanho do print de apoio (S7) */}
              <div className="w-full shrink-0 sm:w-1/2 md:w-1/3">
                <div className="overflow-hidden border border-canvas-accent/30">
                  <img
                    src="/cases/moods/print-beatriz.png"
                    alt="Mensagem espontânea da Beatriz confirmando 95% de melhoria no suporte"
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-3 text-xs font-light text-neutral-500">
                  Mensagem enviada pela Beatriz espontaneamente — sem solicitação, após a implementação
                </p>
              </div>
              {/* Quote */}
              <div className="lg:pt-4">
                <blockquote className="border-l-2 border-canvas-accent pl-8">
                  <p className="text-3xl font-light leading-relaxed text-white">
                    &ldquo;Com a automação melhorou 95%.&rdquo;
                  </p>
                  <footer className="mt-6">
                    <p className="text-sm font-semibold text-neutral-400">Beatriz</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-neutral-600">
                      Fundadora · Moods
                    </p>
                  </footer>
                </blockquote>
                <p className="mt-8 text-sm font-light leading-relaxed text-neutral-500">
                  Essa mensagem chegou sem que a gente pedisse. Resultado real, confirmado por quem
                  viveu a mudança no dia a dia.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      {/* ── TAKEAWAYS ── */}
      <FadeSlideIn>
        <section className="border-t border-white/5 py-24">
          <Container>
            <SectionHeading
              label="Aprendizados"
              title="Se Você É Infoprodutor, Isso Também É Para Você"
            />
            <div className="max-w-3xl space-y-4">
              {TAKEAWAYS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 border border-white/5 p-6 transition-colors duration-300 hover:border-canvas-accent/20"
                >
                  <span className="mt-1 shrink-0 font-mono text-xs text-canvas-accent/40">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-white">{item.titulo}</p>
                    <p className="mt-2 text-sm font-light text-neutral-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      {/* ── CTA ── */}
      <FadeSlideIn>
        <CTA
          title="Você ainda está respondendo a mesma pergunta todo dia?"
          description="Se você vende produto digital e o suporte consome horas da sua equipe — isso tem solução. A gente analisa sua operação e mostra exatamente o que dá pra automatizar."
          buttonText="Agendar consultoria gratuita"
          href="/contato"
        />
      </FadeSlideIn>

      {/* ── FAQ ── */}
      <FadeSlideIn>
        <section className="border-t border-white/5 py-24">
          <Container>
            <SectionHeading label="FAQ" title="Perguntas Frequentes" />
            <div className="max-w-3xl">
              {FAQS.map((faq, i) => (
                <details key={i} className="group border-b border-white/5 last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-6 text-white transition-colors duration-300 hover:text-canvas-accent">
                    <span className="pr-8 font-medium">{faq.q}</span>
                    <span className="shrink-0 text-xl font-light text-canvas-accent transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-6 text-sm font-light leading-relaxed text-neutral-400">{faq.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      </FadeSlideIn>

      {/* ── MICRO CTA ── */}
      <FadeSlideIn>
        <section className="border-t border-white/5 py-12">
          <Container className="text-center">
            <p className="mb-4 text-sm text-neutral-500">
              Prefere começar por uma conversa antes de preencher o formulário?
            </p>
            <Button href="/contato" variant="ghost" icon>
              Fale com a gente
            </Button>
          </Container>
        </section>
      </FadeSlideIn>

      {/* ── SCHEMA JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}
