<template lang="html">
  <div class="">
    <div class="checkbox">
      <label>
        <input type="checkbox" v-model="show_form">
        {{ show_form ? 'Скрыть' : 'Показать' }} форму
      </label>
    </div>
    <form v-show="show_form" class="form">
      <div class="form-group">
        <label>Ключевое слово</label>
        <input class="form-control" type="text" v-model="keyword">
      </div>
      <div class="from-group">
        <label>Количество записей</label>
        <select class="form-control" v-model="count">
          <option value="10" selected>10</option>
          <option value="50">50</option>
          <option value="50">100</option>
        </select>
      </div>
      <div class="from-group">
        <label>Сортировка</label>
        <select class="form-control" v-model="sort">
          <option value="0" selected>сортировать по умолчанию</option>
          <option value="1">сортировать по скорости роста</option>
          <option value="2">ортировать по отношению дневной посещаемости к количеству пользователей</option>
          <option value="3">сортировать по отношению количества лайков к количеству пользователей</option>
          <option value="4">сортировать по отношению количества комментариев к количеству пользователей</option>
          <option value="5">сортировать по отношению количества записей в обсуждениях к количеству пользователей</option>
        </select>
      </div>
      <button class="btn btn-default" @click.prevent="loadGroups">Поиск</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show_form: true,
      keyword: '',
      count: '10',
      sort: '0'
    }
  },

  methods: {
    loadGroups() {
      this.$store.dispatch('groupsSearch', [this.keyword, this.count, this.sort])
    }
  }
}
</script>

<style lang="css">
</style>
