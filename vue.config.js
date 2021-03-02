const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

const publicPath = process.env.NODE_ENV === "production" ? "./" : "./";

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: "src/main.ts",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "sass",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },

  publicPath: publicPath,
  outputDir: "dist",

  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("_c", resolve("src/components"));
    // Object.keys(pagesObject).forEach(page => {
    //   config.plugins.delete(`preload-${page}`)
    //   config.plugins.delete(`prefetch-${page}`)
    // })
  },

  configureWebpack: {},

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/styles/index.scss";`
      }
    }
  },

  devServer: {
    // http://192.168.185.200:8083/account-support-web-api/
    open: true,
    host: "localhost",
    port: 8089,
    https: false,
    hotOnly: false,
    proxy: {
      //  将www.exaple.com印射为/apis
      // "/report": {
      //   target: "http://10.168.4.89:21569/report",
      //   // 是否跨域
      //   changeOrigin: true,
      //   pathRewrite: {
      //     //  需要rewrite的,
      //     "^/report": "report"
      //   }
      // },
      "/": {
        target: "http://10.168.4.89:21569",
        // 是否跨域
        changeOrigin: false,
        pathRewrite: {
          //  需要rewrite的,
          "^/": ""
        }
      }
    },
    before: app => {
      console.log(app);
    }
  },

  // 打包时不生成.map文件
  productionSourceMap: true
};
