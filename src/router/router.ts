import { createRouter, createWebHistory } from 'vue-router'
import { filmDetails } from '@/store/filmDetails/filmDetails'
const HomePage = () => import('@/views/HomePage.vue')
const FilmDetails = () => import('@/views/FilmDetails.vue')
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
  ]
})
router.beforeEach((to) => {
  window.scrollTo(0, 0)
  if (to.params.id) {
    filmDetails().fetchFilm(to.params.id as string)
  }
})
export default router
