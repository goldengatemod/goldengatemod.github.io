import { loadLocales } from './scripts/load-locale.mjs'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  hooks: {},
  nitro: {
    preset: 'node-server',
    storage: {
      fs: {
        driver: 'fs',
        base: './.data'
      },
    },
  },
  app: {
    head: {
      title: 'Złote Wrota',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    'nuxt-svgo',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/ui',
  ],
  i18n: {
    locales: loadLocales(),
    strategy: 'no_prefix',
    defaultLocale: 'pl',
    vueI18n: './i18n/i18n.config.ts',
  },
  fonts: {
    defaults: {
      weights: [400],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
    },
    provider: 'google',
    families: [
      { name: 'Poppins' },
      { name: 'Bebas Neue' },
    ],
  },
})
