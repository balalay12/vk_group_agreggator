import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Page from './components/Page.vue'
import GroupView from './components/GroupView.vue'

Vue.use(VueRouter)

import store from './store'


const router = new VueRouter({
  routes: [
    { path: '/', component: Page },
    { path: '/group/:id', component: GroupView }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
