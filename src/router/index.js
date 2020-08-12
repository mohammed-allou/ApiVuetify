import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '../components/list'
import Home from '../views/Home'
import produit from '../components/produit'
import chariot from '../components/chariot'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produits',
    name: 'produits',
    component: list
  },
  {
    path: '/produit/:id',
    name: 'produit',
    component: produit
  },
  {
    path: '/chariot',
    name: 'chariot',
    component: chariot
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router
