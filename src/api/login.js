import httpUtil from '@/utils/httpUtil'

export function login (userName, password) {
  return httpUtil({
    url: '/login' + '?userName=' + userName,
    method: 'get'
  })
}

export function getInfo (token) {

}

export function logout () {

}
