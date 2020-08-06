import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import produit from '@/components/produit.vue'
import list from '@/components/list.vue'

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
    path: '/produits',
    name: 'produits',
    component: list
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
