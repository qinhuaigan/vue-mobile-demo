import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {}, // 登录用户信息
    num: 0
  },
  mutations: {
    // 更新 state 中的值, 当 state 中的值更新时, 让所有用到 state 的地方, 都刷新视图
    increment (state, obj) {
      state[obj.label] = obj.value
    }
  }
})

// 拓展 Vue setStoreData() 函数,来修改 store 中的 state 对应的值
// 使用方法: this.setStoreData(label, value)
// 说明: label 对应的是 store.state 的属性名称, value 对应的是 store.state 的属性值
Vue.prototype.setStoreData = function (label, value) {
  store.commit('increment', {
    label,
    value
  })
}

export default store
