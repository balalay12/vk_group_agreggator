<template>
  <div class="container">
    {{ this.$store.state }}
    <img :src="this.$store.state.user.photo" alt="">
    Page template
  </div>
</template>

<script>
  export default {

  }
</script>
