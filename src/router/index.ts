import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectsView.vue'),
      children: [
        {
          path: '',
          name: 'projects-list',
          component: () => import('../views/projects/ProjectHomeView.vue')
        },
        {
          path: 'new',
          name: 'new-project',
          component: () => import('../views/projects/NewProject.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
});

// router before each
router.beforeEach((to, from, next) => {
  console.log('before each', to, from);
  next();
});
export default router;
