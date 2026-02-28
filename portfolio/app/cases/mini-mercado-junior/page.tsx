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
    title: 'Como o Minimercado Junior escalou de 50 para +500 clientes no crediário — Case | Automatizando',
    description:
        'Veja como o Minimercado Junior automatizou o atendimento do seu crediário próprio no WhatsApp com um atendente IA integrado ao sistema local.',
};

const TAGS = ['Mercado Local', 'WhatsApp', 'IA', 'Crediário', 'Integração Local'];

const PILARES = [
    {
        number: '01',
        title: 'Atendente IA "Juninho"',
        description:
            'A IA foi configurada para atuar como um atendente especializado, processando a demanda 24 horas por dia e liberando a equipe presencial da sobrecarga manual.',
        image: '/cases/mini-mercado-junior/conversa-atendente.png',
        imageAlt: 'Conversa no WhatsApp com o atendente virtual Juninho',
    },
    {
        number: '02',
        title: 'Integração com Sistema Interno',
        description:
            'Consulta instantânea em servidores locais via CPF do cliente. O Juninho verifica saldo disponível, limite e antecipação de compras automaticamente.',
        image: '/cases/mini-mercado-junior/consulta-tempo-real.png',
        imageAlt: 'Captura de tela de consulta de limite em tempo real nos servidores',
    },
    {
        number: '03',
        title: 'Painel de Gestão Completo',
        description:
            'Sistema centralizado para cadastro de atendentes, supervisores, acompanhamento de métricas do chatbot e relatórios detalhados dos atendimentos.',
        image: '/cases/mini-mercado-junior/sistema-gestao.png',
        imageAlt: 'Print do painel de administração e gestão de conversas do mercado',
    },
    {
        number: '04',
        title: 'Foco no Atendimento Presencial',
        description:
            'Ao tirar o peso do suporte virtual das costas da equipe, as longas filas presenciais puderam ser atendidas com qualidade e velocidade ideais.',
        image: '/cases/mini-mercado-junior/atendimento-presencial.png',
        imageAlt: 'Raquel realizando atendimento no escritório',
    },
];

const ENTREGAVEIS = [
    {
        item: 'Atendente Virtual Juninho',
        descricao: 'IA capacitada para responder dúvidas e operar processos do crediário próprio',
        impacto: 'Fim do gargalo de 30-60 mensagens pendentes por dia',
    },
    {
        item: 'Integração ao Servidor Local',
        descricao: 'Acesso automatizado ao saldo do cliente utilizando dados como o CPF',
        impacto: 'IA resolve liberações sem depender da supervisão humana',
    },
    {
        item: 'Portal de Gestão',
        descricao: 'Criação de perfis (atendente, supervisor) e automações',
        impacto: 'Controle de qualidade e visibilidade em tempo real',
    },
    {
        item: 'Relatórios de Atendimento',
        descricao: 'Métricas precisas sobre as interações dos clientes com o Juninho',
        impacto: 'Melhoria contínua baseada em dados reais',
    },
];

const RESULTADOS = [
    { indicador: 'Volume de clientes ativos no crediário', antes: '~50 clientes', depois: '+500 clientes' },
    { indicador: 'Atendimento via WhatsApp (Raquel)', antes: 'Manual, 30 a 60 mens./dia', depois: '100% Automático (Juninho)' },
    { indicador: 'Consultas de Saldo / Limite', antes: 'Necessitava de ida presencial', depois: 'Instantâneo via IA (CPF)' },
    {
        indicador: 'Sobrecarga da equipe (Raquel)',
        antes: 'Dividida entre presencial e online',
        depois: 'Foco total nas demandas estratégicas',
    },
];

const TAKEAWAYS = [
    {
        titulo: 'Negócios locais também precisam de escala virtual.',
        desc: 'Um mercadinho de bairro com crediário próprio não consegue crescer se sua equipe operacional lida simultaneamente com a gôndola e o balcão do WhatsApp.',
    },
    {
        titulo: 'Integração de sistemas legados/locais destrava o valor da IA.',
        desc: 'Sem a capacidade do Juninho consultar o saldo diretamente nos servidores do mercado, o cliente final ainda precisaria da Raquel.',
    },
    {
        titulo: 'Mais clientes não significa mais caos operacionais.',
        desc: 'O número de conveniados aumentou 10 vezes (de 50 para mais de 500) enquanto o tempo de resposta caiu a zero segundos para 100% da demanda virtual.',
    },
];

