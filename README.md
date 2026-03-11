# jouribe.dev CV Website

This repository contains the source code for my personal curriculum vitae and portfolio website. It is designed to be fast, responsive, and visually engaging, leveraging modern web development tools.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build/) - For fast, content-focused static site generation.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
- **Animations:** [GSAP](https://gsap.com/) - Integrated with ScrollSmoother for premium, smooth scrolling and scroll-driven animations.
- **SEO:** `astro-seo` - For managing meta tags and optimizing search engine presence.
- **Linting & Formatting:** ESLint + Prettier - Ensuring clean code quality and consistent styling.

## 🛠️ Project Structure

The project has the following directory structure:

```text
/
├── public/                 # Static assets (images, fonts, robots.txt, etc.)
├── src/
│   ├── components/         # Reusable Astro components (Hero, Section, ExperienceItem, etc.)
│   ├── layouts/            # Page layouts including global configurations
│   ├── pages/              # Astro pages mapped directly to routes
│   └── styles/             # Global CSS and custom design tokens
├── astro.config.mjs        # Astro configuration
├── eslint.config.js        # ESLint flat configuration
├── .prettierrc             # Prettier formatting rules
└── package.json            # Dependencies and npm scripts
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run format`          | Formats the codebase using Prettier              |
| `npm run lint`            | Inspects the code for issues using ESLint        |

## ✨ Features

- **Dark/Light Theme:** Includes an interactive theme switch toggle natively built.
- **Responsive Timeline:** A visual, chronological layout for the Professional Experience section.
- **Skill Badges:** Custom-styled tags for technical skills.
- **Smooth Scrolling:** Uses GSAP ScrollSmoother for fluid navigation.
- **Modern Aesthetics:** Tailored color palette with subtle borders, gradients, and glowing effects.

---
*Built with [Astro](https://astro.build) 🚀*
