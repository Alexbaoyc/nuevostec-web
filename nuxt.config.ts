export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: '成都瑞纳致一 | Nuevos TEC - 链接全球，智启未来',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '成都瑞纳致一网络科技有限公司 - 企业出海、企业上云、全球贸易洞察' },
        { name: 'theme-color', content: '#0A0F1E' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap',
        },

      ],
    },
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'static',
  },
})
