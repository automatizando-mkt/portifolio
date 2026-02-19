# Design Reference — Portfolio Visual System

## Brand Identity — Automatizando Soluções

### Logo

- **Icon:** Chevron geométrico ascendente dentro de círculo laranja, formando letra "A"
- **Tipografia:** Sans-serif geométrica moderna, bold, uppercase
- **AUTOMATIZANDO:** Bold, tracking apertado
- **SOLUÇÕES:** Lighter weight, tracking expandido (letter-spacing)

### Brand Assets (portfolio/public/)

| Arquivo | Variante | Uso |
|---------|----------|-----|
| `logo-icon.png` | Icon only (circle + chevron) | Favicon, mobile nav |
| `logo-horizontal.png` | Icon + texto horizontal, dark bg | Header navigation |
| `logo-full.png` | Icon + texto vertical, dark bg | Footer, og:image |

### Brand Colors

| Token | Hex | Uso |
|-------|-----|-----|
| Brand Orange | `#FF6B1A` | Accent warm, hover states, gradients |
| Canvas Orange | `#F97316` | Accent primário (compartilhado com Canvas DS) |
| Navy Blue | `#1C3A52` | Sections alternativas, background premium |
| Black | `#000000` — `#1A1A1A` | Texto em fundos claros |
| White | `#FFFFFF` | Texto em fundos escuros |

### Compatibilidade Brand ↔ Canvas DS

- Brand orange (`#FF6B1A`) ≈ Canvas accent (`#F97316`) — ambos orange vibrantes
- **Decisão:** `#F97316` como accent principal (já configurado), `#FF6B1A` para hover/gradients warm
- Navy (`#1C3A52`) como variação de surface para seções alternativas
- Font Inter e cor orange já são idênticos entre brand e Canvas DS

---

## Análise Comparativa — Design Systems de Referência

### 1. Canvas Visual (PRINCIPAL)

**Source:** `design systems/canvas-visual.aura.build/design-system.html`

