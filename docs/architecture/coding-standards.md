# Coding Standards

## Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Components | PascalCase | `CaseCard.tsx` |
| Pages | `page.tsx` (Next.js convention) | `app/cases/page.tsx` |
| Utilities | camelCase | `getAllCases.ts` |
| Types | PascalCase | `CaseData`, `ContactFormData` |
| Constants | SCREAMING_SNAKE | `MAX_CASES_PER_PAGE` |
| CSS Classes | Tailwind utilities | `text-white bg-[#050505]` |
| Content files | kebab-case | `automacao-vendas.mdx` |
| Test files | `.test.tsx` | `CaseCard.test.tsx` |

## TypeScript Rules

- `strict: true` always
- No `any` types — use `unknown` and narrow
- Explicit return types on exported functions
- Use Zod schemas for runtime validation at boundaries

## Component Rules

- Functional components only (no class components)
- Named exports (not default exports)
- Props interface defined above component
- Use `cn()` utility for conditional classes (clsx + tailwind-merge)

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## File Organization

- One component per file
- Co-locate tests next to source or in `/test`
- Keep components under 150 lines — extract sub-components if larger
- Barrel exports via `index.ts` only for component folders

## Import Order

1. React/Next.js imports
2. Third-party libraries
3. Internal components (`@/components/...`)
4. Internal utilities (`@/lib/...`)
5. Types
6. Styles

## Git Conventions

- Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`, `style:`
- Reference story: `feat: implement case gallery [Story 2.1]`
- One concern per commit
