# Padrão de Página de Case — Canvas Design System

> Documento gerado a partir do case Moods (11/2025) — primeira implementação do padrão.
> Este é o template de referência para todas as páginas de case do site automatizando.site.

---

## Stack e Localização

| Item | Valor |
|------|-------|
| Framework | Next.js 16.1.6 — App Router, `output: 'export'` |
| Estilo | Tailwind CSS 4 + Canvas DS tokens |
| Rota | `app/cases/{slug}/page.tsx` |
| Imagens | `public/cases/{slug}/` |
| Listagem | `app/cases/page.tsx` (array `CASES`) |
| Preview (home) | `components/sections/CasePreview.tsx` (array `FEATURED_CASES`) |

---

## Canvas Design System — Tokens e Convenções

### Tokens Principais

| Token | Valor | Uso |
|-------|-------|-----|
| `bg` | `#050505` | Fundo da página |
| `canvas-surface` | `#0A0A0A` | Fundo dos Cards |
| `canvas-accent` | `#F97316` | Laranja — highlights, números, CTAs |
| Fonte | Inter | Todo o texto |
| Border padrão | `border-white/5` | Separadores, Cards |
| Border hover | `border-canvas-accent/20` | Hover em Cards e itens de lista |

### Componentes Disponíveis

| Componente | Import | Uso em cases |
|-----------|--------|--------------|
| `Container` | `@/components/layout/Container` | Wrapper de todas as seções |
| `Card` | `@/components/ui/Card` | Blocos de conteúdo. Aceita `href` para linkar |
| `Button` | `@/components/ui/Button` | CTAs. Variantes: `primary`, `outline`, `ghost`. Sizes: `default`, `lg` |
| `Badge` | `@/components/ui/Badge` | Tags no hero. Usa efeito `beam-badge` |
| `MetricCard` | `@/components/ui/MetricCard` | Número grande + label. Hover muda para accent |
| `SectionHeading` | `@/components/ui/SectionHeading` | Label laranja (uppercase, mono) + H2 branco (text-4xl) |
| `CTA` | `@/components/sections/CTA` | Bloco de CTA com `title`, `description`, `buttonText`, `href` |
| `FadeSlideIn` | `@/components/effects/FadeSlideIn` | Animação de entrada. Aceita prop `delay` (ex.: `0.1`, `0.2`) |

---

## Estrutura de Dados (arrays no topo do arquivo)

Cada page.tsx define seus dados em constantes no topo — nunca inline no JSX:

```ts
const TAGS = ['Tag1', 'Tag2', 'Tag3'];           // Badges do hero

const PILARES = [                                  // Metodologia — 4 pilares
  {
    number: '01',
    title: 'Nome do Pilar',
    description: 'Descrição do pilar...',
    image: '/cases/{slug}/nome-imagem.jpeg' | null,
    imageAlt: 'Alt text da imagem',
  },
  // ... 4 pilares total
];

const ENTREGAVEIS = [                              // Tabela de escopo
  { item: 'Nome', descricao: 'Descrição', impacto: 'Impacto' },
];

const RESULTADOS = [                               // Tabela antes/depois
  { indicador: 'Indicador', antes: 'Valor', depois: 'Valor' },
];

const TAKEAWAYS = [                                // Aprendizados — 4 itens
  { titulo: 'Título do aprendizado', desc: 'Descrição breve.' },
];

const FAQS = [                                     // Perguntas frequentes — 5-6 itens
  { q: 'Pergunta?', a: 'Resposta completa.' },
];
```

---

## 12 Seções — Estrutura Padrão

Cada seção usa `<FadeSlideIn>` como wrapper externo. Seções após a primeira usam `delay` crescente (0.1, 0.2...).

### S1 — Hero

```tsx
<FadeSlideIn>
  <section className="py-24">
    <Container>
      <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-canvas-accent">
        Estudo de Caso — {Nicho}
      </p>
      <div className="mb-8 flex flex-wrap gap-2">
        {TAGS.map((tag) => <Badge key={tag}>{tag}</Badge>)}
      </div>
      <h1 className="max-w-4xl text-5xl font-medium leading-tight text-white">
        {Headline principal}
        <span className="mt-2 block text-canvas-accent">{Sub-headline em laranja}</span>
      </h1>
      <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-neutral-400">
        {Subheadline descritivo}
      </p>
      <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row">
        <div>
          <Button href="/contato" size="lg" icon>CTA principal</Button>
          <p className="mt-3 text-sm text-neutral-500">Linha de suporte do CTA</p>
        </div>
        <p className="self-center font-mono text-xs uppercase tracking-widest text-neutral-600">
          X min de leitura
        </p>
      </div>
    </Container>
  </section>
</FadeSlideIn>
```

