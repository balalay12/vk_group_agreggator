<template>
  <div v-if="!currentUser.auth" class="container">
    <h3 class="text-center">Go for auth</h3>
  </div>

  <div v-else class="container">
    <div v-if="currentUser.loading" class="">
      Loading...
    </div>
    <div class="row">
      <User />
      <div class="col-md-8">
        <GroupsList />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GroupsList from './GroupsList.vue'
import User from './User.vue'

export default {
  components: {
    GroupsList,
    User
  },

  computed: mapGetters([
      'currentUser'
  ]),
}
</script>
