<template lang="html">
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
    </ul>
    <div class="panel-footer clearfix">
      Комментариев: {{ post.comments.count }} | Лайков: {{ post.likes.count }} | Репостов: {{ post.reposts.count }}
      <button type="button" class="btn btn-default pull-right" @click="wallPost">Опубликовать</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],

  methods: {
    wallPost() {
      let items = []
      for (let item in this.post.attachments) {;
        let attach_type = this.post.attachments[item].type
        if (attach_type === 'photo') {
          items.push(`${this.post.attachments[item].type}${this.post.attachments[item].photo.owner_id}_${this.post.attachments[item].photo.pid}`)
        }
      }
      VK.Api.call('wall.post', {
        // TODO: owner_id = user group id
        owner_id: this.$store.getters.currentUser.data.uid,
        // from_group: 1,
        message: this.post.text,
        attachments: items.join()
      }, (r) => {
        if (r.error) {
          console.log(r.error);
        } else {
          console.log(r.response);
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
