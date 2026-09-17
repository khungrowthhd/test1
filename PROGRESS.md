# Progress

## Long-term goal

Once the roadmap phases are done, build a small website with a bit of database behind it
(e.g. a guestbook or simple list stored server-side) as a capstone study case. This needs
Phase 1–9 fundamentals first (HTML/CSS/JS, then a server-side language + SQL are new topics
beyond the current roadmap and will be added as phases once we get there).

## Current phase

Phase 10 — Next steps: custom domain, then a first look at a framework.
**Not started.**

## Completed

- Phase 1: created `index.html`, opened it in a browser, learned `<!DOCTYPE html>`, `<html>`,
  `<head>`/`<title>`, `<body>`, `<h1>`, `<p>`, and what an "element" is. Edited the paragraph
  text directly in VS Code and saw it update after a refresh.
- Phase 2: added a link (`<a href>`), an image (`<img src alt>`), and a list (`<ul><li>`).
  Learned "attribute" and "nesting."
- Phase 3: created `style.css`, linked it with `<link rel="stylesheet">`. Learned selectors,
  properties/values/declarations, `color`, `font-family` (with fallback fonts), and the box
  model (content → padding → border → margin, inside to outside).
- Phase 4: built a full one-page site (`index.html` + `style.css`) combining everything so
  far — `<header>`, `<nav>`, `<section>`, `<footer>`, `<div>`, `class` vs `id`, multiple
  classes on one element (base + modifier pattern), flexbox (`display: flex`,
  `justify-content`, `align-items`, `gap`, `flex: 1`), and CSS Grid (`display: grid`,
  `grid-template-columns`, `repeat()`, `fr` units).
- Phase 5: added the viewport meta tag and one `@media (max-width: 600px)` query that
  restacks the card grid to 1 column and the hero section to a column on narrow screens.
- Phase 6: added click handlers (`getElementById`, `addEventListener`, `textContent`), read
  an `<input>`'s `.value`, hit and fixed a real bug (redeclaring `const` across `<script>`
  tags — top-level `let`/`const` share one global scope across all `<script>` tags on a
  page, unlike `var`), then combined into one script. Nested three flex containers
  (`.hero` row → text column → `.controls-row` row → `.button-group` column).

- Phase 7: split into `index.html` (home), `about.html`, `contact.html` — each a full
  page sharing one `style.css`, linked via real `href` navigation (not `#anchor` jumps).
  Grouped all four files into a `site/` folder — relative paths kept working since they
  moved together.
- Phase 8: added `lang="en"`, `<meta name="description">`, `<meta charset="UTF-8">`, a
  Google Fonts web font (Poppins), and a visible `:focus` outline for keyboard navigation.
- Phase 9: learned what a tech stack is (frontend/backend/database/hosting) and where a
  static site fits. Ran `git init`, learned staging vs committing (`git add` / `git commit`),
  added a `.gitignore` for `.DS_Store`, set git identity (name/email) for this repo, created
  a GitHub repo and connected it as a `remote` named `origin`, pushed with `git push -u`
  (using `gh auth setup-git` since this environment can't do an interactive browser login).
  Learned GitHub Pages only serves from repo root or a `/docs` folder, so renamed `site/` to
  `docs/` with `git mv` and enabled Pages via `gh api`. **Site is now live.**

## Reference

- [Web Dev Journal](https://claude.ai/artifact/Tw4DcuQBMm3o93LzQieJFD) — a published
  artifact summarizing every phase and term learned so far (Phases 1-8), with a callout
  on the `const`-across-`<script>`-tags bug from Phase 6.
- GitHub repo: https://github.com/khungrowthhd/test1
- Live site: https://khungrowthhd.github.io/test1/

## Next up

Phase 10: custom domain, then a first look at a framework. Also still owed: the
database-backed capstone (guestbook/simple list) once a server-side language + SQL are
introduced as new phases.

## Revisit

- `flex` vs `grid`: when each one applies, and that leftover properties from one (e.g.
  `flex: 1` on `.card`) are silently ignored once the container switches to the other.
- _(anything else found confusing — nothing new yet)_
