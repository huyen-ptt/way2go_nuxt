// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-swiper'],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        { src: '/js/script.js', body: true },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css' },

      ]

    }
  },

  css: [

    "~/assets/css/bootstrap.min.css",
    "~/assets/css/style.css",
    "~/assets/css/custom.css",
    "~/assets/css/mobile-custom.css",
    "~/assets/css/swiper-bundle.min.css",
    "~/assets/css/viewer.css",
    "~/assets/css/tong.css",




  ],
  plugins: [
    {
      src: 'plugins/bootstrap.mine209.js',
      mode: 'client'
    },

    {
      src: 'plugins/jquery-3.3.1.mine209.js',
      mode: 'client'
    },
    {
      src: 'plugins/popper.mine209.js',
      mode: 'client'
    },

  ],
})
