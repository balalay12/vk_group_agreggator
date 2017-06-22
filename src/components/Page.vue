<template>
  <div v-if="!currentUser.auth" class="">
    Go for auth
  </div>

  <div v-else class="container">
    <div v-if="currentUser.loading" class="">
      Loading...
    </div>
    <div class="row">
      <div class="col-md-4">
        <img :src="currentUser.photo_50" alt="">
        <p>{{ currentUser.first_name}} {{ currentUser.last_name}}</p>
      </div>
      <div class="col-md-8">
        Page template
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
      'currentUser'
  ])
}
</script>
