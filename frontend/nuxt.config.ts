export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },

  runtimeConfig: {
    apiBase: process.env.NUXT_API_BASE || 'http://laravel/api',
    
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost/api',
    },
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },

  vite: {
    server: {
      watch: {
        usePolling: true,
      },
      hmr: {
        clientPort: 3000,
      },
    },
  },

  app: {
    head: {
      title: 'Marketplace',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Marketplace for digital products' }
      ]
    }
  }
})