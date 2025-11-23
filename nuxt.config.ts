import { loadLocales } from './i18n/utils/loadLocales'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  hooks: {},
  nitro: {
    preset: 'static',
    compressPublicAssets: true,
    minify: true,
    publicAssets: [
      {
        maxAge: 60 * 60 * 24 * 30,
      },
    ],
    routeRules: {
      '/': { prerender: true },
      '/_ipx/q_80/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable',
        },
      },
      '/_fonts/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable',
        },
      },
      '/*.webp': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable',
        },
      },
      '/**': {
        headers: {
          'cache-control': 'public, max-age=3600, must-revalidate',
        },
      },
    },
  },
  app: {
    head: {
      title: 'Złote Wrota',
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },
  css: ['~/assets/css/main.css'],
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
  i18n: {
    locales: loadLocales(),
    strategy: 'prefix',
    defaultLocale: 'pl',
    vueI18n: './i18n/i18n.config.ts',
    detectBrowserLanguage: false,
  },
  image: {
    format: ['webp'],
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
    ipx: {
      maxAge: 31536000,
    },
  },
  svgo: {
    defaultImport: 'component',
  },
  vite: {
    build: {
      sourcemap: false,
    },
  },
})
