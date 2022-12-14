import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataAnalysis from '../views/DataAnalysis'
import Login from '../views/Login'


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'DataAnalysis',
    component: DataAnalysis

  },
  {
    path: '/login',
    name: 'Login',
    component: Login

  },
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
