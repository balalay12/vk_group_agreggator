import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Page from './components/Page.vue'

Vue.use(VueRouter)

import store from './store'


const router = new VueRouter({
  routes: [
    { path: '/', component: Page },
    // { path: '/vk-auth', component: VkAuth }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
