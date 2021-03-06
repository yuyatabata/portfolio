import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$http = (url, opts) => fetch(url, opts)

// for production
// Vue.prototype.$httpPosts = process.env.NODE_ENV === 'production' ? '/api/posts/' : 'http://127.0.0.1:8000/api/posts/'
// Vue.prototype.$httpCategories = process.env.NODE_ENV === 'production' ? '/api/categories/' : 'http://127.0.0.1:8000/api/categories/'

Vue.prototype.$httpPosts = 'http://127.0.0.1:8000/api/posts/'
Vue.prototype.$httpCategories = 'http://127.0.0.1:8000/api/categories/'



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
