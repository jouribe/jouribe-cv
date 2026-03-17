// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://jouribe.dev',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
