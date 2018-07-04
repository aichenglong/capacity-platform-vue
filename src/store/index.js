import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'

Vue.use(Vuex)

const getters = {
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.app.visitedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  resource: state => state.user.resource,
  permission_routers: state => state.permission.routers,
  setting: state => state.user.setting
}

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission
  },
  getters
})
export default store
