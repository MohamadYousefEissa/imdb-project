import { createRouter, createWebHistory } from 'vue-router'
import { filmDetails } from '@/store/filmDetails/filmDetails'

import FilmDetails from '@/views/FilmDetails.vue'
import HomePage from '@/views/HomePage.vue'
const NotFoundPage = () => import('@/views/NotFoundPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/title/:id',
      component: FilmDetails
    },
    {
      path: '/:notFound(.*)',
      component: NotFoundPage
    }
  ],
  scrollBehavior() {
    return { top: 0, left: 0, behavior: 'instant' }
  }
})
router.beforeEach((to) => {
  if (to.params.id) {
    filmDetails().fetchFilm(to.params.id as string)
  }
})
export default router
