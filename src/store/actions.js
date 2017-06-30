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

export const userInit = ({commit, dispatch}) => {
  commit(types.USER_LOADING)
  VK.Api.call('users.get', {
    fields: ['photo_50']
  }, (user) => {
    try {
      dispatch('getUserGroups', user.response[0].uid)
      commit(types.USER_INIT, user.response[0])
    }
    catch(e) {
      console.log(e);
      commit(types.USER_INIT_FAULT)
    }
  });
}

export const getUserGroups = ({commit}, user_id) => {
  commit(types.USER_GROUPS_LOADING)
  VK.Api.call('groups.get', {
    user_id: user_id,
    extended: 1
    // filter: 'moder'
  }, (r) => {
    if (r.error) {
      commit(types.USER_GROUPS_LOADING_FAULT)
    } else {
      r.response.shift()
      commit(types.USER_GROUPS_LOADING_SUCCESS, r.response)
    }
  })
}

export const setUserGroup = ({commit}, group) => {
  commit(types.USER_SET_GROUP, group)
}

export const groupsSearch = ({commit, dispatch}, [keyword, count, sort]) => {
  commit(types.GROUPS_LOADING)
  VK.Api.call('groups.search', {
    q: keyword,
    type: 'group',
    count: Number(count),
    sort: Number(sort)
  }, (r) => {
    if (r.error) {
      console.log('error', r.error.error_msg);
      commit(types.GROUPS_LOADING_FAULT)
    } else {
      commit(types.GROUPS_COUNT, r.response.shift())
      let ids = []
      r.response.forEach((item, i) => {
        ids.push(item.gid)
      })
      dispatch('getGroupsById', ids)
    }
  })
}

export const getGroupsById = ({commit}, ids) => {
  VK.Api.call('groups.getById', {
    group_ids: ids.join(),
    fields: 'members_count,can_post,activity'
  }, (r) => {
    if (r.error) {
      commit(types.GROUPS_LOADING_FAULT)
    } else {
      commit(types.GROUPS_LOADING_SUCCESS, r.response)
    }
  })
}

export const fetchPosts = ({commit}, [group_id, index]) => {
  commit(types.POSTS_LOADING)
  VK.Api.call('wall.get', {
    owner_id: `-${group_id}`,
  }, (r) => {
    if (r.error) {
      commit(types.POSTS_LOADING_FAULT)
    } else {
      commit(types.POSTS_LOADING_SUCCESS, [r.response, index])
    }
  })
}

export const searchPosts = ({commit}, [group_id, index, keyword]) => {
  commit(types.POSTS_LOADING)
  VK.Api.call('wall.search', {
    query: keyword,
    owner_id: `-${group_id}`
  }, (r) => {
    if (r.error) {
      commit(types.POSTS_LOADING_FAULT)
    } else {
      commit(types.POSTS_LOADING_SUCCESS, [r.response, index])
    }
  })
}