const FAQS = [
    {
        q: 'Minha loja utiliza um ERP instalado no servidor local. A IA consegue se comunicar com ele?',
        a: 'Sim. Foi exatamente isso que fizemos no Minimercado Junior. Criamos integrações diretas entre o WhatsApp (Juninho) e os sistemas fechados hospedados localmente na loja para verificar limites vinculados a CPFs.',
    },
    {
        q: 'Eu perco o controle do que o robô fala com meus clientes?',
        a: 'Não. Nossa solução inclui um Painel de Gestão completo, onde as interações do chatbot, as automações e as métricas de qualidade podem ser supervisionadas online através de diferentes perfis (como Supervisor).',
    },
    {
        q: 'Posso usar isso mesmo não oferecendo delivery?',
        a: 'Exatamente. O Minimercado Junior também não faz delivery; o foco dessa automação foi inteiramente focado na retenção do cliente e viabilização imediata da burocracia do crediário próprio.',
    },
];

export default function MiniMercadoCasePage() {
    return (
        <>
            {/* ── HERO ── */}
            <FadeSlideIn>
                <section className="py-24">
                    <Container>
                        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-canvas-accent">
                            Estudo de Caso — Varejo e Negócios Locais
                        </p>
                        <div className="mb-8 flex flex-wrap gap-2">
                            {TAGS.map((tag) => (
                                <Badge key={tag}>{tag}</Badge>
                            ))}
                        </div>
                        <h1 className="max-w-4xl text-5xl font-medium leading-tight text-white">
                            De 50 a +500 clientes no crediário.
                            <span className="mt-2 block text-canvas-accent">
                                Sem estourar a equipe.
                            </span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-neutral-400">
                            Como o Minimercado Junior usou o &quot;Juninho&quot; — uma inteligência artificial conectada aos servidores locais — para automatizar a verificação de saldo de auxílios e destravar o atendimento no escritório físico.
                        </p>
                        <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row">
                            <div>
                                <Button href="/contato" size="lg" icon>
                                    Quero escalar minha loja local
                                </Button>
                                <p className="mt-3 text-sm text-neutral-500">
                                    Entendemos como integrar o seu sistema com o WhatsApp.
                                </p>
                            </div>
                            <p className="self-center font-mono text-xs uppercase tracking-widest text-neutral-600">
                                5 min de leitura
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
                                <MetricCard value="10X" label="Crescimento de conveniados" />
                                <p className="mt-4 text-sm font-light text-neutral-500">de ~50 para mais de 500</p>
                            </Card>
                            <Card className="text-center">
                                <MetricCard value="100%" label="Consultas Automatizadas" />
                                <p className="mt-4 text-sm font-light text-neutral-500">saldo checado via CPF pelo Juninho</p>
                            </Card>
                            <Card className="text-center">
                                <MetricCard value="Zero" label="Filas no WhatsApp" />
                                <p className="mt-4 text-sm font-light text-neutral-500">tudo respondido na hora</p>
                            </Card>
                        </div>
                    </Container>
                </section>
            </FadeSlideIn>

            {/* ── CONTEXTO ── */}
            <FadeSlideIn delay={0.2}>
                <section className="border-t border-white/5 py-24">
                    <Container>
                        <SectionHeading label="Cliente" title="Minimercado Junior — O Operador e o Contexto" />
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            <p className="text-lg font-light leading-relaxed text-neutral-400">
                                O Minimercado Junior é uma força em sua comunidade local. Embora o estabelecimento não utilize serviços de delivery terceirizado ou entregas domiciliares robustas, o seu diferencial repousa sobre um sistema de <span className="font-medium text-white">crediário próprio acoplado aos auxílios governamentais (como o auxílio estadual)</span>, realizando as antecipações que o cliente precisa para concluir suas compras vitais.
                            </p>
                            <Card>
                                <ul className="space-y-5">
                                    {[
                                        {
                                            titulo: 'Dependência da Auxiliar Raquel',
                                            desc: 'Dividia seu dia entre o envio de mensagens (30-60 diárias) e as filas no escritório presencial',
                                        },
                                        {
                                            titulo: 'Verificações no Balcão',
                                            desc: 'Processo demorado para liberar o saldo do cliente ou autorizar a antecipação no sistema',
                                        },
                                        {
                                            titulo: 'Plataforma Restrita',
                                            desc: 'Dados ficavam presos no servidor local interno sem ponte fácil com o WhatsApp',
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
                        <SectionHeading label="O Problema" title="Vender Muito Tornou o Escritório Indisponível" />
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <div className="space-y-4">
                                {[
                                    {
                                        titulo: 'Sobrecarga Presencial e Virtual',
                                        desc: 'Raquel não conseguia atender bem nem quem visitava o supermercado fisicamente nem quem aguardava no WhatsApp.',
                                    },
                                    {
                                        titulo: 'Lentidão em Processos Simples',
                                        desc: 'Liberar saldo exigia o cliente ir na loja apresentar documentos e a funcionária consultar o ERP local.',
                                    },
                                    {
                                        titulo: 'Limitação no número de parceiros/conveniados',
                                        desc: 'Com suporte restrito à capacidade humana (estacionando perto de 50 pessoas), qualquer crescimento de clientes faria o mercado aumentar custos com funcionários.',
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
                                    O sucesso do mercadinho punha uma corda sobre a equipe. Toda conveniência atrai novos dependentes, mas todo novo crediário precisava da mão da Raquel na checagem manual de limites. Estava inviável.
                                </p>
                                <p className="mt-4 text-lg font-light leading-relaxed text-neutral-400">
                                    Assim, um elo fraco mantinha as vendas sufocadas. Era imperativo integrar os dados confidenciais do servidor (CPF versus Saldo) para a tela do WhatsApp sem risco operacional.
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
                        <SectionHeading label="Metodologia" title="O Ecossistema da 'Juninho IA'" />
                        <p className="mb-12 max-w-2xl text-lg font-light text-neutral-400">
                            O Juninho não é só um respondente de cumprimentos, ele opera de modo ativo o banco de dados principal do Minimercado.
                        </p>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {PILARES.map((pilar) => (
                                <Card key={pilar.number} className="border-white/20 hover:border-canvas-accent/50 flex flex-col">
                                    <p className="mb-4 text-5xl font-light text-canvas-accent/20">{pilar.number}</p>
                                    <h3 className="text-xl font-medium text-white transition-colors duration-300 group-hover:text-canvas-accent">
                                        {pilar.title}
                                    </h3>
                                    <p className="mt-3 font-light leading-relaxed text-neutral-400 flex-grow">
                                        {pilar.description}
                                    </p>
                                    {pilar.image && (
                                        <div className="mt-6 overflow-hidden border border-white/10 mx-auto w-full max-w-[280px]">
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
                        <SectionHeading label="Resultados" title="O Crescimento Exponencial Possibilitado Pela IA" />

                        {/* Métrica central */}
                        <div className="mb-12 border border-canvas-accent/20 p-12 text-center">
                            <MetricCard value="+500 Clientes" label="Carteira Ativa Atual de Conveniados" />
                            <p className="mt-4 text-sm font-light text-neutral-500">
                                Livre de qualquer lentidão em respostas com &quot;Juninho&quot;
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
                            O depoimento completo da Raquel
                        </h2>
                        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">

                            <div className="w-full shrink-0 sm:w-1/2 md:w-2/5 flex flex-col sm:flex-row gap-4">
                                <div className="overflow-hidden border border-canvas-accent/30 flex-1">
                                    <img
                                        src="/cases/mini-mercado-junior/depoimento-1.png"
                                        alt="Raquel confirmando o salto de 50 para mais de 500 clientes"
                                        className="h-auto w-full object-cover"
                                    />
                                </div>
                                <div className="overflow-hidden border border-canvas-accent/30 flex-1">
                                    <img
                                        src="/cases/mini-mercado-junior/depoimento-2.png"
                                        alt="Continuação do relato valorizando o novo sistema"
                                        className="h-auto w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 lg:pt-4">
                                <blockquote className="border-l-2 border-canvas-accent pl-8">
                                    <p className="text-xl lg:text-3xl font-light leading-relaxed text-white">
                                        &ldquo;Antigamente quando eu fazia o processo na mão... eu tinha cerca de 50 [clientes] só, e não parava nem para presencial nem para o online(...) Hoje já chega a mais de 500 clientes, e o Juninho faz todo o atendimento desses.&rdquo;
                                    </p>
                                    <footer className="mt-8">
                                        <p className="text-sm font-semibold text-neutral-400">Raquel</p>
                                        <p className="mt-1 text-xs uppercase tracking-widest text-neutral-600">
                                            Auxiliar Administrativa · Minimercado Junior
                                        </p>
                                    </footer>
                                </blockquote>
                                <p className="mt-8 text-sm font-light leading-relaxed text-neutral-500">
                                    A automação foi literalmente a diferença entre manter-se travado na capacidade humana perante o aumento na demanda, ou explodir no crescimento digital sem comprometer os clientes físicos que também necessitavam de excelência de atendimento.
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
                            title="A Escalada dos Comércios Locais"
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
                    title="O sistema da sua loja prende os dados?"
                    description="Sejam consultas, limites do crediário próprios ou processos internos repetitivos: nós desenhamos O ROBO que lê seu servidor local e automatiza para a tela mais perto de seu cliente, reduzindo à zero a espera."
                    buttonText="Agendar viabilidade agora"
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
                            Quer ver na prática como sua gestão ficaria por trás dos panos?
                        </p>
                        <Button href="/contato" variant="ghost" icon>
                            Chamar nossa equipe no WhatsApp
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
