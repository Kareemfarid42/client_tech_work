---
description: Create a standalone landing page for Mortgage Loan Officers (MLO)
---

This workflow guides the creation of a standalone, pixel-perfect MLO landing page without affecting the main site.

### Step 1: Entry Point Infrastructure
// turbo
1. Create `mlo.html` in the root directory.
    - Copy `index.html` structure.
    - Update `<title>` to "ClienTech | MLO Solutions".
    - Set script source to `/src/mlo-main.tsx`.
2. Create `src/mlo-main.tsx`.
    - Import `createRoot` and `index.css`.
    - Render `<MloApp />`.
3. Update `vite.config.ts` to include `mlo.html` in `rollupOptions.input`.

### Step 2: Component Development
1. Create `src/MloApp.tsx`.
    - Implement Hero Section (2 columns, Headline: "Digital Systems for [Mortgage Loan Officers]").
    - Implement The Challenge Section (Centered, CTA duplication).
    - Implement Solutions Grid (4 columns, Glassmorphism: `bg-white/5`, `backdrop-blur-lg`).
    - Implement Benefits Section (2x2 grid, minimalist icons).
    - Implement Footer CTA with ClienTech logo.

### Step 3: Visual Polish & Verification
1. Refine Tailwind styles:
    - Background: `#0a0a0a`.
    - Accent: `#007bff`.
    - Text: `#eaeaea`.
2. Use `npm run dev` to host the application.
3. Use the browser subagent to navigate to `/mlo.html`.
4. Verify vertical alignment, spacing, and glassmorphism quality.
