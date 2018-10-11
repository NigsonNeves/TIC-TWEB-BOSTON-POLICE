import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  email: null,
  password: null,
  grade: null,
  count: 0
}

const mutations = {
  authenticate(state, payload) {
    state.email = payload.email;
    state.password = payload.password;
    state.grade = payload.grade;
  },
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  mutations,
  actions
})

export default store
