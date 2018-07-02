import router from './router'
import { getToken } from './utils/auth'

const whiteList = ['/login', '/authredirect']// 不重定向白名单(避免进入死循环)

router.beforeEach((to, from, next) => {
  if (getToken()) {
    console.info('test')
    if (to.path === '/login') {
      next.path('/')
    } else {
      console.info('not login')
      next()
    }
  } else {
    console.log('from', from)
    console.log('to', to)
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      console.info('not token')
      next({path: '/login'})
    }
  }
})
