const path = require('path')

function resolve(p) {
  let pa = path.resolve(__dirname, p)
  return pa
}

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 9999,
  },
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
      .rule('tsx')
      .include.add(resolve('./packages'))
      .end()
      .use('ts-loader')

    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('versatilegui', path.resolve(__dirname, 'packages'))
  },
}