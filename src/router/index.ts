import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Information = () => import('@/views/Information.vue')
const Team = () => import('@/views/Team.vue')
const Contact = () => import('@/views/Contact.vue')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'information',
      component: Information
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ],
})