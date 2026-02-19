# Data Models

## Case Data Model

```typescript
// lib/cases.ts

export interface CaseData {
  // Metadata (from MDX frontmatter)
  title: string;
  slug: string;
  description: string;       // Short description for cards
  heroImage: string;          // Path to hero image
  images?: string[];          // Additional images
  tags: string[];             // Category tags
  metrics: CaseMetric[];      // Impact metrics
  technologies: string[];     // Tech used
  featured: boolean;          // Show on home page
  order: number;              // Display order

  // Content (MDX body)
  content: string;            // Compiled MDX content
}

export interface CaseMetric {
  label: string;              // e.g., "Aumento em conversão"
  value: string;              // e.g., "+45%"
}
```

## Case MDX Frontmatter Schema

```typescript
// lib/cases.ts
import { z } from 'zod';

export const caseSchema = z.object({
  title: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  description: z.string().min(10).max(200),
  heroImage: z.string(),
  images: z.array(z.string()).optional(),
  tags: z.array(z.string()).min(1),
  metrics: z.array(z.object({
    label: z.string(),
    value: z.string(),
  })).min(1),
  technologies: z.array(z.string()).min(1),
  featured: z.boolean().default(false),
  order: z.number().int().positive(),
});
```

## Contact Form Data

```typescript
// lib/contact.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
```

## Navigation Data

```typescript
// lib/navigation.ts

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Cases', href: '/cases' },
  { label: 'Contato', href: '/contato' },
] as const;
```

## Services Data

```typescript
// content/services.ts

export interface Service {
  title: string;
  description: string;
  icon: string;              // Lucide icon name
  benefits: string[];
}

export const SERVICES: Service[] = [
  // Defined in code (small, static dataset)
];
```

## SEO Metadata

```typescript
// lib/metadata.ts
import type { Metadata } from 'next';

export function generateCaseMetadata(caseData: CaseData): Metadata {
  return {
    title: `${caseData.title} | Portfólio`,
    description: caseData.description,
    openGraph: {
      title: caseData.title,
      description: caseData.description,
      images: [caseData.heroImage],
      type: 'article',
    },
  };
}
```
