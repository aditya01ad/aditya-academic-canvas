# Historical and unused files archive

This directory preserves files removed from the active application during the `website_update` cleanup on 26 October 2026.

**Important:** Nothing in this directory is required by the current `src/main.tsx → src/App.tsx` routed portfolio. The files are retained for recovery and reference, not intended to be imported or executed. TypeScript/Vite, Vitest and ESLint should not treat `old/` as active source. Git history also preserves earlier versions.

| Directory | Contents | Reason |
| --- | --- | --- |
| `legacy-portfolio/` | First-generation single-page portfolio components, `Index.tsx`, reveal hook and scroll indicator | Superseded by the routed pages in `src/pages/` and layout in `src/components/layout/` |
| `unused-ui/` | Unreferenced shadcn/Radix component files and mobile hook | Not imported by the active application; restore individual primitives if needed |
| `unused-helpers/` | Unused router NavLink wrapper | Active navigation uses `Link` directly |
| `unused-pages/` | Unused old NotFound component | The current router does not use it; a proper 404 page is future work |
| `starter/` | Original Vite starter CSS and trivial example test | Not connected to the live site or meaningful test coverage |
| `duplicates/` | Duplicate root recipe CSS and placeholder SVG | Active files remain at `src/components/Misc/RecipeBook.css` and `public/aditya-logo-a.svg` |
| `resumes/` | Two PDFs formerly at repository root | Not served from the Vite `public/` folder; archived without changing their content |
| `tooling/` | Historical `bun.lockb` | `package-lock.json` remains the active npm lockfile |

## Files deliberately kept active

- `src/components/Misc/RecipeBook.tsx` and its colocated CSS: the live `/notes` route uses both.
- `src/components/ui/Badge.tsx`, `Tabs.tsx`, `Tag.tsx`, `toast.tsx`, `toaster.tsx`, `sonner.tsx`, `tooltip.tsx` and `src/hooks/use-toast.ts`: used by active pages or providers.
- `public/Aditya_Resume.pdf`: retained to avoid breaking existing public downloads. **Review before promoting:** its blob is identical to the archived `Aditya_Resume_old.pdf`; the archived root `Aditya_Resume.pdf` is a different file. This cleanup did not select or replace your public CV.
- `public/favicon.ico` and `public/aditya-logo-a.svg`: retained public assets.
- `src/test/setup.ts`, Vitest, Vite, Tailwind, TypeScript, PostCSS, deployment and npm configuration.

## Restore an archived file

To restore one file on your working branch, copy it back to its previous path and update any imports. For example:

```bash
git switch website_update
mkdir -p src/components/portfolio
git mv old/legacy-portfolio/src/components/portfolio/Hero.tsx src/components/portfolio/Hero.tsx
```

Restore only files actually needed by an active route; do not copy the entire archive back into `src/` without checking dependencies.

## Outstanding technical debt (not addressed by file organization)

- Dependencies in `package.json` may include packages used only by archived scaffolding. Do not prune the dependency manifest or regenerate `package-lock.json` without a successful install/build/test pass.
- The active M.Sc. CGPA and some website text still need factual corrections.
- Production SEO, route handling, accessible tabs, and substantive tests still need their own changes.
- The application wasn't built or browser-tested as part of this file-organization commit.
