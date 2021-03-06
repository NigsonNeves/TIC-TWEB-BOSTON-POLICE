import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Home from '../views/users/Home'
import Inscription from '../views/users/Inscription'
import Connexion from '../views/users/Connexion'
import ValidateUser from '../views/users/ValidateUser'
import AddCrime from '../views/crimes/addCrime'
import NotFound from '../views/shared/NotFound'

Vue.use(Router)
Vue.use(BootstrapVue)

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
      path: '/validateUser',
      component: ValidateUser,
      name: 'validateUser'
    },
    {
      path: '/addCrime',
      component: AddCrime,
      name: 'addCrime'
    },
    {
      path: '*',
      component: NotFound,
      name: 'notfound'
    }
  ]
})
