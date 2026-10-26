# Portfolio design system — quiet edition (October 2026)

## Intent

The site should feel like a personal academic notebook made legible for the web, not a polished SaaS landing page. Preserve space for curiosity, specificity, mathematical rigor and human voice. The goals are minimalism, personality, cleanliness, easy reading and graceful responsiveness.

## Voice

- Lead with Aditya's name and real interests instead of a marketing slogan.
- Prefer "I" and natural phrasing to corporate language.
- Say what was studied, implemented or explored. Do not claim unverified research results.
- Show work in progress honestly. Avoid fake metrics or generic "innovative" claims.
- Balance mathematics/research with operations research, optimization and coding.

## Visual system

- **Colors:** nearly white warm canvas, deep graphite-green text, one restrained muted-green accent. No colorful backgrounds or callouts.
- **Typography:** Playfair Display headings, Source Serif 4 reading text, DM Sans small UI metadata. Keep clear hierarchy and comfortable body size.
- **Width:** ~1030px max overall; prose paragraphs 610–670px wide.
- **Whitespace:** deliberate, not enormous. A fine rule separates sections.
- **Surfaces:** no repeated boxed cards, heavy shadows, pill-button CTAs, decorative gradients or large slogans.
- **Distinctive detail:** a modest, hand-drawn-style graph diagram next to the homepage intro. Never compete with the writing.
- **Projects:** a numbered, text-first list with accurate status and a direct source link.
- **Accessibility:** semantic landmarks, focus indicator, adequate reading line-height, motion-reduction rules, accessible mobile navigation and filter state.
- **Dark theme:** follow the same understated hierarchy with low-chroma contrast.

## Architecture

- `src/lib/profile.ts`: single source of truth for public personal/academic facts. M.Sc. final CGPA: 8.38/10.0.
- `src/data/projects.ts`: real linked project entries.
- `src/components/ui/ProjectCard.tsx`: shared accessible text-first project entry (historical filename retained).
- `src/components/ui/SectionHeading.tsx`: shared editorial heading.
- `src/components/visual/GraphMark.tsx`: lightweight static SVG, no runtime graphic library.
- `src/components/layout/`: shared shell.
- `src/pages/`: distinct routes. `/notes` is lazy-loaded and keeps its original recipe UI.
- `src/index.css`: theme tokens and utility composition.
- Superseded v2 artwork and unused UI files live under `old/`.

## Content map

Home (introduction, selected work, current interests, thesis) / Projects / Research / About / Writing / Contact / Miscellany.

## Verification before a production merge

1. Vercel Preview must be READY.
2. Verify /, /projects, /research, /about, /blog, /contact, /notes.
3. Check mobile width, readable body text, hover/focus, light and dark mode.
4. Test project filtering, menu, links and navigation.
5. Run build, lint, tests (Vercel build does not automatically run all three).
6. Review the public resume version and academic data.
7. Keep production branch `main` untouched until review.
