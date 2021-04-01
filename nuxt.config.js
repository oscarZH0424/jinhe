export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jinhe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {src:'/js/flexible.js',type:'text/javascript',charset:'utf-8'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'ant-design-vue/dist/antd.css',
    '~/assets/css/main.scss','~/assets/css/fullpage.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'@/plugins/antd-ui',ssr:true},{src:'@/plugins/fullpage',ssr:false},{src:'@/plugins/router',ssr:false}
  ],
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  router:{
    middleware:"common",
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  server:{
    port:3080,
    host:'0.0.0.0'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["ant-design-vue"],
    babel: {
      plugins: [
        [
          "import",
          {
            libraryName: "ant-design-vue",
            libraryDirectory: "es",
            style: "css" // 如果需要使用 less 方式去按需加载的话，则需要改为 true ，并且添加下面loaders 配置
          },
          "ant-design-vue"
        ]
      ]
    },
    postcss:[
      require('postcss-px2rem')({remUnit:75})
    ]
  }
}
