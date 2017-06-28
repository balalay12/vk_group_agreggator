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
      <div class="checkbox">
        <label>
          <input type="checkbox" v-model="show_form">
          {{ show_form ? 'Скрыть' : 'Показать' }} форму фильтрации
        </label>
      </div>
      <div v-show="show_form" class="col-md-12">
        <form class="form">
          <!-- <div class="form-group">
            <label>Поиск по слову</label>
            <input type="text">
          </div> -->
          <div class="form-group">
            <label>Количество лайков не менее</label>
            <input type="text" v-model="filter_posts.likes">
          </div>
          <div class="form-group">
            <label>Количество репостов не менее</label>
            <input type="text" v-model="filter_posts.reposts">
          </div>
          <div class="form-group">
            <label>Количество комментариев не менее</label>
            <input type="text" v-model="filter_posts.comments">
          </div>
          <button class="btn btn-default" @click.prevent="filterPosts()">Поиск</button>
        </form>
      </div>
      <hr>

      <div v-for="post in group.posts" class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-heading">{{ new Date(post.date*1000).toLocaleString('ru-RU') }}</div>
          <div class="panel-body">
            <p v-html="post.text"></p>
            <div v-if="post.attachment">
              <div v-if="post.attachment.type === 'photo'">
                <img :src="post.attachment.photo.src_big" alt="post attachment" class="img-thumbnail">
              </div>
            </div>
          </div>

          <ul class="list-group">
            <li v-if="post.attachments" class="list-group-item">
              <div class="row">
                <div v-for="attachment in post.attachments">
                  <div v-if="attachment.type === 'photo'" class="col-md-2">
                    <img :src="attachment.photo.src" alt="post attachment" class="img-thumbnail">
                  </div>
                  <div v-if="attachment.type === 'video'">
                    <div class="media">
                      <div class="media-left">
                          <img :src="attachment.video.image_big" alt="video preview">
                      </div>
                      <div class="media-body">
                        <h4 class="media-heading">{{ attachment.video.title }}</h4>
                        <p v-html="attachment.video.description"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <h5>Комментариев: {{ post.comments.count }} | Лайков: {{ post.likes.count }} | Репостов: {{ post.reposts.count }}</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      group: {},
      show_form: false,
      filter_posts: {
        likes: 0,
        reposts: 0,
        comments: 0
      }
    }
  },

  computed: {
    ...mapGetters([
      'postsLoading',
      'findGroup',
      'findIdenxGroup'
    ])
  },

  created() {
    let group_id = Number(this.$route.params.id)
    this.group = this.findGroup(group_id)[0]
    if (typeof(this.group) === 'undefined') {
      this.$router.push('/')
    } else if (!this.group.posts) {
      let index = this.findIdenxGroup(group_id)
      this.$store.dispatch('getPosts', [group_id, index])
    }
  }
}
</script>

<style lang="css">
</style>
