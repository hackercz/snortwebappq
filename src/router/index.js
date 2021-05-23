import { createRouter, createWebHistory } from 'vue-router'
///import Hhh from '../views/Hhh.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'Hhh',
  //   component: Hhh
  // }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
