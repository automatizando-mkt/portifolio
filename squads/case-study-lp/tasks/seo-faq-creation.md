# Task: SEO FAQ Creation

**Agent:** SEO FAQ (F)
**Input:** `brief.json` + `case-draft-v2.md`
**Output:** `case-draft-v3.md` (com FAQ, metadados e headings otimizados)
**Elicit:** false

---

## Descrição

Criar FAQ com intenção comercial, gerar metadados SEO e revisar headings para ranqueamento. Inserir tudo na v2 para gerar v3.

---

## Steps

### Step 1 — Análise de Intenção de Busca

A partir do `brief.json`, identificar:
- Termos que o ICP buscaria antes de contratar
- Problemas que o segmento pesquisa no Google
- Nome das ferramentas usadas (potencial de busca técnica)
- Perguntas de objeção que surgem em reuniões de venda

### Step 2 — Criar 6–10 FAQs

**Regras por pergunta:**
- Ter intenção clara: informativa + comercial
- Resposta em máximo 3 linhas (75 palavras)
- CTA suave em perguntas sobre preço, processo e prazo
- Incluir termos do nicho naturalmente

**Categorias obrigatórias:**
1. O que é / como funciona
2. Para quem é indicado (qualificação de ICP)
3. Quanto tempo / quanto custa (direcionar ao diagnóstico)
4. Precisa de TI / equipe técnica? (redução de complexidade)
5. E se parar de funcionar? (redução de risco)
6. Como começar / próximos passos (CTA)

**Extras conforme nicho:**
- Diferença entre [ferramenta A] e [ferramenta B]
- É possível integrar com [CRM/sistema atual]?
- Funciona sem WhatsApp API Oficial?

### Step 3 — Gerar Metadados SEO

```yaml
---
seo:
  title: "[Resultado em headline] — Case [Segmento] | [Sua Marca]"
  description: "[Resultado específico] em [prazo]. Veja como [empresa/segmento] [transformação]. [CTA suave — 150 chars máx]"
  slug: "/cases/[cliente-slug]-[solucao-slug]"
  og_title: "[Headline mais curta — para redes sociais]"
  og_description: "[1 frase de resultado + convite]"
  keywords:
    - [termo 1 — head term do nicho]
    - [termo 2 — long tail específico]
    - [termo 3 — intenção comercial]
  schema_type: "Article"
  estimated_read_time: "[X min de leitura]"
---
```

### Step 4 — Revisar Headings para SEO

Percorrer todos os H2/H3 do case e verificar:
- Incluem termo de busca relevante?
- São descritivos o suficiente (não só criativos)?
- Fazem sentido fora do contexto da página (snippet)?

Ajustar sem perder a voz da marca.

### Step 5 — Adicionar Schema JSON-LD de FAQ

Ao final do arquivo, adicionar bloco de schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Pergunta 1]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Resposta 1]"
      }
    }
  ]
}
</script>
```

### Step 6 — Injetar FAQ e Metadados na v2

- Inserir bloco de metadados no frontmatter
- Substituir `[PENDENTE: SEO/FAQ Agent vai preencher esta seção]` pelo FAQ completo
- Adicionar schema JSON-LD no final
- Atualizar H1/H2 se necessário para SEO

---

## Pós-condições

- [ ] `case-draft-v3.md` gerado com FAQ integrado
- [ ] Metadados SEO no frontmatter do arquivo
- [ ] Schema JSON-LD de FAQ presente
- [ ] Headings H1/H2 revisados para SEO on-page
- [ ] 6–10 FAQs com intenção comercial e respostas curtas
