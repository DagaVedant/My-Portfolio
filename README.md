# Vedant Daga — Portfolio

A personal portfolio site for an AI/ML engineer and full-stack developer, showcasing projects across deep learning, full-stack web, and IoT.

<!-- Replace this line with a screenshot or GIF of the site -->
![Portfolio preview](./preview.png)

**[View live site →](https://dagavedant.github.io/My-Portfolio/)**

## Features

- Animated hero with a typewriter role cycle (AI Engineer → ML Developer → Full-Stack Dev → IoT Tinkerer)
- 8 project cards covering deep learning, NLP, hardware, and web — each with a GitHub link
- Tech stack grid spanning languages, ML frameworks, web tooling, and hardware
- Education, hobbies, and recognitions sections
- Scroll-reveal animations on every section using the Intersection Observer API
- Fully responsive — mobile and desktop

## Run locally

Requires **Node.js 20+**.

```bash
npm install
npm run dev
```

Open [http://localhost:5173/My-Portfolio/](http://localhost:5173/My-Portfolio/).

To build and deploy to GitHub Pages:

```bash
npm run deploy
```

## How it works

All portfolio content lives in one file — [src/data/portfolio-data.js](src/data/portfolio-data.js). Adding a project, updating the tech stack, or editing the bio means touching that file only, with no component code to change.

Scroll-reveal animations use a shared `RevealSection` wrapper ([src/components/portfolio/RevealSection.jsx](src/components/portfolio/RevealSection.jsx)) backed by `IntersectionObserver` rather than a scroll event listener. Each element unobserves itself once visible, so there are zero ongoing listeners after the page loads.

## Built with

- [React 18](https://react.dev) + [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/) — hero entrance animations
- Deployed via [GitHub Pages](https://pages.github.com) with `gh-pages`
