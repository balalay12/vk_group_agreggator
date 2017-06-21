import * as types from './mutation-types'

export const mutations = {
  [types.USER_LOGIN] (state, user_payload) {
    state.user = user_payload
  },

  [types.USER_LOGOUT] (state) {
    state.user = {}
  },

  [types.USER_PHOTO] (state, user_photo) {
    state.user['photo'] = user_photo
  }
}
