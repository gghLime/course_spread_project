import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    buyType: ''
  },

  mutations: {
    updateBuyType (state, type) {
      state.buyType = type
    }
  },

  getters: {
  	getBuyType (state) {
  	  return state.buyType
  	}
  }
})

export default store
