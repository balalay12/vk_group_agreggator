import * as types from './mutation-types'

export const userLogin = ({commit}, user_payload) => {
  commit(types.USER_LOGIN, user_payload)
}

export const userLogout = ({commit}) => {
  commit(types.USER_LOGOUT)
}

export const userPhoto = ({commit}, user_photo) => {
  commit(types.USER_PHOTO, user_photo)
}
