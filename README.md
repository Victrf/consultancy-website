
# Light Corporation — Corporate Website

A modern, responsive corporate website developed for **Light Corporation**, an architecture and project management firm and subsidiary of Music Royalty.

The application is built as a frontend-focused React/TypeScript project with a component-driven architecture, responsive layouts, animated interactions, and route-based page composition.

---

## Project Overview

The Light Corporation website provides a digital platform for presenting the company's:

- Architectural expertise
- Project management capabilities
- Services
- Project environments
- Sectors
- Strategic approach
- Social impact
- Vision and mission
- Contact information

The frontend is designed around a visual-first corporate experience, combining large-format imagery, structured typography, responsive layouts, and controlled motion.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| React | UI development |
| TypeScript | Static typing |
| Vite | Development server and build tooling |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations and transitions |
| React Router | Client-side routing |
| React Icons | Interface icons |
| ESLint | Code quality and linting |
| Git | Version control |
| GitHub | Source code hosting |

---

## Architecture

The application follows a component-based React architecture.

```text
src/
│
├── assets/
│
├── components/
│   ├── Navbar.tsx
│   ├── Carousel.tsx
│   ├── ImageCarousel.tsx
│   ├── ExpertiseImpact.tsx
│   ├── WhoWeAre.tsx
│   ├── VideoBanner.tsx
│   ├── Sectors.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── SocialImpact.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── GradientSection.tsx
│   │
│   ├── AboutHero.tsx
│   ├── VisionMission.tsx
│   ├── OurCommitment.tsx
│   ├── TripleMiniCarousel.tsx
│   ├── OurApproach.tsx
│   ├── InternationalPerspective.tsx
│   └── OurPrinciples.tsx
│   │
│   ├── ServicesHero.tsx
│   ├── CoreCapabilities.tsx
│   ├── ServiceWorkflow.tsx
│   ├── ProjectEnvironments.tsx
│   └── ServicesClosing.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── ServicesPage.tsx
│   └── ContactPage.tsx
│
├── App.tsx
├── index.css
└── main.tsx
Application Structure
pages/

The pages directory contains route-level components.

Home.tsx
About.tsx
ServicesPage.tsx
ContactPage.tsx

components/

Reusable UI and page-specific sections are isolated into components.

This keeps page composition separate from individual visual and interaction implementations.

assets/

Contains local project assets such as images and other static resources used by the application.

Routing

Client-side routing is implemented with React Router.

Current routes:

/           → Home
/about      → About
/services   → Services
/contact    → Contact

The routing configuration is centralized in App.tsx.

UI and Interaction Architecture

The interface uses Framer Motion for controlled animation behavior.

Animations are used for:

Section entrance transitions
Hero transitions
Carousel transitions
Image scaling
Hover states
Button interactions
Navigation indicators
Scroll-triggered animations
Content reveal sequences

Animations are generally triggered through viewport visibility or user interaction rather than continuously running effects.

Responsive Design

The application uses Tailwind CSS responsive utilities to adapt layouts across different viewport sizes.

The implementation considers:

Mobile layouts
Tablet layouts
Desktop layouts
Responsive typography
Responsive spacing
Responsive navigation
Image aspect ratios
Mobile navigation drawer behavior
Content stacking at smaller breakpoints

The design uses a mobile-first styling approach where appropriate.

Navigation

The navigation system provides:

Desktop navigation
Mobile navigation drawer
Active route indication
Social links
Language selector
Contact navigation
Sector navigation

The active route is visually distinguished using animated indicators.

Hero Systems

The website contains dedicated hero experiences for major pages.

About Hero

The About hero implements:

Full-bleed background imagery
Animated background transitions
Multiple content slides
Slide indicators
Automatic slide progression
Manual slide navigation
Scroll-to-content interaction
Layered gradient overlays
Services Hero

The Services hero implements:

Full-bleed background imagery
Animated content transitions
Service-focused slide content
Automatic progression
Previous/next controls
Slide indicators
Large background slide numbering
Scroll-to-capabilities interaction
Carousel Systems

The project contains reusable carousel implementations for visual content.

Carousel functionality includes:

Automatic playback
Manual navigation
Animated transitions
Responsive aspect ratios
Image presentation
Drag/interactions where applicable

The carousel components are separated from page-level sections to allow reuse.

Styling System

Tailwind CSS is used as the primary styling system.

The visual language emphasizes:

High-contrast layouts
Neutral color palettes
Large typography
Editorial-style spacing
Full-width imagery
Subtle borders
Layered overlays
Minimal interface controls
Responsive composition

Global styling is defined in:

src/index.css

The project uses Tailwind's Vite integration through:

@tailwindcss/vite
Performance Considerations

Performance is considered at the component and UI level.

Current implementation practices include:

Component separation
CSS-based responsive layouts
Transform-based animation where possible
Controlled animation durations
Limited continuous animation
Responsive image containers
Avoiding unnecessary layout-heavy animation properties
Keeping reusable UI logic isolated

Further production optimization can be applied before deployment, particularly around:

Image compression
Image formats
Responsive image delivery
Asset caching
Bundle analysis
Lazy loading
Core Web Vitals
Third-party resource loading
Accessibility Considerations

The interface includes accessibility-oriented practices such as:

Semantic buttons for interactive controls
aria-label attributes for icon-only controls
Descriptive image alt attributes
Keyboard-accessible interactive elements
Visible navigation states
Semantic navigation structures

Accessibility can be further audited before production deployment.

Development Setup
Requirements

Recommended environment:

Node.js
npm
Git


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
