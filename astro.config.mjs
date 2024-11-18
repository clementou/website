// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://clementou.com',
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});