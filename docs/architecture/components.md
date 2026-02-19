# Components Architecture

## Component Hierarchy

```
RootLayout (app/layout.tsx)
├── Header
│   ├── Logo
│   ├── NavLinks
│   └── MobileMenu
├── {Page Content}
│   ├── Hero (reusable)
│   ├── Section components
│   └── Page-specific components
└── Footer
    ├── NavLinks
    ├── SocialLinks
    └── ContactInfo
```

## Layout Components

### Header
- Fixed top navigation
- Logo + nav links + mobile hamburger
- Props: none (reads pathname for active state)
- State: mobile menu open/close

### Footer
- Links, social icons, contact info, copyright
- Props: none (static content)

### Container
- Max-width wrapper (`max-w-[90rem] mx-auto px-6 lg:px-12`)
- Props: `children`, `className?`

## UI Components

### Button
- Variants: `primary` (accent fill), `outline` (border), `ghost` (text only)
- Props: `variant`, `size`, `href?`, `children`, `icon?`
- Canvas DS style: border with corner accents on hover

### Card
- Base card with border and hover effect
- Props: `children`, `className?`, `href?`
- Hover: `border-[#F97316]/30`

### SectionHeading
- Section title with optional label
- Props: `title`, `label?`, `className?`
- Pattern: Large text + small mono uppercase label

### MetricCard
- Large number + small label
- Props: `value` (string like "+300%"), `label`
- Used in case results sections

### Badge
- Small tag/category indicator
- Props: `children`, `variant?`
- Style: `font-mono text-xs uppercase tracking-widest`

### ContactForm
- Form with Name, Email, Company?, Message
- Client-side validation with React Hook Form + Zod
- Submit: POST to external service (Formspree/Web3Forms)
- States: idle, loading, success, error

## Section Components

### Hero
- Reusable hero section
- Props: `title`, `subtitle?`, `cta?`, `image?`
- Used on Home, Cases pages

### CasePreview
- Grid of 3 featured case cards for Home page
- Props: `cases: CaseData[]`

### ValueProposition
- Grid of benefit cards
- Props: `items: { icon, title, description }[]`

### CTA
- Call-to-action section with heading and button
- Props: `title`, `description`, `buttonText`, `href`

## Effect Components

### FadeSlideIn
- Wrapper component for scroll-triggered animation
- Uses Intersection Observer
- Props: `children`, `delay?`, `className?`

### GridBackground
- SVG grid pattern background overlay
- Props: `className?`

## Data Flow

```
content/cases/*.mdx
    ↓ (build time)
lib/cases.ts (getAllCases, getCaseBySlug)
    ↓ (SSG)
app/cases/page.tsx → CaseCard[]
app/cases/[slug]/page.tsx → Full case render
app/page.tsx → CasePreview (featured cases)
```
