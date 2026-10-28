# Technical cleanup — website_update

## Scope
Technical performance, correctness, metadata, accessibility and testing only. The original page structure, styling, typefaces, colors, proportions, hover behavior (except reduced-motion accessibility), navigation and copy remain visually unchanged. The degree's final CGPA and factual metadata are corrected.

## Optimizations
- `src/App.tsx`: React.lazy for six secondary routes; Home remains eagerly loaded. The recipe book's custom CSS/JS now loads only on /notes.
- Removed unconditional startup rendering of two toast libraries, tooltip provider and React Query provider; the active pages have no consumers of these contexts.
- Reduced-motion handling appended to existing stylesheet (default design untouched).
- `Tabs.tsx`: keyboard arrow/Home/End navigation, focus management, roving tab indices; removed effect dependence on mutable inline `tabs` arrays.
- Mobile menu announces expanded/collapsed state and links to its controlled menu.
- Project filters announce pressed state and result count to assistive technologies.
- Corrected M.Sc. CGPA to 8.38/10.0 in central profile configuration.
- Corrected static SEO descriptions/canonical URL for the existing Vercel production domain.
- Preserved the previous `old/` archive, all original content and pages.

## Deliberately unchanged
- All existing visual Tailwind classes, Vite design CSS and responsive breakpoints.
- Root site navigation and the original catch-all route behavior, to avoid user-visible changes.
- `package.json` and `package-lock.json`: dependencies remain pinned/consistent; dependency pruning needs an audited install and lockfile regeneration.
- Public résumé; multiple PDF variants require owner review.
- The old archive: excluded from ESLint and Vite's import graph.

## Validation
Vercel preview build compiles production assets, but does not run Vitest or ESLint. Independently test keyboard navigation, theme, all seven routes, responsive views, and downloads. Do not merge to main without review.
