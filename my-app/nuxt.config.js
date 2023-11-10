import getRoutes
  from './router';

const cheerio = require('cheerio');
export default {
  hooks: {
    // 取消部署后百度抓取到的无用数据
    'render:route': (url, result) => {
      //  window.__nuxt__位于body中的第一个script中 移除了body中第一个脚本标签
      let aaa = cheerio.load(result.html, {decodeEntities: false})
      aaa(`body script`).eq(0).remove()
      result.html = aaa.html()
    }
  },
  // 配置项目启动，让局域网内可以访问
  server: {
    host: '0.0.0.0',
    port: 7071
  },
  // 重定义路由
  router: {
    extendRoutes: (routes, resolve) => {
      // 清空Nuxt.js自动生成的路由
      routes.splice(0);
      // 重新将自定义路由配置设置进去
      routes.push(...getRoutes(resolve));
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '网页标签名字',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '网页说明'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      // 网页图标 在static中更换
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    {
      // 配置自定义指令
      src: '~/plugins/fonts/Medium.js',
      mode: 'client'
    },
    {
      src: '~/plugins/store-cache',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    // 是否开启跨域代理配置 根据项目酌情选择
    '@nuxtjs/proxy'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["axios"],
    extractCSS: {allChunks: true}
  }
}
