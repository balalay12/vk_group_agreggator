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
    <hr>
    <div class="">
      <p v-if="groupsLoading">Groups is loading...</p>
      <div v-else>
        <div v-if="getGroups.items.length > 0">
          <h6>Всего групп в ВК по этому слову: {{ getGroups.count }}</h6>
          <h4>Результаты</h4>
          <div v-for="group in getGroups.items" class="media well" @click="linkToGroup(group.gid)">
            <div class="media-left">
              <img class="media-object img-circle" :src="group.photo" alt="">
            </div>
            <div class="media-body">
              <h4 class="media-heading">{{ group.name }}</h4>
              <h5>{{ group.activity }}</h5>
              <h6>Количество участников: {{ group.members_count}} | Возможность разместить пост: {{ group.can_post ? 'да' : 'нет' }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      show_form: true,
      keyword: '',
      count: '10',
      sort: '0'
    }
  },

  computed: mapGetters([
    'groupsLoading',
    'getGroups'
  ]),

  methods: {
    loadGroups() {
      this.$store.dispatch('groupsSearch', [this.keyword, this.count, this.sort])
    },
    linkToGroup(id) {
      this.$router.push(`/group/${id}`)
    }
  }
}
</script>

<style lang="css">
</style>
