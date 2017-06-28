const getters = {
  currentUser: state => state.user,
  userLoading: state => state.user.loading,

  groupsLoading: state => state.groups.loading,
  getGroups: state => state.groups,
  findGroup: (state, getters) => id => {
    return getters.getGroups.items.filter(item => item.gid === id)
  },
  findIdenxGroup: (state, getters) => id => {
    return getters.getGroups.items.findIndex(item => item.gid === id)
  },

  postsLoading: state => state.posts_loading
}

export default getters
