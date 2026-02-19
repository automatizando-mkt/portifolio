# Technical Assumptions

## Repository Structure: Monorepo

Monorepo único no repositório AIOS existente. O portfólio será construído dentro do projeto atual.

## Service Architecture

Next.js App Router (monolito frontend com API routes para formulário de contato). SSG (Static Site Generation) para páginas de cases usando dados estruturados. Deploy como site estático exportado ou com Node.js server na Hostinger.

## Testing Requirements

- Unit tests para componentes React (Vitest + React Testing Library)
- E2E tests para fluxos críticos (formulário de contato, navegação)
- Lighthouse CI para validação de performance/acessibilidade
- Testes de responsividade visual

## Additional Technical Assumptions and Requests

- Usar o preset `nextjs-react` configurado no AIOS (Next.js 16+, React, TypeScript, Tailwind CSS)
- Cases gerenciados via arquivos markdown ou JSON em pasta dedicada (`content/cases/`)
- Imagens dos cases em pasta pública (`public/cases/`)
- Integração com Google Analytics via next/script
- Formulário de contato via API route do Next.js (envio por email via serviço como Resend, ou salvamento em arquivo/banco)
- Compatibilidade com Hostinger: **INVESTIGAR na Story 4.4** — verificar se o plano suporta Node.js server (VPS/Cloud) ou se necessário `next export` para hospedagem estática. Se SSG export, ajustar API route do formulário para serviço externo (ex: Formspree, Google Forms, ou serverless function externa)

---
