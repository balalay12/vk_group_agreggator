import * as types from './mutation-types'

export const userLogin = ({commit, dispatch}) => {
  commit(types.USER_LOADING)
  let permission = '262144'
  VK.Auth.login(function(response, permission) {
    if (response.session) {
      /* Пользователь успешно авторизовался */
      dispatch('userInit')
    } else {
      /* Пользователь нажал кнопку Отмена в окне авторизации */
      commit(types.USER_INIT_FAULT)
    }
  })
}

export const userLogout = ({commit}) => {
  VK.Auth.logout(function(response) {
    commit(types.USER_LOGOUT)
  })
}

export const userInit = ({commit}) => {
  commit(types.USER_LOADING)
  VK.Api.call('users.get', {
    fields: ['photo_50']
  }, (user) => {
    try {
      commit(types.USER_INIT, user.response[0])
    }
    catch(e) {
      console.log(e);
      commit(types.USER_INIT_FAULT)
    }
  });
}
