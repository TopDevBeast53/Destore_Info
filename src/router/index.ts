import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainMenu from '../views/MainMenu.vue'
import SelectPlayer from '../views/SelectPlayer.vue'
import ShowRoom from '../views/ShowRoom.vue'
import WaitRoom from '../views/WaitRoom.vue'
import FinishRoom from '../views/FinishRoom.vue'
import PlayGround from '../views/PlayGround.vue'
import Garage from '../views/Garage.vue'
import SelectTrack from '../views/SelectTrack.vue'
import AuthCallBack from '../views/AuthCallBack.vue'
import LeaderBoard from '../views/LeaderBoard.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: MainMenu
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
