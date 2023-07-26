import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueFormulate from '@braid/vue-formulate'
Vue.use(VueFormulate)

import './assets/main.css'

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
