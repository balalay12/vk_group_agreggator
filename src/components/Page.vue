<template>
  <div v-if="!currentUser.auth" class="container">
    <h3 class="text-center">Go for auth</h3>
  </div>

  <div v-else class="container">
    <div v-if="currentUser.loading" class="">
      Loading...
    </div>
    <div class="row">
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
      <div class="col-md-8">
        <GroupsList />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GroupsList from './GroupsList.vue'

export default {
  computed: mapGetters([
      'currentUser'
  ]),

  components: {
    GroupsList
  }
}
</script>
