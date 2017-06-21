import * as types from './mutation-types'

export const mutations = {
  [types.USER_LOGIN] (state, user_payload) {
    state.user = user_payload
  }
}
