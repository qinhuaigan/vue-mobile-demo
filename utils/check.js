export default {
  routerAuthority: {
    '/admin': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19, 20], // 企业端 -- 首页
    '/admin/userManagement': [1, 2, 3, 4], // 管理端 -> 用户管理
    '/admin/roleManagement': [5, 6, 7, 8, 9], // 管理端 -> 角色管理
    '/admin/groupManagement': [10, 11, 12, 13], // 管理端 -> 群组管理
    '/admin/fileClassification': [17, 18, 19, 20] // 管理端 -> 文件类型
  },
  async checkRouter (router) {
    // 检测是否拥有跳转到当前路由的权限
    let authorityList = localStorage.getItem('authorityList')
    if (authorityList) {
      authorityList = authorityList.split(',')
      for (let i = 0; i < authorityList.length; i++) {
        authorityList[i] = parseFloat(authorityList[i])
      }
    } else {
      //  为了避免刷新浏览器时，延时，还没有获取到用户权限，导致无法跳转的问题
      authorityList = []
    }
    let result = false
    const needPermission = this.routerAuthority[router.path]
    if (!needPermission) {
      // 如果要跳转的页面，没有设置需要访问的权限，则默认可以访问
      result = true
    } else {
      for (let i = 0; i < authorityList.length; i++) {
        // 遍历当前角色所拥有的权限
        if (needPermission.includes(authorityList[i])) {
          result = true
          break
        }
      }
    }
    return result
  }
}
