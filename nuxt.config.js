const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Leon - Your Open-Source Personal Assistant',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#1c75bd' },
      { hid: 'description', name: 'description', content: 'Leon is an open-source personal assistant who can live on your server. He is built on the top of Node.js, Python and artificial intelligence concepts.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Leon - Your Open-Source Personal Assistant' },
      { name: 'og:description', content: 'Leon is an open-source personal assistant who can live on your server. He is built on the top of Node.js, Python and artificial intelligence concepts.' },
      { name: 'og:image', content: 'https://getleon.ai/img/logo_t.png' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Leon - Your Open-Source Personal Assistant' },
      { name: 'twitter:description', content: 'Leon is an open-source personal assistant who can live on your server. He is built on the top of Node.js, Python and artificial intelligence concepts.' },
      { name: 'twitter:image', content: 'https://getleon.ai/img/logo_t.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/img/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,400i,600,700' }
    ],
    htmlAttrs: {
      lang: 'en'
    },
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFF' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      'assets/scss/main.scss'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
