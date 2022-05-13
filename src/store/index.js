import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: null
  },
  mutations: {
    SET_AUTH_TOKEN(state, payload) {
      state.authToken = payload
    }
  },
  actions: {
    setAuthToken: ({commit}, payload) => {
      commit('SET_AUTH_TOKEN', payload) 
    }
  },
})
