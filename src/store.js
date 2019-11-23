import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    OnHomePage: false
  },
  mutations: {
    setOnHomePage (state, OnHomePage) {
      state.OnHomePage = OnHomePage
    }
  },
  getters: {
    getOnHomPage: state => state.OnHomePage
  }
})
