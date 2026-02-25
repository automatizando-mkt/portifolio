# Task: Case Implementation

**Agent:** @ux-design-expert (Uma)
**Input:** `case-final.md` + `brief.json` + `wireframe.md`
**Output:** `app/cases/{slug}/page.tsx` (no projeto automatizando.site)
**Elicit:** false

---

## Descrição

Implementar a página de estudo de caso no projeto Next.js `portfolio/` usando o Canvas Design System (automatizando.site). O padrão de implementação está documentado e deve ser seguido rigorosamente para garantir consistência visual entre todos os cases.

**Referência obrigatória:** `portfolio/docs/patterns/case-page.md`

---

## Pré-condições

- [ ] `case-final.md` gerado e aprovado (score ≥ 7/10)
- [ ] `brief.json` disponível (slug, cliente, CTA, nicho)
- [ ] Imagens/prints disponíveis ou caminhos conhecidos
- [ ] Projeto `portfolio/` acessível em `c:\AIOS\portfolio\`

---

## Steps

### Step 1 — Ler o Brief e Extrair Metadados

De `brief.json`, extrair:
- `slug` — para a rota `app/cases/{slug}/`
- `nicho` — label do hero (`"Estudo de Caso — {nicho}"`)
- `cta` — URL do CTA (padrão: `/contato`)
- `cliente.nome` — nome do cliente
- `resultados` — métricas principais para S2 e S7

### Step 2 — Ler o Padrão de Implementação

Ler `c:\AIOS\portfolio\docs\patterns\case-page.md` na íntegra antes de escrever qualquer código.

Este documento define:
- Estrutura de 12 seções
- Componentes Canvas DS a usar em cada seção
- Arrays de dados (`TAGS`, `PILARES`, `ENTREGAVEIS`, `RESULTADOS`, `TAKEAWAYS`, `FAQS`)
- Convenções de imagem
- Regras de CTA (mínimo 3x: S1, S7, S10)
- JSON-LD obrigatório

### Step 3 — Preparar Imagens

1. Identificar imagens disponíveis (prints, screenshots do projeto)
2. Renomear para kebab-case descritivo: `boas-vindas-automaticas.jpeg`, `print-cliente.png`
3. Copiar para `public/cases/{slug}/`

Se as imagens ainda não estiverem disponíveis, usar `image: null` nos PILARES e deixar a seção de prints vazia com comentário `{/* TODO: adicionar print-{nome} */}`.

### Step 4 — Montar Arrays de Dados

Extrair de `case-final.md` e `brief.json`:

**TAGS** — extrair do brief (`brief.json → nicho` + ferramentas principais, máx 4 tags)

**PILARES** — extrair da seção de metodologia do case-final.md
- 4 pilares nomeados
- `image` apenas nos pilares que têm print correspondente
- Pilares sem imagem: `image: null`

**ENTREGAVEIS** — extrair da seção de escopo/entregáveis
- 5-7 entregáveis
- Coluna Impacto: frase curta em destaque

**RESULTADOS** — extrair da seção antes/depois
- 3-5 indicadores com `antes` e `depois`

**TAKEAWAYS** — extrair da seção de aprendizados
- 4 takeaways com título e descrição

**FAQS** — copiar diretamente do case-final.md (seção FAQ)
- 5-6 perguntas

### Step 5 — Criar o Arquivo da Página

Criar `c:\AIOS\portfolio\app\cases\{slug}\page.tsx` seguindo exatamente a estrutura de 12 seções do padrão.

Verificar:
- [ ] `export const metadata` com title e description corretos (150-160 chars)
- [ ] Label do hero: `"Estudo de Caso — {Nicho}"`
- [ ] H1: headline em branco + segunda linha em `text-canvas-accent`
- [ ] Seção S2: exatamente 3 `MetricCard` em `md:grid-cols-3`
- [ ] Pilares com imagens: `w-1/2 mx-auto` no container da imagem
- [ ] Tabela de resultados: coluna "Antes" com `line-through`, "Depois" com `text-canvas-accent`
- [ ] Prints: `grid-cols-2 gap-6 md:grid-cols-4`
- [ ] CTA presente em S1, S7 e S10 — todos apontando para `/contato`
- [ ] FAQ com `<details>/<summary>` nativo (sem JS)
- [ ] JSON-LD FAQPage ao final do fragment
- [ ] Todas as `<img>` tags nativas (não `next/image`)

### Step 6 — Atualizar Listagem e Preview

**`app/cases/page.tsx`** — adicionar objeto no array `CASES`:
```ts
{
  slug: '{slug}',
  label: '{Nicho} · {Ferramenta} · {Método}',
  title: '{Headline principal}',
  description: '{Descrição de 1-2 linhas}',
  metric: { value: '{valor}', label: '{label}' },
}
```

**`components/sections/CasePreview.tsx`** — adicionar em `FEATURED_CASES`:
```ts
{
  slug: '{slug}',
  title: '{Headline principal}',
  description: '{Descrição curta}',
  metric: { value: '{valor}', label: '{label}' },
  tags: ['{Tag1}', '{Tag2}', '{Tag3}'],
}
```

### Step 7 — Verificar Build

Rodar dentro de `portfolio/`:
```bash
npm run build
```

Confirmar:
- [ ] Zero erros de TypeScript
- [ ] Rota `/cases/{slug}` aparece no output como `○ (Static)`
- [ ] Build completa sem warnings críticos

---

## Pós-condições

- [ ] `app/cases/{slug}/page.tsx` criado
- [ ] Imagens em `public/cases/{slug}/`
- [ ] `app/cases/page.tsx` atualizado com novo case
- [ ] `components/sections/CasePreview.tsx` atualizado
- [ ] `npm run build` passa sem erros
- [ ] Handoff para `@devops` para deploy

---

## Referências

- Padrão visual: `portfolio/docs/patterns/case-page.md`
- Exemplo de implementação: `portfolio/app/cases/moods/page.tsx`
- Tech stack do squad: `squads/case-study-lp/config/tech-stack.md`
