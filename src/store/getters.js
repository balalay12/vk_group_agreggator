const getters = {
  currentUser: state => state.user,
  userLoading: state => state.user.loading,

  groupsLoading: state => state.groups.loading,
  getGroups: state => state.groups
}

export default getters
