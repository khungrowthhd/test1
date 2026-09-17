# Progress

## Long-term goal

Once the roadmap phases are done, build a small website with a bit of database behind it
(e.g. a guestbook or simple list stored server-side) as a capstone study case. This needs
Phase 1–9 fundamentals first (HTML/CSS/JS, then a server-side language + SQL are new topics
beyond the current roadmap and will be added as phases once we get there).

## Current phase

Phase 9 — Launch: git + GitHub, deploy to GitHub Pages or Netlify, get a real public URL.
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

## Reference

- [Web Dev Journal](https://claude.ai/artifact/Tw4DcuQBMm3o93LzQieJFD) — a published
  artifact summarizing every phase and term learned so far (Phases 1-8), with a callout
  on the `const`-across-`<script>`-tags bug from Phase 6.

## Next up

Phase 9: initialize git, push to GitHub, deploy via GitHub Pages or Netlify.

## Revisit

- `flex` vs `grid`: when each one applies, and that leftover properties from one (e.g.
  `flex: 1` on `.card`) are silently ignored once the container switches to the other.
- _(anything else found confusing — nothing new yet)_
