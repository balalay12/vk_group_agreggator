<template>
  <div id="app">
    <header-app></header-app>
      <!--<router-link to="/">Home</router-link>-->
      <!--<router-link to="/vk-auth">Vk Auth</router-link>-->
      <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header.vue'

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
      if (user_data != null) {
        this.$store.dispatch('userLogin', user_data)
      }
    },
    userPhoto() {
      let store = this.$store
      VK.Api.call('users.get', {user_ids: [store.state.user.id], fields: ['photo_50']}, (photo) => {
        store.dispatch('userPhoto', photo.response[0].photo_50)
      });
    }
  },

  created() {
    this.userInit()
    this.userPhoto()
  }
}
</script>

<style>
</style>
