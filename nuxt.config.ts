// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/eslint',
  ],
  css: ['@/assets/css/main.css'],
  eslint: {
    config: {
      standalone: false,
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'in-out' },
  },
})
