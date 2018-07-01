import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 50000
})
// request 拦截请求
service.interceptors.request.use(config => {
  console.info("axios:" +  process.env.BASE_API)
  if (store.getters.token) {
    config.headers['X-Token'] = getToken()
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})
// response 拦截器
service.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 200) {
    Message({
      message: res.data,
      type: 'error',
      duration: 5 * 1000
    })
    // 508 非法token; 512 其他客户端登录; 514 toke过期
    if (res.code === 508 || res.code === 514 || res.code === 512) {
      MessageBox.confirm('你已经登出, 可以取消继续留在该页面, 或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('fedLogout').then(() => {
          location.reload() // 重新实例化vue-router对象
        })
      })
    }
    return new Promise((resolve, reject) => {
      reject(new Error('error'))
    })
  } else {
    return response.data
  }
}, error => {
  console.error('err' + error)
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return new Promise((resolve, reject) => {
    reject(error)
  })
})

export default service
