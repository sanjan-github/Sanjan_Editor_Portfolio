# sanjanedits portfolio

Static portfolio website for Sanjan, built for GitHub Pages with vanilla HTML, CSS, and JavaScript.

## Current state

This repository now contains the first implementation pass:

- semantic homepage and projects page
- shared design system and responsive layout
- mobile navigation
- dialog-based video player shell
- centralized project-data module prepared for real portfolio entries

Real posters, Cloudinary video URLs, the final showreel, and the WhatsApp Business short link still need to be supplied before launch.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES modules)
- GitHub Pages
- Cloudinary for portfolio video delivery

## Project structure

- `.ai/` - project rules, current state, and execution plan
- `assets/` - lightweight static assets
- `css/` - split stylesheets by responsibility
- `js/` - navigation, projects, video, and app initialization
- `index.html` - homepage
- `projects.html` - archive page

## Local preview

Use any simple static server from the repository root. Example:

```bash
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Media workflow

1. Export the final edit from CapCut.
2. Prepare an optimized poster for the card or dialog.
3. Upload the video to Cloudinary.
4. Add the project record in `js/projects.js`.
5. Verify the featured homepage slot or projects-page category.

Recommended Cloudinary delivery pattern:

- `q_auto`
- `f_auto`

## Contact setup

Instagram is wired to `https://www.instagram.com/sanjanedits/`.

WhatsApp is intentionally not hardcoded yet. The site expects the official WhatsApp Business short link once it is available, so Sanjan's phone number does not need to be published in the source.

## Fonts

The initial implementation loads Plus Jakarta Sans and Inter from Google Fonts. If self-hosted font files are added later, update the HTML and current-state notes together.

## GitHub Pages notes

The site uses relative paths so it can work as a GitHub Pages project site or user site with minimal path changes.

`sitemap.xml` is intentionally a placeholder until the final production URL is known.

