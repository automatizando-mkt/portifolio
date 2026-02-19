# Portfólio de Automação com IA — Product Requirements Document (PRD)

## Problem Statement

Gestores de automação com IA frequentemente não possuem uma presença online profissional que demonstre seus resultados de forma tangível. Potenciais clientes precisam ver cases reais com métricas de impacto antes de contratar, mas portfolios genéricos ou perfis LinkedIn não transmitem a profundidade e credibilidade necessárias. Este projeto resolve isso criando um portfólio dedicado que showcases cases de automação com contexto, solução e resultados mensuráveis.

## Goals

- Criar um portfólio profissional online que apresente cases de automação com IA de forma visualmente impactante
- Gerar credibilidade e autoridade como Gestor de Automação com IA para atrair leads qualificados
- Permitir que potenciais clientes naveguem cases completos com contexto, resultados e métricas de impacto
- Oferecer múltiplos pontos de conversão (formulário de contato, CTA estratégicos)
- Manter SEO avançado para rankeamento orgânico e presença profissional

## Success Metrics

| Métrica | Target (30 dias após launch) | Como medir |
|---------|------------------------------|------------|
| Visitas mensais | 100+ visitas/mês | Google Analytics |
| Leads via formulário | 3+ contatos/mês | Contagem de envios |
| Lighthouse Performance | 90+ score | Lighthouse CI |
| Lighthouse SEO | 90+ score | Lighthouse CI |
| Taxa de bounce | < 60% | Google Analytics |
| Tempo médio na página de case | > 2 minutos | Google Analytics |

## Background Context

O projeto visa construir um portfólio pessoal de um Gestor de Automação com IA, apresentando 5-10 cases de automação já realizados ou possíveis. O site segue o modelo de agências de marketing modernas (referências: MovingMinds.io para a galeria de cases e SetSail.ca para as páginas individuais de projeto), com uma página geral listando todos os cases em grid e páginas dedicadas para cada case com detalhes, resultados e métricas.

O portfólio será multi-página (Home, Sobre, Serviços, Cases, Contato) com design consistente, hospedado na Hostinger, construído com Next.js + React + TypeScript + Tailwind CSS. O design visual será definido em etapa posterior, analisando HTMLs de referência dos design systems existentes no repositório (`design systems/`).

## Change Log

| Data | Versão | Descrição | Autor |
|------|--------|-----------|-------|
| 2026-02-18 | 1.0 | PRD inicial criado | @aios-master (Orion) |
| 2026-02-18 | 1.1 | Adicionado Problem Statement, Success Metrics, Out of Scope, nota Hostinger | @aios-master (Orion) |
| 2026-02-18 | 1.2 | DS de referência definido: canvas-visual.aura.build/design-system.html | @aios-master (Orion) |

---

## Requirements

### Functional

- **FR1:** O site deve ter página Home com hero section, proposta de valor, preview de cases e CTAs de conversão
- **FR2:** O site deve ter página Sobre com informações profissionais, trajetória e expertise em automação com IA
- **FR3:** O site deve ter página Serviços listando os tipos de automação oferecidos com descrições
- **FR4:** O site deve ter página Cases (galeria) com grid de todos os cases, cada card exibindo imagem, título, descrição curta e tags/categoria
- **FR5:** Cada case deve ter página individual dedicada com: hero com imagem do projeto, contexto/desafio, solução implementada, resultados/métricas de impacto, tecnologias usadas e CTA
- **FR6:** O site deve ter página Contato com formulário funcional que envia e-mail ou salva lead
- **FR7:** Todas as páginas devem seguir o mesmo padrão de design consistente
- **FR8:** O site deve ter navegação principal (header) com menu entre todas as páginas e logo
- **FR9:** O site deve ter footer consistente com links, redes sociais e informações de contato
- **FR10:** Os cases devem ser gerenciáveis via dados estruturados (markdown ou JSON) sem necessidade de alterar código para adicionar novos cases
- **FR11:** O formulário de contato deve validar campos obrigatórios e exibir feedback ao usuário
- **FR12:** O design visual deve ser baseado no design system `design systems/canvas-visual.aura.build/design-system.html` como referência principal, complementado por análise de outros HTMLs do repositório conforme necessário

### Non Functional

