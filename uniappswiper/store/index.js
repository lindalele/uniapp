import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  // 在uni小程序中有vuex,在原生小程序中是使用global.data大对象,没有vuex
  state: {
    count: 100,
  },
  mutations: {
    changeCount(state, option) {
      state.count += option
    },
  },
})
