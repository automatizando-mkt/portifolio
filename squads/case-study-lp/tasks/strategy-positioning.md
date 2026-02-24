# Task: Strategy Positioning

**Agent:** Strategist (B)
**Input:** `brief.json` (aprovado)
**Output:** `creative-brief.md` (tese + pilares + outline)
**Elicit:** true (confirmação de ângulo e pilares)

---

## Descrição

Transformar o Brief em tese persuasiva com ângulo claro, promessa responsável, pilares de metodologia e outline completo da página.

---

## Pré-condições

- [ ] `brief.json` existe e está aprovado (`meta.aprovado: true`)
- [ ] Dados do cliente, dor, solução e resultado foram coletados

---

## Steps

### Step 1 — Análise do Brief

Ler e extrair do `brief.json`:
- ICP: quem compra, objeções principais
- Dor: sintoma + causa raiz
- Resultado: métricas ou proxies
- Provas: o que existe e o que falta
- Oferta: o que vender após o case

### Step 2 — Seleção do Ângulo

Analisar os dados e propor o melhor ângulo:

```
Baseado no brief, o melhor ângulo para este case é:

[ÂNGULO]: [Nome do ângulo]
[POR QUÊ]: [1–2 frases justificando baseado nos dados disponíveis]

Alternativas:
- [Ângulo 2]: menos forte porque [motivo]
- [Ângulo 3]: válido se [condição]

Confirma que seguimos com o ângulo [X]?
```

**Ângulos disponíveis:** Resultado | Velocidade | Segurança/Processo | Metodologia | Clareza/Controle

### Step 3 — Definir Pilares

Propor 3–5 pilares com nomes memoráveis baseados na solução implementada:

```
Pilares propostos para a metodologia:

1. [NOME DO PILAR 1] — [o que resolve e por quê importa]
2. [NOME DO PILAR 2] — [o que resolve e por quê importa]
3. [NOME DO PILAR 3] — [o que resolve e por quê importa]

Os pilares devem ser: específicos, memoráveis, não jargão técnico puro.
Quer ajustar algum nome ou adicionar/remover pilar?
```

### Step 4 — Promessa Responsável

Escrever H1 proposto e sub-headline baseado no ângulo e nos dados reais:

Regras:
- H1 deve comunicar resultado ou transformação em < 12 palavras
- Sub-headline em 1 linha explica quem é o cliente
- Sem inventar — apenas o que o brief sustenta

### Step 5 — Mapa de Objeções

Listar 5 objeções principais do ICP e definir onde neutralizar:

```markdown
| Objeção | Seção | Como neutralizar |
|---------|-------|-----------------|
| "Muito caro" | Resultados | ROI calculado / tempo de payback |
| "Muito complexo" | Pilares | Simplificar o processo visualmente |
| "E se não funcionar?" | Depoimento + FAQ | Prova social + garantia |
| "Não é para meu segmento" | Contexto do Cliente | Especificidade do ICP |
| "Preciso de TI própria" | FAQ | Explicar que não precisa de equipe técnica |
```

### Step 6 — Outline da Página

Gerar outline completo com H1/H2 e objetivo de cada seção:

```markdown
# [H1 proposto]
> [Sub-headline]

## Resumo em 30 Segundos
[3 bullets de resultado]

## [Nome do Cliente] — Contexto
[Quem é, tamanho, segmento]

## O Problema: [título da dor]
[Antes do projeto]

## [Nome da Metodologia] em [X] Pilares
[Pilares nomeados]

## O que Implementamos
[Entregáveis como cardápio]

## Resultados em [X Período]
[Métricas + proxies]

## [Cliente diz / Feedback]
[Depoimento ou substituto]

## O que Você Pode Replicar
[Takeaways]

## [CTA Final — título persuasivo]
[Convite ao diagnóstico]

## Perguntas Frequentes
[FAQ]

## [Micro-CTA]
[Contato rápido]
```

### Step 7 — Entrega e Confirmação

```
Creative Brief pronto. Resumo:

- Ângulo: [X]
- Promessa: "[H1 proposto]"
- Pilares: [nomes]
- Objeções mapeadas: [X]
- Outline: [X] seções

Confirma que posso passar para o Page Architect?
```

---

## Pós-condições

- [ ] `creative-brief.md` gerado
- [ ] Ângulo aprovado pelo usuário
- [ ] Pilares com nomes validados
- [ ] Outline completo

---

## Anti-padrões

- Prometer resultado que não está no brief
- Criar pilares genéricos ("Análise", "Implementação", "Suporte")
- Ignorar objeções do ICP definidas no brief
- H1 com adjetivo vazio ("incrível", "revolucionário")
