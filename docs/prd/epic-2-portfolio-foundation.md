# Epic 2: Fundação do Portfólio — Estrutura, Design e Páginas Estáticas

**Expanded Goal:** Criar a base sólida do projeto Next.js com App Router, configurar o design system analisando HTMLs de referência existentes em `design systems/`, implementar layout base (header, footer, navegação), e construir as páginas estáticas do portfólio (Home, Sobre, Serviços, Contato). Ao final deste epic, o site terá estrutura funcional com navegação completa e design consistente.

## Story 2.1: Setup do Projeto Next.js e Configuração Base

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

## Story 2.2: Análise de Design Systems de Referência e Definição Visual

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

## Story 2.3: Layout Base — Header, Footer e Navegação

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

## Story 2.4: Página Home

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

## Story 2.5: Página Sobre

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

## Story 2.6: Página Serviços

As a potencial cliente,
I want ver quais tipos de automação são oferecidos,
so that eu identifique se minha necessidade está coberta.

**Acceptance Criteria:**
1. Lista de serviços com título, descrição e ícone/visual para cada
2. Cada serviço é claro sobre o que inclui e o benefício para o cliente
3. CTA por serviço ou geral para página de Contato
4. Responsivo e acessível (WCAG AA)

**Complexity:** S (Small)

## Story 2.7: Página Contato (Layout)

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
