# Task: Proof Building

**Agent:** Proof Builder (E)
**Input:** `brief.json` + `case-draft-v1.md`
**Output:** `case-draft-v2.md` + `proof-checklist.md`
**Elicit:** false

---

## Descrição

Analisar todas as provas disponíveis no brief, criar blocos de prova formatados e injetá-los na v1. Gerar checklist do que ainda precisa ser coletado.

---

## Steps

### Step 1 — Inventário de Provas

Ler `brief.json` campo `provas`:

```
Provas disponíveis: [lista do brief]
Provas pendentes: [lista do brief]
```

Para cada prova disponível, classificar:

| Prova | Tipo | Força | Onde usar na página |
|-------|------|-------|---------------------|
| [item] | número / quote / print / antes-depois | ⭐⭐⭐⭐⭐ | [seção] |

### Step 2 — Criar Blocos de Prova

Para cada prova disponível, criar bloco formatado pronto para inserção:

**Se prova é número:**
```markdown
**[Métrica]**
~~[valor antes]~~ → **[valor depois]**
↑ [variação] em [período]
```

**Se prova é depoimento:**
```markdown
> "[quote]"
>
> — [Nome | Cargo | Empresa]
```

**Se prova é antes/depois:**
```markdown
| | Antes | Depois |
|--|-------|--------|
| [processo] | [antes] | [depois] |
```

**Se prova é proxy qualitativo:**
```markdown
- [Processo X] que antes exigia [Y horas/esforço] passou a [acontecer automaticamente]
- [Resultado qualitativo observado em X semanas]
```

### Step 3 — Protocolo de Depoimento Ausente

Se `brief.provas.tipo` não inclui "depoimento":

Criar `proof-checklist.md` com:
1. Template de pedido de depoimento (3 perguntas)
2. Mini-quote de feedback baseado em mensagens existentes (marcado como "resumo do feedback")
3. Instrução para onde posicionar quando chegar

Se nenhum feedback existe, criar placeholder:
```markdown
> [PENDENTE: Depoimento aguardando coleta.
>  Template de pedido disponível em proof-checklist.md]
```

### Step 4 — Injetar Provas na v1

Percorrer `case-draft-v1.md` e:

1. Substituir `[PENDENTE: depoimento]` pelo bloco de quote ou template
2. Substituir `[PENDENTE: métrica X]` pelo bloco de resultado formatado
3. Substituir `[PENDENTE: dado a confirmar]` pelo proxy qualitativo
4. Adicionar blocos de prova extras nas seções de Resultados e Takeaways

### Step 5 — Gerar Proof Checklist

```markdown
# Proof Checklist — [Nome do Case]

## O que você já tem ✅
- [prova 1 disponível]
- [prova 2 disponível]

## O que coletar do cliente 📋
- [ ] **Depoimento:** Enviar template abaixo e aguardar resposta
- [ ] **Print do dashboard:** Solicitar screenshot de [data X]
- [ ] **Número de [métrica]:** Verificar relatório de [ferramenta]

## Template de Pedido de Depoimento
[template com 3 perguntas]

## Como apresentar cada prova
- Print de dashboard → seção Resultados, abaixo dos bullets
- Depoimento → seção S8, com nome/cargo/empresa
- Antes/depois em tabela → seção S4 (problema) ou S7 (resultados)
```

---

## Pós-condições

- [ ] `case-draft-v2.md` gerado com provas injetadas
- [ ] `proof-checklist.md` gerado
- [ ] Zero placeholders de prova sem tratamento (ou substituídos ou documentados)
- [ ] Bloco de resultados escaneável presente em S7
