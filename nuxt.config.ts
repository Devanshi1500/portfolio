export default {
  target: 'static',
  cache: true,

  head: {
    titleTemplate: '%s - Devanshi Shah',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Computer Engineering Undergraduate from Mumbai. Passionate about software development, good design and growth.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'ogtitle',
        property: 'og:title',
        content: 'Devanshi Shah - Computer Engineering Undergraduate'
      },
      {
        hid: 'ogdescription',
        property: 'og:description',
        content: 'Learning and growing together is the goal.'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://rsms.me/inter/inter.css'
      }
    ]
  },

  loading: { color: '#fff' },
  css: ['@/assets/scss/main.scss'],

  plugins: ['@/plugins/composition-api'],
  modules: ['nuxt-svg-loader'],
  buildModules: ['@nuxt/typescript-build'],

  build: {
    extractCSS: true,
    babel: {
      plugins: [
        [
          'prismjs',
          {
            languages: ['javascript', 'css', 'markup', 'swift'],
            css: false
          }
        ]
      ]
    }
  },

  svgLoader: {
    svgoConfig: {
      plugins: [{ prefixIds: false }]
    }
  }
}