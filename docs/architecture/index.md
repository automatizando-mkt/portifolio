# Portfólio de Automação com IA — Architecture Document

## Architecture Overview

Portfólio profissional construído com Next.js 16+ App Router, usando SSG para performance máxima e deploy na Hostinger. Design baseado no Canvas Visual Design System (dark theme, accent orange #F97316).

## Architecture Reading Order

1. [Tech Stack](./tech-stack.md)
2. [Project Structure](./project-structure.md)
3. [Design Reference](./design-reference.md)
4. [Coding Standards](./coding-standards.md)
5. [Components](./components.md)
6. [Data Models](./data-models.md)
7. [Testing Strategy](./testing-strategy.md)

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 16+ App Router | SSG support, React ecosystem, Tailwind CSS |
| Rendering | SSG (Static Site Generation) | Performance, Hostinger compatibility, SEO |
| Styling | Tailwind CSS + Canvas DS tokens | Utility-first, matches reference DS |
| Content | MDX files in `content/cases/` | Easy to edit, git-managed, typed |
| Icons | Lucide React | Lightweight, tree-shakeable, consistent |
| Forms | React Hook Form + Zod | Validation, performance, type safety |
| Analytics | Google Analytics 4 | Industry standard, free |
| Deploy | Hostinger (SSG export) | User requirement |
