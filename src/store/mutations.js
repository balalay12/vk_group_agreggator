import * as types from './mutation-types'

export const mutations = {
  [types.USER_LOGIN] (state, user_payload) {
    state.user = user_payload
  },

  [types.USER_LOGOUT] (state) {
    state.user = {}
    state.groups.items = []
    state.groups.count = ''
    state.user.auth = false
  },

  [types.USER_INIT] (state, user_data) {
    user_data.loading = false
    state.user = user_data
    state.user.auth = true
  },

  [types.USER_INIT_FAULT] (state) {
    state.user.loading = false
  },

  [types.USER_LOADING] (state) {
    state.user.loading = true
  },

  [types.GROUPS_LOADING] (state) {
    state.groups.loading = true
  },

  [types.GROUPS_LOADING_SUCCESS] (state, groups_data) {
    state.groups.items = groups_data
    state.groups.loading = false
  },

  [types.GROUPS_LOADING_FAULT] (state) {
    state.groups.loading = false
  },

  [types.GROUPS_COUNT] (state, count) {
    state.groups.count = count
  }
}
