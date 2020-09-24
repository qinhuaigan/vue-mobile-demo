import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {}, // 登录用户信息
    messageNum: 0
  },
  mutations: {
    // 更新 state 中的值, 当 state 中的值更新时, 让所有用到 state 的地方, 都刷新视图
    /*
        this.$store.commit('increment', {
          name: '', // 要更新的 state 中的字段名称
          value: val // 要更新的 state 中的字段的值
        })
    */
    increment (state, obj) {
      state[obj.name] = obj.value
    }
  }
})

export default store
