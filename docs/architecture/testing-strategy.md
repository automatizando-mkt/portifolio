# Testing Strategy

## Test Pyramid

```
         /\
        /E2E\           5% - Smoke tests only (navigation, form)
       /------\
      /Component\       30% - UI components render correctly
     /------------\
    /  Unit Tests  \    65% - Data loading, validation, utilities
   /----------------\
```

## What to Test

### Always Test
- `lib/cases.ts` — Case data loading and parsing
- `lib/contact.ts` — Contact form validation schema
- `lib/metadata.ts` — SEO metadata generation
- `lib/utils.ts` — Utility functions

### Component Tests
- `CaseCard` — Renders with correct data
- `ContactForm` — Validation feedback, submit states
- `Header` — Active page indicator
- `MetricCard` — Displays formatted metric

### Never Test
- Tailwind CSS classes
- Next.js framework internals
- Static page rendering (covered by build)
- Third-party library behavior

## Coverage Goals

```
- Utilities/lib: 90%+
- Components: 60%+
- Overall: 70%+
```

## Test Setup

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

## Test Examples

```typescript
// test/lib/cases.test.ts
describe('getAllCases', () => {
  it('should return all cases sorted by order', async () => {
    const cases = await getAllCases();
    expect(cases.length).toBeGreaterThan(0);
    expect(cases[0].order).toBeLessThanOrEqual(cases[1].order);
  });

  it('should validate case frontmatter against schema', async () => {
    const cases = await getAllCases();
    cases.forEach(c => {
      expect(() => caseSchema.parse(c)).not.toThrow();
    });
  });
});
```

## Lighthouse CI

Run Lighthouse after build to validate performance/SEO targets:

```bash
npx lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json
```

Target: 90+ in all 4 categories.
