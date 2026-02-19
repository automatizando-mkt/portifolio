# Project Structure

```
portfolio/                    # Root do projeto Next.js
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout (header, footer, fonts, analytics)
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles + Canvas DS tokens
│   ├── sobre/
│   │   └── page.tsx         # Sobre page
│   ├── servicos/
│   │   └── page.tsx         # Serviços page
│   ├── cases/
│   │   ├── page.tsx         # Cases gallery page
│   │   └── [slug]/
│   │       └── page.tsx     # Individual case page (SSG)
│   └── contato/
│       └── page.tsx         # Contato page
│
├── components/               # Shared React components
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Footer
│   │   ├── MobileMenu.tsx   # Mobile hamburger menu
│   │   └── Container.tsx    # Max-width container wrapper
│   ├── ui/
│   │   ├── Button.tsx       # Button component (Canvas DS style)
│   │   ├── Card.tsx         # Card component
│   │   ├── SectionHeading.tsx # Section heading with label
│   │   ├── MetricCard.tsx   # Metric display card (+300%, etc.)
│   │   ├── Badge.tsx        # Tag/badge component
│   │   └── ContactForm.tsx  # Contact form component
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section (reusable)
│   │   ├── CasePreview.tsx  # Case preview cards for home
│   │   ├── ValueProposition.tsx # Value prop cards
│   │   └── CTA.tsx          # Call-to-action section
│   └── effects/
│       ├── FadeSlideIn.tsx  # Scroll animation wrapper
│       ├── GridBackground.tsx # Grid pattern background
│       └── BeamBorder.tsx   # Beam border animation
│
├── content/                  # Content data (cases)
│   └── cases/
│       ├── automacao-vendas.mdx
│       ├── chatbot-suporte.mdx
│       └── ... (5-10 cases)
│
├── lib/                      # Utility functions
│   ├── cases.ts             # Case data loading + types
│   ├── metadata.ts          # SEO metadata helpers
│   └── utils.ts             # General utilities (cn, etc.)
│
├── public/                   # Static assets
│   ├── cases/               # Case images
│   │   ├── automacao-vendas/
│   │   └── chatbot-suporte/
│   ├── og/                  # Open Graph images
│   ├── favicon.ico
│   └── robots.txt
│
├── styles/                   # Additional styles (if needed)
│
├── test/                     # Test files
│   ├── components/
│   └── lib/
│
├── tailwind.config.ts        # Tailwind config with Canvas DS tokens
├── next.config.ts            # Next.js config (SSG export)
├── tsconfig.json             # TypeScript config (strict)
├── package.json
└── .env.local                # Environment variables
```

## Key Architecture Decisions

### Feature-Light Structure

Este projeto é um portfólio estático, **não** um SaaS. A estrutura é deliberadamente simples:
- Sem `/features` (não há lógica de negócio complexa)
- Sem `/services` ou `/repositories` (sem backend)
- `/components` organizado por tipo (layout, ui, sections, effects)
- `/content` com MDX para cases (gerenciável sem código)
- `/lib` apenas para utilidades e data loading

### Content Strategy

Cases são arquivos MDX em `content/cases/` com frontmatter YAML:

```mdx
---
title: "Automação de Pipeline de Vendas"
slug: "automacao-vendas"
description: "Automação completa do pipeline de vendas..."
heroImage: "/cases/automacao-vendas/hero.webp"
tags: ["vendas", "CRM", "IA"]
metrics:
  - label: "Aumento em conversão"
    value: "+45%"
  - label: "Economia mensal"
    value: "R$ 12k"
technologies: ["n8n", "OpenAI", "HubSpot"]
featured: true
order: 1
---

## O Desafio

[Conteúdo MDX do case...]
```

### Static Generation

Todas as rotas são geradas em build time via `generateStaticParams`:

```typescript
// app/cases/[slug]/page.tsx
export async function generateStaticParams() {
  const cases = await getAllCases();
  return cases.map((c) => ({ slug: c.slug }));
}
```
