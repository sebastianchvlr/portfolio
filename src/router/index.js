import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Projet from '@/views/Projet.vue'
import NotFoundComponent from '@/views/NotFoundComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:slug',
      name: 'projet',
      component: Projet
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/:pathMatch(.*)*', component: NotFoundComponent }
  ]
})

export default router
