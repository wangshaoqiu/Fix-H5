module.exports = {
    publicPath: '/', //根路径
    outputDir: 'dist',  //构建输出目录
    assetsDir: 'assets', //静态资源目录（js,css,img,fonts）
    lintOnSave: true,     //是否开启eslint保存监测，有效值： true || false || 'error'
    css: {
        loaderOptions: {
          css: {},
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 37.5
              })
            ]
          }
        }
    },

    devServer: {
        open: true,      //打开页面
        host: 'localhost',   //域名   127.0.0.0本机    0.0.0.0真机测试
        port: '8081',     //端口号
        https: false,    //是否使用https
        hotOnly: true,  //热更新
        proxy: {
            //配置跨域
            '/api': {
                target: 'http://tapi.neets.cc/tm/',   //协议头、域名、端口号有一个不同就是跨域
                ws: true,      //是否跨域
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};