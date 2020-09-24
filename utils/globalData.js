export default {
  // 存储全局变量
  token: null, // 登录的token
  userInfo: {}, // 登录的用户信息
  cacheData: {}, // 用户各页面数据缓存
  userPermission: null, // 当前登录用户所拥有的权限
  // 面包屑显示配置项
  breadCrumbsConfig: {
    // '/admin/userManagement': [{
    //   name: '用户',
    //   path: '/admin'
    // }
  }
}