**Regras:**
- Label acima do H1: `"Estudo de Caso — {Nicho}"`
- H1: headline principal (branca) + segunda linha em `text-canvas-accent`
- CTA: sempre aponta para `/contato`
- Tempo de leitura: estimar (6-8 min para página completa)

---

### S2 — Resumo de Resultados (3 métricas)

```tsx
<section className="border-t border-white/5 py-24">
  <Container>
    <SectionHeading label="Resultados" title="Em 30 Segundos" />
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <Card className="text-center">
        <MetricCard value="80%" label="Label da métrica" />
        <p className="mt-4 text-sm font-light text-neutral-500">Nota de rodapé</p>
      </Card>
      {/* 3 cards total */}
    </div>
  </Container>
</section>
```

**Regras:** Sempre 3 métricas no grid. Usar `MetricCard` dentro de `Card`.

---

### S3 — Contexto do Cliente

```tsx
<SectionHeading label="Cliente" title="{Nome} — O Produto e o Contexto" />
<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
  <p>{Parágrafo descritivo do cliente e produto}</p>
  <Card>
    <ul className="space-y-5">
      {/* 3 bullets: equipe, volume, canal */}
    </ul>
  </Card>
</div>
```

---

### S4 — Desafio / Problema

```tsx
<SectionHeading label="O Problema" title="{Título do desafio}" />
<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
  <div className="space-y-4">
    {/* 4 itens de problema — border border-white/5 p-6 */}
  </div>
  <Card>
    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-canvas-accent">Causa Raiz</p>
    <p>{Parágrafo da causa raiz}</p>
    <p className="mt-4">{Parágrafo da solução/ponte}</p>
  </Card>
</div>
```

---

### S5 — Metodologia (4 Pilares)

```tsx
<SectionHeading label="Metodologia" title="Sistema {Nome} em 4 Pilares" />
<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
  {PILARES.map((pilar) => (
    <Card key={pilar.number}>
      <p className="mb-4 text-5xl font-light text-canvas-accent/20">{pilar.number}</p>
      <h3 className="text-xl font-medium text-white ...">{pilar.title}</h3>
      <p className="mt-3 font-light leading-relaxed text-neutral-400">{pilar.description}</p>
      {pilar.image && (
        <div className="mt-6 overflow-hidden border border-white/10 w-1/2 mx-auto">
          <img src={pilar.image} alt={pilar.imageAlt} className="h-auto w-full" />
        </div>
      )}
    </Card>
  ))}
</div>
```

**Regras imagens de pilar:** `w-1/2 mx-auto` para não dominar o Card.

---

### S6 — Escopo / Entregáveis (tabela)

```tsx
<SectionHeading label="Escopo" title="O Que Implementamos" />
<table className="w-full border-collapse">
  <thead>
    <tr className="border-b border-white/10">
      <th>Entregável</th>
      <th className="hidden md:table-cell">Descrição</th>
      <th className="text-canvas-accent">Impacto</th>
    </tr>
  </thead>
  <tbody>
    {ENTREGAVEIS.map((e) => (
      <tr className="border-b border-white/5 hover:border-canvas-accent/20">
        <td className="font-medium text-white">{e.item}</td>
        <td className="hidden md:table-cell text-neutral-400">{e.descricao}</td>
        <td className="text-canvas-accent">{e.impacto}</td>
      </tr>
    ))}
  </tbody>
</table>
```

**Regras:** Coluna Descrição escondida em mobile (`hidden md:table-cell`). Coluna Impacto sempre em `text-canvas-accent`.

---

### S7 — Resultados

```tsx
<SectionHeading label="Resultados" title="{Métrica principal}" />

{/* Métrica central em destaque */}
<div className="mb-12 border border-canvas-accent/20 p-12 text-center">
  <MetricCard value="{valor}" label="{label}" />
  <p className="mt-4 text-sm font-light text-neutral-500">Fonte/atribuição</p>
</div>

{/* Tabela antes/depois */}
{/* Coluna "Antes" usa line-through; coluna "Depois" usa text-canvas-accent */}

{/* Prints — grid 4 colunas no desktop */}
<div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
  {/* Imagens com borda + legenda */}
</div>

{/* CTA inline */}
<div className="text-center">
  <Button href="/contato" size="lg" icon>CTA de conversão</Button>
</div>
```

**Regras:** CTA obrigatório nesta seção. Grid de prints: `grid-cols-4` no desktop (imagens menores, mais discretas).

---

### S8 — Depoimento

