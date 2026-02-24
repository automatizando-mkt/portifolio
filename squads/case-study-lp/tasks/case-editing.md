# Task: Case Editing

**Agent:** Editor (G)
**Input:** `case-draft-v3.md`
**Output:** `case-final.md` + `qa-report.md`
**Elicit:** true (se score < 7, apresentar melhorias antes de finalizar)

---

## Descrição

Revisar o case completo contra o checklist QA, elevar ao padrão "agência top", gerar score 0–10 justificado e produzir a versão final aprovada.

---

## Steps

### Step 1 — Leitura Crítica

Ler o case completo UMA vez como se fosse o lead:
- O que entendo sobre o resultado nos primeiros 5 segundos?
- Consigo identificar para quem é em 10 segundos?
- Tenho vontade de continuar lendo após o hero?
- O CTA faz sentido no momento em que aparece?

### Step 2 — Checklist QA por Seção

Para cada seção, aplicar:

| Critério | S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10 | S11 | S12 |
|----------|----|----|----|----|----|----|----|----|----|----|-----|-----|
| Objetivo de conversão atendido | | | | | | | | | | | | |
| Sem parágrafo > 3 linhas | | | | | | | | | | | | |
| Sem adjetivo vazio | | | | | | | | | | | | |
| Liga ação → mecanismo → benefício | | | | | | | | | | | | |
| CTA com linha de suporte (onde existe) | | | | | | | | | | | | |

### Step 3 — Dimensões de Score

Calcular score 0–10 para cada dimensão:

**Clareza (20%)**
- 10: Lead entende resultado + ICP em 5 segundos no hero
- 7: Entende, mas precisa scrollar um pouco
- 5: Precisa esforço para entender
- < 5: Não está claro

**Prova (25%)**
- 10: Número real + depoimento + before/after
- 8: Número real + 1 bloco de prova adicional
- 6: Apenas proxy qualitativo bem formatado
- < 5: Sem prova real, apenas afirmações

**Escaneabilidade (20%)**
- 10: Todos os pontos críticos em bullet, headings descritivos, zero parágrafo > 3 linhas
- 7: Maioria ok, 1–2 exceções
- 5: Parágrafos longos em seções críticas (hero, resultados)
- < 5: Texto corrido, sem estrutura visual

**Persuasão (20%)**
- 10: Fluxo dor → método → resultado → CTA sem gaps, objeções neutralizadas
- 7: Fluxo claro, mas 1 gap ou objeção não tratada
- 5: Falta conexão entre seções
- < 5: Seções desconectadas

**Consistência (15%)**
- 10: Tom, promessa e CTA alinhados do hero ao micro-CTA
- 7: Pequenas inconsistências de tom em 1–2 seções
- 5: CTA não alinha com promessa do hero
- < 5: Voz muda ao longo da página

### Step 4 — Calcular Score Final

```
Score = (Clareza × 0.20) + (Prova × 0.25) + (Escaneabilidade × 0.20) + (Persuasão × 0.20) + (Consistência × 0.15)
```

**Se score < 7:** Apresentar melhorias obrigatórias e aguardar confirmação antes de finalizar.

```
Score atual: [X]/10

Melhorias obrigatórias antes de aprovar:
1. [Seção X]: [problema específico] → [como corrigir]
2. [Seção Y]: [problema específico] → [como corrigir]

Posso corrigir agora e gerar a versão final? (sim/quero ver a versão corrigida primeiro)
```

### Step 5 — Aplicar Correções

Aplicar todas as melhorias obrigatórias.
Melhorias recomendadas: aplicar se melhora o score sem alterar a substância.

### Step 6 — Gerar Relatório QA

Criar `qa-report.md`:

```markdown
# Relatório QA — [Nome do Case]
*Data: [data] | Squad: case-study-lp | Agent: Editor*

## Score Final: [X]/10

### Dimensões
| Dimensão | Peso | Score | Justificativa |
|----------|------|-------|---------------|
| Clareza | 20% | [X] | [justificativa específica] |
| Prova | 25% | [X] | [justificativa específica] |
| Escaneabilidade | 20% | [X] | [justificativa específica] |
| Persuasão | 20% | [X] | [justificativa específica] |
| Consistência | 15% | [X] | [justificativa específica] |

### Melhorias Aplicadas
- [Seção X]: [o que foi corrigido e por quê]

### Melhorias Documentadas (não aplicadas)
- [Recomendação futura com baixa prioridade]

### Pontos Fortes
- [O que funciona bem neste case]

### Checklist de Aprovação
- [x] Promessa clara em 5 segundos
- [x] ICP identificável em 10 segundos
- [x] 1+ bloco forte de prova
- [x] Bloco de resultados escaneável
- [x] Metodologia com pilares nomeados
- [x] CTA 3x com alinhamento de oferta
- [x] Zero invenções
- [x] FAQ derruba 5 objeções
```

### Step 7 — Produzir case-final.md

Versão final limpa, sem comentários internos do squad, pronta para implementação.

---

## Pós-condições

- [ ] `case-final.md` gerado — limpo, sem pendências marcadas
- [ ] `qa-report.md` gerado com score justificado
- [ ] Score ≥ 7/10
- [ ] Todos os [PENDENTE] resolvidos ou documentados no qa-report
