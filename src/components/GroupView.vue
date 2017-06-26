<template lang="html">
  <div class="container">
    <div class="page-header">
      <div class="media">
        <div class="media-left">
          <a href="#">
            <img class="media-object img-circle" :src="this.group.photo_medium" alt="">
          </a>
        </div>
        <div class="media-body">
          <h1 class="media-heading">{{ group.name }}</h1>
          <h5>{{ group.activity }}</h5>
          <h5>Количество участников: {{ group.members_count}}</h5>
        </div>
      </div>
    </div>
    <div v-if="postLoading" class="">
      Loading...
    </div>
    <div v-else class="row">
      <h5>Всего постов в группе - {{ group.posts.count }}</h5>
      <div v-for="post in group.posts" class="col-md-4">
        <h5>{{ post.text }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      group: {}
    }
  },

  methods: {
    findGroup() {
      let id = Number(this.$route.params.id)
      this.group = this.$store.state.groups.items.find(item => item.gid === id)
    }
  },

  computed: {
    postLoading() {
      return this.$store.getters.postsLoading
    }
  },

  created() {
    this.findGroup()
    if (!this.group.posts) {
      let index = this.$store.state.groups.items.indexOf(this.group)
      this.$store.dispatch('getPosts', [this.group, index])
    }
  }
}
</script>

<style lang="css">
</style>
