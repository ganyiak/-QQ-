// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import index from './views/musicHall/hall'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, Axios)

Axios.defaults.withCredentials = true

const RouterConfig = {
  mode: 'history',
  routes: []
}

let indexRouter = [{
  path: '/musicHall/hall',
  name: 'index',
  meta: {
    title: 'index'
  },
  component: index
}]

routers.forEach(item => {
  let arr = []
  item.children.forEach(children => {
    if (children.children) {
      arr = [...arr, ...children.children]
    } else {
      arr.push(children)
    }
  })
  indexRouter = [...indexRouter, ...arr]
})

RouterConfig.routes = [...indexRouter]

const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
