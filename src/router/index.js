import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogsView from '../views/BlogsView.vue'
import BlogDetailView from '../views/BlogDetailView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogsView
    },
    {
      path: '/blogs/:blogId',
      name: 'blogDetail',
      component: BlogDetailView
    },
    {
      path: '/create-blog',
      name: 'create-blog',
      component: () => import('../views/CreateBlogView.vue')
    }
   
  ]
})

export default router
