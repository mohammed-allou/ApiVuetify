import Vue from 'vue'
import VueRouter from 'vue-router'
import produit from '../components/produit'
import Home from '../views/Home'
import pain from '../components/pain'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produit',
    name: 'produit',
    component: produit
  },
  {
    path: '/pain',
    name: 'pain',
    component: pain
  }
  

]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router
