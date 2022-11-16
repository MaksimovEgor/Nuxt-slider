export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tech',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    '~/assets/css/fonts.css',
  ],

  // Plugins to run befor e rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/vue-slick-carousel.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    /*  '@nuxtjs/eslint-module', */
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', '@nuxtjs/style-resources'],
  bootstrapVue: {
    icons: true,
  },
  styleResources: {
    scss: [
     /*  '~assets/scss/_variables.scss', */
      '~assets/scss/_helpers.scss',
    ],
    hoistUseStatements: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
  },
  axios: {
    // proxy: true
  },
}
