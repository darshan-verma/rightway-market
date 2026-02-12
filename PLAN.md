# Rightway Market — Implementation Plan

Goal
-----
Recreate the provided dark, glossy, neon-blue portfolio website as a static React site (JavaScript) using Tailwind CSS and a small custom CSS file for exact glass/neon effects. The site will be static; project links and images will be added manually later.

Tech stack
----------
- Vite + React (JS)
- Tailwind CSS for utility layout + responsive breakpoints
- Small custom CSS (globals) for backdrop-filter, inner-shadows and neon/glow accents
- Swiper (carousel) and Framer Motion (optional for animations)
- Assets: images placed under `public/assets/`

Commands (starter)
------------------
1. Create project:
   npm create vite@latest rightway-market -- --template react
2. Install deps:
   npm install
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm install framer-motion swiper react-icons clsx

High-level phases & tasks
--------------------------
1) Project scaffold
   - Initialize Vite React app.
   - Configure Tailwind with custom colors/fonts.
   - Add base global CSS file for background gradients, glow, and glass card helpers.

2) Design tokens & global styles
   - CSS variables for primary colors:
     --bg-dark: #030305
     --neon: #0a6eff
     --card-bg: rgba(10,12,18,0.6)
   - Radial/linear background gradients positioned to match screenshots.
   - Global font family (match screenshots: large geometric sans like Poppins or Inter).

3) Atomic components (build in this order)
   - Layout (Navbar, Footer)
   - Hero (two-column with large typographic scale)
   - FeatureCard grid (3 columns)
   - ProjectCarousel (large rounded cards with overlay CTA)
   - TestimonialGrid (cards with avatar and 5-star)
   - Process/How-we-work section (stage cards)
   - FAQ accordion (right column list)

4) Styling details & effects
   - Glass cards: backdrop-filter: blur(8px) + subtle border + inner shadow.
   - Neon halo: pseudo-element radial-gradient + filter: blur() and mix-blend-mode where needed.
   - Buttons: neon-blue fill with glow; secondary ghost buttons with subtle border and hover.
   - Typography: large hero heading, subdued grey subheading with letter-spacing and weight.

5) Interactions & animations
   - CTA hover glow (CSS / Framer Motion)
   - Card lift on hover
   - Carousel with centered slide + peeking slides (Swiper)
   - Accordion open/close (accessible)

6) Data & content
   - `src/data/projects.js` to store title, url, thumbnail, tags
   - `src/data/testimonials.js` for testimonials
   - Images manually uploaded to `public/assets/projects/`

7) Accessibility & SEO
   - Proper alt text
   - Semantic HTML
   - Meta tags in index.html

Project structure (initial)
---------------------------
- rightway-market/
  - public/
    - assets/
  - src/
    - assets/
    - components/
    - data/
    - styles/
      - globals.css
    - App.jsx
    - main.jsx
  - index.html
  - package.json
  - tailwind.config.cjs
  - PLAN.md

Design fidelity checklist
-------------------------
- Exact dark base with blue radial glows behind sections
- Large left-aligned hero typography with two-line heading
- Rounded glass cards with inner shadows and neon badges
- Centered carousel with peeking slides
- Right-aligned FAQ accordion like screenshots
- Footer with newsletter input and small image preview

Deliverables (what you'll get)
------------------------------
- Full React (Vite) project scaffold (on your approval I'll scaffold the code now)
- `PLAN.md` (this file)
- README with setup and deploy steps
- Data files for easy project population

Next action
-----------
I created this PLAN.md. Confirm and I'll scaffold the Vite + Tailwind project and add the initial layout and global styles next.

If you want any brand specifics now (exact hex colors, logo file, preferred font), provide them and I'll integrate them immediately.

