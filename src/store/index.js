import { createStore } from 'vuex'

export default createStore({
  state: {
    day: 0,
    funds: 10000,
    stocksOwned: [],
    stocksAvailable: [
      { id: 0, name: 'Microsoft', price: 75 },
      { id: 1, name: 'Apple', price: 32 },
      { id: 2, name: 'Alphabet', price: 41 },
      { id: 3, name: 'Tesla', price: 12 },
      { id: 4, name: 'Lockheed Martin', price: 76 },
      { id: 5, name: 'Boeing', price: 99 },
      { id: 6, name: 'Netflix', price: 43 },
      { id: 7, name: 'Nvidia', price: 27 },
      { id: 8, name: 'S&P500', price: 84 },
      { id: 9, name: 'Blizzard', price: 91 },
    ],
  },
  mutations: {
    incrementDay(state) {
      state.day++
    },
    updateStocksPrice(state, payload) {
      state.stocksAvailable = payload
    },
    updateFunds(state, payload) {
      state.funds = payload
    },
    addStock(state, payload) {
      state.stocksOwned = [
        ...state.stocksOwned,
        { id: payload.id, amount: payload.amount },
      ]
    },
    removeStock(state, payload) {
      state.stocksOwned = state.stocksOwned.filter(
        (item) => item.id !== payload.id
      )
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
