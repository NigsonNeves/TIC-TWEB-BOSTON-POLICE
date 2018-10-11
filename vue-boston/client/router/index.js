import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/users/Home'
import Inscription from '../views/users/Inscription'
import Connexion from '../views/users/Connexion'
import NotFound from '../views/shared/NotFound'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Home,
      name: "home"
    },
    {
      path: '/inscription',
      component: Inscription,
      name: "inscription"
    },
    {
      path: '/connexion',
      component: Connexion,
      name: 'connexion'
    },
    {
      path: '*',
      component: NotFound,
      name: 'notfound'
    }
  ]
})
