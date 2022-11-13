import { createStore } from 'vuex'

export default createStore({
  state: {
    day: 0,
    funds: 10000,
    stocksOwned: [],
    stocksAvailable: [
      { id: 0, name: 'Microsoft', price: 75 },
      { id: 0, name: 'Apple', price: 32 },
      { id: 0, name: 'Alphabet', price: 41 },
      { id: 0, name: 'Tesla', price: 12 },
      { id: 0, name: 'Lockheed Martin', price: 76 },
      { id: 0, name: 'Boeing', price: 99 },
      { id: 0, name: 'Netflix', price: 43 },
      { id: 0, name: 'Nvidia', price: 27 },
      { id: 0, name: 'S&P500', price: 84 },
      { id: 0, name: 'Blizzard', price: 91 },
    ],
  },
  mutations: {
    incrementDay(state) {
      state.day++
    },
    updateStocksPrice(state, payload) {
      state.stocksAvailable = payload
    },
  },
  actions: {
    endDay({ commit, state }) {
      const newStocksArray = state.stocksAvailable.map((item) => {
        return { ...item, price: Math.floor(Math.random() * 90 + 10) }
      })
      commit('incrementDay')
      commit('updateStocksPrice', newStocksArray)
    },
  },
  getters: {
    getMaxAmount: (state) => (id) => {
      const stock = state.stocksAvailable.find((stock) => stock.id === id)
      return Math.floor(state.funds / stock.price)
    },
  },
  modules: {},
})
