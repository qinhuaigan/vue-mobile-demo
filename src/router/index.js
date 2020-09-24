import Vue from 'vue'
import Router from 'vue-router'

import check from '../../utils/check.js'
import {
  Notify
} from 'vant'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld'
    // component: HelloWorld
  }]
})

router.beforeEach(async (to, from, next) => {
  // 检测登录是否已过期
  // const loginOverdue = localStorage.getItem('loginOverdue')
  // if (loginOverdue && to.path !== '/login') {
  //   next('/login')
  //   return
  // }

  // const token = localStorage.getItem('token')
  // if (!token && to.path !== '/login') {
  //   Message({
  //     type: 'warning',
  //     message: '请先登录'
  //   })
  //   next('/login')
  //   return
  // }
  /* 检测是否拥有访问当前页面的权限 */
  const checkResult = await check.checkRouter(to)
  if (checkResult) {
    next()
  } else {
    Notify({
      type: 'danger',
      message: '对不起，您暂无权限访问当前页面'
    })
  }
})

export default router
