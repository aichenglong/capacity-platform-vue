import httpUtil from '@/utils/httpUtil'

export function login (userName, password) {
  return httpUtil({
    url: '/user/login' + '?username' + userName,
    method: 'post'
  })
}

export function getInfo (token) {

}

export function logout () {

}