```tsx
<blockquote className="border-l-2 border-canvas-accent pl-8">
  <p className="text-3xl font-light leading-relaxed text-white">&ldquo;{Quote}&rdquo;</p>
  <footer className="mt-6">
    <p className="text-sm font-semibold text-neutral-400">{Nome}</p>
    <p className="mt-1 text-xs uppercase tracking-widest text-neutral-600">{Cargo · Empresa}</p>
  </footer>
</blockquote>
```

**Regras:** Se não há depoimento formal, usar mini-quote de conversa ou troca de mensagens. Documentar no `proof-checklist.md`.

---

### S9 — Aprendizados (Takeaways)

```tsx
<SectionHeading label="Aprendizados" title="Se Você É {ICP}, Isso Também É Para Você" />
<div className="max-w-3xl space-y-4">
  {TAKEAWAYS.map((item, i) => (
    <div className="flex items-start gap-6 border border-white/5 p-6 hover:border-canvas-accent/20">
      <span className="mt-1 shrink-0 font-mono text-xs text-canvas-accent/40">0{i + 1}</span>
      <div>
        <p className="font-medium text-white">{item.titulo}</p>
        <p className="mt-2 text-sm font-light text-neutral-400">{item.desc}</p>
      </div>
    </div>
  ))}
</div>
```

---

### S10 — CTA Principal (componente global)

```tsx
<CTA
  title="Pergunta direta para o ICP"
  description="Contextualização + proposta de valor + call to action."
  buttonText="Texto do botão"
  href="/contato"
/>
```

---

### S11 — FAQ (nativo HTML, sem JS)

```tsx
<SectionHeading label="FAQ" title="Perguntas Frequentes" />
<div className="max-w-3xl">
  {FAQS.map((faq, i) => (
    <details className="group border-b border-white/5 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between py-6 text-white hover:text-canvas-accent">
        <span className="pr-8 font-medium">{faq.q}</span>
        <span className="shrink-0 text-xl font-light text-canvas-accent transition-transform duration-300 group-open:rotate-45">+</span>
      </summary>
      <p className="pb-6 text-sm font-light leading-relaxed text-neutral-400">{faq.a}</p>
    </details>
  ))}
</div>
```

**Regras:** Usar `<details>/<summary>` nativo — sem JS, compatível com `output: 'export'`.

---

### S12 — Micro CTA (rodapé da página)

```tsx
<section className="border-t border-white/5 py-12">
  <Container className="text-center">
    <p className="mb-4 text-sm text-neutral-500">Frase menos comprometedora</p>
    <Button href="/contato" variant="ghost" icon>Texto suave</Button>
  </Container>
</section>
```

---

### JSON-LD (FAQPage schema)

Sempre incluir ao final do componente, dentro do fragment `<>`:

```tsx
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
```

---

## Convenções de Imagem

| Tipo | Path | Tamanho visual |
|------|------|----------------|
| Imagens de pilares | `public/cases/{slug}/{nome-kebab}.jpeg` | `w-1/2 mx-auto` dentro do Card |
| Prints de resultados | `public/cases/{slug}/{nome-kebab}.png` | `grid-cols-4` no desktop |
| Nomes | kebab-case descritivo | `boas-vindas-automaticas.jpeg`, `print-cliente.png` |

**Usar `<img>` nativo** (não `next/image`) — compatível com static export sem configuração adicional.

---

## Regras de CTA

- CTA aparece no mínimo em **S1, S7 e S10** (regra do squad)
- Micro CTA em S12 (botão `ghost`, menos comprometedor)
- Todos os CTAs apontam para `/contato` (rota interna)
- Todo CTA tem linha de suporte (`<p>` abaixo do botão)

---

## Metadata e SEO

```tsx
export const metadata: Metadata = {
  title: '{Descrição do resultado} — Estudo de Caso | Automatizando',
  description: '{150-160 chars: o que foi feito, qual resultado, com prints reais}',
};
```

---

## Adicionando um Novo Case

### 1. Criar a página
```
app/cases/{slug}/page.tsx
```

### 2. Adicionar imagens
```
public/cases/{slug}/
```

### 3. Adicionar na listagem
Editar `app/cases/page.tsx` — adicionar objeto no array `CASES`.

### 4. Adicionar no preview da home
Editar `components/sections/CasePreview.tsx` — adicionar objeto em `FEATURED_CASES` com `slug`, `title`, `description`, `metric`, `tags`.

---

## Referência — Implementação Moods

| Arquivo | Path |
|---------|------|
| Página | [app/cases/moods/page.tsx](../../app/cases/moods/page.tsx) |
| Imagens | [public/cases/moods/](../../public/cases/moods/) |
| Brief | `squads/case-study-lp/projects/moods/brief.json` |
| Case final | `squads/case-study-lp/projects/moods/case-final.md` |
