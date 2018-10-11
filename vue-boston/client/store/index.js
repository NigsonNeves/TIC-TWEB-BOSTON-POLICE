import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  email: null,
  password: null,
  grade: null
}

const mutations = {
  authenticate(state, payload) {
    state.email = payload.email;
    state.password = payload.password;
    state.grade = payload.grade;
  },
  signout(state) {
    state.email = null;
    state.password = null;
    state.grade = null;
  }
}

const actions = {
}

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  mutations,
  actions
})

export default store
