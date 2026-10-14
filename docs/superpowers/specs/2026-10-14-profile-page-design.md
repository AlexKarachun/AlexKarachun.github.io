# Profile page (landing + CV) — design

## Goal

First page of a future multi-page personal GitHub Pages site. A minimalist
bilingual (RU/EN) landing page with photo, contact methods, and a portfolio
of projects, plus a separate CV page that renders the resume content as
styled HTML (not a PDF embed) with a RU/EN switch and a "download PDF" button.
Not deployed yet — edited and viewed locally.

## Scope

This spec covers only the `profile/` page. Other future pages of the site are
out of scope and will get their own spec when built.

## File structure

```
profile/
  index.html            — landing page
  cv.html               — CV page
  style.css             — shared styles (used by both pages)
  i18n.js               — RU/EN toggle: persists choice in localStorage,
                          sets <html lang>, calls each page's render function
  landing-data.js        — { ru: {...}, en: {...} } content for index.html,
                          kept in sync with content/landing.md
  cv-data.js             — { ru: {...}, en: {...} } structured CV content,
                          kept in sync with CV/current/resume_en.tex /
                          resume_ru.tex
  img/ava.png            — profile photo
  cv/resume_en.pdf
  cv/resume_ru.pdf        — downloadable resume files
  content/landing.md     — human-edited source for landing page content (RU only)
.gitignore               — excludes .DS_Store, CV/ (raw LaTeX workspace:
                          tmp/, up-to-7.26/, example*.pdf, etc.), and any other
                          non-site working files in the repo root
```

No build step, no framework, no npm. Pages open directly as files or via a
plain static server (e.g. `python -m http.server`).

## Content workflow

`profile/content/landing.md` is the file the user edits by hand, **in Russian
only**. Structure:

```markdown
# Bio
Текст о себе (может быть несколько абзацев).

# Contacts
- Email: ...
- Telegram: ...
- GitHub: ...

# Portfolio
## Название проекта
Описание проекта. Ссылка: https://github.com/...

## Следующий проект
...
```

When the user asks to sync, Claude reads `landing.md`, translates it to
English, and updates `landing-data.js` (both the `ru` and `en` objects) by
hand — there is no markdown parser running in the browser. `index.html` reads
from `landing-data.js` only.

CV content is **not** driven by `landing.md`. It is derived from
`CV/current/resume_en.tex` and `resume_ru.tex` (already the source of truth
for the PDF resume) and manually transcribed into `cv-data.js` as structured
data: experience entries, education, coursework, course projects, skills,
interests. When the LaTeX resume changes, the user asks Claude to re-sync
`cv-data.js` and the PDFs in `profile/cv/`.

## Pages

**index.html (landing)**
- Header: site/name mark on the left, nav link to CV page, RU/EN toggle on the right.
- Hero: `img/ava.png` photo + name + one-line tagline, sourced from the Bio section.
- Bio section: short paragraph(s).
- Contacts section: list of contact methods (email, Telegram, GitHub) as
  clickable links/icons.
- Portfolio section: cards, one per project pulled from `landing.md` →
  `landing-data.js` (title, description, link). Initial content: the research
  project (VLM-guided generation), Self-Made Stable Diffusion 1.5,
  NeuroPushkin — taken from the existing resume's course/research projects.
- Footer: minimal, optional.

**cv.html (CV)**
- Same header/toggle as the landing page.
- Renders the structured `cv-data.js` content for the active language:
  professional experience, education, coursework, course projects, technical
  skills, personal interests — styled as clean HTML sections, not an embedded
  PDF.
- A "Download PDF" button that links to `cv/resume_en.pdf` or
  `cv/resume_ru.pdf` depending on the active language.

## RU/EN toggle

Single toggle control present in the header of both pages. `i18n.js`:
- Reads/writes the chosen language to `localStorage`.
- On load, applies the stored (or browser-default) language.
- Exposes a function the toggle button calls to switch language, update
  `<html lang>`, and re-render the current page's content from its data
  object (`landing-data.js` on index.html, `cv-data.js` on cv.html).

## Visual style

Minimalist, auto light/dark theme via `prefers-color-scheme` in `style.css`
(no manual theme switcher). Plenty of whitespace, one accent color for links
and buttons, system/sans-serif font stack, no visual libraries or icon fonts
beyond simple inline SVGs if needed.

## Out of scope / not doing now

- Deployment to GitHub Pages (explicitly deferred by the user).
- Any build tooling, static site generator, or JS framework.
- Markdown parsing in the browser.
- Other future pages of the site.
