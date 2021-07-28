export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'creditCard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    'nuxt-i18n',
  ],

  i18n: {
    langDir: '@/translations/',
    locales: [
      { code: 'pt', iso: 'pt-BR'},
    ],
    defaultLocale: 'pt',
    vueI18n: {
      fallbackLocale: 'pt',
      messages: {
        pt: {
          card: {
            cardHolder: "Titular Cartão",
            fullName: "Nome Completo",
            expires: "Expira",
            MM: "MM",
            YY: "AA"
          },
          cardForm: {
            cardNumber: "Numero do Cartão",
            cardName: "Nome Titular",
            expirationDate: "Data de Vencimento",
            month: "Mês",
            year: "Ano",
            CVV: "CVV",
            submit: "Enviar",
            invalidCardNumber: "Número do Cartão Inválido"
          }
        },
      }
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pt'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
