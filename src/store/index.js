import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
    day: 0,
    funds: 10000,
    stocksOwned: [],
    stocksAvailable: [
      {
        id: 0,
        name: 'Microsoft',
        price: 75,
        maxAmount: 0,
      },
      {
        id: 1,
        name: 'Apple',
        price: 32,
        maxAmount: 0,
      },
      {
        id: 2,
        name: 'Alphabet',
        price: 41,
        maxAmount: 0,
      },
      {
        id: 3,
        name: 'Tesla',
        price: 12,
        maxAmount: 0,
      },
      {
        id: 4,
        name: 'Lockheed Martin',
        price: 76,
        maxAmount: 0,
      },
      {
        id: 5,
        name: 'Boeing',
        price: 99,
        maxAmount: 0,
      },
      {
        id: 6,
        name: 'Netflix',
        price: 43,
        maxAmount: 0,
      },
      {
        id: 7,
        name: 'Nvidia',
        price: 27,
        maxAmount: 0,
      },
      {
        id: 8,
        name: 'Blizzard',
        price: 91,
        maxAmount: 0,
      },
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
        {
          id: payload.id,
          transactionId: uuidv4(),
          amount: payload.amount,
          buyPrice: payload.buyPrice,
        },
      ]
    },
    removeStock(state, payload) {
      state.stocksOwned = state.stocksOwned.filter(
        (item) => item.transactionId !== payload.transactionId
      )
    },
    setMaxAmount(state, payload) {
      const objRef = state.stocksAvailable.find(
        (item) => item.id === payload.id
      )
      objRef.maxAmount = payload.maxAmount
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
    buyStock({ commit, state }, payload) {
      if (payload.amount > 0) {
        const stock = state.stocksAvailable.find(
          (item) => item.id === payload.id
        )
        const updatedFunds = state.funds - stock.price * payload.amount
        commit('addStock', payload)
        commit('updateFunds', updatedFunds)
      }
    },
    sellStock({ commit, state }, payload) {
      const stock = state.stocksAvailable.find((item) => item.id === payload.id)
      const updatedFunds = state.funds + stock.price * payload.amount
      commit('removeStock', payload)
      commit('updateFunds', updatedFunds)
    },
    changeMaxAmount({ commit, state }) {
      state.stocksAvailable.forEach((item) => {
        commit('setMaxAmount', {
          id: item.id,
          maxAmount: Math.floor(state.funds / item.price),
        })
      })
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
