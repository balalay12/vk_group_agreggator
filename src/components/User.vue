<template lang="html">
  <div class="col-md-4">
    <div class="media">
      <div class="media-left">
        <img class="media-object img-circle" :src="currentUser.data.photo_50" alt="">
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{ currentUser.data.first_name}} {{ currentUser.data.last_name}}</h4>
      </div>
    </div>
    <hr>
    <div v-if="userGroupsLoading">
      <p>Грузим группы пльзоватетя...</p>
    </div>
    <div v-else>
      <p>{{ Object.keys(userGroup).length != 0 ? 'Сейчас выбрана: ' + userGroup.name : 'Группа не выбрана'}}</p>
      <p v-if="currentUser.groups === 0">У пользователя нет групп</p>
      <div v-else>
        <label>Выберите группу в которую будут делаться посты/репосты</label>
        <select class="form-control" v-model="selectedGroup">
          <option v-for="group in currentUser.groups" :value="group">{{ group.name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      selectedGroup: ''
    }
  },

  computed: {
    ...mapGetters([
      'currentUser',
      'userGroupsLoading',
      'userGroup'
    ]),
  },

  watch: {
    selectedGroup(val) {
      this.$store.dispatch('setUserGroup', val)
    }
  }
}
</script>

<style lang="css">
</style>
