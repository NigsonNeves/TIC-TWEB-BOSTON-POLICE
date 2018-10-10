import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/users/Home'
import Inscription from '../views/users/Inscription'
import NotFound from '../views/shared/NotFound'
import Increment from '../views/shared/Increment'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/inscription',
      component: Inscription
    },
    {
      path: '/increment',
      component: Increment
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
