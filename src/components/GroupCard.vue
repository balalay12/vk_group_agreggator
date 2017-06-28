<template lang="html">
  <div class="">
    <div class="media-left">
      <img class="media-object img-circle" :src="group.photo" alt="">
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{ group.name }}</h4>
      <h5>{{ group.activity }}</h5>
      <h6>Количество участников: {{ group.members_count}} | Возможность разместить пост: {{ group.can_post ? 'да' : 'нет' }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: ['group']
}
</script>

<style lang="css">
</style>
