import { loadLocales } from './i18n/utils/loadLocales';
import { fileURLToPath } from 'node:url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  hooks: {
    'build:manifest': (manifest) => {
      // Load deferred chunks on demand; CSS and srcset select image variants.
      for (const asset of Object.values(manifest)) {
        if (asset.resourceType === 'image' || asset.resourceType === 'script') {
          asset.prefetch = false;
        }
      }
    },
  },
  nitro: {
    preset: 'static',
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      '/': { prerender: true },
    },
  },
  app: {
    head: {
      title: 'Złote Wrota',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false,
    experimental: {
      componentDetection: true,
    },
  },
  devtools: { enabled: true },
  modules: [
    'nuxt-svgo',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxtjs/seo',
  ],
  site: {
    url: 'https://goldengatemod.com',
    name: 'Złote Wrota',
  },
  sitemap: {
    autoLastmod: true,
  },
  seo: {
    // Every page supplies its own translated title.
    fallbackTitle: false,
  },
  i18n: {
    baseUrl: 'https://goldengatemod.com',
    locales: loadLocales(),
    strategy: 'prefix_and_default',
    defaultLocale: 'pl',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: false,
  },
  image: {
    format: ['avif', 'webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
    dir: 'assets/img',
    dirs: [fileURLToPath(new URL('./public', import.meta.url))],
  },
  icon: {
    clientBundle: {
      scan: true,
    },
  },
  ogImage: { zeroRuntime: true },
  svgo: {
    defaultImport: 'component',
  },
  vite: {
    build: {
      sourcemap: false,
    },
  },
});
