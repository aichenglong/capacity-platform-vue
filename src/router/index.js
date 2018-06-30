import Vue from 'vue'
import Router from 'vue-router'
import notFond from '@/views/404.vue'
import home from '@/views/home.vue'
import menuTab from '@/views/menu/menuTab.vue'
import login from '@/views/login/index.vue'

Vue.use(Router)

let routes = [{
  path: '/login',
  component: login,
  name: '',
  hidden: true
}, {
  path: '404',
  component: notFond,
  name: '',
  hidden: true
}, {
  path: '/',
  component: home,
  name: '导航一',
  iconCls: 'el-icon-message',
  children: [{
    path: '/menuTab',
    component: menuTab,
    name: 'Tab'
  }]
}]

var router = new Router({
  routes
})
export default router
