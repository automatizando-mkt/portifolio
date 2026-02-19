# Epic 3: Cases — Galeria e Páginas Individuais

**Expanded Goal:** Implementar o sistema completo de cases de automação. Criar a estrutura de dados para gerenciar cases via markdown/JSON, construir a página de galeria com grid de cards (referência MovingMinds.io), e gerar páginas individuais dinâmicas para cada case (referência SetSail.ca). Os cases devem ser fáceis de adicionar/editar sem tocar no código.

## Story 3.1: Estrutura de Dados dos Cases

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

## Story 3.2: Página Cases — Galeria em Grid

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

## Story 3.3: Página Individual do Case

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
