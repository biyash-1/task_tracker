import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Loginview from "../views/Loginview.vue"
import Signupview from '@/views/Signupview.vue'
import Dashboardview from '@/views/Dashboardview.vue'
import { useAuthStore } from '@/stores/auth'
import TaskView from '@/views/TaskView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'loginpage',
      component: Loginview
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signupview
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboardview,
      meta: {requiresAuth: true}
    },
    {
      path: '/tasks',
      name: 'task',
      component: TaskView,
      meta: {requiresAuth:true}
    }
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Redirect if route requires authentication and the user is not logged in.
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({ name: 'loginpage' });
  }
  // Redirect if the user is logged in and is trying to access login or signup page.
  else if ((to.name === 'loginpage' || to.name === 'signup') && authStore.isLoggedIn) {
    next({ name: 'dashboard' });
  }
  else {
    next();
  }
});


export default router
