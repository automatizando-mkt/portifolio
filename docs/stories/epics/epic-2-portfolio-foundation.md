# Epic 2: Fundação do Portfólio — Estrutura, Design e Páginas Estáticas

## Status: Planning

## File List

- (a ser preenchido durante implementação)

## Epic Goal

Estabelecer a fundação do projeto Next.js com design system derivado do Canvas Visual DS, layout base, páginas estáticas (Home, Sobre, Serviços, Contato) e navegação completa.

## Epic Description

### Contexto

O portfólio de Gestor de Automação com IA será construído com Next.js 16+ App Router, TypeScript, Tailwind CSS. O design visual é baseado no Canvas Visual Design System (`design systems/canvas-visual.aura.build/design-system.html`): tema dark (#050505), accent orange (#F97316), tipografia Inter, animações scroll-triggered.

### Detalhes

**O que será criado:**
1. Setup do projeto Next.js com todas as ferramentas de dev
2. Design tokens extraídos do Canvas Visual DS configurados no Tailwind
3. Layout base (header, footer, navegação responsiva)
4. Páginas estáticas: Home, Sobre, Serviços, Contato
5. Componentes reutilizáveis (Button, Card, Hero, etc.)

**Ao final deste epic:**
- Site funcional com navegação completa entre todas as páginas
- Design consistente seguindo Canvas Visual DS
- Estrutura pronta para receber o sistema de cases (Epic 3)

## Stories

### Story 2.1: Setup do Projeto Next.js e Configuração Base
- **Executor:** `executor: @dev`
- **Quality Gate:** `quality_gate: @architect`
- **Acceptance Criteria:**
  - [ ] Projeto Next.js 16+ inicializado com App Router, TypeScript strict, Tailwind CSS, ESLint e Prettier
  - [ ] Estrutura de pastas segue o padrão da arquitetura (app/, components/, lib/, content/, public/)
  - [ ] Configuração de Tailwind com Canvas DS tokens (cores, tipografia, espaçamentos)
  - [ ] Script de dev (`npm run dev`) funciona e exibe página de canário
  - [ ] Configuração de Git hooks (lint-staged, commitlint) ativa
  - [ ] `npm run lint` e `npm run typecheck` passam sem erros
- **Complexidade:** S (Small)

### Story 2.2: Análise de Design Systems de Referência e Definição Visual
- **Executor:** `executor: @dev`
- **Quality Gate:** `quality_gate: @ux-design-expert`
- **Acceptance Criteria:**
  - [ ] Análise documentada do Canvas Visual DS e 2-3 outros HTMLs
  - [ ] Paleta de cores definida com tokens CSS/Tailwind
  - [ ] Tipografia selecionada com fallbacks
  - [ ] Componentes visuais de referência identificados
  - [ ] `tailwind.config.ts` atualizado com definição visual completa
  - [ ] Documento de referência visual em `docs/architecture/design-reference.md`
- **Complexidade:** M (Medium)

### Story 2.3: Layout Base — Header, Footer e Navegação
- **Executor:** `executor: @dev`
- **Quality Gate:** `quality_gate: @architect`
- **Acceptance Criteria:**
  - [ ] Header com logo, nav links e indicador de página ativa
  - [ ] Menu mobile responsivo funcional
  - [ ] Footer com links, redes sociais, contato e copyright
  - [ ] RootLayout aplica header e footer em todas as páginas
  - [ ] Transições suaves entre páginas
  - [ ] Segue design visual do Canvas DS
- **Complexidade:** M (Medium)

### Story 2.4: Página Home
- **Executor:** `executor: @dev`
- **Quality Gate:** `quality_gate: @architect`
- **Acceptance Criteria:**
  - [ ] Hero section com headline, subtítulo, CTA e visual de destaque
  - [ ] Seção de proposta de valor (3-4 cards)
  - [ ] Preview de cases em destaque (3 cards)
  - [ ] CTA secundário para Contato
  - [ ] Responsivo (mobile, tablet, desktop)
  - [ ] LCP < 3s
- **Complexidade:** M (Medium)

### Story 2.5: Página Sobre
- **Executor:** `executor: @dev`
- **Acceptance Criteria:**
  - [ ] Bio com foto/avatar, nome, título e descrição
  - [ ] Lista de expertise/competências
  - [ ] Seção de tecnologias dominadas
  - [ ] CTA para Contato ou Cases
  - [ ] Responsivo e WCAG AA
- **Complexidade:** S (Small)

### Story 2.6: Página Serviços
- **Executor:** `executor: @dev`
- **Acceptance Criteria:**
  - [ ] Lista de serviços com título, descrição e ícone
  - [ ] Benefício claro por serviço
  - [ ] CTA para Contato
  - [ ] Responsivo e WCAG AA
- **Complexidade:** S (Small)

### Story 2.7: Página Contato (Layout)
- **Executor:** `executor: @dev`
- **Acceptance Criteria:**
  - [ ] Formulário: Nome, Email, Empresa (opt), Mensagem
  - [ ] Validação client-side com feedback visual
  - [ ] Info de contato alternativas ao lado
  - [ ] Layout responsivo
  - [ ] Submit exibe placeholder (funcionalidade no Epic 4)
- **Complexidade:** S (Small)

## Design System Reference

**Principal:** `design systems/canvas-visual.aura.build/design-system.html`

Tokens completos documentados em `docs/architecture/design-reference.md`.

## Definition of Done

- [ ] Todas as 7 stories implementadas e testadas
- [ ] Navegação completa entre todas as páginas
- [ ] Design consistente com Canvas Visual DS
- [ ] Responsivo em mobile, tablet e desktop
- [ ] Lighthouse 90+ em todas as categorias
- [ ] `npm run lint` e `npm run typecheck` passam

## Change Log

| Data | Agente | Mudança |
|------|--------|---------|
| 2026-02-18 | @aios-master (Orion) | Epic criado a partir do PRD v1.2 |
