# My Portfolio

A personal portfolio site for me, an aspiring AI/ML engineer and full-stack developer, showing my projects across deep learning, full-stack web, and IoT.

![Portfolio preview](public/preview.png)

**[View live site](https://dagavedant.github.io/My-Portfolio/)**

## Features
- Animated typewriter role cycle (AI Engineer -> ML Developer -> Full-Stack Dev -> IoT Tinkerer)
- Tons of customized project cards covering deep learning, NLP, hardware, and web — each with a GitHub link
- Tech stack with spaces to enter languages, ML frameworks, web tooling, and hardware you know
- Education, hobbies, and awards sections (almost like a brag sheet)
- Scroll-reveal animations using the Intersection Observer API
- Works on mobile and desktop
- Fully customizable for anyone, just fork the repositiory and fill your information at /src/data/portfolio-data.js 

## Run locally

Requires **Node.js 20 or higher**.

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

All portfolio content lives in one file — [src/data/portfolio-data.js](src/data/portfolio-data.js). Changing a projet, updating the tech stack with your new skills, or editing your socials only needs you to edit that one page. I made it spefically because I'm still a high schooler, so im learning a lot of skills, and doing more projects, so its easier for me to edit and easier for others to fork a repository for themselves and make their own website.

Scroll-reveal animations use a shared `RevealSection` wrapper ([src/components/portfolio/RevealSection.jsx](src/components/portfolio/RevealSection.jsx)) backed by `IntersectionObserver` rather than a scroll event listener. Each element unobserves itself once visible, so there are zero ongoing listeners after the page loads.

## Built with

- [React 18](https://react.dev) + [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- Deployed with [GitHub Pages](https://pages.github.com) with `gh-pages`
