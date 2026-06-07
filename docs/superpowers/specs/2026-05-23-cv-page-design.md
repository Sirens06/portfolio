# CV Page Design Spec
Date: 2026-05-23

## Overview
A separate `/cv` route for Alessandro Rutini's portfolio. Standalone page, same design system, supports IT/EN/FR. Print and Download buttons are blank hrefs (user will wire functionality).

## Architecture
- React Router added to the project (`react-router-dom`)
- `main.jsx` wraps app in `<BrowserRouter>`
- `App.jsx` uses `<Routes>`: `/` → existing portfolio, `/cv` → new `CV.jsx`
- `CV.jsx` is fully standalone — no shared navbar, own layout, own CSS (`cv.css`)

## Sections (top to bottom)
1. **Header** — name, title, location, language toggle (IT/EN/FR), Print button (blank href), Download PDF button (blank href)
2. **Profile** — short professional bio paragraph
3. **Stack** — Frontend and Backend groups, same tech as portfolio (React, JS, HTML, CSS, Vite, Node.js, C#, REST APIs, etc.)
4. **Experience** — work history entries with role, company, dates, bullet points
5. **Results** — key achievements/outcomes (metrics or highlights)
6. **Education** — degree(s), institution, year
7. **Contacts** — email, GitHub, LinkedIn, WhatsApp

## i18n
Same pattern as all other components: `const copy = { IT: {...}, EN: {...}, FR: {...} }[lang]`. Lang state lives inside `CV.jsx`. Toggle buttons in the CV header switch language without affecting the main portfolio.

## Styles
- Imports existing CSS variables from `custom.css` (no duplication)
- Single-column layout, max-width ~52rem, centered
- Uses `.cont-card` for section cards
- Dark/light aware via `.dark` class on `<html>`
- Print-friendly: `@media print` hides buttons and nav elements

## Files to create/modify
- `src/components/cv.jsx` — new
- `src/css/cv.css` — new
- `src/App.jsx` — add Routes
- `main.jsx` — wrap with BrowserRouter
- `package.json` — add react-router-dom
