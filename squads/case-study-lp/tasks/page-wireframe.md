# Task: Page Wireframe

**Agent:** Page Architect (C)
**Input:** `brief.json` + `creative-brief.md`
**Output:** `wireframe.md`
**Elicit:** false (execução autônoma, revisar ao final)

---

## Descrição

Criar wireframe textual completo da página com mapa das 12 seções obrigatórias, copy de CTAs, microcopy de botões e objetivos de conversão por seção.

---

## Pré-condições

- [ ] `brief.json` aprovado
- [ ] `creative-brief.md` gerado com ângulo, pilares e outline

---

## Steps

### Step 1 — Ler Inputs

Extrair do creative-brief.md:
- H1 proposto
- Pilares nomeados
- Mapa de objeções
- Outline de seções

### Step 2 — Gerar Wireframe Completo

Produzir `wireframe.md` com todas as 12 seções:

```markdown
# Wireframe — [Nome do Case]
*Gerado por: Page Architect | Squad: case-study-lp*

---

## [S1] HERO
**Objetivo de conversão:** Capturar atenção e comunicar resultado em 5 segundos
**Formato:** Headline + sub + copy curto + prova visual + CTA 1
**Elementos:**
- H1: [headline do creative-brief]
- Sub-headline: [1 linha contexto]
- Proof element: [número, badge ou print a usar aqui]
- CTA 1 (hero): [texto do botão] + [linha de suporte]
**Regra:** O lead deve entender resultado + quem é o cliente sem scrollar

---

## [S2] RESUMO EM 30 SEGUNDOS
**Objetivo:** Qualificar lead rapidamente ("esse case é para mim?")
**Formato:** 3 bullets de resultado, sem processo
**Elementos:**
- Bullet 1: [resultado ou transformação 1]
- Bullet 2: [resultado ou transformação 2]
- Bullet 3: [resultado ou transformação 3]

---

## [S3] CONTEXTO DO CLIENTE
**Objetivo:** Criar identificação com o ICP
**Formato:** 1 parágrafo + 3 bullets de contexto
**Elementos:**
- Quem é: [segmento + porte + localização]
- O que faz: [modelo de receita]
- Setup antes do projeto: [3 bullets]

---

## [S4] O PROBLEMA (ANTES)
**Objetivo:** Validar a dor e gerar empatia — lead pensa "esse sou eu"
**Formato:** Título da dor + bullets de sintomas + causa raiz
**Elementos:**
- Título: "O desafio: [título conciso da dor]"
- Sintomas: [3–4 bullets do que acontecia visivelmente]
- Causa raiz: [1 parágrafo explicando por que acontecia]

---

## [S5] ESTRATÉGIA — [NOME DA METODOLOGIA]
**Objetivo:** Demonstrar que há um método — não foi sorte
**Formato:** Introdução + 3–5 cards de pilar
**Elementos:**
- Intro: "A solução foi construída em [X] pilares:"
- Pilar 1: [nome] — [o que resolve]
- Pilar 2: [nome] — [o que resolve]
- Pilar 3: [nome] — [o que resolve]

---

## [S6] EXECUÇÃO — O QUE FOI IMPLEMENTADO
**Objetivo:** Mostrar escopo, profundidade e entregáveis compradores
**Formato:** Intro + tabela de entregáveis + timeline opcional
**Elementos:**
- Intro: "Em [duração], implementamos:"
- Tabela: [Entregável | Descrição | Para quê serve]
- Mudança de processo: [o que passou a acontecer automaticamente]

---

## [S7] RESULTADOS
**Objetivo:** Converter com prova e dados — o pico de persuasão
**Formato:** Headline de resultado + blocos de prova + CTA 2
**Elementos:**
- Headline: "[Resultado principal em destaque]"
- Bloco antes/depois se disponível
- Métricas em bullets ou grid
- CTA 2 (pós-resultados): [texto do botão] + [linha de suporte]

---

## [S8] DEPOIMENTO / PROVA SOCIAL
**Objetivo:** Neutralizar risco percebido com validação externa
**Formato:** Quote em destaque + nome/cargo/empresa
**Elementos:**
- Quote: [depoimento ou mini-quote de feedback]
- Atribuição: [Nome | Cargo | Empresa]
- Se indisponível: [bloco substituto do Proof Builder]

---

## [S9] TAKEAWAYS
**Objetivo:** Gerar desejo de replicar ("quero isso para mim")
**Formato:** Intro + 3–5 lições replicáveis em bullets
**Elementos:**
- Intro: "O que você pode replicar deste projeto:"
- Lições: [bullets com insight + aplicação prática]

---

## [S10] CTA FINAL
**Objetivo:** Converter lead que leu tudo — convite ao diagnóstico
**Formato:** Headline persuasiva + copy + CTA 3 + proof de baixo risco
**Elementos:**
- Headline: "[Pergunta ou afirmação direta ao ICP]"
- Copy: [1–2 frases conectando o case à oferta atual]
- CTA 3 (final): [texto do botão]
- Proof de risco: "Sem compromisso. [X] minutos. [Benefício]."

---

## [S11] FAQ
**Objetivo:** SEO + neutralizar as últimas objeções
**Formato:** 6–10 perguntas com respostas de 1–3 linhas
**Elementos:** [serão definidos pelo SEO/FAQ Agent]
**Nota:** Incluir schema JSON-LD de FAQ para SEO

---

## [S12] MICRO-CTA
**Objetivo:** Capturar quem ainda hesita — contato rápido e simples
**Formato:** 1 linha + botão ou link
**Elementos:**
- Texto: "Pronto para começar? [link]" ou "Prefere falar por WhatsApp? [link]"
- CTA 4 (micro): [texto alternativo ao CTA 3]
```

### Step 3 — Validar CTAs

Verificar que:
- [ ] CTA aparece em S1 (hero)
- [ ] CTA aparece em S7 (pós-resultados)
- [ ] CTA aparece em S10 (final)
- [ ] CTA aparece em S12 (micro, opcional mas recomendado)
- [ ] Cada CTA tem linha de suporte abaixo do botão

### Step 4 — Entrega

Apresentar resumo do wireframe:
```
Wireframe pronto — [X] seções mapeadas.

CTAs posicionados: S1 (hero) | S7 (pós-resultados) | S10 (final) | S12 (micro)
Pilares: [nomes]
Prova social: [S8 — disponível/placeholder]

O Case Writer pode avançar.
```

---

## Pós-condições

- [ ] `wireframe.md` gerado com 12 seções
- [ ] CTAs em 3+ posições
- [ ] Objetivo de conversão definido por seção
- [ ] Microcopy de botões rascunhado
