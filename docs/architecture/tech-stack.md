# Tech Stack

## Core Technologies

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| Framework | Next.js | ^16.0.0 | App Router, SSG, API routes |
| Language | TypeScript | ^5.0.0 | Type safety, strict mode |
| Styling | Tailwind CSS | ^4.0.0 | Utility-first CSS |
| UI Components | Lucide React | latest | Icons |
| Content | MDX | ^3.0.0 | Cases content files |
| Forms | React Hook Form | ^7.50.0 | Form handling |
| Validation | Zod | ^3.22.0 | Schema validation |
| Testing (Unit) | Vitest | ^1.2.0 | Unit tests |
| Testing (Component) | Testing Library | ^14.0.0 | Component tests |
| Analytics | GA4 | - | Google Analytics via next/script |

## Dependencies

```bash
# Core
npx create-next-app@latest portfolio --typescript --tailwind --app --eslint

# Content
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter

# UI & Forms
npm install lucide-react react-hook-form @hookform/resolvers zod

# Dev
npm install -D vitest @testing-library/react @testing-library/jest-dom
npm install -D @types/node @types/react
npm install -D prettier eslint-config-prettier
```

## Build & Deploy Strategy

**Strategy: SSG Export (`next export`)**

Motivo: Hostinger standard hosting não suporta Node.js server. Usaremos `output: 'export'` no `next.config.ts` para gerar HTML estático.

**Implicações:**
- API routes (`/api/contact`) NÃO funcionam com export estático
- Formulário de contato usará serviço externo (Formspree, Web3Forms, ou Google Forms)
- Todas as páginas são pré-renderizadas em build time
- Imagens precisam usar `<img>` nativo ou loader customizado (Next.js Image requer server)

```typescript
// next.config.ts
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better for static hosting
};
```

## Fonts

**Primary:** Inter (Google Fonts)
**Fallback:** system-ui, -apple-system, sans-serif

Loaded via `next/font/google` for optimal performance.
