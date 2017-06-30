import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  user: {
    data: {},
    auth: false,
    groups_loading: false,
    group: {}
  },
  groups: {
    items: [],
    loading: false
  },
  posts_loading: false
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
