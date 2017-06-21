import * as types from './mutation-types'

export const userLogin = ({commit}, user_payload) => {
  commit(types.USER_LOGIN, user_payload)
}
