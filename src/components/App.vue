<template>
  <div id="app">
    <header-app></header-app>
      <!--<router-link to="/">Home</router-link>-->
      <!--<router-link to="/vk-auth">Vk Auth</router-link>-->
      <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from './Header.vue'

export default {
  components: {
    'header-app': Header
  },

  data () {
    return {

    }
  },

  methods: mapActions([
    'userInit'
  ]),

  created() {
    this.userInit()
  }
}
</script>

<style>
</style>
