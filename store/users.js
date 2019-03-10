// export const state = () => ({
  
// })

// export const getters = {

// }

// export const mutations = {
  
// }

// export const actions = {

// }
export const state = () => ({
  currentUser: null
})

export const getters = {
  currentUser (state) {
    return state.currentUser
  }
}

export const mutations = {
  setCurrentUser (state, payload) {
    state.currentUser = payload
  }
}

export const actions = {
  async createAccount ({ commit }, { email, password, name}) {
    const { data: user, headers } = await this.$axios.post('/users', { email, password, name})

    this.$cookies.set('token', headers['x-auth-token'])
    commit('setCurrentUser', user)
  }
}
