/*
vuex核心函数store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

//声明Vuex
Vue.use(Vuex);

//暴露
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
