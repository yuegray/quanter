import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// const baseUrl = '/api/http://web.juhe.cn:8080/finance/stock/hs'
const baseUrl = 'http://web.juhe.cn:8080/finance/stock/hs'
const appKey = 'de8e74238cddba8e406fc79c2cf0c123'
const url = `${baseUrl}?key=${appKey}&gid=sh601009`

console.log(baseUrl, appKey)

Vue.use(VueAxios, axios)

function get (params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

function post (params) {
  return new Promise((resolve, reject) => {
    axios.post(url, {
      params: params
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export default
{
  get,
  post
}
