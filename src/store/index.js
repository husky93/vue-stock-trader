import { createStore } from 'vuex'

export default createStore({
  state: {
    day: 0,
    funds: 10000,
  },
  mutations: {
    incrementDay(state) {
      state.day++
    },
  },
  actions: {},
  modules: {},
})
