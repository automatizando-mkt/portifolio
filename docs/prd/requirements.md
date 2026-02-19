# Requirements

## Functional

- **FR1:** O site deve ter página Home com hero section, proposta de valor, preview de cases e CTAs de conversão
- **FR2:** O site deve ter página Sobre com informações profissionais, trajetória e expertise em automação com IA
- **FR3:** O site deve ter página Serviços listando os tipos de automação oferecidos com descrições
- **FR4:** O site deve ter página Cases (galeria) com grid de todos os cases, cada card exibindo imagem, título, descrição curta e tags/categoria
- **FR5:** Cada case deve ter página individual dedicada com: hero com imagem do projeto, contexto/desafio, solução implementada, resultados/métricas de impacto, tecnologias usadas e CTA
- **FR6:** O site deve ter página Contato com formulário funcional que envia e-mail ou salva lead
- **FR7:** Todas as páginas devem seguir o mesmo padrão de design consistente
- **FR8:** O site deve ter navegação principal (header) com menu entre todas as páginas e logo
- **FR9:** O site deve ter footer consistente com links, redes sociais e informações de contato
- **FR10:** Os cases devem ser gerenciáveis via dados estruturados (markdown ou JSON) sem necessidade de alterar código para adicionar novos cases
- **FR11:** O formulário de contato deve validar campos obrigatórios e exibir feedback ao usuário
- **FR12:** O design visual deve ser baseado no design system `design systems/canvas-visual.aura.build/design-system.html` como referência principal, complementado por análise de outros HTMLs do repositório conforme necessário

## Non Functional

- **NFR1:** O site deve carregar em menos de 3 segundos (LCP) em conexão 3G
- **NFR2:** O site deve ser totalmente responsivo (mobile, tablet, desktop) com abordagem mobile-first
- **NFR3:** O site deve atingir score 90+ no Lighthouse para Performance, Accessibility, Best Practices e SEO
- **NFR4:** O site deve ter SEO avançado: metadata por página, sitemap.xml, robots.txt, Open Graph tags, schema.org (Person, Organization, CreativeWork para cases)
- **NFR5:** O site deve ter Google Analytics ou equivalente integrado para rastreamento de visitas
- **NFR6:** O site deve ser hospedável na Hostinger (compatível com Node.js hosting ou SSG/export estático)
- **NFR7:** O código deve seguir TypeScript strict mode, ESLint, Prettier
- **NFR8:** O site deve ter acessibilidade WCAG 2.1 AA (semântica, ARIA, navegação por teclado, contraste)
- **NFR9:** Imagens devem usar Next.js Image optimization com lazy loading e formatos modernos (WebP/AVIF)

---
