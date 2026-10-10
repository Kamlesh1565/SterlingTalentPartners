# Sterling Talent Partners website

A responsive multi-page recruitment website built with **React, TypeScript, Tailwind CSS, Vite, React Router, Framer Motion, and Lucide icons**.

## Run locally

1. Install Node.js 20+.
2. Open this folder in your editor.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL Vite prints in your terminal.

## Included pages

- `/` — Home
- `/about` — About and values
- `/services` — Recruitment services and process
- `/clients` — Employer enquiry form
- `/candidates` — Candidate enquiry form
- `/contact` — General contact form

## Design notes

- Brand palette: Indigo `#30348F`, Ivory `#F1EFE5`, Lime `#D8E51B`, Orange `#FFB13B`, Cyan `#35BDE8`.
- Uses the provided transparent logo. The indigo version in `src/assets` is recoloured from the transparent logo for visibility on the ivory navigation bar; the white version is used on the dark intro and footer.
- Each navigation item intentionally opens in a **new tab**. Each newly loaded tab runs the centered-logo intro, then splits the indigo curtain up and down to reveal the page.
- Responsive mobile navigation, scroll-triggered section reveals, reduced-motion support, and page transitions are included.

## Form behaviour / production note

The forms validate required fields and prepare an email through the visitor's default mail application. This is a front-end prototype and does **not** persist submissions to a database or send them silently. For production, connect the forms to a backend/API or a form service, configure the actual recruitment inbox, and add privacy/consent language appropriate to your business. The testimonial section has intentionally not been populated with fabricated client quotes; add verified testimonials when available.