- **NFR1:** O site deve carregar em menos de 3 segundos (LCP) em conexão 3G
- **NFR2:** O site deve ser totalmente responsivo (mobile, tablet, desktop) com abordagem mobile-first
- **NFR3:** O site deve atingir score 90+ no Lighthouse para Performance, Accessibility, Best Practices e SEO
- **NFR4:** O site deve ter SEO avançado: metadata por página, sitemap.xml, robots.txt, Open Graph tags, schema.org (Person, Organization, CreativeWork para cases)
- **NFR5:** O site deve ter Google Analytics ou equivalente integrado para rastreamento de visitas
- **NFR6:** O site deve ser hospedável na Hostinger (compatível com Node.js hosting ou SSG/export estático)
- **NFR7:** O código deve seguir TypeScript strict mode, ESLint, Prettier
- **NFR8:** O site deve ter acessibilidade WCAG 2.1 AA (semântica, ARIA, navegação por teclado, contraste)
- **NFR9:** Imagens devem usar Next.js Image optimization com lazy loading e formatos modernos (WebP/AVIF)

---

## Scope

### Out of Scope (MVP)

- **Blog / seção de artigos** — Conteúdo educacional será considerado em versão futura
- **Multi-idioma (i18n)** — MVP apenas em português
- **CMS / painel admin** — Cases gerenciados via arquivos de dados no repositório
- **E-commerce / pagamentos** — Sem funcionalidade de venda direta
- **Chat ao vivo / chatbot** — Contato apenas via formulário
- **Área de cliente / login** — Site totalmente público
- **Integração com CRM** — Leads gerenciados manualmente ou via email
- **Testes A/B** — Não no MVP
- **PWA / app mobile** — Site responsivo web apenas

---

## User Interface Design Goals

### Overall UX Vision

Site profissional e moderno que transmite expertise em automação com IA. O visual deve ser sofisticado sem ser excessivamente complexo — foco em showcasing os resultados dos cases. A experiência de navegação deve ser fluida, com transições suaves entre páginas e seções.

### Key Interaction Paradigms

- Navegação simples e direta entre páginas via menu principal
- Cards de cases clicáveis que levam para a página de detalhes
- Scroll suave com seções bem delimitadas
- CTAs estrategicamente posicionados (hero, meio do conteúdo, footer)
- Formulário de contato com feedback visual em tempo real

### Core Screens and Views

