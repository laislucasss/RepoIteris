import Vue from 'vue'
import VueRouter from 'vue-router'
import meuInicio from '../views/inicio.vue'
import ClubesLista from '../views/clubesLista.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'meuInicio',
    component: meuInicio
  },
  {
    path: '/classificacao',
    name: 'ClubesLista',
    component: ClubesLista
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
