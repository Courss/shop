const path=require('path')

module.exports={
    dev:{
        assetsSubDirectory:'static',
        assetsPublicPath: '/',
    proxyTable: {
      '/api': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://127.0.0.1:3007', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
      },
      '/my':{
        target: 'http://127.0.0.1:3007', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
      },
      '/location':{
        target: 'http://127.0.0.1:3007', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
      }
    },
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, 
    }
}