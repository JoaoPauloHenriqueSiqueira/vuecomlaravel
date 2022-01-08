// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App'
import routes from './router'
import VuexStore from './vuex/store'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.root = process.env.SERVER

Vue.http.interceptors.push((request, next) => {
  request.headers.set(
    'Authorization',
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMmE1ZDkxZTU0MzE3MmIwZmMyMTk2MmZmMWY1MzEwNTBhM2RjODVhMTViZmEzN2VmNDBiNTUxNmZhMzliODQ3ODZiYjU5YmIxOGE3OWQ3NTciLCJpYXQiOjE2NDAzNDg0NDYsIm5iZiI6MTY0MDM0ODQ0NiwiZXhwIjoxNjcxODg0NDQ1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.oQd8t18BEMIcM4WVPqPKeAsuMIhCkpSsN0fc9jESP3bB7S5IyKhfSGUov2pSyFpGfhm_rS8zJ_TGUSi5cGKJo5dvknngRI7rIdjqYqjJSJqxy7OjWoMYE_FzsCux_Nmm1d0yEVFhbTgqPBoEcdxuU5foctb_0amfE0zb76fMdDPoMEuE1k71jEhsajATtVwKfkUpuq6caEZIE6VKEb0yBhbVcIbVFScmXejv_RZc6OwiiXX7dLeuX7RsnefuNn4pnx9sWa18eWfgCMgxKKZRGlINSwVkf0tCH7myiwwpVJd5sUawyQ9E0BySrw_o173sHUgzzcMlJw5cTETsWoq84nvUxFmO7hienWkVsilsu7fydp37r02QVAUBLXGqoUGg8iKPOGgzbWzwTypYEfOgrX5JL1IafD-gOaOkezKxlD8FGZoTKBAZ83O_Ia1AkH0Cbb6NiK_oyrUyXO5ZVf_560-2lAiIjsDxHUsiu6Nc4bvPHhqyZ2lu-UcDV4ZwBhYXfhC8BVEtx9OQWWXX54Ft05X7lltE3cOTYQmNfBPFNx2NMDApXLEwRyS3KJd-k4rBHcNalJKppcljB0ljlLAxxz0G8xuIv3NFKZ6ChRUrbAtqC3EeGfjfIyOs2B0A9hs1wCvIQ-vclqybs5sm19qZZ9rbRY64bsllk8H49rAMyyg'
  )
  next()
})

const store = new Vuex.Store(VuexStore)

const router = new VueRouter({
  routes
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  watch: {
    $route (to, from) {
      this.$store.dispatch('clearRegistries')
    }
  },
  template: '<App/>',
  components: { App }
})
