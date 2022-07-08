import { createApp } from 'vue'
import lazyPlugin from 'vue3-lazy'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/scss/index.scss'

createApp(App)
  .use(store)
  .use(router)
  .use(lazyPlugin, {
    loading: require('@/assets/images/default.png')
}).mount('#app')