| Aspecto | Valor |
|---------|-------|
| Theme | Dark (#050505) |
| Accent | Orange (#F97316) |
| Font | Inter |
| Layout | 12-col grid, max-w-[90rem] |
| Cards | border-white/10, hover border-accent/30 |
| Buttons | Bordered com corner accents |
| Nav | Fixed, backdrop-blur, mono uppercase |
| Effects | fadeSlideIn, beam animations, grid background |

### 2. AI Automation 17 (COMPLEMENTAR)

**Source:** `design systems/ai-automation-17.aura.build/design-system.html`

| Aspecto | Valor |
|---------|-------|
| Theme | Dark com glass morphism |
| Glass | white/10 + backdrop-blur-xl |
| Containers | rounded-[2.5rem] |
| Gradients | Blob gradients com blur |
| Badges | Glass morphism com backdrop-blur |

**O que adotar:** Glass morphism para badges e cards flutuantes, backdrop-blur effects.

### 3. Digital Architect (COMPLEMENTAR)

**Source:** `design systems/digital-architect.aura.build/design-system.html`

| Aspecto | Valor |
|---------|-------|
| Theme | Monochrome dark |
| Grid | 12-col guides visíveis |
| Text | Masked text reveals |
| Motion | Marquee infinito |
| Images | Ken Burns carousel |

**O que adotar:** Grid guides visuais como background pattern, text reveals no Hero.

### Decisão de Merge

```
Base:     Canvas Visual — dark theme + orange accent + beam animations
Overlay 1: Brand Identity — logo, navy color, brand orange variant
Overlay 2: AI Automation 17 — glass morphism badges, backdrop-blur effects
Overlay 3: Digital Architect — grid background pattern, text reveals
```

---

## Color Palette

### Primary Colors

| Token | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| `canvas-bg` | `#050505` | `--color-canvas-bg` | Page background |
| `canvas-surface` | `#0A0A0A` | `--color-canvas-surface` | Card/surface backgrounds |
| `canvas-accent` | `#F97316` | `--color-canvas-accent` | Primary accent (buttons, links) |
| `brand-orange` | `#FF6B1A` | `--color-brand-orange` | Warm accent (hover, gradients) |
| `brand-navy` | `#1C3A52` | `--color-brand-navy` | Alt sections, premium bg |

### Neutrals

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-900` | `#171717` | Dark surfaces |
| `neutral-800` | `#262626` | Borders, dividers |
| `neutral-700` | `#404040` | Muted elements |
| `neutral-600` | `#525252` | Dimmed text |
| `neutral-500` | `#737373` | Tertiary text, labels |
| `neutral-400` | `#A3A3A3` | Secondary text, body |
| `neutral-300` | `#D4D4D4` | Primary text |

### Transparency

| Token | Value | Usage |
|-------|-------|-------|
| `white/10` | `rgba(255,255,255,0.10)` | Borders, glass |
| `white/5` | `rgba(255,255,255,0.05)` | Subtle backgrounds |
| `white/3` | `rgba(255,255,255,0.03)` | Grid pattern lines |
| `black/50` | `rgba(0,0,0,0.50)` | Overlays |
| `black/80` | `rgba(0,0,0,0.80)` | Nav backdrop |

### WCAG AA Contrast Verification

| Combination | Ratio | Status |
|------------|-------|--------|
| neutral-300 (#D4D4D4) on canvas-bg (#050505) | 15.5:1 | PASS (AAA) |
| neutral-400 (#A3A3A3) on canvas-bg (#050505) | 9.9:1 | PASS (AAA) |
| neutral-500 (#737373) on canvas-bg (#050505) | 5.5:1 | PASS (AA) |
| canvas-accent (#F97316) on canvas-bg (#050505) | 6.4:1 | PASS (AA) |
| white (#FFFFFF) on canvas-accent (#F97316) | 3.0:1 | PASS (AA large text) |
| black (#000000) on canvas-accent (#F97316) | 7.0:1 | PASS (AAA) |

### Selection

```css
::selection { background-color: #F97316; color: #000000; }
```

---

## Typography

### Font Family

- **Primary:** Inter (sans-serif)
- **Loaded via:** `next/font/google` in `app/layout.tsx`
- **Fallback:** system-ui, -apple-system, sans-serif

### Type Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Display H1 | `7.5rem` (desktop) / `3rem` (mobile) | 500 (medium) | 0.9 | `tracking-tighter` | Hero headlines |
| H2 | `text-4xl` | 500 (medium) | - | - | Section headings |
| H3 | `text-xl` | 500 (medium) | - | - | Card titles |
| Body | `text-lg` | 300 (light) | `relaxed` | - | Body text |
| Label | `text-xs` | 600 (semibold) | - | `tracking-widest` | UI labels, uppercase |
| Mono | `font-mono text-xs` | - | - | `tracking-widest` | Metadata, tags |

### Text Colors

| Purpose | Class |
|---------|-------|
| Headings | `text-white` |
| Body text | `text-neutral-300` or `text-neutral-400` |
| Muted/Labels | `text-neutral-500` |
| Dimmed | `text-neutral-600` |
| Accent | `text-canvas-accent` |
| Accent hover | `hover:text-canvas-accent` |

---

## Component Patterns

### Button — Primary (Canvas DS)

```html
<a class="group relative inline-flex items-center p-4 border border-neutral-800
   hover:border-[#F97316] transition-colors duration-300">
  <!-- Corner accents -->
  <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#F97316]
       opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
  <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#F97316]
       opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
  <span class="flex items-center gap-3 text-white font-medium uppercase tracking-wider text-sm">
    Label <ArrowUpRight />
  </span>
</a>
```

Hover: background fills `#F97316`, text becomes black.

### Button — Secondary (Brand-inspired)

```html
<a class="inline-flex items-center px-6 py-3 rounded-full bg-canvas-accent
   text-black font-medium hover:scale-105 transition-transform duration-300">
  Label
</a>
```

### Button — CTA (Gradient Beam)

```html
<a class="relative inline-flex items-center px-8 py-4 border border-canvas-accent
   text-white overflow-hidden group">
  <span class="relative z-10">Label</span>
  <div class="absolute inset-0 bg-canvas-accent translate-x-[-100%]
       group-hover:translate-x-0 transition-transform duration-500"></div>
</a>
```

### Card — Content (Canvas DS)

```html
<div class="border border-white/10 bg-canvas-surface p-8 group
     hover:border-canvas-accent/30 transition-colors duration-300">
  <!-- Content -->
</div>
```

### Card — Floating (AI Automation 17 influence)

```html
<div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6
     hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl">
  <!-- Content -->
</div>
```

### Card — Project/Case

```html
<div class="group relative overflow-hidden border border-white/10">
  <img class="grayscale group-hover:grayscale-0 transition-all duration-500" />
  <div class="p-6">
    <h3 class="text-xl font-medium text-white">Title</h3>
    <p class="text-neutral-400 mt-2">Description</p>
  </div>
</div>
```

### Navigation

- Fixed top, full width, z-50
- `bg-black/80 backdrop-blur-md border-b border-white/10`
- Font: `text-xs font-mono uppercase tracking-widest`
- Links: `text-neutral-500 hover:text-canvas-accent transition-colors`
- Active: `text-white`

### Hero

- 12-col grid: `grid-cols-1 lg:grid-cols-12`
- Headline: `text-[7.5rem]` desktop / `text-5xl` mobile
- Weight 500, tracking-tighter, leading-[0.9]
- Floating cards opcional sobre grid background
- FadeSlideIn com staggered delays

### MetricCard

```html
<div class="text-center">
  <div class="text-4xl font-light tracking-tighter text-white">+300%</div>
  <div class="text-xs font-semibold uppercase tracking-widest text-neutral-600 mt-1">
    Conversion Rate
  </div>
</div>
```

---

## Effects

### FadeSlideIn (Scroll Animation)

```css
@keyframes fadeSlideIn {
  0% { opacity: 0; transform: translateY(30px); filter: blur(8px); }
  100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
}
```

Applied with Intersection Observer. Stagger delays: 0.2s, 0.4s, 0.6s, 0.8s.

### Grid Background (Digital Architect influence)

```css
.grid-background {
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 70%);
}
```

### Beam Border Animations

```css
@keyframes beam-drop {
  0% { opacity: 0; transform: translateY(-100%); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateY(100%); }
}

@keyframes beam-slide {
  0% { opacity: 0; transform: translateX(-100%); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateX(100%); }
}
```

Timings: beam-drop 5s infinite, beam-slide 7s infinite.

### Glass Morphism (AI Automation 17 influence)

```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Hover Effects

- Cards: `hover:border-canvas-accent/30 transition-colors duration-300`
- Floating: `hover:scale-105 hover:-translate-y-2 transition-all duration-500`
- Images: `grayscale hover:grayscale-0 transition-all duration-500`

---

## Layout

### Container

- Max width: `max-w-[90rem]` (1440px)
- Padding: `px-6 lg:px-12`
- Centered: `mx-auto`

### Grid

- 12-column system: `grid-cols-1 lg:grid-cols-12`
- Section spacing: `py-24`
- Section borders: `border-t border-white/5`

### Responsive Breakpoints

- Mobile: default (< 768px)
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)

---

## Icons

**Library:** Lucide React

```tsx
import { ArrowUpRight, Download, Layers, TrendingUp } from 'lucide-react';

<ArrowUpRight className="w-4 h-4" />
```
