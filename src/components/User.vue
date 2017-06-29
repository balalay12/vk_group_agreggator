<template lang="html">
  <div class="col-md-4">
    <div class="media">
      <div class="media-left">
        <img class="media-object img-circle" :src="currentUser.photo_50" alt="">
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{ currentUser.first_name}} {{ currentUser.last_name}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
      'currentUser'
  ]),
}
</script>

<style lang="css">
</style>
