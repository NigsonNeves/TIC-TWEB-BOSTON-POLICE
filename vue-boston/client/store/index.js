import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  email: null,
  password: null,
  grade: null,
  count: 0
}

const mutations = {
  authenticate(state, payload) {
    localStorage.setItem('grade', payload.grade);
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
  state,
  mutations,
  actions
})

export default store