1. **Home** — Hero impactante + preview de cases + proposta de valor + CTA
2. **Sobre** — Bio profissional, expertise, trajetória
3. **Serviços** — Cards/lista de serviços de automação oferecidos
4. **Cases (Galeria)** — Grid com cards de todos os cases (referência: MovingMinds.io)
5. **Case Individual** — Página completa do projeto (referência: SetSail.ca/our-work/*)
6. **Contato** — Formulário + informações de contato direto

### Accessibility: WCAG AA

Conformidade WCAG 2.1 nível AA: HTML semântico, labels ARIA onde necessário, navegação por teclado, contraste mínimo 4.5:1, textos alternativos em imagens.

### Branding

**Design System de Referência Principal:** `design systems/canvas-visual.aura.build/design-system.html`

O design visual do portfólio deve ser baseado no design system **Canvas Visual** (`canvas-visual.aura.build`). Este DS será analisado na Story 2.2 para extrair: paleta de cores, tipografia, componentes visuais (cards, buttons, hero patterns), espaçamentos e padrões de layout. Outros design systems em `design systems/` podem ser consultados como referências complementares.

### Target Device and Platforms: Web Responsive

Web responsivo — desktop, tablet e mobile. Prioridade mobile-first.

---

## Technical Assumptions

### Repository Structure: Monorepo

Monorepo único no repositório AIOS existente. O portfólio será construído dentro do projeto atual.

### Service Architecture

Next.js App Router (monolito frontend com API routes para formulário de contato). SSG (Static Site Generation) para páginas de cases usando dados estruturados. Deploy como site estático exportado ou com Node.js server na Hostinger.

### Testing Requirements

- Unit tests para componentes React (Vitest + React Testing Library)
- E2E tests para fluxos críticos (formulário de contato, navegação)
- Lighthouse CI para validação de performance/acessibilidade
- Testes de responsividade visual

### Additional Technical Assumptions and Requests

- Usar o preset `nextjs-react` configurado no AIOS (Next.js 16+, React, TypeScript, Tailwind CSS)
- Cases gerenciados via arquivos markdown ou JSON em pasta dedicada (`content/cases/`)
- Imagens dos cases em pasta pública (`public/cases/`)
- Integração com Google Analytics via next/script
- Formulário de contato via API route do Next.js (envio por email via serviço como Resend, ou salvamento em arquivo/banco)
- Compatibilidade com Hostinger: **INVESTIGAR na Story 4.4** — verificar se o plano suporta Node.js server (VPS/Cloud) ou se necessário `next export` para hospedagem estática. Se SSG export, ajustar API route do formulário para serviço externo (ex: Formspree, Google Forms, ou serverless function externa)

---

## Epic List

### Epic 2: Fundação do Portfólio — Estrutura, Design e Páginas Estáticas

**Goal:** Estabelecer a fundação do projeto Next.js com design system derivado de referências, layout base, páginas estáticas (Home, Sobre, Serviços, Contato) e navegação completa.

### Epic 3: Cases — Galeria e Páginas Individuais

**Goal:** Implementar o sistema de cases com galeria em grid, páginas individuais dinâmicas geradas a partir de dados estruturados, e integração completa com o design system.

### Epic 4: Formulário de Contato, SEO, Analytics e Deploy

**Goal:** Implementar funcionalidades de conversão (formulário), otimizar SEO, integrar analytics, e fazer deploy na Hostinger.

---

## Epic 2: Fundação do Portfólio — Estrutura, Design e Páginas Estáticas

**Expanded Goal:** Criar a base sólida do projeto Next.js com App Router, configurar o design system analisando HTMLs de referência existentes em `design systems/`, implementar layout base (header, footer, navegação), e construir as páginas estáticas do portfólio (Home, Sobre, Serviços, Contato). Ao final deste epic, o site terá estrutura funcional com navegação completa e design consistente.

### Story 2.1: Setup do Projeto Next.js e Configuração Base

As a Gestor de Automação com IA,
I want o projeto Next.js configurado com todas as ferramentas de desenvolvimento,
so that eu tenha uma base sólida para construir o portfólio.

**Acceptance Criteria:**
1. Projeto Next.js 16+ inicializado com App Router, TypeScript strict, Tailwind CSS, ESLint e Prettier
2. Estrutura de pastas segue o padrão do preset nextjs-react (app/, components/, lib/, content/, public/)
3. Configuração de Tailwind com tema base (cores, tipografia, espaçamentos) como placeholders configuráveis
4. Script de dev (`npm run dev`) funciona e exibe página de canário ("Portfólio em construção")
5. Configuração de Git hooks (lint-staged, commitlint) ativa
6. `npm run lint` e `npm run typecheck` passam sem erros

**Complexity:** S (Small)

### Story 2.2: Análise de Design Systems de Referência e Definição Visual

As a Gestor de Automação com IA,
I want o design visual do portfólio definido com base em referências dos design systems existentes,
so that o site tenha um visual profissional e sofisticado alinhado com a identidade desejada.

**Acceptance Criteria:**
1. Análise documentada do design system principal `design systems/canvas-visual.aura.build/design-system.html` e complementarmente de 2-3 outros HTMLs de `design systems/`
2. Paleta de cores definida (primária, secundária, neutras, acentos) com tokens CSS/Tailwind
3. Tipografia selecionada (headings, body, accent) com fallbacks
4. Componentes visuais de referência identificados (cards, buttons, hero patterns, spacing)
5. Arquivo de design tokens (`tailwind.config.ts`) atualizado com a definição visual completa
6. Documento de referência visual criado em `docs/architecture/design-reference.md`

**Complexity:** M (Medium)

### Story 2.3: Layout Base — Header, Footer e Navegação

As a visitante do portfólio,
I want navegação clara e consistente entre todas as páginas,
so that eu possa explorar facilmente o conteúdo do site.

**Acceptance Criteria:**
1. Header com logo, menu de navegação (Home, Sobre, Serviços, Cases, Contato) e indicador de página ativa
2. Menu mobile responsivo (hamburger menu) funcional
3. Footer com links de navegação, redes sociais, informações de contato e copyright
4. Layout wrapper (`RootLayout`) aplica header e footer consistentemente em todas as páginas
5. Transições suaves entre páginas
6. Header e footer seguem o design visual definido na Story 2.2

**Complexity:** M (Medium)

### Story 2.4: Página Home

As a visitante do portfólio,
I want uma página inicial impactante que apresente o profissional e seus trabalhos,
so that eu entenda rapidamente o que ele faz e queira ver mais.

**Acceptance Criteria:**
1. Hero section com headline, subtítulo, CTA principal e imagem/visual de destaque
2. Seção de proposta de valor (3-4 cards com benefícios/diferenciais)
3. Preview de cases em destaque (3 cards com link para página de Cases)
4. CTA secundário para página de Contato
5. Responsivo em mobile, tablet e desktop
6. Performance: LCP < 3s em conexão simulada 3G

**Complexity:** M (Medium)

### Story 2.5: Página Sobre

As a potencial cliente,
I want conhecer o profissional por trás das automações,
so that eu tenha confiança na expertise e no trabalho.

**Acceptance Criteria:**
1. Seção bio com foto/avatar, nome, título e descrição profissional
2. Timeline ou lista de expertise/competências em automação com IA
3. Seção de tecnologias/ferramentas dominadas
4. CTA para página de Contato ou Cases
5. Responsivo e acessível (WCAG AA)

**Complexity:** S (Small)

### Story 2.6: Página Serviços

As a potencial cliente,
I want ver quais tipos de automação são oferecidos,
so that eu identifique se minha necessidade está coberta.

**Acceptance Criteria:**
1. Lista de serviços com título, descrição e ícone/visual para cada
2. Cada serviço é claro sobre o que inclui e o benefício para o cliente
3. CTA por serviço ou geral para página de Contato
4. Responsivo e acessível (WCAG AA)

**Complexity:** S (Small)

### Story 2.7: Página Contato (Layout)

As a potencial cliente,
I want uma página de contato clara com formulário visível,
so that eu possa entrar em contato facilmente.

**Acceptance Criteria:**
1. Formulário com campos: Nome, Email, Empresa (opcional), Mensagem
2. Validação client-side dos campos obrigatórios com feedback visual
3. Informações de contato alternativas (email, redes sociais) ao lado do formulário
4. Layout responsivo (form empilhado em mobile, side-by-side em desktop)
5. Formulário ainda não envia dados (funcionalidade no Epic 4) — exibe mensagem de placeholder no submit

**Complexity:** S (Small)

---

## Epic 3: Cases — Galeria e Páginas Individuais

**Expanded Goal:** Implementar o sistema completo de cases de automação. Criar a estrutura de dados para gerenciar cases via markdown/JSON, construir a página de galeria com grid de cards (referência MovingMinds.io), e gerar páginas individuais dinâmicas para cada case (referência SetSail.ca). Os cases devem ser fáceis de adicionar/editar sem tocar no código.

### Story 3.1: Estrutura de Dados dos Cases

As a Gestor de Automação com IA,
I want os cases gerenciados via arquivos de dados estruturados,
so that eu possa adicionar e editar cases facilmente sem alterar código.

**Acceptance Criteria:**
1. Estrutura de dados do case definida: título, slug, descrição curta, descrição completa, imagem hero, imagens adicionais, tags/categoria, métricas de resultado, tecnologias usadas, desafio, solução, resultados
2. Pasta `content/cases/` criada com arquivos markdown (MDX) ou JSON por case
3. Pelo menos 2 cases de exemplo criados com dados placeholder realistas
4. Função utilitária (`lib/cases.ts`) para listar e buscar cases com tipagem TypeScript
5. Schema de validação para o formato dos dados do case

**Complexity:** S (Small)

### Story 3.2: Página Cases — Galeria em Grid

As a visitante do portfólio,
I want ver todos os cases de automação em uma galeria visual organizada,
so that eu possa navegar e escolher qual case me interessa.

**Acceptance Criteria:**
1. Página `/cases` exibe grid responsivo com cards de todos os cases
2. Cada card mostra: imagem, título, descrição curta e tags
3. Cards são clicáveis e levam para a página individual do case (`/cases/[slug]`)
4. Grid ajusta colunas por breakpoint (1 col mobile, 2 tablet, 3 desktop)
5. Animação sutil de hover nos cards
6. Dados carregados via SSG (Static Site Generation)

**Complexity:** M (Medium)

### Story 3.3: Página Individual do Case

As a potencial cliente,
I want ver os detalhes completos de um case de automação,
so that eu entenda o contexto, a solução e os resultados alcançados.

**Acceptance Criteria:**
1. Página dinâmica `/cases/[slug]` gerada via SSG para cada case
2. Hero section com imagem do projeto e título
3. Seção "Contexto / Desafio" com descrição do problema
4. Seção "Solução" com a automação implementada
5. Seção "Resultados" com métricas de impacto em destaque (cards numéricos tipo "+300%", "R$ 50k economizados")
6. Lista de tecnologias usadas
7. CTA para contato ("Quer resultados similares?")
8. Navegação para próximo/anterior case
9. Responsivo e acessível (WCAG AA)

**Complexity:** M (Medium)

---

## Epic 4: Formulário de Contato, SEO, Analytics e Deploy

**Expanded Goal:** Finalizar o portfólio com funcionalidades de conversão (formulário funcional), otimização completa de SEO (metadata, sitemap, schema.org, Open Graph), integração de analytics, e deploy na Hostinger. Ao final, o site estará pronto para produção.

### Story 4.1: Formulário de Contato Funcional

As a potencial cliente,
I want enviar uma mensagem pelo formulário e receber confirmação,
so that eu saiba que meu contato foi recebido.

**Acceptance Criteria:**
1. API route `/api/contact` recebe dados do formulário e envia email (via Resend, Nodemailer ou serviço configurável)
2. Formulário exibe estado de loading durante envio
3. Mensagem de sucesso exibida após envio bem-sucedido
4. Mensagem de erro amigável em caso de falha
5. Rate limiting básico na API route (prevenir spam)
6. Dados do formulário validados no servidor (sanitização)

**Complexity:** M (Medium)

### Story 4.2: SEO Avançado e Open Graph

As a Gestor de Automação com IA,
I want que o site tenha SEO otimizado para rankeamento orgânico,
so that potenciais clientes me encontrem via busca.

**Acceptance Criteria:**
1. Metadata única por página (title, description) via Next.js Metadata API
2. Open Graph tags (og:title, og:description, og:image) para todas as páginas, especialmente cases
3. `sitemap.xml` gerado automaticamente com todas as páginas e cases
4. `robots.txt` configurado permitindo indexação
5. Schema.org implementado: Person (sobre), Service (serviços), CreativeWork (cases)
6. Canonical URLs definidas

**Complexity:** M (Medium)

### Story 4.3: Google Analytics e Otimização de Performance

As a Gestor de Automação com IA,
I want analytics integrado e performance otimizada,
so that eu possa medir visitas e garantir boa experiência do usuário.

**Acceptance Criteria:**
1. Google Analytics 4 integrado via `next/script` com consent-aware loading
2. Eventos personalizados rastreados: clique em case, envio de formulário, clique em CTA
3. Score Lighthouse 90+ em todas as 4 categorias (Performance, Accessibility, Best Practices, SEO)
4. Imagens otimizadas com Next.js Image (lazy loading, WebP/AVIF, responsive sizes)
5. Bundle size analisado e otimizado (code splitting, dynamic imports onde necessário)

**Complexity:** M (Medium)

### Story 4.4: Deploy na Hostinger

As a Gestor de Automação com IA,
I want o site publicado e acessível na Hostinger,
so that leads possam acessar meu portfólio online.

**Acceptance Criteria:**
1. Build de produção (`next build`) funciona sem erros
2. Estratégia de deploy definida para Hostinger (SSG export ou Node.js hosting)
3. Configuração de domínio/subdomínio funcional
4. HTTPS ativo
5. Variáveis de ambiente de produção configuradas (analytics ID, email service keys)
6. Smoke test manual confirma que todas as páginas carregam corretamente em produção

**Complexity:** M (Medium)

---

## Checklist Results Report

**Executed:** 2026-02-18 | **Checklist:** pm-checklist.md | **Mode:** Comprehensive

| Category | Status | Score |
|---|---|---|
| 1. Problem Definition & Context | PASS | 85% |
| 2. MVP Scope Definition | PASS | 90% |
| 3. User Experience Requirements | PASS | 90% |
| 4. Functional Requirements | PASS | 95% |
| 5. Non-Functional Requirements | PASS | 90% |
| 6. Epic & Story Structure | PASS | 92% |
| 7. Technical Guidance | PARTIAL | 80% |
| 8. Cross-Functional Requirements | PARTIAL | 75% |
| 9. Clarity & Communication | PASS | 90% |

**Overall:** 87% — **READY FOR ARCHITECT**

**Remaining items (non-blocking):**
- Investigar compatibilidade Hostinger com Next.js (Story 4.4)
- Definir serviço de email para formulário (Story 4.1)
- Detalhar integração com Google Analytics (Story 4.3)

---

## Next Steps

### UX Expert Prompt

> `@ux-design-expert` — Analise o PRD em `docs/prd.md` e os design systems em `design systems/` para criar a arquitetura de UX/UI do portfólio. Foque nas referências MovingMinds.io (galeria de cases) e SetSail.ca (página individual de case). Derive o design visual analisando os HTMLs existentes.

### Architect Prompt

> `@architect` — Analise o PRD em `docs/prd.md` e crie a arquitetura técnica do portfólio usando o preset `nextjs-react`. Inclua: estrutura do projeto, componentes, data flow dos cases, API route do formulário, estratégia de SSG, configuração para deploy na Hostinger.
