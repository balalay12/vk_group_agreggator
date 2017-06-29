<template lang="html">
  <div class="">
    <div class="checkbox">
      <label>
        <input type="checkbox" v-model="show_form">
        {{ show_form ? 'Скрыть' : 'Показать' }} форму фильтрации
      </label>
    </div>
    <div v-show="show_form" class="col-md-12">
      <form class="form-inline">
        <h4>Фильтровать по</h4>
        <div class="form-group">
          <label>Лайкам</label>
          <input type="text" class="form-control input-sm" v-model="filters.likes">
        </div>
        <div class="form-group">
          <label>Репостам</label>
          <input type="text" class="form-control input-sm" v-model="filters.reposts">
        </div>
        <div class="form-group">
          <label>Комментариям</label>
          <input type="text" class="form-control input-sm" v-model="filters.comments">
        </div>
      </form>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  props: ['filters'],

  data() {
    return {
      show_form: false,
    }
  }
}
</script>

<style lang="css">
</style>
