# Task: Discovery Briefing

**Agent:** Discovery (A)
**Input:** Informações brutas do projeto (verbal, doc, notas)
**Output:** `brief.json` + `brief-summary.md`
**Elicit:** true
**Blockers:** Brief deve ser APROVADO antes do pipeline avançar

---

## Descrição

Coletar dados estruturados do projeto através de entrevista em blocos. Adaptar profundidade ao volume de dados disponíveis. Se dados incompletos, sugerir proxies. Nunca avançar sem aprovação do usuário.

---

## Pré-condições

- [ ] Usuário iniciou novo case study
- [ ] Nenhum brief anterior existe para este projeto

---

## Steps

### Step 1 — Boas-vindas e Contexto

Apresentar o processo:
```
Vou te fazer perguntas em 5 blocos curtos.
Cada bloco tem 2–4 perguntas. Pode responder o que sabe —
o que não tiver, eu ajudo a encontrar alternativas.

Quando terminarmos, vou montar o Brief e te pedir aprovação antes de prosseguir.

Pronto? Me conta: qual projeto vamos transformar em case?
```

### Step 2 — Bloco 1: Cliente e Decisor

Fazer as 3 perguntas em sequência, esperar resposta completa:
1. Quem é o cliente? (segmento, localização, porte, modelo de receita)
2. Quem toma a decisão de contratar serviços como o seu? (cargo, perfil)
3. Quais são as objeções mais comuns desse perfil antes de contratar?

### Step 3 — Bloco 2: Dor e Situação Anterior

4. Qual era a dor real do cliente antes do projeto? (o que ele via + o que causava)
5. O que o cliente tentou antes que não funcionou?
6. Como estava o baseline? (tempo de resposta, conversão, leads/mês, tickets abertos, CAC)

**Se o usuário não tiver dados de baseline:**
```
Sem problema. Me conta como era a operação antes:
- Quantas horas a equipe gastava em [processo X]?
- O que acontecia quando um lead entrava fora do horário?
- Qual era a taxa de resposta nos primeiros 5 minutos?
(Se não souber, marcaremos como "não medido" e sugeriremos proxies)
```

### Step 4 — Bloco 3: Solução Implementada

7. O que foi implementado? (fases, principais entregáveis, ferramentas utilizadas)
8. O que passou a acontecer automaticamente após a implementação?
9. Qual foi o escopo do projeto? (duração, equipe envolvida)

### Step 5 — Bloco 4: Resultados e Provas

10. Quais resultados foram obtidos? Em quanto tempo?
11. Algum resultado inesperado — positivo ou não?
12. Quais provas existem? (prints, depoimento, log, dashboard, e-mail do cliente)

**Se não houver métricas diretas — ativar protocolo de proxies:**
```
Sem métricas exatas. Vou sugerir 6 proxies que podemos usar:
[listar proxies do data/proxy-metrics.yaml relevantes para o projeto]
Quais desses você consegue confirmar que aconteceram?
```

### Step 6 — Bloco 5: Oferta, CTA e Restrições

13. Qual serviço/pacote você quer vender após este case?
14. Qual a ação desejada do lead? (call, formulário, DM, WhatsApp)
15. Alguma restrição? (tom do cliente, compliance, termos proibidos, não mencionar concorrentes)

### Step 7 — Consolidação e Aprovação

Montar brief estruturado seguindo `templates/brief-schema.yaml`:

```
Aqui está o Brief consolidado:

[exibir resumo estruturado dos dados coletados]

---
RESUMO HUMANO (10 linhas):
[resumo narrativo do projeto — o que foi feito, para quem, resultado]

---
Pendências identificadas:
- [item 1 — dado faltante]
- [item 2 — prova a coletar]

O brief está correto? Posso prosseguir para a estratégia?
```

**Aguardar aprovação explícita.** Não avançar sem "sim", "aprovado" ou equivalente.

### Step 8 — Export

Após aprovação, exportar:
1. `brief.json` — schema completo (ver `templates/brief-schema.yaml`)
2. `brief-summary.md` — resumo humano + lista de pendências

---

## Pós-condições

- [ ] Brief JSON gerado e salvo
- [ ] Usuário aprovou o brief explicitamente
- [ ] Pendências documentadas (provas faltantes, métricas a coletar)
- [ ] brief-summary.md gerado

---

## Erros Comuns

| Situação | Ação |
|----------|------|
| Usuário não sabe o baseline | Usar proxies da tabela em `data/proxy-metrics.yaml` |
| Usuário quer avançar sem aprovar | Bloquear: "Confirma que o brief está correto antes de prosseguir?" |
| Dados do cliente confidenciais | Perguntar grau de confidencialidade antes de escrever |
| Sem depoimento disponível | Marcar como pendente; Proof Builder cria template de pedido |
