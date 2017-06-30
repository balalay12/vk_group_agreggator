const getters = {
  currentUser: state => state.user,
  userLoading: state => state.user.loading,
  userGroupsLoading: state => state.user.groups_loading,
  userGroup: state => state.user.group,

  groupsLoading: state => state.groups.loading,
  getGroups: state => state.groups,
  findGroup: (state, getters) => id => {
    return getters.getGroups.items.filter(item => item.gid === id)
  },
  findIdenxGroup: (state, getters) => id => {
    return getters.getGroups.items.findIndex(item => item.gid === id)
  },

  postsLoading: state => state.posts_loading,
  getPosts: (state, getters) => (id, filters) => {
    return  getters.findGroup(id)[0].posts.filter(post => {
      if (post.likes.count >= filters.likes && post.reposts.count >= filters.reposts && post.comments.count >= filters.comments) {
        return post
      }
    })
  }
}

export default getters
