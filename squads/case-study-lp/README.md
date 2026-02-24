# Case Study LP Squad

Squad de 8 agentes especializados para transformar projetos realizados em páginas de case study que vendem — seguindo o padrão de agências high-end (ex.: SetSail), em PT-BR.

## Quando usar

Use este squad quando precisar criar uma página de case study que:
- Demonstra autoridade e metodologia
- Narra Desafio → Estratégia → Execução → Resultado
- Prepara o lead para contratar (LP disfarçada de case)
- Precisa converter com CTA consistente e repetido

## Pipeline de 8 Agentes

```
[Discovery] → [Strategist] → [Page Architect] → [Case Writer]
     ↓                                                 ↓
  Brief JSON                                    case-draft-v1.md
                                                       ↓
[Variants] ← [Editor] ← [SEO/FAQ] ← [Proof Builder]
     ↓            ↓
variants.md  case-final.md
```

| # | Agente | Missão | Output |
|---|--------|--------|--------|
| A | **Discovery** | Coletar dados do projeto via entrevista estruturada | Brief JSON |
| B | **Strategist** | Criar tese persuasiva, pilares e outline | Creative Brief + Outline |
| C | **Page Architect** | Desenhar wireframe e mapear CTAs | Wireframe textual |
| D | **Case Writer** | Escrever texto completo do case | case-draft-v1.md |
| E | **Proof Builder** | Maximizar credibilidade com provas reais | case-draft-v2.md |
| F | **SEO/FAQ** | FAQ com intenção comercial + metadados | case-draft-v3.md |
| G | **Editor** | Revisar ao padrão agência + score QA | case-final.md |
| H | **Variants** | Pacote de variações A/B de hero e CTA | variants-package.md |

## Início Rápido

```
# Iniciar pipeline completo
*case-start

# Iniciar somente o Discovery (entrevista)
@discovery *start-discovery

# Pular para uma etapa específica (com brief pronto)
@strategist *create-strategy --brief ./brief.json

# Modo rápido com placeholders
*case-start --quick
```

## Entregáveis Finais

1. **Brief + resumo humano** (10 linhas) — `brief.json` + `brief-summary.md`
2. **Outline** (H1/H2 e objetivos de cada seção) — `outline.md`
3. **Página final em Markdown** — `case-final.md`
4. **FAQs + title/meta/slug** — incluídos em `case-final.md`
5. **Pacote A/B** de hero + CTA — `variants-package.md`
6. **Relatório de QA** — `qa-report.md`
7. **Lista do que pedir ao cliente** — `proof-checklist.md`

## Estrutura do Squad

```
squads/case-study-lp/
├── squad.yaml
├── README.md
├── config/
│   ├── coding-standards.md
│   └── tech-stack.md
├── agents/            (8 agentes: A–H)
├── tasks/             (8 tasks: uma por agente)
├── workflows/
│   └── case-study-pipeline.yaml
├── templates/
│   ├── brief-schema.yaml
│   └── page-template.md
├── checklists/
│   └── qa-checklist.md
└── data/
    └── proxy-metrics.yaml
```

## Regras Inegociáveis

1. **Nenhum agente escreve a página antes do Brief ser aprovado**
2. **Sem inventar números** — se não há dados, usar proxies aprovados
3. **Ferramenta é meio, não protagonista** — foco em processo e impacto
4. **CTA aparece no mínimo 3x** na página final
5. **Linguagem PT-BR**: direto, persuasivo, sem "textão institucional"

## Integração com AIOS

| Após step | Handoff para |
|-----------|-------------|
| Brief aprovado | `@pm` — criar epic/story para implementação |
| Wireframe textual | `@ux-design-expert` — criar design visual |
| case-final.md | `@dev` — implementar a página |
| Página implementada | `@devops` — deploy em produção |
