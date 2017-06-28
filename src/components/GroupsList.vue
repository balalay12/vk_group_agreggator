<template lang="html">
  <div class="">
    <GroupsSearchForm />
    <hr>
    <div class="">
      <p v-if="groupsLoading">Groups is loading...</p>
      <div v-else>
        <div v-if="getGroups.items.length > 0">
          <h6>Всего групп в ВК по этому слову: {{ getGroups.count }}</h6>
          <h4>Результаты</h4>
          <div v-for="group in getGroups.items" class="media well" @click="linkToGroup(group.gid)">
            <GroupCard :group="group" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GroupsSearchForm from './GroupsSearchForm.vue'
import GroupCard from './GroupCard.vue'

export default {
  components: {
    GroupsSearchForm,
    GroupCard
  },

  computed: mapGetters([
    'groupsLoading',
    'getGroups'
  ]),

  methods: {
    linkToGroup(id) {
      this.$router.push(`/group/${id}`)
    }
  }
}
</script>

<style lang="css">
</style>
