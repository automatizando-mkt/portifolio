# Tech Stack — Case Study LP Squad

## Formatos de Output

| Artefato | Formato | Notas |
|----------|---------|-------|
| Brief | YAML + JSON | Schema definido em `templates/brief-schema.yaml` |
| Outline | Markdown | Hierarquia H1/H2/H3 + objetivos por seção |
| Wireframe | Markdown | Texto estruturado, não visual |
| Página final | Markdown | Compatível com Next.js MDX, Notion, Google Docs |
| FAQ | Markdown | Blocos `### Q:` / `**A:**` |
| Variantes A/B | Markdown | Tabelas comparativas |
| Relatório QA | Markdown | Score + justificativa |
| Metadados SEO | YAML | title, description, slug, og:image hint |

## Ferramentas de Destino (onde a página vive)

O squad produz conteúdo agnóstico de plataforma. A página final pode ser implementada em:

- **Next.js — Canvas DS** ⭐ Padrão automatizando.site (via `@ux-design-expert`)
- **Webflow** — Para entrega direta a clientes
- **WordPress** — Via Elementor ou editor clássico
- **Notion** — Para rascunho e aprovação do cliente
- **Google Docs** — Para colaboração e revisão

---

## Canvas DS — Stack de Implementação (automatizando.site)

> Padrão estabelecido no case Moods (11/2025). Seguir rigorosamente para todos os cases do site.

| Item | Detalhe |
|------|---------|
| Projeto | `c:\AIOS\portfolio\` |
| Framework | Next.js 16.1.6 · App Router · `output: 'export'` |
| Estilo | Tailwind CSS 4 + tokens Canvas DS |
| Rota | `app/cases/{slug}/page.tsx` |
| Imagens | `public/cases/{slug}/` |
| Task de implementação | `tasks/case-implementation.md` |
| Padrão visual completo | `portfolio/docs/patterns/case-page.md` |

### Componentes Canvas DS usados em cases

| Componente | Caminho |
|-----------|---------|
| Container | `@/components/layout/Container` |
| Card | `@/components/ui/Card` |
| Button | `@/components/ui/Button` |
| Badge | `@/components/ui/Badge` |
| MetricCard | `@/components/ui/MetricCard` |
| SectionHeading | `@/components/ui/SectionHeading` |
| CTA | `@/components/sections/CTA` |
| FadeSlideIn | `@/components/effects/FadeSlideIn` |

### Convenções de implementação

- Dados sempre em arrays no topo do arquivo (`TAGS`, `PILARES`, `ENTREGAVEIS`, `RESULTADOS`, `TAKEAWAYS`, `FAQS`)
- Imagens com `<img>` nativo (não `next/image`)
- FAQ com `<details>/<summary>` nativo (sem JS)
- JSON-LD FAQPage obrigatório ao final
- CTA mínimo 3x: hero (S1), resultados (S7), CTA section (S10)
- Todos os CTAs → `/contato`

## Convenções de Arquivo

```
case-{slug}/
├── brief.json              # Brief estruturado (output Discovery)
├── brief-summary.md        # Resumo humano 10 linhas
├── creative-brief.md       # Tese + pilares + outline (output Strategist)
├── wireframe.md            # Mapa de seções + CTAs (output Page Architect)
├── case-draft-v1.md        # Texto bruto (output Case Writer)
├── case-draft-v2.md        # Com provas injetadas (output Proof Builder)
├── case-draft-v3.md        # Com FAQ e SEO (output SEO/FAQ)
├── case-final.md           # Versão aprovada (output Editor)
├── qa-report.md            # Relatório de qualidade (output Editor)
├── proof-checklist.md      # Lista de provas a coletar (output Proof Builder)
└── variants-package.md     # Pacote A/B (output Variants)
```

## Nicho — Ferramentas Comuns nos Cases

Este squad foi otimizado para cases que envolvem:

- **Automação:** n8n, Make (Integromat), Zapier, Python scripts
- **Marketing Conversacional:** WhatsApp Business API Oficial, Twilio, BotConversa, ManyChat, Z-API, Evolution API
- **CRM:** HubSpot, RD Station, Pipedrive, Monday.com
- **Análise:** Google Analytics, Metabase, Power BI, Google Looker Studio
- **Funis:** ClickFunnels, Kiwify, Hotmart, ActiveCampaign
- **Dev:** Next.js, React, Node.js, APIs REST
- **Design:** Figma, Webflow

> Ferramentas devem ser mencionadas como meios, nunca como protagonistas do resultado.
