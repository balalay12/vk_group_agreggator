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
      <li class="list-group-item">
        <h5>Комментариев: {{ post.comments.count }} | Лайков: {{ post.likes.count }} | Репостов: {{ post.reposts.count }}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="css">
</style>
