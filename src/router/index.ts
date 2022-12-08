import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Information from '../views/Information.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'information',
    component: Information
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
