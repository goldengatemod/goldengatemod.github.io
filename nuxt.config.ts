import { i18n } from "./i18n/i18n.config";

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
      }
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    'nuxt-svgo',
    '@nuxtjs/i18n'
  ],
  i18n,
  svgo: {
    defaultImport: 'component',
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
