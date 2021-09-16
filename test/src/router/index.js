import Vue from 'vue'
import VueRouter from 'vue-router'
import Autorithe from '../views/Autorithe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Autorithe',
    component: Autorithe
  },
  {
    path: '/taskManager',
    name: 'Task Manager',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Task-tracker.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
