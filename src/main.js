import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'

Vue.use(VueRouter)

import store from './store'


const router = new VueRouter({
  routes: [
    // { path: '/', component: App },
    // { path: '/vk-auth', component: VkAuth }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
