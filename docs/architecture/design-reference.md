# Design Reference — Canvas Visual Design System

**Source:** `design systems/canvas-visual.aura.build/design-system.html`

## Color Palette

### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `canvas-bg` | `#050505` | Page background |
| `canvas-surface` | `#0A0A0A` | Card/surface backgrounds |
| `canvas-accent` | `#F97316` | Primary accent (buttons, links, highlights) |

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

### Selection

```css
selection:bg-[#F97316] selection:text-black
```

## Typography

### Font Family

- **Primary:** Inter (sans-serif)
- **Fallback:** system-ui, -apple-system, sans-serif

### Type Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Display H1 | `7.5rem` / `text-6xl` (mobile) | 500 (medium) | 0.9 | `tracking-tighter` | Hero headlines |
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
| Accent hover | `hover:text-[#F97316]` |

## Component Patterns

### Button (Primary)

```html
<a class="group relative inline-flex items-center p-4 border border-neutral-800 hover:border-[#F97316] transition-colors duration-300">
  <!-- Corner accents (optional) -->
  <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#F97316] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
  <button class="flex items-center gap-3 bg-transparent text-white font-medium uppercase tracking-wider text-sm">
    Label
    <ArrowIcon />
  </button>
</a>
```

Hover: background fills `#F97316`, text becomes black.

### Card

```html
<div class="border border-white/10 bg-[#050505] p-8 group hover:border-[#F97316]/30 transition-colors duration-300">
  <!-- Content -->
</div>
```

### Navigation

- Fixed top, full width, z-100
- `bg-black/80 backdrop-blur-md border-b border-white/10`
- Font: `text-xs font-mono uppercase tracking-widest`
- Links: `text-neutral-500 hover:text-[#F97316] transition-colors`

### Metric Card

```html
<div class="text-center">
  <div class="text-4xl font-light tracking-tighter text-white">+300%</div>
  <div class="text-xs font-semibold uppercase tracking-widest text-neutral-600 mt-1">Conversion Rate</div>
</div>
```

## Animations

### Fade Slide In (Scroll)

```css
@keyframes fadeSlideIn {
  0% { opacity: 0; transform: translateY(30px); filter: blur(8px); }
  100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
}
```

Applied with staggered delays: 0.2s, 0.4s, 0.6s, 0.8s.
Triggered via Intersection Observer (animate-on-scroll class).

### Hover Effects

- Cards: `hover:border-[#F97316]/30 transition-colors duration-300`
- Floating cards: `hover:scale(1.1) translateY(-10px)` with shadow
- Images: `grayscale hover:grayscale-0 transition-all duration-500`

## Background Effects

### Grid Pattern

```css
background-image:
  linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
background-size: 60px 60px;
mask-image: radial-gradient(ellipse at center, black 40%, transparent 70%);
```

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

## Icons

**Library:** Lucide React (substitute for Solar Icons used in original DS)

Lucide provides a similar clean, consistent icon set that works natively with React and is tree-shakeable.

```tsx
import { ArrowUpRight, Download, Layers, TrendingUp } from 'lucide-react';

<ArrowUpRight className="w-4 h-4" />
```
