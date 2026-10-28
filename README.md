# My little corner of the internet

This is the source for [my personal website](https://www.aditya-math.me/). I'm Aditya—a mathematics graduate who likes graph theory, writing little bits of code, experimenting with ideas, and occasionally wandering into things that have nothing to do with mathematics.

It's not meant to be a CV in website form. There are pages about my research and projects, but also some notes, coffee recipes and bits of everyday curiosity. I expect it to keep changing.

## What's here

- **Home:** A short introduction, a few selected projects, and whatever has my attention.
- **About:** My story, education, tools, and interests outside mathematics.
- **Research:** My M.Sc. work on graph spectra and pendant attachments, explained without assuming everyone knows the terminology.
- **Projects:** Public repositories with honest notes about what is research, coursework, experimental, or unfinished.
- **Writing (`/blog`):** Short notes, not a publication list or a promised posting schedule.
- **Miscellany (`/notes`):** A little interactive coffee recipe book.
- **Contact:** How to reach me, whether it's about mathematics or something entirely different.

The research and educational details are based on my actual work; the project descriptions link to [public repositories](https://github.com/aditya01ad). My M.Sc. Mathematics degree from IIT Bhubaneswar was completed in May 2026 (final CGPA 8.38/10).

## Tech

The website is a small **Vite + React + TypeScript + Tailwind CSS** application deployed on **Vercel**. It uses React Router for pages and light/dark theme switching.

The site keeps the original visual design; the current maintenance branch contains technical optimizations (route splitting, accessible tabs and navigation) plus content cleanup. The retired components, starter files and duplicates are in [`old/`](old/README.md).

## Running locally

Requires Node.js and npm.

```bash
git clone https://github.com/aditya01ad/aditya-academic-canvas.git
cd aditya-academic-canvas
npm ci
npm run dev
```

The quality command runs ESLint, TypeScript, Vitest, and a production build:

```bash
npm run check
```

## Where to edit things

| File | Purpose |
| --- | --- |
| `src/lib/profile.ts` | Shared biographical, academic and contact details |
| `src/data/projects.ts` | Public project descriptions and links |
| `src/pages/` | Page text and structure |
| `src/components/Misc/RecipeBook.tsx` | The actual recipe content |
| `src/components/layout/` | Original navigation and footer |
| `src/index.css` | Original visual styles and theme tokens |
| `docs/CONTENT_GUIDE.md` | Content decisions and future editing guidelines |
| `docs/TECHNICAL_CLEANUP.md` | Performance and testing work |

The `website_update` branch is for review; `main` is the production branch. Changes here are not promoted to the live domain until explicitly merged.

If you spot a mistake or want to exchange ideas, [say hello](https://www.aditya-math.me/contact).
