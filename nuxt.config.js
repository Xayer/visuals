export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rabol-visuals',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
        rel: 'stylesheet',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['swiper/dist/css/swiper.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/vue-awesome-swiper.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    extend(_config, _ctx) {},
    babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'entry',
            corejs: 3,
          },
        ],
      ],
      plugins: ['@babel/transform-runtime'],
    },
  },
}
