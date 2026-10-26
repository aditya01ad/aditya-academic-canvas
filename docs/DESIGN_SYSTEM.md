# Portfolio design system — v2

## Objective
An editorial, research-led public portfolio that communicates mathematical rigor and applied interests without exaggerating project outcomes. It is a Vite/React SPA deployed to Vercel. `main` is the production branch; feature work stays on `website_update` until reviewed.

## Information architecture
- `/`: concise positioning, selected verified projects, interests, academic background, contact CTA
- `/projects`: direct repository links with accurate status
- `/research`: thesis, research history, future questions
- `/about`: detailed academic and technical background
- `/blog`: planned writing
- `/contact`: accessible contact methods
- `/notes`: separately-styled recipe book, retained as-is

## Implementation
- `src/data/projects.ts`: source of truth for public project summaries and statuses
- `src/components/ui/ProjectCard.tsx`: shared card for home and projects
- `src/components/ui/SectionHeading.tsx`: shared section headings
- `src/components/visual/MathVisual.tsx`: SVG-based responsive graph illustration, no image assets
- `src/components/layout/`: common navigation, footer, page shell
- `src/index.css`: light/dark semantic tokens and reusable component classes
- `src/lib/profile.ts`: canonical personal and academic data

## Visual system
- Palette: warm chalk background, deep pine primary, muted copper accent, slate ink. Dark mode uses a deep green background.
- Typography: Cormorant Garamond for editorial headings and DM Sans for body and controls.
- Responsive max-width: 1240px; standard gutters 20/32/48px.
- Spacing: sections ~80/112px; content remains dense enough for hiring reviewers.
- Surfaces: rounded, lightly bordered cards with restrained hover states.
- Interactions: keyboard focus ring, semantic nav, visible state for filters, reduced-motion support.
- Do not add heavy animation dependencies or turn the portfolio into a dashboard.

## QA before promoting
1. Vercel preview build READY, inspect build log.
2. Check /, /projects, /research, /about, /blog, /contact, /notes at desktop and mobile widths.
3. Verify dark theme, mobile menu, accessible keyboard navigation, project links.
4. Run npm test, lint and npm build in CI/local if available.
5. Review the public résumé version, CV academic metrics and factual claims.
6. Promote only after manual preview review; do not merge to main by default.

## Remaining improvements
- Clean up obsolete shadcn dependencies only with package-lock regeneration and a passing test/build run.
- Expand project detail pages when completed case studies are available.
- Improve route-level SEO if the site evolves beyond an SPA.
- Add browser-level regression and accessibility tests.
