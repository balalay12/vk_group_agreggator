<template>
  <div id="app">
    <header-app></header-app>
      <!--<router-link to="/">Home</router-link>-->
      <!--<router-link to="/vk-auth">Vk Auth</router-link>-->
      <!--<router-view></router-view>-->
  </div>
</template>

<script>
import Header from './header.vue'

export default {
  components: {
    'header-app': Header
  },

  data () {
    return {

    }
  },

  methods: {
    userInit() {
      let user_data = JSON.parse(localStorage.getItem('user'))
      console.log(user_data)
      if (user_data != null) {
        this.$store.dispatch('userLogin', user_data)
      }
    }
  },

  created() {
    this.userInit()
  }
}
</script>

<style>
</style>
