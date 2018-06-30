import { login } from '@/api/login'
const user = {
  state: {
    name: '',
    avatar: '',
    roles: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    Login ({ commit }, userInfo) {
      const userName = userInfo.userName.trim()
      console.info('userName:' + userName)
      return new Promise((resolve, reject) => {
        login(userName, userInfo.password).then(response => {

        }).catch(error => {
          reject(error)
        })
      })
    }
  }

}
export default user

