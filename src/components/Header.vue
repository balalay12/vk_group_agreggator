<template>
  <div class="">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <!-- {{ Object.keys(this.$store.state.user).length != 0 ? this.$store.state.user.first_name : "Brand" }} -->
            Group aggregator
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <button
                v-if="!currentUser.auth"
                type="button"
                class="btn btn-default navbar-btn"
                @click="userLogin">Vk Auth</button>
              <button
                v-else
                type="button"
                class="btn btn-default navbar-btn"
                @click="userLogout">Vk Out</button>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },

  computed: mapGetters([
      'currentUser'
  ]),

  methods: mapActions([
    'userLogin',
    'userLogout'
  ])
}
</script>

<style>
</style>
