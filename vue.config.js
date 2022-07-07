const registerRouter = require('./backend/router')

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // `dart-sass` 是首选
        implementation: require('sass'),
        prependData: `
           @import "@/assets/scss/variable.scss";
           @import "@/assets/scss/mixin.scss";
         `
      }
    }
  },
  devServer: {
    before (app) {
      registerRouter(app)
    }
  }
}
