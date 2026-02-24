# Task: Case Writing

**Agent:** Case Writer (D)
**Input:** `brief.json` + `creative-brief.md` + `wireframe.md`
**Output:** `case-draft-v1.md`
**Elicit:** false (execução autônoma com placeholders marcados)

---

## Descrição

Escrever o texto completo da página de case study seguindo o wireframe aprovado. Produz a v1 com placeholders explícitos onde dados estão faltando.

---

## Regras de Escrita (non-negotiable)

1. Nunca inventar número, resultado ou depoimento
2. Placeholder marcado: `[PENDENTE: descrição do que falta]`
3. Ferramenta entra depois de processo e impacto
4. Cada seção responde "e daí?" (impacto no negócio)
5. Máximo 3 linhas de parágrafo sem bullet

---

## Steps

### Step 1 — Setup

Ler todos os inputs:
- brief.json → dados reais
- creative-brief.md → ângulo, pilares, promessa
- wireframe.md → estrutura e objetivos por seção

### Step 2 — Escrever Seção a Seção

Seguir a ordem do wireframe. Para cada seção:
1. Ler o objetivo de conversão
2. Escrever em camadas (headline → sub → resumo → detalhes)
3. Marcar placeholders onde dados estão faltando
4. Verificar regra "e daí?" antes de prosseguir

### Step 3 — Formato de Saída

```markdown
---
title: [título do case]
slug: [slug sugerido]
client: [nome/segmento do cliente]
date: [mês/ano do projeto]
tags: [nicho, solução, ferramentas-mencionadas]
status: draft-v1
---

# [H1 — resultado ou transformação]
> [Sub-headline — quem é o cliente]

[Copy de apoio — 1–2 frases]

[CTA 1 — botão + linha de suporte]

---

## Resumo em 30 Segundos

- ✓ [Resultado 1]
- ✓ [Resultado 2]
- ✓ [Resultado 3]

---

## [Nome do Cliente] — Contexto

[Nome] é uma empresa de [segmento] que [modelo de receita].

- [Fato de contexto 1]
- [Fato de contexto 2]
- [Fato de contexto 3]

---

## O Desafio: [Título da Dor]

Antes do projeto, [cliente] enfrentava:

- **[Sintoma 1]:** [impacto visível no negócio]
- **[Sintoma 2]:** [impacto visível no negócio]
- **[Sintoma 3]:** [impacto visível no negócio]

O problema raiz: [causa raiz em 1–2 frases]

[Tentativas anteriores: o que o cliente já tentou]

---

## [Nome da Metodologia] — [X] Pilares

[1 parágrafo contextualizando a abordagem]

### [Nome do Pilar 1]

[O que é + o que resolve — máximo 3 linhas]

### [Nome do Pilar 2]

[O que é + o que resolve — máximo 3 linhas]

### [Nome do Pilar 3]

[O que é + o que resolve — máximo 3 linhas]

---

## O Que Foi Implementado

Em [duração], entregamos:

| Entregável | Descrição | Impacto |
|-----------|-----------|---------|
| [Item 1] | [O que é] | [Para quê] |
| [Item 2] | [O que é] | [Para quê] |
| [Item 3] | [O que é] | [Para quê] |

Depois da implementação:
- [Processo X] passou a funcionar automaticamente
- [Processo Y] que exigia [esforço] agora [acontece em X]
- [Processo Z] PENDENTE: [dado a confirmar]

---

## Resultados em [X Período]

[Lead-in — 1 frase conectando esforço ao resultado]

- **[Métrica 1]:** [valor antes] → [valor depois] ([variação])
- **[Métrica 2]:** [PENDENTE: solicitar ao cliente]
- **[Proxy 1]:** [descrição qualitativa do que mudou]
- **[Proxy 2]:** [descrição qualitativa do que mudou]

[CTA 2 — botão + linha de suporte]

---

## O Que o Cliente Diz

> [PENDENTE: depoimento — ver proof-checklist.md para template de solicitação]
>
> — [Nome | Cargo | Empresa]

---

## O Que Você Pode Replicar

Este projeto funciona porque [princípio central]. Os aprendizados replicáveis:

- [Lição 1]: [aplicação prática]
- [Lição 2]: [aplicação prática]
- [Lição 3]: [aplicação prática]

---

## Pronto para Implementar Algo Similar?

[1 frase conectando o case à oferta atual]

[CTA 3 — botão + linha de suporte]

---

## Perguntas Frequentes

[PENDENTE: SEO/FAQ Agent vai preencher esta seção]

---

[CTA 4 — micro-CTA final]
[Texto alternativo + link de contato rápido]

---

<!-- METADADOS SEO: PENDENTE - SEO/FAQ Agent -->
```

### Step 4 — Listar Pendências

Ao final do arquivo, adicionar bloco de controle:

```markdown
---
## ⚠️ Pendências para o Proof Builder

- [ ] [Detalhe de pendência 1]
- [ ] [Detalhe de pendência 2]
- [ ] [Detalhe de pendência 3]

## Placeholders neste draft
- Linha X: [PENDENTE — depoimento]
- Linha Y: [PENDENTE — métrica X]
```

---

## Pós-condições

- [ ] `case-draft-v1.md` gerado com 12 seções
- [ ] Todos os placeholders explicitamente marcados com `[PENDENTE: ...]`
- [ ] Zero invenções — apenas dados do brief
- [ ] Lista de pendências no final do arquivo
