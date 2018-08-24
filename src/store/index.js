import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

const state = {}
const mutations = {
  // sample
  // userSet (state, userInfo) {
  //   state.userInfo = {...state.userInfo, ...userInfo}
  // }
}
const actions = {
  // sample
  // setUser ({ commit }) {}
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
