# Task: Variants A/B

**Agent:** Variants (H)
**Input:** `case-final.md`
**Output:** `variants-package.md`
**Elicit:** false

---

## Descrição

Gerar pacote completo de variantes A/B: 5 variantes de hero, 10 variantes de CTA e 3 versões do bloco de resultados. Cada variante tem hipótese de conversão.

---

## Steps

### Step 1 — Extrair Base do case-final.md

Identificar:
- H1 e sub-headline atuais (V1 base)
- CTA atual (botão + linha de suporte)
- Bloco de resultados atual
- Ângulo do creative-brief

### Step 2 — Gerar 5 Hero Variants

Criar variante para cada ângulo, diferente do padrão:

**Regra:** Cada variant testa um ângulo DIFERENTE — não apenas sinônimos.

```markdown
## Hero Variants

### V1 (PADRÃO — em uso)
- **H1:** [headline atual]
- **Sub:** [sub atual]
- **Hipótese:** [por que este é o padrão]

### V2 — Ângulo: Dor / Identificação
- **H1:** [headline focada no problema, não no resultado]
- **Sub:** [contextualiza quem sente esse problema]
- **Hipótese:** Leads em fase de awareness (pesquisam o problema, não a solução) respondem melhor ao espelho da dor que ao resultado imediato.

### V3 — Ângulo: Velocidade / Urgência
- **H1:** [headline com timeframe explícito]
- **Sub:** [contextualiza o antes vs. depois no tempo]
- **Hipótese:** Leads com urgência operacional priorizam velocidade de resultado. Headline com tempo explícito aumenta relevância percebida.

### V4 — Ângulo: Processo / Segurança
- **H1:** [headline enfatizando o método documentado]
- **Sub:** [contextualiza que há sistema, não improviso]
- **Hipótese:** Leads conservadores ou que já foram "queimados" por soluções que não escalaram preferem o frame de segurança metodológica.

### V5 — Ângulo: Prova Social / Credibilidade
- **H1:** [headline com dado de prova ou cliente real]
- **Sub:** [1 resultado específico ou segmento do cliente]
- **Hipótese:** Leads em fase de consideração avançada precisam de prova social imediata para dar próximo passo.
```

### Step 3 — Gerar 10 CTA Variants

Criar variações de botão + linha de suporte:

```markdown
## CTA Variants

| # | Botão | Linha de suporte | Ângulo |
|---|-------|-----------------|--------|
| CTA-1 (PADRÃO) | [atual] | [atual] | Padrão |
| CTA-2 | Quero um diagnóstico grátis | Sem compromisso. 15 minutos. | Baixo risco |
| CTA-3 | Agendar uma conversa | Vamos entender seu processo | Consultivo |
| CTA-4 | Ver como isso funciona | Projeto real, resultado real | Curiosidade |
| CTA-5 | Implementar isso no meu negócio | Primeiros resultados em [X semanas] | Velocidade |
| CTA-6 | Falar com a equipe | Respondemos em até 24h | Acessibilidade |
| CTA-7 | Solicitar proposta personalizada | Escopo e valor sem compromisso | Direto |
| CTA-8 | Quero começar | Vagas limitadas este mês | Urgência/Escassez |
| CTA-9 | Receber diagnóstico grátis | Análise do seu processo atual | Valor entregue |
| CTA-10 | Enviar mensagem agora | WhatsApp ou formulário — escolha você | Canal flexível |
```

### Step 4 — Gerar 3 Versões de Resultados

```markdown
## Resultados Variants

### RV1 — Curta (para hero / scan rápido)
*Máximo 3 bullets de 1 linha. Foco no impacto macro.*

- ✓ [Resultado 1 — 8 palavras max]
- ✓ [Resultado 2 — 8 palavras max]
- ✓ [Resultado 3 — 8 palavras max]

*Onde usar:* Hero, acima do dobra, email marketing

### RV2 — Média (para seção de resultados)
*Bullets com contexto breve. Resultado + "em quanto tempo" + "impacto".*

- **[Resultado 1]:** [valor ou transformação] em [período] — [impacto no negócio em 1 linha]
- **[Resultado 2]:** [valor ou transformação] em [período] — [impacto no negócio em 1 linha]
- **[Resultado 3]:** [proxy qualitativo com especificidade]

*Onde usar:* Seção de resultados principal (S7)

### RV3 — Longa (para lead detalhista / download)
*Antes/depois completo com contexto, fonte e impacto detalhado.*

**[Resultado 1]**
- Antes: [situação específica]
- Depois: [situação específica]
- Em quanto tempo: [período]
- Fonte: [dashboard / relatório / cliente]
- Impacto no negócio: [1 parágrafo]

[repetir para cada resultado]

*Onde usar:* Proposta comercial, página de case detalhada, PDF de apresentação
```

### Step 5 — Prioridades de Teste

```markdown
## Ordem de Teste Recomendada

**Sprint 1 (maior impacto potencial):**
- Hero: V1 (padrão) vs V2 (dor) — ângulos opostos
- CTA: CTA-1 vs CTA-2 — baixo compromisso vs padrão

**Sprint 2:**
- Hero: vencedor do Sprint 1 vs V3 (velocidade)
- CTA: vencedor do Sprint 1 vs CTA-9 (valor entregue)

**Sprint 3 (refinamento):**
- Resultados: RV1 no hero vs RV2 no hero

**Métrica principal:** Taxa de clique no CTA principal (CTR)
**Métrica secundária:** Tempo na página (indicador de engajamento)
```

---

## Pós-condições

- [ ] `variants-package.md` gerado
- [ ] 5 hero variants com hipóteses de conversão
- [ ] 10 CTA variants com botão + linha de suporte
- [ ] 3 versões de resultados (curta/média/longa)
- [ ] Prioridades de teste definidas
