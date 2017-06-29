<template lang="html">
  <div class="container">
    <div v-if="group != 'undefined'" class="page-header">
      <div class="media">
        <div class="media-left">
          <a href="#">
            <img class="media-object img-circle" :src="group.photo_medium" alt="">
          </a>
        </div>
        <div class="media-body">
          <h1 class="media-heading">{{ group.name }}</h1>
          <h5>{{ group.activity }}</h5>
          <h5>Количество участников: {{ group.members_count}}</h5>
        </div>
      </div>
    </div>
    <div v-if="postsLoading" class="">
      Loading...
    </div>
    <div v-else class="row">
      <h5>Всего постов в группе - {{ group.posts.count }}</h5>
      <form class="form-inline">
        <label>Поиск поста</label>
        <input type="text" class="form-control input-sm" v-model="keyword">
        <button class="btn btn-default" @click.prevent="searchPosts([group.gid, findIdenxGroup(group.gid), keyword])">Поиск</button>
      </form>
      <PostsFilterForm :filters="filters" />
      <hr>
      <div v-for="post in getPosts(group.gid, filters)" class="col-md-12">
        <PostCard :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostsFilterForm from './PostsFilterForm.vue'
import PostCard from './PostCard.vue'

export default {
  data() {
    return {
      group: {},
      show_form: false,
      keyword: '',
      filters: {
        likes: 0,
        reposts: 0,
        comments: 0
      }
    }
  },

  components: {
    PostsFilterForm,
    PostCard
  },

  methods: {
    ...mapActions([
      'searchPosts'
    ])
  },

  computed: {
    ...mapGetters([
      'postsLoading',
      'findGroup',
      'findIdenxGroup',
      'getPosts'
    ])
  },

  created() {
    let group_id = Number(this.$route.params.id)
    this.group = this.findGroup(group_id)[0]
    if (typeof(this.group) === 'undefined') {
      this.$router.push('/')
    } else if (!this.group.posts) {
      let index = this.findIdenxGroup(group_id)
      this.$store.dispatch('fetchPosts', [group_id, index])
    }
  }
}
</script>

<style lang="css">
</style>
