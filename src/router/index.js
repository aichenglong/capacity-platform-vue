import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login.vue'

Vue.use(Router)

let routes = [{
  path: '/login',
  component: login,
  name: '',
  hidden: true
}]

var router = new Router({
  routes
})
export default router
